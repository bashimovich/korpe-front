import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import i from './../assets/images/tomandjerry.jpg'
import { axiosInstance } from '../utils/axiosInstance'
import DOMPurify from 'dompurify'
import { useTranslation } from 'react-i18next'

function About() {
    const {t, i18n} = useTranslation()
  const [Blog, setBlog] = useState([])
  useEffect(() => {
    window.scroll(0,0)
      axiosInstance
        .get(`banners/a`)
        .then((res) => {
            setBlog(res.data.results)
            
        })
        .catch((err) => {
          console.log(err);
        });
  }, [])

  return (
    <>
        <Navbar />
        <div className='bg-gradient-to-r from-green-400 to-blue-500 p-5 pt-48 h-screen'>
                {Blog.map((item, index)=> {return(
            <div className=' w-full flex items-center justify-center'>

                <div className='w-[50%] p-5'>
                            {i18n.language === 'ru' ? (

                                        <p  className='text-white text-justify text-lg' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item.content_ru),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'tm' ? (

                                        <p className='text-white text-justify text-lg' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item.content_tm),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'en' ? (

                                        <p className='text-white text-justify text-lg'  dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item.content_en),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                </div>
                <div className='w-[50%] p-5'>
                    <img  className='w-full h-[600px] rounded-l-[100px]' src={item.image} alt="" />
                </div>
            </div>
                )})}
        </div>
        <Footer />
    </>
  )
}

export default About