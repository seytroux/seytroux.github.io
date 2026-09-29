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
  - estado:    opcional. Si la obra todavía no está terminada, poné
               algo como "borrador" o "en proceso" y va a aparecer
               como una marca discreta junto a la categoría. Si ya
               está terminada, no incluyas este campo.
*/

const obras = [
  {
    id: "a los lectores",
    fecha: "2026",
    categoria: "poesia",
    titulo: "A los lectores",
    resumen: "Abro las puertas de mi templo vacío",
    texto: "Abro las puertas de mi templo vacío\n\ndejando que la luna decida mi gloria\n\nmientras me humillo en pena vencido\n\ncon miedos y dolores\n\nalegrías y clamores\n\npasen y vean este crescendo sostenido\n\nmientras angustiado escribo mi memoria\n\ny cierro las puertas de mi templo vacío.",
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
    id: "la-ocupacion-del-hermano",
    fecha: "2026",
    categoria: "literatura",
    titulo: "sin título",
    estado: "borrador",
    resumen: "Caía lánguidamente la tarde en el Paraná",
    texto: "Caía lánguidamente la tarde en el Paraná un Jueves Santo cuando avistamos las máquinas virando hacia nuestras costas. Gigantes de vapor y acero volvieron sobre sus pasos. Allí mismo empezaron a bombardear, y poco pudieron hacer los hombres a bordo del 25 de Mayo para frenar a las tropas paraguayas. Una vez se hicieron con el puerto, la ciudad ya estaba perdida a manos de los hombres de Lopez.\n\nAlgunos huyeron hacia el interior, algunos se encontraron felices de la nueva ocupación y otros nos mantuvimos distantes. Lo cierto es que siempre nos quedó lejos Buenos Aires, y, durante esos días de ocupación, la gente se confinó en sus casas, confiando en que el tiempo apaciguaría estas aguas turbulentas.\n\nResultó que yo no tenía dónde caer parado el día de la invasión, por suerte llegué a un acuerdo de palabra con un dentista gallego que tenía su casa sobre la calle Santa Fe para ayudar en lo que pudiera a cambio de que me dejara quedarme ahí. Me mandó al fondo en un pequeño cuarto lleno de herramientas cubiertas de herrumbre que solo olía a humedad. Esa noche misma cayó un chaparrón que hizo que el techo de palma fuese un colador, y no tuve más remedio que correr a la casa para guarecerme de la tempestad. Ya en ese momento, me llamó la atención ver a altas horas de la noche la luz del cuarto de don Feliciano prendida, no sabía todavía qué pensar, por supuesto.",
    imagen: null
  },
  {
    id: "el-milagro-de-santa-juana",
    fecha: "2026",
    categoria: "pintura",
    titulo: "el milagro de santa juana",
    resumen: "Óleo sobre hoja, 21,6 × 33 cm",
    texto: null,
    imagen: "images/pintura-01.jpg"
  },
  {
    id: "el-milagro-de-santa-juana",
    fecha: "2026",
    categoria: "pintura",
    titulo: "el milagro de santa juana",
    estado: "borrador",
    resumen: "lápiz carbonilla sobre hoja, 21 × 29,7 cm",
    texto: null,
    imagen: "images/pintura-02.jpg"
  },
  {
    id: "foto1",
    fecha: "2025",
    categoria: "fotografia",
    titulo: "sol a través del monte",
    resumen: "riachuelo, 2025",
    texto: null,
    imagen: "images/foto-1.jpg"
  },
  {
    id: "foto2",
    fecha: "2026",
    categoria: "fotografia",
    titulo: "campo ",
    resumen: "parque ávalos, 2026",
    texto: null,
    imagen: "images/foto-2.jpg"
  },
  {
    id: "foto3",
    fecha: "2025",
    categoria: "fotografia",
    titulo: "una ventana",
    resumen: "san telmo, 2025",
    texto: null,
    imagen: "images/foto-3.jpg"
  },
  {
    id: "foto4",
    fecha: "2025",
    categoria: "fotografia",
    titulo: "dos árboles",
    resumen: "paso de la patria, 2025",
    texto: null,
    imagen: "images/foto-4.jpg"
  },
  {
    id: "foto5",
    fecha: "2025",
    categoria: "fotografia",
    titulo: "banco sobre el rio",
    resumen: "isla del cerrito, 2025",
    texto: null,
    imagen: "images/foto-5.jpg"
  },
  {
    id: "foto6",
    fecha: "2025",
    categoria: "fotografia",
    titulo: "jazmines y cielo",
    resumen: "patio de casa, 2025",
    texto: null,
    imagen: "images/foto-6.jpg"
  },
  {
    id: "foto7",
    fecha: "2026",
    categoria: "fotografia",
    titulo: "luminarias",
    resumen: "corrientes, 2026",
    texto: null,
    imagen: "images/foto-7.jpg"
  },
  {
    id: "foto8",
    fecha: "2025",
    categoria: "fotografia",
    titulo: "fisherlady",
    resumen: "corrientes, 2026",
    texto: null,
    imagen: "images/foto-8.jpg"
  },
  {
    id: "foto9",
    fecha: "2025",
    categoria: "fotografia",
    titulo: "borde",
    resumen: "ruiz de montoya, 2026",
    texto: null,
    imagen: "images/foto-9.jpg"
  }
];
