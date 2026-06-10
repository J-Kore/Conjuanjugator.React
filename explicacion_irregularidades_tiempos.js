// AHORA ESTE ES TU ÚNICO OBJETO DE EXPLICACIONES, NO HAY MÁS 'RAW'
// Asegúrate de que este archivo sea exportado y que 'conjugaciones' sea importado correctamente.

import { conjugaciones } from './diccionario_conjugaciones.js'; // Necesario para la lógica de conjugaciones
import { participio } from './diccionario_conjugaciones.js';

// Función auxiliar para capitalizar la primera letra de una cadena
export function capitalizeFirstLetter(string) { // <--- AÑADE 'export' AQUÍ
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Mapeo de pronombres para buscar en el objeto 'conjugaciones'
// Esto permite que "él/ella" en los datos se mapee a la clave correcta en el diccionario.
const universalPronounKeyMaps = {
    "yo": ["yo"],
    "tú": ["tú"],
    "él/ella": ["él/ella/usted", "él/ella", "él"], // Mapea a las posibles claves en el diccionario
    "nosotros": ["nosotros/as", "nosotros"],
    "vosotros": ["vosotros/as", "vosotros"],
    "ellos/ellas": ["ellos/ellas/ustedes", "ellos/ellas"] // Mapea a las posibles claves en el diccionario
};

export const todosLosTiemposVerbales = [
    "presente",
    "pretérito perfecto", 
    "pretérito indefinido", 
    "pretérito imperfecto",
    "pluscuamperfecto",
    "futuro",
    "condicional",
    "presente de subjuntivo",
    "imperfecto de subjuntivo",
    "pluscuamperfecto de subjuntivo"
];

// Función auxiliar para obtener la conjugación de una persona y tiempo específicos
function getConjugationForPerson(verbName, personToLookup, tense) {
    const lowerCaseVerbName = verbName.toLowerCase();
    const verbConjugationData = conjugaciones[lowerCaseVerbName];

    if (!verbConjugationData) {
        return null; // El verbo no se encontró en el diccionario
    }

    // Mapear "pretérito indefinido" y "pretérito imperfecto" a sus claves cortas
    let effectiveTense = tense;
    if (tense === "pretérito indefinido") {
        effectiveTense = "indefinido";
    } else if (tense === "pretérito imperfecto") {
        effectiveTense = "imperfecto";
    }

    // Obtener las posibles claves para la persona (ej. ["él/ella/usted", "él/ella", "él"])
    const possiblePersonKeys = universalPronounKeyMaps[personToLookup.toLowerCase()] || [personToLookup.toLowerCase()];

    // Buscar la conjugación para la persona y el tiempo efectivos
    for (const keyOption of possiblePersonKeys) {
        if (verbConjugationData[keyOption] && verbConjugationData[keyOption][effectiveTense]) {
            return verbConjugationData[keyOption][effectiveTense];
        }
    }
    return null; // Conjugación no encontrada para esta persona/tiempo
}

// En explicacion_irregularidades_tiempos.js

// ... (asegúrate de que getConjugationForPerson esté definida justo antes o en este mismo archivo) ...

export function formatIrregularityExample(ejemplo, tiempoVerbal) {
    const verbLowerCase = ejemplo.verbo.toLowerCase();

    // Verificación inicial del verbo en conjugaciones
    if (!conjugaciones[verbLowerCase]) {
        return `<strong style="color: #00C8FF;">${capitalizeFirstLetter(ejemplo.verbo)}:</strong> <span style="color: #FF2DA6;">[Verbo no disponible]</span>`;
    }

    const conjugatedFormsRaw = []; // Aquí almacenaremos solo las palabras conjugadas (ej. "hablé", "hablaste")
    const personsToDisplay = ejemplo.personas;

    for (const person of personsToDisplay) {
        // Usar la función auxiliar para obtener la conjugación individual
        const foundForm = getConjugationForPerson(ejemplo.verbo, person, tiempoVerbal);

        if (foundForm) {
            conjugatedFormsRaw.push(foundForm); // Solo la forma conjugada, sin el pronombre ni <br>
        }
        // Si no se encuentra una forma para una persona, simplemente no la añadimos a la lista
    }

    // Si no se encontró ninguna conjugación para ninguna de las personas solicitadas
    if (conjugatedFormsRaw.length === 0) {
        return `<strong style="color: #00C8FF;">${capitalizeFirstLetter(ejemplo.verbo)}:</strong> <span style="color: #FF2DA6;">[Conjugación no disponible para este tiempo o pronombre(s)]</span>`;
    }

    // *** ESTA ES LA LÍNEA CLAVE QUE GENERA EL FORMATO VISUAL DESEADO ***
    // Usa los estilos y la estructura exacta que me proporcionaste.
    return `<strong style="color: #00C8FF;">${capitalizeFirstLetter(ejemplo.verbo)}:</strong> <span style="color: #FF2DA6;">${conjugatedFormsRaw.join(', ')}</span>`;
}


export function generarHtmlExplicacionTiempoIrregularidad(tiempoVerbal) {
    const explicacionTiempo = explicacionesIrregularidadesTiempos[tiempoVerbal];

    if (!explicacionTiempo) {
        return `<p class="info-box description">No se encontraron explicaciones de irregularidades para el tiempo "${capitalizeFirstLetter(tiempoVerbal)}".</p>`;
    }

    // APLICAMOS ESTILOS EN LÍNEA AL CONTENEDOR PRINCIPAL para que coincida con mostrarDetalleIrregularidadVerbo
    // Mantenemos 'explanation-main-container' por si tiene estilos globales en tu CSS
    let htmlContent = `<div class="explanation-main-container" style="background-color: rgba(255,255,255,0.045); color: #EDEDF5; padding: 25px; border-radius: 14px; margin: 20px auto; max-width: 800px; border: 1px solid rgba(255,255,255,0.08); text-align: left; line-height: 1.6;">`;

    // Título principal del tiempo: Mantenemos la clase 'verb-title' pero AÑADIMOS estilos en línea
    htmlContent += `<h2 class="verb-title" style="color: #00C8FF; text-align: center; margin-bottom: 25px;">${explicacionTiempo.titulo || capitalizeFirstLetter(tiempoVerbal)}</h2>`;

    // Descripción general del tiempo (esta parte ya usa 'info-box' y está bien)
    if (explicacionTiempo.descripcion) {
        htmlContent += `
        <div class="info-box">
            <span class="info-box-icon">💡</span>
            <div>
                <h3>Descripción General</h3>
                <p class="description">${explicacionTiempo.descripcion}</p>
            </div>
        </div>`;
    }

    // Iterar sobre cada tipo de irregularidad para ese tiempo
    if (explicacionTiempo.tiposIrregularidad && explicacionTiempo.tiposIrregularidad.length > 0) {
        htmlContent += `
        <div class="info-box">
            <span class="info-box-icon">⚠️</span>
            <div>
                <h3>Tipos de Irregularidad Específicos</h3>`;

        explicacionTiempo.tiposIrregularidad.forEach(tipoIrregularidad => {
            // APLICAMOS ESTILOS EN LÍNEA AL ITEM DE DETALLE para que coincida con 'irregularityInfoBox'
            // Mantenemos 'irregularity-detail-item' por si tiene estilos globales
            htmlContent += `
                <div class="irregularity-detail-item" style="background-color: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); margin-bottom: 20px; border-radius: 12px; padding: 15px;">
                    <h4 style="color: #00C8FF;">${tipoIrregularidad.icono || ''} ${tipoIrregularidad.nombre}</h4>
                    <p class="description">${tipoIrregularidad.descripcion}</p>`;

            // Verbos de ejemplo (esta sección parece ya estar bien, solo ajustamos si es necesario)
            if (tipoIrregularidad.verbosEjemplo && tipoIrregularidad.verbosEjemplo.length > 0) {
                htmlContent += `
                    <div class="examples-section">
                        <h5>Ejemplos de Verbos:</h5>
                        <ul class="example-list">`;
                tipoIrregularidad.verbosEjemplo.forEach(ejemplo => {
                    const formattedExample = formatIrregularityExample(ejemplo, tiempoVerbal);
                    htmlContent += `<li>${formattedExample}</li>`;
                });
                htmlContent += `
                        </ul>
                    </div>`;
            }
            htmlContent += `</div><hr>`; // Separador entre tipos de irregularidad
        });
        htmlContent += `
            </div>
        </div>`;
    } else {
        htmlContent += `<p class="info-box description">No hay tipos de irregularidad específicos definidos para este tiempo.</p>`;
    }

    htmlContent += `</div>`; // Cierra explanation-main-container
    return htmlContent;
}


export const explicacionesIrregularidadesTiempos = {
    "presente": {
        titulo: "Irregularidades del Presente de Indicativo", // Mantenemos tu título actual
        descripcion: "El presente de indicativo tiene varias irregularidades comunes que afectan la raíz o la primera persona del singular.", // Añadimos una descripción general
        tiposIrregularidad: [ // Renombrado de 'tipos' a 'tiposIrregularidad'
            {
            nombre: "Verbos Regulares",
            descripcion: "Verbos que siguen un patrón predecible de conjugación en el presente de indicativo para todas las personas. Sus terminaciones dependen de si el verbo acaba en -ar, -er o -ir.",
            icono: "✅",
            verbosEjemplo: [
                { verbo: "hablar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "comer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "vivir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "estudiar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
            ]
        },
        {
            nombre: "Completo Irregular",
            descripcion: "La 'e' de la raíz cambia a 'ie' en todas las personas excepto 'nosotros' y 'vosotros'. La forma conjugada 'sale' de la bota.",
            icono: "👽",
            verbosEjemplo: [
                { verbo: "ser", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "ir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
            ]
        },
        {
            nombre: "Verbos Bota (E > IE)",
            descripcion: "La 'e' de la raíz cambia a 'ie' en todas las personas excepto 'nosotros' y 'vosotros'. La forma conjugada 'sale' de la bota.",
            icono: "👢",
            verbosEjemplo: [
                { verbo: "querer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "cerrar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "perder", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "empezar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
            ]
        },
        {
            nombre: "Verbos Bota (O > UE)",
            descripcion: "La 'o' de la raíz cambia a 'ue' en todas las personas excepto 'nosotros' y 'vosotros'. La forma conjugada 'sale' de la bota.",
            icono: "👢",
            verbosEjemplo: [
                { verbo: "poder", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "dormir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "volver", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "encontrar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
            ]
        },
        {
            nombre: "Verbos Bota (E > I)",
            descripcion: "La 'e' de la raíz cambia a 'i' en todas las personas excepto 'nosotros' y 'vosotros'. La forma conjugada 'sale' de la bota.",
            icono: "👢",
            verbosEjemplo: [
                { verbo: "pedir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "servir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "repetir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
            ]
        },
        {
            nombre: "Verbos Bota (U > UE)",
            descripcion: "Solo el verbo 'jugar' en presente cambia la 'u' de la raíz a 'ue' en todas las personas excepto 'nosotros' y 'vosotros'.",
            icono: "👢",
            verbosEjemplo: [
                { verbo: "jugar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
            ]
        },
        {
            nombre: "Verbos Bota (-UIR > UYO)",
            descripcion: "Verbos terminados en -uir que no tienen una 'g' o 'll' antes de la terminación, añaden una 'y' después de la 'u' en algunas personas.",
            icono: "👢",
            verbosEjemplo: [
                { verbo: "construir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "huir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "destruir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
            ]
        },
        {
            nombre: "Verbos Sombrero (-go)",
            descripcion: "Verbos que son irregulares solo en la primera persona (yo), añaden -go ",
            icono: "🎩",
            verbosEjemplo: [
                { verbo: "hacer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "poner", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "saliir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
            ]
        },
        {
            nombre: "Verbos Sombrero (-igo)",
            descripcion: "Verbos que son irregulares solo en la primera persona (yo), añaden -igo ",
            icono: "🎩",
            verbosEjemplo: [
                { verbo: "traer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "caer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
            ]
        },
        {
            nombre: "Verbos Sombrero (-zco)",
            descripcion: "Verbos terminados en -cer, -ucir, -cir (con vocal antes de la 'c') cambian la 'c' por 'zc' en la primera persona del singular (yo).",
            icono: "🎩",
            verbosEjemplo: [
                { verbo: "conocer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "conducir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "producir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "traducir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "lucir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "introducir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
            ]
        },
        {
            nombre: "Verbos Sombrero (-oy)",
            descripcion: "Verbos que cambian la 'c' por 'zc' en la primera persona del singular (yo).",
            icono: "🎩",
            verbosEjemplo: [
                { verbo: "estar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "dar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
            ]
        },
        //{
            //nombre: "Verbos Bota con Sombrero (I > Y)",
            //descripcion: "Verbos que terminan en -oír o -aír y cambian la 'i' a 'y' en ciertas formas.",
            //icono: "🎩👢",
            //verbosEjemplo: [
                //{ verbo: "oír", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
            //]
        //},
        {
            nombre: "Verbos Bota con Sombrero",
            descripcion: "Verbos que tienen 2 irregularidades, una en primera persona (yo) como en los verbos sombrero y también tiene cambio de vocales como en los vebos bota",
            icono: "🎩👢",
            verbosEjemplo: [
                { verbo: "decir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "tener", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                { verbo: "venir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
            ]
        },
    ],
    gruposCategorias: [
        {
            nombre: "Verbos Bota",
            icono: "👢", // O el icono que prefieras para la categoría principal
            descripcion: "Verbos con cambios vocálicos en la raíz (e>ie, o>ue, e>i).",
            tipos: [
                "Verbos Bota (E > IE)",
                "Verbos Bota (O > UE)",
                "Verbos Bota (E > I)",
                "Verbos Bota (U > UE)",
                "Verbos Bota (-UIR > UYO)"
            ]
        },
        {
            nombre: "Verbos Sombrero",
            icono: "🎩",
            descripcion: "Verbos con irregularidades en la primera persona del singular (yo) pero regulares en el resto (ej. -go, -zco).",
            tipos: [
                "Verbos Sombrero (-go)",
                "Verbos Sombrero (-igo)",
                "Verbos Sombrero (-zco)",
                "Verbos Sombrero (-oy)"
                // Asegúrate de que los nombres aquí coinciden EXACTAMENTE con los 'nombre'
                // de los tipos de irregularidad en el array 'tiposIrregularidad' de arriba.
            ]
        },
        {
            nombre: "Verbos Bota y Sombrero",
            icono: "👢🎩",
            descripcion: "Verbos que combinan cambios vocálicos con irregularidades en la primera persona del singular (ej. tener, venir).",
            tipos: [
                // Si tienes categorías específicas que caigan aquí, lístalas.
                // Para presente, verbos como 'tener' y 'venir' tienen cambios en la raíz y en la primera persona.
                // Quizás necesites ajustar tus tiposIrregularidad existentes o crear nuevos
                // para que encajen perfectamente aquí si no están ya.
                // Por ejemplo, "Tener (e>ie + -go)" o "Venir (e>ie + -go)" si tienes esas sub-categorías.
                // Si solo tienes 'tener' y 'venir' como tipos individuales sin una categoría específica de Bota y Sombrero,
                // podríamos listarlos directamente aquí si se consideran "totales" o ajustarlos.
                // Por simplicidad, si los tienes como tipos individuales en tiposIrregularidad:
                "Verbos Bota con Sombrero", 
                "Verbos Bota con Sombrero (I > Y)" 
            ]
        },
        {
            nombre: "Completo Irregular",
            icono: "👽",
            descripcion: "Verbos con patrones de irregularidad más complejos o que no siguen un patrón predecible.",
            tipos: [
                "Completo Irregular"
                // Asegúrate de que los nombres aquí coinciden EXACTAMENTE con los 'nombre'
                // de los tipos de irregularidad en el array 'tiposIrregularidad' de arriba.
            ]
        }
    ],
    // --- gameCategories del Presente ---
    gameCategories: [
        { id: 'zona-regular', nombre: 'Regulares ✅', typeMatch: 'Regular' },
        { id: 'bota', nombre: 'Verbos Bota 👢', typeMatch: 'Bota' },
        //{ id: 'bota-o-ue', nombre: 'Verbos Bota (O > UE) 👢', typeMatch: 'Bota' },
        //{ id: 'bota-e-i', nombre: 'Verbos Bota (E > I) 👢', typeMatch: 'Bota' },
        //{ id: 'bota-u-ue', nombre: 'Verbos Bota (U > UE) 👢', typeMatch: 'Bota' },
        //{ id: 'bota-u-ue', nombre: 'Verbos Bota (UIR > UYO) 👢', typeMatch: 'Bota' },
        { id: 'Verbos Sombrero', nombre: 'Verbos Sombrero 🎩', typeMatch: 'Sombrero' },
        // Las siguientes categorías se combinan bajo "Sombrero" o se eliminan si no hay verbos específicos con ese typeMatch simplificado
        // en explicacion_de_Verbos.js para el presente.
        // Si hay verbos que tienen "G-incoativo", "C > ZC", etc. como su presenteTipoIrregular,
        // se necesitarían categorías específicas. Basado en tu archivo de verbos,
        // muchos de estos se clasifican como "Sombrero".
        // Por ejemplo, "conocer", "conducir", "nacer" son "Sombrero" en presente.
        // "salir", "venir", "traer", "tener" son "Sombrero" en presente.
        // "hacer", "decir" son "Sombrero" en presente.
        // Por simplicidad y para que coincida con tus verbos, los agrupo bajo "Sombrero" si su `presenteTipoIrregular` es "Sombrero".
        { id: 'irregularidad-total', nombre: 'Irregularidad Total 👽', typeMatch: 'Irregularidad total' }, // Para verbos como 'ser', 'ir'
        { id: 'bota-con-sombrero', nombre: 'Bota con Sombrero 🎩👢', typeMatch: 'Bota y Sombrero' } // Para verbos como 'tener'
    ]
},
    "pretérito perfecto": {
        titulo: "Irregularidades del Participio Pasado (Formación)",
        descripcion: "El pretérito perfecto se forma con 'haber' en presente de indicativo y el participio pasado del verbo principal. Algunos participios son irregulares.",
        tiposIrregularidad: [
            {
                nombre: "Participio Irregular",
                descripcion: "El participio no sigue la regla de -ado/-ido. Hay que memorizarlos.",
                icono: "🧠",
                verbosEjemplo: [
                    { verbo: "hacer", participio: ["participio"] },
                    { verbo: "decir", participio: ["participio"] },
                    { verbo: "abrir", participio: ["participio"] },
                    { verbo: "cubrir", participio: ["participio"] },
                    { verbo: "freír", participio: ["participio"] },
                    { verbo: "imprimir", participio: ["participio"] },
                    { verbo: "morir", participio: ["participio"] },
                    { verbo: "romper", participio: ["participio"] },
                    { verbo: "ver", participio: ["participio"] },
                    { verbo: "poner", participio: ["participio"] }
                ]
            },
            {
                nombre: "Participio Regular",
                descripcion: "El participio sigue la regla general de -ado (para verbos -ar) o -ido (para verbos -er, -ir).",
                icono: "✅",
                verbosEjemplo: [
                    { verbo: "hablar", participio: ["participio"] },
                    { verbo: "comer", participio: ["participio"] },
                    { verbo: "vivir", participio: ["participio"] },
                    { verbo: "deber", participio: ["participio"] },
                    { verbo: "andar", participio: ["participio"] },
                    { verbo: "aprender", participio: ["participio"] },
                    { verbo: "bajar", participio: ["participio"] },
                    { verbo: "cantar", participio: ["participio"] },
                    { verbo: "cenar", participio: ["participio"] },
                    { verbo: "comprar", participio: ["participio"] },
                    { verbo: "conducir", participio: ["participio"] },
                    { verbo: "desayunar", participio: ["participio"] },
                    { verbo: "construir", participio: ["participio"] },
                    { verbo: "lucir", participio: ["participio"] },
                    { verbo: "destruir", participio: ["participio"] },
                    { verbo: "traducir", participio: ["participio"] },
                    { verbo: "girar", participio: ["participio"] },
                    { verbo: "gustar", participio: ["participio"] },
                    { verbo: "hervir", participio: ["participio"] },
                    { verbo: "leer", participio: ["participio"] },
                    { verbo: "levantar", participio: ["participio"] },
                    { verbo: "nacer", participio: ["participio"] },
                    { verbo: "perder", participio: ["participio"] },
                    { verbo: "terminar", participio: ["participio"] },
                    { verbo: "viajar", participio: ["participio"] },
                    { verbo: "traer", participio: ["participio"] },
                    { verbo: "salir", participio: ["participio"] },
                    { verbo: "venir", participio: ["participio"] },
                    { verbo: "pedir", participio: ["participio"] },
                    { verbo: "dormir", participio: ["participio"] },
                    { verbo: "jugar", participio: ["participio"] }
                ]
            }
        ],
        gameCategories: [
            { id: 'zona-regular', nombre: 'Participio Regular ✅', typeMatch: 'Regular' },
            { id: 'zona-participio-irregular', nombre: 'Participio Irregular 🧠', typeMatch: 'Participio Irregular' }
        ]
    },
    "pluscuamperfecto": {
        titulo: "Irregularidades del Participio Pasado (Formación)",
        descripcion: "El pluscuamperfecto se forma con 'haber' en imperfecto de indicativo y el participio pasado del verbo principal. Algunos participios son irregulares.",
        tiposIrregularidad: [
            {
                nombre: "Participio Irregular",
                descripcion: "El participio no sigue la regla de -ado/-ido. Hay que memorizarlos.",
                icono: "🧠",
                verbosEjemplo: [
                    { verbo: "hacer", personas: [ "yo" ] },
                    { verbo: "decir", personas: [ "yo" ] },
                    { verbo: "ver", personas: [ "yo" ] },
                    { verbo: "escribir", personas: [ "yo" ] },
                    { verbo: "cubrir", personas: [ "yo" ] },
                    { verbo: "freír", personas: [ "yo" ] },
                    { verbo: "imprimir", personas: [ "yo" ] },
                    { verbo: "morir", personas: [ "yo" ] },
                    { verbo: "romper", personas: [ "yo" ] },
                    { verbo: "poner", personas: [ "yo" ] }
                ]
            },
            {
                nombre: "Participio Regular",
                descripcion: "Formado con 'haber' en imperfecto de subjuntivo (regular o irregular) más el participio regular del verbo principal.",
                icono: "✅",
                verbosEjemplo: [
                    { verbo: "hablar", participio: ["participio"] },
                    { verbo: "comer", participio: ["participio"] },
                    { verbo: "vivir", participio: ["participio"] },
                    { verbo: "deber", participio: ["participio"] },
                    { verbo: "andar", participio: ["participio"] },
                    { verbo: "aprender", participio: ["participio"] },
                    { verbo: "bajar", participio: ["participio"] },
                    { verbo: "cantar", participio: ["participio"] },
                    { verbo: "cenar", participio: ["participio"] },
                    { verbo: "comprar", participio: ["participio"] },
                    { verbo: "conducir", participio: ["participio"] },
                    { verbo: "desayunar", participio: ["participio"] },
                    { verbo: "construir", participio: ["participio"] },
                    { verbo: "lucir", participio: ["participio"] },
                    { verbo: "destruir", participio: ["participio"] },
                    { verbo: "traducir", participio: ["participio"] },
                    { verbo: "girar", participio: ["participio"] },
                    { verbo: "gustar", participio: ["participio"] },
                    { verbo: "hervir", participio: ["participio"] },
                    { verbo: "leer", participio: ["participio"] },
                    { verbo: "levantar", participio: ["participio"] },
                    { verbo: "nacer", participio: ["participio"] },
                    { verbo: "perder", participio: ["participio"] },
                    { verbo: "terminar", participio: ["participio"] },
                    { verbo: "viajar", participio: ["participio"] },
                    { verbo: "traer", participio: ["participio"] },
                    { verbo: "salir", participio: ["participio"] },
                    { verbo: "venir", participio: ["participio"] },
                    { verbo: "pedir", participio: ["participio"] },
                    { verbo: "haber", participio: ["participio"] },
                    { verbo: "dormir", participio: ["participio"] },
                    { verbo: "jugar", participio: ["participio"] }
                ]
            }
        ],
        gameCategories: [
            { id: 'zona-regular', nombre: 'Participio Regular ✅', typeMatch: 'Regular' },
            { id: 'zona-participio-irregular', nombre: 'Participio Irregular 🧠', typeMatch: 'Participio Irregular' }
        ]
    },
    "pretérito imperfecto": {
        titulo: "Irregularidades del Pretérito Imperfecto de Indicativo",
        descripcion: "El pretérito imperfecto tiene muy pocas irregularidades, principalmente en los verbos 'ir', 'ser' y 'ver'.",
        tiposIrregularidad: [
            {
                nombre: "Verbos Regulares",
                descripcion: "La mayoría de los verbos son regulares en el imperfecto, usando terminaciones -aba (para -ar) o -ía (para -er/-ir).",
                icono: "✅",
                verbosEjemplo: [
                    { verbo: "hablar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "dar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "comer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "vivir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "andar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "aprender", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "bajar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cantar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cenar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "comprar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "conducir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cubrir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "desayunar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "freír", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "girar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "gustar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "hervir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "imprimir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "leer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "levantar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "morir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "nacer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "perder", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "romper", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "terminar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "viajar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "traer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "salir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "venir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "pedir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "dormir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "jugar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            },
            {
                nombre: "Completo Irregular",
                descripcion: "Los verbos 'ir' y 'ser' son totalmente irregulares en el imperfecto.",
                icono: "👽",
                verbosEjemplo: [
                    { verbo: "ir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "ser", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }

                ]
            },
            //{
                //nombre: "Ser (totalmente irregular)",
                //descripcion: "El verbo 'ser' es totalmente irregular en el imperfecto.",
                //icono: "🌟",
                //verbosEjemplo: [
                    //{ verbo: "ser", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                //]
            //},
            {
                nombre: "Mantiene Vocal (e)",
                descripcion: "El verbo 'ver' tiene una irregularidad menor en el imperfecto, manteniendo la 'e' de la raíz.",
                icono: "👁️",
                verbosEjemplo: [
                    { verbo: "ver", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            }
        ],
        gameCategories: [
            { id: 'zona-regular', nombre: 'Regulares ✅', typeMatch: 'Regular' },
            { id: 'zona-irregular', nombre: 'Completo Irregular 👽', typeMatch: 'Irregularidad total' },
            { id: 'zona-mantiene"e"', nombre: 'Mantiene Vocal "e" 👁️', typeMatch: 'Mantiene Vocal (e)' }
        ]
    },
    "pretérito indefinido": {
        titulo: "Irregularidades del Pretérito Indefinido de Indicativo",
        descripcion: "El pretérito indefinido tiene un grupo considerable de verbos irregulares con cambios en la raíz y terminaciones especiales.",
        tiposIrregularidad: [
            {
                nombre: "Verbos Regulares",
                descripcion: "Verbos que siguen la conjugación regular de -ar, -er, -ir en el indefinido.",
                icono: "✅",
                verbosEjemplo: [
                    { verbo: "hablar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "comer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "vivir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "aprender", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "bajar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cantar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cenar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "comprar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cubrir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "desayunar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "freír", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "girar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "gustar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "imprimir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "levantar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "nacer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "perder", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "romper", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "terminar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "viajar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            },
            {
                nombre: "Verbos con (u) en la raíz",
                descripcion: "Verbos con irregularidad en la raíz que cambia a 'u' y terminaciones -e, -iste, -o, -imos, -isteis, -ieron.",
                icono: "📖",
                verbosEjemplo: [
                    { verbo: "estar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "tener", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "poder", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "andar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }

                ]
            },
            {
                nombre: "Verbos con (i) en la raíz",
                descripcion: "Verbos con irregularidad en la raíz que cambia a 'i' y terminaciones -e, -iste, -o, -imos, -isteis, -ieron.",
                icono: "📖",
                verbosEjemplo: [
                    { verbo: "venir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "hacer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "querer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            },
            {
                nombre: "Verbos con (j) en la raíz",
                descripcion: "Verbos con irregularidad en la raíz que cambia a 'j' y terminaciones -e, -iste, -o, -imos, -isteis, -eron (sin 'i' en -jeron).",
                icono: "📖",
                verbosEjemplo: [
                    { verbo: "decir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "traer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "traducir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "conducir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            },
            {
                nombre: "Verbos con cambio vocálico en 3ª persona",
                descripcion: "Verbos -ir con cambio vocálico en el presente de indicativo, que también cambian la vocal de la raíz (e>i, o>u) en la 3ª persona del singular y plural. Excepción con verbos -er y -uir cambian (i>y)",
                icono: "🔄",
                verbosEjemplo: [
                    { verbo: "dormir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "leer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "preferir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "hervir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "morir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "pedir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "caer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "destruir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "huir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "construir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "sentir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            },
            {
                nombre: "Cambio Ortográfico",
                descripcion: "Verbos que presentan un cambio en la ortografía para mantener el sonido de la raíz.",
                icono: "✍️",
                verbosEjemplo: [
                    { verbo: "jugar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "llegar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "empezar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            },
            {
                nombre: "Ir y Ser (iguales)",
                descripcion: "Los verbos 'ir' y 'ser' tienen la misma conjugación irregular en el indefinido, lo que a menudo causa confusión.",
                icono: "👯",
                verbosEjemplo: [
                    { verbo: "ir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "ser", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            },
            {
                nombre: "Dar",
                descripcion: "El verbo 'dar' es irregular en el indefinido, a pesar de ser un verbo -ar, se conjuga como los verbos -er/-ir.",
                icono: "🎁",
                verbosEjemplo: [
                    { verbo: "dar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            }
        ],
        gameCategories: [
            { id: 'zona-regular', nombre: 'Regulares ✅', typeMatch: 'Regular' },
            { id: 'zona-irregularidad-radical', nombre: 'Irregularidad radical ✨', typeMatch: 'Irregularidad radical' },
            { id: 'zona-cambio-ortografico', nombre: 'Cambio Ortográfico ✍️', typeMatch: 'Cambio ortográfico' },
            { id: 'zona-cambio-3ª-persona', nombre: 'Cambio 3ª persona 🔄', typeMatch: 'Cambio vocálico 3ª persona' },
            { id: 'zona-irregularidad-total', nombre: 'Iguales 👯', typeMatch: 'Irregularidad total' } // Para Ir y Ser
        ]
    },
    "futuro": {
        titulo: "Irregularidades del Futuro de Indicativo",
        descripcion: "Las irregularidades en el futuro y condicional afectan a la raíz, añadiendo o eliminando letras, pero las terminaciones son siempre regulares.",
        tiposIrregularidad: [
            {
                nombre: "Verbos Regulares",
                descripcion: "Se añade la terminación directamente al infinitivo del verbo (-é, -ás, -á, -emos, -éis, -án).",
                icono: "✅",
                verbosEjemplo: [
                    { verbo: "hablar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "comer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "vivir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "andar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "aprender", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "bajar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cantar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cenar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "comprar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "conducir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cubrir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "desayunar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "freír", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "girar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "gustar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "hervir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "imprimir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "leer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "levantar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "morir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "nacer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "perder", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "romper", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "terminar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "viajar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "jugar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "traer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] } // 'traer' es regular en futuro/condicional

                ]
            },
            {
                nombre: "Irregularidad radical (pérdida de vocal 'e', 'i' o adición de 'd')",
                descripcion: "Verbos que cambian su raíz en el futuro, ya sea perdiendo una vocal o añadiendo una 'd'.",
                icono: "✨",
                verbosEjemplo: [
                    { verbo: "caber", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "haber", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "poder", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "querer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "saber", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "poner", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "salir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "tener", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "valer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }, // 'valer' no está en tu lista, pero es un ejemplo común
                    { verbo: "venir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "decir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "hacer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            }
        ],
        gameCategories: [
            { id: 'zona-regular', nombre: 'Regulares ✅', typeMatch: 'Regular' },
            { id: 'zona-irregular', nombre: 'Irregulares ✨', typeMatch: 'Irregularidad radical' }
        ]
    },
    "condicional": {
        titulo: "Irregularidades del Condicional",
        descripcion: "Las irregularidades del condicional son exactamente las mismas que las del futuro, afectando a la raíz pero con terminaciones regulares.",
        tiposIrregularidad: [
            {
                nombre: "Verbos Regulares",
                descripcion: "Se añade la terminación directamente al infinitivo del verbo (-ía, -ías, -ía, -íamos, -íais, -ían).",
                icono: "✅",
                verbosEjemplo: [
                    { verbo: "hablar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "comer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "vivir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "andar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "aprender", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "bajar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cantar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cenar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "comprar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "conducir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cubrir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "desayunar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "freír", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "girar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "gustar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "hervir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "imprimir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "leer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "levantar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "morir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "nacer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "perder", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "romper", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "terminar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "traer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }, // 'traer' es regular en futuro/condicional
                    { verbo: "viajar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "jugar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            },
            {
                nombre: "Irregularidad radical (pérdida de vocal o adición de 'd')",
                descripcion: "Verbos que cambian su raíz en el condicional, ya sea perdiendo una vocal o añadiendo una 'd'.",
                icono: "✨",
                verbosEjemplo: [
                    { verbo: "caber", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "haber", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "poder", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "querer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "saber", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "poner", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "salir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "tener", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "valer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }, // 'valer' no está en tu lista, pero es un ejemplo común
                    { verbo: "venir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "decir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "hacer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            }
        ],
        gameCategories: [
            { id: 'zona-regular', nombre: 'Regulares ✅', typeMatch: 'Regular' },
            { id: 'zona-irregulari', nombre: 'Irregulares ✨', typeMatch: 'Irregularidad radical' }
        ]
    },
    "presente de subjuntivo": {
        titulo: "Irregularidades del Presente de Subjuntivo",
        descripcion: "Las irregularidades en el presente de subjuntivo suelen reflejar las del presente de indicativo (primera persona del singular).",
        tiposIrregularidad: [
            {
                nombre: "Verbos Regulares",
                descripcion: "Se forman a partir de la primera persona del singular del presente de indicativo regular (e.g., 'hablo' -> 'hable').",
                icono: "✅",
                verbosEjemplo: [
                    { verbo: "hablar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "comer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "vivir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "andar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "aprender", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "bajar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cantar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cenar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "comprar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cubrir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "desayunar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "girar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "gustar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "imprimir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "leer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "levantar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "perder", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }, // Bota
                    { verbo: "romper", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "terminar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "viajar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            },
            {
                nombre: "Verbos de Bota (E > IE)",
                descripcion: "Mantienen la irregularidad de E > IE del presente de indicativo.",
                icono: "👢",
                verbosEjemplo: [
                    { verbo: "querer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cerrar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "empezar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "entender", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "sentir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            },
            {
                nombre: "Verbos de Bota (O > UE)",
                descripcion: "Mantienen la irregularidad de O > UE del presente de indicativo.",
                icono: "👢",
                verbosEjemplo: [
                    { verbo: "poder", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "dormir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "volver", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "encontrar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "jugar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "morir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "hervir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            },
            {
                nombre: "Verbos de Bota (E > I)",
                descripcion: "Mantienen la irregularidad de E > I del presente de indicativo.",
                icono: "👢",
                verbosEjemplo: [
                    { verbo: "pedir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "servir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "freír", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "repetir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            },
            {
                nombre: "Verbos de Sombrero",
                descripcion: "Los verbos irregulares en la primera persona del singular del presente de indicativo, tienen raíces completamente irregulares en todo el presente de subjuntivo.",
                icono: "🎩",
                verbosEjemplo: [
                    { verbo: "hacer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "poner", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "decir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "tener", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "venir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "conocer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "conducir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "nacer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "traer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "salir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "saber", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "caber", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "ver", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }, // 'ver' es sombrero en presente de subjuntivo
                    { verbo: "dar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }, // 'dar' es sombrero en presente de subjuntivo
                    { verbo: "haber", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] } // 'haber' es sombrero en presente de subjuntivo
                ]
            },
            {
                nombre: "Irregularidad total",
                descripcion: "Estos verbos tienen irregularidades especiales en el presente de subjuntivo y no siguen las reglas de formación generales.",
                icono: "✨",
                verbosEjemplo: [
                    { verbo: "ir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "ser", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            }
        ],
        gameCategories: [
            { id: 'zona-regular', nombre: 'Regulares ✅', typeMatch: 'Regular' },
            { id: 'zona-irregular', nombre: 'Irregulares ✨', typeMatch: 'Irregular'}
            /*{ id: 'sombrero', nombre: 'Verbos de Sombrero 🎩', typeMatch: 'Sombrero' },
            { id: 'irregularidad-total', nombre: 'Irregularidad Total ✨', typeMatch: 'Irregularidad total' }*/
        ]
    },
    "imperfecto de subjuntivo": {
        titulo: "Irregularidades del Imperfecto de Subjuntivo",
        descripcion: "El imperfecto de subjuntivo se forma a partir de la tercera persona del plural del pretérito indefinido de indicativo, por lo que hereda sus irregularidades.",
        tiposIrregularidad: [
            {
                nombre: "Verbos Regulares",
                descripcion: "Se forman regularmente a partir de la tercera persona del plural del indefinido eliminando solo el final -on y sustituyendolo por las terminaciones del imperfecto de subjuntivo (-ra o -se).",
                icono: "✅",
                verbosEjemplo: [
                    { verbo: "hablar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "comer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "vivir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "aprender", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "bajar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cantar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cenar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "comprar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "cubrir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "desayunar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "girar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "gustar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "hervir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }, // Irregularidad radical
                    { verbo: "imprimir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "levantar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "nacer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "perder", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "romper", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "terminar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "viajar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "jugar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            },
            {
                nombre: "Irregularidad radical (heredada del indefinido)",
                descripcion: "Mantienen la irregularidad en la raíz heredada del indefinido eliminando solo el final -on y sustituyendolo por las terminaciones del imperfecto de subjuntivo (-ra o -se).",
                icono: "📖💡🔄",
                verbosEjemplo: [
                    
                    { verbo: "ir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "estar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "tener", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "poder", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "venir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "hacer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "querer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "decir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "traer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "conducir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "dormir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "morir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "pedir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "sentir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "caber", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "freír", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "dar", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "saber", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "haber", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            },
            {
                nombre: "Cambio Ortográfico (heredada del indefinido)",
                descripcion: "Verbos que presentan un cambio en la ortografía heredada de la tercera persona del plural en indefinido para mantener el sonido de la raíz.",
                icono: "✍️",
                verbosEjemplo: [
                    { verbo: "leer", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            },
            {
                nombre: "Irregularidad total (heredada del indefinido)",
                descripcion: "Verbos con irregularidad total heredada del indefinido.",
                icono: "✨",
                verbosEjemplo: [
                    { verbo: "ir", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] },
                    { verbo: "ser", personas: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] }
                ]
            }
        ],
        gameCategories: [
            { id: 'zona-regular', nombre: 'Regulares ✅', typeMatch: 'Regular' },
            { id: 'zona-irregularidad-radical', nombre: 'Irregularidad radical 📖🔄', typeMatch: 'Irregularidad radical' },
            { id: 'zona-cambio-ortografico', nombre: 'Cambio Ortográfico ✍️', typeMatch: 'Cambio ortográfico' },
            { id: 'zona-irregularidad-total', nombre: 'Irregularidad Total ✨', typeMatch: 'Irregularidad total' }
        ]
    },
    "pluscuamperfecto de subjuntivo": {
        titulo: "Irregularidades del Participio Pasado (Formación)",
        descripcion: "El pluscuamperfecto de subjuntivo se forma con 'haber' en imperfecto de subjuntivo y el participio pasado del verbo principal. Algunos participios son irregulares.",
        tiposIrregularidad: [
            {
                nombre: "Participio Irregular",
                descripcion: "El participio no sigue la regla de -ado/-ido. Hay que memorizarlos.",
                icono: "🧠",
                verbosEjemplo: [
                    { verbo: "hacer", personas: [ "yo" ] },
                    { verbo: "decir", personas: [  "yo" ] },
                    { verbo: "ver", personas: [  "yo"  ] },
                    { verbo: "escribir", personas: [  "yo"  ] },
                    { verbo: "cubrir", personas: [  "yo"  ] },
                    { verbo: "freír", personas: [  "yo"  ] },
                    { verbo: "imprimir", personas: [  "yo"  ] },
                    { verbo: "morir", personas: [  "yo"  ] },
                    { verbo: "romper", personas: [  "yo"  ] },
                    { verbo: "poner", personas: [  "yo"  ] }
                ]
            },
            {
                nombre: "Participio Regular",
                descripcion: "Formado con 'haber' en imperfecto de subjuntivo (regular o irregular) más el participio regular del verbo principal.",
                icono: "✅",
                verbosEjemplo: [
                    { verbo: "hablar", participio: ["participio"] },
                    { verbo: "comer", participio: ["participio"] },
                    { verbo: "vivir", participio: ["participio"] },
                    { verbo: "deber", participio: ["participio"] },
                    { verbo: "andar", participio: ["participio"] },
                    { verbo: "aprender", participio: ["participio"] },
                    { verbo: "bajar", participio: ["participio"] },
                    { verbo: "cantar", participio: ["participio"] },
                    { verbo: "cenar", participio: ["participio"] },
                    { verbo: "comprar", participio: ["participio"] },
                    { verbo: "conducir", participio: ["participio"] },
                    { verbo: "desayunar", participio: ["participio"] },
                    { verbo: "construir", participio: ["participio"] },
                    { verbo: "lucir", participio: ["participio"] },
                    { verbo: "destruir", participio: ["participio"] },
                    { verbo: "traducir", participio: ["participio"] },
                    { verbo: "girar", participio: ["participio"] },
                    { verbo: "gustar", participio: ["participio"] },
                    { verbo: "hervir", participio: ["participio"] },
                    { verbo: "leer", participio: ["participio"] },
                    { verbo: "levantar", participio: ["participio"] },
                    { verbo: "nacer", participio: ["participio"] },
                    { verbo: "perder", participio: ["participio"] },
                    { verbo: "terminar", participio: ["participio"] },
                    { verbo: "viajar", participio: ["participio"] },
                    { verbo: "traer", participio: ["participio"] },
                    { verbo: "salir", participio: ["participio"] },
                    { verbo: "venir", participio: ["participio"] },
                    { verbo: "pedir", participio: ["participio"] },
                    { verbo: "dormir", participio: ["participio"] },
                    { verbo: "jugar", participio: ["participio"] }
                ]
            }
        ],
        gameCategories: [
            { id: 'zona-regular', nombre: 'Participio Regular ✅', typeMatch: 'Regular' },
            { id: 'zona-participio-irregular', nombre: 'Participio Irregular 🧠', typeMatch: 'Participio Irregular' }
        ]
    }
};