import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';

dotenv.config()


mongoose.connect(process.env.MONGO)
.then(()=> {
    console.log("connected to database")
})
.catch(error => console.log(error))


const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, ()=> {
    console.log("server is working on port 3000!!")
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/post', postRouter)
app.use('/api/comment', commentRouter)


app.use((err, req, res, next)=> {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error"

    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});