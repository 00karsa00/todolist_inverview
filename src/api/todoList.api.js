import express from 'express';
import { verifyToken } from '../utils/auth.js';
import { addTodoData, getAllTodo, updateStatus,complatedTodo,getTodoInfo, deleteTodo } from '../controller/todoList.controller.js';
import { todoCreateValidate, todoUpdateValidate } from '../validation/todo.validation.js';

const router = express.Router();

router.post("/create", verifyToken, todoCreateValidate, addTodoData);

router.post("/list", verifyToken, getAllTodo);

router.patch("/:id", verifyToken,todoUpdateValidate, updateStatus);

router.delete("/:id", verifyToken, deleteTodo);

router.get("/complated/:id", verifyToken, complatedTodo);

// router.get("/deleted/:id", verifyToken, deleteTodo);

router.get("/:id", verifyToken, getTodoInfo);

export default router;