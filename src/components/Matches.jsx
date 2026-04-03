import React from 'react';
import { MessageSquare } from 'lucide-react';

const MOCK_MATCHES = [
  { id: 1, name: 'Sara', teaches: 'Python', learns: 'React', avatarSrc: 'S', active: true },
  { id: 2, name: 'Elena', teaches: 'Spanish', learns: 'English', avatarSrc: 'E', active: true },
  { id: 3, name: 'Marcus', teaches: 'Photography', learns: 'UI Design', avatarSrc: 'M', active: false },
];

const Matches = ({ setActiveTab }) => {
  return (
    <div className="container" style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <div className="dashboard-header">
        <h1>My Matches</h1>
        <p>Manage your active skill exchanges.</p>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        {MOCK_MATCHES.map(match => (
          <div key={match.id} className="match-card">
            <div className="match-left">
              <div className="user-avatar">{match.avatarSrc}</div>
              <div className="match-details">
                <h3 style={{fontSize: '1.2rem', margin: 0}}>{match.name}</h3>
                {match.active ? 
                  <span className="match-badge">Active</span> : 
                  <span className="match-badge" style={{background:'rgba(255,255,255,0.1)', color:'var(--text-muted)'}}>Pending</span>
                }
              </div>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.4rem'}}>
              <div style={{fontSize: '0.9rem'}}><span style={{color:'var(--text-muted)'}}>You teach:</span> {match.learns}</div>
              <div style={{fontSize: '0.9rem'}}><span style={{color:'var(--text-muted)'}}>You learn:</span> {match.teaches}</div>
            </div>

            <button 
              className="btn-primary" 
              onClick={() => setActiveTab('chat')}
              disabled={!match.active}
              style={{display: 'flex', alignItems:'center', gap:'0.5rem', opacity: match.active ? 1 : 0.5, cursor: match.active ? 'pointer' : 'not-allowed'}}
            >
              <MessageSquare size={18} />
              Chat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
