const express = require('express');
const userController = require('../../controllers/user-controller');

const router = express.Router();

router.post('/signup',userController.create);
router.post('/signin', userController.signIn);

module.exports=router;