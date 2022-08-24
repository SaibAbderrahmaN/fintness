import React from 'react'
import Navbar from './component/navbar'
import Home from './component/home'
import Contact from './component/contact'
import Exercises from './component/exercises/index'
import "./App.scss"
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercises' element={<Exercises />} />
        <Route path='/Contact' element={<Contact />} />



      </Routes>
      

    </div>
  )
}

export default App