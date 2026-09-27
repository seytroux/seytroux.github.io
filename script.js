document.getElementById("anio").textContent = new Date().getFullYear();

const stream = document.getElementById("stream");
const filtros = document.querySelectorAll(".filtro");

function formatearFecha(anio) {
  return anio;
}

const etiquetas = {
  poesia: "Poesía",
  literatura: "Literatura",
  pintura: "Pintura",
  fotografia: "Fotografía"
};

function render(filtro) {
  const ordenadas = [...obras].sort((a, b) => b.fecha.localeCompare(a.fecha));
  const visibles = filtro === "todo" ? ordenadas : ordenadas.filter(o => o.categoria === filtro);

  stream.innerHTML = "";

  visibles.forEach(obra => {
    const li = document.createElement("li");
    li.className = "obra";

    li.innerHTML = `
      <button class="obra-cabecera" aria-expanded="false">
        <span class="obra-fecha">${formatearFecha(obra.fecha)}</span>
        <span class="obra-titulo">${obra.titulo}</span>
        <span class="obra-categoria">${etiquetas[obra.categoria]}${obra.estado ? ` · ${obra.estado}` : ""}</span>
      </button>
      <div class="obra-detalle"></div>
    `;

    const cabecera = li.querySelector(".obra-cabecera");
    const detalle = li.querySelector(".obra-detalle");

    if (obra.imagen) {
      const img = document.createElement("img");
      img.src = obra.imagen;
      img.alt = obra.titulo;
      img.loading = "lazy";
      detalle.appendChild(img);
    }
    if (obra.texto) {
      const p = document.createElement("div");
      p.className = "obra-texto" + (obra.categoria === "poesia" ? " centrado" : "");
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
