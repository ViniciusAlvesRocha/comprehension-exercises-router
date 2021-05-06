import React from 'react';

const Users = ({ greetingMessege = 'Hi There' }) => (
  <div>
    <h2>Users</h2>
    <p>{ greetingMessege }, this is my awesome Users component</p>
  </div>
);

export default Users;
