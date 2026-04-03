import React from 'react';
import { BookOpen, Search, Bell, User, Home as HomeIcon, Compass, MessageSquare } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab, isLoggedIn, currentUser }) => {
  return (
    <>
      <nav className="top-navbar">
        <div className="logo" onClick={() => setActiveTab('home')}>
          <BookOpen className="logo-icon" size={28} />
          <span>SkillSwap</span>
        </div>
        
        {isLoggedIn && (
          <>
            <div className="search-bar">
              <Search size={18} color="var(--text-muted)" />
              <input type="text" placeholder="Search skills, users..." />
            </div>
            
            <div className="nav-actions">
              <button className="icon-btn"><Bell size={20} /></button>
              <button className="icon-btn avatar-btn" onClick={() => setActiveTab('profile')}>
                {currentUser?.name ? currentUser.name.charAt(0) : <User size={20} />}
              </button>
            </div>
          </>
        )}
        
        {!isLoggedIn && (
          <div className="nav-actions">
            <button className="btn-secondary nav-login-btn" onClick={() => setActiveTab('login')}>Log In</button>
            <button className="btn-primary" onClick={() => setActiveTab('signup')}>Sign Up</button>
          </div>
        )}
      </nav>

      {isLoggedIn && (
        <nav className="bottom-navbar">
          <button 
            className={`bottom-nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            <HomeIcon size={24} />
            <span>Home</span>
          </button>
          <button 
            className={`bottom-nav-item ${(activeTab === 'discover' || activeTab === 'skills') ? 'active' : ''}`}
            onClick={() => setActiveTab('discover')}
          >
            <Compass size={24} />
            <span>Skills</span>
          </button>
          <button 
            className={`bottom-nav-item ${activeTab === 'matches' || activeTab === 'chat' ? 'active' : ''}`}
            onClick={() => setActiveTab('matches')}
          >
            <MessageSquare size={24} />
            <span>Matches</span>
          </button>
          <button 
            className={`bottom-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={24} />
            <span>Profile</span>
          </button>
        </nav>
      )}
    </>
  );
};

export default Navbar;
