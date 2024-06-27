const express = require('express');
const router = express.Router();
//as in our index.js, we set up our server as app
//here we set up our server as router

//Which ever get route is higher up in the code will be fulfilled first
//As in this one first '/' --> '/news' --> '/12'

router.get('/', (req, res) => { //here router path '/' --> represents localhost:3000/user/
    res.send('user list');
})

router.get('/new', (req, res) => { //here router path '/new' --> represents localhost:3000/user/new
    res.send('new user form');
})

//understanding middleware --> midleware alway run before any other routes run
router.use('/:id', (req, res, next) => {
    console.log("inside middleware");
    next();
})
//A middleware must run next() at the end of it's execution because
//once server runs a middleware it cannot shifts to the route before which middleware is called
//so to shift the server execution to the requested route we need to call next() inside a middleware

//Always put dynamic routing below any other route
router.get('/:id', (req, res) => {
    let id = req.params.id;
    console.log(`Inside get route of user ${id}`);
    res.send(`Get user id : ${id}`)
})

module.exports = router;


//Middleware
//When a request is made to the Express server, it is passed through a chain
//of middleware functions before reaching the final request handler.
//Each middleware function can either terminate the request-response
//cycle or pass control to the next middleware function using the next() function.
//If the current middleware function does not end the cycle and does not
//call next(), the request will be left hanging.