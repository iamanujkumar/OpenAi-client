import React from 'react'
import './Main.css'

import { FiMessageSquare } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import { BiSolidTagX } from "react-icons/bi";

function Main() {
    const handleNewChatClick = () => {
        window.location.reload();
      };
   
    return (
        <div className='Main_container'>       
            <div className="main_content">
                <div className='Text_generator'>
                    <div className='header'><h2>Text Generator</h2></div>
                    <div className="configure">
                        <div className='option'>
                        <a href="#" rel="noopener noreferrer" ><FiMessageSquare/> <span>Impact of AI on User Experiences</span></a>
                        <a href="#" rel="noopener noreferrer" ><FiMessageSquare/> <span>Voice User Interfaces(VUI)</span></a>
                        <a href="#" rel="noopener noreferrer" ><FiMessageSquare/> <span>Data-Driven UX</span></a>
                        <a href="#" rel="noopener noreferrer" ><FiMessageSquare/> <span>Chatbots and Conversaion AI</span></a>
                        </div>
                        <div className='btn'>
                        <a href="#" rel="noopener noreferrer" onClick={handleNewChatClick} ><IoAddCircleOutline/> <span>New Chat</span></a>
                        <a href="#" rel="noopener noreferrer" ><BiSolidTagX/> <span>Clear Conversation</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
