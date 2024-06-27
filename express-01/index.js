//node is javascript run itme evvironment
//express is node framework to set up our own surver

//in order to setup our server we need to require/import are express module
const express = require('express');

//to setup our server we write
const app = express();

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

    res.send('hii');
})