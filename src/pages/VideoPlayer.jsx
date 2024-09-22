import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import logo from './../assets/images/korpe-logo.png'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance, BASE_DOMAIN } from '../utils/axiosInstance'
import { formatDistanceToNow } from 'date-fns';
import { truncateText, truncateBigText, SmalltruncateText } from '../utils/maxCharacter';
import { useTranslation } from 'react-i18next'

function VideoPlayer() {
    const {t, i18n} = useTranslation()
    const timeAgo = (dateString) => {
        return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    };
    const { key } = useParams();  
    const [currentVideo, setcurrentVideo] = useState()
    const [RandomVideo, setRandomVideo] = useState()
    const navigate = useNavigate()
    function gotowatch(key) {
        navigate(`/kids/video/${key}`)
    }
    useEffect(() => {
    window.scroll(0,0)
      axiosInstance
        .get(`videos/${key}/`)
        .then((res) => {
            setcurrentVideo(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
      axiosInstance
        .get(`videos/random/`)
        .then((res) => {
            setRandomVideo(res.data.results)
        })
        .catch((err) => {
          console.log(err);
        });
  }, [key])

  return (
    <>
        <Navbar />
        <div class="bg-gradient-to-r from-green-400 to-blue-500">
            <div className="video_list">
                <div className="container">
                    {/* <div className='pt-5'>
                        <input className='w-full md:w-1/2 p-2 border-l-emerald-400 focus:outline-none text-xl rounded-3xl pl-5 pr-5' type="text" />
                    </div> */}
                    <div className='pt-5 flex items-start flex-col lg:flex-row'>
                        <div class="h-auto w-full lg:w-11/12 p-0 md:pr-5">
                            <video src={currentVideo?.video} class="h-full w-full rounded-lg" controls autoPlay controlslist="nodownload">
                                <source
                                    src={currentVideo?.video}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                            <div className='flex p-3 w-11/12'>
                                <div className='flex items-center justify-center mr-2'>
                                    <img src={currentVideo.channel.image} className='w-10 h-10' alt="" />
                                </div>
                                <div className='w-11/12'>
                                    <p className='text-white text-left'>{truncateBigText(currentVideo?.title_tm)}</p>
                                    <p className='text-white text-left text-sm'>{currentVideo?.views} {t('view')} - {timeAgo(currentVideo?.created_at)}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-green-400 w-full lg:w-1/4 max-h-[85vh] overflow-y-auto rounded-lg p-3'>
                            {currentVideo?.related_videos?.map((video, index)=>{return(
                            video.unique_key !== key ?
                                <div  onClick={() => {gotowatch(video.unique_key)}} key={video.unique_key} className='flex  p-1 hover:bg-green-300 hover:cursor-pointer rounded-lg duration-300 ease-in'>
                                    <img src={BASE_DOMAIN + video.thumbnail} className='rounded-lg w-1/3 h-100 mr-2' alt="" />
                                    <div>
                                        <p className='text-left text-white'>{SmalltruncateText(video?.title_tm)}</p>
                                        <p className='mt-2 text-left text-white text-sm'>{video.views} {t('view')} - {timeAgo(video.created_at)}</p>
                                    </div>
                                </div>:''
                            )})}
                        </div>
                    </div>
                    <div className='pt-10 grid gap-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-2'>
                        {RandomVideo?.map((video, index)=>{return(
                            video.unique_key !== key ?
                            <div onClick={() => {gotowatch(video.unique_key)}} key={video.unique_key} className='w-full ease-in duration-300 hover:bg-green-300 hover:cursor-pointer p-3 rounded-xl'>
                                <img src={video.thumbnail} className='w-full h-52 rounded-lg' alt="" />
                                <div className='flex p-3 items-start'>
                                    <div className='flex items-center justify-center mr-2'>
                                        <img src={video.channel.image} className='min-w-10 w-10 h-10' alt="" />
                                    </div>
                                    <div>
                                        <p className='text-white text-left'>{truncateText(video.title_tm)}</p>
                                        <p className='text-white text-left'>{video.views} {t('view')} - {timeAgo(video.created_at)}</p>
                                    </div>
                                </div>
                            </div>:''
                        )})}
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default VideoPlayer