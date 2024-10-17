const {CumstomeError}= require("../lib/customeError")
const {myJwt}= require("../lib/jwt")
const {userServis}= require("../modules/user/servis.user")

class AuthMD{
    #userServis
    #jwt
    
    constructor(jwt, userServis){
        this.#userServis= userServis
        this.#jwt= jwt

    }

    async chekToken(req,res,next){
        try {
                const token = req.cookies.token
                if(!token){
                    throw new CumstomeError(401, "token yoq!");
                }

                const {data:id}= await this.#jwt.verif(token)

                req.userId= id
                next()

            
        } catch (error) {
            res.render("login.ejs", { message: error.message });
        }
    }


    async chekUser(req,res,next){
        try {
            const userId= req.userId
            if(!userId){
                throw new CumstomeError(401, "token id yoq!");
            }

           const {data:user}=  await this.#userServis.getOneById(userId)
           if(!user){
            throw new CumstomeError(401, "user yoq!");

           }

           req.correntUser= user
           next()





            
            
        } catch (error) {
            res.render("login.ejs", { message: error.message });
        }
    }


}


const authMd= new AuthMD(myJwt,userServis)
module.exports= {authMd}



