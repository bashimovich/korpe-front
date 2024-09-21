import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { axiosInstance } from '../utils/axiosInstance'
import { useLocation } from 'react-router-dom'

function MusicList() {
    const [CurrentAudio, setCurrentAudio] = useState([])
    const [Audios, setAudios] = useState([])
    const location = useLocation();
    const type = location.state;


    function setMforPlay(music) {
       setCurrentAudio(music) 
    }
    useEffect(() => {
    window.scroll(0,0)
      axiosInstance
        .get(`/audios/${type}`)
        .then((res) => {
            setAudios(res.data.results)
        })
        .catch((err) => {
          console.log(err);
        });
  }, [])
  return (
    <>
        <Navbar />
        <div class="bg-gradient-to-r from-green-400 to-blue-500">
            <div className="book_list">
                <div className="container">
                    <div className='pt-5'>
                        <input className='w-full md:w-1/2 p-2 border-l-emerald-400 focus:outline-none text-xl rounded-3xl pl-5 pr-5' type="text" />
                    </div>
                    <div className='pt-10 grid gap-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-2'>
                        {
                            Audios.map((item)=>{return(
                                <div onClick={() => {setMforPlay(item)}} key={item.unique_key} className={`${CurrentAudio.unique_key === item.unique_key ? 'bg-green-300':'' } w-full ease-in duration-300 hover:bg-green-300 hover:cursor-pointer p-3 rounded-xl`}>
                                    <img src={item.thumbnail} className='w-100 rounded-lg' alt="" />
                                    <div className='flex pt-3'>
                                        <div className='flex justify-center mr-2'>
                                            <img src={item.channel.image} className='min-w-10 w-10 h-10' alt="" />
                                        </div>
                                        <div>
                                            <p className='text-2xl md:text-base text-white text-left'>{item.title_tm}</p>
                                            <p className='text-white text-left'>{item.views} views - 3 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            )})
                        }

                    </div>
                </div>
            </div>
        </div>
        <div class="sticky bottom-0">
            <audio className='w-full' autoPlay controls src={CurrentAudio.audio}>
                Your browser does not support the audio element.
            </audio>            
        </div>
        <Footer />
    </>
  )
}

export default MusicList