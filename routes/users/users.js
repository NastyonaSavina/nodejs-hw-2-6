const express = require('express');

const router = new express.Router();

const {
    registrationController,
    loginController,
    logoutController,
    currentUserController,
    uploadAvatarController,
} = require("../../controllers/users/index");

const { asyncWrapper } = require("../../helpers/index");
const {addUserValidation, authMiddleware, uploadAvatarMiddleware} = require("../../middlewares/index");




router.post('/register', addUserValidation, asyncWrapper(registrationController));
router.post('/login', addUserValidation, asyncWrapper(loginController));
router.post('/logout', authMiddleware, asyncWrapper(logoutController));
router.get('/current', authMiddleware, asyncWrapper(currentUserController));
router.patch('/avatars', authMiddleware, uploadAvatarMiddleware.single("avatar"), asyncWrapper(uploadAvatarController));



module.exports = {usersRouter: router};
