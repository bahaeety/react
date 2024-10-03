const express = require('express');
const user = require('./routes/user')
const cors = require('cors');
const connection = require('./database/mongoose')
const User = require('./models/user');

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.post('/user/register', async (req,res)=>{
  const {Username, Email, Name, Password } = req.body ;
  const user = new User({
      name: Name,
      email: Email,
      username: Username,
      password: Password
  })
  console.log(user);
  await user.save()
})


module.exports = app;
