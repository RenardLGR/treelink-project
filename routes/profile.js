const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profile') 
const cardsController = require('../controllers/card')
const { ensureAuth } = require('../middleware/auth')

router.get('/:id', ensureAuth, profileController.getProfile)

// router.get('/modify', profileController.getEditProfile)
// router.get('/modify', ()=> {
//     console.log('I am here')
// })

router.post('/createCard', cardsController.createCard)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router