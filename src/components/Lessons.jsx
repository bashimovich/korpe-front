import React from 'react'
import i1 from './../assets/images/m1.jpg'
import i2 from './../assets/images/m2.jpg'
import i3 from './../assets/images/m3.jpg'
import i4 from './../assets/images/m4.webp'
import i5 from './../assets/images/m5.webp'
import i6 from './../assets/images/m5.jpg'
import i7 from './../assets/images/m7.webp'
import { useTranslation } from 'react-i18next'

function Lessons() {
  const {t, i18n} = useTranslation()
  return (
    <>
        <div className="lessons">
            <p className='container text-white font-bold text-6xl text-left'>{t("lessons")}</p>
            <div className="container grid gap-1 grid-cols-2 lg:grid-cols-5 lg:gap-3">
                <img className='h-full min-w-full rounded-lg hover:cursor-pointer hover:shadow-lg' src={i7} alt="" />
                <img className='h-full min-w-full rounded-lg hover:cursor-pointer hover:shadow-lg' src={i1} alt="" />
                <img className='h-full min-w-full rounded-lg hover:cursor-pointer hover:shadow-lg' src={i3} alt="" />
                <img className='h-full min-w-full rounded-lg hover:cursor-pointer hover:shadow-lg' src={i4} alt="" />
                <img className='h-full min-w-full rounded-lg hover:cursor-pointer hover:shadow-lg' src={i5} alt="" />
                <img className='h-full min-w-full rounded-lg hover:cursor-pointer hover:shadow-lg' src={i2} alt="" />
                <img className='h-full min-w-full rounded-lg hover:cursor-pointer hover:shadow-lg' src={i7} alt="" />
                <img className='h-full min-w-full rounded-lg hover:cursor-pointer hover:shadow-lg' src={i6} alt="" />
                <img className='h-full min-w-full rounded-lg hover:cursor-pointer hover:shadow-lg' src={i5} alt="" />
                <img className='h-full min-w-full rounded-lg hover:cursor-pointer hover:shadow-lg' src={i3} alt="" />
            </div>     
        </div> 
    </>
  )
}

export default Lessons