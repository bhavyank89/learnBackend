//node is javascript run itme evvironment
//express is node framework to set up our own surver

//in order to setup our server we need to require/import are express module
const express = require('express');

//to setup our server we write
const app = express();

//setting vew-engine as ejs for render an ejs file
app.set('view engine', 'ejs');

//to start listening to our server we write 
const port = 3000;
app.listen(port)

//once our app start listening to the port we set up our routes
//This can be done in two ways
//Method-1 --> using app.get or app.post or app.patch or app.put or app.delete i.e, crud operation (used in the home.js route file)
//Method-2 --> calling route externally i.e, app.use('route path',require('route file path'))
const home = require('./routes/home');
app.use('/', home);

const index = require('./routes/index');
app.use('/index', index);

const api = require('./routes/api');
app.use('/api', api);

const user = require('./routes/user');
app.use('/user', user);

const books = require('./routes/books');
app.use('/books', books);

const statFiles = require('./routes/statFiles');
app.use('/statFiles', statFiles);

const random = require('./routes/random');
app.use('/random', random);

const middleware = require('./routes/middleware');
app.use('/middleware', middleware);