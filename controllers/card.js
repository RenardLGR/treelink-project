const Card = require('../models/Card')

module.exports = {
    createCard: async (req, res)=>{
        try{
            let myCards = await Card.find({authorId: req.user.id}).lean()
            // console.log(myCards);
            let position = myCards.length + 1
            await Card.create({authorId: req.user.id, companyName: req.body.companyName, color: req.body.color, link: req.body.link, position: position})
            console.log('Link has been added!')
            res.redirect('/edit/profile/' + req.user.id)
        }catch(err){
            console.log(err)
        }
    },
}