import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true,
        unique: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
    },

    profilePicture: {
        type: String,
        default: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },


}, 
{timestamps: true})

const User = mongoose.model("User", userSchema)

export default User;