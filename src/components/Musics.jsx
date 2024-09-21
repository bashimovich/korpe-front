import React from 'react'
import i2 from './../assets/images/m2.jpg'
import i3 from './../assets/images/m3.jpg'
import i5 from './../assets/images/m5.webp'
import { useNavigate } from 'react-router-dom'

function Musics() {
    const navigate = useNavigate()
    function gomusiclist(type) {
       navigate('/kids/musics', {state:type}) 
    }
  return (
    <>
        <div className="musics pt-10">
            <p className='container text-white font-bold text-6xl text-left'>Aydymlar</p>
            <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
                <div className='w-full'>
                    <img onClick={()=>{gomusiclist('turkmen')}} src={i5} className='w-full  rounded-full ease-in duration-300 hover:shadow-lg hover:cursor-pointer' alt="" />
                </div>
                <div className='w-full h-full'>
                    <img onClick={()=>{gomusiclist('english')}} src={i3} className='h-full w-full rounded-full ease-in duration-300 hover:shadow-lg hover:cursor-pointer' alt="" />
                </div>
                <div className='w-full h-full'>
                    <img onClick={()=>{gomusiclist('russian')}} src={i2} className='h-full w-full rounded-full ease-in duration-300 hover:shadow-lg hover:cursor-pointer' alt="" />
                </div>
                <div className='w-full h-full'>
                    <img onClick={()=>{gomusiclist('traditional')}}  src={i5} className='h-full w-full rounded-full ease-in duration-300 hover:shadow-lg hover:cursor-pointer' alt="" />
                </div>
                <div className='w-full h-full '>
                    <img onClick={()=>{gomusiclist('tale')}}  src={i3} className='h-full w-full rounded-full ease-in duration-300 hover:shadow-lg hover:cursor-pointer' alt="" />
                </div>
                <div className='w-full h-full '>
                    <img onClick={()=>{gomusiclist('huwdi')}}  src={i5} className='h-full w-full rounded-full ease-in duration-300 hover:shadow-lg hover:cursor-pointer' alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Musics