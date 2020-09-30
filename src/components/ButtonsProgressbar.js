import React, { Fragment, useState } from "react";

const ButtonsProgressBar = ({handleChangeStep})=>{
    return (<div className ='buttons-progress-bar-container' >
            <i className ='fas fa-arrow-circle-left button-step' value = 'menos' key = '1' onClick={()=>handleChangeStep('menos')}/>
            <i className = 'fas fa-arrow-circle-right button-step' value = 'mas' key = '2' onClick = {()=>handleChangeStep('mas')}/>
            </div>
    )
}

export default ButtonsProgressBar