import React from 'react';
import { ArrowRight, Zap, Users, Star, UserPlus, BookOpen } from 'lucide-react';

const Home = ({ isLoggedIn, currentUser, setActiveTab }) => {
  if (isLoggedIn) {
    // DASHBOARD VIEW
    return (
      <div className="container">
        <div className="dashboard-header">
          <h1>Welcome back, {currentUser?.name || 'User'}!</h1>
          <p>Ready to learn something new today?</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon"><BookOpen size={24} /></div>
            <div className="stat-info">
              <h3>2</h3>
              <p>Teaching Skills</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6'}}><Zap size={24} /></div>
            <div className="stat-info">
              <h3>3</h3>
              <p>Learning Goals</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b'}}><Users size={24} /></div>
            <div className="stat-info">
              <h3>5</h3>
              <p>Active Matches</p>
            </div>
          </div>
        </div>

        <div className="dashboard-sections">
          <div className="dash-section">
            <h2><Users size={24} color="var(--primary)" /> My Matches</h2>
            <p style={{color: 'var(--text-muted)', marginBottom: '1.5rem'}}>You have 5 people ready to exchange skills with you.</p>
            <button className="btn-secondary" onClick={() => setActiveTab('matches')}>View Matches <ArrowRight size={18} style={{display:'inline', verticalAlign:'middle', marginLeft:'0.5rem'}} /></button>
          </div>
          
          <div className="dash-section">
            <h2><Compass size={24} color="#3b82f6" /> Browse Skills</h2>
            <p style={{color: 'var(--text-muted)', marginBottom: '1.5rem'}}>Explore the community and find new skills to learn.</p>
            <button className="btn-primary" onClick={() => setActiveTab('discover')}>Find Skills <ArrowRight size={18} style={{display:'inline', verticalAlign:'middle', marginLeft:'0.5rem'}} /></button>
          </div>
        </div>
      </div>
    );
  }

  // LANDING PAGE VIEW (BEFORE LOGIN)
  return (
    <div className="hero">
      <h1><span className="title-gradient">Learn Anything</span> by Teaching What You Know</h1>
      <p>Join the world's premier skill exchange platform. Connect with passionate individuals, trade knowledge, and level up your skills without spending a dime.</p>
      
      <button className="btn-primary" onClick={() => setActiveTab('login')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', padding: '1rem 3rem', fontSize: '1.2rem' }}>
        Get Started <ArrowRight size={20} />
      </button>

      <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
          <Zap size={32} color="var(--primary)" />
          <span style={{ fontWeight: 600 }}>Fast Learning</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
          <Users size={32} color="#3b82f6" />
          <span style={{ fontWeight: 600 }}>1-on-1 Mentorship</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
          <Star size={32} color="#f59e0b" />
          <span style={{ fontWeight: 600 }}>Build Portfolio</span>
        </div>
      </div>
    </div>
  );
};

// Extracted mini icon for dashboard Browse Skills button inline usage if user doesn't import Compass
function Compass(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={props.size||24} height={props.size||24} viewBox="0 0 24 24" fill="none" stroke={props.color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
}

export default Home;
