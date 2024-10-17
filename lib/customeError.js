class CumstomeError extends Error{
    constructor(status,messages){
        super(messages)
        this.status = status

    }
}


module.exports={CumstomeError}