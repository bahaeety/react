const mongoose = require('mongoose');
const mongoStore = require('connect-mongo');

const connectionString = 'mongodb://localhost:27017/social_media';

const connection = mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((e) => {
  console.error('Error connecting to MongoDB:', e);
  process.exit(1); // Exit the process on failure
});

const sessionStore = mongoStore.create({
  mongoUrl: connectionString,
  collectionName: 'sessions', 
});

module.exports = { connection, sessionStore };
