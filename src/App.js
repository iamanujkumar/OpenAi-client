import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import LeftSide from './Component/LeftSide/LeftSide';
// import TextGenerator from './Component/TextGenerator/TextGenerator';
import ChatBox from './Component/Chatbox/ChatBox';
import Main from './Component/Main/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <LeftSide />
        <Main/>
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
