import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side */}
        <div className="flex-1">
          <Link to="/" className="font-bold text-4xl dark:text-white">
            <span
              className="px-4 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                      rounded-lg text-white"
            >
              Word Wave
            </span>
          </Link>
          <p className="mt-5 text-sm">
            This is a MERN Stack and Firebase project for a blog application. 
            This project is for my portfolio so I can show my work to clients.
          </p>
        </div>

        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Your username"/>
              <TextInput type="text" placeholder="Username" id="username"/>
            </div>

            <div className="">
              <Label value="Your email"/>
              <TextInput type="email" placeholder="Email" id="email"/>
            </div>

            <div className="">
              <Label value="Your password"/>
              <TextInput type="password" placeholder="Password" id="password"/>
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">Sign Up</Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className="text-blue-500 font-semibold">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
