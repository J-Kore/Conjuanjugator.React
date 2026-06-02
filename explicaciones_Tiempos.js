

// Objeto que contiene las explicaciones detalladas para cada tiempo verbal.
export const explicacionesTiempos = {
    "presente": {
        titulo: "Presente de Indicativo",
        uso: "Acciones habituales, verdades generales, acciones en el momento de hablar.",
        ejemplo: "Yo <strong>hablo</strong> español.",
        //img: "https://placehold.co/300x150/000000/FFFFFF?text=Infografía+Presente",
        contentHtml: `
        <div class="explanation-main-container">
            <div class="info-box">
                <span class="info-box-icon">🎯</span>
                <div>
                    <h3>ACCIONES HABITUALES O REPETIDAS</h3>
                    <p class="description">Para hablar de acciones que se repiten regularmente.</p>
                    <p class="example">Cada día <span class="bold-text">desayuno</span> café. Siempre <span class="bold-text">leo</span> antes de dormir.</p>
                </div>
            </div>
            <div class="info-box">
                <span class="info-box-icon">🌍</span>
                <div>
                    <h3>VERDADES GENERALES O HECHOS CIENTÍFICOS</h3>
                    <p class="description">Para expresar hechos que son universalmente ciertos o principios científicos.</p>
                    <p class="example">El agua <span class="bold-text">hierve</span> a 100 grados. La Tierra <span class="bold-text">gira</span> alrededor del Sol.</p>
                </div>
            </div>
            <div class="info-box">
                <span class="info-box-icon">🗣️</span>
                <div>
                    <h3>ACCIONES EN EL MOMENTO DE HABLAR</h3>
                    <p class="description">Para describir lo que está sucediendo justo ahora.</p>
                    <p class="example">Ahora mismo <span class="bold-text">estudio</span> español. ¿Qué <span class="bold-text">haces</span>?</p>
                </div>
            </div>
            <div class="info-box">
                <span class="info-box-icon">➡️</span>
                <div>
                    <h3>FUTURO CERCANO (CON VERBOS DE MOVIMIENTO)</h3>
                    <p class="description">A menudo se usa para hablar de planes futuros muy próximos.</p>
                    <p class="example">Mañana <span class="bold-text">voy</span> al cine. La semana que viene <span class="bold-text">viene</span> mi hermana.</p>
                </div>
            </div>
        </div>
    `,
    // Contenido detallado para la FORMACIÓN, con clases CSS
    forma: `
        <div class="explanation-main-container">
            <h3 class="formacion-title">Formación del Presente de Indicativo</h3>
            <div class="conjugation-tables-wrapper">
                <div class="conjugation-table-box">
                    <h4>Verbos Regulares</h4>
                    <h4>(-ar: Cantar)</h4>
                    <table class="conjugation-table">
                        <tr><td>Yo</td><td>cant<span class="bold-text">o</span></td></tr>
                        <tr><td>Tú</td><td>cant<span class="bold-text">as</span></td></tr>
                        <tr><td>Él/Ella/Ud.</td><td>cant<span class="bold-text">a</span></td></tr>
                        <tr><td>Nosotros/as</td><td>cant<span class="bold-text">amos</span></td></tr>
                        <tr><td>Vosotros/as</td><td>cant<span class="bold-text">áis</span></td></tr>
                        <tr><td>Ellos/as/Uds.</td><td>cant<span class="bold-text">an</span></td></tr>
                    </table>
                </div>
                <div class="conjugation-table-box">
                    <h4>Verbos Regulares</h4>
                    <h4>(-er: Comer)</h4>
                    <table class="conjugation-table">
                        <tr><td>Yo</td><td>com<span class="bold-text">o</span></td></tr>
                        <tr><td>Tú</td><td>com<span class="bold-text">es</span></td></tr>
                        <tr><td>Él/Ella/Ud.</td><td>com<span class="bold-text">e</span></td></tr>
                        <tr><td>Nosotros/as</td><td>com<span class="bold-text">emos</span></td></tr>
                        <tr><td>Vosotros/as</td><td>com<span class="bold-text">éis</span></td></tr>
                        <tr><td>Ellos/as/Uds.</td><td>com<span class="bold-text">en</span></td></tr>
                    </table>
                </div>
                <div class="conjugation-table-box">
                    <h4>Verbos Regulares</h4>
                    <h4>(-ir: Vivir)</h4>
                    <table class="conjugation-table">
                        <tr><td>Yo</td><td>viv<span class="bold-text">o</span></td></tr>
                        <tr><td>Tú</td><td>viv<span class="bold-text">es</span></td></tr>
                        <tr><td>Él/Ella/Ud.</td><td>viv<span class="bold-text">e</span></td></tr>
                        <tr><td>Nosotros/as</td><td>viv<span class="bold-text">imos</span></td></tr>
                        <tr><td>Vosotros/as</td><td>viv<span class="bold-text">ís</span></td></tr>
                        <tr><td>Ellos/as/Uds.</td><td>viv<span class="bold-text">en</span></td></tr>
                    </table>
                </div>
            </div>
            <h3 class="irregular-list-title">Verbos Irregulares Comunes del Presente de Indicativo</h3>
            <ul class="irregular-verbs-grid">
                <li><strong>Ser:</strong> soy, eres, es, somos, sois, son</li>
                <li><strong>Estar:</strong> estoy, estás, está, estamos, estáis, están</li>
                <li><strong>Ir:</strong> voy, vas, va, vamos, vais, van</li>
                <li><strong>Tener:</strong> tengo, tienes, tiene, tenemos, tenéis, tienen</li>
                <li><strong>Hacer:</strong> hago, haces, hace, hacemos, hacéis, hacen</li>
                <li><strong>Poner:</strong> pongo, pones, pone, ponemos, ponéis, ponen</li>
                <li><strong>Salir:</strong> salgo, sales, sale, salimos, salís, salen</li>
                <li><strong>Decir:</strong> digo, dices, dice, decimos, decís, dicen</li>
                <li><strong>Venir:</strong> vengo, vienes, viene, venimos, venís, vienen</li>
                <li><strong>Ver:</strong> veo, ves, ve, vemos, veis, ven</li>
            </ul>
        </div>
    `
    },
    "pretérito perfecto": {
        titulo: "Pretérito Perfecto Compuesto de Indicativo",
        uso: "Acciones pasadas que tienen conexión con el presente; experiencias de vida no terminadas; acciones recientes.",
        ejemplo: "Yo <strong>he comido</strong> paella. Ella <strong>ha viajado</strong> mucho este año.",
        // img: "https://placehold.co/300x150/000000/FFFFFF?text=Infografía+Pretérito+Perfecto", // Puedes usar una imagen si lo deseas
        contentHtml: `
        <div class="explanation-main-container">
            <div class="info-box">
                <span class="info-box-icon">🗣️</span>
                <div>
                    <h3>ACCIONES EN UN PERÍODO DE TIEMPO NO TERMINADO</h3>
                    <p class="description">Para hablar de acciones que han sucedido en un espacio de tiempo que todavía no ha terminado (hoy, esta semana, este mes, este año).</p>
                    <p class="example">Esta mañana <span class="bold-text">he visitado</span> el museo. Este año <span class="bold-text">he aprendido</span> mucho español.</p>
                </div>
            </div>
            <div class="info-box">
                <span class="info-box-icon">🔄</span>
                <div>
                    <h3>ACCIONES RECIENTES</h3>
                    <p class="description">Para acciones que acaban de ocurrir, incluso sin un marcador de tiempo explícito si la acción es muy cercana al presente.</p>
                    <p class="example"><span class="bold-text">He terminado</span> el informe hace un minuto. ¿Ya <span class="bold-text">has cenado</span>?</p>
                (Este uso se solapa a menudo con el uso de "Acabar de + infinitivo")
                </div>
            </div>
            <div class="info-box">
                <span class="info-box-icon">🖼️</span>
                <div>
                    <h3>EXPERIENCIAS DE VIDA</h3>
                    <p class="description">Para hablar de experiencias de vida, sin especificar cuándo ocurrieron (a menudo con "alguna vez", "nunca", "siempre").</p>
                    <p class="example">¿Alguna vez <span class="bold-text">has viajado</span> a Japón? Nunca <span class="bold-text">he visto</span> una película tan buena.</p>
                </div>
            </div>
            <div class="info-box">
                <span class="info-box-icon">📈</span>
                <div>
                    <h3>ACCIONES PASADAS CON RESULTADO EN EL PRESENTE</h3>
                    <p class="description">Cuando el resultado o la consecuencia de una acción pasada aún es relevante en el momento actual.</p>
                    <p class="example"><span class="bold-text">He perdido</span> las llaves (y por eso no puedo entrar ahora). <span class="bold-text">Hemos comprado</span> una casa nueva (y ahora vivimos en ella).</p>
                </div>
            </div>
        </div>
    `,
    // Contenido detallado para la FORMACIÓN, con clases CSS
    forma: `
        <div class="explanation-main-container">
            <h3 class="formacion-title">Formación del Pretérito Perfecto de Indicativo</h3>
            <p>Se forma con el presente de indicativo del verbo auxiliar <span class="bold-text">HABER</span> + el <span class="bold-text">PARTICIPIO</span> del verbo principal.</p>
            <div class="conjugation-tables-wrapper">
                <div class="conjugation-table-box">
                    <h4>Verbos Regulares (-ar: Cantar)</h4>
                    <table class="conjugation-table">
                        <tr><td>Yo</td><td><span class="bold-text">he</span> cantado</td></tr>
                        <tr><td>Tú</td><td><span class="bold-text">has</span> cantado</td></tr>
                        <tr><td>Él/Ella/Ud.</td><td><span class="bold-text">ha</span> cantado</td></tr>
                        <tr><td>Nosotros/as</td><td><span class="bold-text">hemos</span> cantado</td></tr>
                        <tr><td>Vosotros/as</td><td><span class="bold-text">habéis</span> cantado</td></tr>
                        <tr><td>Ellos/as/Uds.</td><td><span class="bold-text">han</span> cantado</td></tr>
                    </table>
                </div>
                <div class="conjugation-table-box">
                    <h4>Verbos Regulares (-er: Comer)</h4>
                    <table class="conjugation-table">
                        <tr><td>Yo</td><td><span class="bold-text">he</span> comido</td></tr>
                        <tr><td>Tú</td><td><span class="bold-text">has</span> comido</td></tr>
                        <tr><td>Él/Ella/Ud.</td><td><span class="bold-text">ha</span> comido</td></tr>
                        <tr><td>Nosotros/as</td><td><span class="bold-text">hemos</span> comido</td></tr>
                        <tr><td>Vosotros/as</td><td><span class="bold-text">habéis</span> comido</td></tr>
                        <tr><td>Ellos/as/Uds.</td><td><span class="bold-text">han</span> comido</td></tr>
                    </table>
                </div>
                <div class="conjugation-table-box">
                    <h4>Verbos Regulares (-ir: Vivir)</h4>
                    <table class="conjugation-table">
                        <tr><td>Yo</td><td><span class="bold-text">he</span> vivido</td></tr>
                        <tr><td>Tú</td><td><span class="bold-text">has</span> vivido</td></tr>
                        <tr><td>Él/Ella/Ud.</td><td><span class="bold-text">ha</span> vivido</td></tr>
                        <tr><td>Nosotros/as</td><td><span class="bold-text">hemos</span> vivido</td></tr>
                        <tr><td>Vosotros/as</td><td><span class="bold-text">habéis</span> vivido</td></tr>
                        <tr><td>Ellos/as/Uds.</td><td><span class="bold-text">han</span> vivido</td></tr>
                    </table>
                </div>
            </div>
            <h3 class="irregular-list-title">Participios Irregulares Comunes para el Pretérito Perfecto</h3>
            <ul class="irregular-verbs-grid">
                <li><strong>Abrir:</strong> abierto (no *abierto*) - Hoy <span class="bold-text">he abierto</span> la ventana.</li>
                <li><strong>Cubrir:</strong> cubierto (no *cubrido*) - <span class="bold-text">Has cubierto</span> el pastel.</li>
                <li><strong>Decir:</strong> dicho (no *decido*) - <span class="bold-text">Hemos dicho</span> la verdad.</li>
                <li><strong>Escribir:</strong> escrito (no *escribido*) - <span class="bold-text">Ha escrito</span> un libro.</li>
                <li><strong>Hacer:</strong> hecho (no *hacido*) - ¿Qué <span class="bold-text">habéis hecho</span> hoy?</li>
                <li><strong>Morir:</strong> muerto (no *morido*) - El árbol <span class="bold-text">ha muerto</span>.</li>
                <li><strong>Poner:</strong> puesto (no *ponido*) - Me <span class="bold-text">he puesto</span> el abrigo.</li>
                <li><strong>Romper:</strong> roto (no *rompido*) - Se <span class="bold-text">han roto</span> el cristal.</li>
                <li><strong>Ver:</strong> visto (no *vivido*) - <span class="bold-text">He visto</span> esa película.</li>
                <li><strong>Volver:</strong> vuelto (no *volvido*) - Todavía no <span class="bold-text">han vuelto</span> a casa.</li>
                <li><strong>Freír:</strong> frito (o *freído*) - <span class="bold-text">He frito</span> unas patatas.</li>
                <li><strong>Imprimir:</strong> impreso (o *imprimido*) - <span class="bold-text">Hemos impreso</span> los documentos.</li>
            </ul>
            <p>¡Recuerda que el participio irregular es invariable y no cambia según el género o número!</p>
        </div>
    `
    },
    "indefinido": {
        titulo: "Pretérito Indefinido",
        uso: "Acciones terminadas en el pasado.",
        ejemplo: "Ayer <strong>comí</strong> paella.",
        //img: "https://placehold.co/300x150/000000/FFFFFF?text=Infografía+Indefinido",
        contentHtml: `
        <div class="explanation-main-container">
        <div class="info-box">
            <span class="info-box-icon">🎯</span>
            <div>
                <h3>CADENA DE ACCIONES PASADAS TERMINADAS</h3>
                <p class="description">Para expresar una secuencia de eventos o acciones que ocurrieron y finalizaron en el pasado.</p>
                <p class="example">Me levanté, <span class="bold-text">desayuné</span> y <span class="bold-text">salí</span> de casa.</p>
            </div>
        </div>
        <div class="info-box">
            <span class="info-box-icon">📜</span>
            <div>
                <h3>SE USA EN LAS BIOGRAFÍAS O NARRACIONES HISTÓRICAS</h3>
                <p class="description">Para describir eventos o sucesos específicos que ocurrieron en un momento definido del pasado.</p>
                <p class="example"><span class="bold-text">Nací</span> en Tenerife en 1980. En 1999 <span class="bold-text">fui</span> a la universidad en Madrid.</p>
            </div>
        </div>
        <div class="info-box">
            <span class="info-box-icon">🔢</span>
            <div>
                <h3>SE USA PARA EXPRESAR PROCESOS COMPLETOS Y TERMINADOS</h3>
                <p class="description">Para indicar que una acción o proceso se completó en un momento específico del pasado.</p>
                <p class="example">Encontré dinero cuando <span class="bold-text">bajé</span> la escalera (después de bajar completamente la escalera).</p>
            </div>
        </div>
        <div class="info-box">
            <span class="info-box-icon">🎤</span>
            <div>
                <h3>SE USA PARA DESCRIBIR EVENTOS ÚNICOS</h3>
                <p class="description">Para relatar hechos puntuales y terminados en el pasado.</p>
                <p class="example">El concierto <span class="bold-text">fue</span> increíble, <span class="bold-text">me gustó</span> mucho.</p>
            </div>
        </div>
    </div>
`,
forma: `
<div class="explanation-main-container">
    <h3 class="formacion-title">Formación del Pretérito Indefinido</h3>
    <p>Se forma añadiendo las siguientes terminaciones a la raíz del verbo.</p>
    <div class="conjugation-tables-wrapper">
        <div class="conjugation-table-box">
            <h4>Verbos Regulares</h4> 
            <h4>(-ar: Cantar)</h4>
            <table class="conjugation-table">
                <tr><td>Yo</td><td>cant<span class="bold-text">é</span></td></tr>
                <tr><td>Tú</td><td>cant<span class="bold-text">aste</span></td></tr>
                <tr><td>Él/Ella/Ud.</td><td>cant<span class="bold-text">ó</span></td></tr>
                <tr><td>Nosotros/as</td><td>cant<span class="bold-text">amos</span></td></tr>
                <tr><td>Vosotros/as</td><td>cant<span class="bold-text">asteis</span></td></tr>
                <tr><td>Ellos/as/Uds.</td><td>cant<span class="bold-text">aron</span></td></tr>
            </table>
        </div>
        <div class="conjugation-table-box">
            <h4>Verbos Regulares</h4> 
            <h4>(-er: Comer)</h4>
            <h4>(-ir: Vivir)</h4>
            <table class="conjugation-table">
                <tr><td>Yo</td><td>com<span class="bold-text">í</span> / viv<span class="bold-text">í</span></td></tr>
                <tr><td>Tú</td><td>com<span class="bold-text">iste</span> / viv<span class="bold-text">iste</span></td></tr>
                <tr><td>Él/Ella/Ud.</td><td>com<span class="bold-text">ió</span> / viv<span class="bold-text">ió</span></td></tr>
                <tr><td>Nosotros/as</td><td>com<span class="bold-text">imos</span> / viv<span class="bold-text">imos</span></td></tr>
                <tr><td>Vosotros/as</td><td>com<span class="bold-text">isteis</span> / viv<span class="bold-text">isteis</span></td></tr>
                <tr><td>Ellos/as/Uds.</td><td>com<span class="bold-text">ieron</span> / viv<span class="bold-text">ieron</span></td></tr>
            </table>
        </div>
    </div>
    <h3 class="irregular-list-title">Verbos Irregulares Comunes del Pretérito Indefinido</h3>
    <ul class="irregular-verbs-grid">
        <li><strong>Andar:</strong> anduve, anduviste, anduvo, anduvimos, anduvisteis, anduvieron</li>
        <li><strong>Caber:</strong> cupe, cupiste, cupo, cupimos, cupisteis, cupieron</li>
        <li><strong>Conducir:</strong> conduje, condujiste, condujo, condujimos, condujisteis, condujeron</li>
        <li><strong>Dar:</strong> di, diste, dio, dimos, disteis, dieron</li>
        <li><strong>Decir:</strong> dije, dijiste, dijo, dijimos, dijisteis, dijeron</li>
        <li><strong>Estar:</strong> estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron</li>
        <li><strong>Haber (auxiliar):</strong> hube, hubiste, hubo, hubimos, hubisteis, hubieron</li>
        <li><strong>Hacer:</strong> hice, hiciste, hizo, hicimos, hicisteis, hicieron</li>
        <li><strong>Ir / Ser:</strong> fui, fuiste, fue, fuimos, fuisteis, fueron</li>
        <li><strong>Poder:</strong> pude, pudiste, pudo, pudimos, pudisteis, pudieron</li>
        <li><strong>Poner:</strong> puse, pusiste, puso, pusimos, pusisteis, pusieron</li>
        <li><strong>Querer:</strong> quise, quisiste, quiso, quisimos, quisisteis, quisieron</li>
        <li><strong>Saber:</strong> supe, supiste, supo, supimos, supisteis, supieron</li>
        <li><strong>Traer:</strong> traje, trajiste, trajo, trajimos, trajisteis, trajeron</li>
        <li><strong>Venir:</strong> vine, viniste, vino, vinimos, vinisteis, vinieron</li>
        <li><strong>Ver:</strong> vi, viste, vio, vimos, visteis, vieron</li>
    </ul>
</div>
`

    },
    "imperfecto": {
        titulo: "Pretérito Imperfecto de Indicativo",
        uso: "Describir acciones habituales o repetidas en el pasado; describir situaciones o estados en el pasado; narrar acciones en progreso en el pasado.",
        ejemplo: "De niño, yo siempre <strong>jugaba</strong> en el parque. Ella <strong>leía</strong> un libro cuando la llamaste.",
        // img: "URL_DE_IMAGEN_PARA_IMPERFECTO", // Opcional
        contentHtml: `
        <div class="explanation-main-container">
            <div class="info-box">
                <span class="info-box-icon">🔄</span>
                <div>
                    <h3>ACCIONES HABITUALES O REPETIDAS EN EL PASADO</h3>
                    <p class="description">Para describir acciones que se realizaban con frecuencia o eran rutinarias en el pasado.</p>
                    <p class="example">Todos los veranos <span class="bold-text">íbamos</span> a la playa.</p>
                </div>
            </div>
            <div class="info-box">
                <span class="info-box-icon">📊</span>
                <div>
                    <h3>COMPARAR ANTES Y AHORA / DESCRIBIR SITUACIONES</h3>
                    <p class="description">Para describir cómo eran las cosas, personas o lugares en el pasado, a menudo contrastando con el presente.</p>
                    <p class="example">La casa <span class="bold-text">antes era</span> azul y <span class="bold-text">ahora es</span> blanca.</p>
                </div>
            </div>
            <div class="info-box">
                <span class="info-box-icon">⏳</span>
                <div>
                    <h3>ACCIONES EN PROGRESO EN EL PASADO</h3>
                    <p class="description">Para narrar acciones que estaban ocurriendo en un momento determinado del pasado, sin que se indique su finalización.</p>
                    <p class="example">Ella todavía <span class="bold-text">estudiaba</span> en la universidad en el año 2001.</p>
                </div>
            </div>
            <div class="info-box">
                <span class="info-box-icon">🖼️</span>
                <div>
                    <h3>DESCRIBIR PERSONAS, ANIMALES, OBJETOS, LUGARES EN EL PASADO</h3>
                    <p class="description">Para pintar un cuadro del pasado, describiendo estados, características o ambientes.</p>
                    <p class="example">El hotel <span class="bold-text">era</span> muy bonito. Todo <span class="bold-text">estaba</span> muy limpio.</p>
                </div>
            </div>
        </div>
        `,
        // PROPIEDAD 'FORMA' PARA EL IMPERFECTO:
        forma: `
            <div class="explanation-main-container">
                <h3 class="formacion-title">Formación del Pretérito Imperfecto de Indicativo</h3>
                <p>Se forma añadiendo las siguientes terminaciones a la raíz del verbo.</p>
                <div class="conjugation-tables-wrapper">
                    <div class="conjugation-table-box">
                        <h4>Verbos Regulares</h4>
                        <h4>(-ar: Cantar)</h4>
                        <table class="conjugation-table">
                            <tr><td>Yo</td><td>cant<span class="bold-text">aba</span></td></tr>
                            <tr><td>Tú</td><td>cant<span class="bold-text">abas</span></td></tr>
                            <tr><td>Él/Ella/Ud.</td><td>cant<span class="bold-text">aba</span></td></tr>
                            <tr><td>Nosotros/as</td><td>cant<span class="bold-text">ábamos</span></td></tr>
                            <tr><td>Vosotros/as</td><td>cant<span class="bold-text">abais</span></td></tr>
                            <tr><td>Ellos/as/Uds.</td><td>cant<span class="bold-text">aban</span></td></tr>
                        </table>
                    </div>
                    <div class="conjugation-table-box">
                        <h4>Verbos Regulares</h4>
                        <h4>(-er: Comer)</h4>
                        <h4>(-ir: Vivir)</h4>
                        <table class="conjugation-table">
                            <tr><td>Yo</td><td>com<span class="bold-text">ía</span> / viv<span class="bold-text">ía</span></td></tr>
                            <tr><td>Tú</td><td>com<span class="bold-text">ías</span> / viv<span class="bold-text">ías</span></td></tr>
                            <tr><td>Él/Ella/Ud.</td><td>com<span class="bold-text">ía</span> / viv<span class="bold-text">ía</span></td></tr>
                            <tr><td>Nosotros/as</td><td>com<span class="bold-text">íamos</span> / viv<span class="bold-text">íamos</span></td></tr>
                            <tr><td>Vosotros/as</td><td>com<span class="bold-text">íais</span> / viv<span class="bold-text">íais</span></td></tr>
                            <tr><td>Ellos/as/Uds.</td><td>com<span class="bold-text">ían</span> / viv<span class="bold-text">ían</span></td></tr>
                        </table>
                    </div>
                </div>
                <h3 class="irregular-list-title">Verbos Irregulares del Imperfecto (¡Solo 3!)</h3>
                <ul class="irregular-verbs-grid">
                    <li><strong>Ser:</strong> era, eras, era, éramos, erais, eran</li>
                    <li><strong>Ir:</strong> iba, ibas, iba, íbamos, ibais, iban</li>
                    <li><strong>Ver:</strong> veía, veías, veía, veíamos, veíais, veían</li>
                </ul>
            </div>
        `
    },
    "pluscuamperfecto": {
        titulo: "Pretérito Pluscuamperfecto",
        uso: "Acciones pasadas que ocurrieron antes de otra acción pasada.",
        ejemplo: "Cuando llegué, ella ya <strong>había salido</strong>.",
        //img: "https://placehold.co/300x150/000000/FFFFFF?text=Infografía+Pluscuamperfecto",
        contentHtml: `
        <div class="explanation-main-container">
        <div class="info-box">
            <span class="info-box-icon">⬅️</span>
            <div>
                <h3>ACCIONES ANTERIORES A OTRA EN EL PASADO</h3>
                <p class="example">Cuando llegó mi amigo, yo ya <span class="bold-text">había terminado</span> de comer. (Primero terminé, luego llegó)</p>
            </div>
        </div>
        <div class="info-box">
            <span class="info-box-icon">💡</span>
            <div>
                <h3>PARA DAR CONTEXTO EN EL PASADO</h3>
                <p class="example">No fuimos al concierto porque no <span class="bold-text">habíamos comprado</span> las entradas. (La razón de no ir, ocurrió antes)</p>
            </div>
        </div>
    </div>
`,
forma: `
    <div class="explanation-main-container">
        <h3 class="formacion-title">Formación del Pluscuamperfecto</h3>
        <div class="conjugation-tables-wrapper">
            <div class="conjugation-table-box">
                <h4>Auxiliar: Imperfecto de Indicativo de HABER</h4>
                <table class="conjugation-table">
                    <tr><td>Yo</td><td>había</td></tr>
                    <tr><td>Tú</td><td>habías</td></tr>
                    <tr><td>Él/Ella/Ud.</td><td>había</td></tr>
                    <tr><td>Nosotros/as</td><td>habíamos</td></tr>
                    <tr><td>Vosotros/as</td><td>habíais</td></tr>
                    <tr><td>Ellos/as/Uds.</td><td>habían</td></tr>
                </table>
            </div>
        </div>
        <h3 class="irregular-list-title">Más Participio Pasado (Regular e Irregular)</h3>
        <ul class="irregular-verbs-grid">
            <li><strong>Regulares:</strong> -ado (cantado), -ido (comido, vivido)</li>
            <li><strong>Irregulares Comunes:</strong> hecho, dicho, puesto, abierto, escrito, vuelto, roto, visto, cubierto, frito, muerto, resuelto, etc.</li>
            <li>Ejemplos: <span class="bold-text">había cantado</span>, <span class="bold-text">habíamos comido</span>, <span class="bold-text">habían hecho</span>.</li>
        </ul>
    </div>
`
    },
    "futuro": {
        titulo: "Futuro Simple (Imperfecto)",
        uso: "Acciones que ocurrirán en el futuro, probabilidad en el presente.",
        ejemplo: "Mañana <strong>iré</strong> al trabajo.",
        //img: "https://placehold.co/300x150/000000/FFFFFF?text=Infografía+Futuro",
        contentHtml: `
        <div class="explanation-main-container">
        <div class="info-box">
            <span class="info-box-icon">➡️</span>
            <div>
                <h3>ACCIONES FUTURAS CIERTAS</h3>
                <p class="description">Para hablar de eventos o acciones que sucederán en el futuro.</p>
                <p class="example">El año que viene, <span class="bold-text">viajaré</span> a México.</p>
            </div>
        </div>
        <div class="info-box">
            <span class="info-box-icon">❓</span>
            <div>
                <h3>PROBABILIDAD O CONJETURA EN EL PRESENTE</h3>
                <p class="description">Para expresar algo que suponemos o preguntamos sobre el presente.</p>
                <p class="example">¿Quién <span class="bold-text">estará</span> llamando a estas horas? (Supongo que es María).</p>
            </div>
        </div>
    </div>
        `,
        forma: `
    <div class="explanation-main-container">
        <h3 class="formacion-title">Formación del Futuro Simple</h3>
        <div class="conjugation-tables-wrapper">
            <div class="conjugation-table-box">
                <h4>(-ar: Cantar)</h4>
                <table class="conjugation-table">
                    <tr><td>Yo</td><td>cantar<span class="bold-text">é</span></td></tr>
                    <tr><td>Tú</td><td>cantar<span class="bold-text">ás</span></td></tr>
                    <tr><td>Él/Ella/Ud.</td><td>cantar<span class="bold-text">á</span></td></tr>
                    <tr><td>Nosotros/as</td><td>cantar<span class="bold-text">emos</span></td></tr>
                    <tr><td>Vosotros/as</td><td>cantar<span class="bold-text">éis</span></td></tr>
                    <tr><td>Ellos/as/Uds.</td><td>cantar<span class="bold-text">án</span></td></tr>
                </table>
            </div>
            <div class="conjugation-table-box">
            <h4>(-er: Comer)</h4>
            <h4>(-ir: Vivir)</h4>
                <table class="conjugation-table">
                    <tr><td>Yo</td><td>comer<span class="bold-text">é</span> / vivir<span class="bold-text">é</span></td></tr>
                    <tr><td>Tú</td><td>comer<span class="bold-text">ás</span> / vivir<span class="bold-text">ás</span></td></tr>
                    <tr><td>Él/Ella/Ud.</td><td>comer<span class="bold-text">á</span> / vivir<span class="bold-text">á</span></td></tr>
                    <tr><td>Nosotros/as</td><td>comer<span class="bold-text">emos</span> / vivir<span class="bold-text">emos</span></td></tr>
                    <tr><td>Vosotros/as</td><td>comer<span class="bold-text">éis</span> / vivir<span class="bold-text">éis</span></td></tr>
                    <tr><td>Ellos/as/Uds.</td><td>comer<span class="bold-text">án</span> / vivir<span class="bold-text">án</span></td></tr>
                </table>
            </div>
        </div>
        <h3 class="irregular-list-title">Verbos Irregulares del Futuro (Cambio de raíz)</h3>
        <ul class="irregular-verbs-grid">
            <li><strong>Decir:</strong> diré, dirás...</li>
            <li><strong>Haber:</strong> habré, habrás...</li>
            <li><strong>Hacer:</strong> haré, harás...</li>
            <li><strong>Poder:</strong> podré, podrás...</li>
            <li><strong>Poner:</strong> pondré, pondrás...</li>
            <li><strong>Querer:</strong> querré, querrás...</li>
            <li><strong>Saber:</strong> sabré, sabrás...</li>
            <li><strong>Salir:</strong> saldré, saldrás...</li>
            <li><strong>Tener:</strong> tendré, tendrás...</li>
            <li><strong>Valer:</strong> valdré, valdrás...</li>
            <li><strong>Venir:</strong> vendré, vendrás...</li>
        </ul>
    </div>
        `
    },
    "condicional": {
        titulo: "Condicional Simple",
        uso: "Consejos, deseos, suposiciones en el pasado, acciones futuras desde un punto de vista pasado.",
        ejemplo: "Me <strong>gustaría</strong> viajar más.",
        //img: "https://placehold.co/300x150/000000/FFFFFF?text=Infografía+Condicional",
        contentHtml: `
        <div class="explanation-main-container">
        <div class="info-box">
            <span class="info-box-icon">💡</span>
            <div>
                <h3>EXPRESAR SUGERENCIA (NIVEL B1)</h3>
                <p class="example"><span class="bold-text">Podríamos</span> ir a la playa.</p>
            </div>
        </div>
        <div class="info-box">
            <span class="info-box-icon">💭</span>
            <div>
                <h3>DESEOS DIFÍCILES DE REALIZAR (NIVEL-B1)</h3>
                <p class="example"><span class="bold-text">Me gustaría</span> tener más tiempo libre.</p>
            </div>
        </div>
        <div class="info-box">
            <span class="info-box-icon">🤝</span>
            <div>
                <h3>DAR CONSEJOS (NIVEL-B1)</h3>
                <p class="description">Para hacer recomendaciones con expresiones como: "Yo que tu.." o "Yo en tu lugar..".</p>
                <p class="example">Yo que tú <span class="bold-text">descansaría</span> más. Yo en tu lugar <span class="bold-text">haría</span> más deporte.</p>
            </div>
        </div>
        <div class="info-box">
            <span class="info-box-icon">🤔</span>
            <div>
                <h3>HIPÓTESIS O SITUACIONES IRREALES (NIVEL-B2)</h3>
                <p class="description">Para hablar de lo que puede pasar si se cumple una condición improbable.</p>
                <p class="example">Si hiciera sol, <span class="bold-text">iría</span> a la playa.</p>
            </div>
        </div>
    </div>
`,
forma: `
    <div class="explanation-main-container">
        <h3 class="formacion-title">Formación del Condicional Simple</h3>
        <div class="conjugation-tables-wrapper">
            <div class="conjugation-table-box">
                <h4>(-ar: Cantar)</h4>
                <table class="conjugation-table">
                    <tr><td>Yo</td><td>cantar<span class="bold-text">ía</span></td></tr>
                    <tr><td>Tú</td><td>cantar<span class="bold-text">ías</span></td></tr>
                    <tr><td>Él/Ella/Ud.</td><td>cantar<span class="bold-text">ía</span></td></tr>
                    <tr><td>Nosotros/as</td><td>cantar<span class="bold-text">íamos</span></td></tr>
                    <tr><td>Vosotros/as</td><td>cantar<span class="bold-text">íais</span></td></tr>
                    <tr><td>Ellos/as/Uds.</td><td>cantar<span class="bold-text">ían</span></td></tr>
                </table>
            </div>
            <div class="conjugation-table-box">
                <h4>(-er: Comer)</h4>
                <h4>(-ir: Vivir)</h4>
                <table class="conjugation-table">
                    <tr><td>Yo</td><td>comer<span class="bold-text">ía</span> / vivir<span class="bold-text">ía</span></td></tr>
                    <tr><td>Tú</td><td>comer<span class="bold-text">ías</span> / vivir<span class="bold-text">ías</span></td></tr>
                    <tr><td>Él/Ella/Ud.</td><td>comer<span class="bold-text">ía</span> / vivir<span class="bold-text">ía</span></td></tr>
                    <tr><td>Nosotros/as</td><td>comer<span class="bold-text">íamos</span> / vivir<span class="bold-text">íamos</span></td></tr>
                    <tr><td>Vosotros/as</td><td>comer<span class="bold-text">íais</span> / vivir<span class="bold-text">íais</span></td></tr>
                    <tr><td>Ellos/as/Uds.</td><td>comer<span class="bold-text">ían</span> / vivir<span class="bold-text">ían</span></td></tr>
                </table>
            </div>
        </div>
        <h3 class="irregular-list-title">Verbos Irregulares del Condicional (Cambio de raíz)</h3>
        <ul class="irregular-verbs-grid">
            <li><strong>Decir:</strong> diría, dirías...</li>
            <li><strong>Haber:</strong> habría, habrías...</li>
            <li><strong>Hacer:</strong> haría, harías...</li>
            <li><strong>Poder:</strong> podría, podrías...</li>
            <li><strong>Poner:</strong> pondría, pondrías...</li>
            <li><strong>Querer:</strong> querría, querrías...</li>
            <li><strong>Saber:</strong> sabría, sabrías...</li>
            <li><strong>Salir:</strong> saldría, saldrías...</li>
            <li><strong>Tener:</strong> tendría, tendrías...</li>
            <li><strong>Valer:</strong> valdría, valdrías...</li>
            <li><strong>Venir:</strong> vendría, vendrías...</li>
        </ul>
    </div>
`
    },
    "presente de subjuntivo": {
        titulo: "Presente de Subjuntivo",
        uso: "Expresar deseos, dudas, emociones, consejos, acciones futuras con incertidumbre.",
        ejemplo: "Espero que <strong>venga</strong> pronto.",
        //img: "https://placehold.co/300x150/000000/FFFFFF?text=Infografía+P.Subjuntivo",
        contentHtml: `
        <div class="explanation-main-container">
        <div class="info-box">
            <span class="info-box-icon">➡️</span>
            <div>
                <h3>DESEOS, EMOCIONES Y DUDAS</h3>
                <p class="description">Para hablar de lo que queremos, sentimos o si no estamos seguros.</p>
                <p class="example">Dudo que Pedro <span class=\"bold-text\">venga</span> a la fiesta. Me alegra que <span class=\"bold-text\">estés</span> aquí. Ojalá que <span class=\"bold-text\">sea</span> una fiesta genial.</p>
            </div>
        </div>
        <div class="info-box">
            <span class="info-box-icon">💡</span> 
            <div>
                <h3>RECOMENDAR Y ORDENAR CON IMPERATIVO NEGATIVO</h3>
                <p class="description">Para aconsejar o dar instrucciones de forma indirecta o negativa.</p>
                <p class="example">En cine <span class=\"bold-text\">no hables</span> por teléfono. No <span class=\"bold-text\">corras</span>.</p>
            </div>
        </div>
    </div>
    `,
    forma: `
    <div class="explanation-main-container">
    <h3 class="formacion-title">Formación del Presente de Subjuntivo</h3>
    <div class="conjugation-tables-wrapper">
        <div class="conjugation-table-box">
            <h4>Verbos Regulares</h4>
            <h4>(-ar: Cantar)</h4>
            <table class="conjugation-table">
                <tr><td>Yo</td><td>cant<span class=\"bold-text\">e</span></td></tr>
                <tr><td>Tú</td><td>cant<span class=\"bold-text\">es</span></td></tr>
                <tr><td>Él/Ella/Ud.</td><td>cant<span class=\"bold-text\">e</span></td></tr>
                <tr><td>Nosotros/as</td><td>cant<span class=\"bold-text\">emos</span></td></tr>
                <tr><td>Vosotros/as</td><td>cant<span class=\"bold-text\">éis</span></td></tr>
                <tr><td>Ellos/as/Uds.</td><td>cant<span class=\"bold-text\">en</span></td></tr>
            </table>
        </div>
        <div class="conjugation-table-box">
            <h4>Verbos Regulares</h4>
            <h4>(-er: Comer)</h4>
            <h4>(-ir: Vivir)</h4>
            <table class="conjugation-table">
                <tr><td>Yo</td><td>com<span class=\"bold-text\">a</span> / viv<span class=\"bold-text\">a</span></td></tr>
                <tr><td>Tú</td><td>com<span class=\"bold-text\">as</span> / viv<span class=\"bold-text\">as</span></td></tr>
                <tr><td>Él/Ella/Ud.</td><td>com<span class=\"bold-text\">a</span> / viv<span class=\"bold-text\">a</span></td></tr>
                <tr><td>Nosotros/as</td><td>com<span class=\"bold-text\">amos</span> / viv<span class=\"bold-text\">amos</span></td></tr>
                <tr><td>Vosotros/as</td><td>com<span class=\"bold-text\">áis</span> / viv<span class=\"bold-text\">áis</span></td></tr>
                <tr><td>Ellos/as/Uds.</td><td>com<span class=\"bold-text\">an</span> / viv<span class=\"bold-text\">an</span></td></tr>
            </table>
        </div>
            
            </div>
            <h3 class="irregular-list-title">Verbos Irregulares Comunes del Presente de Subjuntivo</h3>
            <ul class="irregular-verbs-grid">
                <li><strong>Dar:</strong> dé, des, dé...</li>
                <li><strong>Estar:</strong> esté, estés, esté...</li>
                <li><strong>Haber:</strong> haya, hayas, haya...</li>
                <li><strong>Ir:</strong> vaya, vayas, vaya...</li>
                <li><strong>Saber:</strong> sepa, sepas, sepa...</li>
                <li><strong>Ser:</strong> sea, seas, sea...</li>
                <li>
                    <span class=\"bold-text\">Verbos con cambio vocálico/consonántico en la raíz</span> (como Presente Indicativo 'yo' form):
                    <ul>
                        <li><strong>Tener:</strong> tenga, tengas...</li>
                        <li><strong>Hacer:</strong> haga, hagas...</li>
                        <li><strong>Decir:</strong> diga, digas...</li>
                        <li><strong>Poner:</strong> ponga, pongas...</li>
                        <li><strong>Venir:</strong> venga, vengas...</li>
                    </ul>
                </li>
                <li>
                    <span class=\"bold-text\">Verbos con cambio ortográfico</span> (-car > -que, -gar > -gue, -zar > -ce):
                    <ul>
                        <li><strong>Buscar:</strong> busque, busques...</li>
                        <li><strong>Llegar:</strong> llegue, llegues...</li>
                        <li><strong>Empezar:</strong> empiece, empieces...</li>
                    </ul>
                </li>
            </ul>
        </div>
    `
    },
    "imperfecto de subjuntivo": {
        titulo: "Imperfecto de Subjuntivo",
        uso: "Expresar deseos, dudas, emociones o consejos referidos al pasado o situaciones hipotéticas.",
        ejemplo: "Me gustaría que <strong>viniera</strong>.",
        //img: "https://placehold.co/300x150/000000/FFFFFF?text=Infografía+Imp.Subjuntivo",
        contentHtml: `
        <div class="explanation-main-container">
        <div class="info-box">
            <span class="info-box-icon">🕰️</span>
            <div>
                <h3>DESEOS Y SITUACIONES HIPOTÉTICAS PASADAS</h3>
                <p class="description">Para hablar de lo que desearíamos o lo que habría pasado si una condición pasada se cumpliera.</p>
                <p class="example">Me gustaría que <span class=\"bold-text\">fueras</span> a la fiesta. Si <span class=\"bold-text\">hubiera</span> estudiado, habría aprobado.</p>
            </div>
        </div>
        <div class="info-box">
            <span class="info-box-icon">🗣️</span>
            <div>
                <h3>CONSEJOS, SUGERENCIAS O PETICIONES CORTESES</h3>
                <p class="description">Para ofrecer consejos o hacer peticiones de forma más suave y educada.</p>
                <p class="example">Lo mejor sería que <span class=\"bold-text\">descansaras</span>. Quisiera que me <span class=\"bold-text\">ayudaras</span>.</p>
            </div>
        </div>
        <div class="info-box">
            <span class="info-box-icon">🕰️</span>
            <div>
                <h3>REPETIR INSTRUCCIONES PASADAS</h3>
                <p class="description">Para repetir o recordar instrucciones dadas en el pasado.</p>
                <p class="example">Te dije que <span class=\"bold-text\">fueras</span> a comprar pan. Te pedí que <span class=\"bold-text\">pintaras</span> las puertas, y no las has pintado.</p>
            </div>
        </div>
    </div>
`,
forma: `
    <div class="explanation-main-container">
        <h3 class="formacion-title">Formación del Imperfecto de Subjuntivo</h3>
        <p class="description">Se forma a partir de la <strong>tercera persona del plural del Pretérito Indefinido</strong> (ellos/ellas/Uds.), eliminando la terminación <strong>-ron</strong> y añadiendo las terminaciones correspondientes (-ra / -se).</p>
        <div class="conjugation-tables-wrapper">
        <div class="conjugation-table-box">
                    <h4>Verbos Regulares</h4>
                    <h4>(-ar: Cantar)</h4>
        <p class="description">(De "cantaron")</p>
        <table class="conjugation-table">
            <tr><td>Yo</td><td>canta<span class=\"bold-text\">ra</span> / canta<span class=\"bold-text\">se</span></td></tr>
            <tr><td>Tú</td><td>canta<span class=\"bold-text\">ras</span> / canta<span class=\"bold-text\">ses</span></td></tr>
            <tr><td>Él/Ella/Ud.</td><td>canta<span class=\"bold-text\">ra</span> / canta<span class=\"bold-text\">se</span></td></tr>
            <tr><td>Nosotros/as</td><td>cantá<span class=\"bold-text\">ramos</span> / cantá<span class=\"bold-text\">semos</span></td></tr>
            <tr><td>Vosotros/as</td><td>canta<span class=\"bold-text\">rais</span> / canta<span class=\"bold-text\">seis</span></td></tr>
            <tr><td>Ellos/as/Uds.</td><td>canta<span class=\"bold-text\">ran</span> / canta<span class=\"bold-text\">sen</span></td></tr>
        </table>
    </div>
    <div class="conjugation-table-box">
    <h4>Verbos Regulares</h4>
        <h4>(-er: Comer)</h4>
        <h4>(-ir: Vivir)</h4>
        <p class="description">(De "comieron" / "vivieron")</p>
        <table class="conjugation-table">
            <tr><td>Yo</td><td>comie<span class=\"bold-text\">ra</span> / comie<span class=\"bold-text\">se</span><br/>vivie<span class=\"bold-text\">ra</span> / vivie<span class=\"bold-text\">se</span></td></tr>
            <tr><td>Tú</td><td>comie<span class=\"bold-text\">ras</span> / comie<span class=\"bold-text\">ses</span><br/>vivie<span class=\"bold-text\">ras</span> / vivie<span class=\"bold-text\">ses</span></td></tr>
            <tr><td>Él/Ella/Ud.</td><td>comie<span class=\"bold-text\">ra</span> / comie<span class=\"bold-text\">se</span><br/>vivie<span class=\"bold-text\">ra</span> / vivie<span class=\"bold-text\">se</span></td></tr>
            <tr><td>Nosotros/as</td><td>comié<span class=\"bold-text\">ramos</span>/comié<span class=\"bold-text\">semos</span><br/>vivié<span class=\"bold-text\">ramos</span> / vivié<span class=\"bold-text\">semos</span></td></tr>
            <tr><td>Vosotros/as</td><td>comie<span class=\"bold-text\">rais</span> / comie<span class=\"bold-text\">seis</span><br/>vivie<span class=\"bold-text\">rais</span> / vivie<span class=\"bold-text\">seis</span></td></tr>
            <tr><td>Ellos/as/Uds.</td><td>comie<span class=\"bold-text\">ran</span> / comie<span class=\"bold-text\">sen</span><br/>vivie<span class=\"bold-text\">ran</span> / vivie<span class=\"bold-text\">sen</span></td></tr>
        </table>
    </div>
</div>
<h3 class="irregular-list-title">Verbos Irregulares del Imperfecto de Subjuntivo (Mismas raíces que Indefinido)</h3>
<p class="description">La irregularidad de la raíz es la misma que en la 3ª persona del plural del Pretérito Indefinido.</p>
<ul class="irregular-verbs-grid">
    <li><strong>Andar</strong> (anduvieron): anduviera/anduviese...</li>
    <li><strong>Caer</strong> (cayeron): cayera/cayese...</li>
    <li><strong>Conducir</strong> (condujeron): condujera/condujese...</li>
    <li><strong>Decir</strong> (dijeron): dijera/dijese...</li>
    <li><strong>Estar</strong> (estuvieron): estuviera/estuviese...</li>
    <li><strong>Haber</strong> (hubieron): hubiera/hubiese...</li>
    <li><strong>Hacer</strong> (hicieron): hiciera/hiciese...</li>
    <li><strong>Ir/Ser</strong> (fueron): fuera/fuese...</li>
    <li><strong>Poder</strong> (pudieron): pudiera/pudiese...</li>
    <li><strong>Poner</strong> (pusieron): pusiera/pusiese...</li>
    <li><strong>Querer</strong> (quisieron): quisiera/quisiese...</li>
    <li><strong>Saber</strong> (supieron): supiera/supiese...</li>
    <li><strong>Salir</strong> (salieron): saliera/saliese...</li>
    <li><strong>Tener</strong> (tuvieron): tuviera/tuviese...</li>
    <li><strong>Traer</strong> (trajeron): trajera/trajese...</li>
    <li><strong>Venir</strong> (vinieron): viniera/viniese...</li>
    <li><strong>Ver</strong> (vieron): viera/viese...</li>
</ul>
</div>
`
    },
    "pluscuamperfecto de subjuntivo": {
        titulo: "Pluscuamperfecto de Subjuntivo",
        uso: "Expresar acciones pasadas hipotéticas, irrealizables o anteriores a otro momento en el pasado.",
        ejemplo: "Si <strong>hubiera sabido</strong>, habría ido.",
        //img: "https://placehold.co/300x150/000000/FFFFFF?text=Infografía+Pluscuamperfecto+Subjuntivo",
        contentHtml: `
        <div class="explanation-main-container">
        <div class="info-box">
            <span class="info-box-icon">⏪</span>
            <div>
                <h3>HIPÓTESIS Y CONDICIONES EN EL PASADO (NO REALIZADAS)</h3>
                <p class="description">Para hablar de lo que habría pasado si una condición en el pasado se hubiera cumplido (que no lo hizo).</p>
                <p class="example">Si <span class=\"bold-text\">hubiera llegado</span> antes, te habría visto.</p>
            </div>
                </div>
                <div class="info-box">
                <span class="info-box-icon">😔</span>
            <div>
                <h3>EMOCIONES, DUDAS O LAMENTOS SOBRE EL PASADO</h3>
                <p class="description">Para expresar sentimientos o incertidumbre sobre algo que ocurrió o no ocurrió antes de otro punto en el pasado.</p>
                <p class="example">Lamentaba que no <span class=\"bold-text\">hubieras venido</span>. No creía que lo <span class=\"bold-text\">hubieras hecho</span>.</p>
            </div>
        </div>
    </div>
`,
        forma: `
        <div class="explanation-main-container">
        <h3 class="formacion-title">Formación del Pluscuamperfecto de Subjuntivo</h3>
        <p class="description">Se forma con el <strong>Imperfecto de Subjuntivo del verbo HABER</strong> más el <strong>Participio Pasado</strong> del verbo principal.</p>
        <div class="conjugation-tables-wrapper">
            <div class="conjugation-table-box">
                <h4>Auxiliar: Imperfecto de Subjuntivo de HABER</h4>
                <table class="conjugation-table">
                    <tr><td>Yo</td><td>hubiera / hubiese</td></tr>
                    <tr><td>Tú</td><td>hubieras / hubieses</td></tr>
                    <tr><td>Él/Ella/Ud.</td><td>hubiera / hubiese</td></tr>
                    <tr><td>Nosotros/as</td><td>hubiéramos / hubiésemos</td></tr>
                    <tr><td>Vosotros/as</td><td>hubierais / hubieseis</td></tr>
                    <tr><td>Ellos/as/Uds.</td><td>hubieran / hubiesen</td></tr>
                </table>
            </div>
        </div>
        <h3 class="irregular-list-title">Más Participio Pasado (Regular e Irregular)</h3>
        <ul class="irregular-verbs-grid">
            <li><strong>Regulares:</strong> -ado (cantado), -ido (comido, vivido)</li>
            <li><strong>Irregulares Comunes:</strong> hecho, dicho, puesto, abierto, escrito, vuelto, roto, visto, cubierto, frito, muerto, resuelto, etc.</li>
            <li>Ejemplos: <span class=\"bold-text\">hubiera cantado</span>, <span class=\"bold-text\">hubiéramos comido</span>, <span class=\"bold-text\">hubiesen hecho</span>.</li>
        </ul>
    </div>
`
    }
};