const express = require('express');
const userController = require('../../controllers/user-controller');
const { AuthRequestValidator } = require('../../middlewares/index');
const router = express.Router();

router.post('/signup',AuthRequestValidator.validateUserAuth,userController.create);
router.post('/signin',AuthRequestValidator.validateUserAuth,userController.signIn);

module.exports=router;