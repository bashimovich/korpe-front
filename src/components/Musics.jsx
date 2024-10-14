import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { axiosInstance } from '../utils/axiosInstance'
import DOMPurify from 'dompurify';

function Musics() {
    const navigate = useNavigate()
    const {t, i18n} = useTranslation()
    const [ImagesUI, setImagesUI] = useState([])
    function gomusiclist(type) {
       navigate('/kids/musics', {state:type}) 
    }
    useEffect(() => {
        axiosInstance
            .get(`ui/audio/images`)
            .then((res) => {
                setImagesUI(res?.data.results)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    if (!ImagesUI) {
        <div>Loading...</div>
    }
  return (
    <>
        <div className="musics pt-10">
            <p className='container text-white font-bold text-6xl text-left'>{t("musics")}</p>
            <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {
                    ImagesUI.map((item, index)=>{return(
                        <div className='w-full relative' key={index}>
                            <img src={item.thumbnail} className='w-full h-full  rounded-full ease-in duration-300 hover:shadow-lg hover:cursor-pointer' alt="" />
                            <div onClick={()=>{gomusiclist(item.type_audio)}} className='absolute rounded-full bg-green-800 text-white text-2xl top-0 bottom-0 right-0 left-0 flex items-center justify-center opacity-0 hover:opacity-85  ease-in duration-300 hover:cursor-pointer'>
                            {i18n.language === 'ru' ? (

                                        <p  className='text-white text-2xl' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item?.name_ru),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'tm' ? (

                                        <p className='text-white text-2xl' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item?.name_tm),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'en' ? (

                                        <p className='text-white text-2xl'  dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item?.name_en),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                            </div>
                        </div>
                    )})
                }
            </div>
        </div>
    </>
  )
}

export default Musics