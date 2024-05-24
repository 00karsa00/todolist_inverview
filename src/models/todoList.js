import mongoose from "mongoose";

const TodoList = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium',
    },
    dueDate: {
        type: Date,
        default: null,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    isDelete: { type: Boolean, default: false },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

export default  mongoose.model("todoList", TodoList, "todoList");