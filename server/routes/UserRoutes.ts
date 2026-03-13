import express from 'express';
import { getThumbnailbyId, getUsersThumbnails } from '../controllers/UserController.js';
import protect from '../middlewares/auth.js';

const UserRouter = express.Router();

UserRouter.get('/thumbnails', protect, getUsersThumbnails);  // ✅ protect added
UserRouter.get('/thumbnail/:id', protect, getThumbnailbyId); // ✅ protect added

export default UserRouter;