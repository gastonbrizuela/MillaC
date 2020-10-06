import React, { Fragment, useState } from "react";
import Title from "./Title";

const Tables = ({listCamp})=>{
    const listCampaignInitial = [
        {codigo:'01', nombre:'CampañaUno',filtro:'Ver+',estado:'Activa',envios:'Ver+',reportes:'ver+',eliminar:'Ver+'},
        {codigo:'02', nombre:'CampañaDos',filtro:'Ver+',estado:'Activa',envios:'Ver+',reportes:'ver+',eliminar:'Ver+'},
        {codigo:'03', nombre:'CampañaTres',filtro:'Ver+',estado:'Activa',envios:'Ver+',reportes:'ver+',eliminar:'Ver+'},
        {codigo:'04', nombre:'Campaña Cuatro',filtro:'Ver+',estado:'Activa',envios:'Ver+',reportes:'ver+',eliminar:'Ver+'},
        {codigo:'04', nombre:'Campaña Cinco',filtro:'Ver+',estado:'Activa',envios:'Ver+',reportes:'ver+',eliminar:'Ver+'},
        {codigo:'04', nombre:'Campaña seis',filtro:'Ver+',estado:'Activa',envios:'Ver+',reportes:'ver+',eliminar:'Ver+'}
 
    ]

    const [listCampa, setTableConetentOneSend] = useState([])

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

