import React, { useState } from 'react';
import { LogOut, CheckCircle2, BookOpen, Lightbulb, Edit3, Settings, Moon } from 'lucide-react';

const Profile = ({ currentUser, onLogout }) => {
  const [darkMode, setDarkMode] = useState(true);

  // Use mock data if current user is not fully populated with skills
  const teachSkills = currentUser?.bio?.includes('teach') ? [currentUser.bio.split('teach ')[1].split(' and')[0]] : ['Advanced React', 'Node.js Backend'];
  const learnSkills = currentUser?.bio?.includes('learn') ? [currentUser.bio.split('learn ')[1]] : ['Graphic Design', 'Public Speaking'];

  return (
    <div className="container" style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <div className="dashboard-header">
        <h1>My Profile</h1>
        <p>Manage your account, skills, and preferences.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: '2rem' }}>
        
        {/* Left Col - Settings & Basic Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="profile-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <div className="profile-avatar" style={{ margin: '0 auto 1.5rem', width: 120, height: 120 }}>
              {currentUser?.name ? currentUser.name.charAt(0) : 'J'}
            </div>
            <h2 style={{ marginBottom: '0.2rem' }}>{currentUser?.name || 'John Doe'}</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{currentUser?.email || 'john@example.com'}</p>
            
            <p style={{ fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '2rem' }}>
              {currentUser?.bio || 'Passionate Developer & Lifelong Learner on SkillSwap.'}
            </p>
            
            <button className="btn-secondary" style={{ width: '100%', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
              <Edit3 size={18} /> Edit Profile
            </button>
          </div>

          <div className="dash-section" style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Settings size={20}/> Settings</h3>
            
            <div className="setting-row">
              <div className="setting-label">
                <Moon size={18} color="var(--primary)" /> Dark Mode
              </div>
              <div 
                style={{
                  width: 50, height: 26, background: darkMode ? 'var(--primary)' : 'var(--text-muted)', 
                  borderRadius: 20, position: 'relative', cursor: 'pointer', transition: 'background 0.3s'
                }}
                onClick={() => setDarkMode(!darkMode)}
              >
                <div style={{
                  position: 'absolute', top: 3, left: darkMode ? 27 : 3, width: 20, height: 20, 
                  background: 'white', borderRadius: '50%', transition: 'left 0.3s'
                }}></div>
              </div>
            </div>
            
            <div className="setting-row" style={{ borderBottom: 'none' }}>
              <button 
                onClick={onLogout}
                style={{
                  background: 'transparent', border: 'none', color: '#ef4444', 
                  fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500
                }}
              >
                <LogOut size={18} /> Log Out
              </button>
            </div>
          </div>
        </div>

        {/* Right Col - Skills */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="dash-section">
            <h2 style={{ color: 'var(--primary)' }}><BookOpen size={24} /> I Can Teach</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
              {teachSkills.map((skill, idx) => (
                <div key={idx} style={{ background: 'var(--glass-bg)', padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 500 }}>{skill}</span>
                  <CheckCircle2 size={18} color="var(--primary)" />
                </div>
              ))}
              <button className="btn-secondary" style={{ marginTop: '0.5rem', borderStyle: 'dashed' }}>+ Add Skill</button>
            </div>
          </div>

          <div className="dash-section" style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
            <h2 style={{ color: '#3b82f6' }}><Lightbulb size={24} /> I Want To Learn</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
              {learnSkills.map((skill, idx) => (
                <div key={idx} style={{ background: 'var(--glass-bg)', padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 500 }}>{skill}</span>
                  <div style={{ width: 8, height: 8, background: '#3b82f6', borderRadius: '50%' }}></div>
                </div>
              ))}
              <button className="btn-secondary" style={{ marginTop: '0.5rem', borderStyle: 'dashed' }}>+ Add Skill</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
