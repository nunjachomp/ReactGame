const Player = require('../Schemas/PlayerSchema')




class PlayerModel{
    static logPlayerModel = async(playerEntry) => {
        try {

      
         return playerLoggin._id;
        }catch (err){
            console.log(err);
        }
    }

    static logOutplayerModel = async (playerSessionData) => {
        try{
            console.log('Model', playerSessionData);
            const playerLogginOut = await Player.create({
                email:playerSessionData.email,
                username:playerSessionData.nickname,
                fullName:playerSessionData.name,
                Picture:playerSessionData.picture,
                locale:playerSessionData.locale,
                level:playerSessionData.level,
                score:playerSessionData.score,
                EntryDate:playerSessionData.loginDate,
                SessionDuration: playerSessionData.sessionDuration
             })
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = PlayerModel