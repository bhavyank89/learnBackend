import mongoose from 'mongoose';
import express from 'express';

const a = mongoose.connect('mongodb://localhost:27017/');
const app = express();
const port = 3000;

app.listen(port, () => { console.log(`listening to port ${port}`) });

app.get('/', (req, res) => {
    res.send("hello World!!");
})