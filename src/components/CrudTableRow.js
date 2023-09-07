import React from "react";

// Definición del componente CrudTableRow
const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  // Desestructura las propiedades del objeto 'el' pasado como argumento
  let { idInstructor, name, startDate, endDate, oNetwork } = el;
  
  return (
    // Renderiza una fila de una tabla con los datos del objeto 'el'
    <tr>
      <td>{name}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      {/* Renderiza el nombre de la red ('oNetwork.networkName') o una cadena vacía si no está definido */}
      <td>{oNetwork ? oNetwork.networkName : ''}</td>
      <td>
        {/* Botón de edición que llama a la función 'setDataToEdit' con el objeto 'el' */}
        <button className="btn btn-warning" onClick={() => setDataToEdit(el)}>Editar</button>&nbsp;
        {/* Botón de eliminación que llama a la función 'deleteData' con 'idInstructor' como argumento */}
        <button className="btn btn-danger" onClick={() => deleteData(idInstructor)}>Eliminar</button>
      </td>
    </tr>
  );
};

// Exporta el componente CrudTableRow para su uso en otras partes de la aplicación
export default CrudTableRow;
