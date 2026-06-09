// script.js
// Importa las listas de verbos, pronombres y conjugaciones del diccionario.

// script.js
console.log('script3.js: Script cargado y comenzando ejecución.');

// Imports consolidados: Asegúrate de que cada archivo se importe solo una vez
// y que se traigan todas las variables y funciones necesarias.

import { verbosCapitalizados, pronombresCapitalizados, conjugaciones } from './diccionario_conjugaciones.js';
import { explicacionesVerbos } from './explicacion_de_Verbos.js'; // Asumo que este archivo es correcto y necesario
import { explicacionesTiempos } from './explicaciones_Tiempos.js'; // Asumo que este archivo es correcto y necesario
import { actividadesIndefinidoImperfectoData } from './actividades_indefinido_imperfecto.js'; // Asumo que este archivo es correcto y necesario

// Esta es la importación correcta para explicacionesIrregularidadesTiempos,
// ya que incluye todas las funciones y objetos que hemos estado trabajando.
import { explicacionesIrregularidadesTiempos, generarHtmlExplicacionTiempoIrregularidad, formatIrregularityExample, capitalizeFirstLetter, todosLosTiemposVerbales } from './explicacion_irregularidades_tiempos.js';

// === SILABOS: fondo híbrido (rejilla synthwave solo en zonas de juego) ===
function setGameBackground(on){
  try { document.body.classList.toggle('grid-on', !!on); } catch(e){}
}
if (typeof window !== 'undefined') window.setGameBackground = setGameBackground;

// === SILABOS: fila de menú "a lo largo" (icono + título + descripción) ===
function crearRowCard(iconId, accent, titulo, descripcion, onClick){
  const btn = document.createElement('button');
  btn.className = 'row-card';
  btn.style.setProperty('--accent', accent);
  btn.innerHTML = `
    <span class="icwrap"><svg class="ico" viewBox="0 0 24 24"><use href="#${iconId}"/></svg></span>
    <span class="txt"><h3>${titulo}</h3><p>${descripcion}</p></span>
  `;
  if (typeof onClick === 'function') btn.addEventListener('click', onClick);
  return btn;
}
if (typeof window !== 'undefined') window.crearRowCard = crearRowCard;

// === SILABOS: icono + color por tipo de categoría del juego ===
// Cada tiempo verbal tiene SUS propias categorías. Mapeamos cada typeMatch a su
// icono/color. Si un tipo no tiene icono SVG propio, se conserva el emoji original
// del nombre (que ya es específico y correcto) y solo se aplica color neutro.
function _tipoCategoria(typeMatch){
  const t = (typeMatch || '').toLowerCase();
  if (t === 'bota y sombrero' || (t.includes('bota') && t.includes('sombrero'))) return 'bs';
  if (t === 'sombrero') return 'somb';
  if (t === 'bota') return 'bota';
  if (t === 'irregularidad total') return 'total';
  if (t === 'irregularidad radical') return 'radical';
  if (t === 'participio irregular') return 'participio';
  if (t.includes('regular')) return 'reg';      // "Regular" / "Participio Regular"
  return 'otro';                                 // cambio ortográfico, 3ª persona, mantiene vocal...
}
function decorarCategoria(nombre, typeMatch){
  const tipo = _tipoCategoria(typeMatch);
  // Solo estos tipos tienen icono SVG propio y fiel a la infografía:
  const iconMap = {
    bota:'cat-bota',
    somb:'cat-somb',
    bs:'cat-bs',
    total:'cat-alien',      // 👽 irregularidad total
    radical:'cat-radical',  // ✨ raíz/estrella → irregularidad radical (NO regular)
    reg:'cat-check'         // ✅ regular
  };
  const iconId = iconMap[tipo];
  if (iconId){
    // Quitar emojis del nombre y poner el icono SVG
    const limpio = (nombre || '').replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\u{2700}-\u{27BF}\uFE0F\u{1F300}-\u{1F9FF}]/gu, '').trim();
    return `<svg class="catico" viewBox="0 0 24 24"><use href="#${iconId}"/></svg><span>${limpio}</span>`;
  }
  // Sin icono propio: conservamos el nombre con su emoji original (correcto por tiempo)
  return `<span class="cat-emoji">${nombre}</span>`;
}
function claseCategoria(typeMatch){
  return 'dz-' + _tipoCategoria(typeMatch);
}
if (typeof window !== 'undefined'){ window.decorarCategoria = decorarCategoria; window.claseCategoria = claseCategoria; }

// === SILABOS: fila ancha (a lo largo) para selectores de tiempo ===
// Ejemplo representativo por tiempo (hablar) como descripción breve y útil.
const _ejemploTiempo = {
  'presente':'yo hablo, tú hablas…',
  'pretérito perfecto':'yo he hablado…',
  'pretérito indefinido':'yo hablé, tú hablaste…',
  'pretérito imperfecto':'yo hablaba…',
  'pluscuamperfecto':'yo había hablado…',
  'futuro':'yo hablaré…',
  'condicional':'yo hablaría…',
  'presente de subjuntivo':'que yo hable…',
  'imperfecto de subjuntivo':'que yo hablara…',
  'pluscuamperfecto de subjuntivo':'que yo hubiera hablado…'
};
function crearRowTiempo(tiempo, accent, onClick){
  const titulo = tiempo.charAt(0).toUpperCase() + tiempo.slice(1);
  const desc = _ejemploTiempo[tiempo.toLowerCase()] || '';
  const btn = document.createElement('button');
  btn.className = 'row-card';
  btn.style.setProperty('--accent', accent);
  btn.innerHTML = `
    <span class="icwrap"><svg class="ico" viewBox="0 0 24 24"><use href="#i-clock"/></svg></span>
    <span class="txt"><h3>${titulo}</h3>${desc ? `<p>${desc}</p>` : ''}</span>
  `;
  if (typeof onClick === 'function') btn.addEventListener('click', onClick);
  return btn;
}
if (typeof window !== 'undefined') window.crearRowTiempo = crearRowTiempo;


// --- Variables Globales ---

let puntuacion = 0; // Puntuación actual del usuario.
let currentVerbo = ""; // Almacena el verbo actual en la actividad de tiempos verbales.
let currentPronombre = ""; // Almacena el pronombre actual en la actividad de tiempos verbales.
let respuestasInputs = {}; // Objeto para guardar referencias a los campos de entrada de respuestas.
let indicePregunta = 0; // Índice para la pregunta actual en la actividad de opción múltiple.
// Variables globales para la actividad "Todo o una parte" (ya las deberías tener)
let preguntaActualIndexTodoParte = 0;
let respuestasUsuarioTodoParte = [];
let shuffledPreguntasTodoParte = []; // NUEVA: Para almacenar las preguntas mezcladas
// NUEVAS Variables globales para la actividad "Antes o Después"
let preguntaActualIndexOpcionMultiple = 0;
let respuestasUsuarioOpcionMultiple = []; // Para almacenar si la respuesta fue correcta
let shuffledPreguntasOpcionMultiple = []; // NUEVA: Para almacenar las preguntas mezcladas
// NUEVAS Variables globales para la actividad "¿Cómo era? o ¿Cómo fue?"
let preguntaActualIndexComoEraOFue = 0;
let respuestasUsuarioComoEraOFue = [];
let shuffledPreguntasComoEraOFue = [];
// Array que almacena los tiempos verbales que el usuario ha seleccionado para practicar.
// Se inicializa con todos los tiempos por defecto.
let tiemposSeleccionadosUsuario = ["presente"];
// --- NUEVAS VARIABLES DE ESTADO PARA LA SECCIÓN DE IRREGULARIDADES ---
let currentSelectedTheoryTime = null; // Almacena el tiempo verbal seleccionado en la sección de teoría de irregularidades.
let currentSelectedBroadCategory = null; // Almacena la categoría amplia de irregularidad seleccionada (ej. "Bota", "Sombrero").
// Variables para el juego de arrastrar
let irregularVerbsListContainer = null; // Se inicializará en displayTimeSelection
let arrastrarVerboActual = null; // El verbo que se está arrastrando
let basicRowContainer = null;
let intermediateRowContainer = null;
let advancedRowContainer = null;
let verbosSeleccionadosUsuario = [...verbosCapitalizados]; // Copia de todos los verbos disponibles
let corregirAcentos = true; // Por defecto, la corrección de acentos estará activada.
let haSidoVerificado = false; // Bandera para saber si el verbo actual ya se verificó.

const appContainer = document.getElementById('app-container');
console.log('script3.js: Referencia a appContainer:', !!appContainer); // Verifica si appContainer es válido.

// --- Detección de dispositivo táctil ---
// Esta variable será crucial para renderizar la interfaz condicionalmente
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
console.log('[DEBUG] ¿Es dispositivo táctil?', isTouchDevice);

// Función auxiliar para mezclar arrays (Algoritmo de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
    }
    return array;
}

// Este mapa traduce las posibles variaciones de nombres de tiempos verbales
// a las claves EXACTAS que se usan en su objeto 'explicacionesTiempos'.
const tiempoKeyMap = {
    // Variaciones que pueden venir del botón o 'todosLosTiemposVerbales'
    "preterito indefinido": "indefinido",
    "pretérito indefinido": "indefinido",
    "Pretérito indefinido": "indefinido",
    "Pretérito Indefinido": "indefinido",
    "Indefinido": "indefinido", // Si el botón envía "Indefinido" (capitalizado)
    "el indefinido": "indefinido",
    "indefinido": "indefinido", // Si el botón ya envía "indefinido" (minúsculas)

    "preterito imperfecto": "imperfecto",    
    "pretérito imperfecto": "imperfecto",
    "Pretérito imperfecto": "imperfecto",
    "Pretérito Imperfecto": "imperfecto",
    "Imperfecto": "imperfecto", // Si el botón envía "Imperfecto" (capitalizado)
    "el imperfecto": "imperfecto",
    "imperfecto": "imperfecto", // Si el botón ya envía "imperfecto" (minúsculas)

    // Es importante que aquí añada cualquier otra clave de 'explicacionesTiempos'
    // si sus botones tienen variaciones de nombres, ej:
    // "Presente": "presente de indicativo", // Si el botón dice "Presente" y la clave es "presente de indicativo"
    // "Futuro": "futuro simple" // Si el botón dice "Futuro" y la clave es "futuro simple"
};
// Mapeo de tiempos verbales a colores hexadecimales para indicar dificultad
const tiempoDificultadColores = {
    // Nivel Básico (Azul claro: rgba(255,255,255,0.045))
    "presente": { bg: "rgba(255,255,255,0.045)", hoverBg: "rgba(255,255,255,0.07)" }, // Un azul ligeramente más oscuro para hover
    "pretérito perfecto": { bg: "rgba(255,255,255,0.045)", hoverBg: "rgba(255,255,255,0.07)" },
    "pretérito indefinido": { bg: "rgba(255,255,255,0.045)", hoverBg: "rgba(255,255,255,0.07)" },
    "pretérito imperfecto": { bg: "rgba(255,255,255,0.045)", hoverBg: "rgba(255,255,255,0.07)" },

    // Nivel Intermedio (Gris medio: #9A9AB0)
    "futuro": { bg: "rgba(255,255,255,0.10)", hoverBg: "#9A9AB0" }, // Un gris ligeramente más oscuro para hover
    "condicional": { bg: "rgba(255,255,255,0.10)", hoverBg: "#9A9AB0" },
    "pluscuamperfecto": { bg: "rgba(255,255,255,0.10)", hoverBg: "#9A9AB0" },
    "presente de subjuntivo": { bg: "rgba(255,255,255,0.10)", hoverBg: "#9A9AB0" },

    // Nivel Avanzado (Rosa vibrante: #FF2DA6)
    "imperfecto de subjuntivo": { bg: "#FF2DA6", hoverBg: "#C81E86" }, // Un rosa ligeramente más oscuro para hover
    "pluscuamperfecto de subjuntivo": { bg: "#FF2DA6", hoverBg: "#C81E86" }
};

// Estilos uniformes para los botones de tiempo y de Regulares/Irregulares
const uniformButtonStyles = {
    paddingTop: '1.25rem', // Altura
    paddingBottom: '1.25rem', // Altura
    paddingLeft: '1.5rem', // Ancho
    paddingRight: '1.5rem', // Ancho
    minWidth: '170px', // Ancho mínimo para que el texto quepa
    height: 'auto', // Altura automática según el contenido
    fontSize: '1rem', // Tamaño de texto estándar
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textAlign: 'center',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
    transform: 'scale(1)',
    color: '#EDEDF5' // Color del texto del botón (claro, legible sobre superficie oscura)
};

    // Función auxiliar para crear y añadir botones a un contenedor de fila
    const createAndAppendButtons = (timesArray, rowContainer, defaultColor) => {
        timesArray.forEach(tiempoKey => {
            const button = document.createElement('button');
            button.textContent = tiempoKey.charAt(0).toUpperCase() + tiempoKey.slice(1);

            const colors = tiempoDificultadColores[tiempoKey] || defaultColor;

            // Aplicar estilos uniformes
            Object.assign(button.style, uniformButtonStyles);
            button.style.backgroundColor = colors.bg;
            // Texto oscuro si el fondo es un color vivo (rosa); claro si es superficie translúcida
            button.style.color = (typeof colors.bg === 'string' && colors.bg.startsWith('#')) ? '#0A0A12' : '#EDEDF5';

            // Añadir eventos para el efecto hover
            button.onmouseover = () => {
                button.style.backgroundColor = colors.hoverBg;
                button.style.transform = 'scale(1.05)';
            };
            button.onmouseout = () => {
                button.style.backgroundColor = colors.bg;
                button.style.transform = 'scale(1)';
            };

            button.addEventListener('click', () => {
                currentSelectedTheoryTime = tiempoKey;
                displayRegularIrregularChoice();
            });
            rowContainer.appendChild(button);
        });
    };

// Function is in script3.js
// It imports explicacionesIrregularidadesTiempos, capitalizeFirstLetter, getConjugationExamples, processConjugatedStringForDisplay

/**
 * Muestra la explicación específica para los Verbos Regulares para el tiempo verbal dado,
 * obteniendo los datos de la estructura 'explicacionesIrregularidadesTiempos'.
 * @param {string} tiempoKey La clave del tiempo verbal (ej. "presente", "pretérito perfecto").
 */
function displayRegularVerbsExplanation(tiempoKey) {
    limpiarContenedor(); // Limpia el contenedor principal de la aplicación

    const explanationBox = document.createElement('div');
    explanationBox.classList.add('explanation-box');
    Object.assign(explanationBox.style, {
        maxWidth: '800px',
        margin: '20px auto',
        padding: '25px',
        backgroundColor: 'var(--color-background-secondary, #0E0E1A)',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
        color: 'var(--color-text-light, #EDEDF5)'
    });

    const explicacionTiempo = explicacionesIrregularidadesTiempos[tiempoKey];
    let data = null;

    if (explicacionTiempo && explicacionTiempo.tiposIrregularidad) {
        // Buscar el objeto de "Verbos Regulares" o "Participio Regular" dentro del array tiposIrregularidad
        if (tiempoKey === "pretérito perfecto" || tiempoKey === "pluscuamperfecto" || tiempoKey === "futuro perfecto" || tiempoKey === "condicional perfecto" || tiempoKey === "presente perfecto de subjuntivo" || tiempoKey === "pluscuamperfecto de subjuntivo") {
            data = explicacionTiempo.tiposIrregularidad.find(tipo => tipo.nombre === "Participio Regular");
        } else {
            data = explicacionTiempo.tiposIrregularidad.find(tipo => tipo.nombre === "Verbos Regulares");
        }
    }

    if (!data) {
        // Manejar caso donde no hay datos para el tiempo verbal o la estructura de regulares no existe
        const errorTitle = document.createElement('h2');
        errorTitle.textContent = `Explicación de Verbos Regulares para ${capitalizeFirstLetter(tiempoKey)} (No Disponible)`;
        Object.assign(errorTitle.style, {
            color: 'var(--color-primary, #39FF14)',
            marginBottom: '20px',
            textAlign: 'center'
        });
        explanationBox.appendChild(errorTitle);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = "Lo sentimos, la explicación para verbos regulares/participio regular de este tiempo verbal aún no ha sido añadida en la estructura de explicaciones o la clave 'nombre' no es la esperada.";
        Object.assign(errorMessage.style, {
            marginBottom: '15px',
            lineHeight: '1.6'
        });
        explanationBox.appendChild(errorMessage);
        const backButtonError = createBackButtonForRegularExplanation();
        explanationBox.appendChild(backButtonError);
        appContainer.appendChild(explanationBox);
        return;
    }

    const title = document.createElement('h2');
    title.textContent = data.nombre; // Ahora usamos 'nombre' como el título
    Object.assign(title.style, {
        color: 'var(--color-primary, #39FF14)',
        marginBottom: '20px',
        textAlign: 'center'
    });
    explanationBox.appendChild(title);

    const paragraph1 = document.createElement('p');
    paragraph1.textContent = data.descripcion; // Usamos 'descripcion' como la descripción
    Object.assign(paragraph1.style, {
        marginBottom: '15px',
        lineHeight: '1.6'
    });
    explanationBox.appendChild(paragraph1);

    // Los "endings" no están directamente estructurados en el objeto "Verbos Regulares" de tu archivo.
    // Si necesitas mostrarlos, tendrías que añadirlos manualmente a la descripción o al objeto de datos.
    // Por ahora, omitimos la sección de 'endings'.

    // Mostrar ejemplos de conjugación si están disponibles
    if (data.verbosEjemplo && data.verbosEjemplo.length > 0) { // Usamos 'verbosEjemplo'
        const examplesTitle = document.createElement('h3');
        examplesTitle.textContent = "Ejemplos de conjugación:";
        Object.assign(examplesTitle.style, {
            color: 'var(--color-primary, #39FF14)',
            marginTop: '20px',
            marginBottom: '10px'
        });
        explanationBox.appendChild(examplesTitle);

        const exampleList = document.createElement('ul');
        Object.assign(exampleList.style, {
            listStyleType: 'none',
            paddingLeft: '0',
            marginBottom: '20px'
        });

        const defaultPersons = ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"];

        data.verbosEjemplo.forEach(example => { // Iteramos sobre 'verbosEjemplo'
            const listItem = document.createElement('li');
            listItem.style.marginBottom = '8px';

            const personsToConjugate = (example.personas && example.personas.length > 0) ? example.personas : defaultPersons;
            // IMPORTANTE: Pasamos tiempoKey como el tiempo verbal para la conjugación
            const conjugatedString = getConjugationExamples(example.verbo, personsToConjugate, tiempoKey);
            const processedConjugatedString = processConjugatedStringForDisplay(conjugatedString);

            if (processedConjugatedString.trim() !== '') {
                listItem.innerHTML = `
                    <strong style="color: var(--color-primary, #39FF14);">${capitalizeFirstLetter(example.verbo)}:</strong>
                    <span style="color: var(--color-text-light, #EDEDF5);">${processedConjugatedString}</span>
                `;
            } else {
                listItem.innerHTML = `
                    <strong style="color: var(--color-primary, #39FF14);">${capitalizeFirstLetter(example.verbo)}:</strong>
                    <span style="color: var(--color-text-light, #EDEDF5);">[Conjugación no disponible para este verbo o tiempo]</span>
                `;
                console.warn(`No se pudo obtener la conjugación para el ejemplo de verbo regular: ${example.verbo} en ${tiempoKey}`);
            }
            exampleList.appendChild(listItem);
        });
        explanationBox.appendChild(exampleList);
    }

    // Botón de Volver
    const backButton = createBackButtonForRegularExplanation();
    explanationBox.appendChild(backButton);

    appContainer.appendChild(explanationBox);
}

// Función auxiliar para crear el botón de volver (mantenida igual)
// Asegúrate de que esta es la función createBackButtonForRegularExplanation en tu script3.js
function createBackButtonForRegularExplanation() {
    console.log('script3.js:259 createBackButtonForRegularExplanation() iniciada.');

    const backButton = document.createElement('button');
    backButton.textContent = 'Volver a Elección';
    backButton.classList.add('back-button'); // Si tienes una clase CSS para estilos
    backButton.style.marginTop = '30px';
    backButton.style.display = 'block';
    backButton.style.marginRight = 'auto';
    backButton.style.marginLeft = 'auto';

    // *** CAMBIOS AQUÍ ***
    backButton.addEventListener('click', () => {
        console.log('script3.js:274 Botón "Volver a la elección" clicado. Intentando llamar a displayRegularIrregularChoice().');
        // AÑADIMOS ESTOS LOGS CRÍTICOS:
        console.log('script3.js: DEBUG: Tipo de displayRegularIrregularChoice:', typeof displayRegularIrregularChoice); 
        try {
            displayRegularIrregularChoice();
        } catch (e) {
            console.error("script3.js: ERROR: Fallo al llamar a displayRegularIrregularChoice():", e);
        }
    });
    // *** FIN DE CAMBIOS ***

    console.log('script3.js:278 Botón de volver creado y event listener asignado.');
    return backButton; // Asegúrate de que esta función devuelve el botón para que pueda ser añadido al DOM principal
}

// Asegúrate de que esta función esté presente y NO comentada
function processConjugatedStringForDisplay(originalString) {
    const match = originalString.match(/^\*([^*]+)\*\s*\((.*)\)$/);
    if (match) {
        const verb = match[1];
        const conjugation = match[2];
        return `<strong style="color: #00C8FF;">${verb}</strong> (<span style="color: hotpink;">${conjugation}</span>)`;
    }
    return originalString;
}

// Asegúrate de que esta función esté presente y NO comentada
function styleNotesContent(notesString) {
    if (!notesString) return '';

    const unstyledWords = new Set([
        "no", "y", "o", "a", "de", "con", "en", "para", "por", "sin", "sobre", "tras",
        "e", "u", "ni", "que", "se", "lo", "la", "los", "las", "un", "una", "unos", "unas",
        "el", "al", "del", "es", "está", "están", "son", "un", "una", "unos", "unas", "al", "del"
    ]);

    const blueAndPinkProcessed = processConjugatedStringForDisplay(notesString);
    if (blueAndPinkProcessed !== notesString) {
        return blueAndPinkProcessed;
    }

    let resultHtml = '';
    let lastIndex = 0;
    const parenthesisPattern = /\(([^)]+)\)/g;
    let match;

    while ((match = parenthesisPattern.exec(notesString)) !== null) {
        resultHtml += notesString.substring(lastIndex, match.index).replace(/(\b[\p{L}'-]+\b)|([^\p{L}'-])/gu, (wordMatch, word, nonWordChar) => {
            if (word) {
                return unstyledWords.has(word.toLowerCase()) ? word : `<strong style="color: hotpink;">${word}</strong>`;
            }
            return nonWordChar;
        });

        const contentInsideParentheses = match[1];
        resultHtml += `(<span style="color: hotpink;">${contentInsideParentheses}</span>)`;
        lastIndex = parenthesisPattern.lastIndex;
    }

    let remainingText = notesString.substring(lastIndex);
    remainingText = remainingText.replace(/(\b[\p{L}'-]+\b)|([^\p{L}'-])/gu, (wordMatch, word, nonWordChar) => {
        if (word) {
            return unstyledWords.has(word.toLowerCase()) ? word : `<strong style="color: hotpink;">${word}</strong>`;
            }
            return nonWordChar;
        });
    resultHtml += remainingText;

    return resultHtml;
}

// Asegúrate de que esta función esté presente y NO comentada
function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Asegúrate de que esta función esté presente y NO comentada
function getConjugationExamples(verbName, personsArray, tense) {
    console.log(`DEBUG: getConjugationExamples llamada con: verbName='${verbName}', tense='${tense}'`);
    const lowerCaseVerbName = verbName.toLowerCase();

    // --- INICIO: NUEVA LÓGICA DE MAPEO DE TIEMPOS ---
    let effectiveTense = tense; // Por defecto, usamos el tiempo recibido
    if (tense === "pretérito indefinido") {
        effectiveTense = "indefinido"; // Si es "pretérito indefinido", lo mapeamos a "indefinido"
    } else if (tense === "pretérito imperfecto") {
        effectiveTense = "imperfecto"; // Si es "pretérito imperfecto", lo mapeamos a "imperfecto"
    }
    // --- FIN: NUEVA LÓGICA DE MAPEO DE TIEMPOS ---

    console.log(`DEBUG: lowerCaseVerbName='${lowerCaseVerbName}', effectiveTense='${effectiveTense}'`);
    console.log(`DEBUG: conjugaciones existe: ${!!conjugaciones}`);
    if (conjugaciones) {
        console.log(`DEBUG: conjugaciones[lowerCaseVerbName] existe: ${!!conjugaciones[lowerCaseVerbName]}`);
    }

    if (!conjugaciones[lowerCaseVerbName]) {
        console.warn(`Conjugación para el verbo "${verbName}" no encontrada en el diccionario principal.`);
        return "";
    }

    const verbConjugation = conjugaciones[lowerCaseVerbName];
    const conjugatedForms = [];

    const pronounKeyMaps = {
        "yo": ["yo"],
        "tú": ["tú"],
        "él/ella": ["él/ella/usted", "él/ella"],
        "nosotros": ["nosotros/as", "nosotros"],
        "vosotros": ["vosotros/as", "vosotros"],
        "ellos/ellas": ["ellos/ellas/ustedes", "ellos/ellas"]
    };

    for (const person of personsArray) {
        const possibleKeys = pronounKeyMaps[person] || [person];

        let foundConjugation = false;
        for (const keyOption of possibleKeys) {
            // Usamos effectiveTense aquí para la búsqueda
            if (verbConjugation[keyOption] && verbConjugation[keyOption][effectiveTense]) {
                conjugatedForms.push(verbConjugation[keyOption][effectiveTense]);
                foundConjugation = true;
                break;
            }
        }

        if (!foundConjugation) {
            console.warn(`Conjugación para "${verbName}" en "${person}" (intentando claves: ${possibleKeys.join(', ')}) en el tiempo "${tense}" (buscando como "${effectiveTense}") no encontrada en el diccionario.`);
        }
    }

    return `*${verbName}* (${conjugatedForms.join(', ')})`;
}



// --- Lógica de la Sección de Verbos Irregulares ---
// Rellena la sección de verbos irregulares con la información de los verbos del diccionario.
// Ahora, esta función servirá como el punto de entrada para la navegación jerárquica.
function populateIrregularVerbsSection() {
    console.log('populateIrregularVerbsSection() llamada.');
    limpiarContenedor();
    setGameBackground(false); // <--- ¡AÑADE ESTA LÍNEA AQUÍ!

    // Reiniciar el estado de navegación al entrar en la sección principal de irregularidades
    currentSelectedTheoryTime = null;
    currentSelectedBroadCategory = null;

    // Creamos el contenedor principal para la sección de irregularidades dinámicamente
    const mainIrregularContainer = document.createElement('div');
    mainIrregularContainer.id = 'irregularVerbsList'; // Le asignamos el ID esperado
    appContainer.appendChild(mainIrregularContainer); // Lo añadimos al contenedor principal de la app

    // Ahora llamamos a displayTimeSelection, que buscará este div que acabamos de crear
    displayTimeSelection();
}

/**
 * Muestra la selección de tiempos verbales para la sección de teoría/irregularidades.
 * Esta es la primera pantalla después de seleccionar "Irregularidades por Tiempo".
 */
// Asegúrate de que estas variables globales estén declaradas como:
// let irregularVerbsListContainer = null; // ¡Esta se reasignará siempre!
// let basicRowContainer = null;
// let intermediateRowContainer = null;
// let advancedRowContainer = null;
// Y 'const appContainer = document.getElementById('app-container');'


function displayTimeSelection() {
    limpiarContenedor(); // Esto limpiará appContainer completamente.

    const title = document.createElement('h2');
    title.textContent = 'Selecciona un Tiempo Verbal';
    appContainer.appendChild(title);

    // *******************************************************************
    // ¡¡¡CORRECCIÓN CRÍTICA!!!
    // Siempre re-crear y añadir irregularVerbsListContainer
    // Esto asegura que el contenedor principal de los botones siempre esté en el DOM.
    // *******************************************************************
    irregularVerbsListContainer = document.createElement('div');
    irregularVerbsListContainer.id = 'irregularVerbsList';
    appContainer.appendChild(irregularVerbsListContainer);
    // Ya no necesitamos innerHTML = ''; porque es un div recién creado y vacío.
    // *******************************************************************


    const allButtonsWrapper = document.createElement('div');
    allButtonsWrapper.style.display = 'flex';
    allButtonsWrapper.style.flexDirection = 'column';
    allButtonsWrapper.style.gap = '1.5rem';
    allButtonsWrapper.style.maxWidth = '800px';
    allButtonsWrapper.style.margin = '0 auto';
    irregularVerbsListContainer.appendChild(allButtonsWrapper);

    // Agrupados por MODO (Indicativo / Subjuntivo), en filas a lo largo (como los otros selectores)
    const indicativoTiempos = ["presente", "pretérito perfecto", "pretérito indefinido", "pretérito imperfecto", "pluscuamperfecto", "futuro", "condicional"];
    const subjuntivoTiempos = ["presente de subjuntivo", "imperfecto de subjuntivo", "pluscuamperfecto de subjuntivo"];

    const onSeleccionarTiempo = (tiempoKey) => {
        currentSelectedTheoryTime = tiempoKey;
        displayRegularIrregularChoice();
    };

    const construirGrupoModo = (tituloModo, claseModo, tiempos, accent) => {
        // Solo los tiempos que existan en los datos de irregularidades
        const disponibles = tiempos.filter(t => todosLosTiemposVerbales.includes(t));
        if (disponibles.length === 0) return;

        const label = document.createElement('div');
        label.className = 'group-label ' + claseModo;
        label.textContent = tituloModo;
        allButtonsWrapper.appendChild(label);

        const lista = document.createElement('div');
        lista.className = 'row-list row-list--compact';
        disponibles.forEach(t => {
            lista.appendChild(crearRowTiempo(t, accent, () => onSeleccionarTiempo(t)));
        });
        allButtonsWrapper.appendChild(lista);
    };

    construirGrupoModo('Modo Indicativo', 'ind', indicativoTiempos, 'var(--cian)');
    construirGrupoModo('Modo Subjuntivo', 'sub', subjuntivoTiempos, 'var(--amarillo)');


    // Botón para volver al menú de Irregularidades"
    const backToTheoryMenuBtn = document.createElement('button');
    backToTheoryMenuBtn.textContent = '↩️ Volver a Irregularidades';
    Object.assign(backToTheoryMenuBtn.style, {
        marginTop: '2rem', backgroundColor: '#9A9AB0', color: '#FFFFFF', fontWeight: 'bold',
        padding: '0.75rem 1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out', transform: 'scale(1)', width: '100%', maxWidth: '200px',
        marginLeft: 'auto', marginRight: 'auto', display: 'block'
    });
    backToTheoryMenuBtn.onmouseover = () => { backToTheoryMenuBtn.style.backgroundColor = 'rgba(255,255,255,0.10)'; backToTheoryMenuBtn.style.transform = 'scale(1.05)'; };
    backToTheoryMenuBtn.onmouseout = () => { backToTheoryMenuBtn.style.backgroundColor = '#9A9AB0'; backToTheoryMenuBtn.style.transform = 'scale(1)'; };
    backToTheoryMenuBtn.addEventListener('click', mostrarVerbosRegularesIrregulares);
    backToTheoryMenuBtn.classList.add('back-button');
    irregularVerbsListContainer.appendChild(backToTheoryMenuBtn);
}

// Función para mostrar las categorías amplias de irregularidades (o los grupos específicos para Presente)
function displayBroadCategories() {
    const container = irregularVerbsListContainer;
    if (!container) {
        console.error('Error: El contenedor irregularVerbsListContainer no está disponible para displayBroadCategories.');
        return;
    }
    container.innerHTML = ''; // Limpiar cualquier contenido previo

    currentSelectedBroadCategory = null; // Resetear al entrar en este nivel

    // --- NUEVA LÓGICA: SI ES PRESENTE, MUESTRA LOS GRUPOS ESPECÍFICOS ---
    if (currentSelectedTheoryTime === 'presente') {
        displayPresenteIrregularGroups(); // Llama a la nueva función
        return; // Salir de esta función
    }
    // --- FIN NUEVA LÓGICA ---

    // --- EL RESTO DE ESTA FUNCIÓN ES LA LÓGICA EXISTENTE PARA OTROS TIEMPOS ---

    const title = document.createElement('h2');
    title.style.fontSize = '1.875rem'; // text-3xl
    title.style.fontWeight = 'bold'; // font-bold
    title.style.color = '#EDEDF5'; // Color del título
    title.style.marginBottom = '2rem'; // mb-8
    title.style.textAlign = 'center'; // text-center
    title.textContent = `Irregularidades del ${capitalizeFirstLetter(currentSelectedTheoryTime)}`; // Título más general
    container.appendChild(title);

    const explicacionTiempo = explicacionesIrregularidadesTiempos[currentSelectedTheoryTime];

    const irregularidadesDelTiempo = explicacionTiempo?.tiposIrregularidad?.filter(
        tipo => tipo.nombre !== 'Verbos Regulares'
    ) || [];

    if (irregularidadesDelTiempo.length === 0) {
        const noResults = document.createElement('p');
        noResults.style.color = '#9A9AB0';
        noResults.style.textAlign = 'center';
        noResults.textContent = `No hay irregularidades específicas definidas para el ${capitalizeFirstLetter(currentSelectedTheoryTime)}.`;
        container.appendChild(noResults);

        // Botón para volver a la elección (Regular vs. Irregular)
        container.appendChild(createBackButton('Volver a Elección', () => displayRegularIrregularChoice()));
        return;
    }

    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'grid';
    buttonsContainer.style.gap = '1rem';
    buttonsContainer.style.maxWidth = '400px';
    buttonsContainer.style.margin = '0 auto';

    const mediaQuerySm = window.matchMedia('(min-width: 640px)');
    const adjustGridColumns = () => {
        buttonsContainer.style.gridTemplateColumns = mediaQuerySm.matches ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)';
    };
    adjustGridColumns();
    mediaQuerySm.addEventListener('change', adjustGridColumns);
    container.appendChild(buttonsContainer);

    irregularidadesDelTiempo.forEach(tipoIrregularidad => {
        const button = document.createElement('button');
        const iconDiv = document.createElement('div');
        iconDiv.textContent = tipoIrregularidad.icono || '';
        iconDiv.style.fontSize = '2.5rem';
        iconDiv.style.marginBottom = '0.5rem';

        const textSpan = document.createElement('span');
        textSpan.textContent = tipoIrregularidad.nombre;

        button.appendChild(iconDiv);
        button.appendChild(textSpan);

        Object.assign(button.style, uniformButtonStyles);
        button.style.display = 'flex';
        button.style.flexDirection = 'column';
        button.style.alignItems = 'center';
        button.style.justifyContent = 'center';
        button.style.backgroundColor = 'rgba(255,255,255,0.045)';
        button.onmouseover = () => { button.style.backgroundColor = 'rgba(255,255,255,0.07)'; button.style.transform = 'scale(1.05)'; };
        button.onmouseout = () => { button.style.backgroundColor = 'rgba(255,255,255,0.045)'; button.style.transform = 'scale(1)'; };

        button.addEventListener('click', () => {
            displayIrregularityDetail(tipoIrregularidad.nombre);
        });
        buttonsContainer.appendChild(button);
    });

    // Botón para volver al nivel anterior (Elección Regular vs. Irregular)
    container.appendChild(createBackButton('↩️ Volver a Elección', () => displayRegularIrregularChoice()));
}

