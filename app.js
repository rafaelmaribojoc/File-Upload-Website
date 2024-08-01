const path = require('path'); //built-in libary

const express = require('express'); //third party library

const userRoutes = require('./routes/users');
const db = require('./data/database');

const app = express(); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));// this tells that we're gonna use EJS templating engine and set it

app.use(express.urlencoded({ extended: false })); //this allows us to work with forms for it encodes
app.use(express.static('public'));
app.use('/images', express.static('images')); //this makes the 'images' folder available to the users/client-side

app.use(userRoutes); //path and routes of the website

db.connectToDatabase().then(function () {
  app.listen(3000);
}); // this starts to listen on port 3000 if the connecting to the database is successful or the returned value of the function didn't fail
