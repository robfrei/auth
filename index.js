const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const postRoute = require('./posts');

dotenv.config();

// connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
    console.log('Connected to MongoDB Atlas')
);

// middleware
app.use(express.json());

// route middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log('Server up and running'));