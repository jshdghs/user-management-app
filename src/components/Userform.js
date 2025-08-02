import React, { useState, useEffect } from 'react';

function UserForm({ onSubmit, editingUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: ''
  });

  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name || '',
        email: editingUser.email || '',
        username: editingUser.username || ''
      });
    } else {
      setFormData({ name: '', email: '', username: '' });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name || !formData.email || !formData.username) {
      alert('All fields are required.');
      return;
    }

    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // If editingUser exists, pass ID back
    const userToSubmit = editingUser
      ? { ...formData, id: editingUser.id }
      : formData;

    onSubmit(userToSubmit);

    // Reset form
    setFormData({ name: '', email: '', username: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        name="username"
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {editingUser ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
}

export default UserForm;
