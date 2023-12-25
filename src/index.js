const express = require('express');
const ApiRoutes = require('./routes/index');
const { PORT }= require('./config/serverConfig');
const bodyParser = require('body-parser');
const app = express();

// const UserService = require('./services/user-service');


const prepareAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',ApiRoutes);
    
    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
        // const service = new UserService();
        // const token = service.createToken({email : "rahul@gmail.com" , id : 1});
        // // console.log(token);
        // const response = service.verifyToken(token);
        // console.log(response);
    })
}

prepareAndStartServer();



