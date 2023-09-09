import React from "react";
import "./Loader.css"; // Se importa el archivo de hoja de estilo CSS para el componente Loader

// Definición del componente Loader
const Loader = () => {
    return (
        // Renderización de un elemento div con la clase "lds-dual-ring" para mostrar el loader
        <div className="lds-dual-ring"></div>
    );
}

// Exportación del componente Loader para su uso en otras partes de la aplicación
export default Loader;
