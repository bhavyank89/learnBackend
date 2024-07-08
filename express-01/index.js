//node is javascript run itme evvironment
//express is node framework to set up our own surver

//in order to setup our server we need to require/import are express module
const express = require('express');

//to setup our server we write
const app = express();

//setting vew-engine as ejs for render an ejs file
app.set('view-engine', 'ejs');

//to start listening to our server we write 
const port = 3000;
app.listen(port)

//once our app start listening to the port we set up our routes
//This can be done in two ways
//Method-1 --> using app.get or app.post or app.patch or app.put or app.delete i.e, crud operation
//Method-2 --> calling route externally i.e, app.use('route path',require('route file path'))
app.get('/', (req, res) => {    //req - request, res - response
    console.log('hello');

    //you can send res only once
    //there are many method linked to res like send, download, status, json, render

    // res.send('hii');

    //on rendering an html file we get an error
    // res.render('index.html') //--> throws an error

    //insteed we run an ejs file
    //to run an ejs file we must setup our view-engine as ejs
    res.render('index.ejs', { text: "world" });

})

//request and query
app.get('/random/:slug', (req, res) => {

    //for URL : http://localhost:3000/random/mangoDb?mode=dark&region=in
    console.log(req.params) // will output { slug: 'mangoDb' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }

    // In URL slug is a variable and whatever written after question mark are query
    // each query is seperated with a & sign

    res.send(`Welcome to random/${req.params.slug}`)

})

//Since the above route is set up for '/' , similarly we can set up as many 
//routes we want but this would create a mess in our index.js folder
//insteed we place all of the routes in the routes folder and require them when ever we want

const userRoute = require('./routes/user');
app.use('/user', userRoute);

const booksRoute = require('./routes/books');
app.use('/books', booksRoute);