
// create error class
class CustomAPIError extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

// return new custom error class
const createCustomerError = (msg, statusCode) =>{
    return new CustomAPIError (msg,statusCode)
}

module.exports = { createCustomerError, CustomAPIError}