import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../logo.png';
const SideBar = ()=>{

    const ButtonsAction = [
        {name:'Campaña',classN:'fas fa-folder-open' ,key:'campaign', link:'/main/campaign'},
        {name:'Crear Campaña',classN:'fas fa-folder-plus', key:'createCampaign',link:'/main/create'},
        {name:'Agregar Template',classN:'fas fa-file-code', key:'createTample',link:'/main/createtample'}
    ]
    const renderButtons =(button,index) =>{
        let classn = ''
        if (false){
            classn = 'li-side-bar-selected'
        }
        return(
            <li className={classn} key= {index}>
                <Link to= {button.link} style={{ textDecoration: 'none' }}>
                <i className={button.classN}></i>{button.name}
                </Link>
            </li>
        )}


    return (
        <div className="bar">
        <div className="header-bar">
            <img src={logo} alt=""></img>
        </div>
        <div className="sidebar">
            <ul>
                {ButtonsAction.map(renderButtons)}
            </ul>
        </div> 
    </div>
    );
};

export default SideBar