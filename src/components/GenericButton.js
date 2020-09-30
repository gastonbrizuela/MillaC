import React, { Fragment, useState } from "react";

const GenericButton = ({text, onCl})=>{
return(<button className='generic-btn' onClick={onCl} value={text} >{text}</button>)
}

export default GenericButton