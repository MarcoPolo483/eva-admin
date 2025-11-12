import React from 'react';

const Dashboard: React.FC = () => (
  <main aria-label="Admin Dashboard" tabIndex={0}>
    <h1>Admin Dashboard</h1>
    <p>Welcome to the EVA Admin UI. Manage users, view analytics, and configure system settings here.</p>
    {/* TODO: Add keyboard navigation and ARIA roles for widgets */}
  </main>
);

export default Dashboard;
