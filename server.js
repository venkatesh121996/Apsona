const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const noteRoutes = require('./routes/notes');
const app = express();

mongoose.connect('mongodb://localhost:27017/notes-app', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
