# Learn Mern
Following the PedroTech MERN Tutorial For Beginners | Learn MERN In 60 Minutes tutorial

## Setup
- Created a new directory called learn-mern
- Create two subdirectories, client and server for the frontend and backend respectively
  
```zsh
# Set up npm within /server
npm init -y

# Install the relevant libraries to the backend
npm install express mongoose cors nodemon mongodb

# Create React App on the client side
npx create-react-app .
npm install axios

# I had to add this within the package.json as the React app was not starting:
"scripts": {
    "start": "react-scripts --openssl-legacy-provider start",
```

## Run application

```zsh  
# In server
npm start

# In client
npm start
```
