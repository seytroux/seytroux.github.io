document.getElementById("anio").textContent = new Date().getFullYear();

const stream = document.getElementById("stream");
const filtros = document.querySelectorAll(".filtro");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const lbPrev = document.getElementById("lb-prev");
const lbNext = document.getElementById("lb-next");
const lbContador = document.getElementById("lb-contador");

let galeria = [];
let galeriaIdx = 0;
let galeriaAlt = "";

function mostrarGaleria() {
  lightboxImg.src = galeria[galeriaIdx];
  lightboxImg.alt = galeriaAlt;
  const varias = galeria.length > 1;
  lbPrev.style.display = varias ? "" : "none";
  lbNext.style.display = varias ? "" : "none";
  lbContador.textContent = varias ? `${galeriaIdx + 1} / ${galeria.length}` : "";
}

function abrirLightbox(imagenes, alt) {
  galeria = imagenes;
  galeriaIdx = 0;
  galeriaAlt = alt;
  mostrarGaleria();
  lightbox.classList.add("visible");
}

function moverGaleria(paso) {
  galeriaIdx = (galeriaIdx + paso + galeria.length) % galeria.length;
  mostrarGaleria();
}

lightbox.addEventListener("click", () => lightbox.classList.remove("visible"));
lbPrev.addEventListener("click", e => { e.stopPropagation(); moverGaleria(-1); });
lbNext.addEventListener("click", e => { e.stopPropagation(); moverGaleria(1); });

let toqueX = 0;
let toqueY = 0;

lightbox.addEventListener("touchstart", e => {
  toqueX = e.changedTouches[0].clientX;
  toqueY = e.changedTouches[0].clientY;
}, { passive: true });

lightbox.addEventListener("touchend", e => {
  if (galeria.length < 2) return;
  const dx = e.changedTouches[0].clientX - toqueX;
  const dy = e.changedTouches[0].clientY - toqueY;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
    moverGaleria(dx < 0 ? 1 : -1);
  }
}, { passive: true });

document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("visible")) return;
  if (e.key === "Escape") lightbox.classList.remove("visible");
  if (e.key === "ArrowLeft" && galeria.length > 1) moverGaleria(-1);
  if (e.key === "ArrowRight" && galeria.length > 1) moverGaleria(1);
});

function formatearFecha(anio) {
  return anio;
}

const etiquetas = {
  poesia: "Poesía",
  literatura: "Literatura",
  pintura: "Pintura",
  fotografia: "Fotografía",
  arquitectura: "Arquitectura"
};

const orden_categorias = ["poesia", "literatura", "pintura", "fotografia", "arquitectura"];

function ordenarPorFecha(lista) {
  // Más reciente primero. Si dos obras comparten año, gana la que
  // esté más abajo en content.js (se asume que lo nuevo se agrega al final).
  const ordenada = [...lista].sort((a, b) => {
    const porFecha = b.fecha.localeCompare(a.fecha);
    if (porFecha !== 0) return porFecha;
    return obras.indexOf(b) - obras.indexOf(a);
  });

  const idx = ordenada.findIndex(o => o.id === "a los lectores");
  if (idx > 0) {
    const [lectores] = ordenada.splice(idx, 1);
    ordenada.unshift(lectores);
  }
  return ordenada;
}

function intercalar(lista) {
  const grupos = orden_categorias.map(cat =>
    ordenarPorFecha(lista.filter(o => o.categoria === cat))
  );

  const resultado = [];
  let i = 0;
  let quedan = true;
  while (quedan) {
    quedan = false;
    for (const grupo of grupos) {
      if (grupo[i]) {
        resultado.push(grupo[i]);
        quedan = true;
      }
    }
    i++;
  }

  return resultado;
}

function render(filtro) {
  const visibles = filtro === "todo"
    ? intercalar(obras)
    : ordenarPorFecha(obras.filter(o => o.categoria === filtro));

  stream.innerHTML = "";

  visibles.forEach(obra => {
    const li = document.createElement("li");
    li.className = "obra";

    const imagenes = obra.imagenes && obra.imagenes.length
      ? obra.imagenes
      : (obra.imagen ? [obra.imagen] : []);

    li.innerHTML = `
      ${imagenes.length ? `<img class="obra-imagen" src="${imagenes[0]}" alt="${obra.titulo}" loading="lazy">` : ""}
      <button class="obra-cabecera" aria-expanded="false">
        <span class="obra-titulo">${obra.titulo}</span>
      </button>
      <div class="obra-detalle"></div>
    `;

    const cabecera = li.querySelector(".obra-cabecera");
    const detalle = li.querySelector(".obra-detalle");
    const imagenEl = li.querySelector(".obra-imagen");

    if (imagenEl) {
      imagenEl.addEventListener("click", () => abrirLightbox(imagenes, obra.titulo));
    }

    if (obra.estado) {
      const estadoEl = document.createElement("p");
      estadoEl.className = "obra-categoria";
      estadoEl.textContent = obra.estado;
      detalle.appendChild(estadoEl);
    }

    const fechaEl = document.createElement("p");
    fechaEl.className = "obra-fecha";
    fechaEl.textContent = formatearFecha(obra.fecha);
    detalle.appendChild(fechaEl);

    if (obra.resumen && !obra.texto) {
      const resumenEl = document.createElement("p");
      resumenEl.className = "obra-resumen";
      resumenEl.textContent = obra.resumen;
      detalle.appendChild(resumenEl);
    }

    if (obra.texto) {
      const p = document.createElement("div");
      p.className = "obra-texto";
      p.innerHTML = obra.texto.split("\n\n").map(par => `<p>${par}</p>`).join("");
      detalle.appendChild(p);
    }

    cabecera.addEventListener("click", () => {
      const abierta = li.classList.toggle("abierta");
      cabecera.setAttribute("aria-expanded", abierta);
    });

    stream.appendChild(li);
  });
}

filtros.forEach(enlace => {
  enlace.addEventListener("click", e => {
    e.preventDefault();
    filtros.forEach(f => f.classList.remove("activo"));
    enlace.classList.add("activo");
    render(enlace.dataset.filter);
  });
});

render("todo");
