/*
  ARCHIVO DE OBRAS
  -----------------
  Cada obra es un objeto acá abajo. Para agregar una obra nueva,
  copiá uno de los bloques { ... } de ejemplo, pegalo antes del
  corchete final ] y completá sus datos. No hace falta tocar
  ningún otro archivo.

  Campos:
  - id:        identificador único, sin espacios (ej: "poema-tres")
  - fecha:     "AAAA" (solo el año) — se usa para ordenar el archivo cronológico
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
    id: "debitum-naturae",
    fecha: "2026",
    categoria: "poesia",
    titulo: "Debitum naturae",
    resumen: "El estertor de tu velo ilumina",
    texto: "El estertor de tu velo ilumina\n\nla sombra de mi nicho titilante\n\n¡Ven a mí! ¡Ven a mí! ¡Amada mia!\n\nabandona tu transparencia flagelante\n\nCrucemos este río claudicante\n\n¡Carne, huesos y tendones calcinantes!\n\nTizón amarillo de aspecto amenazante\n\n¡Tuétanos, tibias, costillas y falanges!",
    imagen: null
  },
  {
    id: "irupe",
    fecha: "2026",
    categoria: "poesia",
    titulo: "Irupé",
    resumen: "Una vez una chica me contó",
    texto: "Una vez una chica me contó\n\nQue a la flor del Irupé visitaba\n\nCon paciencia siempre la esperaba\n\nY a ella nunca le importó\n\n¿De qué te escondes? Le imploró\n\nEn la laguna yacía tumbada\n\nProtegida en su lecho relumbraba\n\nPero ella nunca le contestó\n\nMas en una noche de luna llena\n\nDe a poco en el agua transparente\n\nBrillando cual azucena salió\n\nAl oído le susurró en pena\n\n¿Por qué te entregas a ella impotente?\n\nLa dicha de mirarla, sentenció.",
    imagen: null
  },
  {
    id: "ambidiestro",
    fecha: "2026",
    categoria: "poesia",
    titulo: "Ambidiestro",
    resumen: "Si me miro la mano izquierda",
    texto: "Si me miro la mano izquierda\n\nembriaguez, sueño y cosecha.\n\nSi me miro la mano derecha\n\nmármol, espectáculo y espada.\n\nQue mano será la sosegada.",
    imagen: null
  },
  {
    id: "nostos",
    fecha: "2025",
    categoria: "poesia",
    titulo: "Nóstos (νόστος)",
    resumen: "Sueño con un tiempo que no me pertenece",
    texto: "Sueño con un tiempo que no me pertenece\n\nPorque he de robar a aquellos que lo transitaron?\n\nVestigios de lo que miraron\n\nÁpices de lo que se les aparece.\n\nEl anhelo de uno en su hacer\n\nEs entregar todo por los que fueron y serán\n\nAjusticiados en mi injusticia descansarán\n\nLo único que quiero es permanecer.",
    imagen: null
  },
  {
    id: "laberinto",
    fecha: "2025",
    categoria: "poesia",
    titulo: "Laberinto",
    resumen: "Buscarse en este corto camino",
    texto: "Buscarse en este corto camino\n\npreguntas sin respuesta\n\nque al rodearlas se nos refleja\n\natisbos de la primitiva belleza",
    imagen: null
  },
  {
    id: "luz",
    fecha: "2025",
    categoria: "poesia",
    titulo: "Luz",
    resumen: "Vortices de luz encallase en mi piel",
    texto: "Vortices de luz encallase en mi piel\n\nComo marcas iluminando mi lecho\n\nHacenme derramar lágrimas de vida\n\nImpotente ante el desvelo de tu pecho",
    imagen: null
  },
  {
    id: "ejemplo-texto",
    fecha: "2025",
    categoria: "literatura",
    titulo: "[Título del texto o relato]",
    resumen: "Copete breve del texto",
    texto: "Acá va el cuerpo del texto en prosa. Podés escribir varios párrafos separándolos con una línea en blanco, igual que en el poema.",
    imagen: null
  },
  {
    id: "ejemplo-pintura",
    fecha: "2025",
    categoria: "pintura",
    titulo: "[Título de la obra]",
    resumen: "Óleo sobre tela, 60 × 80 cm",
    texto: null,
    imagen: "images/pintura-01.jpg"
  },
  {
    id: "ejemplo-foto",
    fecha: "2025",
    categoria: "fotografia",
    titulo: "[Título o lugar de la foto]",
    resumen: "Corrientes, 2025",
    texto: null,
    imagen: "images/foto-01.jpg"
  }
];
