import React, { Fragment, useState } from "react";

const ButtonsProgressBar = ({handleChangeStep})=>{
    return (<div className ='buttons-progress-bar-container' >
            <button value = 'menos' key = '1' onClick={handleChangeStep}>menos</button>
            <button value = 'mas' key = '2' onClick = {handleChangeStep}>mas</button>
            </div>
    )
}

export default ButtonsProgressBar