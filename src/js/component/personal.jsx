import React from "react";
import "/src/styles/personal.css";

const Personal = ({setPage}) => {
    return (
        
        <div className="personal-container">
            <button className="btn btn-viajar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                Elegir otro destino
            </button>

            <div className="mundo-personal-title">
                <h1><strong>Mundo Personal</strong></h1>
            </div>
            <div className="mundo-personal-body">
                <p>
                    Bienvenido al mundo personal.<br />
                    Aquí descubrirás cómo lograr un equilibrio en tu vida<br />
                    y alcanzar tus metas personales.
                </p>
            </div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Explorar otros mundos</h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <button className="btn btn-outline-dark w-100" onClick={() => {setPage("laboral")}}>Mundo Laboral</button>
                        </li>
                        <li className="list-group-item">
                            <button className="btn btn-outline-dark w-100">Mundo Académico</button>
                        </li>
                        <li className="list-group-item">
                            <button className="btn btn-outline-dark w-100">Mundo Deportivo</button>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className="contenido-personal">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link" id="nav-introduccion-tab" data-bs-toggle="tab" data-bs-target="#nav-introduccion" type="button" role="tab" aria-controls="nav-introduccion" aria-selected="false">Reflexión personal</button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-tecnicas" type="button" role="tab" aria-controls="nav-tecnicas" aria-selected="false"> Técnicas de motivación</button>
                    <button className="nav-link" id="nav-habitos-tab" data-bs-toggle="tab" data-bs-target="#nav-habitos" type="button" role="tab" aria-controls="nav-habitos" aria-selected="false">Hábitos saludables</button>
                    <button className="nav-link" id="nav-recursos-tab" data-bs-toggle="tab" data-bs-target="#nav-recursos" type="button" role="tab" aria-controls="nav-recursos" aria-selected="false">Recursos y herramientas</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade" id="nav-introduccion" role="tabpanel" aria-labelledby="nav-introduccion-tab" tabindex="0">
                    <ul>
                        <li>Pregúntate: ¿Qué quiero lograr?</li>
                        <li>Establece metas claras y alcanzables.</li>
                    </ul>
                </div>
                <div className="tab-pane fade" id="nav-tecnicas" role="tabpanel" aria-labelledby="nav-tecnicas-tab" tabindex="0">
                    <ul>
                        <li>Comienza tu día con afirmaciones positivas.</li>
                        <li>Escribe tus logros diarios en un diario.</li>
                    </ul>
                </div>
                <div className="tab-pane fade" id="nav-habitos" role="tabpanel" aria-labelledby="nav-habitos-tab" tabindex="0">
                    <ul>
                        <li>Evita el uso excesivo de pantallas antes de dormir.</li>
                        <li>Tómate 10 minutos al día para meditar.</li>
                    </ul>
                </div>
                <div className="tab-pane fade" id="nav-recursos" role="tabpanel" aria-labelledby="nav-recursos-tab" tabindex="0">
                    <ul>
                        <li><strong>Libros:</strong> Los 7 hábitos de la gente altamente efectiva.</li>
                        <li><strong>Aplicaciones:</strong> Notion, Trello, Google Calendar.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Personal;
