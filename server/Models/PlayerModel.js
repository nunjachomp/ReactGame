const Player = require('../Schemas/PlayerSchema')




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
      
         return playerLoggin._id;
        }catch (err){
            console.log(err);
        }
    }
}

module.exports = PlayerModel