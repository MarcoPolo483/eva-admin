import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate authentication logic
    alert('Login submitted!');
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Login Form" tabIndex={0}>
      <h2>Login</h2>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required aria-required="true" />
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required aria-required="true" />
      <button type="submit">Sign In</button>
      {/* TODO: Add error messages and focus management for accessibility */}
    </form>
  );
};

export default Login;
