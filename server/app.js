const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());
app.use(require('./router/auth'));
const PORT = process.env.PORT;



const middleware = (req, res, next) => {
    console.log("We are middleware");
    next();
}

// app.get('/', (req, res) => {
//     res.send('<h1>This is Home page</h1>');
// });
app.get('/about', middleware, (req, res) => {
    res.send('<h1>This is about page</h1>');
});
app.get('/contact', (req, res) => {
    res.send('<h1>This is contact page</h1>');
});
app.get('/signin', (req, res) => {
    res.send('<h1>This is login page</h1>');
});

app.get('/signup', (req, res) => {
    res.send('<h1>This is signup page</h1>');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})