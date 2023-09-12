import React from "react";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const CrudTableRow = ({ el, setDataToEdit, deleteData, showFormViewFullTimeInstructor }) => {
  // Desestructura las propiedades del objeto 'el' pasado como argumento
  let { idInstructor, name, position, oNetwork } = el;

  return (
    // Renderiza una fila de una tabla con los datos del objeto 'el'
    <tr>
      <td className="tdTableRow">{name}</td>
      <td className="tdTableRow">{position}</td>
      {/* Renderiza el nombre de la red ('oNetwork.networkName') o un mensaje de carga si no está definido */}
      <td className="tdTableRow">
        {oNetwork ? (
          oNetwork.networkName
        ) : (
          el.loading ? (<span>Cargando...</span>) : null // Verifica si el objeto 'el' tiene una propiedad 'loading'
        )}
      </td>
      <td className="tdTableRow">
        {/* Botón de edición que llama a la función 'setDataToEdit' con el objeto 'el' */}
        <button className="btn btn-warning" onClick={() => {
          setDataToEdit(el); // Establece el objeto 'el' como dato para editar
          showFormViewFullTimeInstructor(); // Llama a la función 'showFormViewFullTimeInstructor' para mostrar el formulario
        }}><FontAwesomeIcon icon={faUserPen} />    </button>&nbsp; {/* Botón de eliminación que llama a la función 'deleteData' con 'idInstructor' como argumento */}
        <button className="btn btn-danger" onClick={() => deleteData(idInstructor, el)}>
        <FontAwesomeIcon icon={faTrash} /></button>      </td>
    </tr>
  );
};

// Exporta el componente CrudTableRow para su uso en otras partes de la aplicación
export default CrudTableRow;
