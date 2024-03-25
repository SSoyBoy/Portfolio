import React from 'react'
import BackGround from '../assets/img/1012111.jpg';
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img src={BackGround} alt='/'
        className='w-full h-screen object-cover object-left'></img>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50 '>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Duy</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Frontend Developer',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Coder',
                            2000,
                            'Tech Enthusiast',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1em', paddingLeft: '5px' }}
                        repeat={Infinity}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaTwitter size={20} className='cursor-pointer'/>
                    <FaFacebook size={20} className='cursor-pointer'/>
                    <FaInstagram size={20} className='cursor-pointer'/>
                    <FaLinkedinIn size={20} className='cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
