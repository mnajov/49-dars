const jwt= require("jsonwebtoken")
class Jwt{


    async token(id){
        
        const data =jwt.sign({
            exp:Math.floor(Date.now() / 1000) + (60 * 60),
            data:id
        }, "ok")

        return data
    }

    async verif(token){

        return jwt.verify(token, "ok")
    }


}

const myJwt= new Jwt()

module.exports= {myJwt}