// Helper para crear botones de volver consistente
function createBackButton(text, onClickHandler) {
    const backBtn = document.createElement('button');
    Object.assign(backBtn.style, {
        marginTop: '2rem', backgroundColor: 'rgba(255,255,255,0.10)', color: '#FFFFFF', fontWeight: 'bold',
        padding: '0.75rem 1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out', transform: 'scale(1)', width: '100%', maxWidth: '200px',
        marginLeft: 'auto', marginRight: 'auto', display: 'block'
    });
    backBtn.textContent = text;
    backBtn.onmouseover = () => { backBtn.style.backgroundColor = '#9A9AB0'; backBtn.style.transform = 'scale(1.05)'; };
    backBtn.onmouseout = () => { backBtn.style.backgroundColor = 'rgba(255,255,255,0.10)'; backBtn.style.transform = 'scale(1)'; };
    backBtn.addEventListener('click', onClickHandler);
    backBtn.classList.add('back-button'); // Añade una clase para posible estilado
    return backBtn;
}
// NUEVA FUNCIÓN: Muestra los 4 grupos de irregularidades del Presente
function displayPresenteIrregularGroups() {
    const container = irregularVerbsListContainer;
    container.innerHTML = ''; // Limpiar contenido previo

    const title = document.createElement('h2');
    title.style.fontSize = '1.875rem'; // text-3xl
    title.style.fontWeight = 'bold'; // font-bold
    title.style.color = '#EDEDF5'; // Color del título
    title.style.marginBottom = '2rem'; // mb-8
    title.style.textAlign = 'center'; // text-center
    title.textContent = 'Grupos de Irregularidades en Presente';
    container.appendChild(title);

    const grupos = explicacionesIrregularidadesTiempos.presente.gruposCategorias;

    if (!grupos || grupos.length === 0) {
        const noGroups = document.createElement('p');
        noGroups.style.color = '#9A9AB0';
        noGroups.style.textAlign = 'center';
        noGroups.textContent = 'No hay grupos de irregularidades definidos para el Presente.';
        container.appendChild(noGroups);
        container.appendChild(createBackButton('↩️ Volver a Elección', () => displayRegularIrregularChoice()));
        return;
    }

    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'grid';
    buttonsContainer.style.gap = '1rem';
    buttonsContainer.style.maxWidth = '600px'; // Ajusta el ancho si necesitas 2x2 o 1xN
    buttonsContainer.style.margin = '0 auto';

    // Lógica de cuadrícula responsiva (2 columnas en pantallas sm/md, 1 en móvil)
    const mediaQuerySm = window.matchMedia('(min-width: 640px)');
    const adjustGridColumns = () => {
        buttonsContainer.style.gridTemplateColumns = mediaQuerySm.matches ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)';
    };
    adjustGridColumns();
    mediaQuerySm.addEventListener('change', adjustGridColumns);
    container.appendChild(buttonsContainer);

    grupos.forEach(grupo => {
        const button = document.createElement('button');
        const iconDiv = document.createElement('div');
        iconDiv.textContent = grupo.icono || '';
        iconDiv.style.fontSize = '2.5rem';
        iconDiv.style.marginBottom = '0.5rem';

        const textSpan = document.createElement('span');
        textSpan.textContent = grupo.nombre;
        textSpan.style.fontWeight = 'bold'; // Nombre del grupo en negrita

        const descriptionP = document.createElement('p');
        descriptionP.textContent = grupo.descripcion;
        descriptionP.style.fontSize = '0.9rem';
        descriptionP.style.color = '#C4C4D6'; // Color para la descripción
        descriptionP.style.marginTop = '0.25rem';
        descriptionP.style.textAlign = 'center';

        button.appendChild(iconDiv);
        button.appendChild(textSpan);
        button.appendChild(descriptionP); // Añade la descripción al botón

        Object.assign(button.style, uniformButtonStyles);
        button.style.display = 'flex';
        button.style.flexDirection = 'column';
        button.style.alignItems = 'center';
        button.style.justifyContent = 'center';
        button.style.backgroundColor = 'rgba(255,255,255,0.045)'; // Color para los botones de grupo
        button.onmouseover = () => { button.style.backgroundColor = 'rgba(255,255,255,0.07)'; button.style.transform = 'scale(1.05)'; };
        button.onmouseout = () => { button.style.backgroundColor = 'rgba(255,255,255,0.045)'; button.style.transform = 'scale(1)'; };

        button.addEventListener('click', () => {
            // currentSelectedBroadCategory = grupo.nombre; // Podrías usar esto para futuros niveles
            displayPresenteSubCategories(grupo.nombre); // <--- CAMBIO IMPORTANTE AQUÍ: Llama a la nueva función
        });
        buttonsContainer.appendChild(button);
    });

    // Botón para volver a la selección de tiempos verbales
    container.appendChild(createBackButton('↩️ Volver a Elección', () => displayRegularIrregularChoice()));
}

// NUEVA FUNCIÓN: Muestra los botones de sub-categorías de irregularidades para un grupo específico del Presente
function displayPresenteSubCategories(groupName) {
    const container = irregularVerbsListContainer;
    container.innerHTML = ''; // Limpiar contenido previo

    const title = document.createElement('h2');
    title.style.fontSize = '1.875rem';
    title.style.fontWeight = 'bold';
    title.style.color = '#EDEDF5';
    title.style.marginBottom = '2rem';
    title.style.textAlign = 'center';
    title.textContent = `Irregularidades de "${groupName}" en Presente`; // Título del grupo
    container.appendChild(title);

    const presenteData = explicacionesIrregularidadesTiempos.presente;
    const selectedGroup = presenteData.gruposCategorias.find(g => g.nombre === groupName);

    if (!selectedGroup || !selectedGroup.tipos || selectedGroup.tipos.length === 0) {
        const noDataMsg = document.createElement('p');
        noDataMsg.textContent = `No se encontraron sub-categorías para el grupo "${groupName}".`;
        noDataMsg.style.color = '#9A9AB0';
        noDataMsg.style.textAlign = 'center';
        container.appendChild(noDataMsg);
        container.appendChild(createBackButton('↩️ Volver a Grupos', () => displayPresenteIrregularGroups()));
        return;
    }

    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'grid';
    buttonsContainer.style.gap = '1rem';
    buttonsContainer.style.maxWidth = '600px'; // Ajusta el ancho
    buttonsContainer.style.margin = '0 auto';

    // Lógica de cuadrícula responsiva (2 columnas en pantallas sm/md, 1 en móvil)
    const mediaQuerySm = window.matchMedia('(min-width: 640px)');
    const adjustGridColumns = () => {
        buttonsContainer.style.gridTemplateColumns = mediaQuerySm.matches ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)';
    };
    adjustGridColumns();
    mediaQuerySm.addEventListener('change', adjustGridColumns);
    container.appendChild(buttonsContainer);

    // Iterar sobre cada 'tipo' específico dentro del grupo seleccionado y crear un botón
    selectedGroup.tipos.forEach(tipoNombre => {
        const tipoIrregularidad = presenteData.tiposIrregularidad.find(t => t.nombre === tipoNombre);

        if (tipoIrregularidad) { // Asegurarse de que el tipo de irregularidad existe
            const button = document.createElement('button');
            const iconDiv = document.createElement('div');
            iconDiv.textContent = tipoIrregularidad.icono || ''; // Usa el icono del tipo de irregularidad
            iconDiv.style.fontSize = '2.5rem';
            iconDiv.style.marginBottom = '0.5rem';

            const textSpan = document.createElement('span');
            textSpan.textContent = tipoIrregularidad.nombre; // Usa el nombre del tipo de irregularidad

            button.appendChild(iconDiv);
            button.appendChild(textSpan);

            Object.assign(button.style, uniformButtonStyles);
            button.style.display = 'flex';
            button.style.flexDirection = 'column';
            button.style.alignItems = 'center';
            button.style.justifyContent = 'center';
            button.style.backgroundColor = 'rgba(255,255,255,0.045)'; // Color para los botones de sub-grupo
            button.onmouseover = () => { button.style.backgroundColor = 'rgba(255,255,255,0.07)'; button.style.transform = 'scale(1.05)'; };
            button.onmouseout = () => { button.style.backgroundColor = 'rgba(255,255,255,0.045)'; button.style.transform = 'scale(1)'; };

            button.addEventListener('click', () => {
                // currentSelectedTheoryTime ya debe ser 'presente' aquí
                // currentSelectedBroadCategory = tipoIrregularidad.nombre; // Si quieres seguir la jerarquía
                displayIrregularityDetail(tipoIrregularidad.nombre); // <--- Llama a la función original
            });
            buttonsContainer.appendChild(button);
        }
    });

    // Botón para volver a la pantalla de selección de grupos del presente
    container.appendChild(createBackButton('↩️ Volver a Grupos', () => displayPresenteIrregularGroups()));
}

// Función para mostrar la opción entre verbos regulares e irregulares para el tiempo seleccionado
function displayRegularIrregularChoice() {
    limpiarContenedor(); // Siempre limpia el appContainer al inicio de esta vista.

    // Asegúrate de que irregularVerbsListContainer exista y esté en el DOM.
    // Si es la primera vez o si fue desconectado, lo crea/re-adjunta.
    if (!irregularVerbsListContainer) {
        irregularVerbsListContainer = document.createElement('div');
        irregularVerbsListContainer.id = 'irregularVerbsList';
    }
    appContainer.appendChild(irregularVerbsListContainer); // Re-adjunta el contenedor al DOM principal.

    irregularVerbsListContainer.innerHTML = ''; // Limpia el contenido previo de irregularVerbsListContainer.

    const title = document.createElement('h2');
    Object.assign(title.style, {
        fontSize: '1.875rem', // text-3xl
        fontWeight: 'bold', // font-bold
        color: 'rgba(255,255,255,0.045)', // Color del título
        marginBottom: '2rem', // mb-8
        textAlign: 'center' // text-center
    });
    title.textContent = `Opciones para ${capitalizeFirstLetter(currentSelectedTheoryTime)}`;
    irregularVerbsListContainer.appendChild(title);

    const buttonsContainer = document.createElement('div');
    Object.assign(buttonsContainer.style, {
        display: 'grid',
        gap: '1rem',
        maxWidth: '400px', // Ancho para 2 botones grandes con gap
        margin: '0 auto' // Centrar el contenedor
    });

    const mediaQuerySm = window.matchMedia('(min-width: 640px)');
    const adjustGridColumns = () => {
        buttonsContainer.style.gridTemplateColumns = mediaQuerySm.matches ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)';
    };
    adjustGridColumns();
    mediaQuerySm.addEventListener('change', adjustGridColumns);
    irregularVerbsListContainer.appendChild(buttonsContainer);

    // Botón de "Irregularidades"
    const irregularVerbsButton = document.createElement('button');
    irregularVerbsButton.textContent = 'Irregularidades';
    Object.assign(irregularVerbsButton.style, uniformButtonStyles);
    irregularVerbsButton.style.backgroundColor = '#FF2DA6'; // Rosa
    irregularVerbsButton.style.color = '#0A0A12';
    irregularVerbsButton.onmouseover = () => { irregularVerbsButton.style.backgroundColor = '#C81E86'; regularVerbsButton.style.transform = 'scale(1.05)'; };
    irregularVerbsButton.onmouseout = () => { irregularVerbsButton.style.backgroundColor = '#FF2DA6'; regularVerbsButton.style.transform = 'scale(1)'; };
    irregularVerbsButton.addEventListener('click', () => displayBroadCategories()); // Llama a displayBroadCategories para el tiempo actual
    buttonsContainer.appendChild(irregularVerbsButton);


    // Botón de "Verbos Regulares"
    const regularVerbsButton = document.createElement('button');
    regularVerbsButton.textContent = 'Regulares';
    Object.assign(regularVerbsButton.style, uniformButtonStyles);
    regularVerbsButton.style.backgroundColor = 'rgba(255,255,255,0.07)'; // Azul claro
    regularVerbsButton.onmouseover = () => { regularVerbsButton.style.backgroundColor = 'rgba(0,200,255,0.14)'; regularVerbsButton.style.transform = 'scale(1.05)'; };
    regularVerbsButton.onmouseout = () => { regularVerbsButton.style.backgroundColor = 'rgba(255,255,255,0.07)'; regularVerbsButton.style.transform = 'scale(1)'; };
    regularVerbsButton.addEventListener('click', () => displayRegularVerbsExplanation(currentSelectedTheoryTime));
    buttonsContainer.appendChild(regularVerbsButton);


    // Botón para volver a la selección de Tiempos Verbales
    const backButton = document.createElement('button');
    backButton.textContent = '↩️ Volver a Tiempos Verbales';
    Object.assign(backButton.style, {
        marginTop: '2rem', backgroundColor: 'rgba(255,255,255,0.10)', color: '#FFFFFF', fontWeight: 'bold',
        padding: '0.75rem 1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out', transform: 'scale(1)', width: '100%', maxWidth: '200px',
        marginLeft: 'auto', marginRight: 'auto', display: 'block'
    });
    backButton.onmouseover = () => { backButton.style.backgroundColor = '#9A9AB0'; backButton.style.transform = 'scale(1.05)'; };
    backButton.onmouseout = () => { backButton.style.backgroundColor = 'rgba(255,255,255,0.10)'; backButton.style.transform = 'scale(1)'; };
    backButton.addEventListener('click', displayTimeSelection);
    irregularVerbsListContainer.appendChild(backButton);
}


// Objeto de mapeo para agrupar los tipos de irregularidad detallados bajo categorías amplias.
// Las claves son los nombres de las categorías amplias que aparecerán como botones.
// Los valores son arrays de los nombres exactos de los 'tiposIrregularidad' definidos en explicacionesIrregularidadesTiempos.
const broadCategoryMapping = {
    "Bota": [
        "Verbos Bota (E > IE)",
        "Verbos Bota (O > UE)",
        "Verbos Bota (E > I)",
        "Verbos Bota (U > UE)"
    ],
    "Sombrero": [
        "Verbos Sombrero (-go)",
        "Verbos Sombrero (-igo)",
        "Verbos sombrero (-ZCO)",
        "Verbos Sombrero (-UIR > UYO)",
        "Verbos Bota con Sombrero (I > Y)" // Esta categoría específica del usuario se agrupa aquí
    ],
    "Bota y Sombrero": [
        "Verbos Bota con Sombrero" // Esta es la categoría más general de "Bota con Sombrero" del usuario
    ],
    "Irregularidad Total": [
        // Para el "presente", no hay un 'tipoIrregularidad' llamado "Irregularidad total".
        // Sin embargo, para otros tiempos como "imperfecto", sí existe ("Irregularidad total (Ser, Ir, Ver)").
        // Esta categoría se incluirá como botón, y la lista de detalles se filtrará dinámicamente.
        // Si no hay subcategorías específicas para el tiempo actual, se mostrará un mensaje.
    ]
};


// Función para mostrar las categorías amplias de irregularidades (ahora mostrará las específicas del tiempo)

// Función auxiliar para obtener emojis para las categorías amplias
function getCategoryEmoji(categoryName) {
    switch (categoryName) {
        case "Bota": return '👢';
        case "Sombrero": return '🎩';
        case "Bota y Sombrero": return '🎩👢';
        case "Irregularidad Total": return '💥';
        default: return '';
    }
}

// Función para mostrar el detalle de una irregularidad específica (la explicación final)
function displayIrregularityDetail(detailedTypeName) {
    const theoryContent = irregularVerbsListContainer; // Usamos la variable global
        if (!theoryContent) {
            console.error('Error: El contenedor irregularVerbsListContainer no está disponible para displayIrregularityDetail.');
            return;
        }
        theoryContent.innerHTML = ''; // Limpiar cualquier contenido previo

    // Obtener las explicaciones de irregularidades para el tiempo verbal actual
    const explicacionTiempo = explicacionesIrregularidadesTiempos[currentSelectedTheoryTime];

    if (explicacionTiempo && explicacionTiempo.tiposIrregularidad) {
        // Encontrar la irregularidad detallada específica por su nombre
        const tipoIrregularidad = explicacionTiempo.tiposIrregularidad.find(
            tipo => tipo.nombre === detailedTypeName
        );

        if (tipoIrregularidad) {
            const title = document.createElement('h2');
            title.style.fontSize = '1.875rem';
            title.style.fontWeight = 'bold';
            title.style.color = '#EDEDF5';
            title.style.marginBottom = '2rem';
            title.style.textAlign = 'center';
            title.textContent = `${tipoIrregularidad.nombre} del ${capitalizeFirstLetter(currentSelectedTheoryTime)}`;
            theoryContent.appendChild(title);

            const contentDiv = document.createElement('div');
            contentDiv.style.backgroundColor = 'rgba(255,255,255,0.045)';
            contentDiv.style.padding = '25px';
            contentDiv.style.borderRadius = '12px';
            contentDiv.style.margin = '20px auto';
            contentDiv.style.maxWidth = '800px';
            contentDiv.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            contentDiv.style.textAlign = 'left';
            contentDiv.style.lineHeight = '1.6';
            contentDiv.style.color = '#EDEDF5'; // Texto oscuro

            const descriptionElement = document.createElement('p');
            descriptionElement.style.marginBottom = '20px';
            descriptionElement.innerHTML = tipoIrregularidad.descripcion.replace(/\n/g, '<br>');
            contentDiv.appendChild(descriptionElement);

            if (tipoIrregularidad.verbosEjemplo && tipoIrregularidad.verbosEjemplo.length > 0) {
                const conjugationsSectionBox = document.createElement('div');
                conjugationsSectionBox.style.backgroundColor = 'rgba(255,255,255,0.045)'; // Fondo oscuro
                conjugationsSectionBox.style.padding = '10px 15px';
                conjugationsSectionBox.style.borderRadius = '8px';
                conjugationsSectionBox.style.marginBottom = '10px';

                const conjugationsH4 = document.createElement('h4');
                conjugationsH4.textContent = `Ejemplos de conjugaciones en ${capitalizeFirstLetter(currentSelectedTheoryTime)}:`;
                conjugationsH4.style.color = '#FFFFFF'; // Blanco
                conjugationsH4.style.marginTop = '0';
                conjugationsH4.style.marginBottom = '5px';
                conjugationsSectionBox.appendChild(conjugationsH4);

                const ulElement = document.createElement('ul');
                ulElement.style.listStyleType = 'none';
                ulElement.style.paddingLeft = '0';
                ulElement.style.color = '#EDEDF5'; // Color claro para las listas

                tipoIrregularidad.verbosEjemplo.forEach(example => {
                    const listItem = document.createElement('li');
                    const formattedExampleHtml = formatIrregularityExample(example, currentSelectedTheoryTime);
                    if (formattedExampleHtml.trim() !== '') {
                        listItem.innerHTML = formattedExampleHtml;
                        ulElement.appendChild(listItem);
                    }
                });
                conjugationsSectionBox.appendChild(ulElement);
                contentDiv.appendChild(conjugationsSectionBox);
            }
            theoryContent.appendChild(contentDiv);

            // Botón para volver al nivel anterior (lista de subcategorías detalladas)
            const backBtn = document.createElement('button');
            backBtn.textContent = '↩️ Volver a Irregularidades';
            Object.assign(backBtn.style, {
                marginTop: '2rem', backgroundColor: 'rgba(255,255,255,0.10)', color: '#FFFFFF', fontWeight: 'bold',
                padding: '0.75rem 1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease-in-out', transform: 'scale(1)', width: '100%', maxWidth: '200px',
                marginLeft: 'auto', marginRight: 'auto', display: 'block'
            });
            backBtn.onmouseover = () => { backBtn.style.backgroundColor = '#9A9AB0'; backBtn.style.transform = 'scale(1.05)'; };
            backBtn.onmouseout = () => { backBtn.style.backgroundColor = 'rgba(255,255,255,0.10)'; backBtn.style.transform = 'scale(1)'; };
            backBtn.addEventListener('click', () => {
                displayBroadCategories(); // Siempre vuelve a las categorías amplias
            });
            theoryContent.appendChild(backBtn);
        } else {
            const errorMessage = document.createElement('p');
            errorMessage.style.color = '#FF4D6D';
            errorMessage.style.textAlign = 'center';
            errorMessage.textContent = `No se encontró información detallada para "${detailedTypeName}" en el tiempo "${capitalizeFirstLetter(currentSelectedTheoryTime)}".`;
            theoryContent.appendChild(errorMessage);

            const backBtn = document.createElement('button');
            backBtn.textContent = '↩️ Volver';
            Object.assign(backBtn.style, {
                marginTop: '2rem', backgroundColor: 'rgba(255,255,255,0.10)', color: '#FFFFFF', fontWeight: 'bold',
                padding: '0.75rem 1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease-in-out', transform: 'scale(1)', width: '100%', maxWidth: '200px',
                marginLeft: 'auto', marginRight: 'auto', display: 'block'
            });
            backBtn.onmouseover = () => { backBtn.style.backgroundColor = '#9A9AB0'; backBtn.style.transform = 'scale(1.05)'; };
            backBtn.onmouseout = () => { backBtn.style.backgroundColor = 'rgba(255,255,255,0.10)'; backBtn.style.transform = 'scale(1)'; };
            backBtn.addEventListener('click', () => {
                displayBroadCategories();
            });
            theoryContent.appendChild(backBtn);
        }
    } else {
        const errorMessage = document.createElement('p');
        errorMessage.style.color = '#FF4D6D';
        errorMessage.style.textAlign = 'center';
        errorMessage.textContent = `No se encontró información de irregularidades para el tiempo "${capitalizeFirstLetter(currentSelectedTheoryTime)}".`;
        theoryContent.appendChild(errorMessage);

        const backBtn = document.createElement('button');
        backBtn.textContent = '↩️ Volver a Tiempos';
        Object.assign(backBtn.style, {
            marginTop: '2rem', backgroundColor: 'rgba(255,255,255,0.10)', color: '#FFFFFF', fontWeight: 'bold',
            padding: '0.75rem 1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease-in-out', transform: 'scale(1)', width: '100%', maxWidth: '200px',
            marginLeft: 'auto', marginRight: 'auto', display: 'block'
        });
        backBtn.onmouseover = () => { backBtn.style.backgroundColor = '#9A9AB0'; backBtn.style.transform = 'scale(1.05)'; };
        backBtn.onmouseout = () => { backBtn.style.backgroundColor = 'rgba(255,255,255,0.10)'; backBtn.style.transform = 'scale(1)'; };
        backBtn.addEventListener('click', () => {
            displayTimeSelection();
        });
        theoryContent.appendChild(backBtn);
    }
}

// Objeto para almacenar las explicaciones de verbos individuales.
// Objeto para almacenar las explicaciones de irregularidades por tiempo verbal.
// Función auxiliar para generar el texto de ayuda de irregularidades
function generarTextoAyudaIrregularidades(verbo) {
    // Convierte el verbo a minúsculas ANTES de usarlo como clave
    const verboMinusculas = verbo.toLowerCase();
    const infoVerbo = explicacionesVerbos[verboMinusculas]; // Usa la versión en minúsculas

    if (!infoVerbo) {
        // Mejor mensaje si no se encuentra información para el verbo
        return "Información sobre las irregularidades de este verbo no encontrada.";
    }

    let textoAyuda = `**Irregularidades de "${capitalizeFirstLetter(verbo)}" en los tiempos:**\n\n`;

    const tiempoMapping = {
        'presenteTipoIrregular': 'Presente',
        'preteritoperfectoTipoIrregular': 'Pretérito Perfecto',
        'indefinidoTipoIrregular': 'Indefinido',
        'imperfectoTipoIrregular': 'Imperfecto',
        'pluscuamperfectoTipoIrregular': 'Pluscuamperfecto',
        'futuroTipoIrregular': 'Futuro',
        'condicionalTipoIrregular': 'Condicional',
        'presentedesubjuntivoTipoIrregular': 'Presente de Subjuntivo',
        'imperfectodesubjuntivoTipoIrregular': 'Imperfecto de Subjuntivo',
        'pluscuamperfectodesubjuntivoTipoIrregular': 'Pluscuamperfecto de Subjuntivo'
    };

    let foundIrregularities = false;
    for (const prop in infoVerbo) {
        if (prop.endsWith('TipoIrregular')) {
            const tipoIrregularidad = infoVerbo[prop];
            // MODIFICACIÓN CLAVE AQUÍ: Solo considerar irregular si NO es "Regular"
            if (tipoIrregularidad && tipoIrregularidad !== "Regular") {
                const nombreTiempo = tiempoMapping[prop] || capitalizeFirstLetter(prop.replace('TipoIrregular', ''));
                textoAyuda += `- **${nombreTiempo}:** ${tipoIrregularidad}\n`;
                foundIrregularities = true;
            }
        }
    }

    // MODIFICACIÓN DEL MENSAJE FINAL:
    if (!foundIrregularities) {
        textoAyuda = "Este verbo no tiene irregularidades.";
    }

    return textoAyuda;
}
// Función para mostrar/ocultar el modal de ayuda
function toggleAyudaIrregularidades() {
    const ayudaModal = document.getElementById('ayuda-irregularidades-modal');
    const ayudaContent = document.getElementById('ayuda-irregularidades-content');

    if (!ayudaModal || !ayudaContent) {
        console.error("Modal de ayuda no encontrado. Asegúrate de que los IDs sean correctos.");
        return;
    }

    if (ayudaModal.style.display === 'block') {
        ayudaModal.style.display = 'none'; // Ocultar
    } else {
        // ***** MODIFICACIÓN CLAVE AQUÍ: Convertir currentVerbo a minúsculas *****
        ayudaContent.textContent = generarTextoAyudaIrregularidades(currentVerbo.toLowerCase());
        ayudaModal.style.display = 'block'; // Mostrar
    }
}

// Función para mostrar las explicaciones de irregularidades de un tiempo verbal específico
function mostrarExplicacionesIrregularidadesTiempo(tiempoVerbal) {
    setGameBackground(false);
    console.log('--- Inicia mostrarExplicacionesIrregularidadesTiempo ---');
    console.log('Tiempo verbal recibido:', tiempoVerbal);

    appContainer.innerHTML = ''; // Limpiar el contenido actual
    console.log('appContainer limpiado.');

    // Genera el HTML con el formato deseado usando la nueva función
    const htmlContentToDisplay = generarHtmlExplicacionTiempoIrregularidad(tiempoVerbal);
    appContainer.innerHTML = htmlContentToDisplay;
    console.log('HTML generado e inyectado en appContainer.');

    // Botón para volver al selector de tiempos de irregularidades
    const backButton = document.createElement('button');
    backButton.textContent = 'Volver a Tiempos';
    backButton.classList.add('back-button');
    backButton.onclick = () => mostrarSelectorExplicacionIrregularidades();
    appContainer.appendChild(backButton);
    console.log('Botón "Volver" añadido.');
    console.log('--- Fin mostrarExplicacionesIrregularidadesTiempo ---');
}
 
// Opcional: Una función para mostrar un selector de tiempos para las irregularidades
function mostrarSelectorExplicacionIrregularidades() {
    console.log('mostrarSelectorExplicacionIrregularidades() llamada.');
    appContainer.innerHTML = '<h2 class="section-title">Selecciona un Tiempo Verbal para ver sus Irregularidades</h2>';

    const tiemposListContainer = document.createElement('div');
    tiemposListContainer.className = 'verbos-list-container'; // Reutilizamos esta clase para botones

    // Puedes usar todosLosTiemposVerbales o solo los que tienen explicaciones de irregularidades
    Object.keys(explicacionesIrregularidadesTiempos).forEach(tiempoKey => {
        const button = document.createElement('button');
        // Capitaliza la primera letra de cada palabra del tiempo para el texto del botón
        const tiempoDisplay = tiempoKey.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        button.textContent = tiempoDisplay;
        button.classList.add('menu-button');
        button.onclick = () => mostrarExplicacionesIrregularidadesTiempo(tiempoKey);
        tiemposListContainer.appendChild(button);
    });

    appContainer.appendChild(tiemposListContainer);

    // Botón para volver al menú principal
    const backButton = document.createElement('button');
    backButton.textContent = 'Volver al Menú Principal';
    backButton.classList.add('back-button');
    backButton.onclick = () => mostrarMenu(); // Asume que tienes una función mostrarMenu()
    appContainer.appendChild(backButton);
    console.log('Botones de irregularidades creados y añadidos en mostrarSelectorExplicacionIrregularidades.');
}

///////////////////////////

function generarHtmlExplicacionIrregular(verboKey) {
    const verbData = explicacionesVerbos[verboKey.toLowerCase()];
    if (!verbData || !verbData.esIrregular) {
        return `<p>No hay información de irregularidades detalladas para "${verboKey.charAt(0).toUpperCase() + verboKey.slice(1)}".</p>`;
    }

    let htmlContent = `<div class="explanation-main-container">`;
    htmlContent += `<h3 class="formacion-title">Irregularidades del verbo "${verboKey.charAt(0).toUpperCase() + verboKey.slice(1)}"</h3>`;

    // Sección para la descripción general del significado
    if (verbData.significado) {
        htmlContent += `
        <div class="info-box">
            <span class="info-box-icon">💡</span>
            <div>
                <h3>Significado Principal</h3>
                <p class="description">${verbData.significado}</p>
            </div>
        </div>`;
    }

    // Sección para ejemplos
    if (verbData.ejemplos && verbData.ejemplos.length > 0) {
        htmlContent += `
        <div class="info-box">
            <span class="info-box-icon">📝</span>
            <div>
                <h3>Ejemplos</h3>
                <ul>`;
        verbData.ejemplos.forEach(ejemplo => {
            htmlContent += `<li>${ejemplo}</li>`;
        });
        htmlContent += `
                </ul>
            </div>
        </div>`;
    }

    // Sección para irregularidades específicas (tipo y notas)
    if (verbData.irregularidades && verbData.irregularidades.length > 0) {
        htmlContent += `
        <div class="info-box">
            <span class="info-box-icon">⚠️</span>
            <div>
                <h3>Tipos de Irregularidades</h3>`;
        verbData.irregularidades.forEach(irregularidad => {
            htmlContent += `
                <p class="description"><strong>Tipo:</strong> ${irregularidad.tipo}</p>
                <p class="example"><strong>Tiempos:</strong> ${irregularidad.tiempos.join(', ')}</p>
                <p class="example"><strong>Notas:</strong> ${irregularidad.notas}</p><br/>
            `;
        });
        htmlContent += `
            </div>
        </div>`;
    }

    // Sección para formas irregulares específicas (ej. Yo)
    if (verbData.formasIrregularesYo) {
        htmlContent += `
        <div class="info-box">
            <span class="info-box-icon">👤</span>
            <div>
                <h3>Formas Irregulares Comunes (Primera Persona del Singular - Yo)</h3>
                <table class="conjugation-table">`; // Usa la clase de tabla de conjugación para mantener el estilo
        for (const tiempo in verbData.formasIrregularesYo) {
            htmlContent += `<tr><td>${tiempo.charAt(0).toUpperCase() + tiempo.slice(1)}:</td><td><strong>${verbData.formasIrregularesYo[tiempo]}</strong></td></tr>`;
        }
        htmlContent += `
                </table>
            </div>
        </div>`;
    }

    // Sección para participio irregular
    if (verbData.participioIrregularForma) {
        htmlContent += `
        <div class="info-box">
            <span class="info-box-icon">✨</span>
            <div>
                <h3>Participio Irregular</h3>
                <p class="description"><strong>Forma:</strong> ${verbData.participioIrregularForma}</p>
            </div>
        </div>`;
    }

    // Sección para el tipo de irregularidad por tiempo (PresenteTipoIrregular, etc.)
    const tiposIrregularesEspecificos = {
        "presenteTipoIrregular": "Presente",
        "preteritoperfectoTipoIrregular": "Pretérito Perfecto",
        "indefinidoTipoIrregular": "Indefinido",
        "imperfectoTipoIrregular": "Imperfecto",
        "pluscuamperfectoTipoIrregular": "Pluscuamperfecto",
        "futuroTipoIrregular": "Futuro",
        "condicionalTipoIrregular": "Condicional",
        "presentedesubjuntivoTipoIrregular": "Presente de Subjuntivo",
        "imperfectodesubjuntivoTipoIrregular": "Imperfecto de Subjuntivo",
        "pluscuamperfectodesubjuntivoTipoIrregular": "Pluscuamperfecto de Subjuntivo"
    };

    let specificIrregularityHtml = '';
    for (const key in tiposIrregularesEspecificos) {
        if (verbData[key] && verbData[key] !== "Regular") {
            specificIrregularityHtml += `
            <li><strong>${tiposIrregularesEspecificos[key]}:</strong> ${verbData[key]}</li>`;
        }
    }

    if (specificIrregularityHtml) {
        htmlContent += `
        <div class="info-box">
            <span class="info-box-icon">📊</span>
            <div>
                <h3>Irregularidades por Tiempo Verbal</h3>
                <ul>${specificIrregularityHtml}</ul>
            </div>
        </div>`;
    }

    // Sección para traducciones
    if (verbData.traducciones) {
        htmlContent += `
        <div class="info-box">
            <span class="info-box-icon">🌐</span>
            <div>
                <h3>Traducciones</h3>
                <ul>`;
        for (const lang in verbData.traducciones) {
            htmlContent += `<li><strong>${lang.charAt(0).toUpperCase() + lang.slice(1)}:</strong> ${verbData.traducciones[lang]}</li>`;
        }
        htmlContent += `
                </ul>
                <h4>Ejemplos Traducidos:</h4>
                <ul>`;
        for (const lang in verbData.ejemplosTraducidos) {
            htmlContent += `<li><strong>${lang.charAt(0).toUpperCase() + lang.slice(1)}:</strong>`;
            htmlContent += `<ul>`;
            verbData.ejemplosTraducidos[lang].forEach(example => {
                htmlContent += `<li>${example}</li>`;
            });
            htmlContent += `</ul></li>`;
        }
        htmlContent += `
                </ul>
            </div>
        </div>`;
    }


    htmlContent += `</div>`; // Cierra explanation-main-container
    return htmlContent;
}


// --- POST-DEFINITION INITIALIZATION (Ensure all verbs have all TipoIrregular properties) ---
// This loop ensures that every verb in `explicacionesVerbos` has an explicit
// `TipoIrregular` property for every tense defined in `todosLosTiemposVerbales`.
// If a property is missing, it defaults to "Regular".
// IMPORTANTE: Para que un verbo irregular se clasifique correctamente en el juego de arrastrar,
// su propiedad `TipoIrregular` debe estar definida explícitamente en el objeto `explicacionesVerbos`
// para ese tiempo verbal. Si no se define, el sistema asumirá "Regular".
Object.keys(explicacionesVerbos).forEach(verboKey => {
    todosLosTiemposVerbales.forEach(tiempoKey => {
        // Construye el nombre de la propiedad en el formato estandarizado
        const verbTypeProperty = `${tiempoKey.replace(/ /g, '')}TipoIrregular`;
        if (explicacionesVerbos[verboKey.toLowerCase()][verbTypeProperty] === undefined) {
            explicacionesVerbos[verboKey.toLowerCase()][verbTypeProperty] = "Regular";
            // console.warn(`Verb "${verboKey}" missing "${verbTypeProperty}". Defaulting to "Regular".`);
        }
    });
});

// (Tu código existente aquí...)

// Este console.log verificará el valor después de toda la inicialización.
// console.log(`[INIT DEBUG] 'escribir'.preteritoperfectoTipoIrregular al inicio: "${explicacionesVerbos["escribir"].preteritoperfectoTipoIrregular}"`);

// Referencia al contenedor principal de la aplicación en el HTML.




// --- Definición de Tiempos Verbales por Nivel ---
const tiemposPorNivel = {
    "Principiante A1": ["presente"],
    "Intermedio A2": ["presente",  "pretérito perfecto", "indefinido", "imperfecto"],
    "Básico Avanzado B1": ["presente", "pretérito perfecto", "indefinido", "imperfecto", "futuro", "condicional"],
    "Avanzado B2": ["presente", "pretérito perfecto", "indefinido", "imperfecto", "futuro", "condicional", "pluscuamperfecto", "presente de subjuntivo"],
    "Experto": ["presente", "pretérito perfecto", "indefinido", "imperfecto", "futuro", "condicional", "pluscuamperfecto", "presente de subjuntivo", "imperfecto de subjuntivo", "pluscuamperfecto de subjuntivo"]
};

// --- Funciones Utilitarias ---

/**
 * Calcula el nivel del usuario basándose en su puntuación actual.
 * @param {number} puntuacion La puntuación del usuario.
 * @returns {string} El nivel del usuario.
 */
function calcularNivel(puntuacion) {
    if (puntuacion < 50) {
        return "Principiante A1";
    } else if (puntuacion < 100) {
        return "Intermedio A2";
    } else if (puntuacion < 150) {
        return "Básico Avanzado B1";
    } else if (puntuacion < 200) {
        return "Avanzado B2";
    } else {
        return "Experto";
    }
}

// --- COMIENZO DE LA FUNCIÓN mostrarMensaje ¿Juego Arrastrar? ¿juego conjugaciones? ---

