import React from "react";
import Navbar from "./Navbar"; 

const Welcome = ({setPage}) => {
    return (
        <div className="welcome-container">
            <div className="welcome-message">
                <h1>¡Felicidades por dar el primer paso!</h1>
                <p>Has iniciado un viaje hacia la motivación y la disciplina. ¡Vamos a explorar juntos!</p>
            </div>
            <Navbar setPage={setPage} />
        </div>
    );
};

export default Welcome;