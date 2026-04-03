import React, { useState } from 'react';

const Login = ({ onLogin, setActiveTab }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleDemoFill = () => {
    setEmail('alex@example.com');
    setPassword('password123');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Create mock user
      onLogin({
        id: 'u1',
        name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
        email: email,
        bio: "Enthusiastic learner testing out SkillSwap."
      });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p>Log in to continue your skill exchange journey</p>

        <div className="demo-text">
          <strong>Demo Login:</strong><br/>
          Email: alex@example.com<br/>
          Password: any password<br/>
          <button onClick={handleDemoFill} style={{marginTop:'0.5rem', background:'transparent', color:'var(--primary)', border:'none', cursor:'pointer', fontWeight:600, textDecoration:'underline'}}>Fill Demo Credentials</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '1rem', padding: '1rem'}}>
            Log In
          </button>
        </form>

        <p style={{marginTop: '2rem', marginBottom: 0}}>
          Don't have an account? <span onClick={() => setActiveTab('signup')} style={{color: 'var(--primary)', cursor: 'pointer', fontWeight: 600}}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
