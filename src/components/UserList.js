import React from 'react';

function UserList({ users, onEdit, onDelete }) {
  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.username}</p>
          <button onClick={() => onEdit(user)}>Edit</button>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
