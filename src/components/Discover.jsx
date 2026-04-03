import React, { useState } from 'react';
import { CheckCircle2, Star } from 'lucide-react';

const MOCK_USERS = [
  { id: 1, name: 'Aaliya', teaches: 'Graphic Design', wants: 'Guitar', level: 'Intermediate', rating: '4.9', desc: 'I can teach you Photoshop and Illustrator basics to advanced techniques.' },
  { id: 2, name: 'Naimish', teaches: 'Guitar', wants: 'Graphic Design', level: 'Beginner', rating: '4.7', desc: 'Acoustic guitar lessons for complete beginners. Learn chords and songs.' },
  { id: 3, name: 'Sara', teaches: 'Python', wants: 'Public Speaking', level: 'Advanced', rating: '5.0', desc: 'Data science and generic Python scripting. Will trade for speech training.' },
  { id: 4, name: 'David', teaches: 'React.js', wants: 'UI/UX Design', level: 'Expert', rating: '4.8', desc: 'Senior frontend dev here. Want to learn Figma.' },
  { id: 5, name: 'Elena', teaches: 'Spanish', wants: 'English', level: 'Native', rating: '4.9', desc: 'Conversational Spanish practice over video call.' },
  { id: 6, name: 'Marcus', teaches: 'Photography', wants: 'Video Editing', level: 'Advanced', rating: '4.6', desc: 'Learn composition and lighting using DSLR or just your phone.' },
];

const Discover = () => {
  const [alertInfo, setAlertInfo] = useState(null);

  const handleRequestSwap = (user) => {
    setAlertInfo({ user });
    setTimeout(() => {
      setAlertInfo(null);
    }, 4000);
  };

  return (
    <div className="container" style={{ animation: 'fadeIn 0.5s ease-out' }}>
      {alertInfo && (
        <div className="custom-alert">
          <div className="alert-icon" style={{flexShrink: 0, width: 40, height: 40, borderRadius:'50%', background:'rgba(139, 92, 246, 0.2)', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <CheckCircle2 size={24} color="var(--primary)" />
          </div>
          <div className="alert-content">
            <h4 style={{margin:0, fontSize:'1.1rem'}}>Match Created!</h4>
            <p style={{margin:0, marginTop:'0.3rem', fontSize:'0.9rem', color:'var(--text-muted)'}}>You requested to swap with <strong>{alertInfo.user.name}</strong>.</p>
          </div>
        </div>
      )}

      <div className="dashboard-header">
        <h1>Discover Skills</h1>
        <p>Find the perfect partner to exchange skills and grow together.</p>
      </div>

      <div className="users-grid">
        {MOCK_USERS.map(user => (
          <div key={user.id} className="user-card">
            <div className="user-card-header">
              <div className="user-avatar">{user.name.charAt(0)}</div>
              <div className="user-info">
                <h3>{user.name}</h3>
                <div className="rating">
                  <Star size={14} fill="#f59e0b" color="#f59e0b" />
                  <span>{user.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="skills-section">
              <div className="skill-row">
                <span className="skill-label">Teaches</span>
                <span className="skill-tag" style={{ borderColor: 'rgba(139, 92, 246, 0.3)', color: '#d8b4fe' }}>
                  {user.teaches}
                </span>
              </div>
              <div className="skill-desc">{user.desc}</div>
              
              <div className="skill-row" style={{marginTop: '0.8rem'}}>
                <span className="skill-label">Wants</span>
                <span className="skill-tag" style={{ borderColor: 'rgba(59, 130, 246, 0.3)', color: '#bfdbfe' }}>
                  {user.wants}
                </span>
              </div>
            </div>
            
            <button 
              className="btn-secondary"
              style={{marginTop: 'auto'}}
              onClick={() => handleRequestSwap(user)}
            >
              Request Swap
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