function mostrarMensaje(titulo, mensaje) {
    // Si ya existe un modal con este ID, lo eliminamos para evitar duplicados.
    const existingModal = document.getElementById('custom-message-modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }

    // 1. Crear el contenedor principal del modal (el fondo oscuro y la capa superpuesta)
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'custom-message-modal-overlay';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6); /* Fondo semi-transparente oscuro */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000; /* Asegura que esté por encima de todos los demás elementos */
        backdrop-filter: blur(3px); /* Efecto de desenfoque sutil en el fondo */
        -webkit-backdrop-filter: blur(3px); /* Para compatibilidad con Safari */
        padding: 15px; /* Pequeño padding para pantallas muy pequeñas */
        box-sizing: border-box; /* Asegura que el padding no cause desbordamiento */
    `;

    // 2. Crear el contenido del modal (la caja donde va el mensaje)
    const modalContent = document.createElement('div');
    modalContent.id = 'custom-message-modal-content';
    modalContent.style.cssText = `
        background-color: #12121E;
        padding: 28px;
        border-radius: 16px;
        border: 1px solid #A855F7;
        box-shadow: 0 0 50px rgba(168,85,247,0.4);
        width: 90%;
        max-width: 550px;
        text-align: center;
        position: relative;
        color: #EDEDF5;
        font-family: 'DM Sans','Inter',sans-serif;
        line-height: 1.5;
        animation: fadeInScale 0.3s ease-out forwards;
    `;

    // 3. Crear el botón de cerrar (la "X")
    const closeButton = document.createElement('span');
    closeButton.textContent = '✖'; // Símbolo de "X"
    closeButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 15px;
        color: #9A9AB0;
        font-size: 30px; /* Tamaño de la X más grande */
        font-weight: bold;
        cursor: pointer;
        transition: color 0.2s ease; /* Transición suave al pasar el ratón */
    `;
    closeButton.onmouseover = () => { closeButton.style.color = '#fff'; };
    closeButton.onmouseout = () => { closeButton.style.color = '#9A9AB0'; };

    // Función para cerrar el modal
    const closeModal = () => {
        modalOverlay.style.animation = 'fadeOut 0.3s ease-in forwards'; // Aplicará la animación de salida
        modalOverlay.addEventListener('animationend', () => {
            modalOverlay.remove(); // Elimina el modal del DOM después de que termine la animación
        }, { once: true }); // Asegura que el evento se dispare solo una vez
    };

    closeButton.onclick = closeModal; // Cierra el modal al hacer clic en la "X"
    // Cierra el modal si se hace clic en el fondo oscuro fuera del contenido
    modalOverlay.onclick = (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    };

    // 4. Crear el título del mensaje
    const messageTitle = document.createElement('h3');
    messageTitle.textContent = titulo;
    messageTitle.style.cssText = `
        font-size: 1.4em;
        color: #A855F7;
        margin-bottom: 16px;
        font-weight: 700;
        font-family: 'Orbitron',sans-serif;
    `;

    // 5. Crear el cuerpo del mensaje
    const messageBody = document.createElement('div');
    messageBody.style.cssText = `
        font-size: 1.2em; /* Tamaño de texto más grande para la legibilidad */
        text-align: left; /* Alineación a la izquierda para el cuerpo del mensaje */
        margin-bottom: 20px;
        max-height: 300px; /* Altura máxima para el contenido, con scroll si es muy largo */
        overflow-y: auto; /* Habilita el scroll vertical si el contenido excede max-height */
        padding-right: 5px; /* Pequeño padding para evitar que el texto se pegue a la barra de scroll */
        color: #EDEDF5;
        background-color: transparent;
    `;
    messageBody.innerHTML = mensaje;

    // 6. Crear un botón de "Aceptar" para mejor experiencia de usuario
    const okButton = document.createElement('button');
    okButton.textContent = 'Continuar';
    okButton.classList.add('menu-button');
    okButton.style.cssText = `
        margin-top: 10px;
        background-color: rgba(168,85,247,0.15);
        color: #A855F7;
        border: 1px solid #A855F7;
        padding: 11px 24px;
        border-radius: 10px;
        cursor: pointer;
        font-size: 1em;
        font-weight: 600;
        font-family: 'DM Sans','Inter',sans-serif;
        transition: background-color 0.2s ease, box-shadow 0.2s ease;
    `;
    okButton.onmouseover = () => { okButton.style.backgroundColor = 'rgba(168,85,247,0.28)'; okButton.style.boxShadow = '0 0 14px rgba(168,85,247,0.4)'; };
    okButton.onmouseout = () => { okButton.style.backgroundColor = 'rgba(168,85,247,0.15)'; okButton.style.boxShadow = 'none'; };
    okButton.onclick = closeModal; // Cierra el modal al hacer clic en Aceptar

    // 7. Ensamblar el modal: añadir todos los elementos al contenido, y el contenido al overlay
    modalContent.appendChild(closeButton);
    modalContent.appendChild(messageTitle);
    modalContent.appendChild(messageBody);
    modalContent.appendChild(okButton);
    modalOverlay.appendChild(modalContent);

    // 8. Añadir el modal al DOM (al contenedor principal de tu aplicación o al <body>)
    const appContainer = document.getElementById('app-container');
    if (appContainer) {
        appContainer.appendChild(modalOverlay);
    } else {
        document.body.appendChild(modalOverlay);
    }
}

// --- FIN DE LA FUNCIÓN mostrarMensaje ---

// ============================================
// SOLUCIÓN PARA EL CSS: Sí, va en tu JavaScript
// ============================================

// Este código va DENTRO de tu archivo JavaScript, exactamente así:
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideIn {
        from { 
            transform: translateY(-50px);
            opacity: 0;
        }
        to { 
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    #ayuda-irregularidades-modal .modal-content {
        animation: slideIn 0.3s ease-out;
    }
    
    #ayuda-irregularidades-content::-webkit-scrollbar {
        width: 6px;
    }
    
    #ayuda-irregularidades-content::-webkit-scrollbar-track {
        background: rgba(255,255,255,0.06);
        border-radius: 10px;
    }
    
    #ayuda-irregularidades-content::-webkit-scrollbar-thumb {
        background: #A855F7;
        border-radius: 10px;
    }
    
    #ayuda-irregularidades-content::-webkit-scrollbar-thumb:hover {
        background: #FF2DA6;
    }
    
    @media (max-width: 768px) {
        #ayuda-irregularidades-modal .modal-content {
            width: 95% !important;
            margin: 10% auto !important;
        }
        
        #ayuda-irregularidades-content {
            max-height: 50vh !important;
        }
    }
