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

router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.send(`Get user id : ${id}`)
})

module.exports = router;