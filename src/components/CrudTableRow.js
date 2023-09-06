import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { idInstructor, name, startDate, endDate, oNetwork } = el;
  
  return (
    <tr>
      <td>{name}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td>{oNetwork ? oNetwork.networkName : ''}</td>
      <td>
        <button className="btn btn-warning" onClick={() => setDataToEdit(el)}>Editar</button>&nbsp;
        <button className="btn btn-danger" onClick={() => deleteData(idInstructor)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
