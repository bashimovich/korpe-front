import React from 'react'
import logo from './../assets/images/korpe-logo.png'
import { useTranslation } from 'react-i18next'

function Footer() {
    const {t, i18n} = useTranslation()
  return (
    <>
        <div className="footer bg-green-400 top-box-shadow">
            <div className="container flex items-center justify-between">
                <div className="logo flex items-center justify-start pt-2 pb-2 bg-green-400">
                    {/* <img src={logo} className='w-30' alt="" /> */}
                    <p className='p-0 m-0 ml-2 text-white font-bold text-xl'>Korpe</p>
                </div>
                <div>
                    <p className='text-white text-sm md:text-lg'>
                         {t('copyright')}
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer