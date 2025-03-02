import express from 'express';
import { createComment, editComment, getPostComments, likeComment } from '../controllers/comment.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const commentRouter = express.Router()

commentRouter.post('/create', verifyToken, createComment)
commentRouter.get('/getpostcomments/:postId' , getPostComments)
commentRouter.put('/likecomment/:commentId', verifyToken, likeComment)
commentRouter.put('/editcomment/:commentId', verifyToken, editComment)
export default commentRouter