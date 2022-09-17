const Card = require('../models/Card')
const User = require('../models/User')

module.exports = {
    getProfile: async (req,res)=>{
        //console.log(req.user)
        try{
            let profileId = req.params.id
            const profileUser = await User.findById(profileId).lean()
            // console.log(profileUser._id);
            const cardItems = await Card.find({authorId: profileId}).lean()

            res.render('profile.ejs', {user: req.user, profile: profileUser, cards: cardItems})
        }catch(err){
            console.log(err)
        }
    },
}
