const validateUserAuth = (req , res ,next)=> {
    if(
        !req.body.email ||
        !req.body.password
    )
    {
        return res.status(400).json({
            success: false , 
            data : {},
            message : 'Something went wrong' ,
            err : 'Email or password is missing'
        })

        
    }
    next();
}
const validateIsAdminRequest = (req,res,next)=>{
    if(!req.body.userId){
        return res.status(400).json({
            data : {},
            success : false , 
            message : "Must Provide userId"
        })
    }
    next();
}
module.exports = {
    validateUserAuth,
    validateIsAdminRequest
}