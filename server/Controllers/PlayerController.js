



class PlayerController{

    static logEntry  = async (req, res) => {
        try{
            console.log(req.body);
            res.send('hello from protected');
        }catch(err){
            console.log(err);
        }
        
    };
    
}

module.exports = PlayerController