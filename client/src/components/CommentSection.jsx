import { Button, Textarea } from 'flowbite-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



export default function CommentSection({postId}) {
  
    const {currentUser} = useSelector(state => state.user);
    const [comment, setComment] = useState('');
    console.log(comment)


    const handleSubmit = async (e)=> {
        e.preventDefault();
        
    }

    return (
    <div className='max-w-2xl mx-auto w-full p-3'>{currentUser ? 
        (
            <div className='flex items-center gap-1 text-gray-500 font-medium my-5'>
                <p>signed in as: </p>
                <img className='h-5 w-5 rounded-full object-cover' src={currentUser.profilePicture} alt='profile-pic'/>
                <Link to={'/dashboard?tab=profile'} className='text-xs text-cyan-600 hover:scale-105 transition-all'>@{currentUser.email}</Link>
            </div>
        )
    : (
        <div className='text-sm text-teal-500 my-5 flex gap-2'>Please sign in to add comment.
        <Link className='text-blue-600' to={'/sign-in'}>Sign in</Link>
        </div>
    )}
    {
        currentUser && (
            <form 
            onSubmit={handleSubmit}
            className='border border-teal-500 rounded-md p-4'>
                <Textarea 
                placeholder='Add a comment'
                rows='3'
                maxLength='200'
                onChange={(e)=>setComment(e.target.value)}
                value={comment}
                />
                <div className='flex justify-between items-center mt-5'>
                    <p className='text-gray-500 text-sm'>{200 - comment.length} charactors remaining</p>
                    <Button outline gradientDuoTone='purpleToBlue' type='submit'>
                        Submit
                    </Button>
                </div>
            </form>
        )
    }
    
    </div>
  )
}
