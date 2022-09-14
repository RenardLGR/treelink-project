const Card = require('../models/Card')

module.exports = {
    createCard: async (req, res)=>{
        try{
            await Card.create({authorId: req.user.id, companyName: req.body.companyName, color: req.body.color, link: req.body.link, position: '10'})
            console.log('Todo has been added!')
            res.redirect('/profile')
        }catch(err){
            console.log(err)
        }
    },
}