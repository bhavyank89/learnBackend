const express = require('express');
const router = express.Router();

//request and query
router.get('/:slug', (req, res) => {

    //for URL : http://localhost:3000/random/mangoDb?mode=dark&region=in
    console.log(req.params) // will output { slug: 'mangoDb' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }

    // In URL slug is a variable and whatever written after question mark are query
    // each query is seperated with a & sign

    res.send(`Welcome to random/${req.params.slug}`)

})

module.exports = router;