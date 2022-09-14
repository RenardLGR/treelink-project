const Card = require('../models/Card')
const User = require('../models/User')

module.exports = {
    getProfile: async (req,res)=>{
        console.log(req.user)
        try{
            const profileUser = await User.find({_id: req.user.id}).lean()
            const cardItems = await Card.find({authorId: req.user.id}).lean()

            res.render('profile.ejs', {user: req.user, profile: profileUser[0], cards: cardItems})
        }catch(err){
            console.log(err)
        }
    },
    
}
