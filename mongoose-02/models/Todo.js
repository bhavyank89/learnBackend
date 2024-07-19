import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    isDone: {
        type: Boolean,
        default: false,
    },
    createdOn: {
        type: Date,
        default: new Date(),
    }
})

export const Todo = mongoose.model('Todo', TodoSchema);