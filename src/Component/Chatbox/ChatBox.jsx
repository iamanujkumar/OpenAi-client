import React, { useState, useEffect, useRef } from 'react';
import "./ChatBox.css";
import { IoIosSend } from 'react-icons/io';
import { AiOutlineAudio } from 'react-icons/ai';

const UserMessage = ({ content }) => (
  <div className="message user-message">
    <p>{content}</p>
  </div>
);

const BotMessage = ({ content }) => (
  <div className="message bot-message">
    <p>{content}</p>
  </div>
);

const ChatBox = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loadingDots, setLoadingDots] = useState(false);

  const chatBoxBodyRef = useRef();

  const sendMessage = async () => {
    const message = inputMessage.trim();
    if (!message) return;

    setInputMessage('');
    const userMessage = { type: 'user', content: message };

    // Collect existing messages along with the new user message
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setLoadingDots(true);

    try {
      const response = await fetch('http://localhost:3000/message', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      const botMessage = { type: 'bot', content: data.message };

      // Append the bot's response to the messages
      setMessages([...updatedMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoadingDots(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  useEffect(() => {
    if (chatBoxBodyRef.current) {
      chatBoxBodyRef.current.scrollTop = chatBoxBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-box">
      <div ref={chatBoxBodyRef} className="chat-box-body">
        {messages.map((msg, index) => (
          <React.Fragment key={index}>
            {msg.type === 'user' ? (
              <UserMessage content={msg.content} />
            ) : (
              <BotMessage content={msg.content} />
            )}
          </React.Fragment>
        ))}
        {loadingDots && (
          <div id="loading" className="response loading">
            ...
          </div>
        )}
      </div>
      <div className="chat-box-footer">
        <div>📎</div>
        <input
          type="text"
          placeholder="Send a message"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <div><AiOutlineAudio /> </div>
        <button onClick={sendMessage}><IoIosSend /></button>
      </div>
    </div>
  );
};

export default ChatBox;
