class RegController{
    


    async reg(req,res,next){
        
        try {
            
            res.render("reg.ejs")


        } catch (error) {
            next(error)
        }


    }
}

const regController= new RegController();

module.exports= {regController}