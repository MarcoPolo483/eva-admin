import React from 'react';

const UserManagement: React.FC = () => (
  <section aria-label="User Management" tabIndex={0}>
    <h2>User Management</h2>
    <p>List, add, and manage users here. (Feature scaffold)</p>
    {/* TODO: Integrate with @eva/data for user CRUD */}
    {/* TODO: Add accessible table/list, keyboard navigation, and ARIA roles */}
  </section>
);

export default UserManagement;
