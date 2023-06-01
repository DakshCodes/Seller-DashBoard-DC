import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Orders from '../orders/Orders';
import Profile from '../profile/Profile';
import Sidebar from '../Sidebar'
import './dashboard.css';
import Mywallet from '../mywallet/Mywallet';




const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/orders' exact element={<Orders />} />
      </Routes>
    </div>
  )
}

export default Dashboard
