const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserRepository = require('../repository/user-repository');
const {JWT_KEY}= require('../config/serverConfig');

class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw error;
        }
    }

    async signIn(email , plainPassword){
        try {
            const user = await this.userRepository.findByEmail(email);

            const passwordsMatch = this.comparePassword(plainPassword, user.password);
            if(!passwordsMatch){
                console.log("password doesnot match");
                throw {error : 'Incorrect password'}
            }

            const newJWT = this.createToken({email : user.email , id : user.id});
            return newJWT;

            
        } catch (error) {
            console.log("Something went in the wrong in the signIn process");
            throw error
        }
    }

    createToken(user){
        try {
            const result = jwt.sign(user , JWT_KEY , {expiresIn : '1d'});
            return result;
        } catch (error) {
            console.log("something went wrong in token creation");
            throw error;
        }
    }

    verifyToken(token){
        try {
            const response = jwt.verify(token,JWT_KEY);
            return response;
        } catch (error) {
            console.log("something went wrong in token validation",error );
            throw error;
        }
    }

    comparePassword(userInputPlainPassword , encryptedPassword){
        try {
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in the password comparision");
            throw error
        }
    }
}

module.exports=UserService;