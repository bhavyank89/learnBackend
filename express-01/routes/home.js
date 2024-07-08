const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {    //req - request, res - response
    console.log('hello');

    //you can send res only once
    //there are many method linked to res like send, download, status, json, render

    // res.send('hii');

    //on rendering an dynamic html file we get an error
    // res.render('index.html') //--> throws an error

    //insteed we run an ejs file
    //to run an ejs file we must setup our view-engine as ejs
    res.render('index.ejs', { text: "world" });

})

module.exports = router;