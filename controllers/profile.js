const Card = require('../models/Card')
const User = require('../models/User')

module.exports = {
    getProfile: async (req,res)=>{
        //console.log(req.user)
        try{ //if the user is found
            let profileId = req.params.id
            const profileUser = await User.findById(profileId).lean()
            //const profileUser = await User.find({_id: profileId})


            const cardItems = await Card.find({authorId: profileId}).lean()

            res.render('profile.ejs', {user: req.user, profile: profileUser, cards: cardItems})

        }catch(err){ //if the id requested is not in our DB
            res.render('error/404.ejs', {user: req.user})
            console.log(err)
        }
    },
}
