import React, { useState, useRef, useEffect } from 'react';
import { Send, ArrowLeft, MoreVertical } from 'lucide-react';

const Chat = ({ setActiveTab }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey! Thanks for matching with me.", sender: 'them' },
    { id: 2, text: "I'd love to learn some React. I can definitely help you with Python in exchange.", sender: 'them' },
    { id: 3, text: "Hi Sara! That sounds perfect. How long have you been writing Python?", sender: 'me' },
    { id: 4, text: "About 4 years now. Mostly backend and data stuff.", sender: 'them' }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { id: Date.now(), text: input, sender: 'me' }]);
    setInput('');

    // Simulate response
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), text: "Sounds good, when do you want to do our first session?", sender: 'them' }]);
    }, 1500);
  };

  return (
    <div className="container" style={{ height: '100%', paddingBottom: '0' }}>
      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-header-user">
            <button style={{background:'none', border:'none', color:'var(--text-main)', cursor:'pointer'}} onClick={() => setActiveTab('matches')}>
              <ArrowLeft size={24} />
            </button>
            <div className="user-avatar" style={{width: 40, height: 40, fontSize: '1rem'}}>S</div>
            <div>
              <h3 style={{fontSize: '1.1rem', margin: 0}}>Sara</h3>
              <p style={{margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)'}}>Online</p>
            </div>
          </div>
          
          <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
            <div className="chat-exchange-info">
              <strong>React.js</strong> ↔ <strong>Python</strong>
            </div>
            <button style={{background:'none', border:'none', color:'var(--text-main)', cursor:'pointer'}}><MoreVertical size={20}/></button>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map(msg => (
            <div key={msg.id} className={`message ${msg.sender === 'me' ? 'msg-sent' : 'msg-received'}`}>
              {msg.text}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <form className="chat-input-area" onSubmit={handleSend}>
          <input 
            type="text" 
            placeholder="Type your message..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="chat-send-btn">
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
