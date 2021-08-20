// Predefined packages
import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import file from '../../img/file.png';

const Terminos = () => {
    return (
        <div className="layout__grid">
            <aside className="grid__sidebarnav grid__sidebarnav--terminos">
                <ul className="block no-margin">
                    <Link className="grid__enlace" to="/">Volver</Link>
                    <Link className="grid__enlace" href="/#">Introducción</Link>
                    <Link className="grid__enlace" href="/#">Términos del servicio</Link>
                    <Link className="grid__enlace" href="/#">Términos de privacidad</Link>
                    <Link className="grid__enlace" href="/#">Términos de cookies</Link>
                </ul>
            </aside>

            <main>
                <h1 className="centrar-texto">Términos y Condiciones</h1>

                <img className="main__imagen" src={file} alt="Icono resumen" />

                <div className="contenedor">

                    <p className="contenedor__parrafo">Apreciado visitante: el sitio Web de (la Entidad) tiene como función principal proveer
                        información sobre los trámites y servicios que presta a la ciudadanía, así como promover
                        y divulgar (relacionar objeto de divulgación principal). Por medio de su página
                        www.xxxxxx.gov.co (en adelante el Sitio Web) la Entidad, publica los temas y
                        actividades relacionados con su misión, su visión, objetivos y las funciones que
                        corresponden a su objeto social, permite la opción de solicitar trámites en línea y ofrece
                        herramientas de interacción para los usuarios del sitio, además de brindar información e
                        interés general.</p>

                    <p>(La Entidad) no persigue ningún lucro, ganancia o interés comercial con los contenidos,
                        imágenes, videos o enlaces que se publican en su sitio web y en sus subdominios.</p>

                    <p>(La Entidad) solicita al visitante de esta página, que lea detallada y juiciosamente estas
                        condiciones, antes de iniciar su exploración. Si por cualquier motivo no está de acuerdo
                        con estas condiciones, le sugerimos que se abstenga de acceder o navegar por el sitio
                        web. </p>



                    <button className="accordion">Aceptación de Términos</button>
                    <div className="panel">
                        <p>Se presume que cuando un usuario accede al sitio web www.xxxxxx.gov.co lo hace bajo
                            su total responsabilidad; por lo tanto, acepta plenamente y sin reservas el contenido de
                            los siguientes términos y condiciones de uso del sitio web de la entidad. (La Entidad) se
                            reserva, en todos los sentidos, el derecho de actualizar y/o modificar en cualquier
                            momento y de cualquier forma, de manera unilateral y sin previo aviso, las presentes
                            condiciones de uso y los contenidos del sitio web, teniendo en cuenta los criterios de
                            publicación previamente establecidos por la entidad.
                        </p>
                    </div>

                    <button className="accordion">Contenidos del Sitio Web </button>
                    <div className="panel">
                        <p>www.xxxxxx.gov.co tiene por finalidad brindar al usuario todo tipo de información
                            relacionada con la gestión de la entidad, por medio de boletines, cifras, noticias, etc. En
                            ningún caso esta información deberá considerarse como exhaustiva, completa o que de
                            cualquier forma satisfaga todas las necesidades del Usuario. Igualmente, el Sitio Web
                            contiene información elaborada o recopilada por (La Entidad) o por terceros, con fines
                            informativos, y divulgativos; esta información se puede modificar o retirar en cualquier
                            momento y sin aviso previo. Las opiniones o comentarios realizados por los Usuarios no
                            reflejan necesariamente la opinión de la Entidad y los usuarios no pueden usar dicha
                            información para emitir publicidad. </p>

                        <p> Este Sitio Web puede tener enlaces a otros sitios de interés o a documentos localizados
                            en otros sitios web de propiedad de otras entidades, personas u organizaciones diferentes
                            a (La Entidad). En caso de que el usuario acceda a otro sitio web o a un documento
                            individual localizado en otra página, a través de un link o un vínculo establecido en
                            www.xxxxxx.gov.co, el usuario deberá someterse a las condiciones de uso y a la política
                            de privacidad de la página web a la que envía el link. El establecimiento de un vínculo o
                            link con el sitio web de otra entidad, empresa o persona, no implica necesariamente la
                            existencia de relaciones entre (La Entidad) y el propietario del Sitio Web vinculado, ni la
                            aceptación o aprobación por parte de (La Entidad) de sus contenidos o servicios. </p>

                        <p> Los vínculos o links que aparecen en el Sitio Web tienen como propósito informar al
                            Visitante sobre la existencia de otras fuentes susceptibles de ampliar los contenidos que
                            ofrece www.xxxxxx.gov.co, o que guardan relación con aquéllos. (La Entidad) no
                            garantiza ni se responsabiliza del funcionamiento o accesibilidad de las páginas web
                            enlazadas; ni sugiere, invita o recomienda la visita a las mismas, por lo que tampoco será
                            responsable del resultado obtenido. Así mismo, (La Entidad) no se hace responsable
                            respecto a la información que se halle fuera de este Sitio Web y no sea gestionada
                            directamente por el administrador del Sitio Web. </p>

                        <p> Por otra parte, se informa que la prestación del servicio del Sitio Web es de carácter libre
                            y gratuito para los usuarios y se rige por los términos y condiciones del presente
                            documento, los cuales se entienden como conocidos y aceptados por los usuarios del
                            sitio. </p>

                        <p> Se prohíbe el uso del Sitio Web que de cualquier forma sobrecargue, dañe o inutilice las
                            redes, servidores y demás equipos informáticos o productos y aplicaciones informáticas
                            de (La Entidad) o de terceros. </p>

                        <p> (La Entidad) no se hace responsable del servicio ininterrumpido o libre de error de la
                            página. La entidad hace su mejor esfuerzo para que el contenido suministrado sea de
                            óptima calidad y en tal sentido el Usuario acepta utilizar el servicio. Asimismo, el Usuario
                            del Sitio Web no alterará, bloqueará o realizará cualquier otro acto que impida mostrar o
                            acceder a cualquier contenido, información o servicios del Sitio Web o que estén
                            incorporados en las páginas web vinculadas. </p>

                        <p> (La Entidad) no se hará responsable de ningún daño ocasionado en virtud de cualquier
                            alteración que se haya efectuado a los materiales o archivos de descarga suministrados
                            directamente por la entidad. </p>

                        <p> El Usuario no enviará o transmitirá en el Sitio Web o hacia el mismo, a otros usuarios o a
                            cualquier persona, información de contenido obsceno, difamatorio, injuriante, calumniante,
                            racista, sexista o discriminatorio contra cualquier persona, o contra (La Entidad),
                            entidades adscritas, sus funcionarios o contra los responsables de la administración del
                            Sitio Web. </p>
                    </div>

                    <button className="accordion">Propiedad del contenido de la página</button>
                    <div className="panel">
                        <p>www.xxxxxx.gov.co y su contenido son de propiedad de (La Entidad). Está prohibida su
                            reproducción total o parcial, su traducción, inclusión, transmisión, almacenamiento o
                            acceso a través de medios analógicos, digitales o de cualquier otro sistema o tecnología
                            creada, sin autorización previa y escrita de (La Entidad). En caso de uso personal y no
                            comercial de información del sitio se debe hacer expresa mención de la propiedad en
                            cabeza de (La Entidad).
                        </p>

                        <p>La propiedad intelectual sobre los contenidos del Sitio Web o bien hacen parte del
                            patrimonio de (La Entidad) o, en su caso, su titularidad es de terceros que autorizaron el
                            uso de los mismos en el Sitio Web o es información pública que se rige por las leyes de
                            acceso a la información pública colombianas.
                        </p>

                        <p>Los textos, elementos gráficos, logotipos y marcas de la página Web que constituyen la
                            página Web, así como su presentación y montaje, son titularidad exclusiva de (La
                            Entidad) o ésta ostenta los derechos de explotación necesarios. Sin perjuicio de lo
                            anterior, los nombres comerciales, marcas o signos distintivos que aparecen o a los que
                            se hace alusión en el Sitio Web, pertenecen a sus respectivos propietarios y se
                            encuentran protegidos por la legislación vigente al respecto; así mismo, los titulares son
                            responsables de cualquier posible controversia que pudiera darse respecto de ellos. Los
                            titulares de dichas marcas y logotipos se reservan el derecho de entablar las acciones
                            legales que consideren convenientes para hacer valer sus derechos tanto en Colombia
                            como en el exterior.</p>

                        <p>En caso de reclamaciones que pudieran interponerse por los usuarios o por terceros en
                            relación con posibles incumplimientos de los derechos de propiedad intelectual sobre
                            cualquiera de los contenidos del Sitio Web, deberán dirigirse a la siguiente dirección de
                            correo electrónico: xxxxxxxxxxx@xxxxxx. Una vez notificado a este correo, dicho
                            contenido será automáticamente eliminado del Sitio Web hasta que quien haya publicado
                            el contenido en disputa haya resuelto el conflicto con quién envía la reclamación.
                        </p>
                    </div>

                    <button className="accordion">Privacidad </button>
                    <div className="panel">
                        <p>Se entiende por información personal aquella suministrada por el Usuario para el registro,
                            la cual incluye datos como nombre, identificación, edad, género, dirección, correo
                            electrónico y teléfono.
                        </p>

                        <p> El almacenamiento, y uso de la información personal se rige por la política de protección
                            de datos personales.
                        </p>
                    </div>

                    <button className="accordion">Ley aplicable y jurisdicción</button>
                    <div className="panel">
                        <p>Estas condiciones de uso del Sitio Web se rigen por las leyes de la República de
                            Colombia. El usuario no podrá manifestar ante la (La Entidad) o ante una autoridad
                            judicial o administrativa, la aplicación de condición, norma o convenio que no esté
                            expresamente incorporado en las presentes condiciones de uso.
                        </p>

                        <p> Para cualquier efecto legal o judicial, el lugar de las presentes condiciones es la ciudad de
                            Bogotá, República de Colombia, y cualquier controversia que surja de su interpretación o
                            aplicación se someterá a los jueces de la República de Colombia.
                        </p>
                    </div>

                    <button className="accordion">Duración y Terminación</button>
                    <div className="panel">
                        <p>La prestación del servicio del Sitio Web tiene una duración indefinida. Sin embargo, la
                            entidad podrá dar por terminada o suspender la prestación de este servicio en cualquier
                            momento teniendo en cuenta un análisis de viabilidad. En caso de que se llegue a
                            presentar esta situación, (La Entidad) informará previamente sobre el hecho, para evitar
                            mayores traumatismos.
                        </p>

                        <p> Para cualquier efecto legal o judicial, el lugar de las presentes condiciones es la ciudad de
                            Bogotá, República de Colombia, y cualquier controversia que surja de su interpretación o
                            aplicación se someterá a los jueces de la República de Colombia.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Terminos;