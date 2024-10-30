import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faTimes } from '@fortawesome/free-solid-svg-icons';
import './styles/ChatAgent.css';

const ChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-agent">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Chat Support</h3>
            <button onClick={toggleChat}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="chat-messages">
            <div className="message agent">
              <p>Hello! How can I help you today?</p>
            </div>
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Type your message..." disabled />
            <button className="send-button" disabled>Send</button>
          </div>
        </div>
      )}
      <button 
        className={`chat-toggle-button ${isOpen ? 'active' : ''}`} 
        onClick={toggleChat}
        aria-label="Toggle chat"
      >
        <FontAwesomeIcon icon={faComments} />
      </button>
    </div>
  );
};

export default ChatAgent;