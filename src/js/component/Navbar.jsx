import React from "react";

const Navbar = ({setPage}) => {
    return (
        <div>
            <button className="btn btn-warning fw-bold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasExample">
                Elegir destino
            </button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" data-bs-backdrop="false">
                <div className="offcanvas-header">
                    <h2 className="offcanvas-title" id="offcanvasRightLabel">
                      Mundos disponibles
                    </h2>
                     <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                     </button>
                </div>
                <div className="offcanvas-body">
                    <div className="mundo-personal-button">
                     <button type="button" class="btn btn-outline-light w-100" onClick={() => {
                                setPage("personal");
                            }}
                        >
                            Personal</button>
                     <p className="hidden-text">¿Estas listo para hacer un cambio en tu vida?<br/>
                        Exploremos lo que eres y lo que quieres ser<br/>
                        ¿Te atreves?
                     </p>
                    </div>
                    <div className="mundo-laboral-button">
                        <button type="button" class="btn btn-outline-light w-100" onClick={() => {
                                setPage("laboral");
                            }}>Laboral</button>
                        <p className="hidden-text2">
                            ¿Listo para avanzar en tu carrera profesional?<br />
                            Descubre herramientas para alcanzar tus metas<br />
                            ¡El éxito está a tu alcance!
                        </p>

                    </div>
                    <div className="mundo-estudiantil-button">
                        <button type="button" class="btn btn-outline-light w-100">Academico</button>
                        <p className="hidden-text3">
                            ¿Tienes ganas de aprender y crecer?<br />
                            Organiza tus estudios, cumple tus objetivos<br />
                            ¡Dale forma a tu futuro hoy!
                        </p>
                    </div>
                    <div className="mundo-deportivo-button">
                        <button type="button" class="btn btn-outline-light w-100">Deportivo</button>
                        <p className="hidden-text4">
                            La clave para una vida activa está en tus manos.<br />
                            Mejora tu salud, supera tus límites<br />
                            ¡El momento de empezar es ahora!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;