import React from "react";
import CrudTableRow from "./CrudTableRow";

// Definición del componente CrudTable
const CrudTable = ({ data, setDataToEdit, deleteData, showFormView }) => {
    return (
        // Contenedor principal del componente
        <div className="App">
            <div className="card-body center-table">
                <div className="table-responsive">
                    {/* Encabezado de la tabla */}
                    <h3 className="h3Table">Instructores Contratistas :</h3>
                    <br></br>
                    <table className="table center-table">
                        <thead>
                            <tr>
                                <th className="thLeft">Nombre</th>
                                <th className="thTable">Fecha Inicio:</th>
                                <th className="thTable">Fecha Fin:</th>
                                <th className="thTable">Nombre de la Red:</th>
                                <th className="thRight">Acciones:</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* Condicional para manejar el caso en que no haya datos */}
                            {data.length > 0 ? (
                                // Mapeo de datos para renderizar filas de la tabla
                                data.map((el) => (
                                    <CrudTableRow
                                        key={el.id}
                                        el={el}
                                        setDataToEdit={setDataToEdit}
                                        deleteData={deleteData}
                                        showFormView={showFormView} // Asegúrate de pasar showFormView como prop
                                    />
                                ))
                            ) : (
                                // Mostrar mensaje de "Sin datos" si no hay elementos en 'data'
                                <tr>
                                    <td colSpan="3">Sin datos</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// Exporta el componente CrudTable para su uso en otras partes de la aplicación
export default CrudTable;