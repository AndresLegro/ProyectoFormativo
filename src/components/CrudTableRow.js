import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData, showFormView }) => {
  // Desestructura las propiedades del objeto 'el' pasado como argumento
  let { idInstructor, name, startDate, endDate, oNetwork } = el;

  // Convierte las fechas de DateTime a Date
  const startDateAsDate = new Date(startDate);
  const endDateAsDate = new Date(endDate);

  // Opciones para formatear la fecha en español
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    // Renderiza una fila de una tabla con los datos del objeto 'el'
    <tr>
      <td>{name}</td>
      <td>{startDateAsDate.toLocaleDateString('es-ES', options)}</td>
      <td>{endDateAsDate.toLocaleDateString('es-ES', options)}</td>
      {/* Renderiza el nombre de la red ('oNetwork.networkName') o un mensaje de carga si no está definido */}
      <td>
        {oNetwork ? (
          oNetwork.networkName
        ) : (
          el.loading ? (<span>Cargando...</span>) : null // Verifica si el objeto 'el' tiene una propiedad 'loading'
        )}
      </td>
      <td>
        {/* Botón de edición que llama a la función 'setDataToEdit' con el objeto 'el' */}
        <button className="btn btn-warning" onClick={() => {
          setDataToEdit(el); // Establece el objeto 'el' como dato para editar
          showFormView(); // Llama a la función 'showFormView' para mostrar el formulario
        }}>
          Editar
        </button>&nbsp;        {/* Botón de eliminación que llama a la función 'deleteData' con 'idInstructor' como argumento */}
        <button className="btn btn-danger" onClick={() => deleteData(idInstructor , el)}>Eliminar</button>
      </td>
    </tr>
  );
};

// Exporta el componente CrudTableRow para su uso en otras partes de la aplicación
export default CrudTableRow;
