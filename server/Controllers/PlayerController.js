const PlayerModel = require("../Models/PlayerModel");




class PlayerController{

    static logEntry  = async (req, res) => {
        try{
        const session = await PlayerModel.logPlayerModel(req.body)
        }catch(err){
            console.log(err.message);
        }
        
    };
    
}

module.exports = PlayerController