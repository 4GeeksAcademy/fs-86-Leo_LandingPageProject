import React, { useState } from "react";
import Welcome from "./welcome.jsx"; 
import Personal from "./personal.jsx";
import Laboral from "./laboral.jsx";

const Home = () => {
    const [page, setPage] = useState("home");
    if (page === "home") {
        return (
            <div className="home-container">
                <div className="intro">
                    <h1>Motivación y Disciplina</h1>
                    <p>
                        La motivación y la disciplina son los pilares que sostienen nuestros sueños.
                        En este viaje, exploraremos mundos que te ayudarán a alcanzar tus metas y a construir
                        un futuro lleno de propósito.
                    </p>
                    <button className="btn btn-dark" onClick={() => setPage("welcome")}>
                        Empecemos el viaje
                    </button>
                </div>
            </div>
        );
    }else if (page === "welcome") {
        return (
            <Welcome setPage={setPage} /> 
        );
    } else if (page === "personal") {
        return <Personal  setPage={setPage}/>;
    } else if(page ==="laboral"){
        return <Laboral setPage={setPage}/>;
    }else {
        return null; 
    };
};

export default Home;