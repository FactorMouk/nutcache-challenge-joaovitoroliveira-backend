const express = require('express');
const mongoose = require('mongoose');

// Connects to MongoDB database
const uri =
  'mongodb+srv://FactorMouk:<Geninho11>@cluster0.ruitu.mongodb.net/Cluster0?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || uri;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error!'));

const employees = require('./src/routes/employees.route');
const app = express();
app.use('/employees', employees);
app.listen(8000, () => {
  console.log('Server running on port 8000!');
});
