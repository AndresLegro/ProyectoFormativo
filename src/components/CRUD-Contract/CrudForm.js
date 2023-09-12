import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa estilos de Bootstrap
import { helpHttp } from "../../helpers/helpHttp"; // Importa una utilidad para realizar solicitudes HTTP
import "./main.css";

// Define un objeto con valores iniciales para el formulario
const initialForm = {
  name: "",
  startDate: "",
  endDate: "",
  networkId: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  // Define estados para el formulario y las opciones de red
  const [form, setForm] = useState(initialForm);
  const [networkOptions, setNetworkOptions] = useState([]);
  const api = helpHttp(); // Instancia de la utilidad de solicitud HTTP

  // Efecto que se ejecuta cuando cambia 'dataToEdit' para cargar datos de edición
  useEffect(() => {
    if (dataToEdit) {
      // Formatea las fechas al formato ISO 8601 antes de asignarlas al estado
      const formattedStartDate = new Date(dataToEdit.startDate).toISOString().split('T')[0];
      const formattedEndDate = new Date(dataToEdit.endDate).toISOString().split('T')[0];
  
      // Asigna los datos de edición al estado del formulario
      setForm({
        ...dataToEdit,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
      });
    } else {
      setForm(initialForm); // Si no hay datos de edición, reinicia el formulario
    }
  }, [dataToEdit]);

  // Efecto que carga las opciones de red desde una API al montar el componente
  useEffect(() => {
    const urlNetwork = "http://www.mendezmrf10.somee.com/api/Network/List";
    
    api.get(urlNetwork).then((res) => {
      if (!res.err) {
        setNetworkOptions(res.response); // Almacena las opciones de red en el estado
      } else {
        console.error("Error al obtener las opciones de red:", res.err);
      }
    });
  }, [api]);

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  
  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.startDate.trim() || !form.endDate.trim()) {
      alert("Datos incompletos");
      return;
    }

    // Llama a 'createData' o 'updateData' según si se está creando o actualizando
    if (dataToEdit === null || form.idInstructor === undefined || form.idInstructor === "") {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset(); // Limpia el formulario
  };

  // Función para limpiar el formulario y los datos de edición
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
  <div className="container">
    <div className="card ">
      <div className="center-table-form">
        <h3 className="h3Table">{dataToEdit ? "Editar" : "Agregar"}</h3>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="form-control inputForm"
              onChange={handleChange}
              value={form.name}
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              name="startDate"
              placeholder="Fecha de inicio de contrato"
              className="form-control"
              onChange={handleChange}
              value={form.startDate}
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              name="endDate"
              placeholder="Fecha fin de contrato"
              className="form-control"
              onChange={handleChange}
              value={form.endDate}
            />
          </div>
          <div className="mb-3">
            <select
              name="networkId"
              className="form-select"
              onChange={handleChange}
              value={form.networkId}
            >
              <option value="">Selecciona una red</option>
              {networkOptions && networkOptions.map((option) => (
                <option key={option.idNetwork} value={option.idNetwork}>
                  {option.networkName}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-success">
            Enviar
          </button>&nbsp;
          
        </form>
      </div>
    </div>
  </div>
  
  );
};

export default CrudForm;
