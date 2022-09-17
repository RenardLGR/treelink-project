const User = require('../models/User')
const Card = require('../models/Card')

module.exports = {
    getEditProfile: async (req, res)=>{
        //console.log(req.user)
        let profileToEditId = req.params.id
        console.log(req.user.id, req.params.id);
        if(req.user.id == req.params.id){
            try{
                const profileUser = await User.findById(profileToEditId).lean()
                // console.log(profileUser._id);
                const cardItems = await Card.find({authorId: profileToEditId}).lean()
    
                res.render('profile-edit.ejs', {user: req.user, profile: profileUser, cards: cardItems})
            }catch(err){
                console.log(err)
            }
        }
    },
}