//Lista de verbos: hacer, ser, estar, ir, tener, haber, poder, decir, ver, dar, saber, llegar, pasar, deber, escribir, hablar, poner, empezar, encontrar, vivir, comer, beber, trabajar, estudiar, abrir, comprender, entender, conocer, caber, preferir, andar, aprender, bajar, cantar, cenar, comprar, conducir, cubrir, desayunar, freír, girar, gustar, hervir, imprimir, leer, levantar, morir, nacer, perder, romper, terminar, viajar, traer, salir, venir, pedir, jugar, caer, empezar, cerrar,  construir, huir, destruir, lucir, traducir, conducir, introducir, producir, valer, sentir, dormir, querer, volver.   


export const explicacionesVerbos = {
    "hacer": {
        significado: "Realizar una acción, crear o producir algo. Es un verbo muy versátil.",
        ejemplos: [
            "Yo <strong>hago</strong> mis deberes.",
            "Ella <strong>hace</strong> un pastel.",
            "Nosotros <strong>hicimos</strong> un viaje."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad en la raíz",
                tiempos: ["presente (Sombrero, solo cambia -yo-)", "indefinido", "futuro", "condicional", "presente de subjuntivo", "imperfecto de subjuntivo", "imperativo (tú)"],
                notas: "yo hago; hice, hizo; haré, haría; haga, hagas; hiciera/hiciese; haz"
            },
            {
                tipo: "Participio irregular",
                tiempos: ["tiempos compuestos"],
                notas: "hecho (no 'hacido')"
            }
        ],

        formasIrregularesYo: {
            "presente": "hago",
            "pretérito indefinido": "hice",
            "pretérito imperfecto": "hacía",
            "futuro": "haré",
            "condicional": "haría",
            "presente de subjuntivo": "haga",
            "imperfecto de subjuntivo": "hiciera"
        },
        participioIrregularForma: "hecho",
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "Participio Irregular",
        indefinidoTipoIrregular: "Irregularidad radical", // Simplificado
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Participio Irregular",
        futuroTipoIrregular: "Irregularidad radical", // Simplificado
        condicionalTipoIrregular: "Irregularidad radical", // Simplificado
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical", // Simplificado
        pluscuamperfectodesubjuntivoTipoIrregular: "Participio Irregular",
        traducciones: {
            ingles: "to do / to make",
            aleman: "machen / tun",
            frances: "faire"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>do</strong> my homework.",
                "She <strong>makes</strong> a cake.",
                "We <strong>made</strong> a trip."
            ],
            aleman: [
                "Ich <strong>mache</strong> meine Hausaufgaben.",
                "Sie <strong>macht</strong> einen Kuchen.",
                "Wir <strong>machten</strong> eine Reise."
            ],
            frances: [
                "Je <strong>fais</strong> mes devoirs.",
                "Elle <strong>fait</strong> un gâteau.",
                "Nous <strong>avons fait</strong> un voyage."
            ]
        }
    },
    "ser": {
        significado: "Identidad, características permanentes, origen, profesión, tiempo. (Verbo 'to be' en inglés para 'to be' permanente)",
        ejemplos: [
            "Yo <strong>soy</strong> estudiante.",
            "Ella <strong>es</strong> de España.",
            "Esto <strong>es</strong> un libro."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad total",
                tiempos: ["presente", "indefinido", "imperfecto", "presente de subjuntivo", "imperfecto de subjuntivo"],
                notas: "soy, eres; fui, fuiste (compartido con 'ir'); era, eras; sea, seas; fuera/fuese"
            }
        ],
        formasIrregularesYo: {
            "presente": "soy",
            "pretérito indefinido": "fui",
            "pretérito imperfecto": "era",
            "futuro": "seré",
            "condicional": "sería",
            "presente de subjuntivo": "sea",
            "imperfecto de subjuntivo": "fuera/fuese"
        },
        presenteTipoIrregular: "Irregularidad total", // Simplificado
        preteritoperfectoTipoIrregular: "sido", //es regular
        indefinidoTipoIrregular: "Irregularidad total", // Simplificado
        imperfectoTipoIrregular: "Irregularidad total", // Simplificado
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular", // Simplificado
        imperfectodesubjuntivoTipoIrregular: "Irregularidad total", // Simplificado
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to be (permanent)",
            aleman: "sein",
            frances: "être"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>am</strong> a student.",
                "She <strong>is</strong> from Spain."
            ],
            aleman: [
                "Ich <strong>bin</strong> Student.",
                "Sie <strong>ist</strong> aus Spanien."
            ],
            frances: [
                "Je <strong>suis</strong> étudiant.",
                "Elle <strong>est</strong> d'Espagne."
            ]
        }
    },
    "estar": {
        significado: "Ubicación, estados temporales, emociones, condiciones. (Verbo 'to be' en inglés para 'to be' temporal/location)",
        ejemplos: [
            "Yo <strong>estoy</strong> en casa.",
            "Ella <strong>está</strong> feliz.",
            "Nosotros <strong>estamos</strong> cansados."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad en primera persona del presente",
                tiempos: ["presente (yo)"],
                notas: "yo estoy"
            },
            {
                tipo: "Irregularidad radical",
                tiempos: ["indefinido", "imperfecto de subjuntivo"],
                notas: "estuve, estuvo; estuviera/estuviese"
            }
        ],
        formasIrregularesYo: {
            "presente": "estoy",
            "pretérito indefinido": "estuve",
            "pretérito imperfecto": "estaba",
            "futuro": "estaré",
            "condicional": "estaría",
            "presente de subjuntivo": "esté",
            "imperfecto de subjuntivo": "estuviera/estuviese"
        },
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "estado", //es regular
        indefinidoTipoIrregular: "Irregularidad radical", // Simplificado
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular", // Simplificado
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical", // Simplificado
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to be (temporary/location)",
            aleman: "sein (temporär/Ort)",
            frances: "être (temporaire/lieu)"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>am</strong> at home.",
                "She <strong>is</strong> happy."
            ],
            aleman: [
                "Ich <strong>bin</strong> zu Hause.",
                "Sie <strong>ist</strong> glücklich."
            ],
            frances: [
                "Je <strong>suis</strong> à la maison.",
                "Elle <strong>est</strong> contente."
            ]
        }
    },
    "ir": {
        significado: "Moverse de un lugar a otro.",
        ejemplos: [
            "Yo <strong>voy</strong> al parque.",
            "Ellos <strong>fueron</strong> al cine ayer."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad total",
                tiempos: ["presente", "indefinido", "imperfecto", "presente de subjuntivo", "imperfecto de subjuntivo"],
                notas: "voy, vas; fui, fuiste (compartido con 'ir'); iba, ibas; vaya, vayas; fuera/fuese"
            }
        ],
        formasIrregularesYo: {
            "presente": "voy",
            "pretérito indefinido": "fui",
            "pretérito imperfecto": "iba",
            "futuro": "iré",
            "condicional": "iría",
            "presente de subjuntivo": "vaya",
            "imperfecto de subjuntivo": "fuera/fuese"
        },
        presenteTipoIrregular: "Irregularidad total", // Simplificado
        preteritoperfectoTipoIrregular: "ido", //es regular
        indefinidoTipoIrregular: "Irregularidad total", // Simplificado
        imperfectoTipoIrregular: "Irregularidad total", // Simplificado
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular", // Simplificado
        imperfectodesubjuntivoTipoIrregular: "Irregularidad total", // Simplificado
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to go",
            aleman: "gehen",
            frances: "aller"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>go</strong> to the park.",
                "They <strong>went</strong> to the cinema yesterday."
            ],
            aleman: [
                "Ich <strong>gehe</strong> in den Park.",
                "Sie <strong>gingen</strong> gestern ins Kino."
            ],
            frances: [
                "Je <strong>vais</strong> au parc.",
                "Ils <strong>sont allés</strong> au cinéma hier."
            ]
        }
    },
    "tener": {
        significado: "Poseer algo, o experimentar una sensación o estado. También, tener una edad.",
        ejemplos: [
            "Yo <strong>tengo</strong> un coche.",
            "Ella <strong>tiene</strong> frío.",
            "Nosotros <strong>tenemos</strong> veinte años."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad radical",
                tiempos: ["presente (yo)", "indefinido", "futuro", "condicional", "presente de subjuntivo", "imperfecto de subjuntivo", "imperativo (tú)"],
                notas: "yo tengo; tuve, tuvo; tendré, tendría; tenga, tengas; tuviera/tuviese; ten"
            },
            {
                tipo: "Cambio vocálico",
                tiempos: ["presente", "presente de subjuntivo", "imperativo"],
                notas: "E > IE (excepto nosotros y vosotros)"
            }
        ],
        formasIrregularesYo: {
            "presente": "tengo",
            "pretérito indefinido": "tuve",
            "pretérito imperfecto": "tenía",
            "futuro": "tendré",
            "condicional": "tendría",
            "presente de subjuntivo": "tenga",
            "imperfecto de subjuntivo": "tuviera"
        },
        presenteTipoIrregular: "Bota y Sombrero", // Simplificado
        preteritoperfectoTipoIrregular: "tenido", //es regular
        indefinidoTipoIrregular: "Irregularidad radical", // Simplificado
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Irregularidad radical", // Simplificado
        condicionalTipoIrregular: "Irregularidad radical", // Simplificado
        presentedesubjuntivoTipoIrregular: "Irregular", // Simplificado
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical", // Simplificado
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to have",
            aleman: "haben",
            frances: "avoir"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>have</strong> a car.",
                "She <strong>is</strong> cold.",
                "We <strong>are</strong> twenty years old."
            ],
            aleman: [
                "Ich <strong>habe</strong> ein Auto.",
                "Sie <strong>hat</strong> kalt.",
                "Wir <strong>sind</strong> zwanzig Jahre alt."
            ],
            frances: [
                "J'<strong>ai</strong> une voiture.",
                "Elle <strong>a</strong> froid.",
                "Nous <strong>avons</strong> vingt ans."
            ]
        }
    },
    "haber": {
        significado: "Verbo auxiliar para tiempos compuestos (He comido). También significa 'existir' (Hay un libro).",
        ejemplos: [
            "Yo <strong>he comido</strong>.",
            "<strong>Hay</strong> mucha gente."
        ],
        esIrregular: true,
        irregularidades: [
           
            {
                tipo: "Irregularidad total (singular/plural)",
                tiempos: ["presente (impersonal)"],
                notas: "hay (para 'there is/are')"
            },
            {
                tipo: "Irregularidad radical",
                tiempos: ["indefinido", "presente de subjuntivo", "imperfecto de subjuntivo", "futuro", "condicional"],
                notas: "hube, hubiste; haya, hayas; hubiera/hubiese; habré, habrás; habría, habrías"
            },
        ],
        formasIrregularesYo: {
            "presente": "he", // para "yo he"
            "pretérito indefinido": "hube",
            "pretérito imperfecto": "había",
            "futuro": "habré",
            "condicional": "habría",
            "presente de subjuntivo": "haya",
            "imperfecto de subjuntivo": "hubiera/hubiese"
        },
        participioIrregularForma: "habido",
        presenteTipoIrregular: "Irregularidad total",
        preteritoperfectoTipoIrregular: "habido", //es regular
        indefinidoTipoIrregular: "Irregularidad radical", // Simplificado
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Participio Irregular",
        futuroTipoIrregular: "Irregularidad radical", // Simplificado
        condicionalTipoIrregular: "Irregularidad radical", // Simplificado
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical", // Simplificado
        pluscuamperfectodesubjuntivoTipoIrregular: "Participio Irregular", // Simplificado
        traducciones: {
            ingles: "to have (auxiliary) / there to be",
            aleman: "haben (Hilfsverb) / es gibt",
            frances: "avoir (auxiliaire) / il y a"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>have eaten</strong>.",
                "<strong>There is</strong> a lot of people."
            ],
            aleman: [
                "Ich <strong>habe gegessen</strong>.",
                "<strong>Es gibt</strong> viele Leute."
            ],
            frances: [
                "J'<strong>ai mangé</strong>.",
                "<strong>Il y a</strong> beaucoup de monde."
            ]
        }
    },
    "poder": {
        significado: "Tener la capacidad o la posibilidad de hacer algo.",
        ejemplos: [
            "Yo <strong>puedo</strong> nadar.",
            "Él <strong>puede</strong> venir.",
            "Nosotros <strong>pudimos</strong> salir."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio vocálico",
                tiempos: ["presente", "presente de subjuntivo"],
                notas: "O > UE (excepto nosotros y vosotros)"
            },
            {
                tipo: "Irregularidad radical",
                tiempos: ["indefinido", "futuro", "condicional", "imperfecto de subjuntivo"],
                notas: "pude, pudo; podré, podría; pudiera, pudiese"
            }
        ],
        formasIrregularesYo: {
            "presente": "puedo",
            "pretérito indefinido": "pude",
            "pretérito imperfecto": "podía",
            "futuro": "podré",
            "condicional": "podría",
            "presente de subjuntivo": "pueda",
            "imperfecto de subjuntivo": "pudiera"
        },
        presenteTipoIrregular: "Bota", // Simplificado
        preteritoperfectoTipoIrregular: "podido", //es regular
        indefinidoTipoIrregular: "Irregularidad radical", // Simplificado
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Irregularidad radical", // Simplificado
        condicionalTipoIrregular: "Irregularidad radical", // Simplificado
        presentedesubjuntivoTipoIrregular: "Irregular", // Simplificado
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical", // Simplificado
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to be able to / can",
            aleman: "können",
            frances: "pouvoir"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>can</strong> swim.",
                "He <strong>can</strong> come.",
                "We <strong>were able to</strong> leave."
            ],
            aleman: [
                "Ich <strong>kann</strong> schwimmen.",
                "Er <strong>kann</strong> kommen.",
                "Wir <strong>konnten</strong> gehen."
            ],
            frances: [
                "Je <strong>peux</strong> nager.",
                "Il <strong>peut</strong> venir.",
                "Nous <strong>avons pu</strong> partir."
            ]
        }
    },
    "decir": {
        significado: "Expresar algo con palabras.",
        ejemplos: [
            "Yo <strong>digo</strong> la verdad.",
            "Ella <strong>dice</strong> un secreto.",
            "Nosotros <strong>dijimos</strong> hola."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad radical",
                tiempos: ["presente (yo)", "indefinido", "futuro", "condicional", "presente de subjuntivo", "imperfecto de subjuntivo", "imperativo (tú)"],
                notas: "yo digo; dije, dijo; diré, diría; diga, digas; dijera, dijese; di"
            },
            {
                tipo: "Participio irregular",
                tiempos: ["tiempos compuestos"],
                notas: "dicho (no 'decido')"
            }
        ],
        formasIrregularesYo: {
            "presente": "digo",
            "pretérito indefinido": "dije",
            "pretérito imperfecto": "decía",
            "futuro": "diré",
            "condicional": "diría",
            "presente de subjuntivo": "diga",
            "imperfecto de subjuntivo": "dijera"
        },
        participioIrregularForma: "dicho",
        presenteTipoIrregular: "Bota y Sombrero",
        preteritoperfectoTipoIrregular: "Participio Irregular",
        indefinidoTipoIrregular: "Irregularidad radical", // Simplificado
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Participio Irregular",
        futuroTipoIrregular: "Irregularidad radical", // Simplificado
        condicionalTipoIrregular: "Irregularidad radical", // Simplificado
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical", // Simplificado
        pluscuamperfectodesubjuntivoTipoIrregular: "Participio Irregular",
        traducciones: {
            ingles: "to say / to tell",
            aleman: "sagen / erzählen",
            frances: "dire"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>tell</strong> the truth.",
                "She <strong>tells</strong> a secret.",
                "We <strong>said</strong> hello."
            ],
            aleman: [
                "Ich <strong>sage</strong> die Wahrheit.",
                "Sie <strong>erzählt</strong> ein Geheimnis.",
                "Wir <strong>sagten</strong> Hallo."
            ],
            frances: [
                "Je <strong>dis</strong> la vérité.",
                "Elle <strong>dit</strong> un secret.",
                "Nous <strong>avons dit</strong> bonjour."
            ]
        }
    },
    "ver": {
        significado: "Percibir algo con los ojos.",
        ejemplos: [
            "Yo <strong>veo</strong> una película.",
            "¿<strong>Viste</strong> eso?"
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad en primera persona del presente (yo)",
                tiempos: ["presente (yo)"],
                notas: "yo veo"
            },
            {
                tipo: "Irregularidad en imperfecto de indicativo",
                tiempos: ["imperfecto"],
                notas: "veía, veías (no sigue el patrón regular de -aba, -ía para verbos en -er)"
            },
            {
                tipo: "Participio irregular",
                tiempos: ["tiempos compuestos"],
                notas: "visto (no 'viendo')"
            }
        ],
        formasIrregularesYo: {
            "presente": "veo",
            "pretérito indefinido": "vi",
            "pretérito imperfecto": "veía",
            "futuro": "veré",
            "condicional": "vería",
            "presente de subjuntivo": "vea",
            "imperfecto de subjuntivo": "viera/viese"
            
        },
        participioIrregularForma: "visto",
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "Participio Irregular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Mantiene Vocal (e)", // Simplificado
        pluscuamperfectoTipoIrregular: "Participio Irregular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Participio Irregular", // Simplificado
        traducciones: {
            ingles: "to see",
            aleman: "sehen",
            frances: "voir"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>see</strong> a movie.",
                "Did you <strong>see</strong> that?"
            ],
            aleman: [
                "Ich <strong>sehe</strong> einen Film.",
                "Hast du das <strong>gesehen</strong>?"
            ],
            frances: [
                "Je <strong>vois</strong> un film.",
                "As-tu <strong>vu</strong> ça?"
            ]
        }
    },
    "dar": {
        significado: "Entregar algo a alguien.",
        ejemplos: [
            "Yo te <strong>doy</strong> un regalo.",
            "Ella me <strong>dio</strong> el libro."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad en primera persona del presente",
                tiempos: ["presente (yo)"],
                notas: "yo doy"
            },
            {
                tipo: "Irregularidad en indefinido",
                tiempos: ["indefinido"],
                notas: "di, diste, dio (sin tilde en 'di')"
            },
            {
                tipo: "Irregularidad en presente de subjuntivo",
                tiempos: ["presente de subjuntivo"],
                notas: "dé, des (lleva tilde para diferenciar de la preposición 'de')"
            }
        ],
        formasIrregularesYo: {
            "presente": "doy",
            "pretérito indefinido": "di",
            "pretérito imperfecto": "daba",
            "futuro": "daré",
            "condicional": "daría",
            "presente de subjuntivo": "de",
            "imperfecto de subjuntivo": "diera/diese"
        },
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "dado", //es regular
        indefinidoTipoIrregular: "Cambio ortográfico", // Simplificado
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical", // Simplificado
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to give",
            aleman: "geben",
            frances: "donner"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>give</strong> you a gift.",
                "She <strong>gave</strong> me the book."
            ],
            aleman: [
                "Ich <strong>gebe</strong> dir ein Geschenk.",
                "Sie <strong>gab</strong> mir das Buch."
            ],
            frances: [
                "Je <strong>donne</strong> un cadeau.",
                "Elle <strong>a donné</strong> le livre."
            ]
        }
    },
    "saber": {
        significado: "Tener conocimiento de algo, o tener la habilidad para hacer algo.",
        ejemplos: [
            "Yo <strong>sé</strong> la respuesta.",
            "Ella <strong>sabe</strong> hablar francés."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad en primera persona del presente (yo)",
                tiempos: ["presente (yo)"],
                notas: "yo sé"
            },
            {
                tipo: "Irregularidad radical",
                tiempos: ["indefinido", "presente de subjuntivo", "imperfecto de subjuntivo"],
                notas: "supe, supiste; sepa, sepas; supiera/supiese"
            },
            {
                tipo: "Irregularidad en futuro/condicional (eliminación de vocal)",
                tiempos: ["futuro", "condicional"],
                notas: "sabré, sabrás; sabría, sabrías"
            }
        ],
        formasIrregularesYo: {
            "presente": "sé",
            "pretérito indefinido": "supe",
            "pretérito imperfecto": "sabía",
            "futuro": "sabré",
            "condicional": "sabría",
            "presente de subjuntivo": "sepa",
            "imperfecto de subjuntivo": "supiera/supiese"
        },
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Irregularidad radical", // Simplificado
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Irregularidad radical", // Simplificado
        condicionalTipoIrregular: "Irregularidad radical", // Simplificado
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical", // Simplificado
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to know (facts/skills)",
            aleman: "wissen / können",
            frances: "savoir"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>know</strong> the answer.",
                "She <strong>knows how to speak</strong> French."
            ],
            aleman: [
                "Ich <strong>weiß</strong> die Antwort.",
                "Sie <strong>kann</strong> Französisch sprechen."
            ],
            frances: [
                "Je <strong>sais</strong> la réponse.",
                "Elle <strong>sait</strong> parler français."
            ]
        }
    },
    "llegar": {
        significado: "Alcanzar un lugar o momento determinado.",
        ejemplos: [
            "Yo <strong>llego</strong> tarde.",
            "Ellos <strong>llegaron</strong> ayer."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio ortográfico (g>gu)",
                tiempos: ["presente de subjuntivo", "imperativo (tú)"],
                notas: "llegue, llegues; llega (mantiene el sonido 'g' suave)"
            },
            {
                tipo: "Cambio ortográfico (g>gu)",
                tiempos: ["indefinido (yo)"],
                notas: "yo llegué (mantiene el sonido 'g' suave)"
            }
        ],
        formasIrregularesYo: {
            "presente": "llego",
            "pretérito indefinido": "llegué",
            "pretérito imperfecto": "llegaba",
            "futuro": "llegaré",
            "condicional": "llegaría",
            "presente de subjuntivo": "llegue",
            "imperfecto de subjuntivo": "llegara/llegase"
        },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Cambio ortográfico", // Simplificado
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular", // Simplificado
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to arrive / to get",
            aleman: "ankommen",
            frances: "arriver"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>arrive</strong> late.",
                "They <strong>arrived</strong> yesterday."
            ],
            aleman: [
                "Ich <strong>komme</strong> zu spät an.",
                "Sie <strong>kamen</strong> gestern an."
            ],
            frances: [
                "J'<strong>arrive</strong> en retard.",
                "Ils <strong>sont allés</strong> au cinéma hier."
            ]
        }
    },
    "pasar": {
        significado: "Moverse de un lado a otro, transcurrir el tiempo, o suceder algo.",
        ejemplos: [
            "Yo <strong>paso</strong> por tu casa.",
            "¿Qué <strong>pasó</strong>?"
        ],
        esIrregular: false,
        irregularidades: [],
        formasIrregularesYo: {
            "presente": "paso",
            "pretérito indefinido": "pasé",
            "pretérito imperfecto": "pasaba",
            "futuro": "pasaré",
            "condicional": "pasaría",
            "presente de subjuntivo": "pase",
            "imperfecto de subjuntivo": "pasara/pasase"
        },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to pass / to happen",
            aleman: "vorbeigehen / passieren",
            frances: "passer / se passer"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>pass by</strong> your house.",
                "What <strong>happened</strong>?"
            ],
            aleman: [
                "Ich <strong>gehe</strong> an deinem Haus <strong>vorbei</strong>.",
                "Was <strong>passierte</strong>?"
            ],
            frances: [
                "Je <strong>passe</strong> par chez toi.",
                "Qu'est-ce qui s'<strong>est passé</strong>?"
            ]
        }
    },
    "deber": {
        significado: "Tener una obligación, o deber dinero.",
        ejemplos: [
            "Yo <strong>debo</strong> estudiar.",
            "Él me <strong>debe</strong> 10 euros."
        ],
        esIrregular: false,
        irregularidades: [],
        formasIrregularesYo: {
            "presente": "debo",
            "pretérito indefinido": "debí",
            "pretérito imperfecto": "debía",
            "futuro": "deberé",
            "condicional": "debería",
            "presente de subjuntivo": "deba",
            "imperfecto de subjuntivo": "debiera/debiese"
        },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "debido", //es regular
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "should / must / to owe",
            aleman: "sollen / müssen / schulden",
            frances: "devoir"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>should study</strong>.",
                "He <strong>owes</strong> me 10 euros."
            ],
            aleman: [
                "Ich <strong>soll</strong> studieren.",
                "Er <strong>schuldet</strong> mir 10 Euro."
            ],
            frances: [
                "Je <strong>dois</strong> étudier.",
                "Il me <strong>doit</strong> 10 euros."
            ]
        }
    },
    "escribir": {
        significado: "Representar ideas o palabras con letras o signos en una superficie.",
        ejemplos: [
            "Yo <strong>escribo</strong> una carta.",
            "Ella <strong>escribió</strong> un libro."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Participio irregular",
                tiempos: ["tiempos compuestos (e.g., pretérito perfecto)"],
                notas: "escrito (no 'escribido')"
            }
        ],
        formasIrregularesYo: {
            "presente": "escribo",
            "pretérito indefinido": "escribí",
            "pretérito imperfecto": "escribía",
            "futuro": "escribiré",
            "condicional": "escribiría",
            "presente de subjuntivo": "escriba",
            "imperfecto de subjuntivo": "escribiera/escribiese"
        },
        participioIrregularForma: "escrito",
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Participio Irregular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Participio Irregular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Participio Irregular", // Simplificado
        traducciones: {
            ingles: "to write",
            aleman: "schreiben",
            frances: "écrire"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>write</strong> a letter.",
                "She <strong>wrote</strong> a book."
            ],
            aleman: [
                "Ich <strong>schreibe</strong> einen Brief.",
                "Sie <strong>schrieb</strong> ein Buch."
            ],
            frances: [
                "J'<strong>écris</strong> una lettre.",
                "Elle <strong>a écrit</strong> un livre."
            ]
        }
    },
    "hablar": {
        significado: "Comunicarse con palabras.",
        ejemplos: [
            "Yo <strong>hablo</strong> español.",
            "Ellos <strong>hablaron</strong> por teléfono."
        ],
        esIrregular: false,
        irregularidades: [],
        formasIrregularesYo: {
            "presente": "hablo",
            "pretérito indefinido": "hablé",
            "pretérito imperfecto": "hablaba",
            "futuro": "hablaré",
            "condicional": "hablaría",
            "presente de subjuntivo": "hable",
            "imperfecto de subjuntivo": "hablara/hablase"
        },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to speak / to talk",
            aleman: "sprechen",
            frances: "parler"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>speak</strong> Spanish.",
                "They <strong>talked</strong> on the phone."
            ],
            aleman: [
                "Ich <strong>spreche</strong> Spanisch.",
                "Sie <strong>sprachen</strong> am Telefon."
            ],
            frances: [
                "Je <strong>parle</strong> español.",
                "Ils <strong>han hablado</strong> por teléfono."
            ]
        }
    },
    "poner": {
        significado: "Colocar algo en un lugar.",
        ejemplos: [
            "Yo <strong>pongo</strong> el libro en la mesa.",
            "Él <strong>puso</strong> la radio."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad en primera persona del presente (yo-go)",
                tiempos: ["presente (yo)"],
                notas: "yo pongo"
            },
            {
                tipo: "Irregularidad radical",
                tiempos: ["indefinido", "presente de subjuntivo", "imperfecto de subjuntivo"],
                notas: "puse, pusiste; ponga, pongas; pusiera/pusiese"
            },
            {
                tipo: "Irregularidad en futuro/condicional (d)",
                tiempos: ["futuro", "condicional"],
                notas: "pondré, pondrás; pondría, pondrías"
            },
            {
                tipo: "Participio irregular",
                tiempos: ["tiempos compuestos"],
                notas: "puesto"
            }
        ],
        formasIrregularesYo: {
            "presente": "pongo",
            "pretérito indefinido": "puse",
            "pretérito imperfecto": "ponía",
            "futuro": "pondré",
            "condicional": "pondría",
            "presente de subjuntivo": "ponga",
            "imperfecto de subjuntivo": "pusiera/pusiese"
        },
        participioIrregularForma: "puesto",
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "Participio Irregular",
        indefinidoTipoIrregular: "Irregularidad radical", // Simplificado
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Participio Irregular",
        futuroTipoIrregular: "Irregularidad radical", // Simplificado
        condicionalTipoIrregular: "Irregularidad radical", // Simplificado
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical", // Simplificado
        pluscuamperfectodesubjuntivoTipoIrregular: "Participio Irregular", // Simplificado
        traducciones: {
            ingles: "to put / to place",
            aleman: "legen / stellen",
            frances: "mettre"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>put</strong> the book on the table.",
                "He <strong>turned on</strong> the radio."
            ],
            aleman: [
                "Ich <strong>lege</strong> das Buch auf den Tisch.",
                "Er <strong>stellte</strong> das Radio an."
            ],
            frances: [
                "Je <strong>mets</strong> le livre sur la table.",
                "Il <strong>a mis</strong> la radio."
            ]
        }
    },
    "empezar": {
        significado: "Iniciar o comenzar algo.",
        ejemplos: [
            "La clase <strong>empieza</strong> a las nueve.",
            "Ella <strong>empezó</strong> a leer."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio vocálico (e>ie) - Bota",
                tiempos: ["presente", "presente de subjuntivo", "imperativo (tú)"],
                notas: "empiezo, empiezas; empiece, empieces; empieza"
            },
            {
                tipo: "Cambio ortográfico (z>c)",
                tiempos: ["presente de subjuntivo", "imperativo (usted/ustedes)"],
                notas: "empiece, empiecen (para mantener el sonido 's')"
            },
            {
                tipo: "Cambio ortográfico (z>c)",
                tiempos: ["indefinido (yo)"],
                notas: "yo empecé"
            }
        ],
        formasIrregularesYo: {
            "presente": "empiezo",
            "pretérito indefinido": "empecé",
            "pretérito imperfecto": "empezaba",
            "futuro": "empezaré",
            "condicional": "empezaría",
            "presente de subjuntivo": "empiece",
            "imperfecto de subjuntivo": "empezara/empezase"
        },
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Cambio ortográfico", // Simplificado
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular", // Simplificado
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to begin / to start",
            aleman: "beginnen / anfangen",
            frances: "commencer"
        },
        ejemplosTraducidos: {
            ingles: [
                "The class <strong>starts</strong> at nine.",
                "She <strong>began</strong> to read."
            ],
            aleman: [
                "Der Unterricht <strong>beginnt</strong> um neun.",
                "Sie <strong>begann</strong> zu lesen."
            ],
            frances: [
                "Le cours <strong>commence</strong> à neuf heures.",
                "Elle <strong>a commencé</strong> à lire."
            ]
        }
    },
    "encontrar": {
        significado: "Localizar algo o a alguien, o hallar una solución.",
        ejemplos: [
            "Yo <strong>encuentro</strong> mis llaves.",
            "Él <strong>encontró</strong> la respuesta."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio vocálico (o>ue) - Bota",
                tiempos: ["presente", "presente de subjuntivo", "imperativo (tú)"],
                notas: "encuentro, encuentras; encuentre, encuentres; encuentra"
            }
        ],
        formasIrregularesYo: {
            "presente": "encuentro",
            "pretérito indefinido": "encontré",
            "pretérito imperfecto": "encontraba",
            "futuro": "encontraré",
            "condicional": "encontraría",
            "presente de subjuntivo": "encuentre",
            "imperfecto de subjuntivo": "encontrara/encontrase"
        },
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular", // Simplificado
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to find",
            aleman: "finden",
            frances: "trouver"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>find</strong> my keys.",
                "He <strong>found</strong> the answer."
            ],
            aleman: [
                "Ich <strong>finde</strong> meine Schlüssel.",
                "Er <strong>fand</strong> die Antwort."
            ],
            frances: [
                "Je <strong>trouve</strong> mes clés.",
                "Il <strong>a trouvé</strong> la réponse."
            ]
        }
    },
    "vivir": {
        significado: "Tener vida, o residir en un lugar.",
        ejemplos: [
            "Yo <strong>vivo</strong> en Madrid.",
            "Ella <strong>vivió</strong> muchos años."
        ],
            
        esIrregular: false,
        irregularidades: [],

        formasIrregularesYo: {
            "presente": "vivo",
            "pretérito indefinido": "viví",
            "pretérito imperfecto": "vivía",
            "futuro": "viviré",
            "condicional": "viviría",
            "presente de subjuntivo": "viva",
            "imperfecto de subjuntivo": "viviera/viviese"
            },

        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to live",
            aleman: "leben / wohnen",
            frances: "vivre"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>live</strong> in Madrid.",
                "She <strong>lived</strong> many years."
            ],
            aleman: [
                "Ich <strong>lebe</strong> in Madrid.",
                "Sie <strong>lebte</strong> viele Jahre."
            ],
            frances: [
                "Je <strong>vis</strong> à Madrid.",
                "Elle <strong>a vécu</strong> de nombreuses années."
            ]
        }
    },
    "comer": {
        significado: "Ingerir alimentos.",
        ejemplos: [
            "Yo <strong>como</strong> una manzana.",
            "Ellos <strong>comieron</strong> pizza."
        ],
        esIrregular: false, 
        irregularidades: [],
        formasIrregularesYo: {
            "presente": "como",
            "pretérito indefinido": "comí",
            "pretérito imperfecto": "comía",
            "futuro": "comoeré",
            "condicional": "comería",
            "presente de subjuntivo": "coma",
            "imperfecto de subjuntivo": "comiera/comiese"
            },

        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to eat",
            aleman: "essen",
            frances: "manger"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>eat</strong> an apple.",
                "They <strong>ate</strong> pizza."
            ],
            aleman: [
                "Ich <strong>esse</strong> einen Apfel.",
                "Sie <strong>aßen</strong> Pizza."
            ],
            frances: [
                "Je <strong>mange</strong> una pomme.",
                "Ils <strong>han comido</strong> de la pizza."
            ]
        }
    },
    "beber": {
        significado: "Ingerir líquidos.",
        ejemplos: [
            "Yo <strong>bebo</strong> agua.",
            "Ella <strong>bebió</strong> un café."
        ],
        esIrregular: false,
        irregularidades: [],
        formasIrregularesYo: {
            "presente": "bebo",
            "pretérito indefinido": "bebí",
            "pretérito imperfecto": "bebía",
            "futuro": "beberé",
            "condicional": "bebería",
            "presente de subjuntivo": "beba",
            "imperfecto de subjuntivo": "bebiera/bebiese"
            },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to drink",
            aleman: "trinken",
            frances: "boire"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>drink</strong> water.",
                "She <strong>drank</strong> a coffee."
            ],
            aleman: [
                "Ich <strong>trinke</strong> Wasser.",
                "Sie <strong>trank</strong> einen Kaffee."
            ],
            frances: [
                "Je <strong>bois</strong> de l'eau.",
                "Elle <strong>a bu</strong> un café."
            ]
        }
    },
    "trabajar": {
        significado: "Realizar una actividad con esfuerzo para conseguir un fin.",
        ejemplos: [
            "Yo <strong>trabajo</strong> en una oficina.",
            "Él <strong>trabajó</strong> mucho ayer."
        ],
        esIrregular: false,
        irregularidades: [],
        formasIrregularesYo: {
            "presente": "trabajo",
            "pretérito indefinido": "trabajé",
            "pretérito imperfecto": "trabajaba",
            "futuro": "trabajaré",
            "condicional": "trabajaría",
            "presente de subjuntivo": "trabaje",
            "imperfecto de subjuntivo": "trabajara/trabajase"
            },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to work",
            aleman: "arbeiten",
            frances: "travailler"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>work</strong> in an office.",
                "He <strong>worked</strong> a lot yesterday."
            ],
            aleman: [
                "Ich <strong>arbeite</strong> in einem Büro.",
                "Er <strong>arbeitete</strong> gestern viel."
            ],
            frances: [
                "Je <strong>travaille</strong> dans un bureau.",
                "Il <strong>a travaillé</strong> beaucoup hier."
            ]
        }
    },
    "estudiar": {
        significado: "Dedicar esfuerzo a aprender o comprender algo.",
        ejemplos: [
            "Yo <strong>estudio</strong> español.",
            "Ellos <strong>estudiaron</strong> para el examen."
        ],
        esIrregular: false,
        irregularidades: [],
        formasIrregularesYo: {
            "presente": "estudio",
            "pretérito indefinido": "estudié",
            "pretérito imperfecto": "estudiaba",
            "futuro": "estudiaré",
            "condicional": "estudiaría",
            "presente de subjuntivo": "estudie",
            "imperfecto de subjuntivo": "estudiara/estudiase"
            },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to study",
            aleman: "studieren / lernen",
            frances: "étudier"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>study</strong> Spanish.",
                "They <strong>studied</strong> for the exam."
            ],
            aleman: [
                "Ich <strong>studiere</strong> Spanisch.",
                "Sie <strong>lernten</strong> für die Prüfung."
            ],
            frances: [
                "J'<strong>étudie</strong> l'espagnol.",
                "Ils <strong>han estudiado</strong> para el examen."
            ]
        }
    },
    "abrir": {
        significado: "Mover algo de manera que deje de cubrir o cerrar.",
        ejemplos: [
            "Yo <strong>abro</strong> la puerta.",
            "Ella <strong>abrió</strong> la ventana."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Participio irregular",
                tiempos: ["tiempos compuestos (e.g., pretérito perfecto)"],
                notas: "abierto (no 'abrido')"
            }
        ],
        formasIrregularesYo: {
            "presente": "abro",
            "pretérito indefinido": "abrí",
            "pretérito imperfecto": "abría",
            "futuro": "abriré",
            "condicional": "abriría",
            "presente de subjuntivo": "abra",
            "imperfecto de subjuntivo": "abriera/abriese"
        },
        participioIrregularForma: "abierto",
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Participio Irregular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Participio Irregular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Participio Irregular", // Simplificado
        traducciones: {
            ingles: "to open",
            aleman: "öffnen",
            frances: "ouvrir"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>open</strong> the door.",
                "She <strong>opened</strong> the window."
            ],
            aleman: [
                "Ich <strong>öffne</strong> die Tür.",
                "Sie <strong>öffnete</strong> das Fenster."
            ],
            frances: [
                "J'<strong>ouvre</strong> la porte.",
                "Elle <strong>a ouvert</strong> la fenêtre."
            ]
        }
    },
    "comprender": {
        significado: "Entender o captar el significado de algo.",
        ejemplos: [
            "Yo <strong>comprendo</strong> la lección.",
            "Ella no <strong>comprendió</strong> la broma."
        ],
        esIrregular: false,
        irregularidades: [],
        formasIrregularesYo: {
            "presente": "comprenso",
            "pretérito indefinido": "comprendí",
            "pretérito imperfecto": "comprendía",
            "futuro": "comprederé",
            "condicional": "comprendería",
            "presente de subjuntivo": "comprenda",
            "imperfecto de subjuntivo": "comprendiera/comprendiese"
            },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to understand / to comprehend",
            aleman: "verstehen",
            frances: "comprendre"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>understand</strong> the lesson.",
                "She did not <strong>understand</strong> the joke."
            ],
            aleman: [
                "Ich <strong>verstehe</strong> die Lektion.",
                "Sie <strong>verstand</strong> den Witz nicht."
            ],
            frances: [
                "Ich <strong>verstehe</strong> die Lektion.",
                "Sie <strong>verstand</strong> den Witz nicht."
            ]
        }
    },
    "entender": { // Sinónimo de comprender, pero con su propia entrada para mayor claridad
        significado: "Entender, captar el sentido de algo.",
        ejemplos: [
            "¿<strong>Entiendes</strong> lo que digo?",
            "Él <strong>entendió</strong> el problema."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio vocálico (e>ie) - Bota",
                tiempos: ["presente", "presente de subjuntivo", "imperativo (tú)"],
                notas: "entiendo, entiendes; entienda, entiendas; entiende"
            }
        ],
        formasIrregularesYo: {
            "presente": "entiendo",
                "pretérito indefinido": "entendí",
                "pretérito imperfecto": "entendía",
                "futuro": "entenderé",
                "condicional": "entendería",
                "presente de subjuntivo": "entienda",
                "imperfecto de subjuntivo": "entendiera/entendiese"
            },
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular", // Simplificado
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to understand",
            aleman: "verstehen",
            frances: "comprendre"
        },
        ejemplosTraducidos: {
            ingles: [
                "Do you <strong>understand</strong> what I say?",
                "He <strong>understood</strong> the problem."
            ],
            aleman: [
                "<strong>Verstehst</strong> du, what ich sage?",
                "Er <strong>verstand</strong> das Problema."
            ],
            frances: [
                "<strong>Comprends</strong>-tu ce que je dis?",
                "Il <strong>a compris</strong> le problème."
            ]
        }
    },
    "conocer": {
        significado: "Tener conocimiento o información sobre personas, lugares o cosas. (No se usa para habilidades o hechos).",
        ejemplos: [
            "Yo <strong>conozco</strong> a María.",
            "Ella <strong>conoce</strong> bien Madrid."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad en primera persona del presente (yo-go)",
                tiempos: ["presente (yo)"],
                notas: "yo conozco (terminación en '-zco')"
            },
            {
                tipo: "Irregularidad en presente de subjuntivo",
                tiempos: ["presente de subjuntivo"],
                notas: "conozca, conozcas (se mantiene la '-zc-' en todas las personas)"
            }
        ],
        formasIrregularesYo: {
            "presente": "conozco",
                "pretérito indefinido": "conocí",
                "pretérito imperfecto": "conocía",
                "futuro": "conoceré",
                "condicional": "conocería",
                "presente de subjuntivo": "conozca",
                "imperfecto de subjuntivo": "conociera/conociese"
            },
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular", // Simplificado
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to know (people/places/be familiar with)",
            aleman: "kennen",
            frances: "connaître"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>know</strong> Maria.",
                "She <strong>knows</strong> Madrid well."
            ],
            aleman: [
                "Ich <strong>kenne</strong> Maria.",
                "Sie <strong>kennt</strong> Madrid gut."
            ],
            frances: [
                "Je <strong>connais</strong> Maria.",
                "Elle <strong>connaît</strong> bien Madrid."
            ]
        }
    },
    "caber": {
        significado: "Tener espacio suficiente para entrar o ser contenido en un lugar. También, ser posible o admisible.",
        ejemplos: [
            "No <strong>caben</strong> más libros en la estantería.",
            "Yo no <strong>quepo</strong> en ese coche.",
            "No <strong>cabe</strong> duda de que es cierto."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad radical y en primera persona del presente (yo-go)",
                tiempos: ["presente (yo)"],
                notas: "yo quepo"
            },
            {
                tipo: "Irregularidad radical",
                tiempos: ["indefinido", "imperfecto de subjuntivo"],
                notas: "cupe, cupiste; cupiera/cupiese"
            },
            {
                tipo: "Irregularidad en futuro/condicional (d)",
                tiempos: ["futuro", "condicional"],
                notas: "cabré, cabrás; cabría, cabrías"
            },
            {
                tipo: "Irregularidad en presente de subjuntivo",
                tiempos: ["presente de subjuntivo"],
                notas: "quepa, quepas (mantiene la irregularidad de la primera persona del presente)"
            }
        ],
        formasIrregularesYo: {
            "presente": "quepo",
            "pretérito indefinido": "cupe",
            "pretérito imperfecto": "cabía",
            "futuro": "cabré",
            "condicional": "cabría",
            "presente de subjuntivo": "quepa",
            "imperfecto de subjuntivo": "cupiera/cupiese"
        },
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Irregularidad radical", // Simplificado
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrular: "Irregularidad radical", // Simplificado
        condicionalTipoIrregular: "Irregularidad radical", // Simplificado
        presentedesubjuntivoTipoIrregular: "Irregular", // Simplificado
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical", // Simplificado
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to fit / to be room for",
            aleman: "passen / Platz haben",
            frances: "tenir / y avoir de la place"
        },
        ejemplosTraducidos: {
            ingles: [
                "There isn't room for more books on the shelf.",
                "I don't <strong>fit</strong> in that car.",
                "There is no doubt that it's true."
            ],
            aleman: [
                "Es <strong>passen</strong> keine weiteren Bücher ins Regal.",
                "Ich <strong>passe</strong> nicht in dieses Auto.",
                "Es <strong>gibt</strong> keinen Zweifel, dass es stimmt."
            ],
            frances: [
                "Il n'y a plus de place pour les livres sur l'étagère.",
                "Je ne <strong>tiens</strong> pas dans cette voiture.",
                "Il ne <strong>fait</strong> aucun doute que c'est vrai."
            ]
        }
    },
    "preferir": {
        significado: "Dar la preferencia a algo o alguien, seleccionar algo antes que otra cosa.",
        ejemplos: [
            "Yo <strong>prefiero</strong> el café al té.",
            "Ellos <strong>prefieren</strong> ir al cine mañana.",
            "Siempre <strong>he preferido</strong> la playa a la montaña."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio vocálico (e > ie)",
                tiempos: ["presente", "presente de subjuntivo", "imperativo"],
                notas: "La 'e' de la raíz cambia a 'ie' en ciertas personas (todas excepto nosotros y vosotros en presente e imperativo, y todas en presente de subjuntivo)."
            },
            {
                tipo: "Cambio vocálico en 3ª persona (e > i)",
                tiempos: ["indefinido", "imperfecto de subjuntivo", "gerundio"],
                notas: "La 'e' de la raíz cambia a 'i' en 3ª persona singular y plural del pretérito indefinido, imperfecto de subjuntivo y en el gerundio (prefiriendo)."
            }
        ],
        formasIrregularesYo: {
            "presente": "prefiero",
            "presente de subjuntivo": "prefiera",
            "pretérito indefinido": "él prefirió",
            "pretérito imperfecto": "prefería",
            "futuro": "preferiré",
            "condicional": "preferiría",
            "imperfecto de subjuntivo": "prefiriera/prefiriese"
            

        },
        presenteTipoIrregular: "Bota", // Simplificado
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Cambio vocálico 3ª persona", // Simplificado
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular", // Simplificado
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical", // Simplificado
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to prefer",
            aleman: "bevorzugen",
            frances: "préférer"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>prefer</strong> coffee to tea.",
                "They <strong>prefer</strong> to go to the cinema tomorrow.",
                "I have always <strong>preferred</strong> the beach to the mountains."
            ],
            aleman: [
                "Ich <strong>bevorzuge</strong> Kaffee statt Tee.",
                "Sie <strong>bevorzugen</strong> es, morgen ins Kino zu gehen.",
                "Ich habe den Strand schon immer den Bergen <strong>vorgezogen</strong>."
            ],
            frances: [
                "Je <strong>préfère</strong> le café au thé.",
                "Ils <strong>préfèrent</strong> aller au cinéma demain.",
                "J'ai toujours <strong>préféré</strong> la plage à la montagne."
            ]
        }
    },
    "andar": {
        significado: "Moverse de un lugar a otro dando pasos.",
        ejemplos: [
            "Yo <strong>ando</strong> por el parque.",
            "Ella <strong>anduvo</strong> mucho ayer.",
            "Nosotros <strong>andaremos</strong> por la montaña."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad radical",
                tiempos: ["indefinido", "imperfecto de subjuntivo"],
                notas: "anduve, anduviste; anduviera/anduviese"
            }
        ],
        formasIrregularesYo: {
            "presente": "ando",
            "pretérito indefinido": "anduve",
            "pretérito imperfecto": "andaba",
            "futuro": "andaré",
            "condicional": "andaría", 
            "presente de subjuntivo": "ande",
            "imperfecto de subjuntivo": "anduviera/anduviese"
        },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Irregularidad radical",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to walk",
            aleman: "gehen / laufen",
            frances: "marcher"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>walk</strong> in the park.",
                "She <strong>walked</strong> a lot yesterday.",
                "We <strong>will walk</strong> in the mountains."
            ],
            aleman: [
                "Ich <strong>gehe</strong> im Park.",
                "Sie <strong>ging</strong> gestern viel.",
                "Wir <strong>werden</strong> in den Bergen <strong>wandern</strong>."
            ],
            frances: [
                "Je <strong>marche</strong> dans le parc.",
                "Elle <strong>a beaucoup marché</strong> hier.",
                "Nous <strong>marcherons</strong> en montagne."
            ]
        }
    },
    "aprender": {
        significado: "Adquirir conocimiento o habilidad de algo por el estudio o la experiencia.",
        ejemplos: [
            "Yo <strong>aprendo</strong> español.",
            "Ella <strong>aprendió</strong> a cocinar.",
            "Nosotros <strong>aprenderemos</strong> mucho."
        ],
        esIrregular: false,
        irregularidades: [],
        formasIrregularesYo: {
            "presente": "aprendo",
            "pretérito indefinido": "aprendí",
            "pretérito imperfecto": "aprendía",
            "futuro": "aprenderé",
            "condicional": "aprendería",
            "presente de subjuntivo": "aprenda",
            "imperfecto de subjuntivo": "aprendiera/aprendiese"
            },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to learn",
            aleman: "lernen",
            frances: "apprendre"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>learn</strong> Spanish.",
                "She <strong>learned</strong> to cook.",
                "We <strong>will learn</strong> a lot."
            ],
            aleman: [
                "Ich <strong>lerne</strong> Spanisch.",
                "Sie <strong>lernte</strong> kochen.",
                "Wir <strong>werden</strong> viel <strong>lernen</strong>."
            ],
            frances: [
                "J'<strong>apprends</strong> l'espagnol.",
                "Elle <strong>a appris</strong> à cuisiner.",
                "Nous <strong>apprendrons</strong> beaucoup."
            ]
        }
    },
    "bajar": {
        significado: "Moverse de un lugar alto a uno más bajo.",
        ejemplos: [
            "Yo <strong>bajo</strong> las escaleras.",
            "Él <strong>bajó</strong> del coche.",
            "Ellos <strong>bajaron</strong> la música."
        ],
        esIrregular: false,
        irregularidades: [],
        formasIrregularesYo: {
            "presente": "bajo",
            "pretérito indefinido": "bajé",
            "pretérito imperfecto": "bajaba",
            "futuro": "bajaré",
            "condicional": "bajaría",
            "presente de subjuntivo": "baje",
            "imperfecto de subjuntivo": "bajara/bajase"
            },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to go down / to lower",
            aleman: "heruntergehen / senken",
            frances: "descendre / baisser"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>go down</strong> the stairs.",
                "He <strong>got out</strong> of the car.",
                "They <strong>turned down</strong> the music."
            ],
            aleman: [
                "Ich <strong>gehe</strong> die Treppe <strong>hinunter</strong>.",
                "Er <strong>stieg</strong> aus dem Auto <strong>aus</strong>.",
                "Sie <strong>drehten</strong> die Musik <strong>leiser</strong>."
            ],
            frances: [
                "Je <strong>descends</strong> les escaliers.",
                "Il <strong>est descendu</strong> de la voiture.",
                "Ils <strong>ont baissé</strong> la musique."
            ]
        }
    },
    "cantar": {
        significado: "Producir sonidos melodiosos con la voz.",
        ejemplos: [
            "Yo <strong>canto</strong> en el coro.",
            "Ella <strong>cantó</strong> una canción.",
            "Nosotros <strong>cantaremos</strong> en la fiesta."
        ],

        formasIrregularesYo: {
            "presente": "canto",
            "pretérito indefinido": "canté",
            "pretérito imperfecto": "cantaba",
            "futuro": "cantaré",
            "condicional": "cantaría",
            "presente de subjuntivo": "cante",
            "imperfecto de subjuntivo": "cantara/cantase"
        },
        esIrregular: false,
        irregularidades: [],
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to sing",
            aleman: "singen",
            frances: "chanter"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>sing</strong> in the choir.",
                "She <strong>sang</strong> a song.",
                "We <strong>will sing</strong> at the party."
            ],
            aleman: [
                "Ich <strong>singe</strong> im Chor.",
                "Sie <strong>sang</strong> ein Lied.",
                "Wir <strong>werden</strong> auf der Party <strong>singen</strong>."
            ],
            frances: [
                "Je <strong>chante</strong> dans la chorale.",
                "Elle <strong>a chanté</strong> una canción.",
                "Nous <strong>chanterons</strong> à la fête."
            ]
        }
    },
    "cenar": {
        significado: "Tomar la última comida del día, por la noche.",
        ejemplos: [
            "Yo <strong>ceno</strong> a las ocho.",
            "Ellos <strong>cenaron</strong> en un restaurante.",
            "¿Qué <strong>cenaremos</strong> hoy?"
        ],
        esIrregular: false,
        irregularidades: [],
        formasIrregularesYo: {
            "presente": "ceno",
            "pretérito indefinido": "cené",
            "pretérito imperfecto": "cenaba",
            "futuro": "cenaré",
            "condicional": "cenaría",
            "presente de subjuntivo": "cene",
            "imperfecto de subjuntivo": "cenara/cenase"
            },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "cenado",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to have dinner",
            aleman: "zu Abend essen",
            frances: "dîner"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>have dinner</strong> at eight.",
                "They <strong>had dinner</strong> in a restaurant.",
                "What <strong>will we have for dinner</strong> today?"
            ],
            aleman: [
                "Ich <strong>esse</strong> um acht <strong>zu Abend</strong>.",
                "Sie <strong>aßen</strong> in einem Restaurant <strong>zu Abend</strong>.",
                "Was <strong>werden</strong> wir heute <strong>zu Abend essen</strong>?"
            ],
            frances: [
                "Je <strong>dîne</strong> à huit heures.",
                "Ils <strong>ont dîné</strong> au restaurant.",
                "Que <strong>dînerons</strong>-nous aujourd'hui?"
            ]
        }
    },
    "comprar": {
        significado: "Adquirir algo a cambio de dinero.",
        ejemplos: [
            "Yo <strong>compro</strong> ropa nueva.",
            "Ella <strong>compró</strong> un libro.",
            "Nosotros <strong>compraremos</strong> comida."
        ],
        esIrregular: false,
        irregularidades: [],
        formasIrregularesYo: {
            "presente": "compro",
            "pretérito indefinido": "compré",
            "pretérito imperfecto": "compraba",
            "futuro": "compraré",
            "condicional": "compraría",
            "presente de subjuntivo": "compre",
            "imperfecto de subjuntivo": "comprara/comprase"
            },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "comprado",//es regular
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to buy",
            aleman: "kaufen",
            frances: "acheter"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>buy</strong> new clothes.",
                "She <strong>bought</strong> a book.",
                "We <strong>will buy</strong> food."
            ],
            aleman: [
                "Ich <strong>kaufe</strong> neue Kleidung.",
                "Sie <strong>kaufte</strong> ein Buch.",
                "Wir <strong>werden</strong> Essen <strong>kaufen</strong>."
            ],
            frances: [
                "J'<strong>achète</strong> de nouveaux vêtements.",
                "Elle <strong>a acheté</strong> un livre.",
                "Nous <strong>achèterons</strong> de la nourriture."
            ]
        }
    },
    "conducir": {
        significado: "Manejar un vehículo o dirigir algo.",
        ejemplos: [
            "Yo <strong>conduzco</strong> un coche.",
            "Él <strong>condujo</strong> a casa.",
            "Ella <strong>conduce</strong> bien."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad en primera persona del presente (yo-zco)",
                tiempos: ["presente (yo)"],
                notas: "yo conduzco"
            },
            {
                tipo: "Irregularidad radical",
                tiempos: ["indefinido", "presente de subjuntivo", "imperfecto de subjuntivo"],
                notas: "conduje, condujiste; conduzca, conduzcas; condujera/condujese"
            }
        ],
        formasIrregularesYo: {
            "presente": "conduzco",
            "pretérito indefinido": "conduje",
            "pretérito imperfecto": "conducía",
            "futuro": "conduciré",
            "condicional": "conduciría",
            "presente de subjuntivo": "conduzca",
            "imperfecto de subjuntivo": "condujera/condujese"
        },
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Irregularidad radical",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to drive / to lead",
            aleman: "fahren / führen",
            frances: "conduire / mener"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>drive</strong> a car.",
                "He <strong>drove</strong> home.",
                "She <strong>drives</strong> well."
            ],
            aleman: [
                "Ich <strong>fahre</strong> ein Auto.",
                "Er <strong>fuhr</strong> nach Hause.",
                "Sie <strong>fährt</strong> gut."
            ],
            frances: [
                "Je <strong>conduis</strong> une voiture.",
                "Il <strong>a conduit</strong> à la maison.",
                "Elle <strong>conduit</strong> bien."
            ]
        }
    },
    "cubrir": {
        significado: "Poner algo encima de otra cosa para taparla o protegerla.",
        ejemplos: [
            "Yo <strong>cubro</strong> la mesa.",
            "La nieve <strong>cubrió</strong> las montañas.",
            "Ella <strong>ha cubierto</strong> el pastel."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Participio irregular",
                tiempos: ["tiempos compuestos"],
                notas: "cubierto (no 'cubrido')"
            }
        ],
        formasIrregularesYo: {
            "presente": "cubro",
            "pretérito indefinido": "cubrí",
            "pretérito imperfecto": "cubría",
            "futuro": "cubriré",
            "condicional": "cubriría",
            "presente de subjuntivo": "cubra",
            "imperfecto de subjuntivo": "cubriera/cubriese"
            },
        participioIrregularForma: "cubierto",
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Participio Irregular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Participio Irregular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Participio Irregular",
        traducciones: {
            ingles: "to cover",
            aleman: "decken / bedecken",
            frances: "couvrir"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>cover</strong> the table.",
                "Snow <strong>covered</strong> the mountains.",
                "She <strong>has covered</strong> the cake."
            ],
            aleman: [
                "Ich <strong>decke</strong> den Tisch.",
                "Schnee <strong>bedeckte</strong> die Berge.",
                "Sie <strong>hat</strong> den Kuchen <strong>bedeckt</strong>."
            ],
            frances: [
                "Je <strong>couvre</strong> la table.",
                "La neige <strong>a couvert</strong> les montagnes.",
                "Elle <strong>a couvert</strong> le gâteau."
            ]
        }
    },
    "desayunar": {
        significado: "Tomar la primera comida del día, por la mañana.",
        ejemplos: [
            "Yo <strong>desayuno</strong> café y tostadas.",
            "Ellos <strong>desayunaron</strong> temprano.",
            "¿Qué <strong>desayunarás</strong> mañana?"
        ],
        esIrregular: false,
        irregularidades: [],
        formasIrregularesYo: {
            "presente": "desayuno",
            "pretérito indefinido": "desayuné",
            "pretérito imperfecto": "desayunaba",
            "futuro": "desayunaré",
            "condicional": "desayunarías",
            "presente de subjuntivo": "desayune",
            "imperfecto de subjuntivo": "desayunara/desayunase"
            },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to have breakfast",
            aleman: "frühstücken",
            frances: "déjeuner"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>have breakfast</strong> with coffee and toast.",
                "They <strong>had breakfast</strong> early.",
                "What <strong>will you have for breakfast</strong> tomorrow?"
            ],
            aleman: [
                "Ich <strong>frühstücke</strong> Kaffee und Toast.",
                "Sie <strong>frühstückten</strong> früh.",
                "Was <strong>wirst</strong> du morgen <strong>frühstücken</strong>?"
            ],
            frances: [
                "Je <strong>déjeune</strong> avec du café et des toasts.",
                "Ils <strong>ont déjeuné</strong> tôt.",
                "Que <strong>déjeuneras</strong>-tu demain?"
            ]
        }
    },
    "freír": {
        significado: "Cocinar un alimento en aceite o grasa hirviendo.",
        ejemplos: [
            "Yo <strong>frío</strong> patatas.",
            "Ella <strong>frió</strong> pescado.",
            "Nosotros <strong>freiremos</strong> huevos."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Participio irregular",
                tiempos: ["tiempos compuestos"],
                notas: "frito"
            },
            {
                tipo: "Cambio vocálico (Bota: e > i)",
                tiempos: ["presente", "presente de subjuntivo", "imperativo"],
                notas: "La 'e' de la raíz cambia a 'i' en ciertas personas (todas excepto nosotros y vosotros en presente e imperativo, y todas en presente de subjuntivo)."
            },
            {
                tipo: "Cambio vocálico en 3ª persona (e > i)",
                tiempos: ["indefinido", "imperfecto de subjuntivo", "gerundio"],
                notas: "La 'e' de la raíz cambia a 'i' en 3ª persona singular y plural del pretérito indefinido, imperfecto de subjuntivo y en el gerundio (friendo)."
            }
        ],
        formasIrregularesYo: {
            "presente": "frío",
            "pretérito indefinido": "él frió",
            "pretérito imperfecto": "freía",
            "futuro": "freiré",
            "condicional": "freiría",
            "presente de subjuntivo": "fría",
            "imperfecto de subjuntivo": "friera/friese"
            },
        participioIrregularForma: "frito", // Se usa la forma más común
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "Participio Irregular",
        indefinidoTipoIrregular: "Cambio vocálico 3ª persona",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Participio Irregular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Participio Irregular",
        traducciones: {
            ingles: "to fry",
            aleman: "braten / frittieren",
            frances: "frire"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>fry</strong> potatoes.",
                "She <strong>fried</strong> fish.",
                "We <strong>will fry</strong> eggs."
            ],
            aleman: [
                "Ich <strong>brate</strong> Kartoffeln.",
                "Sie <strong>braten</strong> Fisch.",
                "Wir <strong>werden</strong> Eier <strong>braten</strong>."
            ],
            frances: [
                "Je <strong>fais frire</strong> des pommes de terre.",
                "Elle <strong>a fait frire</strong> du poisson.",
                "Nous <strong>ferons frire</strong> des œufs."
            ]
        }
    },
    "girar": {
        significado: "Moverse o hacer que algo se mueva alrededor de un eje o centro.",
        ejemplos: [
            "La Tierra <strong>gira</strong> alrededor del sol.",
            "Él <strong>giró</strong> a la derecha.",
            "El viento hace <strong>girar</strong> las aspas."
        ],
        esIrregular: false,
        irregularidades: [],
        formasIrregularesYo: {
            "presente": "giro",
            "pretérito indefinido": "giré",
            "pretérito imperfecto": "giraba",
            "futuro": "giraré",
            "condicional": "giraría",
            "presente de subjuntivo": "gire",
            "imperfecto de subjuntivo": "girara/girase"
            },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to turn / to spin",
            aleman: "drehen / sich drehen",
            frances: "tourner"
        },
        ejemplosTraducidos: {
            ingles: [
                "The Earth <strong>revolves</strong> around the sun.",
                "He <strong>turned</strong> right.",
                "The wind makes the blades <strong>spin</strong>."
            ],
            aleman: [
                "Die Erde <strong>dreht sich</strong> um die Sonne.",
                "Er <strong>bog</strong> rechts <strong>ab</strong>.",
                "Der Wind <strong>lässt</strong> die Flügel <strong>drehen</strong>."
            ],
            frances: [
                "La Terre <strong>tourne</strong> autour du soleil.",
                "Il <strong>a tourné</strong> à droite.",
                "Le vent <strong>fait tourner</strong> les pales."
            ]
        }
    },
    "gustar": {
        significado: "Agradar o complacer a alguien. (Se usa de forma difernte a otros verbos. No se conjuga el verbo (siempre en 3ª persona, singular 'el helado' o plural 'los helados') se conjugan los pronombres (me, te, le, nos, os, les)).",
        ejemplos: [
            "Me <strong>gusta</strong> el chocolate.",
            "A ellos les <strong>gustó</strong> la película.",
            "Nos <strong>gustaría</strong> viajar."
        ],
        esIrregular: false,
        irregularidades: [],

        formasIrregularesYo: {
            "presente": "me gusta",
            "pretérito indefinido": "me gustó",
            "pretérito imperfecto": "me gustaba",
            "futuro": "me gustará",
            "condicional": "me gustaría",
            "presente de subjuntivo": "me guste",
            "imperfecto de subjuntivo": "me gustara/me gustase"
            },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to like",
            aleman: "mögen / gefallen",
            frances: "aimer / plaire"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>like</strong> chocolate.",
                "They <strong>liked</strong> the movie.",
                "We <strong>would like</strong> to travel."
            ],
            aleman: [
                "Ich <strong>mag</strong> Schokolade.",
                "Ihnen <strong>gefiel</strong> der Film.",
                "Wir <strong>würden</strong> gerne reisen."
            ],
            frances: [
                "J'<strong>aime</strong> le chocolat.",
                "Ils <strong>ont aimé</strong> le film.",
                "Nous <strong>aimerions</strong> voyager."
            ]
        }
    },
    "hervir": {
        significado: "Alcanzar un líquido la temperatura de ebullición.",
        ejemplos: [
            "El agua <strong>hierve</strong>.",
            "Ella <strong>hirvió</strong> la leche.",
            "El café está <strong>hirviendo</strong>."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio vocálico (e>ie) - Bota",
                tiempos: ["presente", "presente de subjuntivo", "imperativo (tú)"],
                notas: "hiervo, hierves; hierva, hiervas; hierve"
            },
            {
                tipo: "Cambio vocálico (e>i)",
                tiempos: ["indefinido (3ª persona)", "imperfecto de subjuntivo", "gerundio"],
                notas: "hirvió, hirvieron; hirviera/hirviese; hirviendo"
            }
        ],
        formasIrregularesYo: {
            "presente": "hiervo",
            "pretérito indefinido": "él hirvió",
            "pretérito imperfecto": "hervía",
            "futuro": "herviré",
            "condicional": "herviría",
            "presente de subjuntivo": "hierva",
            "imperfecto de subjuntivo": "hirviera/hirviese"
        },
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Cambio vocálico 3ª persona",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to boil",
            aleman: "kochen / sieden",
            frances: "bouillir"
        },
        ejemplosTraducidos: {
            ingles: [
                "The water <strong>boils</strong>.",
                "She <strong>boiled</strong> the milk.",
                "The coffee is <strong>boiling</strong>."
            ],
            aleman: [
                "Das Wasser <strong>kocht</strong>.",
                "Sie <strong>kochte</strong> die Milch.",
                "Der Kaffee <strong>kocht</strong>."
            ],
            frances: [
                "L'eau <strong>bout</strong>.",
                "Elle <strong>a fait bouillir</strong> le lait.",
                "Le café <strong>bout</strong>."
            ]
        }
    },
    "imprimir": {
        significado: "Reproducir textos o imágenes en papel u otro material.",
        ejemplos: [
            "Yo <strong>imprimo</strong> documentos.",
            "Él <strong>imprimió</strong> las fotos.",
            "Necesito <strong>imprimir</strong> mi billete."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Participio irregular (doble forma)",
                tiempos: ["tiempos compuestos"],
                notas: "impreso (más común) y freído (regular, menos común)"
            }
        ],
        formasIrregularesYo: {
            "presente": "imprimo",
            "pretérito indefinido": "imprimí",
            "pretérito imperfecto": "imprimía",
            "futuro": "imprimiré",
            "condicional": "imprimiría",
            "presente de subjuntivo": "imprima",
            "imperfecto de subjuntivo": "imprimiera/imprimiese"
            },
        participioIrregularForma: "impreso", // Se usa la forma más común
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Participio Irregular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Participio Irregular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Participio Irregular",
        traducciones: {
            ingles: "to print",
            aleman: "drucken",
            frances: "imprimer"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>print</strong> documents.",
                "He <strong>printed</strong> the photos.",
                "I need to <strong>print</strong> my ticket."
            ],
            aleman: [
                "Ich <strong>drucke</strong> Dokumente.",
                "Er <strong>druckte</strong> die Fotos.",
                "Ich muss mein Ticket <strong>drucken</strong>."
            ],
            frances: [
                "J'<strong>imprime</strong> des documents.",
                "Il <strong>a imprimé</strong> les photos.",
                "J'ai besoin d'<strong>imprimer</strong> mon billet."
            ]
        }
    },
    "leer": {
        significado: "Interpretar y comprender el sentido de un texto o imagen.",
        ejemplos: [
            "Yo <strong>leo</strong> un libro.",
            "Ella <strong>leyó</strong> el periódico.",
            "Nosotros <strong>leeremos</strong> un cuento."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio ortográfico (i>y)",
                tiempos: ["imperfecto de subjuntivo", "gerundio"],
                notas: "leyera/leyese; leyendo (para evitar diptongo 'ió' en 'ió')"
            },
            {
                tipo: "Cambio en 3ª persona(i>y)",
                tiempos: ["indefinido (3ª persona)"],
                notas: "leyó, leyeron"
            }
        ],
        formasIrregularesYo: {
            "presente": "leo",
            "pretérito indefinido": "él leyó",
            "pretérito imperfecto": "leía",
            "futuro": "leeré",
            "condicional": "leería", 
            "presente de subjuntivo": "lea",
            "imperfecto de subjuntivo": "leyera/leyese"
        },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Cambio vocálico 3ª persona",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to read",
            aleman: "lesen",
            frances: "lire"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>read</strong> a book.",
                "She <strong>read</strong> the newspaper.",
                "We <strong>will read</strong> a story."
            ],
            aleman: [
                "Ich <strong>lese</strong> ein Buch.",
                "Sie <strong>las</strong> die Zeitung.",
                "Wir <strong>werden</strong> eine Geschichte <strong>lesen</strong>."
            ],
            frances: [
                "Je <strong>lis</strong> un livre.",
                "Elle <strong>a lu</strong> le journal.",
                "Nous <strong>lirons</strong> una historia."
            ]
        }
    },
    "levantar": {
        significado: "Mover algo de abajo hacia arriba; poner algo en posición vertical.",
        ejemplos: [
            "Yo <strong>levanto</strong> la mano.",
            "Él <strong>levantó</strong> la caja.",
            "Ella se <strong>levantó</strong> temprano."
        ],
        esIrregular: false,
        irregularidades: [],
        formasIrregularesYo: {
            "presente": "levanto",
            "pretérito indefinido": "levanté",
            "pretérito imperfecto": "levantaba",
            "futuro": "levantaré",
            "condicional": "levantaría",
            "presente de subjuntivo": "levante",
            "imperfecto de subjuntivo": "levantara/levantase"
            },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to lift / to raise / to get up",
            aleman: "heben / aufstehen",
            frances: "lever / se lever"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>raise</strong> my hand.",
                "He <strong>lifted</strong> the box.",
                "She <strong>got up</strong> early."
            ],
            aleman: [
                "Ich <strong>hebe</strong> die Hand.",
                "Er <strong>hob</strong> die Kiste.",
                "Sie <strong>stand</strong> früh <strong>auf</strong>."
            ],
            frances: [
                "Je <strong>lève</strong> la main.",
                "Il <strong>a levé</strong> la boîte.",
                "Elle <strong>s'est levée</strong> tôt."
            ]
        }
    },
    "morir": {
        significado: "Dejar de vivir.",
        ejemplos: [
            "La planta <strong>muere</strong>.",
            "Él <strong>murió</strong> en paz.",
            "Esperemos que nadie <strong>muera</strong>."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio vocálico (o>ue) - Bota",
                tiempos: ["presente", "presente de subjuntivo", "imperativo (tú)"],
                notas: "muero, mueres; muera, mueras; muere"
            },
            {
                tipo: "Cambio vocálico (o>u)",
                tiempos: ["indefinido (3ª persona)", "imperfecto de subjuntivo", "gerundio"],
                notas: "murió, murieron; muriera/muriese; muriendo"
            },
            {
                tipo: "Participio irregular",
                tiempos: ["tiempos compuestos"],
                notas: "muerto (no 'morido')"
            }
        ],
        formasIrregularesYo: {
            "presente": "muero",
            "pretérito indefinido": "él murió",
            "pretérito imperfecto": "moría",
            "futuro": "moriré",
            "condicional": "moriría",
            "presente de subjuntivo": "muera",
            "imperfecto de subjuntivo": "muriera/muriese"
        },
        participioIrregularForma: "muerto",
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "Participio Irregular",
        indefinidoTipoIrregular: "Cambio vocálico 3ª persona",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Participio Irregular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical",
        pluscuamperfectodesubjuntivoTipoIrregular: "Participio Irregular",
        traducciones: {
            ingles: "to die",
            aleman: "sterben",
            frances: "mourir"
        },
        ejemplosTraducidos: {
            ingles: [
                "The plant <strong>dies</strong>.",
                "He <strong>died</strong> in peace.",
                "Let's hope no one <strong>dies</strong>."
            ],
            aleman: [
                "Die Pflanze <strong>stirbt</strong>.",
                "Er <strong>starb</strong> in Frieden.",
                "Hoffen wir, dass niemand <strong>stirbt</strong>."
            ],
            frances: [
                "La plante <strong>meurt</strong>.",
                "Il <strong>est mort</strong> en paix.",
                "Espérons que personne ne <strong>meure</strong>."
            ]
        }
    },
    "nacer": {
        significado: "Salir del vientre materno o del huevo; empezar a existir.",
        ejemplos: [
            "El bebé <strong>nace</strong> hoy.",
            "Ella <strong>nació</strong> en Madrid.",
            "Una nueva idea <strong>nació</strong>."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad en primera persona del presente (yo-zco)",
                tiempos: ["presente (yo)"],
                notas: "yo nazco (terminación en '-zco')"
            },
            {
                tipo: "Irregularidad en presente de subjuntivo",
                tiempos: ["presente de subjuntivo"],
                notas: "nazca, nazcas (se mantiene la '-zc-' en todas las personas)"
            }
        ],
        formasIrregularesYo: {
            "presente": "nazco",
            "pretérito indefinido": "nací",
            "pretérito imperfecto": "nacía",
            "futuro": "naceré",
            "condicional": "nacería",
            "presente de subjuntivo": "nazca",
            "imperfecto de subjuntivo": "naciera/naciese"
            },

        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "nacido",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to be born / to arise",
            aleman: "geboren werden / entstehen",
            frances: "naître"
        },
        ejemplosTraducidos: {
            ingles: [
                "The baby <strong>is born</strong> today.",
                "She <strong>was born</strong> in Madrid.",
                "A new idea <strong>arose</strong>."
            ],
            aleman: [
                "Das Baby <strong>wird</strong> heute <strong>geboren</strong>.",
                "Sie <strong>wurde</strong> in Madrid <strong>geboren</strong>.",
                "Eine neue Idea <strong>entstand</strong>."
            ],
            frances: [
                "Le bébé <strong>naît</strong> aujourd'hui.",
                "Elle <strong>est née</strong> à Madrid.",
                "Une nouvelle idée <strong>est née</strong>."
            ]
        }
    },
    "perder": {
        significado: "Dejar de tener algo que se poseía; no conseguir algo.",
        ejemplos: [
            "Yo <strong>pierdo</strong> las llaves.",
            "Él <strong>perdió</strong> el partido.",
            "No quiero <strong>perder</strong> tiempo."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio vocálico (e>ie) - Bota",
                tiempos: ["presente", "presente de subjuntivo", "imperativo (tú)"],
                notas: "pierdo, pierdes; pierda, pierdas; pierde"
            }
        ],
        formasIrregularesYo: {
            "presente": "pierdo",
            "pretérito indefinido": "perdí",
            "pretérito imperfecto": "perdía",
            "futuro": "perderé",
            "condicional": "perdería",
            "presente de subjuntivo": "pierda",
            "imperfecto de subjuntivo": "perdiera/perdiese"
                
        },
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "perdido",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to lose / to miss",
            aleman: "verlieren / verpassen",
            frances: "perdre / manquer"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>lose</strong> my keys.",
                "He <strong>lost</strong> the game.",
                "I don't want to <strong>waste</strong> time."
            ],
            aleman: [
                "Ich <strong>verliere</strong> meine Schlüssel.",
                "Er <strong>verlor</strong> das Spiel.",
                "Ich möchte keine Zeit <strong>verlieren</strong>."
            ],
            frances: [
                "Je <strong>perds</strong> mes clés.",
                "Il <strong>a perdu</strong> le match.",
                "Je ne veux pas <strong>perdre</strong> de temps."
            ]
        }
    },
    "romper": {
        significado: "Separar con violencia las partes de un todo, o dejar de funcionar.",
        ejemplos: [
            "Yo <strong>rompo</strong> el papel.",
            "Él <strong>rompió</strong> el jarrón.",
            "La máquina se <strong>rompió</strong>."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Participio irregular",
                tiempos: ["tiempos compuestos"],
                notas: "roto (no 'rompido')"
            }
        ],
        formasIrregularesYo: {
            "presente": "rompo",
            "pretérito indefinido": "rompí",
            "pretérito imperfecto": "rompía",
            "futuro": "romperé",
            "condicional": "rompería",
            "presente de subjuntivo": "rompa",
            "imperfecto de subjuntivo": "rompiera/rompiese"
                
        },
        participioIrregularForma: "roto",
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Participio Irregular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Participio Irregular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Participio Irregular",
        traducciones: {
            ingles: "to break / to tear",
            aleman: "brechen / reißen",
            frances: "casser / déchirer"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>tear</strong> the paper.",
                "He <strong>broke</strong> the vase.",
                "The machine <strong>broke down</strong>."
            ],
            aleman: [
                "Ich <strong>reiße</strong> das Papier.",
                "Er <strong>zerbrach</strong> die Vase.",
                "Die Maschine <strong>ging kaputt</strong>."
            ],
            frances: [
                "Je <strong>déchire</strong> le papier.",
                "Il <strong>a cassé</strong> le vase.",
                "La machine <strong>est tombée en panne</strong>."
            ]
        }
    },
    "terminar": {
        significado: "Llegar al final de algo; finalizar una actividad.",
        ejemplos: [
            "Yo <strong>termino</strong> mi trabajo.",
            "La película <strong>terminó</strong> tarde.",
            "Ellos <strong>terminarán</strong> el proyecto."
        ],
        formasIrregularesYo: {
            "presente": "termino",
            "pretérito indefinido": "terminé",
            "pretérito imperfecto": "terminaba",
            "futuro": "terminaré",
            "condicional": "terminaría",
            "presente de subjuntivo": "termine",
            "imperfecto de subjuntivo": "terminara/terminase"
        },
        esIrregular: false,
        irregularidades: [],
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to finish / to end",
            aleman: "beenden / enden",
            frances: "finir / terminer"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>finish</strong> my work.",
                "The movie <strong>ended</strong> late.",
                "They <strong>will finish</strong> the project."
            ],
            aleman: [
                "Ich <strong>beende</strong> meine Arbeit.",
                "Der Film <strong>endete</strong> spät.",
                "Sie <strong>werden</strong> das Projekt <strong>beenden</strong>."
            ],
            frances: [
                "Je <strong>finis</strong> mon travail.",
                "Le film <strong>s'est terminé</strong> tard.",
                "Ils <strong>finiront</strong> le projet."
            ]
        }
    },
    "viajar": {
        significado: "Desplazarse de un lugar a otro, generalmente a un lugar distante.",
        ejemplos: [
            "Yo <strong>viajo</strong> a España.",
            "Ellos <strong>viajaron</strong> por el mundo.",
            "Me <strong>gustaría viajar</strong> más."
        ],
        esIrregular: false,
        irregularidades: [],
        formasIrregularesYo: {
            "presente": "viajo",
            "pretérito indefinido": "viajé",
            "pretérito imperfecto": "viajaba",
            "futuro": "viajaré",
            "condicional": "viajaría",
            "presente de subjuntivo": "viaje",
            "imperfecto de subjuntivo": "viajara/viajase"
                
        },
        presenteTipoIrregular: "Regular",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Regular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to travel",
            aleman: "reisen",
            frances: "voyager"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>travel</strong> to Spain.",
                "They <strong>traveled</strong> around the world.",
                "I <strong>would like to travel</strong> more."
            ],
            aleman: [
                "Ich <strong>reise</strong> nach Spanien.",
                "Sie <strong>reisten</strong> um die Welt.",
                "Ich <strong>würde</strong> gerne mehr <strong>reisen</strong>."
            ],
            frances: [
                "Je <strong>voyage</strong> en Espagne.",
                "Ils <strong>ont voyagé</strong> autour du monde.",
                "J'<strong>aimerais voyager</strong> plus."
            ]
        }
    },
    "traer": {
        significado: "Llevar o conducir algo o a alguien desde un lugar a otro.",
        ejemplos: [
            "Yo <strong>traigo</strong> los libros.",
            "Ella <strong>trajo</strong> un regalo.",
            "Nosotros <strong>traeremos</strong> la comida."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Sombrero: irregularidad en primera persona del presente (yo-igo)",
                tiempos: ["presente (yo)"],
                notas: "yo traigo, tú traes"
            },
            {
                tipo: "Irregularidad radical",
                tiempos: ["indefinido", "presente de subjuntivo", "imperfecto de subjuntivo"],
                notas: "traje, trajiste; traiga, traigas; trajera/trajese"
            }
        ],
        formasIrregularesYo: {
            "presente": "traigo",
            "pretérito indefinido": "traje",
            "pretérito imperfecto": "traía",
            "futuro": "traeré",
            "condicional": "traería",
            "presente de subjuntivo": "traiga",
            "imperfecto de subjuntivo": "trajera/trajese"
        },
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "traído", //es regular
        indefinidoTipoIrregular: "Irregularidad radical",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to bring",
            aleman: "bringen",
            frances: "apporter / amener"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>bring</strong> the drinks to the party.",
                "Can you <strong>bring</strong> the book I lent you?",
                "We <strong>brought</strong> food for everyone."
            ],
            aleman: [
                "Ich <strong>bringe</strong> die Getränke zur Party.",
                "Kannst du das Buch <strong>mitbringen</strong>, das ich dir geliehen habe?",
                "Wir <strong>brachten</strong> Essen für alle."
            ],
            frances: [
                "J'<strong>apporte</strong> les boissons à la fête.",
                "Peux-tu <strong>apporter</strong> le livre que je t'ai prêté?",
                "Nous avons <strong>apporté</strong> de la nourriture pour tout le monde."
            ]
        }
    },
    "salir": {
        significado: "Moverse de dentro hacia fuera; irse de un lugar.",
        ejemplos: [
            "Yo <strong>salgo</strong> de casa.",
            "Ella <strong>salió</strong> temprano.",
            "Nosotros <strong>saldremos</strong> de viaje."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Sombrero: irregularidad en primera persona del presente (yo-go)",
                tiempos: ["presente (yo)"],
                notas: "yo salgo"
            },
            {
                tipo: "Irregularidad en futuro/condicional (d)",
                tiempos: ["futuro", "condicional"],
                notas: "saldré, saldrás; saldría, saldrías"
            }
        ],
        formasIrregularesYo: {
            "presente": "salgo",
            "pretérito indefinido": "salí",
            "pretérito imperfecto": "salía",
            "futuro": "saldré",
            "condicional": "saldría",
            "presente de subjuntivo": "salga",
            "imperfecto de subjuntivo": "saliera/saliese"
        },
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "salido", //es regular
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Irregularidad radical",
        condicionalTipoIrregular: "Irregularidad radical",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to leave / to go out",
            aleman: "verlassen / ausgehen",
            frances: "sortir / partir"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>leave</strong> home.",
                "She <strong>left</strong> early.",
                "We <strong>will go out</strong> on a trip."
            ],
            aleman: [
                "Ich <strong>verlasse</strong> das Haus.",
                "Sie <strong>ging</strong> früh <strong>weg</strong>.",
                "Wir <strong>werden</strong> eine Reise <strong>machen</strong>."
            ],
            frances: [
                "Je <strong>sors</strong> de la maison.",
                "Elle <strong>est partie</strong> tôt.",
                "Nous <strong>partirons</strong> en voyage."
            ]
        }
    },
    "venir": {
        significado: "Moverse hacia el lugar donde se encuentra el hablante.",
        ejemplos: [
            "Yo <strong>vengo</strong> a tu casa.",
            "Ella <strong>vino</strong> ayer.",
            "Nosotros <strong>vendremos</strong> pronto."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad Bota con Sombrero", //antes con irregularidad radical
                tiempos: ["presente"],
                notas: "yo vengo, tú vienes"
            },
            {
                tipo: "Irregularidad radical", //antes con irregularidad radical
                tiempos: ["indefinido", "futuro", "condicional", "presente de subjuntivo", "imperfecto de subjuntivo", "imperativo (tú)"],
                notas: "vine, viniste; vendré, vendría; venga, vengas; viniera/viniese; ven"
            }
        ],
        formasIrregularesYo: {
            "presente": "vengo",
            "pretérito indefinido": "vine",
            "pretérito imperfecto": "venía",
            "futuro": "vendré",
            "condicional": "vendría",
            "presente de subjuntivo": "venga",
            "imperfecto de subjuntivo": "viniera"
        },
        presenteTipoIrregular: "Bota y Sombrero",
        preteritoperfectoTipoIrregular: "venido", //es regular
        indefinidoTipoIrregular: "Irregularidad radical",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Irregularidad radical",
        condicionalTipoIrregular: "Irregularidad radical",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to come",
            aleman: "kommen",
            frances: "venir"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>come</strong> to your house.",
                "She <strong>came</strong> yesterday.",
                "We <strong>will come</strong> soon."
            ],
            aleman: [
                "Ich <strong>komme</strong> zu deinem Haus.",
                "Sie <strong>kam</strong> gestern.",
                "Wir <strong>werden</strong> bald <strong>kommen</strong>."
            ],
            frances: [
                "Je <strong>viens</strong> chez toi.",
                "Elle <strong>est venue</strong> hier.",
                "Nous <strong>viendrons</strong> bientôt."
            ]
        }
    },
    "pedir": {
        significado: "Solicitar algo, rogar o demandar.",
        ejemplos: [
            "Yo <strong>pido</strong> un café.",
            "Ella <strong>pidió</strong> ayuda.",
            "Nosotros <strong>pediremos</strong> la cuenta."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Bota: cambio vocálico (e>i)",
                tiempos: ["presente", "presente de subjuntivo", "imperfecto de subjuntivo", "imperativo (tú)"],
                notas: "pido, pides; pida, pidas; pidiera/pidiese; pide"
            },
            {
                tipo: "Cambio vocálico 3ª persona (e>i)",
                tiempos: ["indefinido"],
                notas: "pidió, pidieron"
            }
        ],
        formasIrregularesYo: {
            "presente": "pido",
            "pretérito indefinido": "él pidió",
            "pretérito imperfecto": "pedía",
            "futuro": "pediré",
            "condicional": "pediría",
            "presente de subjuntivo": "pida",
            "imperfecto de subjuntivo": "pidiera/pidiese"
        },
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "pedido", //es regular
        indefinidoTipoIrregular: "Cambio vocálico 3ª persona",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to ask for / to order",
            aleman: "fragen nach / bestellen",
            frances: "demander / commander"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>ask for</strong> a coffee.",
                "She <strong>asked for</strong> help.",
                "We <strong>will ask for</strong> the bill."
            ],
            aleman: [
                "Ich <strong>frage nach</strong> einem Kaffee.",
                "Sie <strong>bat</strong> um Hilfe.",
                "Wir <strong>werden</strong> die Rechnung <strong>bestellen</strong>."
            ],
            frances: [
                "Je <strong>demande</strong> un café.",
                "Elle <strong>a demandé</strong> de l'aide.",
                "Nous <strong>demanderons</strong> l'addition."
            ]
        }
    },
    "jugar": {
        significado: "Participar en un juego o actividad lúdica. También, apostar o divertirse.",
        ejemplos: [
            "Yo <strong>juego</strong> al fútbol cada semana.",
            "Ayer <strong>jugamos</strong> a las cartas.",
            "Espero que <strong>jueguen</strong> limpio."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio vocálico (u>ue) - Bota",
                tiempos: ["presente", "presente de subjuntivo", "imperativo (tú)"],
                notas: "juego, juegas, juega, juegan; juegue, juegues, jueguen; juega"
            },
            {
                tipo: "Cambio ortográfico (gu>g)",
                tiempos: ["indefinido (yo)", "presente de subjuntivo (yo, él/ella, ellos/ellas)", "imperativo (tú, formal)"],
                notas: "jugué (para mantener el sonido fuerte de la 'g' antes de 'e'); juegue, juegues, jueguen"
            }
        ],
        formasIrregularesYo: {
            "presente": "juego",
            "pretérito indefinido": "jugué",
            "pretérito imperfecto": "jugaba",
            "futuro": "jugaré",
            "condicional": "jugaría",
            "presente de subjuntivo": "juegue",
            "imperfecto de subjuntivo": "jugara/jugase"
        },
        participioIrregularForma: "jugado", //es regular
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Cambio ortográfico",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to play",
            aleman: "spielen",
            frances: "jouer"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>play</strong> soccer every week.",
                "Yesterday we <strong>played</strong> cards.",
                "I hope they <strong>play</strong> fair."
            ],
            aleman: [
                "Ich <strong>spiele</strong> jede Woche Fußball.",
                "Gestern <strong>spielten</strong> wir Karten.",
                "Ich hoffe, sie <strong>spielen</strong> fair."
            ],
            frances: [
                "Je <strong>joue</strong> au football chaque semaine.",
                "Hier, nous <strong>avons joué</strong> aux cartes.",
                "J'espère qu'ils <strong>jouent</strong> franc jeu."
            ]
        }
    },
    "caer": {
        significado: "Perder el equilibrio y moverse hacia abajo; también, disminuir o descender.",
        ejemplos: [
            "No quiero <strong>caer</strong> por las escaleras.",
            "Se <strong>cayó</strong> del árbol.",
            "Espero que no se <strong>caiga</strong>."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad radical (o>igo)",
                tiempos: ["presente (yo)", "presente de subjuntivo", "imperativo (tú)"],
                notas: "yo caigo; caiga, caigas; cae (regular)"
            },
            {
                tipo: "Cambio de i por y",
                tiempos: ["indefinido (3ª persona)", "imperfecto de subjuntivo", "gerundio"],
                notas: "cayó, cayeron; cayera/cayese; cayendo"
            }
        ],
        formasIrregularesYo: {
            "presente": "caigo",
            "pretérito indefinido": "él cayó",
            "pretérito imperfecto": "caía",
            "futuro": "caeré",
            "condicional": "caería",
            "presente de subjuntivo": "caiga",
            "imperfecto de subjuntivo": "cayera/cayese"
        },
        participioIrregularForma: "caído", //es regular
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Cambio vocálico 3ª persona",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to fall",
            aleman: "fallen",
            frances: "tomber"
        },
        ejemplosTraducidos: {
            ingles: [
                "I don't want to <strong>fall</strong> down the stairs.",
                "He <strong>fell</strong> from the tree.",
                "I hope he doesn't <strong>fall</strong>."
            ],
            aleman: [
                "Ich möchte die Treppe nicht <strong>fallen</strong>.",
                "Er <strong>fiel</strong> vom Baum.",
                "Ich hoffe, er <strong>fällt</strong> nicht."
            ],
            frances: [
                "Je ne veux pas <strong>tomber</strong> dans les escaliers.",
                "Il <strong>est tombé</strong> de l'arbre.",
                "J'espère qu'il ne <strong>tombera</strong> pas."
            ]
        }
    },
    "empezar": {
        significado: "Dar principio a algo.",
        ejemplos: [
            "Siempre <strong>empiezo</strong> el día con café.",
            "La película <strong>empezó</strong> tarde.",
            "Cuando <strong>empieces</strong>, avísame."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio vocálico (e>ie) - Bota",
                tiempos: ["presente", "presente de subjuntivo", "imperativo (tú)"],
                notas: "empiezo, empiezas, empieza, empiezan; empiece, empieces, empiecen; empieza"
            },
            {
                tipo: "Cambio ortográfico (z>c)",
                tiempos: ["indefinido (yo)", "presente de subjuntivo", "imperativo (tú, formal)"],
                notas: "empecé (para mantener el sonido fuerte de la 'z' antes de 'e'); empiece, empiece, empiece, empecemos, empecéis, empiecen"
            }
        ],
        formasIrregularesYo: {
            "presente": "empiezo",
            "pretérito indefinido": "empecé",
            "pretérito imperfecto": "empezaba",
            "futuro": "empezaré",
            "condicional": "empezaría",
            "presente de subjuntivo": "empiece",
            "imperfecto de subjuntivo": "empezara/empezase"
        },
        participioIrregularForma: "empezado", //es regular
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Cambio ortográfico",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to start, to begin",
            aleman: "anfangen, beginnen",
            frances: "commencer"
        },
        ejemplosTraducidos: {
            ingles: [
                "I always <strong>start</strong> the day with coffee.",
                "The movie <strong>started</strong> late.",
                "When you <strong>start</strong>, let me know."
            ],
            aleman: [
                "Ich <strong>beginne</strong> den Tag immer mit Kaffee.",
                "Der Film <strong>fing</strong> spät <strong>an</strong>.",
                "Wenn du <strong>anfängst</strong>, sag Bescheid."
            ],
            frances: [
                "Je <strong>commence</strong> toujours la journée avec du café.",
                "Le film <strong>a commencé</strong> tard.",
                "Quand tu <strong>commenceras</strong>, préviens-moi."
            ]
        }
    },
    "cerrar": {
        significado: "Unir lo que estaba abierto, tapar o bloquear el paso.",
        ejemplos: [
            "Por favor, <strong>cierra</strong> la puerta.",
            "Él <strong>cerró</strong> el libro lentamente.",
            "Necesitamos que <strong>cierren</strong> las ventanas."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio vocálico (e>ie) - Bota",
                tiempos: ["presente", "presente de subjuntivo", "imperativo (tú)"],
                notas: "cierro, cierras, cierra, cierran; cierre, cierres, cierren; cierra"
            }
        ],
        formasIrregularesYo: {
            "presente": "cierro",
            "pretérito indefinido": "cerré",
            "pretérito imperfecto": "cerraba",
            "futuro": "cerraré",
            "condicional": "cerraría",
            "presente de subjuntivo": "cierre",
            "imperfecto de subjuntivo": "cerrara/cerrase"
        },
        participioIrregularForma: "cerrado", //es regular
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to close, to shut",
            aleman: "schließen",
            frances: "fermer"
        },
        ejemplosTraducidos: {
            ingles: [
                "Please, <strong>close</strong> the door.",
                "He <strong>closed</strong> the book slowly.",
                "We need them to <strong>close</strong> the windows."
            ],
            aleman: [
                "Bitte, <strong>schließe</strong> die Tür.",
                "Er <strong>schloss</strong> das Buch langsam.",
                "Wir müssen die Fenster <strong>schließen</strong>."
            ],
            frances: [
                "S'il te plaît, <strong>ferme</strong> la porte.",
                "Il <strong>a fermé</strong> le livre lentement.",
                "Nous avons besoin qu'ils <strong>ferment</strong> les fenêtres."
            ]
        }
    },
    "construir": {
        significado: "Fabricar o edificar algo; crear una obra o estructura.",
        ejemplos: [
            "Los niños <strong>construyen</strong> una torre de bloques.",
            "Ellos <strong>construyeron</strong> la casa en un año.",
            "Espero que <strong>construyan</strong> un futuro mejor."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio de i por y",
                tiempos: ["presente", "indefinido (3ª persona)", "presente de subjuntivo", "imperativo (tú)", "gerundio"],
                notas: "yo construyo, construyes, construye, construyen; él/ella construyó, ellos/ellas construyeron; construya, construyas, construyan; construye; construyendo"
            }
        ],
        formasIrregularesYo: {
            "presente": "construyo",
            "pretérito indefinido": "él construyó",
            "pretérito imperfecto": "construía",
            "futuro": "construiré",
            "condicional": "construiría",
            "presente de subjuntivo": "construya",
            "imperfecto de subjuntivo": "construyera/construyese"
        },
        participioIrregularForma: "construido",
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Cambio vocálico 3ª persona",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to build",
            aleman: "bauen",
            frances: "construire"
        },
        ejemplosTraducidos: {
            ingles: [
                "The children <strong>build</strong> a block tower.",
                "They <strong>built</strong> the house in a year.",
                "I hope they <strong>build</strong> a better future."
            ],
            aleman: [
                "Die Kinder <strong>bauen</strong> einen Blockturm.",
                "Sie <strong>bauten</strong> das Haus in einem Jahr.",
                "Ich hoffe, sie <strong>bauen</strong> eine bessere Zukunft auf."
            ],
            frances: [
                "Les enfants <strong>construisent</strong> une tour de blocs.",
                "Ils <strong>ont construit</strong> la maison en un an.",
                "J'espère qu'ils <strong>construiront</strong> un avenir meilleur."
            ]
        }
    },
    "huir": {
        significado: "Escapar o alejarse rápidamente de un lugar o situación peligrosa.",
        ejemplos: [
            "Él siempre <strong>huye</strong> de los problemas.",
            "Los ladrones <strong>huyeron</strong> de la policía.",
            "Espero que no <strong>huyan</strong> de sus responsabilidades."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio de i por y",
                tiempos: ["presente", "indefinido (3ª persona)", "presente de subjuntivo", "imperativo (tú)", "gerundio"],
                notas: "yo huyo, huyes, huye, huyen; él/ella huyó, ellos/ellas huyeron; huya, huyas, huyan; huye; huyendo"
            }
        ],
        formasIrregularesYo: {
            "presente": "huyo",
            "pretérito indefinido": "él huyó",
            "pretérito imperfecto": "huía",
            "futuro": "huiré",
            "condicional": "huiría",
            "presente de subjuntivo": "huya",
            "imperfecto de subjuntivo": "huyera/huyese"
        },
        participioIrregularForma: "huido", //es regular
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Cambio vocálico 3ª persona",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to flee, to escape",
            aleman: "fliehen, entfliehen",
            frances: "fuir"
        },
        ejemplosTraducidos: {
            ingles: [
                "He always <strong>flees</strong> from problems.",
                "The thieves <strong>fled</strong> from the police.",
                "I hope they don't <strong>flee</strong> from their responsibilities."
            ],
            aleman: [
                "Er <strong>flieht</strong> immer vor Problemen.",
                "Die Diebe <strong>flohen</strong> vor der Polizei.",
                "Ich hoffe, sie <strong>fliehen</strong> nicht vor ihren Verantwortlichkeiten."
            ],
            frances: [
                "Il <strong>fuit</strong> toujours les problèmes.",
                "Les voleurs <strong>ont fui</strong> la police.",
                "J'espère qu'ils ne <strong>fuient</strong> pas leurs responsabilités."
            ]
        }
    },
    "destruir": {
        significado: "Reducir a ruinas o escombros; deshacer, aniquilar.",
        ejemplos: [
            "El terremoto <strong>destruyó</strong> muchos edificios.",
            "No debes <strong>destruir</strong> tus oportunidades.",
            "Espero que no se <strong>destruya</strong> todo."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio de i por y",
                tiempos: ["presente", "indefinido (3ª persona)", "presente de subjuntivo", "imperativo (tú)", "gerundio"],
                notas: "yo destruyo, destruyes, destruye, destruyen; él/ella destruyó, ellos/ellas destruyeron; destruya, destruyas, destruyan; destruye; destruyendo"
            }
        ],
        formasIrregularesYo: {
            "presente": "destruyo",
            "pretérito indefinido": "él destruyó",
            "pretérito imperfecto": "destruía",
            "futuro": "destruiré",
            "condicional": "destruiría",
            "presente de subjuntivo": "destruya",
            "imperfecto de subjuntivo": "destruyera/destruyese"
        },
        participioIrregularForma: "destruido", //es regular
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Cambio vocálico 3ª persona",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to destroy",
            aleman: "zerstören",
            frances: "détruire"
        },
        ejemplosTraducidos: {
            ingles: [
                "The earthquake <strong>destroyed</strong> many buildings.",
                "You should not <strong>destroy</strong> your opportunities.",
                "I hope everything is not <strong>destroyed</strong>."
            ],
            aleman: [
                "Das Erdbeben <strong>zerstörte</strong> viele Gebäude.",
                "Du solltest deine Chancen nicht <strong>zerstören</strong>.",
                "Ich hoffe, es wird nicht alles <strong>zerstört</strong>."
            ],
            frances: [
                "Le tremblement de terre <strong>a détruit</strong> de nombreux bâtiments.",
                "Tu ne devrais pas <strong>détruire</strong> tes opportunités.",
                "J'espère que tout ne sera pas <strong>détruit</strong>."
            ]
        }
    },
    "lucir": {
        significado: "Brillar, resplandecer; también, llevar ropa elegante o destacarse.",
        ejemplos: [
            "El sol <strong>luce</strong> brillante hoy.",
            "Ella <strong>lució</strong> un vestido hermoso en la fiesta.",
            "Espero que <strong>luzcas</strong> bien en la presentación."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad en la 1ª persona del presente y presente de subjuntivo",
                tiempos: ["presente (yo)", "presente de subjuntivo"],
                notas: "yo luzco (en vez de 'luco'); luzca, luzcas, etc."
            }
        ],
        formasIrregularesYo: {
            "presente": "luzco",
            "pretérito indefinido": "lucí",
            "pretérito imperfecto": "lucía",
            "futuro": "luciré",
            "condicional": "luciría",
            "presente de subjuntivo": "luzca",
            "imperfecto de subjuntivo": "luciera/luciese"
        },
        participioIrregularForma: "lucido",//es regular
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to shine, to wear, to look good",
            aleman: "scheinen, tragen, gut aussehen",
            frances: "briller, porter, avoir belle allure"
        },
        ejemplosTraducidos: {
            ingles: [
                "The sun <strong>shines</strong> brightly today.",
                "She <strong>wore</strong> a beautiful dress at the party.",
                "I hope you <strong>look good</strong> in the presentation."
            ],
            aleman: [
                "Die Sonne <strong>scheint</strong> heute hell.",
                "Sie <strong>trug</strong> ein wunderschönes Kleid auf der Party.",
                "Ich hoffe, du <strong>siehst</strong> in der Präsentation gut <strong>aus</strong>."
            ],
            frances: [
                "Le soleil <strong>brille</strong> fort aujourd'hui.",
                "Elle <strong>portait</strong> une belle robe à la fête.",
                "J'espère que tu <strong>auras bonne allure</strong> à la présentation."
            ]
        }
    },
    "traducir": {
        significado: "Expresar en una lengua lo dicho o escrito en otra.",
        ejemplos: [
            "Yo <strong>traduzco</strong> documentos al inglés.",
            "Ella <strong>tradujo</strong> el libro al español.",
            "Es importante que <strong>traduzcas</strong> el mensaje correctamente."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad en la 1ª persona del presente y presente de subjuntivo",
                tiempos: ["presente (yo)", "presente de subjuntivo"],
                notas: "yo traduzco (en vez de 'traduco'); traduzca, traduzcas, etc."
            },
            {
                tipo: "Cambio de c por j",
                tiempos: ["indefinido", "imperfecto de subjuntivo"],
                notas: "traduje, tradujiste, tradujo; tradujera/tradujese"
            }
        ],
        formasIrregularesYo: {
            "presente": "traduzco",
            "pretérito indefinido": "traduje",
            "pretérito imperfecto": "traducía",
            "futuro": "traduciré",
            "condicional": "traduciría",
            "presente de subjuntivo": "traduzca",
            "imperfecto de subjuntivo": "tradujera/tradujese"
        },
        participioIrregularForma: "traducido",//es regular
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Irregularidad radical",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to translate",
            aleman: "übersetzen",
            frances: "traduire"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>translate</strong> documents into English.",
                "She <strong>translated</strong> the book into Spanish.",
                "It is important that you <strong>translate</strong> the message correctly."
            ],
            aleman: [
                "Ich <strong>übersetze</strong> Dokumente ins Englische.",
                "Sie <strong>übersetzte</strong> das Buch ins Spanische.",
                "Es ist wichtig, dass du die Nachricht richtig <strong>übersetzt</strong>."
            ],
            frances: [
                "Je <strong>traduis</strong> des documents en anglais.",
                "Elle <strong>a traduit</strong> le livre en espagnol.",
                "Il est important que tu <strong>traduises</strong> le message correctement."
            ]
        }
    },
    "conducir": {
        significado: "Manejar un vehículo; llevar o guiar a alguien o algo de un lugar a otro.",
        ejemplos: [
            "Yo <strong>conduzco</strong> al trabajo todos los días.",
            "Él <strong>condujo</strong> durante horas.",
            "Espero que <strong>conduzcas</strong> con cuidado."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad en la 1ª persona del presente y presente de subjuntivo",
                tiempos: ["presente (yo)", "presente de subjuntivo"],
                notas: "yo conduzco (en vez de 'conduco'); conduzca, conduzcas, etc."
            },
            {
                tipo: "Cambio de c por j",
                tiempos: ["indefinido", "imperfecto de subjuntivo"],
                notas: "conduje, condujiste, condujo; condujera/condujese"
            }
        ],
        formasIrregularesYo: {
            "presente": "conduzco",
            "pretérito indefinido": "conduje",
            "pretérito imperfecto": "conducía",
            "futuro": "conduciré",
            "condicional": "conduciría",
            "presente de subjuntivo": "conduzca",
            "imperfecto de subjuntivo": "condujera/condujese"
        },
        participioIrregularForma: "conducido", //es regular
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Irregularidad radical",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to drive, to lead",
            aleman: "fahren, führen",
            frances: "conduire"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>drive</strong> to work every day.",
                "He <strong>drove</strong> for hours.",
                "I hope you <strong>drive</strong> carefully."
            ],
            aleman: [
                "Ich <strong>fahre</strong> jeden Tag zur Arbeit.",
                "Er <strong>fuhr</strong> stundenlang.",
                "Ich hoffe, du <strong>fährst</strong> vorsichtig."
            ],
            frances: [
                "Je <strong>conduis</strong> au travail tous les jours.",
                "Il <strong>a conduit</strong> pendant des heures.",
                "J'espère que tu <strong>conduiras</strong> prudemment."
            ]
        }
    },
    "introducir": {
        significado: "Meter una cosa en otra; hacer que algo o alguien entre en un lugar.",
        ejemplos: [
            "Ella <strong>introduce</strong> la llave en la cerradura.",
            "Se <strong>introdujo</strong> en el grupo sin problemas.",
            "Es importante que <strong>introduzcas</strong> los datos correctos."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad en la 1ª persona del presente y presente de subjuntivo",
                tiempos: ["presente (yo)", "presente de subjuntivo"],
                notas: "yo introduzco (en vez de 'introduco'); introduzca, introduzcas, etc."
            },
            {
                tipo: "Cambio de c por j",
                tiempos: ["indefinido", "imperfecto de subjuntivo"],
                notas: "introduje, introdujiste, introdujo; introdujera/introdujese"
            }
        ],
        formasIrregularesYo: {
            "presente": "introduzco",
            "pretérito indefinido": "introduje",
            "pretérito imperfecto": "introducía",
            "futuro": "introduciré",
            "condicional": "introduciría",
            "presente de subjuntivo": "introduzca",
            "imperfecto de subjuntivo": "introdujera/introdujese"
        },
        participioIrregularForma: "introducido", //es regular
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Irregularidad radical",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to introduce, to insert",
            aleman: "einführen, einführen",
            frances: "introduire"
        },
        ejemplosTraducidos: {
            ingles: [
                "She <strong>inserts</strong> the key into the lock.",
                "He <strong>introduced himself</strong> into the group without problems.",
                "It is important that you <strong>enter</strong> the correct data."
            ],
            aleman: [
                "Sie <strong>führt</strong> den Schlüssel ins Schloss <strong>ein</strong>.",
                "Er <strong>führte</strong> sich problemlos in die Gruppe <strong>ein</strong>.",
                "Es ist wichtig, dass du die richtigen Daten <strong>eingibst</strong>."
            ],
            frances: [
                "Elle <strong>introduit</strong> la clé dans la serrure.",
                "Il <strong>s'est introduit</strong> dans le groupe sans problème.",
                "Il est important que vous <strong>introduisiez</strong> les bonnes données."
            ]
        }
    },
    "producir": {
        significado: "Fabricar, elaborar; causar o generar algo.",
        ejemplos: [
            "Esta fábrica <strong>produce</strong> coches eléctricos.",
            "La tormenta <strong>produjo</strong> muchos daños.",
            "Espero que la reunión <strong>produzca</strong> buenos resultados."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad en la 1ª persona del presente y presente de subjuntivo",
                tiempos: ["presente (yo)", "presente de subjuntivo"],
                notas: "yo produzco (en vez de 'produco'); produzca, produzcas, etc."
            },
            {
                tipo: "Cambio de c por j",
                tiempos: ["indefinido", "imperfecto de subjuntivo"],
                notas: "produje, produjiste, produjo; produjera/produjese"
            }
        ],
        formasIrregularesYo: {
            "presente": "produzco",
            "pretérito indefinido": "produje",
            "pretérito imperfecto": "producía",
            "futuro": "produciré",
            "condicional": "produciría",
            "presente de subjuntivo": "produzca",
            "imperfecto de subjuntivo": "produjera/produjese"
        },
        participioIrregularForma: "producido", //es regular pero para que sea visible en el juego de arrastrar
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Irregularidad radical",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to produce, to cause",
            aleman: "produzieren, verursachen",
            frances: "produire"
        },
        ejemplosTraducidos: {
            ingles: [
                "This factory <strong>produces</strong> electric cars.",
                "The storm <strong>caused</strong> a lot of damage.",
                "I hope the meeting <strong>produces</strong> good results."
            ],
            aleman: [
                "Diese Fabrik <strong>produziert</strong> Elektroautos.",
                "Der Sturm <strong>verursachte</strong> viel Schaden.",
                "Ich hoffe, das Treffen <strong>führt</strong> zu guten Ergebnissen."
            ],
            frances: [
                "Cette usine <strong>produit</strong> des voitures électriques.",
                "La tempête <strong>a causé</strong> beaucoup de dégâts.",
                "J'espère que la réunion <strong>produira</strong> de bons résultats."
            ]
        }
    },
    "valer": {
        significado: "Tener un precio o valor; ser útil o servir para algo.",
        ejemplos: [
            "Este anillo <strong>vale</strong> mucho dinero.",
            "Tu opinión siempre <strong>valió</strong> para mí.",
            "Espero que esto <strong>valga</strong> la pena."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Sombrero: irregularidad en la 1ª persona del presente (yo-go)",
                tiempos: ["presente (yo)", "presente de subjuntivo"],
                notas: "yo valgo, tú vales; valga, valgas, etc."
            },
            {
                tipo: "Futuro y Condicional irregulares",
                tiempos: ["futuro", "condicional"],
                notas: "valdré, valdrás, valdrá; valdría, valdrías, valdría"
            }
        ],
        formasIrregularesYo: {
            "presente": "valgo",
            "pretérito indefinido": "valí",
            "pretérito imperfecto": "valía",
            "futuro": "valdré",
            "condicional": "valdría",
            "presente de subjuntivo": "valga",
            "imperfecto de subjuntivo": "valiera/valiese"
        },
        participioIrregularForma: "valido", //es regular pero para que sea visible en el juego de arrastrar
        presenteTipoIrregular: "Sombrero",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Irregularidad radical",
        condicionalTipoIrregular: "Irregularidad radical",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to be worth, to be valid",
            aleman: "wert sein, gültig sein",
            frances: "valoir"
        },
        ejemplosTraducidos: {
            ingles: [
                "This ring <strong>is worth</strong> a lot of money.",
                "Your opinion always <strong>mattered</strong> to me.",
                "I hope this <strong>is worth</strong> it."
            ],
            aleman: [
                "Dieser Ring <strong>ist</strong> viel Geld <strong>wert</strong>.",
                "Deine Meinung <strong>zählte</strong> für mich immer.",
                "Ich hoffe, das <strong>lohnt</strong> sich."
            ],
            frances: [
                "Cette bague <strong>vaut</strong> beaucoup d'argent.",
                "Ton opinion m'a toujours <strong>valu</strong> beaucoup.",
                "J'espère que cela <strong>en vaudra</strong> la peine."
            ]
        }
    },
    "sentir": {
        significado: "Experimentar sensaciones, emociones o percepciones.",
        ejemplos: [
            "Yo <strong>siento</strong> mucho frío en invierno.",
            "Ella <strong>sintió</strong> alegría al verte.",
            "Espero que no <strong>sientas</strong> dolor."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio vocálico (e>ie) - Bota",
                tiempos: ["presente", "presente de subjuntivo", "imperativo (tú)"],
                notas: "siento, sientes, siente, sienten; sienta, sientas, sientan; siente"
            },
            {
                tipo: "Cambio vocálico (e>i)",
                tiempos: ["indefinido (3ª persona)", "imperfecto de subjuntivo", "gerundio"],
                notas: "sintió, sintieron; sintiera/sintiese; sintiendo"
            }
        ],
        formasIrregularesYo: {
            "presente": "siento",
            "pretérito indefinido": "él sintió",
            "pretérito imperfecto": "sentía",
            "futuro": "sentiré",
            "condicional": "sentiría",
            "presente de subjuntivo": "sienta",
            "imperfecto de subjuntivo": "sintiera/sintiese"
        },
        participioIrregularForma: "sentido",//es regular pero para que sea visible en el juego de arrastrar
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Cambio vocálico 3ª persona",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Cambio vocálico",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to feel",
            aleman: "fühlen, empfinden",
            frances: "sentir"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>feel</strong> very cold in winter.",
                "She <strong>felt</strong> joy seeing you.",
                "I hope you don't <strong>feel</strong> pain."
            ],
            aleman: [
                "Mir <strong>ist</strong> im Winter sehr kalt.",
                "Sie <strong>empfand</strong> Freude, dich zu sehen.",
                "Ich hoffe, du <strong>fühlst</strong> keinen Schmerz."
            ],
            frances: [
                "Je <strong>sens</strong> très froid en hiver.",
                "Elle <strong>a ressenti</strong> de la joie en te voyant.",
                "J'espère que tu ne <strong>sentiras</strong> pas de douleur."
            ]
        }
    },
    "dormir": {
        significado: "Estar en estado de reposo, con la suspensión de la actividad consciente.",
        ejemplos: [
            "Yo <strong>duermo</strong> ocho horas cada noche.",
            "Ella <strong>durmió</strong> profundamente.",
            "Espero que <strong>duermas</strong> bien."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Cambio vocálico (o>ue) - Bota",
                tiempos: ["presente", "presente de subjuntivo", "imperativo (tú)"],
                notas: "duermo, duermes, duerme, duermen; duerma, duermas, duerman; duerme"
            },
            {
                tipo: "Cambio vocálico (o>u)",
                tiempos: ["indefinido (3ª persona)", "imperfecto de subjuntivo", "gerundio"],
                notas: "durmió, durmieron; durmiera/durmiese; durmiendo"
            }
        ],
        formasIrregularesYo: {
            "presente": "duermo",
            "pretérito indefinido": "dormí",
            "pretérito imperfecto": "dormía",
            "futuro": "dormiré",
            "condicional": "dormiría",
            "presente de subjuntivo": "duerma",
            "imperfecto de subjuntivo": "durmiera/durmiese"
        },
        participioIrregularForma: "dormido", //es regular
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Cambio vocálico 3ª persona",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Cambio vocálico",
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to sleep",
            aleman: "schlafen",
            frances: "dormir"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>sleep</strong> eight hours every night.",
                "She <strong>slept</strong> deeply.",
                "I hope you <strong>sleep</strong> well."
            ],
            aleman: [
                "Ich <strong>schlafe</strong> jede Nacht acht Stunden.",
                "Sie <strong>schlief</strong> tief und fest.",
                "Ich hoffe, du <strong>schläfst</strong> gut."
            ],
            frances: [
                "Je <strong>dors</strong> huit heures chaque nuit.",
                "Elle <strong>a dormi</strong> profondément.",
                "J'espère que tu <strong>dormiras</strong> bien."
            ]
        }
    },
    "querer": {
        significado: "Desear, tener voluntad o afecto por algo o alguien.",
        ejemplos: [
            "Yo <strong>quiero</strong> un café.",
            "Ella <strong>quiso</strong> ayudarte.",
            "Nosotros <strong>querríamos</strong> viajar."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad radical (e>ie)",
                tiempos: ["presente", "presente de subjuntivo", "imperativo (tú)"],
                notas: "quiero, quieres, quiere, quieren; quiera, quieras; quiere"
            },
            {
                tipo: "Irregularidad radical (pretérito)",
                tiempos: ["indefinido", "imperfecto de subjuntivo"],
                notas: "quise, quisiste, quiso; quisiera/quisiese"
            },
            {
                tipo: "Irregularidad radical (futuro/condicional)",
                tiempos: ["futuro", "condicional"],
                notas: "querré, querría"
            }
        ],
    
        formasIrregularesYo: {
            "presente": "quiero",
            "pretérito indefinido": "quise",
            "pretérito imperfecto": "quería",
            "futuro": "querré",
            "condicional": "querría",
            "presente de subjuntivo": "quiera",
            "imperfecto de subjuntivo": "quisiera"
        },
        participioIrregularForma: "querido", // El participio es regular
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "Regular",
        indefinidoTipoIrregular: "Irregularidad radical", // Simplificado
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Regular",
        futuroTipoIrregular: "Irregularidad radical", // Simplificado
        condicionalTipoIrregular: "Irregularidad radical", // Simplificado
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Irregularidad radical", // Simplificado
        pluscuamperfectodesubjuntivoTipoIrregular: "Regular",
        traducciones: {
            ingles: "to want / to love",
            aleman: "wollen / lieben",
            frances: "vouloir / aimer"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>want</strong> a coffee.",
                "She <strong>wanted</strong> to help you.",
                "We <strong>would want</strong> to travel."
            ],
            aleman: [
                "Ich <strong>will</strong> einen Kaffee.",
                "Sie <strong>wollte</strong> dir helfen.",
                "Wir <strong>würden</strong> gerne reisen."
            ],
            frances: [
                "Je <strong>veux</strong> un café.",
                "Elle <strong>a voulu</strong> t'aider.",
                "Nous <strong>voudrions</strong> voyager."
            ]
        }
    },"volver": {
        significado: "Regresar al lugar de donde se partió; dar la vuelta.",
        ejemplos: [
            "Yo <strong>vuelvo</strong> a casa.",
            "Ella <strong>volvió</strong> tarde.",
            "Nosotros <strong>hemos vuelto</strong> de vacaciones."
        ],
        esIrregular: true,
        irregularidades: [
            {
                tipo: "Irregularidad radical (o>ue)",
                tiempos: ["presente", "presente de subjuntivo", "imperativo (tú)"],
                notas: "vuelvo, vuelves, vuelve, vuelven; vuelva, vuelvas; vuelve"
            },
            {
                tipo: "Participio irregular",
                tiempos: ["tiempos compuestos"],
                notas: "vuelto (no 'volvido')"
            }
        ],
    
        formasIrregularesYo: {
            "presente": "vuelvo",
            "pretérito indefinido": "volví",
            "pretérito imperfecto": "volvía",
            "futuro": "volveré",
            "condicional": "volvería",
            "presente de subjuntivo": "vuelva",
            "imperfecto de subjuntivo": "volviera"
        },
        participioIrregularForma: "vuelto",
        presenteTipoIrregular: "Bota",
        preteritoperfectoTipoIrregular: "Participio Irregular",
        indefinidoTipoIrregular: "Regular",
        imperfectoTipoIrregular: "Regular",
        pluscuamperfectoTipoIrregular: "Participio Irregular",
        futuroTipoIrregular: "Regular",
        condicionalTipoIrregular: "Regular",
        presentedesubjuntivoTipoIrregular: "Irregular",
        imperfectodesubjuntivoTipoIrregular: "Regular",
        pluscuamperfectodesubjuntivoTipoIrregular: "Participio Irregular",
        traducciones: {
            ingles: "to return / to come back",
            aleman: "zurückkehren / umdrehen",
            frances: "revenir / retourner"
        },
        ejemplosTraducidos: {
            ingles: [
                "I <strong>return</strong> home.",
                "She <strong>returned</strong> late.",
                "We <strong>have returned</strong> from vacation."
            ],
            aleman: [
                "Ich <strong>kehre</strong> nach Hause <strong>zurück</strong>.",
                "Sie <strong>kam</strong> spät <strong>zurück</strong>.",
                "Wir <strong>sind</strong> aus dem Urlaub <strong>zurückgekehrt</strong>."
            ],
            frances: [
                "Je <strong>retourne</strong> à la maison.",
                "Elle <strong>est revenue</strong> tard.",
                "Nous <strong>sommes revenus</strong> de vacances."
            ]
        }
    },
}