`;
document.head.appendChild(modalStyles);

/**
 * Guarda el progreso actual del usuario (puntuación y nivel) en el almacenamiento local del navegador.
 * También guarda los tiempos verbales seleccionados por el usuario.
 */
function guardarProgreso() {
    const progreso = {
        puntuacion: puntuacion,
        nivel: calcularNivel(puntuacion),
        tiemposSeleccionados: tiemposSeleccionadosUsuario
    };
    localStorage.setItem('progresoVerbos', JSON.stringify(progreso));
    mostrarMensaje("Progreso", "¡Progreso guardado exitosamente!");
    
    localStorage.setItem('verbosSeleccionados', JSON.stringify(verbosSeleccionadosUsuario));

}

/**
 * Carga el progreso del usuario del almacenamiento local del navegador.
 * Si no hay progreso guardado, informa al usuario.
 */
function cargarProgreso() {
    const progresoGuardado = localStorage.getItem('progresoVerbos');
    if (progresoGuardado) {
        const progreso = JSON.parse(progresoGuardado);
        puntuacion = progreso.puntuacion;
        tiemposSeleccionadosUsuario = progreso.tiemposSeleccionadas || todosLosTiemposVerbales;
        mostrarMensaje("Progreso", `Progreso cargado. Puntuación actual: ${puntuacion}, Nivel: ${progreso.nivel}`);
    } else {
        mostrarMensaje("Progreso", "No se encontró ningún archivo de progreso.");
    }
    const verbosGuardados = localStorage.getItem('verbosSeleccionados');
    if (verbosGuardados) {
        verbosSeleccionadosUsuario = JSON.parse(verbosGuardados);
    }

}

// --- Funciones para Mostrar Vistas (renderizar HTML dinámicamente) ---

/**
 * Limpia el contenido del contenedor principal de la aplicación.
 */
function limpiarContenedor() {
    appContainer.innerHTML = '';
}

/**
 * Muestra el menú principal de la aplicación con las nuevas opciones.
 */

function mostrarMenu() {
    console.log('mostrarMenu() llamada.');
    limpiarContenedor();
    setGameBackground(false); // fondo liso en inicio

    // --- Zona de marca: insignia arriba ---
    const logoZone = document.createElement('div');
    logoZone.className = 'logo-zone';
    logoZone.innerHTML = `
        <img class="ins-big" alt="Insignia SILABOS" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCI+CiAgPGRlZnM+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImJldEciIGN4PSI0MCUiIGN5PSIzNSUiIHI9IjY1JSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRjJEQTYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiNBODU1RjciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJyaWdHIiBjeD0iNDAlIiBjeT0iNDAlIiByPSI2NSUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRkZGRkZGIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iNDUlIiBzdG9wLWNvbG9yPSIjMDBDOEZGIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwOTZDOCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0ic3RhckciIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkZGRkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1NSUiIHN0b3AtY29sb3I9IiNBODU1RjciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQTg1NUY3IiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImhhbG9CZXQiIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRjJEQTYiIHN0b3Atb3BhY2l0eT0iMC41NSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjQ1JSIgc3RvcC1jb2xvcj0iI0ZGMkRBNiIgc3RvcC1vcGFjaXR5PSIwLjE4Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGMkRBNiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJoYWxvUmlnIiBjeD0iNTAlIiBjeT0iNTAlIiByPSI1MCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDBDOEZGIiBzdG9wLW9wYWNpdHk9IjAuNSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjQ1JSIgc3RvcC1jb2xvcj0iIzAwQzhGRiIgc3RvcC1vcGFjaXR5PSIwLjE2Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwQzhGRiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPGZpbHRlciBpZD0ic29mdCIgeD0iLTgwJSIgeT0iLTgwJSIgd2lkdGg9IjI2MCUiIGhlaWdodD0iMjYwJSI+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEuMSIgcmVzdWx0PSJiIi8+CiAgICAgIDxmZU1lcmdlPjxmZU1lcmdlTm9kZSBpbj0iYiIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KCiAgPCEtLSBGb25kbyByZWRvbmRvIGNhc2kgbmVncm8gKGZhdmljb24tZnJpZW5kbHkpIC0tPgogIDxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjYwIiBmaWxsPSIjMEEwQTEyIi8+CiAgPGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNTkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0E4NTVGNyIgc3Ryb2tlLW9wYWNpdHk9IjAuMjUiIHN0cm9rZS13aWR0aD0iMSIvPgoKICA8IS0tIEhhbG9zIGFtcGxpb3MsIGNvbiBtYXJnZW4gZGUgc29icmEgZGVudHJvIGRlbCBsaWVuem8gLS0+CiAgPGNpcmNsZSBjeD0iNDIiIGN5PSIzOCIgcj0iMzAiIGZpbGw9InVybCgjaGFsb0JldCkiLz4KICA8Y2lyY2xlIGN4PSI4MCIgY3k9Ijg0IiByPSIzMCIgZmlsbD0idXJsKCNoYWxvUmlnKSIvPgoKICA8IS0tCiAgICBDb25zdGVsYWNpw7NuIGRlIE9yacOzbiwgcmVjZW50cmFkYSBlbiBlbCBsaWVuem8gMTIweDEyMC4KICAgIENpbnR1cmEgKGxhcyAzIG1hcsOtYXMpIGVuIGRpYWdvbmFsIGNlbnRyYWw7IEJldGVsZ2V1c2UgYXJyaWJhLWl6cSwgUmlnZWwgYWJham8tZGVyLgogICAgQ29vcmRlbmFkYXMgY29uIG1hcmdlbiBtw61uaW1vIGRlIDE2cHggYSBjYWRhIGJvcmRlLgogIC0tPgogIDxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSI+CiAgICA8IS0tIGzDrW5lYXMgbW9yYWRhcyAoY3VlcnBvKSAtLT4KICAgIDxnIHN0cm9rZT0iI0E4NTVGNyIgc3Ryb2tlLXdpZHRoPSIxLjQiIG9wYWNpdHk9IjAuODUiPgogICAgICA8bGluZSB4MT0iNDIiIHkxPSIzOCIgeDI9Ijc4IiB5Mj0iNDQiLz4KICAgICAgPGxpbmUgeDE9IjQyIiB5MT0iMzgiIHgyPSI1MCIgeTI9IjYyIi8+CiAgICAgIDxsaW5lIHgxPSI3OCIgeTE9IjQ0IiB4Mj0iNzIiIHkyPSI2MiIvPgogICAgICA8bGluZSB4MT0iNTAiIHkxPSI2MiIgeDI9IjM4IiB5Mj0iOTAiLz4KICAgICAgPGxpbmUgeDE9IjcyIiB5MT0iNjIiIHgyPSI4MCIgeTI9Ijg0Ii8+CiAgICA8L2c+CiAgICA8IS0tIGNpbnR1csOzbiAoY2lhbiwgbcOhcyBncnVlc28pIC0tPgogICAgPGcgc3Ryb2tlPSIjMDBDOEZGIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuOTUiPgogICAgICA8bGluZSB4MT0iNTAiIHkxPSI2MiIgeDI9IjYxIiB5Mj0iNjEiLz4KICAgICAgPGxpbmUgeDE9IjYxIiB5MT0iNjEiIHgyPSI3MiIgeTI9IjYyIi8+CiAgICA8L2c+CiAgICA8IS0tIGzDrW5lYSBiYXNlIHB1bnRlYWRhIChlc3BhZGEvYmFzZSkgLS0+CiAgICA8bGluZSB4MT0iMzgiIHkxPSI5MCIgeDI9IjgwIiB5Mj0iODQiIHN0cm9rZT0iIzAwQzhGRiIgc3Ryb2tlLXdpZHRoPSIwLjkiIHN0cm9rZS1kYXNoYXJyYXk9IjIuNSw0IiBvcGFjaXR5PSIwLjciLz4KICA8L2c+CgogIDwhLS0gRXN0cmVsbGFzIC0tPgogIDwhLS0gQmV0ZWxnZXVzZSAoZnV4aWEsIGhvbWJybyBzdXAtaXpxKSAtLT4KICA8Y2lyY2xlIGN4PSI0MiIgY3k9IjM4IiByPSI1LjIiIGZpbGw9InVybCgjYmV0RykiIGZpbHRlcj0idXJsKCNzb2Z0KSIvPgogIDwhLS0gQmVsbGF0cml4IChob21icm8gc3VwLWRlcikgLS0+CiAgPGNpcmNsZSBjeD0iNzgiIGN5PSI0NCIgcj0iMy40IiBmaWxsPSIjQTg1NUY3IiBmaWx0ZXI9InVybCgjc29mdCkiLz4KICA8IS0tIENpbnR1csOzbjogMyBtYXLDrWFzIC0tPgogIDxjaXJjbGUgY3g9IjUwIiBjeT0iNjIiIHI9IjIuOCIgZmlsbD0iIzAwQzhGRiIgZmlsdGVyPSJ1cmwoI3NvZnQpIi8+CiAgPGNpcmNsZSBjeD0iNjEiIGN5PSI2MSIgcj0iMyIgICBmaWxsPSIjRkZGRkZGIiBmaWx0ZXI9InVybCgjc29mdCkiLz4KICA8Y2lyY2xlIGN4PSI3MiIgY3k9IjYyIiByPSIyLjgiIGZpbGw9IiMwMEM4RkYiIGZpbHRlcj0idXJsKCNzb2Z0KSIvPgogIDwhLS0gU2FpcGggKHJvZGlsbGEgaXpxKSAtLT4KICA8Y2lyY2xlIGN4PSIzOCIgY3k9IjkwIiByPSIyLjYiIGZpbGw9IiNBODU1RjciIGZpbHRlcj0idXJsKCNzb2Z0KSIvPgogIDwhLS0gUmlnZWwgKHBpZSBkZXIsIGNpYW4gYnJpbGxhbnRlKSAtLT4KICA8Y2lyY2xlIGN4PSI4MCIgY3k9Ijg0IiByPSI0LjYiIGZpbGw9InVybCgjcmlnRykiIGZpbHRlcj0idXJsKCNzb2Z0KSIvPgoKICA8IS0tIGRlc3RlbGxvcyBzdXRpbGVzIGNlbnRyYWRvcyBzb2JyZSBlc3RyZWxsYXMgZ3JhbmRlcyAtLT4KICA8Y2lyY2xlIGN4PSI0MiIgY3k9IjM4IiByPSI5IiBmaWxsPSJ1cmwoI3N0YXJHKSIgb3BhY2l0eT0iMC41Ii8+CiAgPGNpcmNsZSBjeD0iODAiIGN5PSI4NCIgcj0iOCIgZmlsbD0idXJsKCNzdGFyRykiIG9wYWNpdHk9IjAuNDUiLz4KPC9zdmc+Cg==">
        <div class="mark">ConJuanjugator</div>
        <div class="tag">conjuga jugando</div>
    `;
    appContainer.appendChild(logoZone);

    // --- Tarjetas de acceso (Aprender / Jugar) ---
    const cards = document.createElement('div');
    cards.className = 'home-cards';

    const cardLeer = document.createElement('button');
    cardLeer.className = 'home-card learn';
    cardLeer.innerHTML = `
        <span class="icwrap"><svg class="ico" viewBox="0 0 24 24"><use href="#i-book"/></svg></span>
        <h3>Leer para aprender</h3>
        <p>Estudia las formas verbales y los usos</p>
    `;
    cardLeer.onclick = mostrarSubMenuAprender;

    const cardJugar = document.createElement('button');
    cardJugar.className = 'home-card play';
    cardJugar.innerHTML = `
        <span class="icwrap"><svg class="ico" viewBox="0 0 24 24"><use href="#i-pad"/></svg></span>
        <h3>Jugar para practicar</h3>
        <p>Pon a prueba tus conocimientos</p>
    `;
    cardJugar.onclick = mostrarSubMenuPracticar;

    cards.appendChild(cardLeer);
    cards.appendChild(cardJugar);
    appContainer.appendChild(cards);

    // --- Firma SILABOS al pie: logo + texto ---
    const foot = document.createElement('div');
    foot.style.textAlign = 'center';
    foot.innerHTML = `
        <img class="logo-foot" alt="SILABOS" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMCAtMTAgNjMwIDE0NSI+CiAgPGRlZnM+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImdiIiBjeD0iMzUlIiBjeT0iMzUlIiByPSI2NSUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRkYyREE2Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0E4NTVGNyIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZ3IiIGN4PSIzNSUiIGN5PSI1MCUiIHI9IjY1JSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkZGRkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMEM4RkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQTg1NUY3Ii8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJoYiIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgIHN0b3AtY29sb3I9IiNGRjJEQTYiIHN0b3Atb3BhY2l0eT0iMC4yMiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjQwJSIgc3RvcC1jb2xvcj0iI0ZGMkRBNiIgc3RvcC1vcGFjaXR5PSIwLjEwIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGMkRBNiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJociIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgIHN0b3AtY29sb3I9IiMwMEM4RkYiIHN0b3Atb3BhY2l0eT0iMC4yMiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjQwJSIgc3RvcC1jb2xvcj0iIzAwQzhGRiIgc3RvcC1vcGFjaXR5PSIwLjEwIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwQzhGRiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJiZXQtbm9kZSIgY3g9IjQwJSIgY3k9IjM1JSIgcj0iNjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgICBzdG9wLWNvbG9yPSIjRkYyREE2IiBzdG9wLW9wYWNpdHk9IjAuOSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjYwJSIgIHN0b3AtY29sb3I9IiNBODU1RjciIHN0b3Atb3BhY2l0eT0iMC43Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBBMEExMiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJmbGFzaCIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0E4NTVGNyIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iYmx1ci1oZWF2eSIgeD0iLTE1MCUiIHk9Ii0xNTAlIiB3aWR0aD0iNDAwJSIgaGVpZ2h0PSI0MDAlIj4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIvPgogICAgPC9maWx0ZXI+CiAgICA8ZmlsdGVyIGlkPSJnbG93LXNtIiB4PSItMTAwJSIgeT0iLTEwMCUiIHdpZHRoPSIzMDAlIiBoZWlnaHQ9IjMwMCUiPgogICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjUiIHJlc3VsdD0iYiIvPgogICAgICA8ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49ImIiLz48ZmVNZXJnZU5vZGUgaW49IlNvdXJjZUdyYXBoaWMiLz48L2ZlTWVyZ2U+CiAgICA8L2ZpbHRlcj4KCiAgICA8c3R5bGU+CiAgICAgIEBrZXlmcmFtZXMgZmx5SW4gewogICAgICAgIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS1veCksIHZhcigtLW95KSkgc2NhbGUoMC4wNSk7IG9wYWNpdHk6IDA7IH0KICAgICAgICAyMCUgIHsgb3BhY2l0eTogMTsgfQogICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfQogICAgICB9CiAgICAgIEBrZXlmcmFtZXMgZHJhd0xpbmUgewogICAgICAgIHRvIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7IG9wYWNpdHk6IDE7IH0KICAgICAgfQogICAgICBAa2V5ZnJhbWVzIGZsYXNoRWZmZWN0IHsKICAgICAgICAwJSAgIHsgcjogMTsgb3BhY2l0eTogMDsgfQogICAgICAgIDIwJSAgeyBvcGFjaXR5OiAwLjk7IH0KICAgICAgICAxMDAlIHsgcjogMjQ7IG9wYWNpdHk6IDA7IH0KICAgICAgfQogICAgICBAa2V5ZnJhbWVzIGZhZGVJbiAgeyB0byB7IG9wYWNpdHk6IDE7IH0gfQogICAgICBAa2V5ZnJhbWVzIGxldHJhSW4gewogICAgICAgIDAlICAgeyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7IH0KICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9CiAgICAgIH0KICAgICAgQGtleWZyYW1lcyB0YWdsaW5lSW4gewogICAgICAgIDAlICAgeyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTsgfQogICAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0KICAgICAgfQoKICAgICAgLnN0YXIgICAgICAgIHsgb3BhY2l0eTogMDsgYW5pbWF0aW9uOiBmbHlJbiAwLjlzIGN1YmljLWJlemllcigwLjQ1LDAuMDUsMC41NSwwLjk1KSBmb3J3YXJkczsgfQogICAgICAubGluZS1kcmF3ICAgeyBvcGFjaXR5OiAwOyBhbmltYXRpb246IGRyYXdMaW5lIDAuNHMgZWFzZS1vdXQgZm9yd2FyZHM7IHN0cm9rZS1kYXNoYXJyYXk6IDE1MDsgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE1MDsgfQogICAgICAuZmxhc2gtY2lyY2xleyBvcGFjaXR5OiAwOyBhbmltYXRpb246IGZsYXNoRWZmZWN0IDAuNTVzIGVhc2Utb3V0IGZvcndhcmRzOyB9CiAgICAgIC5oYWxvICAgICAgICB7IG9wYWNpdHk6IDA7IGFuaW1hdGlvbjogZmFkZUluIDAuOHMgZWFzZS1vdXQgZm9yd2FyZHM7IH0KICAgICAgLmxldHJhICAgICAgIHsgb3BhY2l0eTogMDsgYW5pbWF0aW9uOiBsZXRyYUluIDAuMzVzIGVhc2Utb3V0IGZvcndhcmRzOyB9CiAgICAgICN0YWdsaW5lICAgICB7IG9wYWNpdHk6IDA7IGFuaW1hdGlvbjogdGFnbGluZUluIDAuNXMgZWFzZS1vdXQgNC44cyBmb3J3YXJkczsgfQoKICAgICAgI3MtYmV0ZWxnZXVzZSB7IC0tb3g6IDcxcHg7ICAtLW95OiA4MXB4OyAgYW5pbWF0aW9uLWRlbGF5OiAwLjBzOyB0cmFuc2Zvcm0tb3JpZ2luOiAyNHB4IDE0cHg7ICAgfQogICAgICAjcy1iZWxsYXRyaXggIHsgLS1veDotMTE4cHg7IC0tb3k6IDU5cHg7ICBhbmltYXRpb24tZGVsYXk6IDAuMnM7IHRyYW5zZm9ybS1vcmlnaW46IDg4cHggMjZweDsgICB9CiAgICAgICNzLW1pbnRha2EgICAgeyAtLW94OiA0MXB4OyAgLS1veTotNTVweDsgIGFuaW1hdGlvbi1kZWxheTogMC40czsgdHJhbnNmb3JtLW9yaWdpbjogMzRweCA2MHB4OyAgIH0KICAgICAgI3MtYWxuaWxhbSAgICB7IC0tb3g6LTQ2cHg7ICAtLW95Oi00OHB4OyAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzOyB0cmFuc2Zvcm0tb3JpZ2luOiA1NnB4IDU4cHg7ICAgfQogICAgICAjcy1hbG5pdGFrICAgIHsgLS1veDotNDNweDsgIC0tb3k6IDQzcHg7ICBhbmltYXRpb24tZGVsYXk6IDAuOHM7IHRyYW5zZm9ybS1vcmlnaW46IDc4cHggNTJweDsgICB9CiAgICAgICNzLXNhaXBoICAgICAgeyAtLW94OiA2MHB4OyAgLS1veTotNThweDsgIGFuaW1hdGlvbi1kZWxheTogMS4wczsgdHJhbnNmb3JtLW9yaWdpbjogMjBweCAxMDhweDsgIH0KICAgICAgI3MtcmlnZWwgICAgICB7IC0tb3g6LTk1cHg7ICAtLW95Oi00NXB4OyAgYW5pbWF0aW9uLWRlbGF5OiAxLjJzOyB0cmFuc2Zvcm0tb3JpZ2luOiAxMDBweCAxMDBweDsgfQoKICAgICAgI2ZsMSB7IGFuaW1hdGlvbi1kZWxheTogMC45czsgfSAjZmwyIHsgYW5pbWF0aW9uLWRlbGF5OiAxLjFzOyB9CiAgICAgICNmbDMgeyBhbmltYXRpb24tZGVsYXk6IDEuM3M7IH0gI2ZsNCB7IGFuaW1hdGlvbi1kZWxheTogMS41czsgfQogICAgICAjZmw1IHsgYW5pbWF0aW9uLWRlbGF5OiAxLjdzOyB9ICNmbDYgeyBhbmltYXRpb24tZGVsYXk6IDEuOXM7IH0KICAgICAgI2ZsNyB7IGFuaW1hdGlvbi1kZWxheTogMi4xczsgfQoKICAgICAgI2hhbG8tYmV0ZWxnZXVzZSAgeyBhbmltYXRpb24tZGVsYXk6IDAuOXM7IH0KICAgICAgI2hhbG8tYmV0ZWxnZXVzZTIgeyBhbmltYXRpb24tZGVsYXk6IDAuOXM7IH0KICAgICAgI2hhbG8tcmlnZWwgICAgICAgeyBhbmltYXRpb24tZGVsYXk6IDIuMXM7IH0KICAgICAgI2hhbG8tcmlnZWwyICAgICAgeyBhbmltYXRpb24tZGVsYXk6IDIuMXM7IH0KCiAgICAgICNsMSB7IGFuaW1hdGlvbi1kZWxheTogMi4zMHM7IH0gI2wyIHsgYW5pbWF0aW9uLWRlbGF5OiAyLjQzczsgfQogICAgICAjbDMgeyBhbmltYXRpb24tZGVsYXk6IDIuNTZzOyB9ICNsNCB7IGFuaW1hdGlvbi1kZWxheTogMi42OXM7IH0KICAgICAgI2w1IHsgYW5pbWF0aW9uLWRlbGF5OiAyLjgyczsgfSAjbDYgeyBhbmltYXRpb24tZGVsYXk6IDIuOTVzOyB9CiAgICAgICNsNyB7IGFuaW1hdGlvbi1kZWxheTogMy4wOHM7IH0KICAgICAgI2w4IHsgYW5pbWF0aW9uLWRlbGF5OiAzLjIxczsgc3Ryb2tlLWRhc2hhcnJheTogMyw0OyBzdHJva2UtZGFzaG9mZnNldDogMDsgfQoKICAgICAgI2x0MSB7IGFuaW1hdGlvbi1kZWxheTogMy43czsgIH0gI2x0MiB7IGFuaW1hdGlvbi1kZWxheTogMy44M3M7IH0KICAgICAgI2x0MyB7IGFuaW1hdGlvbi1kZWxheTogMy45NnM7IH0gI2x0NCB7IGFuaW1hdGlvbi1kZWxheTogNC4wOXM7IH0KICAgICAgI2x0NSB7IGFuaW1hdGlvbi1kZWxheTogNC4yMnM7IH0gI2x0NiB7IGFuaW1hdGlvbi1kZWxheTogNC4zNXM7IH0KICAgICAgI2x0NyB7IGFuaW1hdGlvbi1kZWxheTogNC40OHM7IH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgoKICA8IS0tIEhhbG9zIC0tPgogIDxjaXJjbGUgaWQ9ImhhbG8tYmV0ZWxnZXVzZSIgIGNsYXNzPSJoYWxvIiBjeD0iMjQiICBjeT0iMTQiICByPSIzOCIgZmlsbD0idXJsKCNoYikiIGZpbHRlcj0idXJsKCNibHVyLWhlYXZ5KSIvPgogIDxjaXJjbGUgaWQ9ImhhbG8tYmV0ZWxnZXVzZTIiIGNsYXNzPSJoYWxvIiBjeD0iMjQiICBjeT0iMTQiICByPSIxOCIgZmlsbD0iIzBBMEExMiIgZmlsdGVyPSJ1cmwoI2JsdXItaGVhdnkpIi8+CiAgPGNpcmNsZSBpZD0iaGFsby1yaWdlbCIgICAgICAgY2xhc3M9ImhhbG8iIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjM4IiBmaWxsPSJ1cmwoI2hyKSIgZmlsdGVyPSJ1cmwoI2JsdXItaGVhdnkpIi8+CiAgPGNpcmNsZSBpZD0iaGFsby1yaWdlbDIiICAgICAgY2xhc3M9ImhhbG8iIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjE4IiBmaWxsPSIjMEEwQTEyIiBmaWx0ZXI9InVybCgjYmx1ci1oZWF2eSkiLz4KCiAgPCEtLSBMw61uZWFzIOKAlCB0b2RhcyBuw610aWRhcywgc2luIGZpbHRybyAtLT4KICA8bGluZSBpZD0ibDEiIGNsYXNzPSJsaW5lLWRyYXciIHgxPSIyNCIgIHkxPSIxNCIgIHgyPSI4OCIgIHkyPSIyNiIgIHN0cm9rZT0iI0E4NTVGNyIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxsaW5lIGlkPSJsMiIgY2xhc3M9ImxpbmUtZHJhdyIgeDE9IjI0IiAgeTE9IjE0IiAgeDI9IjM0IiAgeTI9IjYwIiAgc3Ryb2tlPSIjQTg1NUY3IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPGxpbmUgaWQ9ImwzIiBjbGFzcz0ibGluZS1kcmF3IiB4MT0iODgiICB5MT0iMjYiICB4Mj0iNzgiICB5Mj0iNTIiICBzdHJva2U9IiNBODU1RjciIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8bGluZSBpZD0ibDQiIGNsYXNzPSJsaW5lLWRyYXciIHgxPSIzNCIgIHkxPSI2MCIgIHgyPSI1NiIgIHkyPSI1OCIgIHN0cm9rZT0iIzAwQzhGRiIgc3Ryb2tlLXdpZHRoPSIyIiAgIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxsaW5lIGlkPSJsNSIgY2xhc3M9ImxpbmUtZHJhdyIgeDE9IjU2IiAgeTE9IjU4IiAgeDI9Ijc4IiAgeTI9IjUyIiAgc3Ryb2tlPSIjMDBDOEZGIiBzdHJva2Utd2lkdGg9IjIiICAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPGxpbmUgaWQ9Imw2IiBjbGFzcz0ibGluZS1kcmF3IiB4MT0iMzQiICB5MT0iNjAiICB4Mj0iMjAiICB5Mj0iMTA4IiBzdHJva2U9IiNBODU1RjciIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8bGluZSBpZD0ibDciIGNsYXNzPSJsaW5lLWRyYXciIHgxPSI3OCIgIHkxPSI1MiIgIHgyPSIxMDAiIHkyPSIxMDAiIHN0cm9rZT0iI0E4NTVGNyIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxsaW5lIGlkPSJsOCIgY2xhc3M9ImxpbmUtZHJhdyIgeDE9IjIwIiAgeTE9IjEwOCIgeDI9IjEwMCIgeTI9IjEwMCIgc3Ryb2tlPSIjMDBDOEZGIiBzdHJva2Utd2lkdGg9IjAuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CgogIDwhLS0gTm9kb3MgaW50ZXJtZWRpb3MgLS0+CiAgPGcgaWQ9InMtYmVsbGF0cml4IiBjbGFzcz0ic3RhciI+PGNpcmNsZSBjeD0iODgiICBjeT0iMjYiICByPSI3IiAgZmlsbD0iI0E4NTVGNyIvPjwvZz4KICA8ZyBpZD0icy1taW50YWthIiAgIGNsYXNzPSJzdGFyIj48Y2lyY2xlIGN4PSIzNCIgIGN5PSI2MCIgIHI9IjUiICBmaWxsPSIjMDBDOEZGIi8+PC9nPgogIDxnIGlkPSJzLWFsbmlsYW0iICAgY2xhc3M9InN0YXIiPjxjaXJjbGUgY3g9IjU2IiAgY3k9IjU4IiAgcj0iNSIgIGZpbGw9IiMwMEM4RkYiLz48L2c+CiAgPGcgaWQ9InMtYWxuaXRhayIgICBjbGFzcz0ic3RhciI+PGNpcmNsZSBjeD0iNzgiICBjeT0iNTIiICByPSI1IiAgZmlsbD0iIzAwQzhGRiIvPjwvZz4KICA8ZyBpZD0icy1zYWlwaCIgICAgIGNsYXNzPSJzdGFyIj48Y2lyY2xlIGN4PSIyMCIgIGN5PSIxMDgiIHI9IjYiICBmaWxsPSIjQTg1NUY3Ii8+PC9nPgoKICA8IS0tIEJldGVsZ2V1c2UgLS0+CiAgPGcgaWQ9InMtYmV0ZWxnZXVzZSIgY2xhc3M9InN0YXIiPgogICAgPGNpcmNsZSBjeD0iMjQiIGN5PSIxNCIgcj0iOSIgZmlsbD0iIzBBMEExMiIvPgogICAgPGNpcmNsZSBjeD0iMjQiIGN5PSIxNCIgcj0iOSIgZmlsbD0idXJsKCNiZXQtbm9kZSkiIGZpbHRlcj0idXJsKCNnbG93LXNtKSIvPgogIDwvZz4KCiAgPCEtLSBSaWdlbCBjb24gUyBjZW50cmFkYSAtLT4KICA8ZyBpZD0icy1yaWdlbCIgY2xhc3M9InN0YXIiIGZpbHRlcj0idXJsKCNnbG93LXNtKSI+CiAgICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjgiIGZpbGw9InVybCgjZ3IpIiBvcGFjaXR5PSIwLjc1Ii8+CiAgICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBBMEExMiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KICAgIDx0ZXh0IHg9IjEwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIKICAgICAgZm9udC1mYW1pbHk9Ikdlb3JnaWEsc2VyaWYiIGZvbnQtc2l6ZT0iOSIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzBBMEExMiI+UzwvdGV4dD4KICA8L2c+CgogIDwhLS0gRmxhc2hlcyAtLT4KICA8Y2lyY2xlIGlkPSJmbDEiIGNsYXNzPSJmbGFzaC1jaXJjbGUiIGN4PSIyNCIgIGN5PSIxNCIgIHI9IjEiIGZpbGw9InVybCgjZmxhc2gpIi8+CiAgPGNpcmNsZSBpZD0iZmwyIiBjbGFzcz0iZmxhc2gtY2lyY2xlIiBjeD0iODgiICBjeT0iMjYiICByPSIxIiBmaWxsPSJ1cmwoI2ZsYXNoKSIvPgogIDxjaXJjbGUgaWQ9ImZsMyIgY2xhc3M9ImZsYXNoLWNpcmNsZSIgY3g9IjM0IiAgY3k9IjYwIiAgcj0iMSIgZmlsbD0idXJsKCNmbGFzaCkiLz4KICA8Y2lyY2xlIGlkPSJmbDQiIGNsYXNzPSJmbGFzaC1jaXJjbGUiIGN4PSI1NiIgIGN5PSI1OCIgIHI9IjEiIGZpbGw9InVybCgjZmxhc2gpIi8+CiAgPGNpcmNsZSBpZD0iZmw1IiBjbGFzcz0iZmxhc2gtY2lyY2xlIiBjeD0iNzgiICBjeT0iNTIiICByPSIxIiBmaWxsPSJ1cmwoI2ZsYXNoKSIvPgogIDxjaXJjbGUgaWQ9ImZsNiIgY2xhc3M9ImZsYXNoLWNpcmNsZSIgY3g9IjIwIiAgY3k9IjEwOCIgcj0iMSIgZmlsbD0idXJsKCNmbGFzaCkiLz4KICA8Y2lyY2xlIGlkPSJmbDciIGNsYXNzPSJmbGFzaC1jaXJjbGUiIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjEiIGZpbGw9InVybCgjZmxhc2gpIi8+CgogIDwhLS0gU0lMQUJPUyBsZXRyYSBhIGxldHJhIOKAlCBtaXNtbyBlc3RpbG8gcXVlIGVsIGJhbm5lciBvcmlnaW5hbCBhenVsIC0tPgogIDx0ZXh0IGZvbnQtZmFtaWx5PSJHZW9yZ2lhLCdUaW1lcyBOZXcgUm9tYW4nLHNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIj4KICAgIDx0c3BhbiBpZD0ibHQxIiBjbGFzcz0ibGV0cmEiIHg9IjEzNiIgeT0iODgiIGZpbGw9IiNGRjJEQTYiPlM8L3RzcGFuPgogICAgPHRzcGFuIGlkPSJsdDIiIGNsYXNzPSJsZXRyYSIgZmlsbD0iI0ZGMkRBNiI+STwvdHNwYW4+CiAgICA8dHNwYW4gaWQ9Imx0MyIgY2xhc3M9ImxldHJhIiBmaWxsPSIjQTg1NUY3Ij5MPC90c3Bhbj4KICAgIDx0c3BhbiBpZD0ibHQ0IiBjbGFzcz0ibGV0cmEiIGZpbGw9IiNBODU1RjciPkE8L3RzcGFuPgogICAgPHRzcGFuIGlkPSJsdDUiIGNsYXNzPSJsZXRyYSIgZmlsbD0iI0E4NTVGNyI+QjwvdHNwYW4+CiAgICA8dHNwYW4gaWQ9Imx0NiIgY2xhc3M9ImxldHJhIiBmaWxsPSIjMDBDOEZGIj5PPC90c3Bhbj4KICAgIDx0c3BhbiBpZD0ibHQ3IiBjbGFzcz0ibGV0cmEiIGZpbGw9IiMwMEM4RkYiPlM8L3RzcGFuPgogIDwvdGV4dD4KCiAgPCEtLSBUYWdsaW5lIC0tPgogIDx0ZXh0IGlkPSJ0YWdsaW5lIiB4PSIxMzciIHk9IjExNiIKICAgIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIgogICAgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjQpIiBsZXR0ZXItc3BhY2luZz0iMy41Ij4KICAgIFBFREFHT0fDjUEgwrcgSUEgwrcgRUxFCiAgPC90ZXh0PgoKPC9zdmc+Cg==">
    `;
    appContainer.appendChild(foot);
}


/**
 * Muestra el submenú para las actividades de "Aprender".
 */
function mostrarSubMenuAprender() {
    console.log('mostrarSubMenuAprender() llamada.');
    limpiarContenedor();
    setGameBackground(false);

    const titulo = document.createElement('h2');
    titulo.textContent = 'Leer para aprender';
    appContainer.appendChild(titulo);

    const instruccion = document.createElement('p');
    instruccion.className = 'section-sub';
    instruccion.textContent = 'Selecciona un tema para aprender';
    appContainer.appendChild(instruccion);

    const lista = document.createElement('div');
    lista.className = 'row-list';
    lista.appendChild(crearRowCard('i-book', 'var(--cian)', 'Tiempos Verbales: Uso y Forma', 'Cómo se forman y cuándo se usan', mostrarExplicacionesTiemposVerbales));
    lista.appendChild(crearRowCard('i-warn', 'var(--verde)', 'Verbos Irregulares', 'Bota, sombrero, radical y más', mostrarVerbosRegularesIrregulares));
    lista.appendChild(crearRowCard('i-book', 'var(--morado)', 'Significado de los Verbos', 'Qué expresa cada verbo', mostrarSignificadoVerbos));
    appContainer.appendChild(lista);

    const botonVolver = document.createElement('button');
    botonVolver.textContent = 'Volver al Menú Principal';
    botonVolver.onclick = mostrarMenu;
    botonVolver.classList.add('back-button');
    appContainer.appendChild(botonVolver);
}

/**
 * Muestra el submenú para las actividades de "Practicar".
 */
function mostrarSubMenuPracticar() {
    limpiarContenedor();
    setGameBackground(false);

    const titulo = document.createElement('h2');
    titulo.textContent = 'Jugar para practicar';
    appContainer.appendChild(titulo);

    const instruccion = document.createElement('p');
    instruccion.className = 'section-sub';
    instruccion.textContent = 'Selecciona una actividad';
    appContainer.appendChild(instruccion);

    const lista = document.createElement('div');
    lista.className = 'row-list';
    lista.appendChild(crearRowCard('i-target', 'var(--fuxia)', 'ConJuanJugator', 'Conjuga en el tiempo indicado', mostrarSubMenuTiemposVerbales));
    lista.appendChild(crearRowCard('i-clock', 'var(--morado)', 'Indefinido o Imperfecto', 'Distingue los dos pasados', mostrarSubMenuIndefinidoImperfecto));
    lista.appendChild(crearRowCard('i-warn', 'var(--verde)', 'Regular o Irregular', 'Clasifica verbos arrastrando', mostrarSelectorTiempoJuegoArrastrar));
    appContainer.appendChild(lista);

    const botonVolver = document.createElement('button');
    botonVolver.textContent = 'Volver al Menú Principal';
    botonVolver.onclick = mostrarMenu;
    botonVolver.classList.add('back-button');
    appContainer.appendChild(botonVolver);
}
/**
 * Muestra un selector de tiempo verbal para iniciar el juego de arrastrar directamente.
 */
function mostrarSelectorTiempoJuegoArrastrar() {
    limpiarContenedor();
    setGameBackground(false);

    const titulo = document.createElement('h2');
    titulo.textContent = 'Regular o Irregular';
    appContainer.appendChild(titulo);

    const instruccion = document.createElement('p');
    instruccion.className = 'section-sub';
    instruccion.textContent = 'Selecciona un tiempo verbal para jugar';
    appContainer.appendChild(instruccion);

    // Grupos por MODO (como en la v5)
    const indicativo = ["presente", "pretérito perfecto", "pretérito indefinido", "pretérito imperfecto", "pluscuamperfecto", "futuro", "condicional"];
    const subjuntivo = ["presente de subjuntivo", "imperfecto de subjuntivo", "pluscuamperfecto de subjuntivo"];

    const capitalizar = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    // Handler de selección: conserva exactamente la lógica original
    const lanzarJuego = (selectedTimeRaw) => {
        const selectedTime = selectedTimeRaw.toLowerCase();
        let standardizedTime = selectedTime;
        if (selectedTime.includes("indefinido")) {
            standardizedTime = "pretérito indefinido";
        } else if (selectedTime.includes("imperfecto") && !selectedTime.includes("subjuntivo")) {
            standardizedTime = "pretérito imperfecto";
        }
        mostrarJuegoArrastrarVerbosPorTiempo(standardizedTime);
    };

    const construirGrupo = (tituloModo, claseModo, tiempos, accent) => {
        const label = document.createElement('div');
        label.className = 'group-label ' + claseModo;
        label.textContent = tituloModo;
        appContainer.appendChild(label);

        const lista = document.createElement('div');
        lista.className = 'row-list row-list--compact';
        tiempos.forEach(t => {
            lista.appendChild(crearRowTiempo(t, accent, () => lanzarJuego(t)));
        });
        appContainer.appendChild(lista);
    };

    construirGrupo('Modo Indicativo', 'ind', indicativo, 'var(--cian)');
    construirGrupo('Modo Subjuntivo', 'sub', subjuntivo, 'var(--amarillo)');

    const botonVolver = document.createElement('button');
    botonVolver.textContent = 'Volver al Menú de Practicar';
    botonVolver.onclick = mostrarSubMenuPracticar;
    botonVolver.classList.add('back-button');
    appContainer.appendChild(botonVolver);
}




// Variable global para el verbo que se está arrastrando
let currentVerbIndex = 0; // Nuevo: Para llevar la cuenta del verbo actual en la lista `verbsToPlay`
let verbsToPlay = []; // Nuevo: Almacenará la lista de los 15 verbos aleatorios para esta partida


/**
 * Muestra el juego de arrastrar verbos a sus categorías de irregularidad para un tiempo verbal específico.
 * @param {string} tiempoKey - La clave del tiempo verbal para el juego.
 */
// Asegúrate de que estas variables estén definidas globalmente al inicio de tu script3.js
// Ejemplo:
// let verbsToPlay = [];
// let currentVerbIndex = 0;
// let arrastrarVerboActual = null; // Esta variable guarda el verbo que se está arrastrando/tocando
// const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
// function removeAccents(str) { ... }
// function mostrarMensaje(titulo, mensaje) { ... }
// function limpiarContenedor() { ... }
// function mostrarSelectorTiempoJuegoArrastrar() { ... }
// const explicacionesVerbos = { ... }; // Asegúrate de que esto esté cargado
// const explicacionesIrregularidadesTiempos = { ... }; // Asegúrate de que esto esté cargado
// const appContainer = document.getElementById('app-container'); // Asegúrate de que appContainer esté definido

function mostrarJuegoArrastrarVerbosPorTiempo(tiempoKey) {
    console.log('[DEBUG] Valor de tiempoKey al inicio de la función:', tiempoKey);
    limpiarContenedor();
    setGameBackground(true);
    const titulo = document.createElement('h2');
    titulo.textContent = `Regular o Irregular · ${tiempoKey.charAt(0).toUpperCase() + tiempoKey.slice(1)}`;
    appContainer.appendChild(titulo);

    const instruccion = document.createElement('p');
    // Instrucción diferente según el tipo de dispositivo
    instruccion.textContent = isTouchDevice ? 'Toca el verbo y luego toca la categoría correcta.' : 'Arrastra cada verbo a su categoría de irregularidad:';
    appContainer.appendChild(instruccion);

    const explanationButtonContainer = document.createElement('div');
    explanationButtonContainer.style.textAlign = 'center'; // Centra el botón
    explanationButtonContainer.style.marginBottom = '20px'; // Añade espacio debajo

    const explanationButton = document.createElement('button');
    explanationButton.className = 'help-btn';
    explanationButton.title = 'Ver explicación de los tipos de verbo';
    explanationButton.innerHTML = '<svg class="ico" viewBox="0 0 24 24"><use href="#i-help"/></svg>¿Qué tipos de verbos hay?';
    explanationButton.onclick = function() {
        mostrarModalTiposVerbos();
    };

    explanationButtonContainer.appendChild(explanationButton);
    appContainer.appendChild(explanationButtonContainer);


    const gameArea = document.createElement('div');
    gameArea.className = 'game-area';
    appContainer.appendChild(gameArea);

    const gameInfo = explicacionesIrregularidadesTiempos[tiempoKey];
    if (!gameInfo || !gameInfo.gameCategories || gameInfo.gameCategories.length === 0) {
        mostrarMensaje("Error", "No hay categorías de juego definidas para este tiempo verbal.");
        // Asegúrate de que mostrarExplicacionesIrregularidadesPorTiempo esté definida y sea accesible
        // mostrarExplicacionesIrregularidadesPorTiempo(tiempoKey); // Descomenta si esta función existe y es el flujo deseado
        return;
    }

    const categoriesForGame = gameInfo.gameCategories;

    // --- LÓGICA DE SELECCIÓN DE VERBOS Y MEZCLA ---
    const MAX_VERBS_IN_GAME = 15;

    const allRelevantVerbs = Object.keys(explicacionesVerbos).filter(verbo => {
        const unaccentedTiempoKey = removeAccents(tiempoKey);
        let verbTypeProperty = `${unaccentedTiempoKey.replace(/ /g, '')}TipoIrregular`;

        if (tiempoKey === "pretérito indefinido") {
            verbTypeProperty = "indefinidoTipoIrregular";
        } else if (tiempoKey === "pretérito imperfecto") {
            verbTypeProperty = "imperfectoTipoIrregular";
        }
        // Asegúrate de que el verbo tenga la propiedad definida
        return explicacionesVerbos[verbo.toLowerCase()] && explicacionesVerbos[verbo.toLowerCase()].hasOwnProperty(verbTypeProperty);
    });

    allRelevantVerbs.sort(() => 0.5 - Math.random()); // Mezcla los verbos
    verbsToPlay = allRelevantVerbs.slice(0, MAX_VERBS_IN_GAME); // Selecciona un subconjunto
    currentVerbIndex = 0;

    if (verbsToPlay.length === 0) {
        mostrarMensaje("Información", `No hay verbos disponibles para el juego en este tiempo verbal (${tiempoKey}). Asegúrate de que los verbos en 'explicacionesVerbos' tengan definida la propiedad '${removeAccents(tiempoKey).replace(/ /g, '')}TipoIrregular'.`);
        mostrarSelectorTiempoJuegoArrastrar();
        return;
    }

    // Contenedor para el verbo actual a clasificar (visible para ambos modos)
    const currentVerbDisplayContainer = document.createElement('div');
    currentVerbDisplayContainer.className = 'current-verb-display-container'; // Estilo para este contenedor
    gameArea.appendChild(currentVerbDisplayContainer);

    // --- FUNCIÓN PARA VALIDAR LA CLASIFICACIÓN (MISMA LÓGICA PARA AMBOS MODOS) ---
    // (Asegúrate de que esta función esté definida en un ámbito accesible,
    // idealmente globalmente o justo antes de mostrarJuegoArrastrarVerbosPorTiempo)
    function validarVerboEnDropZone(verbId, tiempo, dropZoneId) {
        const verbInfo = explicacionesVerbos[verbId];
        const targetCategory = categoriesForGame.find(cat_item => cat_item.id === dropZoneId);
        const targetTypeMatch = targetCategory ? targetCategory.typeMatch : null;

        let esCorrecto = false;
        let tipoEsperado = targetTypeMatch;
        let tipoVerboReal = "";

        const tiemposDeParticipio = ["pretérito perfecto", "pluscuamperfecto", "pluscuamperfecto de subjuntivo"];

        if (tiemposDeParticipio.includes(tiempo)) {
            let propertyToUse;
            if (tiempo === "pretérito perfecto") {
                propertyToUse = "pluscuamperfectoTipoIrregular"; 
            } else {
                propertyToUse = `${tiempo.replace(/ /g, '')}TipoIrregular`;
            }
            tipoVerboReal = verbInfo[propertyToUse];
            if (tipoVerboReal === tipoEsperado) {
                esCorrecto = true;
            } else {
                esCorrecto = false;
            }
        } else {
            const unaccentedTiempoKeyDrop = removeAccents(tiempo);
            let correctTypeProperty = `${unaccentedTiempoKeyDrop.replace(/ /g, '')}TipoIrregular`;

            if (tiempo === "pretérito indefinido") {
                correctTypeProperty = "indefinidoTipoIrregular";
            } else if (tiempo === "pretérito imperfecto") {
                correctTypeProperty = "imperfectoTipoIrregular";
            }
            tipoVerboReal = verbInfo[correctTypeProperty];

            if (tipoVerboReal === tipoEsperado) {
                esCorrecto = true;
            } else {
                esCorrecto = false;
            }
        }

        console.log(`[DROP VALIDATION DEBUG] Verbo: ${verbId}, Tiempo: ${tiempo}`);
        console.log(`[DROP VALIDATION DEBUG] Tipo esperado por la caja: "${tipoEsperado}"`);
        console.log(`[DROP VALIDATION DEBUG] Tipo real del verbo (usando puente): "${tipoVerboReal}"`);
        console.log(`[DROP VALIDATION DEBUG] ¿Es Correcto?: ${esCorrecto}`);

        return { esCorrecto, tipoVerboReal, targetCategoryName: targetCategory ? targetCategory.nombre : "Desconocida" };
    }


    // --- FUNCIÓN NOMBRADA PARA MANEJAR EL CLIC EN EL VERBO EN DISPOSITIVOS MÓVILES ---
    // Definida aquí para que pueda ser añadida y removida.
    function handleMobileVerbClick(e) {
        // Desactiva el estilo de "seleccionado" de cualquier verbo que haya sido previamente seleccionado
        const previouslySelected = document.querySelector('.mobile-verb-to-classify.selected');
        if (previouslySelected) {
            previouslySelected.classList.remove('selected');
        }

        // Activa el estilo de "seleccionado" para el verbo que se acaba de tocar
        e.target.classList.add('selected');
        // Almacena el verbo actual en la variable global para que los botones de categoría lo utilicen
        arrastrarVerboActual = e.target.id.replace('verb-', ''); // Extrae el nombre del verbo del ID
        console.log('[DEBUG] Verbo seleccionado (móvil):', arrastrarVerboActual); // Solo para depuración
    }


    // --- FUNCIÓN PARA MOSTRAR EL SIGUIENTE VERBO A CLASIFICAR ---
    function displayNextVerb() {
        // Limpia el contenedor del verbo actual
        while (currentVerbDisplayContainer.firstChild) {
            currentVerbDisplayContainer.removeChild(currentVerbDisplayContainer.firstChild);
        }

        if (currentVerbIndex >= verbsToPlay.length) {
            // Si ya no quedan verbos por mostrar, y todos los que se jugaron se clasificaron,
            // muestra el mensaje de finalización.
            if (document.querySelectorAll('.dropped-verbs .draggable-verb.correct, .dropped-verbs .mobile-verb-to-classify.correct').length === verbsToPlay.length) {
                mostrarMensaje("¡Juego Terminado!", "¡Has clasificado todos los verbos correctamente!");
            }
            return; // Termina la función si no hay más verbos
        }

        const verboActual = verbsToPlay[currentVerbIndex];
        const verbElement = document.createElement('div');
        verbElement.textContent = verboActual.charAt(0).toUpperCase() + verboActual.slice(1);
        verbElement.id = `verb-${verboActual}`; // ID único para el verbo

        if (isTouchDevice) {
            // --- CÓDIGO ESPECÍFICO PARA MÓVIL (Juego de Clics) ---
            verbElement.className = 'mobile-verb-to-classify'; // Clase CSS para el estilo de móvil

            // Añade el listener de clic (la función nombrada) al verbo para seleccionarlo en móvil
            verbElement.addEventListener('click', handleMobileVerbClick);

            currentVerbDisplayContainer.appendChild(verbElement);
            // IMPORTANTE: Ya NO asignamos arrastrarVerboActual aquí para móvil.
            // Ahora se asigna SOLAMENTE cuando el usuario toca el verbo mediante el listener de clic.

        } else {
            // --- CÓDIGO ESPECÍFICO PARA ORDENADOR (Drag & Drop) ---
            verbElement.className = 'draggable-verb'; // Clase CSS para el estilo de D&D
            verbElement.draggable = true; // Habilita el arrastre nativo en navegadores de escritorio

            // Evento cuando el usuario comienza a arrastrar el verbo (PC)
            verbElement.addEventListener('dragstart', (e) => {
                arrastrarVerboActual = verboActual; // Guarda el verbo que se está arrastrando en la variable global
                e.dataTransfer.setData('text/plain', arrastrarVerboActual); // Pasa el ID del verbo como dato
                e.dataTransfer.setData('text/tiempo', tiempoKey); // Pasa el tiempo verbal actual como dato
                setTimeout(() => {
                    e.target.classList.add('dragging'); // Añade una clase para estilos visuales de "arrastrando"
                }, 0); // Pequeño retraso para que la clase se aplique correctamente
            });

            // Evento cuando el usuario termina de arrastrar el verbo (PC)
            verbElement.addEventListener('dragend', (e) => {
                e.target.classList.remove('dragging'); // Quita la clase de arrastre
                const droppedVerbElement = document.getElementById(`verb-${arrastrarVerboActual}`);
                // Si el verbo no fue clasificado correctamente (no tiene la clase 'correct')
                // y su padre no es el contenedor de verbos actuales (es decir, fue soltado fuera o incorrectamente),
                // asegúrate de que el verbo regrese a su contenedor original (`currentVerbDisplayContainer`).
                if (droppedVerbElement && !droppedVerbElement.classList.contains('correct') && droppedVerbElement.parentNode !== currentVerbDisplayContainer) {
                    currentVerbDisplayContainer.appendChild(droppedVerbElement);
                }
                arrastrarVerboActual = null; // Resetea la variable global de arrastre una vez terminado el proceso
            });
            currentVerbDisplayContainer.appendChild(verbElement); // Añade el verbo al contenedor en PC
        }
    }
    // --- FIN FUNCIÓN `displayNextVerb` ---

    // Muestra el primer verbo al iniciar el juego
    displayNextVerb();

    // Contenedor para las zonas de drop (PC) o botones de categoría (Móvil)
    const dropZonesContainer = document.createElement('div');
    dropZonesContainer.className = 'drop-zones-container';
    gameArea.appendChild(dropZonesContainer);

    // Crea y configura cada zona de categoría
    categoriesForGame.forEach(cat => {
        const dropZone = document.createElement('div');
        dropZone.id = cat.id; // El ID de la categoría (usado para validación)
        dropZone.className = 'drop-zone'; // Clase base para estilos de zona

        // Título de la categoría (con icono SILABOS según el tipo)
        dropZone.innerHTML = `<h4>${decorarCategoria(cat.nombre, cat.typeMatch)}</h4>`;
        dropZone.classList.add(claseCategoria(cat.typeMatch));

        // Contenedor interno para los verbos que se van clasificando en esta categoría
        const droppedVerbsList = document.createElement('div');
        droppedVerbsList.className = 'dropped-verbs'; // Esta es la clave para la flexibilidad del tamaño
        dropZone.appendChild(droppedVerbsList);

        if (isTouchDevice) {
            // --- VERSIÓN PARA MÓVIL (Juego de Clics) ---
            dropZone.classList.add('mobile-category-button'); // Clase CSS para estilo de botón de categoría

            dropZone.addEventListener('click', () => {
                // Si no hay un verbo actualmente seleccionado/visible para clasificar, salir
                if (!arrastrarVerboActual) {
                    mostrarMensaje("Atención", "Toca un verbo para clasificarlo primero.");
                    return;
                }

                const { esCorrecto, tipoVerboReal, targetCategoryName } = validarVerboEnDropZone(arrastrarVerboActual, tiempoKey, dropZone.id);
                const currentVerbElement = document.getElementById(`verb-${arrastrarVerboActual}`);

                if (esCorrecto) {
                    droppedVerbsList.appendChild(currentVerbElement); // Mueve el verbo a la lista de clasificados
                    currentVerbElement.classList.add('correct'); // Marca como correcto
                    // currentVerbElement.classList.add('mobile-verb-to-classify-classified'); // Opcional: clase para estilos adicionales

                    // *** CRÍTICO: DESACTIVAR CLICS EN EL VERBO CLASIFICADO EN MÓVIL ***
                    currentVerbElement.removeEventListener('click', handleMobileVerbClick); // Elimina el listener de selección
                    currentVerbElement.style.cursor = 'default'; // Cambia el cursor para indicar que no es clicable
                    currentVerbElement.classList.remove('selected'); // Quita el estilo de seleccionado

                    // --- LÓGICA DE AÑADIR CONJUGACIÓN/PARTICIPIO IRREGULAR (REUTILIZADA) ---
                    let irregularityLabelText = '';
                    // Usamos arrastrarVerboActual porque es el ID del verbo que acabamos de clasificar
                    const currentVerbInfo = explicacionesVerbos[arrastrarVerboActual]; 

                    if (currentVerbInfo && currentVerbInfo.formasIrregularesYo && currentVerbInfo.formasIrregularesYo[tiempoKey]) {
                        const formaYo = currentVerbInfo.formasIrregularesYo[tiempoKey];
                        if (formaYo) {
                            irregularityLabelText = ` (${formaYo})`;
                        }
                    } else {
                        const tiemposDeParticipio = ["pretérito perfecto", "pluscuamperfecto", "pluscuamperfecto de subjuntivo"];
                        if (tiemposDeParticipio.includes(tiempoKey) && currentVerbInfo && currentVerbInfo.participioIrregularForma) {
                            irregularityLabelText = ` (${currentVerbInfo.participioIrregularForma})`;
                        }
                    }

                    if (irregularityLabelText) {
                        const irregularitySpan = document.createElement('span');
                        irregularitySpan.className = 'verb-irregularity-label';
                        irregularitySpan.textContent = irregularityLabelText;
                        currentVerbElement.appendChild(irregularitySpan);
                    }
                    // --- FIN LÓGICA REUTILIZADA ---

                    currentVerbIndex++; // Avanza al siguiente verbo
                    displayNextVerb(); // Muestra el siguiente verbo
                    arrastrarVerboActual = null; // Resetea el verbo seleccionado para la próxima ronda

                    // Comprueba si el juego ha terminado
                    if (document.querySelectorAll('.dropped-verbs .draggable-verb.correct, .dropped-verbs .mobile-verb-to-classify.correct').length === verbsToPlay.length) {
                        mostrarMensaje("¡Juego Terminado!", "¡Has clasificado todos los verbos correctamente!");
                    }
                } else {
                    // Si es incorrecto, muestra un mensaje
                    mostrarMensaje('Incorrecto', `El verbo "${arrastrarVerboActual.charAt(0).toUpperCase() + arrastrarVerboActual.slice(1)}" no pertenece a la categoría "${targetCategoryName}". Es de tipo "${tipoVerboReal}" en ${tiempoKey}. Por favor, toca la categoría correcta.`);
                    // Si el verbo sigue en el currentVerbDisplayContainer, quita el estilo de 'selected' y resetea arrastrarVerboActual
                    if (currentVerbElement && currentVerbElement.parentNode === currentVerbDisplayContainer) {
                        currentVerbElement.classList.remove('selected');
                        arrastrarVerboActual = null; // Fuerza al usuario a volver a tocar el verbo para reintentar
                    }
                }
            });

        } else {
            // --- VERSIÓN PARA ORDENADOR (Drag & Drop) ---
            // Evento cuando se arrastra algo sobre la zona de drop
            dropZone.addEventListener('dragover', (e) => {
                e.preventDefault(); // Esencial para permitir el drop
                dropZone.classList.add('drag-over'); // Añade clase para resaltar la zona
            });

            // Evento cuando el elemento arrastrado sale de la zona
            dropZone.addEventListener('dragleave', () => {
                dropZone.classList.remove('drag-over'); // Quita la clase de resaltado
            });

            // Evento cuando se suelta el elemento arrastrado en la zona
            dropZone.addEventListener('drop', (e) => {
                e.preventDefault(); // Evita el comportamiento por defecto (ej. abrir la imagen arrastrada)
                dropZone.classList.remove('drag-over'); // Quita la clase de resaltado

                const droppedVerbId = e.dataTransfer.getData('text/plain'); // Obtiene el ID del verbo
                const droppedVerbElement = document.getElementById(`verb-${droppedVerbId}`); // Obtiene el elemento DOM
                const droppedTiempoKey = e.dataTransfer.getData('text/tiempo'); // Obtiene el tiempo verbal

                // Verificaciones de validación y estado del verbo
                if (!droppedVerbElement || droppedTiempoKey !== tiempoKey || droppedVerbId !== verbsToPlay[currentVerbIndex] || droppedVerbElement.classList.contains('correct')) {
                    // Si no es el verbo correcto, o ya está clasificado, o hay un mismatch de tiempo,
                    // asegúrate de que el verbo vuelva a su contenedor original si no está ya allí.
                    if (droppedVerbElement && !droppedVerbElement.classList.contains('correct') && droppedVerbElement.parentNode !== currentVerbDisplayContainer) {
                        currentVerbDisplayContainer.appendChild(droppedVerbElement);
                    }
                    return;
                }

                const { esCorrecto, tipoVerboReal, targetCategoryName } = validarVerboEnDropZone(droppedVerbId, tiempoKey, dropZone.id);

                if (esCorrecto) {
                    droppedVerbsList.appendChild(droppedVerbElement); // Mueve el verbo a la lista de clasificados
                    droppedVerbElement.classList.add('correct'); // Marca como correcto
                    droppedVerbElement.draggable = false; // Ya no se puede arrastrar una vez clasificado

                    // --- LÓGICA DE AÑADIR CONJUGACIÓN/PARTICIPIO IRREGULAR (REUTILIZADA) ---
                    let irregularityLabelText = '';
                    const currentVerbInfo = explicacionesVerbos[droppedVerbId];

                    if (currentVerbInfo && currentVerbInfo.formasIrregularesYo && currentVerbInfo.formasIrregularesYo[tiempoKey]) {
                        const formaYo = currentVerbInfo.formasIrregularesYo[tiempoKey];
                        if (formaYo) {
                            irregularityLabelText = ` (${formaYo})`;
                        }
                    } else {
                        const tiemposDeParticipio = ["pretérito perfecto", "pluscuamperfecto", "pluscuamperfecto de subjuntivo"];
                        if (tiemposDeParticipio.includes(tiempoKey) && currentVerbInfo && currentVerbInfo.participioIrregularForma) {
                            irregularityLabelText = ` (${currentVerbInfo.participioIrregularForma})`;
                        }
                    }

                    if (irregularityLabelText) {
                        const irregularitySpan = document.createElement('span');
                        irregularitySpan.className = 'verb-irregularity-label';
                        irregularitySpan.textContent = irregularityLabelText;
                        droppedVerbElement.appendChild(irregularitySpan);
                    }
                    // --- FIN LÓGICA REUTILIZADA ---

                    currentVerbIndex++; // Avanza al siguiente verbo
                    displayNextVerb(); // Muestra el siguiente verbo
                    arrastrarVerboActual = null; // Resetea el verbo arrastrado

                    // Comprueba si el juego ha terminado
                    if (document.querySelectorAll('.dropped-verbs .draggable-verb.correct, .dropped-verbs .mobile-verb-to-classify.correct').length === verbsToPlay.length) {
                        mostrarMensaje("¡Juego Terminado!", "¡Has clasificado todos los verbos correctamente!");
                    }
                } else {
                    // Si es incorrecto, muestra un mensaje y devuelve el verbo a su contenedor original
                    mostrarMensaje('Incorrecto', `El verbo "${droppedVerbId.charAt(0).toUpperCase() + droppedVerbId.slice(1)}" no pertenece a la categoría "${targetCategoryName}". Es de tipo "${tipoVerboReal}" en ${tiempoKey}. Por favor, arrástralo a una de las categorías correctas.`);

                    currentVerbDisplayContainer.appendChild(droppedVerbElement); // Mueve de vuelta al contenedor de arrastre
                    droppedVerbElement.classList.remove('correct'); // Asegura que no tenga la clase de correcto si se marcó accidentalmente
                }
                arrastrarVerboActual = null; // Resetea la variable de arrastre
            });
        }
        dropZonesContainer.appendChild(dropZone); // Añade la zona de categoría al contenedor principal de zonas
    });

    // Elemento para mostrar resultados o mensajes del juego
    const resultadoJuego = document.createElement('p');
    resultadoJuego.id = 'resultado-juego';
    appContainer.appendChild(resultadoJuego);

    

    // NUEVO: Contenedor para el botón de Volver
    const volverContainer = document.createElement('div');
    volverContainer.style.marginTop = '20px'; // Espacio superior
    volverContainer.style.display = 'flex';
    volverContainer.style.justifyContent = 'center';

    const botonVolver = document.createElement('button');
    botonVolver.textContent = 'Volver al selector de juegos de arrastre';
    botonVolver.onclick = mostrarSelectorTiempoJuegoArrastrar;
    botonVolver.classList.add('back-button');

    // Lo más importante: anular el ancho conflictivo
    botonVolver.style.maxWidth = '100%';
    botonVolver.style.minWidth = '250px';
    botonVolver.style.width = 'auto';

    // Añade el botón al nuevo contenedor
    volverContainer.appendChild(botonVolver);
    // Añade el contenedor al appContainer
    appContainer.appendChild(volverContainer);
    
}
//Nueva función para el menu de Indefinido o Imperfecto
function mostrarSubMenuIndefinidoImperfecto() {
    limpiarContenedor();
    setGameBackground(false);

    const titulo = document.createElement('h2');
    titulo.textContent = 'Indefinido o Imperfecto';
    appContainer.appendChild(titulo);

    const instruccion = document.createElement('p');
    instruccion.className = 'section-sub';
    instruccion.textContent = 'Selecciona una actividad para practicar';
    appContainer.appendChild(instruccion);

    const lista = document.createElement('div');
    lista.className = 'row-list';
    lista.appendChild(crearRowCard('i-clock', 'var(--cian)', 'Antes o Después', 'Ordena los hechos en el tiempo', mostrarActividadOpcionMultiple));
    lista.appendChild(crearRowCard('i-target', 'var(--morado)', 'Todo o una parte', 'Acción completa o en desarrollo', mostrarActividadTodoParte));
    lista.appendChild(crearRowCard('i-book', 'var(--fuxia)', '¿Cómo era? o ¿Cómo fue?', 'Descripción o acción puntual', mostrarActividadComoEraOFue));
    appContainer.appendChild(lista);

    const botonVolver = document.createElement('button');
    botonVolver.textContent = 'Volver a Jugar';
    botonVolver.onclick = mostrarSubMenuPracticar;
    botonVolver.classList.add('back-button');
    appContainer.appendChild(botonVolver);
}


// --- FUNCIÓN PRINCIPAL PARA LA ACTIVIDAD "ANTES O DESPUÉS" (ADAPTADA Y CORREGIDA) ---
function mostrarActividadOpcionMultiple() {
    limpiarContenedor();
    setGameBackground(true);

    // Obtener los datos de la actividad "Antes o Después"
    const actividadData = actividadesIndefinidoImperfectoData.antes_o_despues;

    // --- ¡¡¡INICIALIZACIÓN CRUCIAL DE LAS VARIABLES GLOBALES AQUÍ!!! ---
    preguntaActualIndexOpcionMultiple = 0; // Reiniciar el índice para cada inicio de actividad
    respuestasUsuarioOpcionMultiple = []; // Limpiar resultados anteriores
    // Clonar y, opcionalmente, barajar las preguntas al inicio de la actividad
    // Si tienes una función para barajar arrays (e.g., 'shuffleArray'), úsala aquí:
    // shuffledPreguntasOpcionMultiple = shuffleArray([...actividadData.preguntas]);
    // Si no la tienes o no quieres barajar:
    shuffledPreguntasOpcionMultiple = shuffleArray([...actividadData.preguntas]); // ¡Ahora las barajamos!

    const activityWrapper = document.createElement('div');
    activityWrapper.classList.add('activity-wrapper');
    activityWrapper.style.maxWidth = '800px';
    activityWrapper.style.margin = '20px auto';
    activityWrapper.style.padding = '25px';
    activityWrapper.style.backgroundColor = 'rgba(255,255,255,0.045)';
    activityWrapper.style.borderRadius = '12px';
    activityWrapper.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
    activityWrapper.style.color = '#EDEDF5';

    const tituloActividad = document.createElement('h2');
    tituloActividad.textContent = actividadData.titulo;
    tituloActividad.style.color = '#00C8FF';
    tituloActividad.style.textAlign = 'center';
    tituloActividad.style.marginBottom = '20px';
    activityWrapper.appendChild(tituloActividad);

    const instruccionesActividad = document.createElement('p');
    instruccionesActividad.textContent = actividadData.instrucciones;
    instruccionesActividad.style.marginBottom = '30px';
    instruccionesActividad.style.fontSize = '1.1em';
    instruccionesActividad.style.textAlign = 'center';
    activityWrapper.appendChild(instruccionesActividad);

    // BLOQUE DE EXPLICACIÓN
    const explicacionBox = document.createElement('div');
    explicacionBox.style.backgroundColor = '#0E0E1A';
    explicacionBox.style.padding = '15px';
    explicacionBox.style.borderRadius = '8px';
    explicacionBox.style.marginBottom = '30px';
    explicacionBox.style.border = '1px solid rgba(255,255,255,0.12)';

    const explicacionTitulo = document.createElement('h3');
    explicacionTitulo.textContent = actividadData.explicacionUso.titulo;
    explicacionTitulo.style.color = '#00C8FF';
    explicacionTitulo.style.marginBottom = '15px';
    explicacionBox.appendChild(explicacionTitulo);

    actividadData.explicacionUso.secciones.forEach(sec => {
        const subTitulo = document.createElement('h4');
        subTitulo.textContent = sec.subtitulo;
        subTitulo.style.color = '#EDEDF5';
        subTitulo.style.marginBottom = '5px';
        explicacionBox.appendChild(subTitulo);

        const texto = document.createElement('p');
        texto.textContent = sec.texto;
        texto.style.marginBottom = '5px';
        explicacionBox.appendChild(texto);

        const ejemplo = document.createElement('p');
        ejemplo.innerHTML = `<em>Ejemplo: ${sec.ejemplo}</em>`;
        ejemplo.style.fontSize = '0.9em';
        ejemplo.style.color = '#9A9AB0';
        ejemplo.style.marginBottom = '15px';
        explicacionBox.appendChild(ejemplo);
    });
    activityWrapper.appendChild(explicacionBox);
    // FIN DEL BLOQUE DE EXPLICACIÓN

    // Contenedor para las preguntas
    const preguntasContainer = document.createElement('div');
    preguntasContainer.id = 'preguntas-container-opcion-multiple';
    activityWrapper.appendChild(preguntasContainer);

    // Contenedor para el feedback
    const feedbackContainer = document.createElement('div');
    feedbackContainer.id = 'feedback-opcion-multiple';
    feedbackContainer.style.marginTop = '20px';
    feedbackContainer.style.padding = '10px';
    feedbackContainer.style.borderRadius = '8px';
    feedbackContainer.style.backgroundColor = 'rgba(255,255,255,0.07)';
    feedbackContainer.style.color = '#EDEDF5';
    feedbackContainer.style.display = 'none';
    activityWrapper.appendChild(feedbackContainer);

    // Botón para comprobar respuesta / siguiente
    const botonComprobarSiguiente = document.createElement('button');
    botonComprobarSiguiente.id = 'boton-comprobar-siguiente-opcion-multiple';
    botonComprobarSiguiente.textContent = 'Comprobar';
    botonComprobarSiguiente.classList.add('action-button');
    botonComprobarSiguiente.style.margin = '30px auto 0 auto';
    botonComprobarSiguiente.style.display = 'block';
    // Ahora llama a comprobarRespuestaOpcionMultiple SIN PASARLE preguntas,
    // porque ya usa la global shuffledPreguntasOpcionMultiple
    botonComprobarSiguiente.onclick = () => comprobarRespuestaOpcionMultiple();
    activityWrapper.appendChild(botonComprobarSiguiente);

    // Botón para volver al submenú
    const botonVolverSubmenu = document.createElement('button');
    botonVolverSubmenu.textContent = 'Volver a Indefinido o Imperfecto';
    botonVolverSubmenu.onclick = mostrarSubMenuIndefinidoImperfecto;
    botonVolverSubmenu.classList.add('back-button');
    botonVolverSubmenu.style.margin = '20px auto 0 auto';
    botonVolverSubmenu.style.display = 'block';
    activityWrapper.appendChild(botonVolverSubmenu);

    appContainer.appendChild(activityWrapper);

    // Inicializar la primera pregunta usando el array global ya poblado
    cargarPreguntaOpcionMultiple(shuffledPreguntasOpcionMultiple);
}


/**
 * Carga y muestra la pregunta actual en la actividad de opción múltiple (Antes o Después).
 * @param {Array} preguntas El array de preguntas barajadas de la actividad.
 */
function cargarPreguntaOpcionMultiple(preguntas) { // 'preguntas' aquí es 'shuffledPreguntasOpcionMultiple'
    const preguntasContainer = document.getElementById('preguntas-container-opcion-multiple');
    preguntasContainer.innerHTML = '';
    const feedbackContainer = document.getElementById('feedback-opcion-multiple');
    feedbackContainer.style.display = 'none';
    feedbackContainer.textContent = '';

    if (preguntaActualIndexOpcionMultiple < preguntas.length) {
        const pregunta = preguntas[preguntaActualIndexOpcionMultiple];

        const preguntaDiv = document.createElement('div');
        preguntaDiv.classList.add('pregunta-item');
        preguntaDiv.style.backgroundColor = 'rgba(255,255,255,0.07)';
        preguntaDiv.style.padding = '20px';
        preguntaDiv.style.borderRadius = '10px';
        preguntaDiv.style.marginBottom = '20px';

        const fraseP = document.createElement('p');
        fraseP.textContent = pregunta.pregunta; // Esto ahora debería funcionar
        fraseP.style.fontSize = '1.2em';
        fraseP.style.whiteSpace = 'pre-wrap';
        fraseP.style.marginBottom = '15px';
        preguntaDiv.appendChild(fraseP);

        const opcionesDiv = document.createElement('div');
        opcionesDiv.classList.add('opciones-container');
        opcionesDiv.style.display = 'flex';
        opcionesDiv.style.flexDirection = 'column';
        opcionesDiv.style.gap = '10px';

        pregunta.opciones.forEach(opcionTexto => {
            const label = document.createElement('label');
            label.style.display = 'flex';
            label.style.alignItems = 'center';
            label.style.backgroundColor = 'rgba(255,255,255,0.10)';
            label.style.padding = '10px 15px';
            label.style.borderRadius = '8px';
            label.style.cursor = 'pointer';
            label.style.transition = 'background-color 0.2s';
            label.onmouseover = () => label.style.backgroundColor = 'rgba(0,200,255,0.15)';
            label.onmouseout = () => label.style.backgroundColor = 'rgba(255,255,255,0.10)';

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `respuesta-opcion-multiple`;
            radio.value = opcionTexto;
            radio.classList.add('custom-radio');
            radio.style.marginRight = '10px';
            radio.style.transform = 'scale(1.2)';
            label.appendChild(radio);

            const span = document.createElement('span');
            span.textContent = opcionTexto;
            span.style.fontSize = '1.1em';
            label.appendChild(span);

            opcionesDiv.appendChild(label);
        });

        preguntaDiv.appendChild(opcionesDiv);
        preguntasContainer.appendChild(preguntaDiv);

        const botonComprobarSiguiente = document.getElementById('boton-comprobar-siguiente-opcion-multiple');
        botonComprobarSiguiente.textContent = 'Comprobar';
        // Ya no necesitamos pasar 'preguntas' porque 'comprobarRespuestaOpcionMultiple' usa la global
        botonComprobarSiguiente.onclick = () => comprobarRespuestaOpcionMultiple(); 

    } else {
        mostrarResultadosOpcionMultiple();
    }
}


function comprobarRespuestaOpcionMultiple() { // Ya no necesita el parámetro 'preguntas'
    // 'shuffledPreguntasOpcionMultiple' ahora estará poblada
    const preguntaActual = shuffledPreguntasOpcionMultiple[preguntaActualIndexOpcionMultiple];
    const radios = document.querySelectorAll('input[name="respuesta-opcion-multiple"]');
    let respuestaUsuario = null;

    radios.forEach(radio => {
        if (radio.checked) {
            respuestaUsuario = radio.value;
        }
    });

    const feedbackContainer = document.getElementById('feedback-opcion-multiple');
    const botonComprobarSiguiente = document.getElementById('boton-comprobar-siguiente-opcion-multiple');

    feedbackContainer.style.display = 'block'; 

    if (respuestaUsuario === null) {
        feedbackContainer.innerHTML = '<span style="color: #FACC15; font-weight: bold;">Por favor, selecciona una opción.</span>';
        return; 
    }

    const isCorrect = (removeAccents(respuestaUsuario.toLowerCase()) === removeAccents(preguntaActual.respuestaCorrecta.toLowerCase())); 
    
    if (isCorrect) {
        feedbackContainer.innerHTML = `<span style="color: #39FF14; font-weight: bold;">¡Correcto!</span>`;
        respuestasUsuarioOpcionMultiple.push(true);
    } else {
        feedbackContainer.innerHTML = `<span style="color: #FF4D6D; font-weight: bold;">Incorrecto.</span> La respuesta correcta era: "${preguntaActual.respuestaCorrecta}".`;
        respuestasUsuarioOpcionMultiple.push(false);
    }

    if (preguntaActual.explicacion) {
        feedbackContainer.innerHTML += `<p style="font-size: 0.95em; color: #C4C4D6; margin-top: 10px;">${preguntaActual.explicacion}</p>`;
    }

    radios.forEach(radio => radio.disabled = true);

    botonComprobarSiguiente.textContent = 'Siguiente';
    // Llama a cargarPreguntaOpcionMultiple con el array global
    botonComprobarSiguiente.onclick = () => {
        preguntaActualIndexOpcionMultiple++;
        cargarPreguntaOpcionMultiple(shuffledPreguntasOpcionMultiple);
    };
}


/**
 * Muestra los resultados finales de la actividad de opción múltiple.
 */
function mostrarResultadosOpcionMultiple() {
    const preguntasContainer = document.getElementById('preguntas-container-opcion-multiple');
    const feedbackContainer = document.getElementById('feedback-opcion-multiple');
    const botonComprobarSiguiente = document.getElementById('boton-comprobar-siguiente-opcion-multiple');

    preguntasContainer.innerHTML = '';
    feedbackContainer.style.display = 'block';
    feedbackContainer.style.backgroundColor = '#0E0E1A';
    feedbackContainer.style.padding = '25px';
    feedbackContainer.style.borderRadius = '12px';
    feedbackContainer.style.textAlign = 'center';

    const correctas = respuestasUsuarioOpcionMultiple.filter(r => r).length;
    const total = respuestasUsuarioOpcionMultiple.length;
    const porcentaje = (correctas / total) * 100;

    feedbackContainer.innerHTML = `
        <h3 style="color: #00C8FF; margin-bottom: 15px;">Resultados de la Actividad:</h3>
        <p style="font-size: 1.1em;">Has acertado ${correctas} de ${total} preguntas.</p>
        <p style="font-size: 1.5em; font-weight: bold; color: ${porcentaje >= 70 ? '#39FF14' : '#FF4D6D'};">${porcentaje.toFixed(0)}% de aciertos</p>
    `;

    botonComprobarSiguiente.textContent = 'Reiniciar Actividad';
    botonComprobarSiguiente.onclick = () => {
        // Al reiniciar, también reseteamos el índice y las respuestas
        preguntaActualIndexOpcionMultiple = 0;
        respuestasUsuarioOpcionMultiple = [];
        // No hace falta re-poblar shuffledPreguntasOpcionMultiple aquí, ya lo hace mostrarActividadOpcionMultiple
        mostrarActividadOpcionMultiple(); // Reinicia la actividad desde cero
    };
    botonComprobarSiguiente.style.display = 'block';
}


// --- NUEVAS FUNCIONES PARA LA ACTIVIDAD "TODO O UNA PARTE" (ADAPTADAS A FILL-IN-THE-GAPS) ---


function mostrarActividadTodoParte() {
    limpiarContenedor();
    setGameBackground(true);

    const actividadData = actividadesIndefinidoImperfectoData.todo_o_una_parte;
    // ----- CAMBIOS AQUÍ para aleatorizar "Todo o una parte" -----
    shuffledPreguntasTodoParte = shuffleArray([...actividadData.preguntas]); // Mezclar preguntas
    preguntaActualIndexTodoParte = 0; // Reiniciar índice
    respuestasUsuarioTodoParte = []; // Reiniciar respuestas
    // -----------------------------------------------------------
    const activityWrapper = document.createElement('div');
    activityWrapper.classList.add('activity-wrapper');
    activityWrapper.style.maxWidth = '800px';
    activityWrapper.style.margin = '20px auto';
    activityWrapper.style.padding = '25px';
    activityWrapper.style.backgroundColor = 'rgba(255,255,255,0.045)';
    activityWrapper.style.borderRadius = '12px';
    activityWrapper.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
    activityWrapper.style.color = '#EDEDF5';

    const tituloActividad = document.createElement('h2');
    tituloActividad.textContent = actividadData.titulo;
    tituloActividad.style.color = '#00C8FF';
    tituloActividad.style.textAlign = 'center';
    tituloActividad.style.marginBottom = '20px';
    activityWrapper.appendChild(tituloActividad);

    const instruccionesActividad = document.createElement('p');
    instruccionesActividad.textContent = actividadData.instrucciones;
    instruccionesActividad.style.marginBottom = '30px';
    instruccionesActividad.style.fontSize = '1.1em';
    instruccionesActividad.style.textAlign = 'center';
    activityWrapper.appendChild(instruccionesActividad);

    // Sección de Explicación (como en tus imágenes)
    const explicacionBox = document.createElement('div');
    explicacionBox.style.backgroundColor = '#0E0E1A';
    explicacionBox.style.padding = '15px';
    explicacionBox.style.borderRadius = '8px';
    explicacionBox.style.marginBottom = '30px';
    explicacionBox.style.border = '1px solid rgba(255,255,255,0.12)';

    const explicacionTitulo = document.createElement('h3');
    explicacionTitulo.textContent = actividadData.explicacionUso.titulo;
    explicacionTitulo.style.color = '#00C8FF';
    explicacionTitulo.style.marginBottom = '15px';
    explicacionBox.appendChild(explicacionTitulo);

    actividadData.explicacionUso.secciones.forEach(sec => {
        const subTitulo = document.createElement('h4');
        subTitulo.textContent = sec.subtitulo;
        subTitulo.style.color = '#EDEDF5';
        subTitulo.style.marginBottom = '5px';
        explicacionBox.appendChild(subTitulo);

        const texto = document.createElement('p');
        texto.textContent = sec.texto;
        texto.style.marginBottom = '5px';
        explicacionBox.appendChild(texto);

        const ejemplo = document.createElement('p');
        ejemplo.innerHTML = `<em>Ejemplo: ${sec.ejemplo}</em>`;
        ejemplo.style.fontSize = '0.9em';
        ejemplo.style.color = '#9A9AB0';
        ejemplo.style.marginBottom = '15px';
        explicacionBox.appendChild(ejemplo);
    });
    activityWrapper.appendChild(explicacionBox);

    // Contenedor para las preguntas (donde aparecerá el campo de texto)
    const preguntasContainer = document.createElement('div');
    preguntasContainer.id = 'preguntas-container-todo-parte';
    activityWrapper.appendChild(preguntasContainer);

    // Contenedor para el feedback
    const feedbackContainer = document.createElement('div');
    feedbackContainer.id = 'feedback-todo-parte';
    feedbackContainer.style.marginTop = '20px';
    feedbackContainer.style.padding = '10px';
    feedbackContainer.style.borderRadius = '8px';
    feedbackContainer.style.backgroundColor = 'rgba(255,255,255,0.07)';
    feedbackContainer.style.color = '#EDEDF5';
    feedbackContainer.style.display = 'none';
    activityWrapper.appendChild(feedbackContainer);

    // Botón para comprobar respuesta (o siguiente)
    const botonComprobarSiguiente = document.createElement('button');
    botonComprobarSiguiente.id = 'boton-comprobar-siguiente-todo-parte';
    botonComprobarSiguiente.textContent = 'Comprobar';
    botonComprobarSiguiente.classList.add('action-button');
    botonComprobarSiguiente.style.margin = '30px auto 0 auto'; // Top 20px, horizontal auto (centrado), bottom 0, left auto (centrado)
    botonComprobarSiguiente.style.display = 'block'; // ESTA LÍNEA para que el botón esté debajo. no al lado.
    // Se pasa el array mezclado a la función de comprobación
    botonComprobarSiguiente.onclick = () => comprobarRespuestaTodoParte(shuffledPreguntasTodoParte); 
    activityWrapper.appendChild(botonComprobarSiguiente);

    // Botón para volver al submenú
    const botonVolverSubmenu = document.createElement('button');
    botonVolverSubmenu.textContent = 'Volver a Indefinido o Imperfecto';
    botonVolverSubmenu.onclick = mostrarSubMenuIndefinidoImperfecto;
    botonVolverSubmenu.classList.add('back-button');
    botonVolverSubmenu.style.margin = '20px auto 0 auto'; // Top 20px, horizontal auto (centrado), bottom 0, left auto (centrado)
    botonVolverSubmenu.style.display = 'block'; // ESTA LÍNEA para que el botón esté debajo. no al lado.
    activityWrapper.appendChild(botonVolverSubmenu);

    appContainer.appendChild(activityWrapper);

    // Cargar la primera pregunta del array mezclado
    cargarPreguntaTodoParte(shuffledPreguntasTodoParte);
}

// Función para cargar una pregunta en el formato "fill-in-the-gaps"
function cargarPreguntaTodoParte(preguntas) {
    const preguntasContainer = document.getElementById('preguntas-container-todo-parte');
    preguntasContainer.innerHTML = ''; // Limpiar preguntas anteriores
    const feedbackContainer = document.getElementById('feedback-todo-parte');
    feedbackContainer.style.display = 'none'; // Ocultar feedback
    feedbackContainer.textContent = ''; // Limpiar feedback

    if (preguntaActualIndexTodoParte < preguntas.length) {
        const pregunta = preguntas[preguntaActualIndexTodoParte];

        const preguntaDiv = document.createElement('div');
        preguntaDiv.classList.add('pregunta-item');
        preguntaDiv.style.backgroundColor = 'rgba(255,255,255,0.07)';
        preguntaDiv.style.padding = '20px';
        preguntaDiv.style.borderRadius = '10px';
        preguntaDiv.style.marginBottom = '20px';

        const fraseP = document.createElement('p');
        // Usamos innerHTML para reemplazar el ____ con un campo de entrada
        fraseP.innerHTML = `<strong>${pregunta.fraseConHueco.replace('____', `<input type="text" id="respuesta-todo-parte" class="text-input" placeholder="Escribe aquí el verbo" style="font-size: 1.2em; padding: 8px; border-radius: 5px; border: 1px solid #00C8FF; background-color: #0E0E1A; color: #EDEDF5; width: 180px;">`)}</strong>`;
        fraseP.style.fontSize = '1.2em';
        fraseP.style.marginBottom = '15px';
        preguntaDiv.appendChild(fraseP);
        
        preguntasContainer.appendChild(preguntaDiv);

        const botonComprobarSiguiente = document.getElementById('boton-comprobar-siguiente-todo-parte');
        botonComprobarSiguiente.textContent = 'Comprobar';
        botonComprobarSiguiente.onclick = () => comprobarRespuestaTodoParte(preguntas);

    } else {
        // Todas las preguntas han sido respondidas
        mostrarResultadosTodoParte();
    }
}

// Comprueba la respuesta del usuario para el formato "fill-in-the-gaps"

// Comprueba la respuesta del usuario para el formato "fill-in-the-gaps"

function comprobarRespuestaTodoParte(preguntas) {
    const pregunta = shuffledPreguntasTodoParte[preguntaActualIndexTodoParte];
    // --- CAMBIO CLAVE AQUÍ: EL ID DEL INPUT ---
    const inputRespuesta = document.getElementById('respuesta-todo-parte'); // Corregido: 'input-respuesta-todo-parte' a 'respuesta-todo-parte'
    // ------------------------------------------
    const respuestaUsuario = removeAccents(inputRespuesta.value.trim().toLowerCase());
    const feedbackContainer = document.getElementById('feedback-todo-parte');
    const botonComprobarSiguiente = document.getElementById('boton-comprobar-siguiente-todo-parte');

    feedbackContainer.style.display = 'block';

    if (!respuestaUsuario) {
        feedbackContainer.innerHTML = '<span style="color: #FACC15; font-weight: bold;">Por favor, escribe una respuesta.</span>';
        return;
    }

    const esCorrecta = (respuestaUsuario === removeAccents(pregunta.respuestaCorrecta.trim().toLowerCase()));

    if (esCorrecta) {
        feedbackContainer.innerHTML = `<span style="color: #39FF14; font-weight: bold;">¡Correcto!</span>`;
        respuestasUsuarioTodoParte.push(true);
    } else {
        feedbackContainer.innerHTML = `<span style="color: #FF4D6D; font-weight: bold;">Incorrecto.</span> La respuesta correcta era: "${pregunta.respuestaCorrecta}".`;
        respuestasUsuarioTodoParte.push(false);
    }

    // Mostrar la explicación si existe (ahora añadiremos el campo 'explicacion' a los datos)
    if (pregunta.explicacionCorrecta) {
        feedbackContainer.innerHTML += `<p style="font-size: 0.95em; color: #C4C4D6; margin-top: 10px;">${pregunta.explicacionCorrecta}</p>`;
    }
    // ----------------------------------------------------

    inputRespuesta.disabled = true; // Deshabilita el input una vez comprobado

    botonComprobarSiguiente.textContent = 'Siguiente';
    botonComprobarSiguiente.onclick = () => {
        preguntaActualIndexTodoParte++;
        cargarPreguntaTodoParte(shuffledPreguntasTodoParte);
    };
}
// ... (resto de tu código) ...
// Función para mostrar los resultados finales (se mantiene igual)
function mostrarResultadosTodoParte() {
    const actividadData = actividadesIndefinidoImperfectoData.todo_o_una_parte;
    const preguntasContainer = document.getElementById('preguntas-container-todo-parte');
    const feedbackContainer = document.getElementById('feedback-todo-parte');
    const botonComprobarSiguiente = document.getElementById('boton-comprobar-siguiente-todo-parte');

    preguntasContainer.innerHTML = '';
    feedbackContainer.style.display = 'block';
    feedbackContainer.style.backgroundColor = '#0E0E1A';
    feedbackContainer.style.padding = '25px';
    feedbackContainer.style.borderRadius = '12px';
    feedbackContainer.style.textAlign = 'center';

    const correctas = respuestasUsuarioTodoParte.filter(r => r).length;
    const total = respuestasUsuarioTodoParte.length;
    const porcentaje = (correctas / total) * 100;

    feedbackContainer.innerHTML = `
        <h3 style="color: #00C8FF; margin-bottom: 15px;">Resultados de la Actividad:</h3>
        <p style="font-size: 1.1em;">Has acertado ${correctas} de ${total} preguntas.</p>
        <p style="font-size: 1.5em; font-weight: bold; color: ${porcentaje >= 70 ? '#39FF14' : '#FF4D6D'};">${porcentaje.toFixed(0)}% de aciertos</p>
    `;

    botonComprobarSiguiente.textContent = 'Reiniciar Actividad';
    botonComprobarSiguiente.onclick = () => {
        preguntaActualIndexTodoParte = 0;
        respuestasUsuarioTodoParte = [];
        mostrarActividadTodoParte(); // Reinicia la actividad
    };
    botonComprobarSiguiente.style.display = 'block';
}

// script3.js

// ... (tus funciones mostrarActividadTodoParte y mostrarActividadOpcionMultiple) ...

// --- FUNCIÓN PRINCIPAL PARA LA ACTIVIDAD "¿CÓMO ERA? O ¿CÓMO FUE?" ---
function mostrarActividadComoEraOFue() {
    limpiarContenedor();
    setGameBackground(true);

    // Obtener los datos de la actividad
    const actividadData = actividadesIndefinidoImperfectoData.como_era_o_fue;

    // Inicializar y mezclar preguntas para esta actividad
    shuffledPreguntasComoEraOFue = shuffleArray([...actividadData.preguntas]);
    preguntaActualIndexComoEraOFue = 0;
    respuestasUsuarioComoEraOFue = [];

    const activityWrapper = document.createElement('div');
    activityWrapper.classList.add('activity-wrapper');
    activityWrapper.style.maxWidth = '800px';
    activityWrapper.style.margin = '20px auto';
    activityWrapper.style.padding = '25px';
    activityWrapper.style.backgroundColor = 'rgba(255,255,255,0.045)';
    activityWrapper.style.borderRadius = '12px';
    activityWrapper.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
    activityWrapper.style.color = '#EDEDF5';

    const tituloActividad = document.createElement('h2');
    tituloActividad.textContent = actividadData.titulo;
    tituloActividad.style.color = '#00C8FF';
    tituloActividad.style.textAlign = 'center';
    tituloActividad.style.marginBottom = '20px';
    activityWrapper.appendChild(tituloActividad);

    const instruccionesActividad = document.createElement('p');
    instruccionesActividad.textContent = actividadData.instrucciones;
    instruccionesActividad.style.marginBottom = '30px';
    instruccionesActividad.style.fontSize = '1.1em';
    instruccionesActividad.style.textAlign = 'center';
    activityWrapper.appendChild(instruccionesActividad);

    // BLOQUE DE EXPLICACIÓN (Reutilizamos la estructura)
    const explicacionBox = document.createElement('div');
    explicacionBox.style.backgroundColor = '#0E0E1A';
    explicacionBox.style.padding = '15px';
    explicacionBox.style.borderRadius = '8px';
    explicacionBox.style.marginBottom = '30px';
    explicacionBox.style.border = '1px solid rgba(255,255,255,0.12)';

    const explicacionTitulo = document.createElement('h3');
    explicacionTitulo.textContent = actividadData.explicacionUso.titulo;
    explicacionTitulo.style.color = '#00C8FF';
    explicacionTitulo.style.marginBottom = '15px';
    explicacionBox.appendChild(explicacionTitulo);

    actividadData.explicacionUso.secciones.forEach(sec => {
        const subTitulo = document.createElement('h4');
        subTitulo.textContent = sec.subtitulo;
        subTitulo.style.color = '#EDEDF5';
        subTitulo.style.marginBottom = '5px';
        explicacionBox.appendChild(subTitulo);

        const texto = document.createElement('p');
        texto.innerHTML = sec.texto; // Usamos innerHTML si el texto tiene <strong>
        texto.style.marginBottom = '5px';
        explicacionBox.appendChild(texto);

        const ejemplo = document.createElement('p');
        ejemplo.innerHTML = `<em>Ejemplo: ${sec.ejemplo}</em>`;
        ejemplo.style.fontSize = '0.9em';
        ejemplo.style.color = '#9A9AB0';
        ejemplo.style.marginBottom = '15px';
        explicacionBox.appendChild(ejemplo);
    });
    activityWrapper.appendChild(explicacionBox);
    // FIN DEL BLOQUE DE EXPLICACIÓN

    // Contenedor para las preguntas
    const preguntasContainer = document.createElement('div');
    preguntasContainer.id = 'preguntas-container-como-era-o-fue';
    activityWrapper.appendChild(preguntasContainer);

    // Contenedor para el feedback
    const feedbackContainer = document.createElement('div');
    feedbackContainer.id = 'feedback-como-era-o-fue';
    feedbackContainer.style.marginTop = '20px';
    feedbackContainer.style.padding = '10px';
    feedbackContainer.style.borderRadius = '8px';
    feedbackContainer.style.backgroundColor = 'rgba(255,255,255,0.07)';
    feedbackContainer.style.color = '#EDEDF5';
    feedbackContainer.style.display = 'none';
    activityWrapper.appendChild(feedbackContainer);

    // Botón para comprobar respuesta / siguiente
    const botonComprobarSiguiente = document.createElement('button');
    botonComprobarSiguiente.id = 'boton-comprobar-siguiente-como-era-o-fue';
    botonComprobarSiguiente.textContent = 'Comprobar';
    botonComprobarSiguiente.classList.add('action-button');
    botonComprobarSiguiente.style.margin = '30px auto 0 auto'; // Centrado
    botonComprobarSiguiente.style.display = 'block'; // En nueva línea
    botonComprobarSiguiente.onclick = () => comprobarRespuestaComoEraOFue(shuffledPreguntasComoEraOFue);
    activityWrapper.appendChild(botonComprobarSiguiente);

    // Botón para volver al submenú
    const botonVolverSubmenu = document.createElement('button');
    botonVolverSubmenu.textContent = 'Volver a Indefinido o Imperfecto';
    botonVolverSubmenu.onclick = mostrarSubMenuIndefinidoImperfecto;
    botonVolverSubmenu.classList.add('back-button');
    botonVolverSubmenu.style.margin = '20px auto 0 auto'; // Centrado
    botonVolverSubmenu.style.display = 'block'; // En nueva línea
    activityWrapper.appendChild(botonVolverSubmenu);

    appContainer.appendChild(activityWrapper);

    // Cargar la primera pregunta
    cargarPreguntaComoEraOFue(shuffledPreguntasComoEraOFue);
}

/**
 * Carga y muestra la pregunta actual en la actividad "¿Cómo era? o ¿Cómo fue?".
 * @param {Array} preguntas El array de preguntas mezcladas para la actividad.
 */
function cargarPreguntaComoEraOFue(preguntas) {
    const preguntasContainer = document.getElementById('preguntas-container-como-era-o-fue');
    preguntasContainer.innerHTML = ''; // Limpiar contenido anterior
    const feedbackContainer = document.getElementById('feedback-como-era-o-fue');
    feedbackContainer.style.display = 'none'; // Ocultar feedback
    feedbackContainer.textContent = ''; // Limpiar texto de feedback

    if (preguntaActualIndexComoEraOFue < shuffledPreguntasComoEraOFue.length) {
        const pregunta = shuffledPreguntasComoEraOFue[preguntaActualIndexComoEraOFue];

        const preguntaDiv = document.createElement('div');
        preguntaDiv.classList.add('pregunta-item');
        preguntaDiv.style.backgroundColor = 'rgba(255,255,255,0.07)';
        preguntaDiv.style.padding = '20px';
        preguntaDiv.style.borderRadius = '10px';
        preguntaDiv.style.marginBottom = '20px';

        const fraseP = document.createElement('p');
        // Usamos la propiedad .fraseConHueco que ya tienes en tus preguntas
        fraseP.textContent = pregunta.fraseConHueco.replace('____', '______'); // Puedes ajustar los guiones si quieres que se vea un hueco visual
        fraseP.style.fontSize = '1.2em';
        fraseP.style.marginBottom = '15px';
        preguntaDiv.appendChild(fraseP);

        const inputRespuesta = document.createElement('input');
        inputRespuesta.type = 'text';
        inputRespuesta.id = 'input-respuesta-como-era-o-fue';
        inputRespuesta.placeholder = 'Escribe tu respuesta (ej: era, fueron)';
        inputRespuesta.classList.add('text-input');
        inputRespuesta.style.width = '100%'; // Asegura que ocupe el ancho disponible
        inputRespuesta.style.padding = '10px';
        inputRespuesta.style.border = '1px solid rgba(255,255,255,0.12)';
        inputRespuesta.style.borderRadius = '5px';
        inputRespuesta.style.backgroundColor = '#0E0E1A';
        inputRespuesta.style.color = '#EDEDF5';
        preguntaDiv.appendChild(inputRespuesta);

        preguntasContainer.appendChild(preguntaDiv);

        // Restaurar el botón a "Comprobar"
        const botonComprobarSiguiente = document.getElementById('boton-comprobar-siguiente-como-era-o-fue');
        botonComprobarSiguiente.textContent = 'Comprobar';
        botonComprobarSiguiente.onclick = () => comprobarRespuestaComoEraOFue(shuffledPreguntasComoEraOFue);

        // Enfocar el input
        inputRespuesta.focus();

    } else {
        // Todas las preguntas han sido respondidas
        mostrarResultadosComoEraOFue();
    }
}
/**
 * Verifica la respuesta del usuario en la actividad "¿Cómo era? o ¿Cómo fue?".
 * @param {Array} preguntas El array de preguntas mezcladas para la actividad.
 */
function comprobarRespuestaComoEraOFue(preguntas) {
    const preguntaActual = shuffledPreguntasComoEraOFue[preguntaActualIndexComoEraOFue];
    const inputRespuesta = document.getElementById('input-respuesta-como-era-o-fue');
    const respuestaUsuario = removeAccents(inputRespuesta.value.trim().toLowerCase());
    const respuestaCorrecta = removeAccents(preguntaActual.respuestaCorrecta.trim().toLowerCase());

    const feedbackContainer = document.getElementById('feedback-como-era-o-fue');
    const botonComprobarSiguiente = document.getElementById('boton-comprobar-siguiente-como-era-o-fue');

    feedbackContainer.style.display = 'block';

    if (!respuestaUsuario) {
        feedbackContainer.innerHTML = '<span style="color: #FACC15; font-weight: bold;">Por favor, escribe una respuesta.</span>';
        return;
    }

    if (respuestaUsuario === respuestaCorrecta) {
        feedbackContainer.innerHTML = `<span style="color: #39FF14; font-weight: bold;">¡Correcto!</span>`;
        respuestasUsuarioComoEraOFue.push(true);
    } else {
        feedbackContainer.innerHTML = `<span style="color: #FF4D6D; font-weight: bold;">Incorrecto.</span> La respuesta correcta era: "${preguntaActual.respuestaCorrecta}".`;
        respuestasUsuarioComoEraOFue.push(false);
    }

    // --- AÑADE ESTE BLOQUE para mostrar la explicación ---
    if (preguntaActual.explicacion) {
        feedbackContainer.innerHTML += `<p style="font-size: 0.95em; color: #C4C4D6; margin-top: 10px;">${preguntaActual.explicacion}</p>`;
    }
    // ----------------------------------------------------
    
    // Deshabilitar input después de comprobar
    inputRespuesta.disabled = true;

    // Cambiar el botón para avanzar a la siguiente pregunta
    botonComprobarSiguiente.textContent = 'Siguiente';
    botonComprobarSiguiente.onclick = () => {
        preguntaActualIndexComoEraOFue++;
        cargarPreguntaComoEraOFue(shuffledPreguntasComoEraOFue);
    };
}

// ... (resto de tu código) ...
/**
 * Muestra los resultados finales de la actividad "¿Cómo era? o ¿Cómo fue?".
 */
function mostrarResultadosComoEraOFue() {
    const preguntasContainer = document.getElementById('preguntas-container-como-era-o-fue');
    const feedbackContainer = document.getElementById('feedback-como-era-o-fue');
    const botonComprobarSiguiente = document.getElementById('boton-comprobar-siguiente-como-era-o-fue');

    preguntasContainer.innerHTML = '';
    feedbackContainer.style.display = 'block';
    feedbackContainer.style.backgroundColor = '#0E0E1A';
    feedbackContainer.style.padding = '25px';
    feedbackContainer.style.borderRadius = '12px';
    feedbackContainer.style.textAlign = 'center';

    const correctas = respuestasUsuarioComoEraOFue.filter(r => r).length;
    const total = respuestasUsuarioComoEraOFue.length;
    const porcentaje = (correctas / total) * 100;

    feedbackContainer.innerHTML = `
        <h3 style="color: #00C8FF; margin-bottom: 15px;">Resultados de la Actividad:</h3>
        <p style="font-size: 1.1em;">Has acertado ${correctas} de ${total} preguntas.</p>
        <p style="font-size: 1.5em; font-weight: bold; color: ${porcentaje >= 70 ? '#39FF14' : '#FF4D6D'};">${porcentaje.toFixed(0)}% de aciertos</p>
    `;

    botonComprobarSiguiente.textContent = 'Reiniciar Actividad';
    botonComprobarSiguiente.onclick = () => {
        preguntaActualIndexComoEraOFue = 0;
        respuestasUsuarioComoEraOFue = [];
        mostrarActividadComoEraOFue(); // Reinicia la actividad
    };
    botonComprobarSiguiente.style.display = 'block';
}

/**
 * Muestra el submenú para la práctica de tiempos verbales, incluyendo opciones manuales y por nivel.
 */
function mostrarSubMenuTiemposVerbales() {
    limpiarContenedor();
    setGameBackground(false);

    const titulo = document.createElement('h2');
    titulo.textContent = 'ConJuanJugator';
    appContainer.appendChild(titulo);

    const instruccion = document.createElement('p');
    instruccion.className = 'section-sub';
    instruccion.textContent = 'Elige cómo quieres practicar la conjugación';
    appContainer.appendChild(instruccion);

    const lista = document.createElement('div');
    lista.className = 'row-list';
    lista.appendChild(crearRowCard('i-target', 'var(--fuxia)', 'Por Nivel', 'Todos los verbos con los tiempos de tu nivel', iniciarPracticaPorNivel));
    lista.appendChild(crearRowCard('i-gear', 'var(--cian)', 'Configuración', 'Elige verbos, tiempos y corrección de acentos', mostrarMenuConfiguracion));
    lista.appendChild(crearRowCard('i-pad', 'var(--morado)', 'Sin Configuración', 'Verbos y tiempos por defecto', () => mostrarActividadTiemposVerbales(tiemposSeleccionadosUsuario)));
    appContainer.appendChild(lista);

    const botonVolver = document.createElement('button');
    botonVolver.textContent = 'Volver al Menú de Practicar';
    botonVolver.onclick = mostrarSubMenuPracticar;
    botonVolver.classList.add('back-button');
    appContainer.appendChild(botonVolver);

}

/**
 * Muestra el menú de configuración con opciones para tiempos y verbos
 */
function mostrarMenuConfiguracion() {
    limpiarContenedor();

    // Crear contenedor principal
    const configContainer = document.createElement('div');
    configContainer.style.backgroundColor = 'rgba(255,255,255,0.045)';
    configContainer.style.color = '#EDEDF5';
    configContainer.style.padding = '20px';
    configContainer.style.borderRadius = '10px';
    configContainer.style.margin = '20px auto';
    configContainer.style.maxWidth = '600px';
    configContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    configContainer.style.textAlign = 'center';

    const titulo = document.createElement('h2');
    titulo.textContent = 'Configuración de Práctica';
    titulo.style.color = '#00C8FF';
    titulo.style.marginBottom = '30px';
    configContainer.appendChild(titulo);

    // Información actual
    const infoActual = document.createElement('div');
    infoActual.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    infoActual.style.padding = '15px';
    infoActual.style.borderRadius = '8px';
    infoActual.style.marginBottom = '30px';
    infoActual.style.textAlign = 'left';

    const infoTiempos = document.createElement('p');
    infoTiempos.innerHTML = `<strong>Tiempos seleccionados:</strong> ${tiemposSeleccionadosUsuario.length} (${tiemposSeleccionadosUsuario.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ')})`;
    infoTiempos.style.marginBottom = '10px';

    const infoVerbos = document.createElement('p');
    const verbosTexto = verbosSeleccionadosUsuario.length <= 5 
        ? verbosSeleccionadosUsuario.join(', ')
        : `${verbosSeleccionadosUsuario.slice(0, 5).join(', ')} y ${verbosSeleccionadosUsuario.length - 5} más`;
    infoVerbos.innerHTML = `<strong>Verbos seleccionados:</strong> ${verbosSeleccionadosUsuario.length} (${verbosTexto})`;

    infoActual.appendChild(infoTiempos);
    infoActual.appendChild(infoVerbos);
    configContainer.appendChild(infoActual);

    // Contenedor de la opción de corrección de acentos
    const acentosConfig = document.createElement('div');
    acentosConfig.style.display = 'flex';
    acentosConfig.style.alignItems = 'center';
    acentosConfig.style.justifyContent = 'space-between';
    acentosConfig.style.padding = '10px';
    acentosConfig.style.backgroundColor = 'rgba(255,255,255,0.06)';
    acentosConfig.style.borderRadius = '8px';
    acentosConfig.style.marginBottom = '20px';

    const labelAcentos = document.createElement('label');
    labelAcentos.textContent = 'Activar corrección de acentos';
    labelAcentos.style.fontWeight = 'bold';
    labelAcentos.style.color = '#EDEDF5';
    labelAcentos.htmlFor = 'checkbox-acentos';

    const inputAcentos = document.createElement('input');
    inputAcentos.type = 'checkbox';
    inputAcentos.id = 'checkbox-acentos';
    inputAcentos.checked = !corregirAcentos; // El estado del checkbox es el opuesto a corregirAcentos
    inputAcentos.style.transform = 'scale(1.5)';
    inputAcentos.style.cursor = 'pointer';

    // Evento para actualizar la variable global
    inputAcentos.onchange = (e) => {
        corregirAcentos = !e.target.checked; // Si el checkbox está marcado, corregirAcentos es false.
        console.log("Corrección de acentos:", corregirAcentos);
    };

    acentosConfig.appendChild(labelAcentos);
    acentosConfig.appendChild(inputAcentos);
    configContainer.appendChild(acentosConfig);

    // Contenedor de botones de configuración
    const botonesConfig = document.createElement('div');
    botonesConfig.style.display = 'flex';
    botonesConfig.style.flexDirection = 'column';
    botonesConfig.style.gap = '15px';
    botonesConfig.style.marginBottom = '30px';

    // Botón configurar tiempos
    const botonConfigTiempos = document.createElement('button');
    botonConfigTiempos.textContent = 'Configurar Tiempos Verbales';
    botonConfigTiempos.onclick = mostrarConfiguracionTiempos;
    botonConfigTiempos.classList.add('menu-button');
    botonConfigTiempos.style.padding = '15px 20px';
    botonConfigTiempos.style.fontSize = '1.1em';

    // Botón configurar verbos
    const botonConfigVerbos = document.createElement('button');
    botonConfigVerbos.textContent = 'Configurar Verbos';
    botonConfigVerbos.onclick = mostrarConfiguracionVerbos;
    botonConfigVerbos.classList.add('menu-button');
    botonConfigVerbos.style.padding = '15px 20px';
    botonConfigVerbos.style.fontSize = '1.1em';

    botonesConfig.appendChild(botonConfigTiempos);
    botonesConfig.appendChild(botonConfigVerbos);
    configContainer.appendChild(botonesConfig);

    // Botón comenzar práctica con configuración actual
    const botonComenzarPractica = document.createElement('button');
    botonComenzarPractica.textContent = 'Comenzar Práctica con Configuración Actual';
    botonComenzarPractica.onclick = () => mostrarActividadTiemposVerbales(tiemposSeleccionadosUsuario);
    botonComenzarPractica.style.backgroundColor = '#39FF14';
    botonComenzarPractica.style.color = '#0A0A12';
    botonComenzarPractica.style.fontWeight = '700';
    botonComenzarPractica.style.border = 'none';
    botonComenzarPractica.style.padding = '15px 25px';
    botonComenzarPractica.style.borderRadius = '8px';
    botonComenzarPractica.style.fontSize = '1.2em';
    botonComenzarPractica.style.fontWeight = 'bold';
    botonComenzarPractica.style.cursor = 'pointer';
    botonComenzarPractica.style.marginBottom = '20px';

    // Botón volver
    const botonVolver = document.createElement('button');
    botonVolver.textContent = 'Volver al submenú';
    botonVolver.onclick = mostrarSubMenuTiemposVerbales;
    botonVolver.classList.add('back-button');

    configContainer.appendChild(botonComenzarPractica);
    configContainer.appendChild(botonVolver);
    appContainer.appendChild(configContainer);
}

function mostrarConfiguracionTiempos() {
    limpiarContenedor();

    const configContainer = document.createElement('div');
    configContainer.style.backgroundColor = 'rgba(255,255,255,0.045)';
    configContainer.style.color = '#EDEDF5';
    configContainer.style.padding = '20px';
    configContainer.style.borderRadius = '10px';
    configContainer.style.margin = '20px auto';
    configContainer.style.maxWidth = '600px';
    configContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    configContainer.style.textAlign = 'center';

    const titulo = document.createElement('h2');
    titulo.textContent = 'Seleccionar Tiempos Verbales';
    titulo.style.color = '#00C8FF';
    configContainer.appendChild(titulo);

    const checkboxesContainer = document.createElement('div');
    checkboxesContainer.className = 'checkboxes-container-tiempos';
    checkboxesContainer.style.display = 'grid';
    checkboxesContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    checkboxesContainer.style.gap = '10px';
    checkboxesContainer.style.marginTop = '20px';
    checkboxesContainer.style.marginBottom = '30px';

    // Botones Seleccionar todo / Deseleccionar todo (tiempos)
    const toggleTiemposBar = document.createElement('div');
    toggleTiemposBar.style.display = 'flex';
    toggleTiemposBar.style.gap = '10px';
    toggleTiemposBar.style.justifyContent = 'center';
    toggleTiemposBar.style.flexWrap = 'wrap';
    toggleTiemposBar.style.marginTop = '14px';

    const setTodosTiempos = (estado) => {
        checkboxesContainer.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = estado; });
    };
    const btnTodosTiempos = document.createElement('button');
    btnTodosTiempos.textContent = 'Seleccionar todo';
    btnTodosTiempos.className = 'mini-toggle-btn';
    btnTodosTiempos.onclick = () => setTodosTiempos(true);
    const btnNingunoTiempos = document.createElement('button');
    btnNingunoTiempos.textContent = 'Deseleccionar todo';
    btnNingunoTiempos.className = 'mini-toggle-btn';
    btnNingunoTiempos.onclick = () => setTodosTiempos(false);
    toggleTiemposBar.appendChild(btnTodosTiempos);
    toggleTiemposBar.appendChild(btnNingunoTiempos);
    configContainer.appendChild(toggleTiemposBar);

    todosLosTiemposVerbales.forEach(tiempo => {
        const divTiempo = document.createElement('div');
        divTiempo.style.display = 'flex';
        divTiempo.style.alignItems = 'center';
        divTiempo.style.justifyContent = 'flex-start';
        divTiempo.style.padding = '8px';
        divTiempo.style.backgroundColor = 'rgba(255,255,255,0.06)';
        divTiempo.style.borderRadius = '8px';
        divTiempo.style.border = '1px solid rgba(255,255,255,0.12)';

        const inputCheckbox = document.createElement('input');
        inputCheckbox.type = 'checkbox';
        inputCheckbox.id = `checkbox-tiempo-${tiempo}`;
        inputCheckbox.value = tiempo;
        inputCheckbox.checked = tiemposSeleccionadosUsuario.includes(tiempo);
        inputCheckbox.style.marginRight = '10px';
        inputCheckbox.style.transform = 'scale(1.2)';
        inputCheckbox.style.cursor = 'pointer';

        const labelCheckbox = document.createElement('label');
        labelCheckbox.htmlFor = `checkbox-tiempo-${tiempo}`;
        labelCheckbox.textContent = tiempo.charAt(0).toUpperCase() + tiempo.slice(1);
        labelCheckbox.style.color = '#EDEDF5';
        labelCheckbox.style.cursor = 'pointer';

        divTiempo.appendChild(inputCheckbox);
        divTiempo.appendChild(labelCheckbox);
        checkboxesContainer.appendChild(divTiempo);
    });

    configContainer.appendChild(checkboxesContainer);

    const guardarConfigBoton = document.createElement('button');
    guardarConfigBoton.textContent = 'Guardar y Volver';
    guardarConfigBoton.onclick = guardarConfiguracionTiempos;
    guardarConfigBoton.classList.add('menu-button');
    guardarConfigBoton.style.marginRight = '15px';

    const botonVolver = document.createElement('button');
    botonVolver.textContent = 'Cancelar';
    botonVolver.onclick = mostrarMenuConfiguracion;
    botonVolver.classList.add('back-button');

    configContainer.appendChild(guardarConfigBoton);
    configContainer.appendChild(botonVolver);
    appContainer.appendChild(configContainer);
}

