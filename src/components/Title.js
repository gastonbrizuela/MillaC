import React, { Fragment, useState } from "react";

const Title  =({text})=>{
    return(<Fragment>
            <h1 className ='title-main'>{text}</h1>
            <hr/>
            </Fragment>)
}

export default Title