import express from'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create } from '../controllers/post.controller.js';

const postRouter = express.Router();

postRouter.post('/create', verifyToken, create)

export default postRouter;