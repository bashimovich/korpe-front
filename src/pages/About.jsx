import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import i from './../assets/images/tomandjerry.jpg'

function About() {
  return (
    <>
        <Navbar />
        <div className='bg-gradient-to-r from-green-400 to-blue-500 p-5 pt-48 h-screen'>
            <div className=' w-full flex items-center justify-center'>
                <div className='w-[50%] p-5'>
                    <h1 className='text-8xl text-white text-left'>Turkmen Hindi Merkezi</h1>
                    <p className=' text-white text-left text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reiciendis nostrum quas repellendus ipsum expedita?</p>
                </div>
                <div className='w-[50%] p-5'>
                    <img  className='w-full h-[600px] rounded-l-[100px]' src={i} alt="" />
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default About