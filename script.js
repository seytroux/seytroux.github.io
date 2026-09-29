document.getElementById("anio").textContent = new Date().getFullYear();

const stream = document.getElementById("stream");
const filtros = document.querySelectorAll(".filtro");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function abrirLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add("visible");
}

lightbox.addEventListener("click", () => lightbox.classList.remove("visible"));

function formatearFecha(anio) {
  return anio;
}

const etiquetas = {
  poesia: "Poesía",
  literatura: "Literatura",
  pintura: "Pintura",
  fotografia: "Fotografía"
};

const orden_categorias = ["poesia", "literatura", "pintura", "fotografia"];

function intercalar(lista) {
  const grupos = orden_categorias.map(cat =>
    lista.filter(o => o.categoria === cat).sort((a, b) => b.fecha.localeCompare(a.fecha))
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

  const idxLectores = resultado.findIndex(o => o.id === "a los lectores");
  if (idxLectores > 0) {
    const [lectores] = resultado.splice(idxLectores, 1);
    resultado.unshift(lectores);
  }

  return resultado;
}

function render(filtro) {
  const visibles = filtro === "todo"
    ? intercalar(obras)
    : [...obras].filter(o => o.categoria === filtro).sort((a, b) => b.fecha.localeCompare(a.fecha));

  stream.innerHTML = "";

  visibles.forEach(obra => {
    const li = document.createElement("li");
    li.className = "obra";

    li.innerHTML = `
      ${obra.imagen ? `<img class="obra-imagen" src="${obra.imagen}" alt="${obra.titulo}" loading="lazy">` : ""}
      <button class="obra-cabecera" aria-expanded="false">
        <span class="obra-titulo">${obra.titulo}</span>
      </button>
      <div class="obra-detalle"></div>
    `;

    const cabecera = li.querySelector(".obra-cabecera");
    const detalle = li.querySelector(".obra-detalle");
    const imagenEl = li.querySelector(".obra-imagen");

    if (imagenEl) {
      imagenEl.addEventListener("click", () => abrirLightbox(obra.imagen, obra.titulo));
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
