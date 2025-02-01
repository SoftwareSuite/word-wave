import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

const SignIn = () => {
  
  const [formData, setFormData] = useState({});
  const {loading, error : errorMessage} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e)=> {
    e.preventDefault();

    if(!formData.email || !formData.password){
      return dispatch(signInFailure("All fields are required."))
    }

    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(formData)
      });

      const data = await res.json()
      if(data.success === false){
        dispatch(signInFailure(data.message))
      }
      if(res.ok){
        dispatch(signInSuccess(data))
        navigate('/')
      }
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  };
  
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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      
            <div className="">
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
            </div>

            <div className="">
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size="sm"/>
                  <span className="pl-3">Loading... </span></>
                ) : "Sign In"
              }
            </Button>
            
            <OAuth/>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Dont have an account?</span>
            <Link to="/sign-up" className="text-blue-500 font-semibold">
              Sign Up
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default SignIn;