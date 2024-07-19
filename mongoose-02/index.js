import mongoose from 'mongoose';
import { Todo } from './models/Todo.js'

mongoose.connect("mongodb://localhost:27017/sigmaLearn")

const createTodo = async (data) => {
    try {
        const todo = await Todo.create(data);
        console.log(todo);
    } catch (e) {
        console.log(e.message);
    }
}
const data = {
    title: `First task ${Math.floor(Math.random() * 200 + 1)}`,
    desc: "Hello!! Welcome to Todo"
}
createTodo(data);