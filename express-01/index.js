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

app.get('/index', (req, res) => {
    //To render a static file of HTML,CSS,JAVASCRIPT,IMAGES
    res.sendFile('templates/index.html', { root: __dirname })
})
// Only difference between res.sendFile() and res.render() is that 
// res.render() is user to server dynamic Files using view engines
// res.sendFile() is used to send static files

//Since the above route is set up for '/' , similarly we can set up as many 
//routes we want but this would create a mess in our index.js folder
//insteed we place all of the routes in the routes folder and require them when ever we want

app.get('/api', (req, res) => {
    res.json({ "a": 1, "b": 2, "c": 3, "d": 4 })
})

const userRoute = require('./routes/user');
app.use('/user', userRoute);

const booksRoute = require('./routes/books');
app.use('/books', booksRoute);

//-------------------------------------------------------------------------------
//request and query
app.get('/random/:slug', (req, res) => {

    //for URL : http://localhost:3000/random/mangoDb?mode=dark&region=in
    console.log(req.params) // will output { slug: 'mangoDb' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }

    // In URL slug is a variable and whatever written after question mark are query
    // each query is seperated with a & sign

    res.send(`Welcome to random/${req.params.slug}`)

})


//--------------------------------------------------------------------------
// SERVING STATIC FILES IN EXPRESS
// Since our backend code/files our not available to all using our URL. We can make it accessable to our user by keeping them in a public folder
// public folder is used to server a static file such as HTML, CSS, Javascript, Image or any other file to the user without rendering
// Such files are kept in the public folder
// app.use() is a middleware which is user to server a static file in express


//Now when you will hit : http://localhost:3000/notes.txt you will get notes.txt file statically serverd
app.use(express.static('public'))

//making a paticular route to serve static file
//Now when you will hit : http://localhost:3000/static/notes.txt you will get notes.txt file statically serverd
app.use('/static', express.static('public'))

// However, the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))