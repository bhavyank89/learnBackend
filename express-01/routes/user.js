const express = require('express');
const router = express.Router();
//as in our index.js, we set up our server as app
//here we set up our server as router

router.get('/', (req, res) => { //here router path '/' --> represents localhost:3000/user/
    res.send('user list');
})

router.get('/new', (req, res) => { //here router path '/new' --> represents localhost:3000/user/new
    res.send('new user form');
})

module.exports = router;