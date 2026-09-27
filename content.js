/*
  ARCHIVO DE OBRAS
  -----------------
  Cada obra es un objeto acá abajo. Para agregar una obra nueva,
  copiá uno de los bloques { ... } de ejemplo, pegalo antes del
  corchete final ] y completá sus datos. No hace falta tocar
  ningún otro archivo.

  Campos:
  - id:        identificador único, sin espacios (ej: "poema-tres")
  - fecha:     "AAAA-MM-DD" — se usa para ordenar el archivo cronológico
  - categoria: "poesia" | "literatura" | "pintura" | "fotografia"
  - titulo:    título de la obra
  - resumen:   una línea o frase breve que se ve en el listado
  - texto:     (poesía / literatura) el texto completo. Usá "\n\n" para
               separar párrafos o estrofas. Dejalo en null si no aplica.
  - imagen:    (pintura / fotografía) ruta al archivo dentro de /images.
               Dejalo en null si no aplica.
*/

const obras = [
  {
    id: "ejemplo-poema",
    fecha: "2026-01-15",
    categoria: "poesia",
    titulo: "[Reemplazá con el título de tu poema]",
    resumen: "Primer verso o línea a modo de entrada",
    texto: "Acá va el texto completo del poema.\n\nCada línea en blanco separa una estrofa.\n\nBorrá este texto de ejemplo y pegá el tuyo.",
    imagen: null
  },
  {
    id: "ejemplo-texto",
    fecha: "2025-11-02",
    categoria: "literatura",
    titulo: "[Título del texto o relato]",
    resumen: "Copete breve del texto",
    texto: "Acá va el cuerpo del texto en prosa. Podés escribir varios párrafos separándolos con una línea en blanco, igual que en el poema.",
    imagen: null
  },
  {
    id: "ejemplo-pintura",
    fecha: "2025-08-20",
    categoria: "pintura",
    titulo: "[Título de la obra]",
    resumen: "Óleo sobre tela, 60 × 80 cm",
    texto: null,
    imagen: "images/pintura-01.jpg"
  },
  {
    id: "ejemplo-foto",
    fecha: "2025-06-10",
    categoria: "fotografia",
    titulo: "[Título o lugar de la foto]",
    resumen: "Corrientes, 2025",
    texto: null,
    imagen: "images/foto-01.jpg"
  }
];
