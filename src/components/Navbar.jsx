import React, { useState } from 'react'
import logo from './../assets/images/korpe-logo.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'



function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;
    const {t, i18n} = useTranslation()
    const navigate = useNavigate()
    const [sidetoggle, setsidetoggle] = useState(false)
    function goHome() {
       navigate('/') 
    }
    function changeLanguage(lang) {
       i18n.changeLanguage(lang)
    }
    function sideopenclose() {
       setsidetoggle(!sidetoggle) 
    }
  return (
    <>
        <div className="navbar bg-green-400 bottom-box-shadow sticky top-0">
            <div className="container flex items-center justify-between">
                <div onClick={goHome} className="logo hover:cursor-pointer flex items-center justify-start pt-2 pb-2 bg-green-400">
                    <img src={logo} className='w-[70px]' alt="" />
                    {/* <p className='p-0 m-0 ml-2 text-white font-bold text-xl'>Korpe</p> */}
                </div>
                <div className='block md:hidden hover:cursor-pointer'>
                    <div  onClick={() => {sideopenclose()}}>
                        <div className='bg-white w-8 h-1 rounded-md'></div>
                        <div className='bg-white w-8 h-1 mt-2 rounded-md'></div>
                        <div className='bg-white w-8 h-1 mt-2 rounded-md'></div>
                    </div>
                    <div className={`absolute bg-green-400 top-16 right-0 left-0 overflow-hidden transition-all duration-800 ${sidetoggle ? 'h-screen  pt-5':'h-0'}`}>
                    <p className={`${currentPath.startsWith('') || currentPath.startsWith('/kids/') ? 'text-green-700':'text-white'} p-0 m-0 ml-5 font-bold text-xl ease-in duration-300 hover:text-green-700 hover:cursor-pointer`}>{t("babies")}</p>
                    <p className={`${currentPath.startsWith('/parents/') ? 'text-green-700':'text-white'} p-0 m-0 ml-5 text-white font-bold text-xl ease-in duration-300 hover:text-green-700 hover:cursor-pointer`}>{t("parents")}</p>
                    <p className={`${currentPath.startsWith('/teachers/') ? 'text-green-700':'text-white'} p-0 m-0 ml-5 text-white font-bold text-xl ease-in duration-300 hover:text-green-700 hover:cursor-pointer`}>{t('teachers')}</p>
                    <p className={`${currentPath.startsWith('/aboutus/') ? 'text-green-700':'text-white'} p-0 m-0 ml-5 text-white font-bold text-xl ease-in duration-300 hover:text-green-700 hover:cursor-pointer`}>{t("aboutus")}</p>
                        <p className='mb-3 p-0 m-0 ml-5 text-white font-bold text-xl'>
                            <span onClick={() => {changeLanguage('tm')}} className={`${i18n.language === 'tm' ? 'text-green-700':''} ease-in duration-300 hover:text-green-700 hover:cursor-pointer`}>TM</span>
                            <span className='ml-1 mr-1'>|</span>
                            <span onClick={() => {changeLanguage('en')}} className={`${i18n.language === 'en' ? 'text-green-700':''}ease-in duration-300 hover:text-green-700 hover:cursor-pointer`}>EN</span>
                            <span className='ml-1 mr-1'>|</span>
                            <span onClick={() => {changeLanguage('ru')}} className={`${i18n.language === 'ru' ? 'text-green-700':''}ease-in duration-300 hover:text-green-700 hover:cursor-pointer`}>RU</span>
                        </p>

                    </div>
                </div>

                <div className='hidden md:flex items-center justify-end'>
                    <p className={`${currentPath.startsWith('') || currentPath.startsWith('/kids/') ? 'text-green-700':'text-white'} p-0 m-0 ml-5 font-bold text-xl ease-in duration-300 hover:text-green-700 hover:cursor-pointer`}>{t("babies")}</p>
                    <p className={`${currentPath.startsWith('/parents/') ? 'text-green-700':'text-white'} p-0 m-0 ml-5 text-white font-bold text-xl ease-in duration-300 hover:text-green-700 hover:cursor-pointer`}>{t("parents")}</p>
                    <p className={`${currentPath.startsWith('/teachers/') ? 'text-green-700':'text-white'} p-0 m-0 ml-5 text-white font-bold text-xl ease-in duration-300 hover:text-green-700 hover:cursor-pointer`}>{t('teachers')}</p>
                    <p className={`${currentPath.startsWith('/aboutus/') ? 'text-green-700':'text-white'} p-0 m-0 ml-5 text-white font-bold text-xl ease-in duration-300 hover:text-green-700 hover:cursor-pointer`}>{t("aboutus")}</p>
                    <p className='p-0 m-0 ml-5 text-white font-bold text-xl'>
                        <span onClick={() => {changeLanguage('tm')}} className={`${i18n.language === 'tm' ? 'text-green-700':''} ease-in duration-300 hover:text-green-700 hover:cursor-pointer`}>TM</span>
                        <span className='ml-1 mr-1'>|</span>
                        <span onClick={() => {changeLanguage('en')}} className={`${i18n.language === 'en' ? 'text-green-700':''} ease-in duration-300 hover:text-green-700 hover:cursor-pointer`}>EN</span>
                        <span className='ml-1 mr-1'>|</span>
                        <span onClick={() => {changeLanguage('ru')}} className={`${i18n.language === 'ru' ? 'text-green-700':''} ease-in duration-300 hover:text-green-700 hover:cursor-pointer`}>RU</span>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar