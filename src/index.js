const express = require('express');
const ApiRoutes = require('./routes/index');
const { PORT }= require('./config/serverConfig');
const bodyParser = require('body-parser');
const app = express();
const db = require('./models/index');
// const UserService = require('./services/user-service');
const {User , Role} =require('./models/index');

const prepareAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',ApiRoutes);
    
    app.listen(PORT,async ()=>{
        console.log(`Server started at port ${PORT}`);
        // const service = new UserService();
        // const token = service.createToken({email : "rahul@gmail.com" , id : 1});
        // // console.log(token);
        // const response = service.verifyToken(token);
        // console.log(response);
        // db.sequelize.sync({alter:true})
        const u1 = await User.findByPk(1);
        const r1 = await Role.findByPk(1);
        u1.addRole(r1);
    })
}

prepareAndStartServer();



