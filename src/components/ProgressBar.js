import React, { Fragment, useState } from "react";

const ProgressBar =({stepSelect})=>{
    const listBarSteps = [
        {step:1,name:'Definicion de campaña'},
        {step:2,name:'Filtro'},
        {step:3,name:'Programacion'},
        {step:4,name:'Resumen'},
        
    ]

    const renderSpet = (stepoption)=>{
        if (stepoption.step <= stepSelect){
            return(<li className='progress-bar-li-select' >{stepoption.name}</li>)
        }else{
            return(<li className='progress-bar-li' >{stepoption.name}</li>)
        }
        
    }
    return(<div className='progress-bar-conteiner'>
                <ul>
                    {listBarSteps.map(renderSpet)}
                </ul>
            </div>)
}

export default ProgressBar;