import express from'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, getposts } from '../controllers/post.controller.js';

const postRouter = express.Router();

postRouter.post('/create', verifyToken, create)
postRouter.get('/getposts', getposts)

export default postRouter;