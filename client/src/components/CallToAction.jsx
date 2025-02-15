import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about JavaScript?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with 100 JavaScript Projects
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.usmanghori.com" target='_blank' rel='noopener noreferrer'>
                    Hire, Best MERN Stack Developer
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/272503033/original/4555220aecad098decb806361e6094b4ca17bc11/django-and-python-web-page.jpg" />
        </div>
    </div>
  )
}