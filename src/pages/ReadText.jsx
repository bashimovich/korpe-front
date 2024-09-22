import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import img from './../assets/images/b5.jpg'
import { axiosInstance } from '../utils/axiosInstance';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useTranslation } from 'react-i18next';
function ReadText() {
    const {t, i18n} = useTranslation()
    const { key } = useParams();  
    const [currentBlog, setCurrentBlog] = useState([])
    useEffect(() => {
        window.scroll(0,0)
        axiosInstance
            .get(`blogs/${key}/`)
            .then((res) => {
                setCurrentBlog(res.data)
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
                    <div className='p-0 md:p-5 flex flex-col items-center justify-center'>
                        <div className='shadow-2xl bg-gray-100 w-full md:w-[70%] p-3 flex items-center justify-center'>
                            <img src={currentBlog.thumbnail} className='w-full md:w-[70%]' alt="" />
                        </div>
                        {/* <p 
                            className='shadow-2xl text-black w-full md:w-[70%] p-3 pt-5 text-justify text-2xl first-letter:text-6xl bg-gray-100'
                            // dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(currentBlog.description_tm),}}
                            > */}
                            {i18n.language === 'ru' ? (

                                        <p  className='shadow-2xl text-black w-full md:w-[70%] p-3 pt-5 text-justify text-2xl first-letter:text-6xl bg-gray-100' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(currentBlog?.description_ru),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'tm' ? (

                                        <p className='shadow-2xl text-black w-full md:w-[70%] p-3 pt-5 text-justify text-2xl first-letter:text-6xl bg-gray-100' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(currentBlog?.description_tm),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'en' ? (

                                        <p className='shadow-2xl text-black w-full md:w-[70%] p-3 pt-5 text-justify text-2xl first-letter:text-6xl bg-gray-100'  dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(currentBlog?.description_en),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                        {/* </p> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ReadText