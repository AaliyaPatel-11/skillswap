import React from 'react';

const UserCard = ({ user, onRequestSwap }) => {
  return (
    <div className="user-card">
      <div className="user-card-header">
        <div className="user-avatar">
          {user.name.charAt(0)}
        </div>
        <div className="user-info">
          <h3>{user.name}</h3>
          <span className="user-level">{user.level}</span>
        </div>
      </div>
      
      <div className="skills-section">
        <div className="skill-row">
          <span className="skill-label">Teaches</span>
          <span className="skill-tag" style={{ borderColor: 'rgba(139, 92, 246, 0.3)', color: '#d8b4fe' }}>
            {user.teaches}
          </span>
        </div>
        <div className="skill-row">
          <span className="skill-label">Wants</span>
          <span className="skill-tag" style={{ borderColor: 'rgba(59, 130, 246, 0.3)', color: '#bfdbfe' }}>
            {user.wants}
          </span>
        </div>
      </div>
      
      <button 
        className="btn-secondary"
        onClick={() => onRequestSwap(user)}
      >
        Request Swap
      </button>
    </div>
  );
};

export default UserCard;
