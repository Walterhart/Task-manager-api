
// wrap try and catch to controll functions
// pass error to next middleware
// asyncwarpper have right away acess to  req and res in function
// note: there are packages that handle this
const asyncWrapper = (callback) => {

    return async(req,res,next) =>{
        try {
            await callback(req,res,next)
        } catch (error) {
            next(error)
            
        }
    }
}

module.exports = asyncWrapper