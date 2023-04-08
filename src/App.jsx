import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className=' min-h-[calc(100vh-150px)] z-0'>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
