

class PlayerController {

    static   logUser =  async (req, res)  => {
        try{
            console.log(req.body);
            res.send('scussess');
        }catch(err){
            console.log(err);
        }
        
    }
}


module.exports = PlayerController