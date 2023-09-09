import React from "react";

// Definición de un componente Message que acepta dos propiedades: msg y bgColor
const Message = ({ msg, bgColor }) => {
  // Definición de estilos para el componente
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };

  return (
    // Renderización del componente
    <div style={styles}>
      {/* Renderización del mensaje HTML de manera segura */}
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};

// Exportación del componente Message para su uso en otras partes de la aplicación
export default Message;
