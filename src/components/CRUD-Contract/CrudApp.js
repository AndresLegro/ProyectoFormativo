import React, { useEffect, useState } from "react";
import CrudForm from "./CrudForm"; // Importa el componente de formulario
import CrudTable from "./CrudTable"; // Importa el componente de tabla
import { helpHttp } from "../../helpers/helpHttp"; // Ajusta la ruta de importación
import Loader from "./Loader"; // Importa el componente de carga
import Message from "./Message"; // Importa el componente de mensajes
import "./main.css";


const CrudApp = () => {
  const [db, setDb] = useState([]); // Estado para almacenar los datos de instructores
  const [dataToEdit, setDataToEdit] = useState(null); // Estado para datos de edición
  const [error, setError] = useState(null); // Estado para gestionar errores
  const [loading, setLoading] = useState(true); // Estado para mostrar una carga en progreso

  const [showForm, setShowForm] = useState(false); // Estado para mostrar el formulario
  const [showRecords, setShowRecords] = useState(true); // Estado para mostrar registros

  let api = helpHttp(); // Instancia de la utilidad de solicitud HTTP

  useEffect(() => {
    loadTableData(); // Cuando el componente se monta, carga los datos iniciales
  }, []);

  // Función para cargar los datos de la tabla
  const loadTableData = () => {
    let urlGet = "http://www.mendezmrf10.somee.com/api/ContractInstructor/List";

    api.get(urlGet).then((res) => {
      if (!res.err) {
        setDb(res.response); // Almacena los datos en el estado 'db'
        setError(null); // Limpia los errores
      } else {
        setDb([]); // Establece un arreglo vacío en 'db' en caso de error
        setError(`Error ${res.status}: ${res.statusText}`);
      }

      setLoading(false); // Establece 'loading' en falso después de cargar los datos
    });
  };

  // Función para crear un nuevo instructor
  const createData = (data) => {
    let urlPost = "http://www.mendezmrf10.somee.com/api/ContractInstructor/Save";

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(urlPost, options).then((res) => {
      if (!res.err) {
        // Después de agregar un registro, recarga los datos
        loadTableData();
      } else {
        setError(res);
      }
    });
  };

  // Función para actualizar un instructor existente
  const updateData = (data) => {
    let urlPut = "http://www.mendezmrf10.somee.com/api/ContractInstructor/Edit";

    let options = { body: data, headers: { "content-type": "application/json" } };

    api.put(urlPut, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) =>
          el.idInstructor === data.idInstructor ? data : el
        );
        setDb(newData); // Actualiza 'db' con los nuevos datos
      } else {
        setError(res);
      }
    });
  };

  // Función para eliminar un instructor
  const deleteData = (idInstructor, data) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar al Instructor: '${data.name}'?`
    );

    if (isDelete) {
      let urlDel = "http://www.mendezmrf10.somee.com/api/ContractInstructor/Delete";
      let endPoint = `${urlDel}/${idInstructor}`;

      let options = { headers: { "content-type": "application/json" } };

      api.del(endPoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.idInstructor !== idInstructor);
          setDb(newData); // Actualiza 'db' eliminando el instructor
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  // Funciones para controlar las vistas
  const showFormView = () => {
    setShowForm(true);
    setShowRecords(false);
    setDataToEdit(null);
  };

  const showRecordsView = () => {
    setShowForm(false);
    setShowRecords(true);
  };

  return (
    <div>
      {showForm && (
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
      )}
      {showRecords && (
        <div>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />
          ) : db ? (
            <CrudTable
              data={db}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
              showFormView={showFormView}
            />
          ) : null}
        </div>
      )}
      <br></br>
      <div className="containerButtons">
        <button className="btn addButton" onClick={showFormView}>
          Registrar Nuevo Instructor
        </button>
        &nbsp;
        <button className="btn showButton" onClick={showRecordsView}>
          Ver Registros
        </button>
      </div>
    </div>
  );
};

export default CrudApp;
