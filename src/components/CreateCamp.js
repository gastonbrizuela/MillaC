import React, { Fragment, useState } from "react";
import Input from "./InputApp";
import Title from "./Title"
import ProgressBar from "./ProgressBar"
import ButtonsProgressBar from "./ButtonsProgressbar";
import FilterSideBar from './FilterSideBar'

const CreateCamp = ()=>{
    const listInput = [
        {key:'Name',name:'Nombre',type:'input',},
        {key:'TypeNotification',name:'Tipo de notificacion',type:'select', options:['','Publica','Privada']},
        {key:'TypeSend',name:'Tipo de envio',type:'select',options:['','Unico envio','Automatizada','']},
        {key:'Outstanding',name:'Destacado',type:'select',options:['','Si','No']},
        {key:'IncludePanel',name:'Incluir en el panel',type:'select',options:['','Si','No']},
        {key:'Subject',name:'Asunto',type:'input'},
        {key:'TemplateCode',name:'Codigo del template',type:'input'}
    ]
    const filterlist =[ 
    {code:'ChargeDate', name:'Fecha Carga',
        listParameter:[ {key:'StartChargeDate', name:'Fecha Inicio',type:'date'},
                        {key:'EndChargeDate',name:'Fecha Fin',type:'date'}]},
    {code:'DateAppDownload',name:'Fecha descarga App',
         listParameter:[{key:'StartDateDownloadApp',name:'Fecha Inicio',type:'date'},
                        {key:'EndDateDownloadApp',name:'Fecha Fin',type:'date'}]} ,
    {code:'Consume',name:'Consumos',
        listParameter:[ {key:'MinAmount',name:'Monto Minimo',type:'number'},
                        {key:'MaxAmount', name:'Monto Maximo', type:'number'}]},
    {code:'ConsumePeriod',name:'Consumo en periodo',
        listParameter:[{key:'MinAmountConsumePeriod',name:'Monto Minimo',type:'number'},{key:'MaxAmountConsumePeriod',name:'',type:''},{key:'StartDateConsumePeriod',name:'',type:''},{key:'EndDateConsumePeriod',name:'',type:''}]},
    {code:'AmountVsActual',name:'Monto Vs campaña actual',
        listParameter:[{key:'CampaignAmountVsActual',name:'',type:''},{key:'AmountVsActualMore',name:'',type:''}]},
    {code:'StatusCurrentCampaign',name:'Estado en campaña Actual',
        listParameter:[{key:'ActiveStatusCurrentCampaign',name:'',type:''}]},
    {code:'StatusInCampaign',name:'Estado en campaña',
        listParameter:[{key:'ActiveStatusInCampaign',name:'',type:''},{key:'CampaignStatusIn',name:'',type:''}]},
    {code:'OfficeCkeck',name:'Oficina',
        listParameter:[{key:'Office',name:'',type:''}]},
    {code:'ProvinceLocality',name:'Provincia/Localidad',
        listParameter:[{key:'Province',name:'',type:''},{key:'Locality',name:'',type:''}]},
    {code:'LastUseApp',name:'Ultimo uso de la app',
        listParameter:[{key:'StartLastUseApp',name:'',type:''},{key:'EndLastUseApp',name:'',type:''}]},
    {code:'CheckNoPurchaseInDays',name:'No realizo compra en dias',
        listParameter:[{key:'NoPurchaseInDays',name:'',type:''}]}, 
    {code:'CheckNoPurchaseInCampaign',name:'No realizo compra en campaña',
        listParameter:[{key:'NoPurchaseInCampaign',name:'',type:''}]},
    {code:'ConsumePeriodAverage',name:'Consumo promedio en period',
        listParameter:[{key:'MinAmountConsumePeriodAverage',name:'',type:''},{key:'MaxAmountConsumePeriodAverage',name:'',type:''},{key:'StartDateConsumePeriodAverage',name:'',type:''},{key:'EndDateConsumePeriodAverage',name:'',type:''}]},
    {code:'CheckPurchaseItem',name:'Compra de Articulo',
        listParameter:[{key:'PurchaseItem',name:'',type:''},{key:'CheckIfPurchase',name:'',type:''},{key:'StartDatePurchaseItem',name:'',type:''},{key:'EndDatePurchaseItem',name:'',type:''}]},
    {code:'CheckInvalid',name:'Email/telefono invalido',
        listParameter:[{key:'InvalidEmail',name:'',type:''},{key:'InvalidPhone',name:'',type:''}]},
    {code:'CheckPoints',name:'Puntos', 
        listParameter:[{key:'MinAmountPoint',name:'',type:''},{key:'MaxAmountPoint',name:'',type:''}]}]
    
        const createContentForm= ()=>{
        var contentForm = new Object();
        listInput.map((intp)=>{
            contentForm[intp.key]='';
        })
        filterlist.map((filter)=>{
            contentForm[filter.code]='';
            filter.listParameter.map((param)=>{
                contentForm[param.key]='';
            });
        })
        return contentForm
    }
    const contentFormFinish = createContentForm()
    const [ form, setForm ] = useState(contentFormFinish)
    const [stepSelect, setSteptSelect] = useState(1)
    const [filterViewSelect, setfilterViewSelect] = useState('')

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleChangeStep = e =>{
        if (e.target.value =='menos'){
            setSteptSelect(stepSelect-1)
        }
        if (e.target.value =='mas'){
            setSteptSelect(stepSelect+1)
        }
    }

    const handleChangeFilter = e =>{
        setfilterViewSelect(e)
    }

    const renderContend = ()=>{
        if (stepSelect == 1){
           return( <div className='card'>
            <div className='box-form'>
                {listInput.map(renderInputs)}
            </div>
        </div>)
        }

        if (stepSelect==2){
            return(<div className='card'>
            <div className='box-form-filter'>
                <FilterSideBar filterlist = {filterlist} handleChangeFilter = {handleChangeFilter} filterViewSelect = {filterViewSelect} handleChange={handleChange} form={form}></FilterSideBar>
            </div>
        </div>)
        }
        else{
            return(<h1>el paso seleccionado es {stepSelect}</h1>)
        }
    }

    const renderInputs = (inputdata)=>{
        return(
        <Input data={inputdata}  handleChange = {handleChange} form = {form}></Input>
        )
    }



    return (
        <Fragment>
            
            <Title text = 'Nueva Campaña'></Title>
            <ProgressBar stepSelect= {stepSelect}></ProgressBar>
            <ButtonsProgressBar handleChangeStep={handleChangeStep}></ButtonsProgressBar>
            {renderContend()}
        </Fragment>
    );
};

export default CreateCamp