import React, { useState,useEffect } from 'react';
import SideBar from './components/SideBar'
import Table from './components/Tables'
import CreateCamp from './components/CreateCamp'
import './App.css';
import axios from 'axios'

function App() {
    const [selectionBar,setSelectionBar] = useState('campaign')
    const [listCamp, setListCamp] = useState([])

    useEffect(()=>{
      axios.get('http://192.168.0.7:5000/api')
      .then(res=>{
        setListCamp(res.data)
      })
      .catch(err=>{
          console.log(err)
      })
    })

    const handleAddCamp = (camp)=>
      {
        setListCamp([
            ...listCamp,
            camp
        ])
    }
    
    function getDisplayView(step) {
        switch (step) {
          case 'campaign':
            return (<Table listCamp={listCamp}></Table>)
          case 'createCampaign':
            return (<CreateCamp handleAddCamp={handleAddCamp} handleOnClickMenuButton ={handleOnClickMenuButton}></CreateCamp>);
        }}
    const handleOnClickMenuButton = type => {
            setSelectionBar(type);
          };
        


  return (
<div className="principal-loyout">
        <SideBar
        handleOnClickMenuButton = {handleOnClickMenuButton}
        selectionBar ={selectionBar}
        ></SideBar>
        <div className="container">
            {getDisplayView(selectionBar)}
        </div>
    </div>
  );
}

export default App;
