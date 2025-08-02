import React, { useEffect, useState } from 'react';
import { getUsers, addUser, updateUser, deleteUser } from '../api';
import UserList from '../components/UserList';
import UserForm from '../components/Userform';

function HomePage() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then(res => setUsers(res.data))
      .catch(() => alert("Failed to load users"))
      .finally(() => setLoading(false));
  }, []);

  const handleAddOrUpdate = user => {
    if (user.id) {
      updateUser(user.id, user).then(() => {
        setUsers(prev => prev.map(u => (u.id === user.id ? user : u)));
        setEditingUser(null);
      });
    } else {
      addUser(user).then(res => {
        setUsers(prev => [...prev, { ...res.data, id: Date.now() }]); // Fake ID
      });
    }
  };

  const handleDelete = id => {
    if (window.confirm("Delete this user?")) {
      deleteUser(id).then(() => {
        setUsers(prev => prev.filter(u => u.id !== id));
      });
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onSubmit={handleAddOrUpdate} editingUser={editingUser} />
      {loading ? <p>Loading...</p> : <UserList users={users} onEdit={setEditingUser} onDelete={handleDelete} />}
    </div>
  );
}

export default HomePage;
