// RegistrationForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; 
import './RegistrationForm.css';

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make the POST request to the backend API
    axios.post('http://localhost:5000/api/register', formData)
      .then((response) => {
        
        console.log(response.data);
        if (response.status === 201) {
          toast.success('User registered successfully!', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error registering user:', error);

        toast.error('Registration failed. Please check your data and try again.', {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div>
      <h1>Digital eRupee User Registration</h1>
    <form onSubmit={handleSubmit}>
     
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default UserRegistrationForm;
