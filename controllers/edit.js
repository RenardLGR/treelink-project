const User = require('../models/User')
const Card = require('../models/Card')

module.exports = {
    getEditProfile: async (req, res)=>{
        //console.log(req.user)
        let profileToEditId = req.params.id
        // console.log(req.user.id, req.params.id);
        if(req.user.id == req.params.id){ //checks if the user connected is the user he is trying to edit
            try{
                const profileUser = await User.findById(profileToEditId).lean()
                // console.log(profileUser._id);
                const cardItems = await Card.find({authorId: profileToEditId}).lean()
    
                res.render('edit/profile-edit.ejs', {user: req.user, profile: profileUser, cards: cardItems})
            }catch(err){
                console.log(err)
            }
        }else{ //else render 403 - access denied
            res.render('error/403.ejs', {user: req.user})
        }
    },

    getEditCard: async (req, res) => {
        //console.log(req.user)
        try {
            const card = await Card.findById(req.params.id).lean()
            if(card.authorId == req.user.id){ //checks if the user connected is the same than the author of the card 
                res.render('edit/card-edit.ejs', {user: req.user, card: card})
            }else{ //else render 403 - access denied
                res.render('error/403.ejs', {user: req.user})
            }
            
        }catch(err) {
            console.log(err)
        }
    },

    getEditBio: async (req, res) => {
        //console.log(req.user)
        let profileToEditId = req.params.id
        // console.log(req.user.id, req.params.id);
        if(req.user.id == req.params.id){ //checks if the user connected is the user he is trying to edit
            try{
                const profileUser = await User.findById(profileToEditId).lean()
                // console.log(profileUser._id);
    
                res.render('edit/bio-edit.ejs', {user: req.user, profile: profileUser})
            }catch(err){
                console.log(err)
            }
        }else{ //else render 403 - access denied
            res.render('error/403.ejs', {user: req.user})
        }
    },

    editCard: async (req, res) => {
        try {
            let newColor = req.body.colorFromEJS
            let newCompany = req.body.textFromEJS
            let newLink = req.body.linkFromEJS
            let cardId = req.body.cardId
            // console.log(newColor, newCompany, cardId);
    
            await Card.findOneAndUpdate({_id: cardId},{color: newColor, companyName: newCompany, link: newLink})
            console.log('Updated!')
            res.json('Updated!')
        } catch(err) {
            console.log(err);
        }
    },

    deleteCard: async (req, res) => {
        // console.log(req.body.cardIdFromJSFile)
        try{
            await Card.findOneAndDelete({_id:req.body.cardIdFromJSFile})
            console.log('Deleted Card')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },


    editBio: async (req, res) => {
        
        try{
            await User.findOneAndUpdate({_id: req.body.userIdFromEJS}, {bio: req.body.bioFromEJS})
            console.log('Updated!')
            res.json('Updated!')
        }catch(err){
            console.log(err)
        }
    }
}