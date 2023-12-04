import { Router } from 'express';
import userController from './user.controller';
import userValidator from './user.validator';
import ValidateFactory from '../../services/validateFactory';

const router = new Router();

// Rutas
router.get('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/register', userController.register);
router.post(
  '/register',
  ValidateFactory(userValidator.signUp),
  userController.registerPost,
);

export default router;
