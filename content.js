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
    id: "poema-1",
    fecha: "2026",
    categoria: "poesia",
    titulo: "[A los lectores]",
    resumen: "Abro las puertas de mi templo vacío",
    texto: "dejando que la luna decida mi gloria.\n\nmientras me humillo en pena vencido.\n\ncon miedos y dolores\n\nalegrías y clamores\n\npasen y vean este crescendo sostenido\n\nmientras angustiado escribo mi memoria\n\ny cierro las puertas de mi templo vacío.",
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
