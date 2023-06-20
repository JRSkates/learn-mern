import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import backgroundImage from './maxresdefault.jpg';


function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/getUsers')
      .then((response) => {
        setListOfUsers(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(listOfUsers);
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})`, fontFamily: 'Montserrat, sans-serif' }}>
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
