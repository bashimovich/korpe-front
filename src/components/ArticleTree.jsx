import React, { useEffect, useState } from 'react'
import imag from './../assets/images/m5.webp'
import { useTranslation } from 'react-i18next'
import { axiosInstance } from '../utils/axiosInstance'
import DOMPurify from 'dompurify';


function ArticleTree() {
    const {t, i18n} = useTranslation()
    const [ThreeBlog, setThreeBlog] =useState([])
    useEffect(() => {
        axiosInstance
            .get(`ui/daily`)
            .then((res) => {
                setThreeBlog(res.data.results)
            })
            .catch((err) => {
            console.log(err);
            });
    },[])
    if (!ThreeBlog) {
        return <div>Loading...</div>;
    }
  return (
    <>
    <div className="article-tree">
        <p className='container text-white font-bold text-6xl text-left pt-5'>{t('blogs')}</p>
        {ThreeBlog.map((item, index) => {
            return (
                <div className="container" key={index}>
                    {index % 2 !== 0 ? (
                        <div className='p-2 md:flex md:items-center'>
                            <img className='w-full md:w-1/2 h-full' src={item.thumbnail} alt="" />
                            {i18n.language === 'ru' ? (

                                        <p  className='w-full md:w-1/2 m-auto p-2 text-white text-sm lg:text-2xl' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item?.content_ru),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'tm' ? (

                                        <p className='w-full md:w-1/2 m-auto p-2 text-white text-sm lg:text-2xl' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item?.content_tm),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'en' ? (

                                        <p className='w-full md:w-1/2 m-auto p-2 text-white text-sm lg:text-2xl'  dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item.content_en),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                        </div>
                    ) : (
                        <div className='p-2 md:flex md:items-center'>
                            {i18n.language === 'ru' ? (

                                        <p  className='hidden md:block w-full md:w-1/2 m-auto p-2 text-white text-sm lg:text-2xl' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item?.content_ru),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'tm' ? (

                                        <p className='hidden md:block w-full md:w-1/2 m-auto p-2 text-white text-sm lg:text-2xl' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item?.content_tm),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'en' ? (

                                        <p className='hidden md:block w-full md:w-1/2 m-auto p-2 text-white text-sm lg:text-2xl'  dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item.content_en),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                            <img className='w-full md:w-1/2 h-full' src={item.thumbnail} alt="" />
                            {i18n.language === 'ru' ? (

                                        <p  className='md:hidden w-full md:w-1/2 m-auto p-2 text-white text-sm lg:text-2xl' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item?.content_ru),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'tm' ? (

                                        <p className='md:hidden w-full md:w-1/2 m-auto p-2 text-white text-sm lg:text-2xl' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item?.content_tm),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'en' ? (

                                        <p className='md:hidden w-full md:w-1/2 m-auto p-2 text-white text-sm lg:text-2xl'  dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item.content_en),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                        </div>
                    )}
                </div>
            );
        })}
    </div>

        
    </>
  )
}

export default ArticleTree