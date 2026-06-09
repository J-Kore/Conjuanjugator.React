// actividades_indefinido_imperfecto.js
// actividad "antes o después"
// --- Preguntas para la actividad de "Indefinido o Imperfecto" ---
// Las preguntas y opciones fueron modificadas para usar solo "antes de" y "después de".
// actividades_indefinido_imperfecto.js

export const actividadesIndefinidoImperfectoData = {
    // Actividad "Todo o una parte" (Mantenemos esta parte igual que en la última versión)
    'todo_o_una_parte': {
        titulo: "Actividad: TODO O UNA PARTE (Verbo ESTAR)",
        instrucciones: "Completa cada frase con la forma correcta del verbo 'estar' (Indefinido o Imperfecto) y la persona adecuada según el contexto.",
        explicacionUso: {
            titulo: "Uso de ESTAR (Todo o una Parte)",
            secciones: [
                {
                    subtitulo: "Imperfecto (Una parte del proceso / Nos situamos DENTRO)",
                    texto: "Se usa cuando nos situamos *dentro* de un proceso o duración en el pasado. Describe un estado que estaba en progreso en un momento dado, o una cualidad temporal que era el contexto.",
                    ejemplo: "A las 9 de la mañana yo <strong>estaba</strong> durmiendo. (Me sitúo en un punto dentro del proceso de dormir). En el año 2002 todavía mi hermana <strong>estaba</strong> estudiando en la universidad. (Me sitúo en un punto dentro de ese periodo de estudio)."
                },
                {
                    subtitulo: "Indefinido (Todo el proceso / Nos situamos DESPUÉS)",
                    texto: "Se usa cuando nos situamos *después* de que un proceso o duración se ha completado. Indica que el estado o ubicación tuvo un principio y un fin definidos. Se usa frecuentemente con expresiones de duración total como: *toda la mañana, cinco minutos, durante tres años, toda la tarde, todo el día, dos días, hasta las 7, tres veces, mucho tiempo*, etc.",
                    ejemplo: "Yo <strong>estuve</strong> durmiendo toda la mañana. (El proceso de dormir de la mañana ya terminó). Mi hermana <strong>estuvo</strong> estudiando cinco años en la universidad, desde el año 2000 hasta el año 2005. (El periodo de estudio ya concluyó)."
                }
            ]
        },
        preguntas: [
            { id: 1, fraseConHueco: "A las 9 de la mañana yo ____ durmiendo.", respuestaCorrecta: "estaba", explicacionCorrecta: "Se usa 'estaba' (imperfecto) porque nos situamos *dentro* del proceso de dormir a esa hora específica. Es una 'parte' de un proceso continuo." },
            { id: 2, fraseConHueco: "Yo ____ durmiendo toda la mañana.", respuestaCorrecta: "estuve", explicacionCorrecta: "Se usa 'estuve' (indefinido) porque la acción de dormir abarcó 'toda la mañana' y el proceso ya se completó." },
            { id: 3, fraseConHueco: "En 2002 todavía mi hermana ____ estudiando en la universidad.", respuestaCorrecta: "estaba", explicacionCorrecta: "Se usa 'estaba' (imperfecto) porque nos situamos en un punto *dentro* del periodo de estudio en la universidad." },
            { id: 4, fraseConHueco: "Mi hermana ____ estudiando cinco años en la universidad, de 2000 a 2005.", respuestaCorrecta: "estuvo", explicacionCorrecta: "Se usa 'estuve' (indefinido) porque se indica la duración *total y completada* del estudio en la universidad." },
            { id: 5, fraseConHueco: "La fiesta ____ muy animada cuando llegamos.", respuestaCorrecta: "estaba", explicacionCorrecta: "Se usa 'estaba' (imperfecto) para describir el ambiente de la fiesta *en el momento* en que llegamos. Es el contexto o una 'parte' de la duración de la fiesta." },
            { id: 6, fraseConHueco: "La fiesta ____ animada hasta la medianoche.", respuestaCorrecta: "estuvo", explicacionCorrecta: "Se usa 'estuvo' (indefinido) porque se indica que el estado de 'animada' duró hasta un punto *final y definido* ('hasta la medianoche'). Se describe el 'todo' de esa fase." },
            { id: 7, fraseConHueco: "Nosotros ____ en la playa toda la tarde.", respuestaCorrecta: "estuvimos", explicacionCorrecta: "Se usa 'estuvimos' (indefinido) porque la acción de estar en la playa abarcó la *duración total* ('toda la tarde') y ya se completó." },
            { id: 8, fraseConHueco: "El equipo ____ perdiendo cuando el entrenador hizo los cambios.", respuestaCorrecta: "estaba", explicacionCorrecta: "Se usa 'estaba' (imperfecto) porque describe el estado del equipo *en el momento* en que ocurrieron los cambios. Es el contexto o una 'parte' de una acción puntual (hacer los cambios)." },
            { id: 9, fraseConHueco: "Ellos ____ muy cansados después de trabajar dos días seguidos.", respuestaCorrecta: "estuvieron", explicacionCorrecta: "Se usa 'estuvieron' (indefinido) porque el cansancio fue el resultado de un periodo *total y completado* de trabajo ('dos días seguidos')." },
            { id: 10, fraseConHueco: "Mi coche ____ averiado en la carretera cuando la grúa llegó.", respuestaCorrecta: "estaba", explicacionCorrecta: "Se usa 'estaba' (imperfecto) para describir el estado del coche *en el momento* de la llegada de la grúa. Es el contexto o una 'parte' de la situación." },
            { id: 11, fraseConHueco: "____ lloviendo mucho durante mi viaje a Galicia.", respuestaCorrecta: "estuvo", explicacionCorrecta: "Se usa 'estuvo' (indefinido) para indicar que el estado de llover abarcó la *totalidad* del viaje, un periodo definido con un principio y un fin." },
            { id: 12, fraseConHueco: "Ayer, a las cinco de la tarde, Pedro ____ jugando al fútbol.", respuestaCorrecta: "estaba", explicacionCorrecta: "Se usa 'estaba' (imperfecto) para describir una acción en progreso en un momento específico en el pasado. Nos sitúa *dentro* del momento en que Pedro jugaba." },
            { id: 13, fraseConHueco: "Pedro ____ jugando al fútbol durante tres horas seguidas.", respuestaCorrecta: "estuvo", explicacionCorrecta: "Se usa 'estuvo' (indefinido) para indicar la *duración total y completada* de la acción de jugar al fútbol." },
            { id: 14, fraseConHueco: "Cuando te vi, ____ pensando en lo que me dijiste.", respuestaCorrecta: "estaba", explicacionCorrecta: "Se usa 'estaba' (imperfecto) para describir una acción mental que estaba en progreso *en el momento* en que la otra acción (verte) sucedió. Es un contexto." },
            { id: 15, fraseConHueco: "Ella ____ enferma durante unos días después del viaje.", respuestaCorrecta: "estuvo", explicacionCorrecta: "Se usa 'estuvo' (indefinido) porque se describe un estado de enfermedad que tuvo una *duración definida y limitada* ('durante unos días') y que ya terminó." },
            { id: 16, fraseConHueco: "Mientras la profesora ____ explicando la lección, un alumno levantó la mano.", respuestaCorrecta: "estaba", explicacionCorrecta: "Se usa 'estaba' (imperfecto) para describir una acción continua que servía de *fondo o contexto* para otra acción puntual ('levantó la mano')." },
            { id: 17, fraseConHueco: "La película ____ muy interesante desde el principio hasta el final.", respuestaCorrecta: "estuvo", explicacionCorrecta: "Se usa 'estuvo' (indefinido) para indicar que el estado de 'muy interesante' abarcó la *totalidad* de la película, un periodo con principio y fin." },
            { id: 18, fraseConHueco: "Cuando llegamos, la mesa ya ____ puesta.", respuestaCorrecta: "estaba", explicacionCorrecta: "Se usa 'estaba' (imperfecto) para describir el estado de la mesa *en el momento* de la llegada. Es una situación preexistente que sirve de contexto." },
            { id: 19, fraseConHueco: "Los niños ____ de vacaciones durante todo el mes de julio.", respuestaCorrecta: "estuvieron", explicacionCorrecta: "Se usa 'estuvieron' (indefinido) porque se especifica la *duración completa y cerrada* de las vacaciones de los niños." },
            { id: 20, fraseConHueco: "El sol ____ brillando intensamente cuando salimos a pasear.", respuestaCorrecta: "estaba", explicacionCorrecta: "Se usa 'estaba' (imperfecto) para describir una condición meteorológica continua que servía de *contexto* para la acción de salir a pasear." },
            { id: 21, fraseConHueco: "Mi abuela ____ casada con mi abuelo por más de 60 años.", respuestaCorrecta: "estuvo", explicacionCorrecta: "Se usa 'estuvo' (indefinido) para indicar una situación (el matrimonio) que tuvo una *duración total y terminada* en el pasado." }
        ]
    },

    // Actividad "Antes o Después" (Ahora con la explicación y tus preguntas anidadas)
    'antes_o_despues': {
        titulo: "Actividad: ANTES O DESPUÉS (Imperfecto vs. Indefinido)",
        instrucciones: "Completa cada frase seleccionando la opción correcta ('antes de' o 'después de') según si la acción estaba en progreso o ya terminada.",
        
        // Explicación para "Antes o Después" (Esta sección es la que has proporcionado)
        explicacionUso: {
            titulo: "Uso de INDEFINIDO y IMPERFECTO (Antes o Después)",
            secciones: [
                {
                    subtitulo: "Imperfecto (Antes)",
                    texto: "Presentamos un hecho como no terminado todavía en un momento específico del pasado. Por esta razón decimos que es 'antes', porque nos situamos *antes de terminar la acción*, la acción no está terminada todavía en aquel momento.",
                    ejemplo: "Ayer a las cinco de la tarde todavía <strong>estaba estudiando</strong> o <strong>estudiaba</strong>. Cuando <strong>bajaba</strong> o <strong>estaba bajando</strong> la escalera escuché una alarma (mientras bajaba, antes de terminar de bajar)."
                },
                {
                    subtitulo: "Indefinido (Después)",
                    texto: "Presentamos ese proceso como ya terminado en aquel momento. Por esta razón decimos que es 'después', porque nos situamos *después de terminar la acción*, la acción ya está terminada en aquel momento.",
                    ejemplo: "Ayer <strong>estuve estudiando</strong> o <strong>estudié</strong> hasta las siete de la tarde. Cuando <strong>bajé</strong> la escalera escuché una alarma (después de terminar de bajar)."
                }
            ]
        },
        
        // Tus preguntas para la actividad "Antes o Después" (con opciones y explicaciones añadidas)
        preguntas: [
            {
                "pregunta": "- Bajaba la escalera y encontré el anillo. \nEncontré el anillo, \"_______\" terminar de bajar la escalera.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "antes de",
                "explicacion": "El anillo se encontró mientras la acción de bajar la escalera estaba en progreso, no terminada. Por lo tanto, fue 'antes de' que terminara de bajar."
            },
            {
                "pregunta": "- Cené y probé el helado. \nProbé el helado \"_______\" terminar de cenar.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "después de",
                "explicacion": "La acción de probar el helado ocurrió una vez que la cena ya había finalizado. Por lo tanto, fue 'después de' terminar de cenar."
            },
            {
                "pregunta": "- Estudiaba cuando me quedé dormido. \nMe quedé dormido \"_______\" terminar de estudiar.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "antes de",
                "explicacion": "Uno se quedó dormido mientras la acción de estudiar aún estaba en progreso. La acción de dormirse interrumpe el estudio, por lo que fue 'antes de' terminar."
            },
            {
                "pregunta": "- Me duché y después desayuné. \nDesayuné \"_______\" ducharme.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "después de",
                "explicacion": "El desayuno sucedió una vez que la ducha ya había concluido. Por lo tanto, fue 'después de' ducharme."
            },
            {
                "pregunta": "- Ella leía un libro cuando sonó el teléfono. \nSonó el teléfono \"_______\" que ella terminara de leer el libro.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "antes de",
                "explicacion": "El teléfono sonó mientras la acción de leer el libro aún estaba en progreso. La acción de sonar interrumpe la lectura, por lo que fue 'antes de' que terminara de leer."
            },
            {
                "pregunta": "- Iba a mi casa por la carretera y de repente vi un ciervo. \nVi un ciervo \"_______\" llegar a mi casa.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "antes de",
                "explicacion": "El ciervo fue visto mientras la persona aún se dirigía a casa; la acción de ir no había terminado. Por lo tanto, fue 'antes de' llegar a casa."
            },
            {
                "pregunta": "- Terminamos el proyecto y fuimos a celebrarlo. \nFuimos a celebrarlo \"_______\" terminar el proyecto.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "después de",
                "explicacion": "La celebración ocurrió una vez que el proyecto ya había sido completado y terminado. Por lo tanto, fue 'después de' terminar el proyecto."
            },
            {
                "pregunta": "- Estaba cocinando cuando escuché la campana. \nEscuché la campana \"_______\" terminar de cocinar.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "antes de",
                "explicacion": "La campana sonó mientras la acción de cocinar aún estaba en progreso, no terminada. Por lo tanto, fue 'antes de' que terminara de cocinar."
            },
            {
                "pregunta": "- Leyó el periódico y preparó la comida. \nPreparó la comida \"_______\" de leer el periódico.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "después de",
                "explicacion": "La preparación de la comida se realizó una vez que la lectura del periódico ya había finalizado. Por lo tanto, fue 'después de' leer el periódico."
            },
            {
                "pregunta": "- Empezó a llover cuando caminaba para casa. \nEmpezó a llover \"_______\" llegar a casa.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "antes de",
                "explicacion": "La lluvia comenzó mientras la persona aún caminaba hacia casa; la acción de caminar no había terminado. Por lo tanto, fue 'antes de' llegar a casa."
            },
            {
                "pregunta": "- Ramón encontró a Pedro y paseó con su perro. \nRamón paseó con su perro \"_______\" encontrar a Pedro.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "después de",
                "explicacion": "El paseo con el perro se realizó una vez que Ramón ya había encontrado a Pedro. Por lo tanto, fue 'después de' encontrar a Pedro."
            },
            {
                "pregunta": "- Se casaron el año pasado y se mudaron a una nueva ciudad. \nSe mudaron \"_______\" casarse.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "después de",
                "explicacion": "La mudanza a la nueva ciudad se realizó una vez que ya se habían casado. Por lo tanto, fue 'después de' casarse."
            },
            {
                "pregunta": "- Leía el periódico cuando alguien llamó a la puerta. \nAlguien llamó a la puerta \"_______\" terminar de leer el periódico.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "antes de",
                "explicacion": "La llamada a la puerta ocurrió mientras la acción de leer el periódico estaba en progreso, no terminada. Por lo tanto, fue 'antes de' que terminara de leer."
            },
            {
                "pregunta": "- Veía la tele cuando me quedé dormido. \nMe quedé dormido \"_______\" terminar de ver la tele.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "antes de",
                "explicacion": "Uno se quedó dormido mientras la acción de ver la tele aún estaba en progreso. La acción de dormirse interrumpe la de ver la tele, por lo que fue 'antes de' terminar."
            },
            {
                "pregunta": "- Trabajé y volví a casa. \nVolví a casa \"_______\" de trabajar.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "después de",
                "explicacion": "La acción de volver a casa ocurrió cuando terminó de trabajar. Por lo tanto, fue 'después de' terminar de trabajar."
            },
            {
                "pregunta": "- Conducía por la autopista cuando vi un accidente. \nVi un accidente \"_______\" llegar a mi destino.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "antes de",
                "explicacion": "El accidente fue visto mientras la acción de conducir por la autopista aún estaba en progreso, no terminada. Por lo tanto, fue 'antes de' llegar al destino."
            },
            {
                "pregunta": "- Desayuné y me lavé los dientes. \nMe lavé los dientes \"_______\" desayunar.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "después de",
                "explicacion": "La acción de lavarse los dientes sucedió una vez que el desayuno ya había concluido. Por lo tanto, fue 'después de' desayunar."
            },
            {
                "pregunta": "- Preparaba la cena cuando llegaron los invitados. \nLlegaron los invitados \"_______\" terminar de preparar la cena.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "antes de",
                "explicacion": "Los invitados llegaron mientras la acción de preparar la cena aún estaba en progreso, no terminada. Por lo tanto, fue 'antes de' que terminara de preparar la cena."
            },
            {
                "pregunta": "- Se graduó de la universidad y encontró un trabajo. \nEncontró un trabajo \"_______\" graduarse.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "después de",
                "explicacion": "La acción de encontrar un trabajo ocurrió una vez que la graduación de la universidad ya había finalizado. Por lo tanto, fue 'después de' graduarse."
            },
            {
                "pregunta": "- Iba de compras cuando me encontré con un amigo. \nMe encontré con un amigo \"_______\" terminar de ir de compras.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "antes de",
                "explicacion": "El encuentro con el amigo ocurrió mientras la acción de ir de compras aún estaba en progreso. Por lo tanto, fue 'antes de' terminar de ir de compras."
            },
            {
                "pregunta": "- Escribí la carta y la envié. \nEnvié la carta \"_______\" escribirla.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "después de",
                "explicacion": "La acción de enviar la carta se realizó una vez que la escritura de la misma ya había finalizado. Por lo tanto, fue 'después de' escribirla."
            },
            {
                "pregunta": "- Llovía cuando saqué al perro a pasear. \nSaqué al perro a pasear \"_______\" que dejara de llover.",
                "opciones": ["antes de", "después de"],
                "respuestaCorrecta": "antes de",
                "explicacion": "La acción de sacar al perro a pasear se realizó mientras la lluvia aún estaba en progreso, no terminada. Por lo tanto, fue 'antes de' que dejara de llover."
            }
            
        ]
    },
        

    // NUEVA Actividad: "¿Cómo era? o ¿Cómo fue?"
    'como_era_o_fue': {
        titulo: "Actividad: ¿CÓMO ERA? O ¿CÓMO FUE?",
        instrucciones: "Completa cada frase con la forma correcta del verbo 'SER' (Indefinido o Imperfecto) en tercera persona (singular o plural) según corresponda.",
        explicacionUso: {
            titulo: "Uso de SER (Era/Fueron) en el Pasado",
            secciones: [
                {
                    subtitulo: "Imperfecto (Era / Eran): Descripción",
                    texto: "Utilizamos el verbo 'SER' en **Imperfecto** (era / eran) para **describir en el pasado** a personas, animales, objetos, lugares, comida, situaciones, o características permanentes.",
                    ejemplo: "¿Cómo <strong>era</strong> tu casa en tu juventud? (Describe un lugar) / ¿Cómo <strong>eran</strong> tus compañeros de clase? (Describe personas)."
                },
                {
                    subtitulo: "Indefinido (Fue / Fueron): Eventos Completos",
                    texto: "Usamos el verbo 'SER' en **Indefinido** (fue / fueron) para describir en el pasado **eventos completos** o situaciones con un principio y un fin definidos, como un concierto, un día de trabajo, una reunión, un viaje, una clase de idiomas, una obra de teatro, unas vacaciones, etc. La razón es que hablamos del evento completo, de todo el evento como una unidad.",
                    ejemplo: "¿Cómo <strong>fue</strong> el concierto de anoche? (Describe un evento) / ¿Cómo <strong>fueron</strong> tus vacaciones el año pasado? (Describe un evento)."
                }
            ]
        },
        preguntas: [
            {"fraseConHueco": "¿Cómo ____ la fiesta de cumpleaños de Juan?", "respuestaCorrecta": "fue", "explicacion": "Se refiere a la fiesta como un evento completo, con principio y fin."},
            {"fraseConHueco": "¿Cómo ____ tus abuelos cuando eras niño?", "respuestaCorrecta": "eran", "explicacion": "Se describe a las personas de forma habitual en el pasado."},
            {"fraseConHueco": "¿Cómo ____ el clima durante tu estancia en la playa?", "respuestaCorrecta": "era", "explicacion": "Describe una condición o estado habitual o en progreso en el pasado."},
            {"fraseConHueco": "¿Cómo ____ el examen de historia que hicisteis?", "respuestaCorrecta": "fue", "explicacion": "Se refiere al examen como un evento o suceso completo."},
            {"fraseConHueco": "¿Cómo ____ la película que visteis anoche?", "respuestaCorrecta": "fue", "explicacion": "Describe la película como un evento o experiencia completa."},
            {"fraseConHueco": "¿Cómo ____ el concierto al que asististe?", "respuestaCorrecta": "fue", "explicacion": "Describe un evento musical completo."},
            {"fraseConHueco": "¿Cómo ____ tus vacaciones del verano pasado?", "respuestaCorrecta": "fueron", "explicacion": "Describe el evento completo de las vacaciones."},
            {"fraseConHueco": "¿Cómo ____ la reunión con el cliente?", "respuestaCorrecta": "fue", "explicacion": "Describe una reunión como un evento puntual y completo."},
            {"fraseConHueco": "¿Cómo ____ la ciudad de París antes de la Segunda Guerra Mundial?", "respuestaCorrecta": "era", "explicacion": "Describe una ciudad en un periodo del pasado."},
            {"fraseConHueco": "¿Cómo ____ la comida del restaurante italiano?", "respuestaCorrecta": "era", "explicacion": "Describe las características o cualidad de la comida."},
            {"fraseConHueco": "¿Cómo ____ tus primeras semanas de trabajo?", "respuestaCorrecta": "fueron", "explicacion": "Se refiere a una serie de eventos, las primeras semanas de trabajo. Además, hablamos de periodos completos"},
            {"fraseConHueco": "¿Cómo ____ tu profesora de español en la universidad?", "respuestaCorrecta": "era", "explicacion": "Describe una persona en el pasado."},
            {"fraseConHueco": "¿Cómo ____ el viaje por carretera?", "respuestaCorrecta": "fue", "explicacion": "Se refiere al viaje como un evento completo, con inicio y fin."},
            {"fraseConHueco": "¿Cómo ____ las normas del colegio en tu época?", "respuestaCorrecta": "eran", "explicacion": "Describe normas o reglas habituales en el pasado."},
            {"fraseConHueco": "¿Cómo ____ la entrega de premios?", "respuestaCorrecta": "fue", "explicacion": "Se refiere a la ceremonia como un evento completo."},
            {"fraseConHueco": "¿Cómo ____ la situación económica del país en los años 80?", "respuestaCorrecta": "era", "explicacion": "Describe una situación o estado prolongado en el pasado."},
            {"fraseConHueco": "¿Cómo ____ el partido de baloncesto de ayer?", "respuestaCorrecta": "fue", "explicacion": "Se refiere al partido como un evento deportivo completo y puntual."},
            {"fraseConHueco": "¿Cómo ____ la casa de tus abuelos en el pueblo?", "respuestaCorrecta": "era", "explicacion": "Describe las características de un lugar en el pasado."},
            {"fraseConHueco": "¿Cómo ____ tu primer día de clases?", "respuestaCorrecta": "fue", "explicacion": "Se refiere a un evento específico y completo: el primer día de clases."},
            {"fraseConHueco": "¿Cómo ____ los niños en tu época, más juguetones?", "respuestaCorrecta": "eran", "explicacion": "Describe una característica general o habitual de las personas en el pasado."},
            {"fraseConHueco": "¿Cómo ____ la inauguración del nuevo centro comercial?", "respuestaCorrecta": "fue", "explicacion": "Describe la inauguración como un evento completo y definido."},
            {"fraseConHueco": "¿Cómo ____ el agua del mar en aquella playa, fría?", "respuestaCorrecta": "era", "explicacion": "Describe una cualidad o condición del agua en el pasado."},
            {"fraseConHueco": "¿Cómo ____ los resultados de las elecciones?", "respuestaCorrecta": "fueron", "explicacion": "Se refiere a los resultados como un evento o un conjunto de hechos completos y definidos."},
            {"fraseConHueco": "¿Cómo ____ la moda en los años 90?", "respuestaCorrecta": "era", "explicacion": "Describe una tendencia o característica general de una época en el pasado."},
            {"fraseConHueco": "¿Cómo ____ tu conversación con el director?", "respuestaCorrecta": "fue", "explicacion": "Describe la conversación como un evento puntual y completo."},
            {"fraseConHueco": "¿Cómo ____ el clima en tu ciudad natal en invierno?", "respuestaCorrecta": "era", "explicacion": "Describe una condición climática habitual o general en el pasado."}

        ]
    }
    // ... (Si tienes más actividades en este archivo, continúan aquí) ...
}

