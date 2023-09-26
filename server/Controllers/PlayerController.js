const PlayerModel = require("../Models/PlayerModel");




class PlayerController{

    static logEntry  = async (req, res) => {
        try{
            res.send(req.sessionID)
        }catch(err){
            console.log(err.message);
        }
        
    };

    static logOut = async (req,res) => {
        try{
            await PlayerModel.logOutplayerModel(req.session.PlayerSession)
            res.send('successful logout')
            }catch(err){
                console.log(err.message);
            }
    }
    static sendUpdate = async (req,res) => {
        res.send("succefuly moved up")
    }
    
}

module.exports = PlayerController