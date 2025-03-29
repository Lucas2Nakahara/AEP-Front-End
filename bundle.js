import React, { useState } from "react";
import ReactDOM from "react-dom";

const SolutionList = () => {
    const [solutions, setSolutions] = useState([]);

    const showSolutions = () => {
        setSolutions([
            { title: "Transporte Público Inteligente", description: "Uso de IA para otimizar rotas e reduzir congestionamentos." },
            { title: "Gestão de Resíduos", description: "Adoção de reciclagem automatizada e economia circular para reduzir desperdício." }
        ]);
    };

    return (
        <div>
            <button onClick={showSolutions}>Ver Soluções</button>
            <div>
                {solutions.map((sol, index) => (
                    <div key={index} className="problema-card">
                        <h3>{sol.title}</h3>
                        <p>{sol.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Renderiza o React no <div id="root">
ReactDOM.render(<SolutionList />, document.getElementById("root"));