const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
	'mongodb+srv://muazzem:sami@cluster0.cndd4.mongodb.net/?retryWrites=true&w=majority'
);
const studentsRoutes = require('./api/routes/students');

app.use('/students', studentsRoutes);

module.exports = app;
