const express = require('express');
const user = require('./routes/user')
const cors = require('cors');
const connection = require('./database/mongoose')

const app = express();

app.use(express.json());
app.use(cors());
app.use('/user',user)

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});


module.exports = app;