/**
 * Configuración de verbos (modificada para volver al menú de configuración)
 */
function mostrarConfiguracionVerbos() {
    limpiarContenedor();

    const configContainer = document.createElement('div');
    configContainer.style.backgroundColor = 'rgba(255,255,255,0.045)';
    configContainer.style.color = '#EDEDF5';
    configContainer.style.padding = '20px';
    configContainer.style.borderRadius = '10px';
    configContainer.style.margin = '20px auto';
    configContainer.style.maxWidth = '800px';
    configContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    configContainer.style.textAlign = 'center';

    const titulo = document.createElement('h2');
    titulo.textContent = 'Seleccionar Verbos para Practicar';
    titulo.style.color = '#00C8FF';
    configContainer.appendChild(titulo);

    // Botones de selección rápida
    const botonesSeleccion = document.createElement('div');
    botonesSeleccion.style.marginBottom = '20px';
    botonesSeleccion.style.display = 'flex';
    botonesSeleccion.style.gap = '10px';
    botonesSeleccion.style.justifyContent = 'center';

    const botonTodos = document.createElement('button');
    botonTodos.textContent = 'Todos';
    botonTodos.onclick = () => toggleTodosLosVerbos(true);
    botonTodos.style.padding = '8px 15px';
    botonTodos.style.backgroundColor = '#39FF14';
    botonTodos.style.color = '#0A0A12';
    botonTodos.style.border = 'none';
    botonTodos.style.borderRadius = '5px';
    botonTodos.style.cursor = 'pointer';

    const botonNinguno = document.createElement('button');
    botonNinguno.textContent = 'Ninguno';
    botonNinguno.onclick = () => toggleTodosLosVerbos(false);
    botonNinguno.style.padding = '8px 15px';
    botonNinguno.style.backgroundColor = '#FF4D6D';
    botonNinguno.style.color = '#EDEDF5';
    botonNinguno.style.border = 'none';
    botonNinguno.style.borderRadius = '5px';
    botonNinguno.style.cursor = 'pointer';

    botonesSeleccion.appendChild(botonTodos);
    botonesSeleccion.appendChild(botonNinguno);
    configContainer.appendChild(botonesSeleccion);

    // Contenedor con scroll para los verbos
    const scrollContainer = document.createElement('div');
    scrollContainer.style.maxHeight = '300px';
    scrollContainer.style.overflowY = 'auto';
    scrollContainer.style.border = '1px solid rgba(255,255,255,0.12)';
    scrollContainer.style.borderRadius = '5px';
    scrollContainer.style.padding = '15px';
    scrollContainer.style.backgroundColor = 'rgba(255,255,255,0.03)';
    scrollContainer.style.marginBottom = '20px';

    const checkboxesContainer = document.createElement('div');
    checkboxesContainer.className = 'checkboxes-container-verbos';
    checkboxesContainer.style.display = 'grid';
    checkboxesContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 1fr))';
    checkboxesContainer.style.gap = '8px';

    const verbosOrdenados = [...verbosCapitalizados].sort();
    verbosOrdenados.forEach(verbo => {
        const divVerbo = document.createElement('div');
        divVerbo.style.display = 'flex';
        divVerbo.style.alignItems = 'center';
        divVerbo.style.padding = '4px 6px';
        divVerbo.style.backgroundColor = 'rgba(255,255,255,0.06)';
        divVerbo.style.borderRadius = '3px';
        divVerbo.style.border = '1px solid rgba(255,255,255,0.12)';

        const inputCheckbox = document.createElement('input');
        inputCheckbox.type = 'checkbox';
        inputCheckbox.id = `checkbox-verbo-${verbo}`;
        inputCheckbox.value = verbo;
        inputCheckbox.checked = verbosSeleccionadosUsuario.includes(verbo);
        inputCheckbox.style.marginRight = '6px';
        inputCheckbox.style.cursor = 'pointer';

        const labelCheckbox = document.createElement('label');
        labelCheckbox.htmlFor = `checkbox-verbo-${verbo}`;
        labelCheckbox.textContent = verbo;
        labelCheckbox.style.fontSize = '0.85em';
        labelCheckbox.style.cursor = 'pointer';

        divVerbo.appendChild(inputCheckbox);
        divVerbo.appendChild(labelCheckbox);
        checkboxesContainer.appendChild(divVerbo);
    });

    scrollContainer.appendChild(checkboxesContainer);
    configContainer.appendChild(scrollContainer);

    // Contador de verbos seleccionados
    const contador = document.createElement('div');
    contador.id = 'contador-verbos';
    contador.style.marginBottom = '20px';
    contador.style.padding = '10px';
    contador.style.backgroundColor = 'rgba(0,200,255,0.06)';
    contador.style.borderRadius = '5px';
    actualizarContadorVerbos();

    configContainer.appendChild(contador);

    // Event listeners para actualizar contador
    checkboxesContainer.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', actualizarContadorVerbos);
    });

    const guardarConfigBoton = document.createElement('button');
    guardarConfigBoton.textContent = 'Guardar y Volver';
    guardarConfigBoton.onclick = guardarConfiguracionVerbos;
    guardarConfigBoton.classList.add('menu-button');
    guardarConfigBoton.style.marginRight = '15px';

    const botonVolver = document.createElement('button');
    botonVolver.textContent = 'Cancelar';
    botonVolver.onclick = mostrarMenuConfiguracion;
    botonVolver.classList.add('back-button');

    configContainer.appendChild(guardarConfigBoton);
    configContainer.appendChild(botonVolver);
    appContainer.appendChild(configContainer);
}

