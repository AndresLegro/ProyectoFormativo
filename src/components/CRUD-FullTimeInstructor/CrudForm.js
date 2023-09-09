import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa estilos de Bootstrap
import { helpHttp } from "../../helpers/helpHttp"; // Importa una utilidad para realizar solicitudes HTTP


// Define un objeto con valores iniciales para el formulario
const initialForm = {
  name: "",
  position: "",
  networkId: null,
};


const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  // Define estados para el formulario y las opciones de red
  const [form, setForm] = useState(initialForm);
  const [networkOptions, setNetworkOptions] = useState([]);
  const api = helpHttp(); // Instancia de la utilidad de solicitud HTTP


  // Efecto que actualiza el estado 'form' cuando 'dataToEdit' cambia
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit); // Copia los datos de 'dataToEdit' a 'form'
    } else {
      setForm(initialForm); // Restablece 'form' a su estado inicial si no hay datos para editar
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

    if (!form.name.trim() || !form.position.trim()) {
      alert("Datos incompletos");
      return;
    }

    // Llama a 'createData' o 'updateData' según si se está creando o actualizando
    if (dataToEdit === null || form.idInstructor === undefined || form.idInstructor === "") {
      createData(form);
    } else {
      updateData(form);
      console.log(dataToEdit);
    }

    handleReset(); // Limpia el formulario
    
  };

  // Función para limpiar el formulario y los datos de edición
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
              onChange={handleChange}
              value={form.name}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="position"
              placeholder="Posicion"
              className="form-control"
              onChange={handleChange}
              value={form.position}
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
          <button
            type="reset"
            className="btn btn-dark"
            onClick={handleReset}
          >
            Limpiar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrudForm;
