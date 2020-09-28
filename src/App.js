import React, { useState } from 'react';
import SideBar from './components/SideBar'
import Table from './components/Tables'
import CreateCamp from './components/CreateCamp'
import './App.css';

function App() {
    const [selectionBar,setSelectionBar] = useState('campaign')

    function getDisplayView(step) {
        switch (step) {
          case 'campaign':
            return (<Table></Table>)
          case 'createCampaign':
            return (<CreateCamp></CreateCamp>);
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