/**
 * Funciones auxiliares
 */
function toggleTodosLosVerbos(seleccionar) {
    const checkboxes = document.querySelectorAll('.checkboxes-container-verbos input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = seleccionar);
    actualizarContadorVerbos();
}

function actualizarContadorVerbos() {
    const contador = document.getElementById('contador-verbos');
    if (!contador) return;
    
    const seleccionados = document.querySelectorAll('.checkboxes-container-verbos input[type="checkbox"]:checked').length;
    contador.innerHTML = `<strong>Verbos seleccionados:</strong> ${seleccionados} de ${verbosCapitalizados.length}`;
}

/**
 * Guardar configuraciones (modificadas para volver al menú principal)
 */
function guardarConfiguracionTiempos() {
    const nuevaSeleccion = [];
    const checkboxes = document.querySelectorAll('.checkboxes-container-tiempos input[type="checkbox"]:checked');
    checkboxes.forEach(cb => nuevaSeleccion.push(cb.value));

    if (nuevaSeleccion.length === 0) {
        mostrarMensaje("Advertencia", "Debes seleccionar al menos un tiempo verbal.");
        return;
    }

    tiemposSeleccionadosUsuario = [...nuevaSeleccion];
    
    if (typeof guardarProgreso === 'function') {
        guardarProgreso();
    }

    mostrarMensaje("Configuración", "Tiempos verbales guardados correctamente.");
    mostrarMenuConfiguracion();
}

function guardarConfiguracionVerbos() {
    const nuevaSeleccion = [];
    const checkboxes = document.querySelectorAll('.checkboxes-container-verbos input[type="checkbox"]:checked');
    checkboxes.forEach(cb => nuevaSeleccion.push(cb.value));

    if (nuevaSeleccion.length === 0) {
        mostrarMensaje("Advertencia", "Debes seleccionar al menos un verbo.");
        return;
    }

    verbosSeleccionadosUsuario = [...nuevaSeleccion];
    
    if (typeof guardarProgreso === 'function') {
        guardarProgreso();
    }

    mostrarMensaje("Configuración", "Verbos seleccionados guardados correctamente.");
    mostrarMenuConfiguracion();
}



/**
 * Muestra la interfaz para la actividad de práctica de tiempos verbales.
 * @param {Array<string>} [tiemposAUsar=todosLosTiemposVerbales] - Los tiempos verbales que deben usarse en esta sesión de práctica.
 */
function mostrarActividadTiemposVerbales(tiemposAUsar = todosLosTiemposVerbales) {
    limpiarContenedor();
    setGameBackground(true);
    // respuestasInputs se asume que es una variable global o definida en un scope superior
    // si no, asegúrate de que esté correctamente declarada: let respuestasInputs = {};
    respuestasInputs = {}; // Reinicializar para cada nueva actividad

    // 1. Crear un contenedor para toda la sección de práctica y aplicarle los estilos base
    const practiceContainer = document.createElement('div');
    practiceContainer.style.backgroundColor = 'rgba(255,255,255,0.045)'; // Fondo blanco
    practiceContainer.style.color = '#EDEDF5';
    practiceContainer.style.padding = '20px';
    practiceContainer.style.borderRadius = '10px';
    practiceContainer.style.margin = '20px auto'; // Centrar y añadir margen superior/inferior
    practiceContainer.style.maxWidth = '700px'; // Ajusta el ancho máximo según tu diseño
    practiceContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Sombra suave
    practiceContainer.style.textAlign = 'center'; // Centrar el contenido dentro de este contenedor
    practiceContainer.style.position = 'relative'; // Necesario para posicionar el botón de ayuda


    const headerContainer = document.createElement('div');
    headerContainer.style.display = 'flex';
    headerContainer.style.justifyContent = 'space-between';
    headerContainer.style.alignItems = 'flex-start';
    headerContainer.style.marginBottom = '20px';
    headerContainer.style.position = 'relative';
    
    // Contenedor para las instrucciones
    const instructionsContainer = document.createElement('div');
    instructionsContainer.style.flex = '1';
    instructionsContainer.style.paddingRight = '50px'; // Espacio para el botón
    
    // Instrucciones
    const labelInstrucciones = document.createElement('p');
    labelInstrucciones.textContent = "Escribe la conjugación del verbo en cada tiempo verbal.";
    labelInstrucciones.style.color = '#EDEDF5';
    labelInstrucciones.style.fontWeight = 'bold';
    labelInstrucciones.style.margin = '0';
    instructionsContainer.appendChild(labelInstrucciones);
    
    // Botón de ayuda único (píldora morada), abre el modal de tipos de verbos
    const explanationButton = document.createElement('button');
    explanationButton.id = 'explanation-button';
    explanationButton.className = 'help-btn';
    explanationButton.innerHTML = '<svg class="ico" viewBox="0 0 24 24"><use href="#i-help"/></svg>¿Qué tipos de verbos hay?';
    explanationButton.title = 'Ver tipos de verbos irregulares';
    explanationButton.onclick = function() {
        mostrarModalTiposVerbos();
    };

    // Ensamblar estructura
    headerContainer.appendChild(instructionsContainer);
    practiceContainer.appendChild(headerContainer);
    // El botón de ayuda va centrado debajo de las instrucciones (sin solaparse)
    const helpRow = document.createElement('div');
    helpRow.style.display = 'flex';
    helpRow.style.justifyContent = 'center';
    helpRow.style.margin = '6px 0 16px';
    helpRow.appendChild(explanationButton);
    practiceContainer.appendChild(helpRow);
    const labelVerbo = document.createElement('h3');
    labelVerbo.id = 'label-verbo';
    labelVerbo.style.color = '#00C8FF'; // Un color que destaque para el verbo
    labelVerbo.style.fontSize = '1.8em'; // Tamaño de fuente más grande
    labelVerbo.style.marginBottom = '15px';
    practiceContainer.appendChild(labelVerbo); // Añadir al nuevo contenedor

    const labelPronombre = document.createElement('h3');
    labelPronombre.id = 'label-pronombre';
    labelPronombre.style.color = '#00C8FF'; // Un color que destaque para el pronombre
    labelPronombre.style.fontSize = '1.6em'; // Tamaño de fuente
    labelPronombre.style.marginBottom = '25px';
    practiceContainer.appendChild(labelPronombre); // Añadir al nuevo contenedor

    const tiemposParaPracticar = tiemposAUsar;

    const todosLosInputs = []; // Array para guardar todos los inputs en orden

    tiemposParaPracticar.forEach(tiempo => {
        const divGroup = document.createElement('div');
        divGroup.style.marginBottom = '10px';
        divGroup.style.width = '100%';
        divGroup.style.display = 'flex';
        divGroup.style.justifyContent = 'center'; // Centra el label y el input
        divGroup.style.alignItems = 'center';

        const labelTiempo = document.createElement('label');
        labelTiempo.textContent = `${capitalizeFirstLetter(tiempo)}:`; // Usa la función capitalize
        labelTiempo.style.marginRight = '10px';
        labelTiempo.style.minWidth = '180px'; // Ancho mínimo ajustado para los labels
        labelTiempo.style.textAlign = 'right';
        labelTiempo.style.color = '#C4C4D6';
        labelTiempo.style.fontWeight = 'bold';

        const entryTiempo = document.createElement('input');
        entryTiempo.type = 'text';
        entryTiempo.id = `input-${tiempo}`;
        entryTiempo.style.flexGrow = '1'; // El input tomará el espacio restante
        entryTiempo.style.maxWidth = '300px'; // Ancho máximo para el input
        entryTiempo.style.padding = '10px';
        entryTiempo.style.borderRadius = '8px';
        entryTiempo.style.border = '1px solid rgba(255,255,255,0.18)';
        entryTiempo.style.backgroundColor = 'rgba(255,255,255,0.07)';
        entryTiempo.style.color = '#EDEDF5'; // Texto claro legible sobre fondo oscuro
        entryTiempo.style.boxSizing = 'border-box'; // Incluye padding y border en el width/height

        // Navegación con Enter
        entryTiempo.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const currentIndex = todosLosInputs.indexOf(this);
                const nextIndex = currentIndex + 1;
                
                if (nextIndex < todosLosInputs.length) {
                    todosLosInputs[nextIndex].focus();
                }
            }
        });

        // Guardar input en el array
        todosLosInputs.push(entryTiempo);

        respuestasInputs[tiempo] = entryTiempo;

        divGroup.appendChild(labelTiempo);
        divGroup.appendChild(entryTiempo);
        practiceContainer.appendChild(divGroup); // Añadir al nuevo contenedor
    });

    // Contenedor para los botones para agruparlos y centrarlos
    const buttonGroup = document.createElement('div');
    buttonGroup.style.marginTop = '30px';
    buttonGroup.style.display = 'flex';
    buttonGroup.style.gap = '15px'; // Espacio entre botones
    buttonGroup.style.justifyContent = 'center'; // Centrar los botones

    const botonVerificar = document.createElement('button');
    botonVerificar.id = 'boton-verificar';
    botonVerificar.textContent = 'Verificar Respuestas';
    botonVerificar.onclick = () => verificarRespuestasTiemposVerbales(tiemposParaPracticar);
    botonVerificar.classList.add('menu-button'); // Mantén tus clases CSS existentes para botones
    buttonGroup.appendChild(botonVerificar);

    const botonNuevo = document.createElement('button');
    botonNuevo.textContent = 'Nuevo Verbo';
    botonNuevo.onclick = () => nuevoVerboTiemposVerbales(tiemposParaPracticar);
    botonNuevo.classList.add('menu-button'); // Mantén tus clases CSS existentes para botones
    buttonGroup.appendChild(botonNuevo);

    practiceContainer.appendChild(buttonGroup); // Añadir el grupo de botones al contenedor de práctica

    const botonVolver = document.createElement('button');
    botonVolver.textContent = 'Volver al submenú';
    botonVolver.onclick = mostrarSubMenuTiemposVerbales;
    botonVolver.classList.add('back-button'); // Mantén tus clases CSS existentes para botones
    botonVolver.style.marginTop = '20px'; // Añade margen superior al botón de volver
    practiceContainer.appendChild(botonVolver);

// --- Modal de Ayuda Mejorado ---
const ayudaModal = document.createElement('div');
ayudaModal.id = 'ayuda-irregularidades-modal';
ayudaModal.style.display = 'none';
ayudaModal.style.position = 'fixed';
ayudaModal.style.zIndex = '1000';
ayudaModal.style.left = '0';
ayudaModal.style.top = '0';
ayudaModal.style.width = '100%';
ayudaModal.style.height = '100%';
ayudaModal.style.overflow = 'auto';
ayudaModal.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'; // Fondo más oscuro
ayudaModal.style.backdropFilter = 'blur(3px)'; // Efecto de desenfoque moderno
ayudaModal.style.animation = 'fadeIn 0.3s ease-out'; // Animación de entrada

// Contenido del modal
const modalContent = document.createElement('div');
modalContent.style.backgroundColor = '#12121E';
modalContent.style.margin = '5% auto';
modalContent.style.padding = '0'; // Sin padding para mejor control
modalContent.style.border = '1px solid #A855F7';
modalContent.style.width = '90%';
modalContent.style.maxWidth = '600px';
modalContent.style.borderRadius = '15px';
modalContent.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 30px rgba(0, 0, 0, 0.15)';
modalContent.style.position = 'relative';
modalContent.style.overflow = 'hidden'; // Para bordes redondeados perfectos
modalContent.style.fontFamily = "'DM Sans','Inter',sans-serif";

// Header del modal
const modalHeader = document.createElement('div');
modalHeader.style.background = 'linear-gradient(135deg, #A855F7 0%, #FF2DA6 100%)';
modalHeader.style.color = '#EDEDF5';
modalHeader.style.padding = '20px 25px';
modalHeader.style.display = 'flex';
modalHeader.style.justifyContent = 'space-between';
modalHeader.style.alignItems = 'center';

const modalTitle = document.createElement('h2');
modalTitle.textContent = '📚 Irregularidades del Verbo';
modalTitle.style.margin = '0';
modalTitle.style.fontSize = '1.5em';
modalTitle.style.fontWeight = '600';

const closeButton = document.createElement('button');
closeButton.innerHTML = '✕';
closeButton.style.background = 'rgba(255, 255, 255, 0.2)';
closeButton.style.border = 'none';
closeButton.style.color = '#EDEDF5';
closeButton.style.fontSize = '20px';
closeButton.style.fontWeight = 'bold';
closeButton.style.cursor = 'pointer';
closeButton.style.borderRadius = '50%';
closeButton.style.width = '35px';
closeButton.style.height = '35px';
closeButton.style.display = 'flex';
closeButton.style.justifyContent = 'center';
closeButton.style.alignItems = 'center';
closeButton.style.transition = 'all 0.2s ease';
closeButton.onclick = toggleAyudaIrregularidades;

// Efectos hover para el botón cerrar
closeButton.addEventListener('mouseenter', () => {
    closeButton.style.background = 'rgba(255, 255, 255, 0.3)';
    closeButton.style.transform = 'scale(1.1)';
});

closeButton.addEventListener('mouseleave', () => {
    closeButton.style.background = 'rgba(255, 255, 255, 0.2)';
    closeButton.style.transform = 'scale(1)';
});

modalHeader.appendChild(modalTitle);
modalHeader.appendChild(closeButton);

// Cuerpo del modal
const modalBody = document.createElement('div');
modalBody.id = 'ayuda-irregularidades-content';
modalBody.style.padding = '25px';
modalBody.style.maxHeight = '60vh';
modalBody.style.overflowY = 'auto';
modalBody.style.fontSize = '1em';
modalBody.style.lineHeight = '1.6';
modalBody.style.color = '#EDEDF5';
modalBody.style.whiteSpace = 'pre-wrap';

// Scrollbar personalizada para el contenido
modalBody.style.scrollbarWidth = 'thin';
modalBody.style.scrollbarColor = '#A855F7 rgba(255,255,255,0.06)';

// Footer opcional (puedes quitarlo si no lo necesitas)
const modalFooter = document.createElement('div');
modalFooter.style.padding = '15px 25px';
modalFooter.style.backgroundColor = 'rgba(255,255,255,0.045)';
modalFooter.style.borderTop = '1px solid rgba(255,255,255,0.12)';
modalFooter.style.textAlign = 'center';
modalFooter.style.fontSize = '0.9em';
modalFooter.style.color = '#9A9AB0';
modalFooter.innerHTML = '<em>💡 Tip: Usa estas formas como referencia para conjugar correctamente</em>';

// Ensamblar el modal
modalContent.appendChild(modalHeader);
modalContent.appendChild(modalBody);
modalContent.appendChild(modalFooter); // Comenta esta línea si no quieres el footer
ayudaModal.appendChild(modalContent);

// Cerrar modal al hacer clic fuera del contenido
ayudaModal.addEventListener('click', (e) => {
    if (e.target === ayudaModal) {
        toggleAyudaIrregularidades();
    }
});

// Cerrar con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && ayudaModal.style.display === 'block') {
        toggleAyudaIrregularidades();
    }
});

appContainer.appendChild(ayudaModal);
    // Finalmente, añade el contenedor de práctica al contenedor principal de la aplicación
    appContainer.appendChild(practiceContainer);

    // Asegúrate de que currentVerbo y currentPronombre se establezcan aquí o en nuevoVerboTiemposVerbales
    nuevoVerboTiemposVerbales(tiemposParaPracticar);
}



/**
 * Selecciona un nuevo verbo y pronombre aleatoriamente para la actividad de tiempos verbales.
 * @param {Array<string>} tiemposParaLimpiar - Los tiempos verbales cuyos inputs deben limpiarse.
 */
function nuevoVerboTiemposVerbales(tiemposParaLimpiar) {
    // Habilitar el botón de verificar
    const botonVerificar = document.getElementById('boton-verificar');
    if (botonVerificar) {
        botonVerificar.disabled = false;
    }

    // Habilitar todos los inputs
    const inputs = document.querySelectorAll('#practice-container input[type="text"]');
    inputs.forEach(input => {
        input.readOnly = false;
    });
    
    // Usar los verbos seleccionados por el usuario
    const verbosParaUsar = verbosSeleccionadosUsuario.length > 0 ? verbosSeleccionadosUsuario : verbosCapitalizados;
    
    currentVerbo = verbosParaUsar[Math.floor(Math.random() * verbosParaUsar.length)];
    currentPronombre = pronombresCapitalizados[Math.floor(Math.random() * pronombresCapitalizados.length)];

    document.getElementById('label-verbo').textContent = `Verbo: ${currentVerbo}`;
    document.getElementById('label-pronombre').textContent = `Pronombre: ${currentPronombre}`;

    tiemposParaLimpiar.forEach(tiempo => {
        if (respuestasInputs[tiempo]) {
            respuestasInputs[tiempo].value = '';
            respuestasInputs[tiempo].style.backgroundColor = 'rgba(255,255,255,0.10)';
            respuestasInputs[tiempo].style.color = '#EDEDF5';
        }
    });
}


/**
 * Verifica las respuestas del usuario en la actividad de tiempos verbales.
 * @param {Array<string>} tiemposAUsar - Los tiempos verbales que se están evaluando.
 */
function verificarRespuestasTiemposVerbales(tiemposAUsar) {
    const verbo = currentVerbo.toLowerCase();
    const pronombreInput = currentPronombre.toLowerCase(); // El pronombre tal como viene de la UI (ej. "ellos")

    // Define un mapeo universal de los pronombres de entrada a las posibles claves en el diccionario
    // Esta tabla debe manejar todas las variantes de pronombres que puedas tener en tu diccionario
    const universalPronounKeyMaps = {
        "yo": ["yo"],
        "tú": ["tú"],
        "él": ["él/ella/usted", "él/ella", "él"], // Si el input es "él", prueba estas claves en orden
        "él/ella": ["él/ella/usted", "él/ella"], // Si el input es "él/ella", prueba estas claves
        "nosotros": ["nosotros/as", "nosotros"],
        "vosotros": ["vosotros/as", "vosotros"],
        "ellos": ["ellos/ellas/ustedes", "ellos/ellas", "ellos"], // Si el input es "ellos", prueba estas claves en orden
        "ellos/ellas": ["ellos/ellas/ustedes", "ellos/ellas"] // Si el input es "ellos/ellas", prueba estas claves
    };

    // Obtener el objeto de conjugación del verbo completo
    const verbConjugation = conjugaciones[verbo];

    if (!verbConjugation) {
        mostrarMensaje("Error", `No se encontraron conjugaciones para el verbo "${currentVerbo}" en el diccionario.`);
        return;
    }

    // --- Lógica para encontrar la clave de pronombre correcta en el diccionario ---
    // Obtiene las posibles claves de diccionario para el pronombre de entrada
    const possiblePronounKeys = universalPronounKeyMaps[pronombreInput] || [pronombreInput];
    let correctPronounKey = null;

    for (const keyOption of possiblePronounKeys) {
        if (verbConjugation[keyOption]) { // Si esta clave existe para el verbo
            correctPronounKey = keyOption;
            break; // Encontrado, salimos del bucle
        }
    }

    if (!correctPronounKey) {
        mostrarMensaje("Error", `No se encontró la definición del pronombre "${pronombreInput}" para el verbo "${currentVerbo}" en el diccionario. (Intentado: ${possiblePronounKeys.join(', ')})`);
        return;
    }

    // Ahora sí, obtenemos las respuestas correctas usando la clave encontrada
    const respuestasCorrectas = verbConjugation[correctPronounKey];

    // Esta comprobación adicional es por si la entrada del pronombre existe, pero no tiene conjugaciones
    if (!respuestasCorrectas || Object.keys(respuestasCorrectas).length === 0) {
        mostrarMensaje("Error", `Las conjugaciones para "${currentVerbo}" en "${correctPronounKey}" están vacías o incompletas en el diccionario.`);
        return;
    }

    // Deshabilitar el botón de verificar para evitar múltiples clics
    document.getElementById('boton-verificar').disabled = true;

    // Deshabilitar todos los inputs
    const inputs = document.querySelectorAll('#practice-container input[type="text"]');
    inputs.forEach(input => {
        input.readOnly = true;
    });

    let correctas = 0;
    const errores = [];

    tiemposAUsar.forEach(tiempoDelFormulario => {
        // 1. Obtener la respuesta del usuario y la respuesta(s) correcta(s)
        let respuestaUsuario = respuestasInputs[tiempoDelFormulario].value.trim().toLowerCase();
        
        const normalizedTiempo = removeAccents(tiempoDelFormulario).toLowerCase();
        const claveParaDiccionario = tiempoKeyMap[normalizedTiempo] || tiempoDelFormulario;

        let correctFormas = respuestasCorrectas[claveParaDiccionario] 
            ? respuestasCorrectas[claveParaDiccionario].toLowerCase().split(' / ') 
            : [];
        
        // 2. Aplicar la lógica de corrección de acentos solo si el usuario lo desea
        if (corregirAcentos) {
            respuestaUsuario = removeAccents(respuestaUsuario);
            correctFormas = correctFormas.map(forma => removeAccents(forma));
        }

        // 3. Comparar las respuestas
        const esCorrecta = correctFormas.includes(respuestaUsuario);

        if (esCorrecta) {
            correctas += 1;
            respuestasInputs[tiempoDelFormulario].style.backgroundColor = 'rgba(57,255,20,.85)';
            respuestasInputs[tiempoDelFormulario].style.color = '#0E0E1A';
        } else {
            errores.push({
                tiempo: tiempoDelFormulario,
                usuario: respuestaUsuario,
                correcto: respuestasCorrectas[claveParaDiccionario]
            });
            respuestasInputs[tiempoDelFormulario].style.backgroundColor = 'rgba(255,77,109,.9)';
            respuestasInputs[tiempoDelFormulario].style.color = '#0E0E1A';
        }
    });

    const incorrectas = tiemposAUsar.length - correctas;

    if (correctas === tiemposAUsar.length) {
        puntuacion += correctas;
        mostrarMensaje(
            "Resultado",
            `¡Todas las respuestas son correctas!\n<div style="margin-top: 15px; text-align: center; font-weight: bold;">Puntuación actual: ${puntuacion}</div>`
        );
    } else {
        let tablaRowsHtml = '';
        errores.forEach(error => {
            const tiempoCapitalizado = error.tiempo.charAt(0).toUpperCase() + error.tiempo.slice(1);
            const respuestaUsuarioDisplay = error.usuario || '[Sin respuesta]';
            const respuestaCorrectaDisplay = Array.isArray(error.correcto) ? error.correcto.join(' / ') : error.correcto || 'N/A';

            tablaRowsHtml += `
                <tr>
                    <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.12); color: var(--fuxia); font-weight: bold;">${tiempoCapitalizado}</td>
                    <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.12); color: #FF6B81; font-weight: normal;">${respuestaUsuarioDisplay}</td>
                    <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.12); color: #39FF14; font-weight: bold;">"${respuestaCorrectaDisplay}"</td>
                </tr>
            `;
        });
        let tablaErroresHtml = `
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9em; text-align: center;">
                <thead>
                    <tr style="background-color: rgba(255,255,255,0.06);">
                        <th style="padding: 8px; border: 1px solid rgba(255,255,255,0.12); color: var(--amarillo);">Tiempo Verbal</th>
                        <th style="padding: 8px; border: 1px solid rgba(255,255,255,0.12); color: var(--amarillo);">Tu respuesta</th>
                        <th style="padding: 8px; border: 1px solid rgba(255,255,255,0.12); color: var(--amarillo);">Respuesta correcta</th>
                    </tr>
                </thead>
                <tbody>
                    ${tablaRowsHtml}
                </tbody>
            </table>
        `;
        
        puntuacion += correctas;
        mostrarMensaje(
            "Resultado",
            `<div style="text-align: center;"><span style="color: var(--cian); font-weight: bold;">${correctas} respuestas correctas, ${incorrectas} incorrectas:</span></div>` +
            `<div style="max-height: 180px; overflow-y: auto; margin-top: 15px;">${tablaErroresHtml}</div>` +
            `<div style="margin-top: 15px; text-align: center;"><span style="color: var(--cian); font-weight: bold;">Puntuación actual: ${puntuacion}</span></div>`
        );
    }

}


/**
 * Inicia una sesión de práctica de tiempos verbales basándose en el nivel actual del usuario.
 */
function iniciarPracticaPorNivel() {
    const nivelActual = calcularNivel(puntuacion);
    const tiemposParaNivel = tiemposPorNivel[nivelActual];

    if (!tiemposParaNivel || tiemposParaNivel.length === 0) {
        mostrarMensaje("Información", `No hay tiempos verbales definidos para el nivel "${nivelActual}".`);
        mostrarActividadTiemposVerbales(todosLosTiemposVerbales);
        return;
    }

    mostrarMensaje("Práctica por Nivel", `Estás en el nivel "${nivelActual}". Practicarás los tiempos: ${tiemposParaNivel.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ')}.`);
    mostrarActividadTiemposVerbales(tiemposParaNivel);
}





/**
 * Muestra el nivel actual del usuario.
 */
function mostrarNivel() {
    const nivelActual = calcularNivel(puntuacion);
    mostrarMensaje("Nivel", `Tu nivel actual es: ${nivelActual}`);
}







// función para Aprender > Tiempos verbales: uso y forma. 
function mostrarExplicacionesTiemposVerbales() {
    limpiarContenedor();
    setGameBackground(false);

    const tituloPagina = document.createElement('h2');
    tituloPagina.textContent = 'Uso y Forma de los tiempos';
    appContainer.appendChild(tituloPagina);

    const instruccion = document.createElement('p');
    instruccion.className = 'section-sub';
    instruccion.textContent = 'Selecciona un tiempo para ver su uso y forma';
    appContainer.appendChild(instruccion);

    // Agrupados por modo (Indicativo / Subjuntivo), como en la v5
    const indicativo = ["presente", "pretérito perfecto", "pretérito indefinido", "pretérito imperfecto", "pluscuamperfecto", "futuro", "condicional"];
    const subjuntivo = ["presente de subjuntivo", "imperfecto de subjuntivo", "pluscuamperfecto de subjuntivo"];
    const capitalizar = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    const construirGrupo = (tituloModo, claseModo, tiempos, accent) => {
        // Solo mostramos los tiempos que realmente existen en los datos
        const disponibles = tiempos.filter(t => todosLosTiemposVerbales.includes(t));
        if (disponibles.length === 0) return;

        const label = document.createElement('div');
        label.className = 'group-label ' + claseModo;
        label.textContent = tituloModo;
        appContainer.appendChild(label);

        const lista = document.createElement('div');
        lista.className = 'row-list row-list--compact';
        disponibles.forEach(tiempo => {
            lista.appendChild(crearRowTiempo(tiempo, accent, () => mostrarExplicacionDetalladaTiempoVerbal(tiempo)));
        });
        appContainer.appendChild(lista);
    };

    construirGrupo('Modo Indicativo', 'ind', indicativo, 'var(--cian)');
    construirGrupo('Modo Subjuntivo', 'sub', subjuntivo, 'var(--amarillo)');

    const botonVolver = document.createElement('button');
    botonVolver.textContent = 'Volver al menú de Aprender';
    botonVolver.onclick = mostrarSubMenuAprender;
    botonVolver.classList.add('back-button');
    appContainer.appendChild(botonVolver);
}


