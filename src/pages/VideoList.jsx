import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../utils/axiosInstance'
import { formatDistanceToNow } from 'date-fns';
import { truncateText } from '../utils/maxCharacter';
import { useTranslation } from 'react-i18next'
import DOMPurify from 'dompurify';

function VideoList() {
    const {t, i18n} = useTranslation()
    const navigate = useNavigate()
    const [Videos, setVideos] = useState([])
    const [categories, setcategories] = useState([])
    const [currentcategory, setcurrentcategory] = useState('')
    const [SearchInput, setSearchInput ] = useState('');

    function gotowatch(key) {
        navigate(`/kids/video/${key}`, { state: key })
    }
    function setcurrentcategoryfunc(category) {
        setcurrentcategory(category)
    }
    function getvideos(currentcategory){
        axiosInstance
            .get(`videos/?category=${currentcategory}&lesson=`)
            .then((res) => {
                setVideos(res?.data.results)
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function SearchVideos(query) {
        axiosInstance
            .get(`videos?search=${query}`)
            .then((res) => {
                setVideos([])
                if ((res.data.results).length > 0) {
                    setVideos(res.data.results)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            SearchVideos(SearchInput)
        }
      };
    useEffect(() => {
        axiosInstance
            .get(`/category/kids/video`)
            .then((res) => {
                setcategories(res?.data.results)
            })
            .catch((err) => {
                console.log(err);
            });
            getvideos(currentcategory)
    }, [currentcategory])

    const timeAgo = (dateString) => {
        return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    };

    if (!Videos) {
        return <div>Loading...</div>;
    }
    if (!categories) {
        return <div>Loading...</div>;
    }
  return (
    <>
        <Navbar />
        <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-[80vh]">
            <div className='flex items-center justify-start pr-5 pl-5 pt-3  flex-nowrap overflow-auto'>
                <p onClick={()=>{setcurrentcategoryfunc('')}}  className={`p-3 ${currentcategory === '' ? 'bg-green-500':'bg-green-300'} text-white text-sm m-1 rounded-lg hover:bg-green-600 cursor-pointer transition-all ease-linear duration-150`}>
                    {t('all')}
                </p>
                {
                    categories.map((item, index)=>{return(
                        <>
                            {i18n.language === 'tm' ? (
                            <p onClick={()=>{setcurrentcategoryfunc(item.id)}} className={`p-3 ${item.id === currentcategory ? 'bg-green-500':'bg-green-300'} text-white text-sm m-1 rounded-lg hover:bg-green-600 cursor-pointer transition-all ease-linear duration-150`} dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(item?.name_tm),
                            }}></p>
                            ):(
                                null
                            )}
                            {i18n.language === 'en' ? (
                            <p onClick={()=>{setcurrentcategoryfunc(item.id)}} className={`p-3 ${item.id === currentcategory ? 'bg-green-500':'bg-green-300'} text-white text-sm m-1 rounded-lg hover:bg-green-600 cursor-pointer transition-all ease-linear duration-150`} dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(item?.name_en),
                            }}></p>
                            ):(
                                null
                            )}
                            {i18n.language === 'ru' ? (
                            <p onClick={()=>{setcurrentcategoryfunc(item.id)}} className={`p-3 ${item.id === currentcategory ? 'bg-green-500':'bg-green-300'} text-white text-sm m-1 rounded-lg hover:bg-green-600 cursor-pointer transition-all ease-linear duration-150`} dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(item?.name_ru),
                            }}></p>
                            ):(
                                null
                            )}
                        </>
                    )})
                }
            </div>
            <div className="video_list">
                <div className="container">
                    <div className='pt-5'>
                        <input 
                            onChange={(e) => setSearchInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder={t('search')}
                            className='w-full md:w-1/2 p-2 border-l-emerald-400 focus:outline-none text-xl rounded-3xl pl-5 pr-5' 
                            type="text" />
                    </div>
                    <div className='pt-10 grid gap-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-2'>
                        {Videos.map((video, index)=>{return(
                            <div onClick={() => {gotowatch(video.unique_key)}} key={video.unique_key} className='w-full ease-in duration-300 hover:bg-green-300 hover:cursor-pointer p-3 rounded-xl'>
                                <img src={video.thumbnail} className='w-full h-52 rounded-lg' alt="" />
                                <div className='flex p-3 items-start'>
                                    <div className='flex items-center justify-center mr-2'>
                                        <img src={video.channel.image} className='min-w-10 w-10 h-10' alt="" />
                                    </div>
                                    <div>
                                        <p className='text-white text-left'>{truncateText(video.title_tm)}</p>
                                        <p className='text-white text-left'>{video.views} views - {timeAgo(video.created_at)}</p>
                                    </div>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default VideoList

