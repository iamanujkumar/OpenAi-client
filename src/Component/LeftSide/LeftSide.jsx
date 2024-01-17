import React from 'react'
import './LeftSide.css'
import { LuMenu } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { LuImage } from "react-icons/lu";
import { FiMusic } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import Logo from '../asset/logo.png'
function Navbar() {
  return (
    <div className='container2'>   
         <nav>
         <div className='nav_icon'><img src={Logo} alt="logo" />LOGO.</div>
        <div className='nav_list'>
        <a href="#" rel="noopener noreferrer" ><LuMenu></LuMenu></a>
        <a href="#" rel="noopener noreferrer" ><FaArrowTrendUp/></a>
        <a href="#" rel="noopener noreferrer" ><FiMessageSquare/></a>
        <a href="#" rel="noopener noreferrer" ><LuImage/></a>
        <a href="#" rel="noopener noreferrer" ><FiMusic/></a>
        <a href="#" rel="noopener noreferrer" ><FaRegBookmark/></a>
        <a href="#" rel="noopener noreferrer" ><RxExit/></a>
        </div>
      </nav>      
    </div>
  )
}

export default Navbar
