import React, { useState } from 'react';

const Signup = ({ onLogin, setActiveTab }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    teachSkills: '',
    learnSkills: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      onLogin({
        id: 'u2',
        name: formData.name,
        email: formData.email,
        bio: `I can teach ${formData.teachSkills} and want to learn ${formData.learnSkills}`
      });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card" style={{ maxWidth: '550px' }}>
        <h2>Create an Account</h2>
        <p>Start exchanging skills for free today.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Alex Johnson"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="alex@example.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="Create a strong password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required 
            />
          </div>
          <div className="form-group">
            <label>Skills I can teach (comma separated)</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. JavaScript, Guitar, Cooking"
              value={formData.teachSkills}
              onChange={(e) => setFormData({...formData, teachSkills: e.target.value})}
              required 
            />
          </div>
          <div className="form-group">
            <label>Skills I want to learn (comma separated)</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. Spanish, UI Design"
              value={formData.learnSkills}
              onChange={(e) => setFormData({...formData, learnSkills: e.target.value})}
              required 
            />
          </div>
          
          <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '1rem', padding: '1rem'}}>
            Sign Up
          </button>
        </form>

        <p style={{marginTop: '2rem', marginBottom: 0}}>
          Already have an account? <span onClick={() => setActiveTab('login')} style={{color: 'var(--primary)', cursor: 'pointer', fontWeight: 600}}>Log in</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
