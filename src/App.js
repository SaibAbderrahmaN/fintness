import React from 'react'
import Navbar from './component/navbar'
import Home from './component/home'
import Contact from './component/contact'
import Exercises from './component/exercises/index'
import "./App.scss"
import { Route, Routes } from 'react-router-dom'
import Products from './component/Products'
import Classes from './component/Classes'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercises' element={<Exercises />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/classes' element={<Classes />} />



      </Routes>
      

    </div>
  )
}

export default App