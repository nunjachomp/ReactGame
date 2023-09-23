const Player = require('../Schemas/PlayerSchema')
require('dotenv').config();
const mongoose = require("mongoose")


mongoose.connect(process.env.MongoDB_URI)



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
         return playerLoggin;
        }catch (err){
            console.log(err);
        }
    }
}

module.exports = PlayerModel