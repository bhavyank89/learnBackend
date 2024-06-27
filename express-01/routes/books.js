const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("inside books route");
    res.send("List of books");
})

//Different curd operation on author/:id
// router.get('/author/:id', (req, res) => {
//     let id = req.params.id;
//     res.send(`Get author id : ${id}`);
// })
// router.put('/author/:id', (req, res) => {
//     let id = req.params.id;
//     res.send(`update author id : ${id}`);
// })
// router.delete('/author/:id', (req, res) => {
//     let id = req.params.id;
//     res.send(`delete author id : ${id}`);
// })

//insteed of initialising the route('/author/:id') in every method (get,put,delete)
//we chain the method to a signle route as
router.route('/author/:id')
    .get((req, res) => {
        let id = req.params.id;
        res.send(`Get author id : ${id}`);
    }).put((req, res) => {
        let id = req.params.id;
        res.send(`update author id : ${id}`);
    }).delete((req, res) => {
        let id = req.params.id;
        res.send(`delete author id : ${id}`);
    })

module.exports = router;