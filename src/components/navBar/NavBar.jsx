import React from 'react'
import "./NavBar.css"
import {BsCamera, BsChatDots, BsPlusCircleFill, BsSearch} from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className='nav-nav'>
      <div className='logo'>
        <BsChatDots/>
        <h4 className=' ps-1 mb-0'>Talk</h4>
      </div>

      <div className="others">
        <BsCamera />
        <BsSearch />
        <BsPlusCircleFill />
      </div>
    </nav>
  );
}

export default NavBar