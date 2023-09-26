const PlayerModel = require("../Models/PlayerModel");




class PlayerController{

    static logEntry  = async (req, res) => {
        try{
        const sessionID = await PlayerModel.logPlayerModel(req.body)
        res.send(sessionID)
        }catch(err){
            console.log(err.message);
        }
        
    };

    static logOut = async (req,res) => {
        try{
            res.send('successful logout')
            }catch(err){
                console.log(err.message);
            }
    }
    
}

module.exports = PlayerController