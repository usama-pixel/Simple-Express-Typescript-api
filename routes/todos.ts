import { Router } from 'express'

import { Todo } from '../models/todo'

let todos:Todo[] = []

const router = Router()

router.get('/',(req, res, next) => {
  res.status(200).json({todos})
})

router.post('/', (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().getTime().toString(),
    text: req.body.text
  }
  todos.push(newTodo)
  res.status(201).json({message: 'Todo added', todo: newTodo, todos})
})

router.post('/todo/:todoId', (req, res, next) => {
  const tid = req.params.todoId
  const todoIndex = todos.findIndex(todo => todo.id === tid)
  if(todoIndex >= 0) {
    todos[todoIndex] = {id: tid, text: req.body.text}
    return res.status(200).json({message: 'Updated todo', todos})
  }
  res.status(404).json({message: 'Could not find'})
})

router.delete('/todo/:todoId', (req, res, next) => {
  todos = todos.filter(todoItem => todoItem.id !== req.params.todoId)
  res.status(200).json({message: 'Todo deleted', todos})
})

export default router