import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Discover from './components/Discover';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import Matches from './components/Matches';
import Chat from './components/Chat';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    setActiveTab('home'); // Dashboard
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    setActiveTab('home'); // Landing page
  };

  return (
    <div className="app-container">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isLoggedIn={isLoggedIn} 
        currentUser={currentUser}
      />
      
      <main className="main-content">
        {!isLoggedIn && activeTab === 'home' && <Home isLoggedIn={false} setActiveTab={setActiveTab} />}
        {!isLoggedIn && activeTab === 'login' && <Login onLogin={handleLogin} setActiveTab={setActiveTab} />}
        {!isLoggedIn && activeTab === 'signup' && <Signup onLogin={handleLogin} setActiveTab={setActiveTab} />}
        
        {isLoggedIn && activeTab === 'home' && <Home isLoggedIn={true} currentUser={currentUser} setActiveTab={setActiveTab} />}
        {isLoggedIn && activeTab === 'discover' && <Discover />}
        {isLoggedIn && activeTab === 'matches' && <Matches setActiveTab={setActiveTab} />}
        {isLoggedIn && activeTab === 'chat' && <Chat setActiveTab={setActiveTab} />}
        {isLoggedIn && activeTab === 'profile' && <Profile currentUser={currentUser} onLogout={handleLogout} />}
      </main>
    </div>
  );
}

export default App;
