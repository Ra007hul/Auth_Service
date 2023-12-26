const express = require('express');
const userController = require('../../controllers/user-controller');
const { AuthRequestValidator } = require('../../middlewares/index');
const router = express.Router();

router.post('/signup',AuthRequestValidator.validateUserAuth,userController.create);
router.post('/signin',AuthRequestValidator.validateUserAuth,userController.signIn);
router.get('/isAuthenticated',userController.isAuthenticated);
router.get('/isAdmin',AuthRequestValidator.validateIsAdminRequest,userController.isAdmin);
module.exports=router;