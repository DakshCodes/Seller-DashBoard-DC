import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Orders from '../orders/Orders';
import Profile from '../profile/Profile';
import Sidebar from '../Sidebar'
import './dashboard.css';


const Pro = () => {
  return (
    <div className='content'>
      <h1>
        Pro
      </h1>
    </div>)
}

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/orders' exact element={<Orders />} />
        <Route path='/pepoles' exact element={<Pro />} />
        <Route path='/products' exact element={<Pro />} />
        <Route path='/growth' exact element={<Pro />} />
      </Routes>
    </div>
  )
}

export default Dashboard
