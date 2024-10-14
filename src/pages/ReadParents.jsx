import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { axiosInstance, BASE_DOMAIN } from '../utils/axiosInstance';
import { useTranslation } from 'react-i18next';
import { formatDistanceToNow } from 'date-fns';
import { useNavigate, useParams } from 'react-router-dom';
import { SmalltruncateText, truncateBigText, truncateText } from '../utils/maxCharacter';
import i from './../assets/images/korpe-logo.png'
import ii from './../assets/images/tomandjerry.jpg'
import DOMPurify from 'dompurify';

function ReadParents() {
    const {t, i18n} = useTranslation()
    const timeAgo = (dateString) => {
        return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    };
    const { key } = useParams();  
    const [currentBlog, setcurrentBlog] = useState()
    const navigate = useNavigate()

    useEffect(() => {
    window.scroll(0,0)
      axiosInstance
        .get(`parents/${key}/`)
        .then((res) => {
            setcurrentBlog(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
  }, [key])
    if (!currentBlog) {
        return <div>Loading...</div>;
    }
  return (
    <>
        <Navbar />
        <div className="bg-gradient-to-r from-green-400 to-blue-500">
            <div className="video_list">
                <div className="container">
                    {/* <div className='pt-5'>
                        <input className='w-full md:w-1/2 p-2 border-l-emerald-400 focus:outline-none text-xl rounded-3xl pl-5 pr-5' type="text" />
                    </div> */}
                    <div className='p-2 md:p-20 w-full md:w-[80%] m-auto'>
                        <div className='flex items-center justify-between pt-5 pb-5'>
                            <div className='flex justify-start items-center'>
                                <img className='w-14 h-14 rounded-full mr-2' src={currentBlog.channel.image} alt="" />
                                <p className='text-white text-lg'>{currentBlog.channel.username}</p>
                            </div>
                            <div>
                                <p className='text-left text-white text-sm'>{currentBlog.views} {t('view')} - {timeAgo(currentBlog.created_at)}</p>
                            </div>
                        </div>
                        {/* <h1 className='text-left text-white text-3xl font-semibold mb-4 mt-4'>{currentBlog.title_tm}</h1> */}
                            {i18n.language === 'ru' ? (

                                        <h1  className='text-left text-white text-3xl font-semibold mb-4 mt-4' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(currentBlog?.title_ru),
                                        }}></h1>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'tm' ? (

                                        <h1 className='text-left text-white text-3xl font-semibold mb-4 mt-4' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(currentBlog?.title_tm),
                                        }}></h1>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'en' ? (

                                        <h1 className='text-left text-white text-3xl font-semibold mb-4 mt-4'  dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(currentBlog?.title_en),
                                        }}></h1>
                                        ):(
                                            null
                                        )}
                        <img src={currentBlog.thumbnail} className='w-full m-auto' alt="" />
                            {i18n.language === 'ru' ? (

                                        <p  className='text-lg text-justify mt-4 text-white' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(currentBlog?.content_ru),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'tm' ? (

                                        <p className='text-lg text-justify mt-4 text-white' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(currentBlog?.content_tm),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'en' ? (

                                        <p className='text-lg text-justify mt-4 text-white'  dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(currentBlog?.content_en),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                        {/* <p className='text-lg text-justify mt-4 text-white'>{currentBlog.content_tm}</p> */}
                    </div>
                    {/* <div className='border-t-2 pt-10 grid gap-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-2'>
                        <div className='w-full ease-in duration-300 hover:bg-green-300 hover:cursor-pointer p-3 rounded-xl'>
                            <img src={ii} className='w-full h-52 rounded-lg' alt="" />
                            <div className='flex p-3 items-start'>
                                <div className='flex items-center justify-center mr-2'>
                                    <img src={i} className='min-w-10 w-10 h-10' alt="" />
                                </div>
                                <div>
                                    <p className='text-white text-left'>yagshy</p>
                                    <p className='text-white text-left'>10 views - 10 days ago</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full ease-in duration-300 hover:bg-green-300 hover:cursor-pointer p-3 rounded-xl'>
                            <img src={ii} className='w-full h-52 rounded-lg' alt="" />
                            <div className='flex p-3 items-start'>
                                <div className='flex items-center justify-center mr-2'>
                                    <img src={i} className='min-w-10 w-10 h-10' alt="" />
                                </div>
                                <div>
                                    <p className='text-white text-left'>yagshy</p>
                                    <p className='text-white text-left'>10 views - 10 days ago</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full ease-in duration-300 hover:bg-green-300 hover:cursor-pointer p-3 rounded-xl'>
                            <img src={ii} className='w-full h-52 rounded-lg' alt="" />
                            <div className='flex p-3 items-start'>
                                <div className='flex items-center justify-center mr-2'>
                                    <img src={i} className='min-w-10 w-10 h-10' alt="" />
                                </div>
                                <div>
                                    <p className='text-white text-left'>yagshy</p>
                                    <p className='text-white text-left'>10 views - 10 days ago</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full ease-in duration-300 hover:bg-green-300 hover:cursor-pointer p-3 rounded-xl'>
                            <img src={ii} className='w-full h-52 rounded-lg' alt="" />
                            <div className='flex p-3 items-start'>
                                <div className='flex items-center justify-center mr-2'>
                                    <img src={i} className='min-w-10 w-10 h-10' alt="" />
                                </div>
                                <div>
                                    <p className='text-white text-left'>yagshy</p>
                                    <p className='text-white text-left'>10 views - 10 days ago</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ReadParents