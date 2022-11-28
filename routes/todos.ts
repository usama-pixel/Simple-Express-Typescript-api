import { Router } from 'express'

import { Todo } from '../models/todo'

const todos:Todo[] = []

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
})

export default router