/**
 * Muestra la explicación detallada para un tiempo verbal específico.
 * @param {string} tiempoKey - La clave del tiempo verbal a mostrar.
 */
function mostrarExplicacionDetalladaTiempoVerbal(tiempoKey) {
    // --- VERIFICACIÓN DE tiempoKey AL INICIO ---
    if (!tiempoKey || typeof tiempoKey !== 'string') {
        mostrarMensaje("Error", "No se pudo identificar el tiempo verbal seleccionado. Por favor, inténtalo de nuevo.");
        mostrarExplicacionesTiemposVerbales(); 
        return;
    }
    // --- FIN VERIFICACIÓN ---

    limpiarContenedor();
    setGameBackground(false); 

    // --- USAR el tiempoKeyMap GLOBAL para normalizar tiempoKey ---
    // Si la clave no está en el mapa, se usa tal cual.
    const normalizedTiempoKey = tiempoKeyMap[tiempoKey] || tiempoKey;
    // --- FIN USO ---
   
    const info = explicacionesTiempos[normalizedTiempoKey];

    if (!info) {
        mostrarMensaje("Error", `No se encontró información para este tiempo verbal (${tiempoKey}). Se intentó buscar como "${normalizedTiempoKey}". Por favor, verifique que la clave "${normalizedTiempoKey}" exista en su objeto 'explicacionesTiempos'.`);
        mostrarExplicacionesTiemposVerbales(); 
        return;
    }

    // Título del tiempo verbal
    const tituloElement = document.createElement('h2');
    tituloElement.textContent = info.titulo;
    tituloElement.className = 'tiempo-titulo';
    appContainer.appendChild(tituloElement);

    // Imagen (si existe)
    if (info.img) {
        const imgElement = document.createElement('img');
        imgElement.src = info.img;
        imgElement.alt = `Infografía de ${info.titulo}`;
        imgElement.className = 'tiempo-infografia';
        appContainer.appendChild(imgElement);
    }

    // Contenedor principal para las explicaciones de Uso y Forma (lado a lado)
    const sectionsContainer = document.createElement('div');
    sectionsContainer.style.display = 'flex';
    sectionsContainer.style.flexWrap = 'wrap'; 
    sectionsContainer.style.gap = '20px';
    sectionsContainer.style.marginTop = '20px';
    sectionsContainer.style.justifyContent = 'center'; 

    // Sección "¿Cuándo se usa?" (columna izquierda)
    const usoColumn = document.createElement('div');
    usoColumn.style.flex = '1';
    usoColumn.style.minWidth = '300px'; 
    usoColumn.innerHTML = `
        <div class="info-box">
            <h3>¿Cuándo se usa?</h3>
            ${info.contentHtml || ''}
        </div>
    `;
    sectionsContainer.appendChild(usoColumn);

    // Sección "Forma" (columna derecha), solo si la propiedad 'forma' existe
    if (info.forma) {
        const formaColumn = document.createElement('div');
        formaColumn.style.flex = '1';
        formaColumn.style.minWidth = '300px'; 
        formaColumn.innerHTML = `
            <div class="info-box">
                <h3>Forma</h3>
                ${info.forma}
            </div>
        `;
        sectionsContainer.appendChild(formaColumn);
    }

    appContainer.appendChild(sectionsContainer);

    // NUEVO: Contenedor para el botón de Volver
    const volverContainer = document.createElement('div');
    volverContainer.style.marginTop = '20px'; // Espacio superior
    volverContainer.style.display = 'flex';
    volverContainer.style.justifyContent = 'center';
    const botonVolver = document.createElement('button');
    botonVolver.textContent = 'Volver a Tiempos Verbales';
    botonVolver.onclick = mostrarExplicacionesTiemposVerbales;
    botonVolver.classList.add('back-button');
    
    // Lo más importante: anular el ancho conflictivo
    botonVolver.style.maxWidth = '100%';
    botonVolver.style.minWidth = '250px';
    botonVolver.style.width = 'auto';
    
    // Añade el botón al nuevo contenedor
    volverContainer.appendChild(botonVolver);
    // Añade el contenedor al appContainer
    appContainer.appendChild(volverContainer);
    
}

// --- Funciones para el menú "Aprender" ---

/**
 * Muestra la sección de Significado de los Verbos.
 * Ahora lista todos los verbos y permite ver su detalle.
 */
function mostrarSignificadoVerbos() {
    limpiarContenedor();
    setGameBackground(false);
    appContainer.style.textAlign = 'left';
    const titulo = document.createElement('h2');
    titulo.textContent = 'Significado de los Verbos';
    appContainer.appendChild(titulo);

    const instruccion = document.createElement('p');
    instruccion.textContent = 'Haz clic en un verbo para ver su significado:';
    appContainer.appendChild(instruccion);

    const verbosContainer = document.createElement('div');
    verbosContainer.className = 'verbos-list-container'; // Clase para estilos de la lista de verbos
    appContainer.appendChild(verbosContainer);

    // Itera sobre los verbos capitalizados (ordenados alfabéticamente) para crear un botón para cada uno.
    [...verbosCapitalizados].sort((a, b) => a.localeCompare(b, 'es')).forEach(verbo => {
        const botonVerbo = document.createElement('button');
        botonVerbo.textContent = verbo;
        botonVerbo.className = 'boton-verbo-lista'; // Clase para estilizar estos botones
        
        // Obtener el tipo de irregularidad del verbo para asignar la clase de color
        const infoVerbo = explicacionesVerbos[verbo.toLowerCase()];
        if (infoVerbo && infoVerbo.presenteTipoIrregular) {
            // Asegúrate de que el nombre de la clase CSS coincida con el valor en presenteTipoIrregular
            // Por ejemplo, "Bota y Sombrero" se convierte en "verb-botasombrero"
            let irregularityClass = `verb-${infoVerbo.presenteTipoIrregular.toLowerCase().replace(/ /g, '')}`;
            botonVerbo.classList.add(irregularityClass);
        }

        botonVerbo.onclick = () => mostrarDetalleVerbo(verbo);
        verbosContainer.appendChild(botonVerbo);
    });

    // Añadir un espacio antes del botón "Volver"
    const spacer = document.createElement('div');
    spacer.style.marginTop = '20px';
    appContainer.appendChild(spacer);

    // NUEVO: Contenedor para el botón de Volver
    const volverContainer = document.createElement('div');
    volverContainer.style.marginTop = '20px'; // Espacio superior
    volverContainer.style.display = 'flex';
    volverContainer.style.justifyContent = 'center';

    const botonVolver = document.createElement('button');
    botonVolver.textContent = 'Volver al menú de Aprender';
    botonVolver.onclick = mostrarSubMenuAprender;
    botonVolver.classList.add('back-button');

    // Lo más importante: anular el ancho conflictivo
    botonVolver.style.maxWidth = '100%';
    botonVolver.style.minWidth = '250px';
    botonVolver.style.width = 'auto';

    // Añade el botón al nuevo contenedor
    volverContainer.appendChild(botonVolver);
    // Añade el contenedor al appContainer
    appContainer.appendChild(volverContainer);
}

/**
 * Muestra la explicación detallada para un verbo específico.
 * @param {string} verbo - El verbo a mostrar su significado.
 */
function mostrarDetalleVerbo(verbo) {
    limpiarContenedor();
    appContainer.style.textAlign = 'left';
    const detalleVerboWrapper = document.createElement('div');
    detalleVerboWrapper.classList.add('irregularity-types-container');

    const verbExplanationItem = document.createElement('div');
    verbExplanationItem.classList.add('irregularity-type-item');
    verbExplanationItem.style.color = '#ffffff'; // Asegura que el texto general sea claro

    const tituloVerbo = document.createElement('h4');
    tituloVerbo.textContent = `Significado de: ${verbo}`;
    verbExplanationItem.appendChild(tituloVerbo);

    const info = explicacionesVerbos[verbo.toLowerCase()];
    const contenidoVerbo = document.createElement('div');

    if (info) {
        let htmlContent = `
            <p class="description"><strong>Significado:</strong> ${info.significado}</p>
        `;

        // Ejemplos en español
        if (info.ejemplos && info.ejemplos.length > 0) {
            htmlContent += `
                <div class="examples-section">
                    <h5>Ejemplos en español:</h5>
                    <ul class="example-list">
                        ${info.ejemplos.map(ej => {
                            // Cambia el color de la etiqueta <strong> a hotpink
                            const styledEj = ej.replace(/<strong>(.*?)<\/strong>/g, '<strong style="color: #00C8FF;">$1</strong>');
                            return `<li>${styledEj}</li>`;
                        }).join('')}
                    </ul>
                </div>
            `;
        }

        // Sección de Irregularidades (esto no necesita cambios de color en ejemplos, si no los tiene)
        if (info.esIrregular) {
            htmlContent += `<p class="description"><strong>Irregular:</strong> Sí ⚠️</p>`;
            if (info.irregularidades && info.irregularidades.length > 0) {
                htmlContent += `
                    <div class="examples-section">
                        <h5>Detalle de Irregularidades:</h5>
                        <ul class="example-list">
                            ${info.irregularidades.map(irr => {
                                let icon = '';
                                if (irr.tipo.includes('Bota')) {
                                    icon = '🥾';
                                } else if (irr.tipo.includes('yo-go') || irr.tipo.includes('primera persona del presente') || irr.tipo.includes('ZC')) {
                                    icon = '🎩';
                                } else {
                                    icon = '⚙️';
                                }
                                const tipo = irr.tipo ? `<strong>Tipo:</strong> ${irr.tipo}<br>` : '';
                                const tiempos = irr.tiempos && irr.tiempos.length > 0 ? `<strong>Tiempos afectados:</strong> ${irr.tiempos.join(', ')}<br>` : '';
                                const notas = irr.notas ? `<strong>Notas:</strong> ${irr.notas}` : '';

                                return `
                                    <li>
                                        ${icon} ${tipo}
                                        ${tiempos}
                                        ${notas}
                                    </li>
                                `;
                            }).join('')}
                        </ul>
                    </div>
                `;
            }
        } else {
            htmlContent += `<p class="description"><strong>Irregular:</strong> No ✅</p>`;
        }

        // Traducciones directas (no tienen ejemplos, así que no necesitan cambios)
        if (info.traducciones) {
            htmlContent += `
                <div class="examples-section">
                    <h5>Traducciones:</h5>
                    <ul class="example-list">
                        ${info.traducciones.ingles ? `<li>Inglés: ${info.traducciones.ingles}</li>` : ''}
                        ${info.traducciones.aleman ? `<li>Alemán: ${info.traducciones.aleman}</li>` : ''}
                        ${info.traducciones.frances ? `<li>Francés: ${info.traducciones.frances}</li>` : ''}
                    </ul>
                </div>
            `;
        }

        // Ejemplos traducidos (Inglés, Alemán, Francés) - aplicar el mismo cambio
        if (info.ejemplosTraducidos) {
            if (info.ejemplosTraducidos.ingles && info.ejemplosTraducidos.ingles.length > 0) {
                htmlContent += `
                    <div class="examples-section">
                        <h5>Ejemplos en inglés:</h5>
                        <ul class="example-list">
                            ${info.ejemplosTraducidos.ingles.map(ej => {
                                // Cambia el color de la etiqueta <strong> a hotpink
                                const styledEj = ej.replace(/<strong>(.*?)<\/strong>/g, '<strong style="color: #00C8FF;">$1</strong>');
                                return `<li>${styledEj}</li>`;
                            }).join('')}
                        </ul>
                    </div>
                `;
            }
            if (info.ejemplosTraducidos.aleman && info.ejemplosTraducidos.aleman.length > 0) {
                htmlContent += `
                    <div class="examples-section">
                        <h5>Ejemplos en alemán:</h5>
                        <ul class="example-list">
                            ${info.ejemplosTraducidos.aleman.map(ej => {
                                // Cambia el color de la etiqueta <strong> a hotpink
                                const styledEj = ej.replace(/<strong>(.*?)<\/strong>/g, '<strong style="color: #00C8FF;">$1</strong>');
                                return `<li>${styledEj}</li>`;
                            }).join('')}
                        </ul>
                    </div>
                `;
            }
            if (info.ejemplosTraducidos.frances && info.ejemplosTraducidos.frances.length > 0) {
                htmlContent += `
                    <div class="examples-section">
                        <h5>Ejemplos en francés:</h5>
                        <ul class="example-list">
                            ${info.ejemplosTraducidos.frances.map(ej => {
                                // Cambia el color de la etiqueta <strong> a hotpink
                                const styledEj = ej.replace(/<strong>(.*?)<\/strong>/g, '<strong style="color: #00C8FF;">$1</strong>');
                                return `<li>${styledEj}</li>`;
                            }).join('')}
                        </ul>
                    </div>
                `;
            }
        }

        contenidoVerbo.innerHTML = htmlContent;

    } else {
        // Mensaje de no encontrado
        contenidoVerbo.innerHTML = `
            <div class="irregularity-type-item">
                <p class="description" style="text-align: center;">Lo siento, aún no tenemos una explicación detallada para el verbo <strong>${verbo}</strong>.</p>
                <p class="description" style="text-align: center;">Puedes añadir su significado, ejemplos y traducciones en el objeto <code>explicacionesVerbos</code>.</p>
            </div>
        `;
    }
    verbExplanationItem.appendChild(contenidoVerbo);
    detalleVerboWrapper.appendChild(verbExplanationItem);

    const botonVolverLista = document.createElement('button');
    botonVolverLista.textContent = 'Volver a la lista de verbos';
    botonVolverLista.onclick = mostrarSignificadoVerbos;
    botonVolverLista.classList.add('back-button');
    detalleVerboWrapper.appendChild(botonVolverLista);

    appContainer.appendChild(detalleVerboWrapper);
}
/**
 * Muestra el detalle de las irregularidades de un único verbo.
 * Reutiliza el estilo de info-box ya definido.
 * @param {string} verboKey - El verbo (en minúsculas) del que se mostrarán las irregularidades.
 */
function mostrarDetalleIrregularidadVerbo(verboKey) {
    limpiarContenedor();

    // Contenedor principal del info-box para este verbo
    const detalleIrregularidadWrapper = document.createElement('div');
    // Aplicamos los estilos oscuros que quieres para el fondo principal
    detalleIrregularidadWrapper.style.backgroundColor = 'rgba(255,255,255,0.045)'; // Fondo oscuro principal
    detalleIrregularidadWrapper.style.color = '#EDEDF5'; // Color de texto claro principal
    detalleIrregularidadWrapper.style.padding = '25px';
    detalleIrregularidadWrapper.style.borderRadius = '12px';
    detalleIrregularidadWrapper.style.margin = '20px auto';
    detalleIrregularidadWrapper.style.maxWidth = '800px';
    detalleIrregularidadWrapper.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)'; // Sombra un poco más pronunciada
    detalleIrregularidadWrapper.style.textAlign = 'left';
    detalleIrregularidadWrapper.style.lineHeight = '1.6';

    const tituloVerbo = document.createElement('h2');
    tituloVerbo.textContent = `Irregularidades de: ${verboKey.charAt(0).toUpperCase() + verboKey.slice(1)}`;
    tituloVerbo.style.color = '#00C8FF'; // Azul vibrante para el título del verbo
    tituloVerbo.style.textAlign = 'center';
    tituloVerbo.style.marginBottom = '25px';
    detalleIrregularidadWrapper.appendChild(tituloVerbo);

    const dataVerbo = explicacionesVerbos[verboKey.toLowerCase()];

    if (dataVerbo && dataVerbo.esIrregular) {
        if (dataVerbo.irregularidades && dataVerbo.irregularidades.length > 0) {
            dataVerbo.irregularidades.forEach(irregularidad => {
                const irregularityInfoBox = document.createElement('div');
                // Estilos para la caja de cada irregularidad (fondo ligeramente más claro que el principal)
                irregularityInfoBox.style.backgroundColor = '#0E0E1A';
                irregularityInfoBox.style.border = '1px solid rgba(255,255,255,0.12)'; // Borde un poco más oscuro
                irregularityInfoBox.style.marginBottom = '20px';
                irregularityInfoBox.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
                irregularityInfoBox.style.padding = '15px';
                irregularityInfoBox.style.borderRadius = '8px'; // Bordes redondeados

                const iconSpan = document.createElement('span');
                iconSpan.classList.add('info-box-icon');
                iconSpan.textContent = '📚'; // O el icono que quieras para cada detalle de irregularidad
                irregularityInfoBox.appendChild(iconSpan);

                const contentDiv = document.createElement('div');
                irregularityInfoBox.appendChild(contentDiv);

                const verbAndIrregularityTitle = document.createElement('h3');
                verbAndIrregularityTitle.textContent = `${irregularidad.tipo}`;
                verbAndIrregularityTitle.style.color = '#00C8FF'; // Color turquesa para el tipo de irregularidad
                contentDiv.appendChild(verbAndIrregularityTitle);

                // Sección "Tiempos Afectados"
                const tiemposSectionBox = document.createElement('div');
                tiemposSectionBox.style.backgroundColor = 'rgba(255,255,255,0.07)'; // Fondo un poco más claro para esta subsección
                tiemposSectionBox.style.padding = '10px 15px';
                tiemposSectionBox.style.borderRadius = '8px';
                tiemposSectionBox.style.marginBottom = '10px';
                tiemposSectionBox.style.marginTop = '10px';

                const tiemposH4 = document.createElement('h4');
                tiemposH4.textContent = 'Tiempos Afectados:';
                tiemposH4.style.color = '#EDEDF5';
                tiemposH4.style.marginTop = '0';
                tiemposH4.style.marginBottom = '5px';
                tiemposSectionBox.appendChild(tiemposH4);

                const tiemposContentP = document.createElement('p');
                tiemposContentP.classList.add('description');
                tiemposContentP.textContent = Array.isArray(irregularidad.tiempos) ? irregularidad.tiempos.join(', ') : irregularidad.tiempos;
                tiemposContentP.style.color = '#EDEDF5';
                tiemposContentP.style.marginTop = '0';
                tiemposSectionBox.appendChild(tiemposContentP);
                contentDiv.appendChild(tiemposSectionBox);

                // Sección "Notas"
                if (irregularidad.notas) {
                    const notasSectionBox = document.createElement('div');
                    notasSectionBox.style.backgroundColor = 'rgba(255,255,255,0.07)'; // Fondo un poco más claro para esta subsección
                    notasSectionBox.style.padding = '10px 15px';
                    notasSectionBox.style.borderRadius = '8px';
                    notasSectionBox.style.marginBottom = '10px';

                    const notasH4 = document.createElement('h4');
                    notasH4.textContent = 'Notas:';
                    notasH4.style.color = '#EDEDF5';
                    notasH4.style.marginTop = '0';
                    notasH4.style.marginBottom = '5px';
                    notasSectionBox.appendChild(notasH4);

                    const notasContentP = document.createElement('p');
                    notasContentP.classList.add('description');
                    // *** APLICAMOS styleNotesContent A LAS NOTAS AQUÍ ***
                    notasContentP.innerHTML = styleNotesContent(irregularidad.notas); // Usar innerHTML para interpretar los estilos
                    notasContentP.style.color = '#EDEDF5'; // Este color será anulado por los estilos internos de styleNotesContent
                    notasContentP.style.marginTop = '0';
                    notasSectionBox.appendChild(notasContentP);
                    contentDiv.appendChild(notasSectionBox);
                }
                
                // --- Sección "Conjugaciones de Ejemplo" ---
                if (Array.isArray(irregularidad.tiempos) && irregularidad.tiempos.length > 0) {
                    const conjugationsSectionBox = document.createElement('div');
                    conjugationsSectionBox.style.backgroundColor = '#0E0E1A'; // Fondo oscuro para esta caja de conjugaciones
                    conjugationsSectionBox.style.padding = '10px 15px';
                    conjugationsSectionBox.style.borderRadius = '8px';
                    conjugationsSectionBox.style.marginBottom = '10px';

                    const conjugationsH4 = document.createElement('h4');
                    conjugationsH4.textContent = 'Conjugaciones de Ejemplo:';
                    conjugationsH4.style.color = '#EDEDF5';
                    conjugationsH4.style.marginTop = '0';
                    conjugationsH4.style.marginBottom = '5px';
                    conjugationsSectionBox.appendChild(conjugationsH4);

                    const conjugationsList = document.createElement('ul');
                    conjugationsList.style.color = '#EDEDF5';
                    conjugationsList.style.listStyleType = 'none';
                    conjugationsList.style.paddingLeft = '0';
                    conjugationsList.style.marginBottom = '10px';
                    conjugationsList.style.borderBottom = '1px dashed rgba(255,255,255,0.12)';
                    conjugationsList.style.paddingBottom = '10px';
                    conjugationsList.style.marginRight = '10px';
                    conjugationsList.style.marginLeft = '10px';

                    const personasParaEjemplo = ["yo", "tú", "él/ella/usted", "nosotros", "vosotros", "ellos/ellas/usteds"];

                    irregularidad.tiempos.forEach(tiempoString => {
                        let cleanTenseName = tiempoString;
                        if (tiempoString.includes('(')) {
                            cleanTenseName = tiempoString.split('(')[0].trim();
                        }
                        
                        const simpleTenses = [
                            "presente", "pretérito perfecto", "indefinido", "imperfecto", 
                            "pluscuamperfecto", "futuro", "condicional", 
                            "presente de subjuntivo", "imperfecto de subjuntivo", 
                            "pluscuamperfecto de subjuntivo", "imperativo"
                        ];

                        if (simpleTenses.includes(cleanTenseName)) {
                            const conjugatedExample = getConjugationExamples(verboKey, personasParaEjemplo, cleanTenseName);
                            if (conjugatedExample) {
                                const li = document.createElement('li');
                                // *** APLICAMOS styleNotesContent A conjugatedExample AQUÍ ***
                                // Esto cubrirá tanto el azul sin asterisco para el infinitivo, como el rosa para las conjugaciones.
                                li.innerHTML = `<strong>${cleanTenseName.charAt(0).toUpperCase() + cleanTenseName.slice(1)}:</strong> ${styleNotesContent(conjugatedExample)}`;
                                conjugationsList.appendChild(li);
                            }
                        } else if (cleanTenseName === "tiempos compuestos" && dataVerbo.participioIrregularForma) {
                            const li = document.createElement('li');
                            // Para el participio, si solo quieres la forma, no lo pases por styleNotesContent a menos que
                            // el formato en dataVerbo.participioIrregularForma sea *verbo*(conjugación) o algo que quieras colorear.
                            // Si solo es "hecho", "roto", etc., lo dejamos tal cual o con un strong rosa.
                            // Por ahora, lo dejamos tal cual, pero si quieres rosa: `<strong><span style="color: hotpink;">${dataVerbo.participioIrregularForma}</span></strong>`
                            li.innerHTML = `<strong>Participio Irregular:</strong> ${dataVerbo.participioIrregularForma}`;
                            conjugationsList.appendChild(li);
                        }
                    });

                    if (conjugationsList.children.length > 0) { 
                        conjugationsSectionBox.appendChild(conjugationsList);
                        contentDiv.appendChild(conjugationsSectionBox);
                    }
                }
                detalleIrregularidadWrapper.appendChild(irregularityInfoBox);
            });
        } else {
            // Mensaje si es irregular pero no tiene detalles específicos
            const noDetailsInfoBox = document.createElement('div');
            noDetailsInfoBox.style.backgroundColor = '#0E0E1A';
            noDetailsInfoBox.style.border = '1px solid rgba(255,255,255,0.12)';
            noDetailsInfoBox.style.padding = '15px';
            noDetailsInfoBox.style.textAlign = 'center';
            noDetailsInfoBox.style.borderRadius = '8px';
            noDetailsInfoBox.style.color = '#EDEDF5'; // Texto claro
            
            const iconSpan = document.createElement('span');
            iconSpan.textContent = '⚠️';
            iconSpan.style.fontSize = '2em';
            noDetailsInfoBox.appendChild(iconSpan);

            const noIrregularidadesP = document.createElement('p');
            noIrregularidadesP.textContent = `El verbo '${verboKey.charAt(0).toUpperCase() + verboKey.slice(1)}' es irregular, pero no se especificaron detalles de sus irregularidades en los datos.`;
            noDetailsInfoBox.appendChild(noIrregularidadesP);
            detalleIrregularidadWrapper.appendChild(noDetailsInfoBox);
        }
    } else {
        // Mensaje si el verbo no es irregular o no se encuentra
        const noVerboFound = document.createElement('div');
        noVerboFound.style.backgroundColor = '#0E0E1A';
        noVerboFound.style.border = '1px solid rgba(255,255,255,0.12)';
        noVerboFound.style.padding = '15px';
        noVerboFound.style.textAlign = 'center';
        noVerboFound.style.borderRadius = '8px';
        noVerboFound.style.color = '#EDEDF5'; // Texto claro

        const iconSpan = document.createElement('span');
        iconSpan.textContent = '❓';
        iconSpan.style.fontSize = '2em';
        noVerboFound.appendChild(iconSpan);

        const notFoundP = document.createElement('p');
        notFoundP.textContent = `No se encontró información de irregularidad para el verbo '${verboKey.charAt(0).toUpperCase() + verboKey.slice(1)}'.`;
        noVerboFound.appendChild(notFoundP);
        detalleIrregularidadWrapper.appendChild(noVerboFound);
    }

    const botonVolverLista = document.createElement('button');
    botonVolverLista.textContent = 'Volver a la lista de Irregulares';
    botonVolverLista.onclick = mostrarIrregularidadesPorVerbo;
    botonVolverLista.classList.add('back-button');
    botonVolverLista.style.marginTop = '30px';
    botonVolverLista.style.display = 'block';
    botonVolverLista.style.marginRight = 'auto';
    botonVolverLista.style.marginLeft = 'auto';
    detalleIrregularidadWrapper.appendChild(botonVolverLista);

    appContainer.appendChild(detalleIrregularidadWrapper);
}

/**
 * Muestra la sección de Verbos Regulares e Irregulares con sus subopciones.
 */
function mostrarVerbosRegularesIrregulares() {
    console.log('mostrarVerbosRegularesIrregulares() llamada.');
    limpiarContenedor();
    setGameBackground(false);
    const titulo = document.createElement('h2');
    titulo.textContent = 'Verbos Irregulares';
    appContainer.appendChild(titulo);

    const instruccion = document.createElement('p');
    instruccion.textContent = 'Selecciona una opción para explorar las irregularidades:';
    appContainer.appendChild(instruccion);

    //Antiguo botón sustituido
    //const explicacionesIrregularidadesBtn = document.createElement('button');
    //explicacionesIrregularidadesBtn.textContent = 'Explicaciones de Irregularidades por Tiempo';
    //explicacionesIrregularidadesBtn.classList.add('menu-button');
    //explicacionesIrregularidadesBtn.onclick = mostrarSelectorTiempoIrregularidades; // <--- ¡AQUÍ ESTÁ EL CAMBIO!
    //appContainer.appendChild(explicacionesIrregularidadesBtn);

     // ¡NUEVO BOTÓN AQUÍ! PARA LAS IRREGULARIDADES POR TIEMPO
     const botonIrregularidadesTiempo = document.createElement('button');
     botonIrregularidadesTiempo.textContent = 'Irregularidades por Tiempo';
     botonIrregularidadesTiempo.onclick = populateIrregularVerbsSection; // Llama a la función que creamos, llamada anterior **mostrarMenuIrregularidadesPorTiempo**
     appContainer.appendChild(botonIrregularidadesTiempo);
     // FIN DEL NUEVO BOTÓN
 

    //Nuevo botón  irregularidades por verbo
    const irregularidadesPorVerboBtn = document.createElement('button');
    irregularidadesPorVerboBtn.textContent = 'Irregularidades por Verbo';
    irregularidadesPorVerboBtn.classList.add('menu-button');
    irregularidadesPorVerboBtn.onclick = mostrarIrregularidadesPorVerbo; // Nueva función
    appContainer.appendChild(irregularidadesPorVerboBtn);

    // NUEVO: Contenedor para el botón de Volver
    const volverContainer = document.createElement('div');
    volverContainer.style.marginTop = '20px'; // Espacio superior
    volverContainer.style.display = 'flex';
    volverContainer.style.justifyContent = 'center';

    const botonVolver = document.createElement('button');
    botonVolver.textContent = 'Volver al menú de Aprender';
    botonVolver.onclick = mostrarSubMenuAprender;
    botonVolver.classList.add('back-button');

    // Lo más importante: anular el ancho conflictivo
    botonVolver.style.maxWidth = '100%';
    botonVolver.style.minWidth = '250px';
    botonVolver.style.width = 'auto';

    // Añade el botón al nuevo contenedor
    volverContainer.appendChild(botonVolver);
    // Añade el contenedor al appContainer
    appContainer.appendChild(volverContainer);
    
}
//Nueva función para irregularidades por verbo

function mostrarIrregularidadesPorVerbo() {
    console.log('mostrarIrregularidadesPorVerbo() llamada.');
    limpiarContenedor();

    const titulo = document.createElement('h2');
    titulo.textContent = 'Irregularidades por Verbo';
    appContainer.appendChild(titulo);

    const instruccion = document.createElement('p');
    instruccion.textContent = 'Haz clic en un verbo irregular para ver el detalle de sus irregularidades:';
    appContainer.appendChild(instruccion);

    const verbosIrregularesContainer = document.createElement('div');
    // Esta clase 'verbos-list-container' ya la usaste antes, podemos estilizarla en tu CSS
    verbosIrregularesContainer.className = 'verbos-list-container';
    appContainer.appendChild(verbosIrregularesContainer);

    // Iterar sobre todos los verbos (ordenados alfabéticamente) y crear un botón solo para los irregulares
    for (const verboKey of Object.keys(explicacionesVerbos).sort((a, b) => a.localeCompare(b, 'es'))) {
        const dataVerbo = explicacionesVerbos[verboKey.toLowerCase()];

        // Solo crear botón si el verbo es irregular y tiene detalles de irregularidades
        if (dataVerbo.esIrregular) { // Aquí mostramos todos los irregulares, incluso si no tienen detalle especificado
                                      // La nueva función de detalle manejará el mensaje si no hay detalle
            const botonVerbo = document.createElement('button');
            const verboCapitalizado = verboKey.charAt(0).toUpperCase() + verboKey.slice(1);
            botonVerbo.textContent = verboCapitalizado;
            botonVerbo.className = 'boton-verbo-lista'; // Puedes usar la misma clase para los botones de lista

            // Si quieres que el botón tenga el color de la irregularidad principal (e.g., Bota, Sombrero)
            if (dataVerbo.presenteTipoIrregular) {
                let irregularityClass = `verb-${dataVerbo.presenteTipoIrregular.toLowerCase().replace(/ /g, '')}`;
                botonVerbo.classList.add(irregularityClass);
            } else if (dataVerbo.indefinidoTipoIrregular && dataVerbo.indefinidoTipoIrregular.includes('J-Verbos')) {
                botonVerbo.classList.add('verb-yogo'); // Asignar una clase para J-Verbos si no tienes una específica
            }


            // Al hacer clic, llamamos a la nueva función que mostrará el detalle
            // Pasar el 'verboKey' (en minúsculas) para buscar la información
            botonVerbo.onclick = () => mostrarDetalleIrregularidadVerbo(verboKey);
            verbosIrregularesContainer.appendChild(botonVerbo);
        }
    }

    // Botón para volver al menú principal de Irregularidades (si existe, o al menú de Aprender)
    // NUEVO: Contenedor para el botón de Volver
    const volverContainer = document.createElement('div');
    volverContainer.style.marginTop = '20px'; // Espacio superior
    volverContainer.style.display = 'flex';
    volverContainer.style.justifyContent = 'center';

    const botonVolver = document.createElement('button');
    botonVolver.textContent = 'Volver a Irregularidades';
    botonVolver.onclick = mostrarVerbosRegularesIrregulares;
    botonVolver.classList.add('back-button');

    // Lo más importante: anular el ancho conflictivo
    botonVolver.style.maxWidth = '100%';
    botonVolver.style.minWidth = '250px';
    botonVolver.style.width = 'auto';

    // Añade el botón al nuevo contenedor
    volverContainer.appendChild(botonVolver);
    // Añade el contenedor al appContainer
    appContainer.appendChild(volverContainer);
    
}

/**
 * Muestra un selector para elegir el tiempo verbal cuyas irregularidades se desean explorar.
 */
function mostrarSelectorTiempoIrregularidades() {
    console.log('mostrarSelectorTiempoIrregularidades() llamada.');
    limpiarContenedor();
    const titulo = document.createElement('h2');
    titulo.textContent = 'Selecciona un Tiempo Verbal';
    appContainer.appendChild(titulo);

    const instruccion = document.createElement('p');
    instruccion.textContent = 'Elige un tiempo verbal para ver sus irregularidades o para jugar:';
    appContainer.appendChild(instruccion);

    // Crear botones para cada tiempo verbal disponible
    todosLosTiemposVerbales.forEach(tiempo => {
        const botonTiempo = document.createElement('button');
        botonTiempo.textContent = tiempo.charAt(0).toUpperCase() + tiempo.slice(1);
        botonTiempo.onclick = () => mostrarExplicacionesIrregularidadesPorTiempo(tiempo);
        appContainer.appendChild(botonTiempo);
    });

    const botonVolver = document.createElement('button');
    botonVolver.textContent = 'Volver a Verbos Regulares e Irregulares';
    botonVolver.onclick = mostrarVerbosRegularesIrregulares;
    botonVolver.classList.add('back-button');
    appContainer.appendChild(botonVolver);
}

/**
 * Muestra las explicaciones detalladas de las irregularidades para un tiempo verbal específico.
 * @param {string} tiempoKey - La clave del tiempo verbal (e.g., 'presente', 'indefinido').
 */

