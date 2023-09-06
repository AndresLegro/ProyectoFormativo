import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
    return (
        <div className="App card">
            <div className="card-body">
            <div className="table-responsive">

            <h3>Tabla de Datos</h3>
            <table className="table table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Start Date:</th>
                        <th>End Date:</th>
                        <th>Nombre de la Red:</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan="3">Sin datos</td>
                        </tr>
                    ) : (
                        data.map((el) => 
                        <CrudTableRow 
                        key={el.idInstructor} 
                        el={el}
                        setDataToEdit = {setDataToEdit}
                        deleteData= {deleteData} 
                        />)
                    )}
                </tbody>
            </table>
        </div>
        </div>
        </div>
    );
};

export default CrudTable;
