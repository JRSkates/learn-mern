const express = require('express');
const app = express();

// const cors = require('cors');

// this lets express listen to local port 3001 and start the backend server
// within package.json we also added a new start script which calls nodemon
// this allows the server to restart as changes are made. Starts with npm start
app.listen(3001, () => {
  console.log('SERVER RUNS');
});
