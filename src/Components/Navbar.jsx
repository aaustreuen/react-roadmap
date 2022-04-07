import React from "react";
import { NavLink } from 'react-router-dom'




const Navbar = () => {
  return (
    <nav className='navbar-block'>
      <div className='navbar-title'>ТЕМЫ:</div>
      <div className='navbar-item'>
        <NavLink to='/component' >Components</NavLink>
      </div>
      <div className='navbar-item'>
        <NavLink to='/props' >Props</NavLink>
      </div>
      <div className='navbar-item'>
        <NavLink to='/state'>State</NavLink>
      </div>
      <div className='navbar-item'>
        <NavLink to='/lifecycle'>Lifecycle</NavLink>
      </div>
      <div className='navbar-item'>
        <NavLink to='/events'>Events</NavLink>
      </div>
      <div className='navbar-item'>
        <NavLink to='/keys'>Keys</NavLink>
      </div>
      <div className='navbar-item'>
        <NavLink to='/refs'>Refs</NavLink>
      </div>
      <div className='navbar-item'>
        <NavLink to='/asynchronousrequests'>Asynchronous requests</NavLink>
      </div>
      <div className='navbar-item'>
        <NavLink to='/virtualdom'>Virtual DOM</NavLink>
      </div>
      <div className='navbar-item' >
        <NavLink to='/fragment'>Fragment</NavLink>
      </div>
      <div className='navbar-item'>
        <NavLink to='/reactmemo'>React.memo</NavLink>
      </div>
      <div className='navbar-item'>
        <NavLink to='/useeffect'>useEffect</NavLink>
      </div>
      <div className='navbar-item'>
        <NavLink to='/router'>Router</NavLink>
      </div>
      <div className='navbar-item'>
        <NavLink to='/context'>Context</NavLink>
      </div>
      <div className='navbar-item'>
        <NavLink to='/form'>Form</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;