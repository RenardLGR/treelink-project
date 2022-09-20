const express = require('express')
const router = express.Router()
// const profileController = require('../controllers/profile') 
const editController = require('../controllers/edit') 

const { ensureAuth } = require('../middleware/auth')

router.get('/profile/:id', ensureAuth, editController.getEditProfile)

router.get('/card/:id', ensureAuth, editController.getEditCard)

router.get('/bio/:id', ensureAuth, editController.getEditBio)

router.put('/card/:id', ensureAuth, editController.editCard)

router.put('/bio/:id', ensureAuth, editController.editBio)

router.put('/editCardPosition', ensureAuth, editController.editPositionCard)

router.delete('/deleteCard', ensureAuth, editController.deleteCard)


module.exports = router