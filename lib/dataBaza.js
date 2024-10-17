const fs= require("node:fs/promises")
const {resolve}= require("node:path")

class DataBaza{
    #path
    constructor(path){
        this.#path= path
    }
async read(){
    const data = JSON.parse(await fs.readFile(this.#path))
    return data

}

async write(data){
    
    await fs.writeFile(this.#path, JSON.stringify(data, null, 4))

}
    
}



module.exports={DataBaza}