const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("inside books route");
    res.send("List of books");
})

module.exports = router;