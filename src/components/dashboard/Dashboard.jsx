import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Orders from '../orders/Orders';
import Profile from '../profile/Profile';
import Sidebar from '../Sidebar'
import './dashboard.css';
import Mywallet from '../mywallet/Mywallet';
import AddBooks from '../addbooks/AddBooks';
import Hemburger from '../hemburger';




const Dashboard = () => {

  
  return (
    <div className='dashboard'>
      <Hemburger/>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/orders' exact element={<Orders />} />
        <Route path='/mywallet' exact element={<Mywallet />} />
        <Route path='/addbooks' exact element={<AddBooks />} />
      </Routes>
    </div>
  )
}

export default Dashboard
