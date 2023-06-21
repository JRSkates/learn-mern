import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import backgroundImage from './maxresdefault.jpg';


function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    username: '',
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    Axios.get('http://localhost:3001/getUsers')
      .then((response) => {
        setListOfUsers(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validate form inputs
    if (!formData.name || !formData.age || !formData.username) {
      console.log('Please fill in all the fields');
      return;
    }
  
    try {
      const response = await Axios.post('http://localhost:3001/createUser', formData);
      console.log(response);
  
      setFormData({
        name: '',
        age: '',
        username: '',
      });
  
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleNameChange = (event) => {
    setFormData({ ...formData, name: event.target.value })
  }

  const handleAgeChange = (event) => {
    setFormData({ ...formData, age: event.target.value })
  }

  const handleUsernameChange = (event) => {
    setFormData({ ...formData, username: event.target.value })
  }

  //console.log(listOfUsers);
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})`, fontFamily: 'Montserrat, sans-serif' }}>
      <form onSubmit={handleSubmit}> 
        <input type="text" name="name" value={formData.name} 
          onChange={handleNameChange}
        />
        <input type="number" name="age" value={formData.age} 
          onChange={handleAgeChange}

        />
        <input type="text" name="username" value={formData.username} 
          onChange={handleUsernameChange}
        />
        <button type="submit">Submit</button>
      </form>

      <div className="usersDisplay">
        {listOfUsers.map((user)=> {
          return ( 
          <div> 
            <h1> Name: {user.name}</h1> 
            <h1> Age: {user.age}</h1> 
            <h1> Username: {user.username}</h1> 
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
