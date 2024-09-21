import React from 'react'
import Navbar from '../components/Navbar'
import img from './../assets/images/b5.jpg'
import { useNavigate } from 'react-router-dom'

function PoemsList() {
    const navigate = useNavigate()
    function goreadacticle() {
        navigate('/text/id')
        
    }
  return (
    <>
        <Navbar />
        <div class="bg-gradient-to-r from-green-400 to-blue-500">
            <div className="video_list">
                <div className="container">
                    <div className='pt-5'>
                        <input className='w-full md:w-1/2 p-2 border-l-emerald-400 focus:outline-none text-xl rounded-3xl pl-5 pr-5' type="text" />
                    </div>
                    <div className='pt-5 grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex flex-col md:flex-row p-5'>
                            <img src={img} className='w-1/2 shadow-2xl m-auto' alt="" />
                            <div>
                                <p className='p-5 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugiat illum quisquam libero nisi, perspiciatis debitis delectus tenetur totam odio, modi veniam magni nulla dolorem? Sit commodi rem aspernatur consectetur?</p>
                                <p onClick={()=>{goreadacticle()}} className='underline text-2xl hover:cursor-pointer text-white hover:text-3xl'>Oka</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row p-5'>
                            <img src={img} className='w-1/2 shadow-2xl m-auto' alt="" />
                            <div>
                                <p className='p-5 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugiat illum quisquam libero nisi, perspiciatis debitis delectus tenetur totam odio, modi veniam magni nulla dolorem? Sit commodi rem aspernatur consectetur?</p>
                                <p className='underline text-2xl hover:cursor-pointer text-white hover:text-3xl'>Oka</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row p-5'>
                            <img src={img} className='w-1/2 shadow-2xl m-auto' alt="" />
                            <div>
                                <p className='p-5 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugiat illum quisquam libero nisi, perspiciatis debitis delectus tenetur totam odio, modi veniam magni nulla dolorem? Sit commodi rem aspernatur consectetur?</p>
                                <p onClick={()=>{goreadacticle()}} className='underline text-2xl hover:cursor-pointer text-white hover:text-3xl'>Oka</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row p-5'>
                            <img src={img} className='w-1/2 shadow-2xl m-auto' alt="" />
                            <div>
                                <p className='p-5 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugiat illum quisquam libero nisi, perspiciatis debitis delectus tenetur totam odio, modi veniam magni nulla dolorem? Sit commodi rem aspernatur consectetur?</p>
                                <p onClick={()=>{goreadacticle()}} className='underline text-2xl hover:cursor-pointer text-white hover:text-3xl'>Oka</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row p-5'>
                            <img src={img} className='w-1/2 shadow-2xl m-auto' alt="" />
                            <div>
                                <p className='p-5 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugiat illum quisquam libero nisi, perspiciatis debitis delectus tenetur totam odio, modi veniam magni nulla dolorem? Sit commodi rem aspernatur consectetur?</p>
                                <p onClick={()=>{goreadacticle()}} className='underline text-2xl hover:cursor-pointer text-white hover:text-3xl'>Oka</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row p-5'>
                            <img src={img} className='w-1/2 shadow-2xl m-auto' alt="" />
                            <div>
                                <p className='p-5 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugiat illum quisquam libero nisi, perspiciatis debitis delectus tenetur totam odio, modi veniam magni nulla dolorem? Sit commodi rem aspernatur consectetur?</p>
                                <p onClick={()=>{goreadacticle()}} className='underline text-2xl hover:cursor-pointer text-white hover:text-3xl'>Oka</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PoemsList