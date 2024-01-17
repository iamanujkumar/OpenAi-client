import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { PiBellRingingBold } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const Navbar = () => {

  const[SearchValue,SetSearchValue]= useState('');
  const handleInputChange= (e)=>{
      SetSearchValue(e.target.value);
  }
  const handleSearchClick=()=>{
      console.log("Value is searched")
  }

  return (
    <div className="navbar">
      <div className="Topbar">
                <div className="searchBox">
                    <input
                        className="searchInput"
                        type="text"
                        placeholder="Search something..."
                        value={SearchValue}
                        onChange={handleInputChange}
                    />
                    <button className="searchButton" onClick={handleSearchClick}>
                        <IoSearchOutline/>
                    </button>
                </div>
                <div className='topbar_item'>
                <PiBellRingingBold/>
                <div className='Profile'><IoPersonSharp className='icon'/></div>
                <FaAngleDown/>
                </div>
            </div>
    </div>
  );
}

export default Navbar;
