const validateUserAuth = (req , res)=> {
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

        next();
    }
}
module.exports = {
    validateUserAuth
}