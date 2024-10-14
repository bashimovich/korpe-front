import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../utils/axiosInstance'
import { formatDistanceToNow } from 'date-fns';
import { truncateText, truncateBigText, SmalltruncateText } from '../utils/maxCharacter';
import DOMPurify from "dompurify";
import { useTranslation } from 'react-i18next'

function ReadBook() {

    const {t, i18n} = useTranslation()
    const timeAgo = (dateString) => {
        return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    };
    const { key } = useParams();  
    const [currentBook, setcurrentBook] = useState()

    useEffect(() => {
    window.scroll(0,0)
      axiosInstance
        .get(`books/${key}/`)
        .then((res) => {
            setcurrentBook(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
  }, [key])

    if (!currentBook) {
        return <div>Loading...</div>;
    }
  return (
    <>
    <p className="article__title"></p>
        <Navbar />
        <div className="bg-gradient-to-r from-green-400 to-blue-500">
            <div className="video_list">
                <div className="container">
                    {/* <div className='pt-5'>
                        <input className='w-full md:w-1/2 p-2 border-l-emerald-400 focus:outline-none text-xl rounded-3xl pl-5 pr-5' type="text" />
                    </div> */}
                    <div className='pt-10 flex justify-center flex-col md:flex-row'>
                        <img src={currentBook.image} className='w-full md:w-1/4' alt="" />
                        <div className='w-full md:w-1/2 p-3'>
                            <p className='text-left text-white text-2xl'>{t('name')}: {currentBook.name}</p>
                            <p className='text-left text-white text-2xl'>{t('author')}: {currentBook.author}</p>
                            <p className='text-left text-white text-lg'>{currentBook.views} {t('view')} - {timeAgo(currentBook.created_at)}</p>
                            <p className='text-left text-white text-lg'>Size: {currentBook.book_size}MB</p>
                            {i18n.language === 'ru' ? (

                                        <p  className='text-left text-white text-lg' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(currentBook?.description_ru),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'tm' ? (

                                        <p className='text-left text-white text-lg' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(currentBook?.description_tm),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'en' ? (

                                        <p className='text-left text-white text-lg'  dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(currentBook?.description_en),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                            {/* <p className='text-left text-white text-2xl' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(currentBook.description_tm),}}></p> */}
                            <a href={currentBook.ebook_file} target='_blank'>
                                <p className='text-white text-lg bg-green-600 p-5 m-3 hover:cursor-pointer hover:shadow-2xl duration-300'>{t('read')}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ReadBook