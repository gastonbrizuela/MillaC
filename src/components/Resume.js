import React, { Fragment, useState } from "react";
import LabelDescription from "./LabelDescription";
import Title from "./Title";

const Resume = ({listInput,form, programation,listFilter})=>{
    const renderDefinition =(input)=>{
            return(<div className='input-description-con'>
            <LabelDescription label={input.name} description={form[input.key]}></LabelDescription>
            </div>)
        }
    const renderFilter = (input)=>{
        if (form[input.code]==1){
            return(<Fragment><div className='container-card-filter'>
                        <h3>{input.name}</h3>
                        {input.listParameter.map(renderDefinition)}
                    </div>
                    </Fragment>)
            
        }
    }
        return(<Fragment>
            <div className='box-form-resume'>
                <div className='container-param-resume'>
                    <Title text='Definicion'></Title>
                    {listInput.map(renderDefinition)}
                </div>
                
                <div className='container-param-resume'>
                    <Title text='Programacion'></Title>
                    {programation.map(renderDefinition)}
                </div>
                <div className='container-param-resume grid-filter'>
                    <Title text='Filtros'></Title>
                    <div className = 'contain-param-resume'>
                    {listFilter.map(renderFilter)}
                    </div>
                </div>
            </div>
                </Fragment>
            )
        }



    
export default Resume