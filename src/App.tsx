import React from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import UserManagement from './components/UserManagement';
import './App.css';

const App: React.FC = () => {
  // TODO: Add routing and authentication state
  return (
    <div>
      <header>
        <h1>EVA Admin UI</h1>
      </header>
      <Dashboard />
      <Login />
      <UserManagement />
    </div>
  );
};

export default App;
