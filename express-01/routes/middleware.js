const express = require('express');
const router = express.Router();

//understanding middleware --> midleware alway run before any other routes run
router.use('/', (req, res, next) => {
    console.log("inside middleware1 - " + Date.now() + " is a " + req.method);
    next();
})
router.use('/', (req, res, next) => {
    console.log("inside middleware2 - " + Date.now() + " is a " + req.method);
    next();
})

router.get('/', (req, res) => { //here router path '/' --> represents localhost:3000/user/
    res.send('Middleware');
})

//A middleware must run next() at the end of it's execution because
//once server runs a middleware it cannot shifts to the route before which middleware is called
//so to shift the server execution to the requested route we need to call next() inside a middleware

module.exports = router;


//Middleware
//When a request is made to the Express server, it is passed through a chain
//of middleware functions before reaching the final request handler.
//Each middleware function can either terminate the request-response
//cycle or pass control to the next middleware function using the next() function.
//If the current middleware function does not end the cycle and does not
//call next(), the request will be left hanging.

// middleware is a function that run before a URL endpoint hits the route
// i.e, whenever you make a request on a URL that request is passed through a middleware before it reaches the route
// A middleware is made using app.use(function of middleware)
// (req,res,next)=>{
//   console.log(`Inside middlware');
//    next();                           --> the request reaches the next middleware
//  }                                   --> or the route only when next() is called