import React, { Fragment, useState } from "react";
import Input from "./InputApp";
import Title from "./Title"
import ProgressBar from "./ProgressBar"
import ButtonsProgressBar from "./ButtonsProgressbar";
import FilterSideBar from './FilterSideBar'
import Resume from "./Resume";

const CreateCamp = ()=>{
    const Hourlist = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0]
    const DaysWeek = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
    const programationType = {1:[{key:'DateToSend',name:'Dia del envio',type:'date'},{key:'HourToSend',name:'hora de envio',type:'select',options:Hourlist}],
    2:{'Diaria':[{key:'HourToSend',name:'Horario de envio',type:'select',options:Hourlist}],
        'Semanal':[{key:'HourToSend',name:'Horario de envio',type:'select',options:Hourlist},{key:'DayWeekToSend',name:'Dia de la semana',type:'select',options:DaysWeek}],
        'Mensual':[{key:'HourToSend',name:'Horario de envio',type:'select',options:Hourlist},{key:'DayMonthToSend',name:'Dia del mes',type:'text'}],
        'Campaña':[]}}

    const filterTriggers = [{code:'ChargeDate',name:'Fecha carga',
    listParameter: [{key:'Lapse',name:'Lapso',type:'number'},{key:'TypeProgrammSend', name:'Tipo de lapso', type:'select', options:['Diaria','Semanal','Mensual','Campaña']}]},
    {code:'DateAppDownload',name:'Fecha Descarga App',
        listParameter:[{key:'Lapse',name:'Lapso',type:'number'}]},
    {code:'CheckPurchaseItem',name:'Compra del articulo',
        listParameter:[{key:'Lapse',name:'lapso',type:'number'},{key:'PurchaseItem',name:'Articulo',type:'text'}]},
    {code:'ConsumePeriodAverage',name:'Consumo promedio',
        listParameter:[{key:'Lapse',name:'lapso',type:'number'}]}]

    const listInput = [
        {key:'Name',name:'Nombre',type:'input',},
        {key:'TypeNotification',name:'Tipo de notificacion',type:'select', options:['Publica','Privada']},
        {key:'TypeSend',name:'Tipo de envio',type:'select',options:['Unico envio','Automatizada']},
        {key:'Outstanding',name:'Destacado',type:'select',options:['Si','No']},
        {key:'IncludePanel',name:'Incluir en el panel',type:'select',options:['Si','No']},
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
        listParameter:[{key:'MinAmountConsumePeriod',name:'Monto Minimo',type:'number'},{key:'MaxAmountConsumePeriod',name:'Monto maximo',type:'number'},{key:'StartDateConsumePeriod',name:'Fecha inicio',type:'date'},{key:'EndDateConsumePeriod',name:'Fecha fin',type:'date'}]},
    {code:'AmountVsActual',name:'Monto Vs campaña actual',
        listParameter:[{key:'CampaignAmountVsActual',name:'Campaña',type:'text'},{key:'AmountVsActualMore',name:'mayor/menor',type:'select',options:['Mas en Campaña actual','Menos en campaña Actual']}]},
    {code:'StatusCurrentCampaign',name:'Estado en campaña Actual',
        listParameter:[{key:'ActiveStatusCurrentCampaign',name:'Estado en campaña actual',type:'salect',options:['Activo', 'Inactivo']}]},
    {code:'StatusInCampaign',name:'Estado en campaña',
        listParameter:[{key:'ActiveStatusInCampaign',name:'Actividad en campaña',type:'select',options:['Activo','Inactivo']},{key:'CampaignStatusIn',name:'Campaña',type:'text'}]},
    {code:'OfficeCkeck',name:'Oficina',
        listParameter:[{key:'Office',name:'Sucursal',type:'text'}]},
    {code:'ProvinceLocality',name:'Provincia/Localidad',
        listParameter:[{key:'Province',name:'Provincia',type:'text'},{key:'Locality',name:'Localidad',type:'text'}]},
    {code:'LastUseApp',name:'Ultimo uso de la app',
        listParameter:[{key:'StartLastUseApp',name:'Fecha Inicio',type:'date'},{key:'EndLastUseApp',name:'Fecha Fin',type:'date'}]},
    {code:'CheckNoPurchaseInDays',name:'No realizo compra en dias',
        listParameter:[{key:'NoPurchaseInDays',name:'Cantidad de dias',type:'number'}]}, 
    {code:'CheckNoPurchaseInCampaign',name:'No realizo compra en campaña',
        listParameter:[{key:'NoPurchaseInCampaign',name:'Campaña',type:'text'}]},
    {code:'ConsumePeriodAverage',name:'Consumo promedio en period',
        listParameter:[{key:'MinAmountConsumePeriodAverage',name:'Monto minimo',type:'number'},{key:'MaxAmountConsumePeriodAverage',name:'Monto maximo',type:'text'},{key:'StartDateConsumePeriodAverage',name:'Fecha inicio',type:'date'},{key:'EndDateConsumePeriodAverage',name:'Fecha fin',type:'date'}]},
    {code:'CheckPurchaseItem',name:'Compra de Articulo',
        listParameter:[{key:'PurchaseItem',name:'Articulo',type:'text'},{key:'CheckIfPurchase',name:'Compro/No Compro',type:'select',options:['Compro', 'No compro']},{key:'StartDatePurchaseItem',name:'Fecha de inicio',type:'date'},{key:'EndDatePurchaseItem',name:'Fecha fin',type:'date'}]},
    {code:'CheckInvalid',name:'Email/telefono invalido',
        listParameter:[{key:'InvalidEmail',name:'Email',type:'select',options:['Si','No']},{key:'InvalidPhone',name:'Telefono',type:'select', options:['Si','NO']}]},
    {code:'CheckPoints',name:'Puntos', 
        listParameter:[{key:'MinAmountPoint',name:'Minimo',type:'number'},{key:'MaxAmountPoint',name:'Maximo',type:'nomber'}]}]
    
        const createContentForm= ()=>{
        var contentForm = new Object();
        listInput.map((intp)=>{
            contentForm[intp.key]=''
            if (intp.type== 'select'){
                contentForm[intp.key]= intp.options[0]
            }
        })
        filterlist.map((filter)=>{
            contentForm[filter.code]=0;
            filter.listParameter.map((param)=>{
                if (param.type=='date'){
                    var hoy = new Date();
                    var dd = hoy.getDate();
                    var mm = hoy.getMonth()+1;
                    var yyyy = hoy.getFullYear();
                    hoy = '1990'+'-'+'09'+'-'+'15';
                    contentForm[param.key]= hoy
                } else if (param.type== 'select'){
                    contentForm[param.key]= param.options[0]
                }
                else{
                    contentForm[param.key]='';
                }
                
                
            });
        })
        filterTriggers.map((filter)=>{
            filter.listParameter.map((param)=>{
                if (param.type=='date'){
                    var hoy = new Date();
                    var dd = hoy.getDate();
                    var mm = hoy.getMonth()+1;
                    var yyyy = hoy.getFullYear();
                    hoy = '1990'+'-'+'09'+'-'+'15';
                    contentForm[param.key]= hoy
                }else if (param.type== 'select'){
                    contentForm[param.key]= param.options[0]
                }
                else{
                    contentForm[param.key]='';
                }
                
            });
        })
            programationType[1].map((param)=>{
                if (param.type=='date'){
                    var hoy = new Date();
                    var dd = hoy.getDate();
                    var mm = hoy.getMonth()+1;
                    var yyyy = hoy.getFullYear();
                    hoy = '1990'+'-'+'09'+'-'+'15';
                    contentForm[param.key]= hoy
                }else if (param.type== 'select'){
                    contentForm[param.key]= param.options[0]
                }
                else{
                    contentForm[param.key]='';
                }
                
            })
            let listProgramationType = Object.entries(programationType[2])
            listProgramationType.map((filter)=>{
                filter[1].map((param)=>{
                    if (param.type=='date'){
                        var hoy = new Date();
                        var dd = hoy.getDate();
                        var mm = hoy.getMonth()+1;
                        var yyyy = hoy.getFullYear();
                        hoy = '1990'+'-'+'09'+'-'+'15';
                        contentForm[param.key]= hoy
                    }else if (param.type== 'select'){
                        contentForm[param.key]= param.options[0]
                    }
                    else{
                        contentForm[param.key]='';
                    }
                    
                });
            })
            

        return contentForm
    }
    const contentFormFinish = createContentForm()
    const [ form, setForm ] = useState(contentFormFinish)
    const [stepSelect, setSteptSelect] = useState(1)
    const [filterViewSelect, setfilterViewSelect] = useState('ChargeDate')

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleChangeFilterAdd = (e) =>{
        let result 
        if (e.target.value=='Agregar'){
            result = 1
        }
        if (e.target.value=='Eliminar'){
            result = 0
        } 
        setForm({
            ...form,
            [filterViewSelect]: result
        })
    }
    const handleChangeStep = e =>{
        if (e =='menos'){
            setSteptSelect(stepSelect-1)
        }
        if (e =='mas'){
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
                <div className='container-param-filter'>
                {listInput.map(renderInputs)}
                </div>
            </div>
        </div>)
        }

        if (stepSelect==2){
            if (form.TypeSend == 'Unico envio'){
                return(<div className='card'>
                <div className='box-form-filter'>
                    <FilterSideBar  
                        filterlist = {filterlist}
                        handleChangeFilter = {handleChangeFilter}
                        filterViewSelect = {filterViewSelect} 
                        handleChange={handleChange}
                        handleChangeFilterAdd = {handleChangeFilterAdd} 
                        form={form}>
                    </FilterSideBar>
                </div>
            </div>)
            }
            if (form.TypeSend == 'Automatizada'){
                return(<div className='card'>
                <div className='box-form-filter'>
                    <FilterSideBar  
                        filterlist = {filterTriggers}
                        handleChangeFilter = {handleChangeFilter}
                        filterViewSelect = {filterViewSelect} 
                        handleChange={handleChange}
                        handleChangeFilterAdd = {handleChangeFilterAdd} 
                        form={form}>
                    </FilterSideBar>
                </div>
            </div>)
            }
        }
        if (stepSelect==3){
            let list = []
            let text = form.TypeSend + ' ' +(form.TypeProgrammSend)
            if (form.TypeSend=='Unico envio'){
                list=programationType[1]
            }
            if (form.TypeSend=='Automatizada'){
                list=programationType[2][form.TypeProgrammSend]
            }
            return(
            <div className='card'>
                <div className='box-form-filter'>
                <div className='container-param-filter'>
                    <Title text={text}></Title>
                    {list.map(renderInputs)}
                </div>
            </div>
        </div>)}
        if (stepSelect == 4){
            let listProgramation;
            let listFilter;
            if (form.TypeSend=='Unico envio'){
            listProgramation =  programationType[1]
            listFilter = filterlist
            }
            if (form.TypeSend=='Automatizada'){
            listProgramation = programationType[2][form.TypeProgrammSend]
            listFilter = filterTriggers
            }
            return( <div className='card'>
                                <Resume listInput={listInput} form={form} programation = {listProgramation} listFilter={listFilter}></Resume>
                    </div>)
        }
    }

    const renderInputs = (inputdata)=>{
        return(
        <Input data={inputdata}  handleChange = {handleChange} form = {form}></Input>
        )
    }



    return (
        <Fragment>
            <div className='head-progress'>
            <ProgressBar stepSelect= {stepSelect}></ProgressBar>
            <ButtonsProgressBar handleChangeStep={handleChangeStep}></ButtonsProgressBar>
            <hr></hr>
            </div>
            {renderContend()}
        </Fragment>
    );
};

export default CreateCamp