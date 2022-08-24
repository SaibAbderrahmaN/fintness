import React,{ useState } from 'react'
import logo from '../../assets/images/fitness_PNG109.png'
import './index.scss'
import {NavLink} from 'react-router-dom'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

const [Switchtoggled,setSwitchtoggled]= useState(1);


const toggleTab=(index)=>{
  setSwitchtoggled(index) }

  return (

    <nav className='manu'>

      <NavLink className='logo' to='/' herf='logo'>
        <img src={logo} alt='logo'/>
        <h3>gym algeria</h3>
      </NavLink>


    <div className='navigation'>
      <ul>
        <li className={`list ${ Switchtoggled===1 ? 'active' :'null'}`} >
          <NavLink to='/' onClick={()=>toggleTab(1)} >
          <span className='icon'><FontAwesomeIcon  icon={faHome} /></span>

            <span className='text'>home</span>
          </NavLink>

        </li>
        <li className={`list ${ Switchtoggled===2 ? 'active' :'null'}`}>
        <NavLink to='/exercises' onClick={()=>toggleTab(2)} >
          <span className='icon'><FontAwesomeIcon  icon={faUser} /></span>

            <span className='text'>exercises</span>
          </NavLink>

        </li>
        <li className={`list ${ Switchtoggled===3 ? 'active' :'null'}`}>
        <NavLink to='/Portfolio' onClick={()=>toggleTab(3)} >
         <span className='icon'><FontAwesomeIcon  icon={faSuitcase} /></span>

            <span className='text'>portfolio</span>
          </NavLink>

        </li>
        <li className={`list ${ Switchtoggled===4 ? 'active' :'null'}`}>
        <NavLink to='/photos' onClick={()=>toggleTab(4)} >

          <span className='icon'><FontAwesomeIcon  icon={faEnvelope} /></span>

            <span className='text'>photos</span>
          </NavLink>

        </li>
        <li className={`list ${ Switchtoggled===5 ? 'active' :'null'}`}>
        <NavLink to='/contact' onClick={()=>toggleTab(5)} >

          <span className='icon'><FontAwesomeIcon  icon={faEnvelope} /></span>

            <span className='text'>contact</span>
          </NavLink>

        </li>

        <div className='indicator'>

        </div>

      </ul>
    </div>
    </nav>



    
    
  )
}

export default Navbar