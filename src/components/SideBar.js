import React, { Fragment, useState } from "react";
import logo from '../logo.png';
const SideBar = ({handleOnClickMenuButton,selectionBar})=>{
    const ButtonsAction = [
        {name:'Campaña',classN:'fas fa-folder-open' ,key:'campaign'},
        {name:'Crear Campaña',classN:'fas fa-folder-plus', key:'createCampaign'},
        {name:'Agregar Template',classN:'fas fa-file-code', key:'createTample'}
    ]
    const renderButtons =(button,index) =>{
        let classn = ''
        if (selectionBar==button.key){
            classn = 'li-side-bar-selected'
        }
        return(
            <li className={classn} key= {index} onClick={() => handleOnClickMenuButton(button.key)}><a><i className={button.classN}></i>{button.name}</a></li>
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