import React, { useState,useEffect, Fragment } from 'react';
import SideBar from '../components/SideBar'
import Table from '../components/Tables'
import CreateCamp from '../components/CreateCamp'
import axios from 'axios'
import { Route } from 'react-router-dom';


function Main() {
    const [selectionBar,setSelectionBar] = useState('campaign')
  return (
        <SideBar></SideBar>
  );
}

export default Main;
