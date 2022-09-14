const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profile') 
const cardsController = require('../controllers/card')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, profileController.getProfile)

router.post('/createCard', cardsController.createCard)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router