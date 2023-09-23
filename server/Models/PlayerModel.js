const Player = require('../Schemas/PlayerSchema')
require('dotenv').config();
const mongoose = require("mongoose")


mongoose.connect(process.env.MongoDB_URI+process.env.DB)



class PlayerModel{
    static logPlayerModel = async(playerEntry) => {
        try {
         const playerLoggin = await Player.create({
            email:playerEntry.email,
            username:playerEntry.nickname,
            fullName:playerEntry.name,
            Picture:playerEntry.picture,
            locale:playerEntry.locale
         })
         console.log(' model ', playerLoggin);
         return playerLoggin._id;
        }catch (err){
            console.log(err);
        }
    }
}

module.exports = PlayerModel