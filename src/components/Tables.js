import React, { Fragment, useState,useEffect } from "react";
import Title from "./Title";
import axios from "axios";

const Tables = ()=>{
    const [listCamp, setListCamp] = useState([])

    useEffect(()=>{
      axios.get('http://192.168.0.7:5000/api')
      .then(res=>{
        setListCamp(res.data)
      })
      .catch(err=>{
          console.log(err)
      })
    })

    const renderCampaign =(camp,index) =>{
        console.log()
        return(
            <tr key={index}>
                <td>{camp.internalId}</td>
                <td>{camp.Name}</td>
                <td>Ver+</td>
                <td></td>
                <td><i className='fas fa-share'></i></td>
                <td>ver+</td>
                <td>ver+</td>
            </tr>
        )
    }
    return (<Fragment>
            <Title text='Campañas'></Title>
            <table className = "content-table">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Filtro</th>
                        <th>Estado</th>
                        <th>Envios</th>
                        <th>Reportes</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                {listCamp.map(renderCampaign)}
                </tbody>
            </table>
            </Fragment>
    );
};

export default Tables

