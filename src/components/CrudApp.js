import React,{ useEffect, useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import Message from "./Message";


const  CrudApp = () => {
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    let api = helpHttp();
    let urlGet= "http://www.mendezmrf10.somee.com/api/ContractInstructor/List";
    let urlPost= "http://www.mendezmrf10.somee.com/api/ContractInstructor/Save";
    let urlPut = "http://www.mendezmrf10.somee.com/api/ContractInstructor/Edit";

    useEffect(() => {
      setLoading(true);

      api.get(urlGet).then((res) => {
          console.log(res);

          if(!res.err)
          {
            setDb(res.response);
            setError(null);
          }else
          {
            setDb([null]);
            setError(`Error ${res.status} : ${res.statusText}`);
          }

      setLoading(false);
      });
    },[]);

    const createData =(data) => {
        console.log(data);

        let options= 
        { body : data , headers: {"content-type": "application/json"},};
      
        api.post(urlPost, options).then((res) =>{
          console.log(res);

          if(!res.err){         
             setDb([...db,res]);
          }else{
            setError(res)
          }
        }) 
        
    };

    const updateData = (data) => {
        let newData = db.map((el) => (el.idInstructor === data.idInstructor ? data : el));
        setDb(newData);
      };

      const deleteData = (idInstructor) => {
        let isDelete = window.confirm(
          `¿Estás seguro de eliminar el registro con el id '${idInstructor}'?`
        );
    
        if (isDelete) {
          let newData = db.filter((el) => el.idInstructor !== idInstructor);
          setDb(newData);
        } else {
          return;
        }
      };


      return (
        <div>
          <h2>CRUD APP</h2>
          <CrudForm
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />

          {loading && <Loader/>}
          {error && (<Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
          )}

          {db && 
          (<CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />)}
                    
        </div>
      );
    };
    
    export default CrudApp;

