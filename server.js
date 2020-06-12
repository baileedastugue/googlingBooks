const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser  = require("body-parser");

const books = require('./routes/api/books');

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(bodyParser.json());

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }

// DB Config
const db = require("./config/keys").mongoURI;

// connect to mongo using mongoose
mongoose
    .connect(db)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Use routes
app.use('/api/books', books);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})