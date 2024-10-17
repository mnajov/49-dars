const {hash, compare}= require("bcrypt")


class HashPass{
    #salt
    constructor(salt){
        this.#salt= salt
    }

    async hash(password){

        return await hash(password, this.#salt)

    }

    async compare(password, haash){
        return await compare(password, haash)
    }
}


const bcrypt = new HashPass(10)
module.exports = {bcrypt}