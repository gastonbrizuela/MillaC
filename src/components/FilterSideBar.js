import React, { Fragment, useState } from "react";
import InpuApp from './InputApp'

const FilterSideBar = ({filterlist,handleChangeFilter, filterViewSelect,handleChange,form})=>{
    let listParam = []
    const renderLi = (filter)=>{
        let className = 'li-filter'
        if (filter.code == filterViewSelect){
            className = 'li-filter-selected'
            listParam = filter.listParameter
        }
        return (<li className={className} key={filter.code} onClick={()=>handleChangeFilter(filter.code)}>{filter.name}</li>)
    }
    const renderInputs = (inputdata)=>{
        return(
        <InpuApp data={inputdata}  handleChange = {handleChange} form = {form}></InpuApp>
        )
    }
    return(<Fragment>
    <ul>
        {filterlist.map(renderLi)}
    </ul>
    <div className='container-param-filter'>
        {listParam.map(renderInputs)}
    </div>
    </Fragment>)
};
export default FilterSideBar