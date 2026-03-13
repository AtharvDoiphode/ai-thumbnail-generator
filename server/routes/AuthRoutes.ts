import express from 'express';
import { registerUser, loginUser, logOutUser, VerifyUser } from '../controllers/AuthControllers.js';
import protect from '../middlewares/auth.js';

const AuthRouter = express.Router();

AuthRouter.post('/register', registerUser);
AuthRouter.post('/login', loginUser);
AuthRouter.get('/verify', protect, VerifyUser);
AuthRouter.post('/logout', protect, logOutUser);

export default AuthRouter;