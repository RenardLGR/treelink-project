const express = require('express')
const router = express.Router()
// const profileController = require('../controllers/profile') 
const editController = require('../controllers/edit') 

const { ensureAuth } = require('../middleware/auth')

router.get('/profile/:id', ensureAuth, editController.getEditProfile)


module.exports = router