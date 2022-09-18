const express = require('express')
const router = express.Router()
// const profileController = require('../controllers/profile') 
const editController = require('../controllers/edit') 

const { ensureAuth } = require('../middleware/auth')

router.get('/profile/:id', ensureAuth, editController.getEditProfile)

router.get('/card/:id', ensureAuth, editController.editCard)

router.delete('/deleteCard', ensureAuth, editController.deleteCard)


module.exports = router