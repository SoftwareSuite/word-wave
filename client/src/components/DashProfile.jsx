import { Alert, Button, TextInput } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';
import { app } from "../firebase";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageUploadingProgress, setImageUploadingProgress] = useState(null);
  const [imageUploadingError, setImageUploadingError] = useState(null);

//   console.log(imageUploadingProgress, imageUploadingError)
  const fileRef = useRef()

  const handleImageChange = (e)=> {
    const file = e.target.files[0]
    if(file) {
        setImageFile(file)
        setImageFileUrl(URL.createObjectURL(file))
    }
  }

  useEffect(()=>{
    if(imageFile){
        uploadImage()
    }
  },[imageFile])

  const uploadImage = async ()=> {
    // firebase image upload settings below in comments
    // service firebase.storage {
    //     match /b/{bucket}/o {
    //       match /{allPaths=**} {
    //         allow read;
    //         allow write: if
    //         request.resource.size < 2 * 1024 * 1024 &&
    //         request.resource.contentType.matches('image/.*')
    //       }
    //     }
    //   }
    setImageUploadingError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on('state_changed', (snapshot)=> {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageUploadingProgress(progress.toFixed(0))
    },
    (error)=> {
        setImageUploadingError('could not upload image, File must be 2 MB.')
        setImageUploadingProgress(null)
        setImageFile(null)
        setImageFileUrl(null)
    },
    ()=> {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=> {
            setImageFileUrl(downloadURL)
        })
    }
)};

  return (
    <div className="w-full max-w-lg p-3 mx-auto">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        ref={fileRef}
        hidden/>
        <div className="relative w-32 h-32 self-center cursor-pointer
         shadow-md overflow-hidden rounded-full" onClick={()=> fileRef.current.click()}>
          
        {
            imageUploadingProgress && (
                <CircularProgressbar value={imageUploadingProgress || 0 } text={`${imageUploadingProgress}%`}
                strokeWidth={5}
                styles={{
                    root:{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top:0,
                        left:0
                    },
                    path:{
                        stroke: `rgba(62,152,199, ${imageUploadingProgress /100})`
                    },

                }}
                />
            )
        }

          <img
            src={imageFileUrl || currentUser.profilePicture}
            alt="user"
            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
          />
        </div>

        {
            imageUploadingError && (<Alert color="failure"> {imageUploadingError}</Alert>)
        }
        
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
        />

        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />

        <TextInput type="password" id="password" placeholder="********" />

        <Button type="submit" gradientDuoTone="purpleToBlue" outline>
          Update
        </Button>
      </form>

      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}
