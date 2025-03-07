import express from'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deletePost, getposts, updatePost } from '../controllers/post.controller.js';

const postRouter = express.Router();

postRouter.post('/create', verifyToken, create)
postRouter.get('/getposts', getposts)
postRouter.delete('/deletepost/:postId/:userId', verifyToken, deletePost)
postRouter.put('/updatepost/:postId/:userId', verifyToken, updatePost)


export default postRouter;