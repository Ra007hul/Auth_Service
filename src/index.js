const express = require('express');
const ApiRoutes = require('./routes/index');
const { PORT }= require('./config/serverConfig');
const bodyParser = require('body-parser');
const app = express();

const prepareAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',ApiRoutes);
    
    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
    })
}

prepareAndStartServer();
