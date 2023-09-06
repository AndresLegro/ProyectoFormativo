import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { helpHttp } from "../helpers/helpHttp";

const initialForm = {
  name: "",
  startDate: "",
  endDate: "",
  networkId: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);
  const [networkOptions, setNetworkOptions] = useState([]);
  const api = helpHttp();

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  useEffect(() => {
    const urlNetwork = "http://www.mendezmrf10.somee.com/api/Network/List";
    
    api.get(urlNetwork).then((res) => {
      if (!res.err) {
        setNetworkOptions(res.response);
      } else {
        console.error("Error al obtener las opciones de red:", res.err);
      }
    });
  }, [api]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.startDate.trim() || !form.endDate.trim()) {
      alert("Datos incompletos");
      return;
    }

    if (dataToEdit === null || form.idInstructor === undefined || form.idInstructor === "") {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

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
              {networkOptions.map((option) => (
                <option key={option.idNetwork} value={option.idNetwork}>
                  {option.idNetwork}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-info">
            Enviar
          </button>&nbsp;
          <button
            type="reset"
            className="btn btn-info"
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
