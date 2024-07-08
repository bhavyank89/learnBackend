const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //To render a static file of HTML,CSS,JAVASCRIPT,IMAGES
    console.log(__dirname.slice(0, 80) + "templates\index.html")
    res.sendFile('templates/index.html', { root: __dirname.slice(0, 80) })
})
// Only difference between res.sendFile() and res.render() is that 
// res.render() is user to server dynamic Files using view engines
// res.sendFile() is used to send static files

module.exports = router;