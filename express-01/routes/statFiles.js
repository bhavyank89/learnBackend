const express = require('express');
const router = express.Router();

// SERVING STATIC FILES IN EXPRESS
// Since our backend code/files our not available to all using our URL. We can make it accessable to our user by keeping them in a public folder
// public folder is used to server a static file such as HTML, CSS, Javascript, Image or any other file to the user without rendering
// Such files are kept in the public folder
// app.use() is a middleware which is user to server a static file in express


//Now when you will hit : http://localhost:3000/notes.txt you will get notes.txt file statically serverd
router.use(express.static('public'))

//making a paticular route to serve static file
//Now when you will hit : http://localhost:3000/static/notes.txt you will get notes.txt file statically serverd
router.use('/', express.static('public'))

// However, the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:
const path = require('path')
router.use('/', express.static(path.join(__dirname, 'public')))

module.exports = router;