function mostrarExplicacionesIrregularidadesPorTiempo(tiempoKey) {
    limpiarContenedor();
    setGameBackground(false);
    const titulo = document.createElement('h2');
    titulo.textContent = `Irregularidades del ${tiempoKey.charAt(0).toUpperCase() + tiempoKey.slice(1)}`;
    appContainer.appendChild(titulo);

    const info = explicacionesIrregularidadesTiempos[tiempoKey];

    if (info) {
        // --- 1. IMÁGENES DE INFOGRAFÍA ---
        if (tiempoKey === 'presente') {
            const imgReference = document.createElement('img');
            imgReference.src = 'verbos irregulares en presente.jpeg';
            imgReference.alt = 'Infografía de Verbos Irregulares en Presente de Indicativo';
            imgReference.style.maxWidth = '100%';
            imgReference.style.height = 'auto';
            imgReference.style.marginBottom = '20px';
            imgReference.style.borderRadius = '10px';
            appContainer.appendChild(imgReference);
        } else if (tiempoKey === 'imperfecto de subjuntivo') {
            const imgReference = document.createElement('img');
            imgReference.src = 'Preterito-imperfecto-de-subjuntivo.jpg';
            imgReference.alt = 'Infografía de Pretérito imperfecto de subjuntivo parte 1';
            imgReference.style.maxWidth = '100%';
            imgReference.style.height = 'auto';
            imgReference.style.marginBottom = '20px';
            imgReference.style.borderRadius = '10px';
            appContainer.appendChild(imgReference);

            const imgReference2 = document.createElement('img');
            imgReference2.src = 'Preterito-imperfecto-de-subjuntivo-II.jpg';
            imgReference2.alt = 'Infografía de Pretérito imperfecto de subjuntivo parte 2';
            imgReference2.style.maxWidth = '100%';
            imgReference2.style.height = 'auto';
            imgReference2.style.marginBottom = '20px';
            imgReference2.style.borderRadius = '10px';
            appContainer.appendChild(imgReference2);
        }

        // --- CONTENEDOR PRINCIPAL PARA LA EXPLICACIÓN CON ESTILOS ---
        const explicacionWrapper = document.createElement('div');
        explicacionWrapper.style.backgroundColor = '#EDEDF5';
        explicacionWrapper.style.color = '#EDEDF5';
        explicacionWrapper.style.padding = '25px';
        explicacionWrapper.style.borderRadius = '12px';
        explicacionWrapper.style.margin = '20px auto';
        explicacionWrapper.style.maxWidth = '800px';
        explicacionWrapper.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        explicacionWrapper.style.textAlign = 'left';
        explicacionWrapper.style.lineHeight = '1.6';
        appContainer.appendChild(explicacionWrapper);

        // --- Título y descripción general del tiempo ---
        if (info.titulo) {
            const mainTitle = document.createElement('h3');
            mainTitle.textContent = info.titulo;
            mainTitle.style.color = '#00C8FF';
            mainTitle.style.textAlign = 'center';
            explicacionWrapper.appendChild(mainTitle);
        }
        if (info.descripcion) {
            const descriptionP = document.createElement('p');
            descriptionP.textContent = info.descripcion;
            descriptionP.style.marginBottom = '30px';
            explicacionWrapper.appendChild(descriptionP);
        }

        // --- Generar el contenido de irregularidades dinámicamente ---
        if (info.tiposIrregularidad && info.tiposIrregularidad.length > 0) {
            info.tiposIrregularidad.forEach(tipoIrr => {
                const tipoIrrBox = document.createElement('div');
                tipoIrrBox.classList.add('info-box');
                tipoIrrBox.style.backgroundColor = 'rgba(255,255,255,0.045)';
                tipoIrrBox.style.border = '1px solid rgba(255,255,255,0.07)';
                tipoIrrBox.style.marginBottom = '20px';
                tipoIrrBox.style.padding = '15px';
                tipoIrrBox.style.borderRadius = '8px';
                tipoIrrBox.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';

                const iconSpan = document.createElement('span');
                iconSpan.classList.add('info-box-icon');
                iconSpan.textContent = tipoIrr.icono || '📚';
                tipoIrrBox.appendChild(iconSpan);

                const contentDiv = document.createElement('div');
                tipoIrrBox.appendChild(contentDiv);

                const tipoIrrTitle = document.createElement('h4');
                tipoIrrTitle.textContent = tipoIrr.nombre;
                tipoIrrTitle.style.color = '#00C8FF';
                contentDiv.appendChild(tipoIrrTitle);

                const tipoIrrDesc = document.createElement('p');
                // Reemplazar saltos de línea '\n' por <br> para HTML
                tipoIrrDesc.innerHTML = tipoIrr.descripcion.replace(/\\n/g, '<br>');
                tipoIrrDesc.style.marginBottom = '15px';
                contentDiv.appendChild(tipoIrrDesc);

                // --- EJEMPLOS DE VERBOS CONJUGADOS (MODIFICACIÓN AQUÍ) ---
                if (tipoIrr.verbosEjemplo && tipoIrr.verbosEjemplo.length > 0) {
                    const ejemplosContainer = document.createElement('div');
                    ejemplosContainer.style.backgroundColor = '#0E0E1A';
                    ejemplosContainer.style.padding = '15px';
                    ejemplosContainer.style.borderRadius = '8px';
                    ejemplosContainer.style.marginTop = '15px';

                    const ejemplosTitle = document.createElement('h5');
                    ejemplosTitle.textContent = 'Ejemplos de Conjugación:';
                    ejemplosTitle.style.color = '#EDEDF5';
                    ejemplosTitle.style.marginTop = '0';
                    ejemplosTitle.style.marginBottom = '10px';
                    ejemplosContainer.appendChild(ejemplosTitle);

                    tipoIrr.verbosEjemplo.forEach(ejemploVerbo => {
                        const verboInf = ejemploVerbo.verbo.toLowerCase();
                        const ulEjemplos = document.createElement('ul');
                        ulEjemplos.style.listStyleType = 'none';
                        ulEjemplos.style.paddingLeft = '0';
                        ulEjemplos.style.marginBottom = '10px';
                        ulEjemplos.style.borderBottom = '1px dashed rgba(255,255,255,0.12)';
                        ulEjemplos.style.paddingBottom = '10px';
                        ulEjemplos.style.marginRight = '10px';
                        ulEjemplos.style.marginLeft = '10px';
                        ulEjemplos.style.color = '#EDEDF5';

                        const liInfinitivo = document.createElement('li');
                        liInfinitivo.innerHTML = `<strong>${ejemploVerbo.verbo.charAt(0).toUpperCase() + ejemploVerbo.verbo.slice(1)}</strong> (infinitivo)`;
                        liInfinitivo.style.fontWeight = 'bold';
                        liInfinitivo.style.marginBottom = '5px';
                        ulEjemplos.appendChild(liInfinitivo);

                        // Lógica para Participio y Gerundio
                        if (tiempoKey === 'pretérito perfecto' || tiempoKey === 'pluscuamperfecto' || tiempoKey === 'participio') {
                            const participioForm = conjugaciones[verboInf]?.participio;
                            if (participioForm) {
                                const liForm = document.createElement('li');
                                liForm.innerHTML = `<span style="font-style: italic;">Participio:</span> <strong>${participioForm}</strong>`;
                                ulEjemplos.appendChild(liForm);
                                // Para tiempos compuestos, también puedes mostrar un ejemplo completo
                                if (tiempoKey === 'pretérito perfecto') {
                                    const liComp = document.createElement('li');
                                    const haberPresente = conjugaciones['haber']?.presente?.yo || 'he'; // Asumimos 'he' por defecto
                                    liComp.innerHTML = `<span style="font-style: italic;">Ejemplo:</span> ${haberPresente} <strong>${participioForm}</strong>`;
                                    ulEjemplos.appendChild(liComp);
                                } else if (tiempoKey === 'pluscuamperfecto') {
                                     const liComp = document.createElement('li');
                                    const haberImperfecto = conjugaciones['haber']?.imperfecto?.yo || 'había'; // Asumimos 'había'
                                    liComp.innerHTML = `<span style="font-style: italic;">Ejemplo:</span> ${haberImperfecto} <strong>${participioForm}</strong>`;
                                    ulEjemplos.appendChild(liComp);
                                } else if (tiempoKey === 'pluscuamperfecto de subjuntivo') {
                                     const liComp = document.createElement('li');
                                    const haberImpSubj = conjugaciones['haber']?.['imperfecto de subjuntivo']?.yo || 'hubiera/hubiese'; // Asumimos 'hubiera/hubiese'
                                    liComp.innerHTML = `<span style="font-style: italic;">Ejemplo:</span> ${haberImpSubj} <strong>${participioForm}</strong>`;
                                    ulEjemplos.appendChild(liComp);
                                }
                            } else {
                                const pNoForm = document.createElement('p');
                                pNoForm.textContent = `No se encontró el participio para '${ejemploVerbo.verbo}'.`;
                                pNoForm.style.color = '#FACC15';
                                ulEjemplos.appendChild(pNoForm);
                            }
                        } else if (tiempoKey === 'gerundio') {
                            const gerundioForm = conjugaciones[verboInf]?.gerundio;
                            if (gerundioForm) {
                                const liForm = document.createElement('li');
                                liForm.innerHTML = `<span style="font-style: italic;">Gerundio:</span> <strong>${gerundioForm}</strong>`;
                                ulEjemplos.appendChild(liForm);
                            } else {
                                const pNoForm = document.createElement('p');
                                pNoForm.textContent = `No se encontró el gerundio para '${ejemploVerbo.verbo}'.`;
                                pNoForm.style.color = '#FACC15';
                                ulEjemplos.appendChild(pNoForm);
                            }
                        }
                        // Lógica para tiempos verbales con personas (ya existente)
                        else {
                            const conjugacionesVerbo = conjugaciones[verboInf]?.[tiempoKey];
                            if (conjugacionesVerbo) {
                                const personasAMostrar = ejemploVerbo.personas && ejemploVerbo.personas.length > 0
                                    ? ejemploVerbo.personas
                                    : ['yo', 'tú', 'él/ella', 'nosotros', 'vosotros', 'ellos/ellas'];

                                personasAMostrar.forEach(persona => {
                                    const formaConjugada = conjugacionesVerbo[persona];
                                    if (formaConjugada) {
                                        const liConjugacion = document.createElement('li');
                                        liConjugacion.innerHTML = `<span style="font-style: italic;">${persona.charAt(0).toUpperCase() + persona.slice(1)}:</span> <strong>${formaConjugada}</strong>`;
                                        ulEjemplos.appendChild(liConjugacion);
                                    }
                                });
                            } else {
                                const pNoConjugacion = document.createElement('p');
                                pNoConjugacion.textContent = `No se encontró conjugación para '${ejemploVerbo.verbo}' en este tiempo.`;
                                pNoConjugacion.style.color = '#FACC15';
                                ulEjemplos.appendChild(pNoConjugacion);
                            }
                        }
                        ejemplosContainer.appendChild(ulEjemplos);
                    });
                    contentDiv.appendChild(ejemplosContainer);
                }

                explicacionWrapper.appendChild(tipoIrrBox);
            });
        } else {
            const noDetailsP = document.createElement('p');
            noDetailsP.textContent = 'No se especificaron detalles de irregularidades para este tiempo verbal en los datos.';
            noDetailsP.style.textAlign = 'center';
            explicacionWrapper.appendChild(noDetailsP);
        }

        // --- Botón para iniciar el juego de arrastrar ---
        if (info.gameCategories && info.gameCategories.length > 0) {
            const botonJugarEsteTiempo = document.createElement('button');
            botonJugarEsteTiempo.textContent = `Jugar al Arrastre (${tiempoKey.charAt(0).toUpperCase() + tiempoKey.slice(1)})`;
            botonJugarEsteTiempo.onclick = () => mostrarJuegoArrastrarVerbosPorTiempo(tiempoKey);
            botonJugarEsteTiempo.style.marginTop = '20px';
            botonJugarEsteTiempo.style.display = 'block';
            botonJugarEsteTiempo.style.marginRight = 'auto';
            botonJugarEsteTiempo.style.marginLeft = 'auto';
            explicacionWrapper.appendChild(botonJugarEsteTiempo);
        } else {
             const mensajeNoJuego = document.createElement('p');
             mensajeNoJuego.textContent = 'No hay un juego de arrastrar disponible para este tiempo verbal.';
             mensajeNoJuego.style.marginTop = '10px';
             mensajeNoJuego.style.textAlign = 'center';
             explicacionWrapper.appendChild(mensajeNoJuego);
        }

    } else {
        const noInfoP = document.createElement('p');
        noInfoP.textContent = "No se encontraron explicaciones detalladas de irregularidades para este tiempo verbal.";
        noInfoP.style.textAlign = 'center';
        appContainer.appendChild(noInfoP);
    }

    // --- Botón para Volver ---
    const botonVolver = document.createElement('button');
    botonVolver.textContent = 'Volver a Seleccionar Tiempo';
    botonVolver.onclick = mostrarSelectorTiempoIrregularidades;
    botonVolver.classList.add('back-button');
    botonVolver.style.marginTop = '20px';
    appContainer.appendChild(botonVolver);
}

/**
 * Muestra el detalle de un tipo de irregularidad específico para un tiempo verbal dado.
 * @param {Object} irregularidad - El objeto de irregularidad (ej. un elemento de tiposIrregularidad).
 * @param {string} tiempoKey - La clave del tiempo verbal (ej. "presente", "indefinido").
 */
// ---
function mostrarMenuIrregularidadesPorTiempo() {
    limpiarContenedor();
    const titulo = document.createElement('h2');
    titulo.textContent = 'Selecciona un Tiempo Verbal para ver Irregularidades';
    appContainer.appendChild(titulo);

    Object.keys(explicacionesIrregularidadesTiempos).forEach(tiempoKey => {
        const botonTiempo = document.createElement('button');
        botonTiempo.textContent = `Irregularidades del ${tiempoKey.charAt(0).toUpperCase() + tiempoKey.slice(1)}`;
        botonTiempo.classList.add('menu-button');
        
        // Al hacer clic, se muestra el submenú con los tipos de irregularidad de ese tiempo
        botonTiempo.onclick = () => mostrarTiposIrregularidadParaTiempo(tiempoKey);
        
        appContainer.appendChild(botonTiempo);
    });

    const botonVolverMenuPrincipal = document.createElement('button');
    botonVolverMenuPrincipal.textContent = 'Volver al menú de Irregulares';
    botonVolverMenuPrincipal.onclick = mostrarVerbosRegularesIrregulares; // Asegúrate de que 'mostrarMenu' es tu función principal
    botonVolverMenuPrincipal.classList.add('back-button');
    appContainer.appendChild(botonVolverMenuPrincipal);
}

/**
 * Muestra la lista de tipos de irregularidad para un tiempo verbal específico.
 * @param {string} tiempoKey - La clave del tiempo verbal (ej. "presente", "indefinido").
 */
function mostrarTiposIrregularidadParaTiempo(tiempoKey) {
    limpiarContenedor();

    const dataTiempo = explicacionesIrregularidadesTiempos[tiempoKey];
    if (!dataTiempo) {
        appContainer.innerHTML = `<p>No se encontró información para el tiempo: ${tiempoKey}.</p>`;
        return;
    }

    const titulo = document.createElement('h2');
    titulo.textContent = dataTiempo.titulo;
    appContainer.appendChild(titulo);

    if (dataTiempo.descripcion) {
        const descripcionGeneral = document.createElement('p');
        descripcionGeneral.innerHTML = dataTiempo.descripcion.replace(/\n/g, '<br>');
        descripcionGeneral.style.fontStyle = 'italic';
        descripcionGeneral.style.marginBottom = '20px';
        appContainer.appendChild(descripcionGeneral);
    }

    dataTiempo.tiposIrregularidad.forEach(tipoIrregularidad => {
        const botonTipo = document.createElement('button');
        botonTipo.textContent = `${tipoIrregularidad.icono || ''} ${tipoIrregularidad.nombre}`;
        botonTipo.classList.add('menu-button');
        
        // ¡AQUÍ ES DONDE SE LLAMA A mostrarDetalleDeIrregularidad CON AMBOS PARÁMETROS!
        botonTipo.onclick = () => mostrarDetalleDeIrregularidad(tipoIrregularidad, tiempoKey);
        
        appContainer.appendChild(botonTipo);
    });

    const botonVolver = document.createElement('button');
    botonVolver.textContent = `Volver a Selección de Tiempos`;
    botonVolver.onclick = mostrarMenuIrregularidadesPorTiempo;
    botonVolver.classList.add('back-button');
    appContainer.appendChild(botonVolver);
}

/**
 * Muestra el detalle de un tipo de irregularidad específico para un tiempo verbal dado.
 * @param {Object} irregularidad - El objeto de irregularidad (ej. un elemento de tiposIrregularidad).
 * @param {string} tiempoKey - La clave del tiempo verbal (ej. "presente", "indefinido").
 */
function mostrarDetalleDeIrregularidad(irregularidad, tiempoKey) {
    limpiarContenedor(); // Asegúrate de que 'limpiarContenedor' esté definida

    const detailContainer = document.createElement('div');
    detailContainer.classList.add('explanation-main-container');
    detailContainer.style.backgroundColor = '#EDEDF5';
    detailContainer.style.color = '#EDEDF5';
    detailContainer.style.padding = '25px';
    detailContainer.style.borderRadius = '12px';
    detailContainer.style.margin = '20px auto';
    detailContainer.style.maxWidth = '800px';
    detailContainer.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
    detailContainer.style.textAlign = 'left';
    detailContainer.style.lineHeight = '1.6';

    const titleElement = document.createElement('h2');
    titleElement.classList.add('verb-title');
    titleElement.textContent = irregularidad.nombre;
    titleElement.style.color = '#00C8FF';
    titleElement.style.textAlign = 'center';
    titleElement.style.marginBottom = '25px';
    detailContainer.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = irregularidad.descripcion.replace(/\n/g, '<br>');
    descriptionElement.style.marginBottom = '20px';
    detailContainer.appendChild(descriptionElement);

    if (irregularidad.verbosEjemplo && irregularidad.verbosEjemplo.length > 0) {
        const conjugationsSectionBox = document.createElement('div');
        conjugationsSectionBox.style.backgroundColor = 'rgba(255,255,255,0.045)';
        conjugationsSectionBox.style.padding = '10px 15px';
        conjugationsSectionBox.style.borderRadius = '8px';
        conjugationsSectionBox.style.marginBottom = '10px';

        const conjugationsH4 = document.createElement('h4');
        conjugationsH4.textContent = `Ejemplo de conjugaciones en ${tiempoKey.charAt(0).toUpperCase() + tiempoKey.slice(1)}:`;
        conjugationsH4.style.color = '#EDEDF5';
        conjugationsH4.style.marginTop = '0';
        conjugationsH4.style.marginBottom = '5px';
        conjugationsSectionBox.appendChild(conjugationsH4);

        const ulElement = document.createElement('ul');
        ulElement.style.listStyleType = 'none';
        ulElement.style.paddingLeft = '0';
        ulElement.style.color = '#FF2DA6';

        irregularidad.verbosEjemplo.forEach(example => {
            const listItem = document.createElement('li');
            let standardizedTenseKey = tiempoKey.replace(/_/g, ' ');

            const defaultPersons = ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"];
            const personsToConjugate = (example.personas && example.personas.length > 0) ? example.personas : defaultPersons;

            const conjugatedString = getConjugationExamples(example.verbo, personsToConjugate, standardizedTenseKey);

            const processedConjugatedString = processConjugatedStringForDisplay(conjugatedString);

            if (processedConjugatedString.trim() !== '') {
                listItem.innerHTML = `<strong style="color: #39FF14;">${capitalizeFirstLetter(standardizedTenseKey)}:</strong> ${processedConjugatedString}`;
                ulElement.appendChild(listItem);
            }
        });
        conjugationsSectionBox.appendChild(ulElement);
        detailContainer.appendChild(conjugationsSectionBox);
    }

    const botonVolverTipos = document.createElement('button');
    botonVolverTipos.textContent = `Volver a Irregularidades del ${tiempoKey.charAt(0).toUpperCase() + tiempoKey.slice(1)}`;
    botonVolverTipos.onclick = () => mostrarTipoIrregularidadParaTiempo(tiempoKey);
    botonVolverTipos.classList.add('back-button');
    botonVolverTipos.style.marginTop = '30px';
    botonVolverTipos.style.display = 'block';
    botonVolverTipos.style.marginRight = 'auto';
    botonVolverTipos.style.marginLeft = 'auto';
    detailContainer.appendChild(botonVolverTipos);

    appContainer.appendChild(detailContainer);
}

function displayIrregularityGroupsOrTypes(currentSelectedTheoryTime) {
    limpiarContenedor(); // Asume que esta función existe
    const container = irregularVerbsListContainer; // Asume que esta variable global existe
    if (!container) {
        console.error('Error: El contenedor irregularVerbsListContainer no está disponible.');
        return;
    }
    container.innerHTML = ''; // Limpiar cualquier contenido previo

    currentSelectedBroadCategory = null; // Resetear al entrar en este nivel

    const explicacionTiempo = explicacionesIrregularidadesTiempos[currentSelectedTheoryTime];

    // Si hay grupos de categorías, los mostramos primero
    if (explicacionTiempo?.gruposCategorias?.length > 0) {
        const title = document.createElement('h2');
        title.style.fontSize = '1.875rem';
        title.style.fontWeight = 'bold';
        title.style.color = '#EDEDF5';
        title.style.marginBottom = '2rem';
        title.style.textAlign = 'center';
        title.textContent = `Categorías de Irregularidades del ${capitalizeFirstLetter(currentSelectedTheoryTime)}`;
        container.appendChild(title);

        const groupsButtonsContainer = document.createElement('div');
        groupsButtonsContainer.style.display = 'grid';
        groupsButtonsContainer.style.gap = '1rem';
        groupsButtonsContainer.style.maxWidth = '400px';
        groupsButtonsContainer.style.margin = '0 auto';

        const mediaQuerySm = window.matchMedia('(min-width: 640px)');
        const adjustGridColumnsForGroups = () => {
            groupsButtonsContainer.style.gridTemplateColumns = mediaQuerySm.matches ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)';
        };
        adjustGridColumnsForGroups();
        mediaQuerySm.addEventListener('change', adjustGridColumnsForGroups);
        container.appendChild(groupsButtonsContainer);

        explicacionTiempo.gruposCategorias.forEach(group => {
            const button = document.createElement('button');
            // uniformButtonStyles se asume que está definido globalmente
            Object.assign(button.style, window.uniformButtonStyles || {}); // Usar window.uniformButtonStyles para asegurar acceso
            button.style.backgroundColor = '#39FF14'; // Color para botones de grupo
            button.onmouseover = () => { button.style.backgroundColor = '#39FF14'; button.style.transform = 'scale(1.05)'; };
            button.onmouseout = () => { button.style.backgroundColor = '#39FF14'; button.style.transform = 'scale(1)'; };

            const iconDiv = document.createElement('div');
            iconDiv.textContent = group.icono || '';
            iconDiv.style.fontSize = '2.5rem';
            iconDiv.style.marginBottom = '0.5rem';

            const textSpan = document.createElement('span');
            textSpan.textContent = group.nombre;

            button.appendChild(iconDiv);
            button.appendChild(textSpan);

            button.style.display = 'flex';
            button.style.flexDirection = 'column';
            button.style.alignItems = 'center';
            button.style.justifyContent = 'center';

            button.addEventListener('click', () => {
                currentSelectedBroadCategory = group.nombre; // Guardar la categoría seleccionada
                displayGroupedIrregularityTypes(group.nombre, currentSelectedTheoryTime); // Pasar currentSelectedTheoryTime
            });
            groupsButtonsContainer.appendChild(button);
        });

    } else {
        // Si no hay grupos, mostramos las irregularidades directas
        const title = document.createElement('h2');
        title.style.fontSize = '1.875rem';
        title.style.fontWeight = 'bold';
        title.style.color = '#EDEDF5';
        title.style.marginBottom = '2rem';
        title.style.textAlign = 'center';
        title.textContent = `Irregularidades del ${capitalizeFirstLetter(currentSelectedTheoryTime)}`;
        container.appendChild(title);

        const irregularidadesDelTiempo = explicacionTiempo?.tiposIrregularidad?.filter(
            tipo => tipo.nombre !== 'Verbos Regulares'
        ) || [];

        if (irregularidadesDelTiempo.length === 0) {
            const noResults = document.createElement('p');
            noResults.style.color = '#9A9AB0';
            noResults.style.textAlign = 'center';
            noResults.textContent = `No hay irregularidades específicas definidas para el ${capitalizeFirstLetter(currentSelectedTheoryTime)}.`;
            container.appendChild(noResults);
        } else {
            const buttonsContainer = document.createElement('div');
            buttonsContainer.style.display = 'grid';
            buttonsContainer.style.gap = '1rem';
            buttonsContainer.style.maxWidth = '400px';
            buttonsContainer.style.margin = '0 auto';

            const mediaQuerySm = window.matchMedia('(min-width: 640px)');
            const adjustGridColumns = () => {
                buttonsContainer.style.gridTemplateColumns = mediaQuerySm.matches ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)';
            };
            adjustGridColumns();
            mediaQuerySm.addEventListener('change', adjustGridColumns);
            container.appendChild(buttonsContainer);

            irregularidadesDelTiempo.forEach(tipoIrregularidad => {
                const button = document.createElement('button');
                const iconDiv = document.createElement('div');
                iconDiv.textContent = tipoIrregularidad.icono || '';
                iconDiv.style.fontSize = '2.5rem';
                iconDiv.style.marginBottom = '0.5rem';

                const textSpan = document.createElement('span');
                textSpan.textContent = tipoIrregularidad.nombre;

                button.appendChild(iconDiv);
                button.appendChild(textSpan);
                Object.assign(button.style, window.uniformButtonStyles || {}); // Usar window.uniformButtonStyles para asegurar acceso
                button.style.display = 'flex';
                button.style.flexDirection = 'column';
                button.style.alignItems = 'center';
                button.style.justifyContent = 'center';
                button.style.backgroundColor = 'rgba(255,255,255,0.045)';
                button.onmouseover = () => { button.style.backgroundColor = 'rgba(255,255,255,0.07)'; button.style.transform = 'scale(1.05)'; };
                button.onmouseout = () => { button.style.backgroundColor = 'rgba(255,255,255,0.045)'; button.style.transform = 'scale(1)'; };

                button.addEventListener('click', () => {
                    displaySpecificIrregularityTypeDetail(tipoIrregularidad, currentSelectedTheoryTime);
                });
                buttonsContainer.appendChild(button);
            });
        }
    }

    // Botón para volver a la elección (REGULAR vs IRREGULAR), siempre visible
    const backBtn = document.createElement('button');
    Object.assign(backBtn.style, {
        marginTop: '2rem', backgroundColor: 'rgba(255,255,255,0.10)', color: '#FFFFFF', fontWeight: 'bold',
        padding: '0.75rem 1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out', transform: 'scale(1)', width: '100%', maxWidth: '200px',
        marginLeft: 'auto', marginRight: 'auto', display: 'block'
    });
    backBtn.textContent = '↩️ Volver a Elección';
    backBtn.onmouseover = () => { backBtn.style.backgroundColor = '#9A9AB0'; backBtn.style.transform = 'scale(1.05)'; };
    backBtn.onmouseout = () => { backBtn.style.backgroundColor = 'rgba(255,255,255,0.10)'; backBtn.style.transform = 'scale(1)'; };
    backBtn.addEventListener('click', () => {
        displayRegularIrregularChoice(); // Asume que esta función existe
    });
    container.appendChild(backBtn);
}


/**
 * Muestra los tipos de irregularidad específicos dentro de una categoría amplia (ej. "Verbos Bota").
 * @param {string} groupName El nombre de la categoría amplia seleccionada.
 * @param {string} currentSelectedTheoryTime El tiempo verbal actual seleccionado.
 */
function displayGroupedIrregularityTypes(groupName, currentSelectedTheoryTime) {
    limpiarContenedor();
    const container = irregularVerbsListContainer;
    if (!container) {
        console.error('Error: El contenedor irregularVerbsListContainer no está disponible para displayGroupedIrregularityTypes.');
        return;
    }
    container.innerHTML = '';

    const title = document.createElement('h2');
    title.style.fontSize = '1.875rem';
    title.fontWeight = 'bold';
    title.style.color = '#EDEDF5';
    title.style.marginBottom = '2rem';
    title.style.textAlign = 'center';
    title.textContent = `${groupName} del ${capitalizeFirstLetter(currentSelectedTheoryTime)}`;
    container.appendChild(title);

    const explicacionTiempo = explicacionesIrregularidadesTiempos[currentSelectedTheoryTime];
    const selectedGroup = explicacionTiempo?.gruposCategorias?.find(g => g.nombre === groupName);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'grid';
    buttonsContainer.style.gap = '1rem';
    buttonsContainer.style.maxWidth = '400px';
    buttonsContainer.style.margin = '0 auto';

    const mediaQuerySm = window.matchMedia('(min-width: 640px)');
    const adjustGridColumns = () => {
        buttonsContainer.style.gridTemplateColumns = mediaQuerySm.matches ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)';
    };
    adjustGridColumns();
    mediaQuerySm.addEventListener('change', adjustGridColumns);
    container.appendChild(buttonsContainer);


    if (!selectedGroup || !selectedGroup.tipos || selectedGroup.tipos.length === 0) {
        const noResults = document.createElement('p');
        noResults.style.color = '#9A9AB0';
        noResults.style.textAlign = 'center';
        noResults.textContent = `No hay tipos de irregularidad definidos para esta categoría: ${groupName}.`;
        buttonsContainer.appendChild(noResults);
    } else {
        selectedGroup.tipos.forEach(typeName => {
            const specificType = explicacionTiempo.tiposIrregularidad.find(t => t.nombre === typeName);
            if (specificType) {
                const button = document.createElement('button');
                button.classList.add('menu-button');
                Object.assign(button.style, window.uniformButtonStyles || {}); // Usar window.uniformButtonStyles para asegurar acceso
                button.style.display = 'flex';
                button.style.flexDirection = 'column';
                button.style.alignItems = 'center';
                button.style.justifyContent = 'center';
                button.style.gap = '10px';
                button.innerHTML = `${specificType.icono || ''} <span>${specificType.nombre}</span>`;

                button.style.backgroundColor = 'rgba(255,255,255,0.045)';
                button.onmouseover = () => { button.style.backgroundColor = 'rgba(255,255,255,0.07)'; button.style.transform = 'scale(1.05)'; };
                button.onmouseout = () => { button.style.backgroundColor = 'rgba(255,255,255,0.045)'; button.style.transform = 'scale(1)'; };

                button.onclick = () => displaySpecificIrregularityTypeDetail(specificType, currentSelectedTheoryTime);
                buttonsContainer.appendChild(button);
            } else {
                console.warn(`Tipo de irregularidad "${typeName}" no encontrado en tiposIrregularidad.`);
            }
        });
    }

    // Botón para volver a las categorías amplias
    const backBtn = document.createElement('button');
    Object.assign(backBtn.style, {
        marginTop: '2rem', backgroundColor: 'rgba(255,255,255,0.10)', color: '#FFFFFF', fontWeight: 'bold',
        padding: '0.75rem 1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out', transform: 'scale(1)', width: '100%', maxWidth: '200px',
        marginLeft: 'auto', marginRight: 'auto', display: 'block'
    });
    backBtn.textContent = '↩️ Volver a Categorías';
    backBtn.onmouseover = () => { backBtn.style.backgroundColor = '#9A9AB0'; backBtn.style.transform = 'scale(1.05)'; };
    backBtn.onmouseout = () => { backBtn.style.backgroundColor = 'rgba(255,255,255,0.10)'; backBtn.style.transform = 'scale(1)'; };
    backBtn.addEventListener('click', () => {
        currentSelectedBroadCategory = null;
        displayIrregularityGroupsOrTypes(currentSelectedTheoryTime); // Llama a la función para gestionar grupos o tipos directos
    });
    container.appendChild(backBtn);
}


/**
 * Muestra el detalle de un tipo de irregularidad específico.
 * @param {object} tipoIrregularidadObject El objeto completo del tipo de irregularidad.
 * @param {string} tiempoKey La clave del tiempo verbal (e.g., "pretérito indefinido").
 */
function displaySpecificIrregularityTypeDetail(tipoIrregularidadObject, tiempoKey) {
    limpiarContenedor();
    const detailContainer = document.createElement('div');
    detailContainer.classList.add('explanation-box');
    Object.assign(detailContainer.style, {
        maxWidth: '800px',
        margin: '20px auto',
        padding: '25px',
        backgroundColor: 'var(--color-background-secondary, #0E0E1A)',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
        color: 'var(--color-text-light, #EDEDF5)'
    });

    if (!tipoIrregularidadObject) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = "Error: No se encontró información para el tipo de irregularidad.";
        detailContainer.appendChild(errorMsg);
        appContainer.appendChild(detailContainer);
        return;
    }

    const title = document.createElement('h2');
    title.textContent = tipoIrregularidadObject.nombre;
    Object.assign(title.style, {
        color: 'var(--color-primary, #39FF14)',
        marginBottom: '20px',
        textAlign: 'center'
    });
    detailContainer.appendChild(title);

    const description = document.createElement('p');
    description.textContent = tipoIrregularidadObject.descripcion;
    Object.assign(description.style, {
        marginBottom: '15px',
        lineHeight: '1.6'
    });
    detailContainer.appendChild(description);

    // Mostrar ejemplos de conjugación si están disponibles
    if (tipoIrregularidadObject.verbosEjemplo && tipoIrregularidadObject.verbosEjemplo.length > 0) {
        const examplesTitle = document.createElement('h3');
        examplesTitle.textContent = "Ejemplos de conjugación:";
        Object.assign(examplesTitle.style, {
            color: 'var(--color-primary, #39FF14)',
            marginTop: '20px',
            marginBottom: '10px'
        });
        detailContainer.appendChild(examplesTitle);

        const exampleList = document.createElement('ul');
        Object.assign(exampleList.style, {
            listStyleType: 'none',
            paddingLeft: '0',
            marginBottom: '20px'
        });

        const defaultPersons = ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"];

        tipoIrregularidadObject.verbosEjemplo.forEach(example => {
            const listItem = document.createElement('li');
            listItem.style.marginBottom = '8px';

            const personsToConjugate = (example.personas && example.personas.length > 0) ? example.personas : defaultPersons;
            const conjugatedString = getConjugationExamples(example.verbo, personsToConjugate, tiempoKey);
            const processedConjugatedString = processConjugatedStringForDisplay(conjugatedString);

            if (processedConjugatedString.trim() !== '') {
                listItem.innerHTML = `
                    <strong style="color: var(--color-primary, #39FF14);">${capitalizeFirstLetter(example.verbo)}:</strong>
                    <span style="color: var(--color-text-light, #EDEDF5);">${processedConjugatedString}</span>
                `;
            } else {
                listItem.innerHTML = `
                    <strong style="color: var(--color-primary, #39FF14);">${capitalizeFirstLetter(example.verbo)}:</strong>
                    <span style="color: var(--color-text-light, #EDEDF5);">[Conjugación no disponible para este verbo o tiempo]</span>
                `;
                console.warn(`No se pudo obtener la conjugación para el ejemplo de irregularidad: ${example.verbo} en ${tiempoKey} (${tipoIrregularidadObject.nombre})`);
            }
            exampleList.appendChild(listItem);
        });
        detailContainer.appendChild(exampleList);
    }

    // Botón de Volver
    const backButton = document.createElement('button');
    backButton.classList.add('back-button');
    Object.assign(backButton.style, {
        marginTop: '30px',
        display: 'block',
        marginRight: 'auto',
        marginLeft: 'auto'
    });

    backButton.textContent = currentSelectedBroadCategory ? `↩️ Volver a ${currentSelectedBroadCategory}` : '↩️ Volver a Irregularidades';
    backButton.onclick = () => {
        if (currentSelectedBroadCategory) {
            displayGroupedIrregularityTypes(currentSelectedBroadCategory, tiempoKey); // Pasar tiempoKey
        } else {
            displayIrregularityGroupsOrTypes(tiempoKey); // Pasar tiempoKey
        }
    };
    detailContainer.appendChild(backButton);
    appContainer.appendChild(detailContainer);
}

// --- Funciones para el modal imagen explicativa irregularidades ---
function mostrarModalVerbo(imagenUrl) {
    const modal = document.getElementById('modal-verbo');
    const imagen = document.getElementById('imagen-explicativa');
    if (modal && imagen) {
        imagen.src = imagenUrl;
        imagen.style.maxWidth = '100%';
        imagen.style.height = 'auto';
        imagen.style.display = 'block';
        modal.style.display = 'flex';
    }
}

// === Modal único de "tipos de verbos irregulares" (estilo v5, fiel a la infografía) ===
function mostrarModalTiposVerbos() {
    const existente = document.getElementById('modal-tipos-verbos');
    if (existente) existente.remove();

    const overlay = document.createElement('div');
    overlay.id = 'modal-tipos-verbos';
    overlay.className = 'modal-overlay sil-modal-overlay';
    overlay.style.display = 'flex';

    const cerrar = () => overlay.remove();

    const tipos = [
        { ic:'cat-somb', color:'var(--amarillo)', t:'Sombrero', d:'solo la primera persona (yo) es irregular. Terminaciones -go, -ígo, -oy, -zco.' },
        { ic:'cat-bota', color:'var(--cian)', t:'Bota', d:'cambio de vocal en todas las personas excepto nosotros y vosotros (e&gt;ie, o&gt;ue, e&gt;i, u&gt;ue).' },
        { ic:'cat-bs', color:'var(--fuxia)', t:'Bota con sombrero', d:'yo irregular Y cambio de vocal en el resto (salvo nosotros/vosotros).' },
        { ic:'cat-radical', color:'var(--morado)', t:'Radical', d:'la raíz es irregular. En indefinido cambian la raíz o añaden u, i…' },
        { ic:'cat-alien', color:'var(--verde)', t:'Completo irregular', d:'irregularidad total, la conjugación cambia por completo.', full:true },
    ];

    const tarjetas = tipos.map(x => `
        <div class="sil-tipo${x.full ? ' sil-tipo-full' : ''}">
            <svg class="sil-tipo-ico" viewBox="0 0 24 24" style="stroke:${x.color}"><use href="#${x.ic}"/></svg>
            <span><b style="color:${x.color}">${x.t}</b>: ${x.d}</span>
        </div>`).join('');

    overlay.innerHTML = `
        <div class="modal-content sil-modal">
            <button class="modal-close-btn" aria-label="Cerrar">&times;</button>
            <h3 class="modal-title">¿Qué tipos de verbos irregulares hay?</h3>
            <p style="color:var(--text-soft);margin:0 0 14px;font-size:.95rem">Clasificamos las irregularidades por <b style="color:var(--text)">qué personas</b> cambian. Cada tipo tiene su icono:</p>
            <div class="sil-tipos-grid">${tarjetas}</div>
        </div>`;

    overlay.querySelector('.modal-close-btn').onclick = cerrar;
    overlay.onclick = (e) => { if (e.target === overlay) cerrar(); };
    document.body.appendChild(overlay);
}
if (typeof window !== 'undefined') window.mostrarModalTiposVerbos = mostrarModalTiposVerbos;

function cerrarModalVerbo() {
    const modal = document.getElementById('modal-verbo');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Exponer las funciones al ámbito global
window.mostrarModalVerbo = mostrarModalVerbo;
window.cerrarModalVerbo = cerrarModalVerbo;

// =====================================================================
// EXPOSICIÓN DE FUNCIONES AL ÁMBITO GLOBAL PARA HTML ONCLICK
// =====================================================================
// Este es el paso crucial. Asigna las funciones a la ventana (window)
// para que puedan ser llamadas por el HTML.
window.mostrarMenu = mostrarMenu;
window.mostrarSubMenuAprender = mostrarSubMenuAprender;
window.mostrarSubMenuPracticar = mostrarSubMenuPracticar;
window.guardarProgreso = guardarProgreso;
window.cargarProgreso = cargarProgreso;
window.mostrarActividadTiemposVerbales = mostrarActividadTiemposVerbales;
window.iniciarPracticaPorNivel = iniciarPracticaPorNivel;
window.mostrarConfiguracionTiemposVerbales = mostrarConfiguracionTiempos;
window.mostrarVerbosRegularesIrregulares = mostrarVerbosRegularesIrregulares;
window.mostrarExplicacionesTiemposVerbales = mostrarExplicacionesTiemposVerbales;
window.populateIrregularVerbsSection = populateIrregularVerbsSection;
window.mostrarSubMenuIndefinidoImperfecto = mostrarSubMenuIndefinidoImperfecto;


// Llama a la función inicial después de exponer todas las demás.
window.onload = mostrarMenu;
