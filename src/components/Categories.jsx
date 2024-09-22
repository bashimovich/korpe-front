import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Categories() {
    const navigate = useNavigate () 
    const {t, i18n} = useTranslation()
    function gotopage(page) {
        navigate(`/${page}`)
    }
  return (
    <>
        <div className="categories">
            <div className="container grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-5">
                <div onClick={() => {gotopage('kids/videos')}} className='hover:cursor-pointer hover:shadow-lg ease-in duration-300 flex p-5 align-center justify-start bg-red-600 rounded'>
                    <div className='p-1 mr-3 bg-red-300 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 6C2 4.89543 2.89543 4 4 4V16C2.89543 16 2 15.1046 2 14V6ZM9 8.5C9 8.22386 9.22386 8 9.5 8H13.5C13.7761 8 14 8.22386 14 8.5V9.5C14 9.77614 13.7761 10 13.5 10H9.5C9.22386 10 9 9.77614 9 9.5V8.5ZM5 16V4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H5ZM9.5 7C8.67157 7 8 7.67157 8 8.5V9.5C8 10.3284 8.67157 11 9.5 11H13.5C14.3284 11 15 10.3284 15 9.5V8.5C15 7.67157 14.3284 7 13.5 7H9.5Z" fill="white"></path></svg>
                    </div>
                    <p className='text-white font-bold text-xl'>{t("videos")}</p>
                </div>
                <div onClick={() => {gotopage('kids/books')}} className='hover:cursor-pointer hover:shadow-lg ease-in duration-300  flex p-5 align-center justify-start bg-yellow-600 rounded'>
                    <div className='p-1 mr-3 bg-yellow-300 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 6C2 4.89543 2.89543 4 4 4V16C2.89543 16 2 15.1046 2 14V6ZM9 8.5C9 8.22386 9.22386 8 9.5 8H13.5C13.7761 8 14 8.22386 14 8.5V9.5C14 9.77614 13.7761 10 13.5 10H9.5C9.22386 10 9 9.77614 9 9.5V8.5ZM5 16V4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H5ZM9.5 7C8.67157 7 8 7.67157 8 8.5V9.5C8 10.3284 8.67157 11 9.5 11H13.5C14.3284 11 15 10.3284 15 9.5V8.5C15 7.67157 14.3284 7 13.5 7H9.5Z" fill="white"></path></svg>
                    </div>
                    <p className='text-white font-bold text-xl'>{t("books")}</p>
                </div>
                <div onClick={() => {gotopage('kids/blogs')}} className='hover:cursor-pointer hover:shadow-lg ease-in duration-300 flex p-5 align-center justify-start bg-blue-600 rounded'>
                    <div className='p-1 mr-3 bg-blue-300 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 6C2 4.89543 2.89543 4 4 4V16C2.89543 16 2 15.1046 2 14V6ZM9 8.5C9 8.22386 9.22386 8 9.5 8H13.5C13.7761 8 14 8.22386 14 8.5V9.5C14 9.77614 13.7761 10 13.5 10H9.5C9.22386 10 9 9.77614 9 9.5V8.5ZM5 16V4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H5ZM9.5 7C8.67157 7 8 7.67157 8 8.5V9.5C8 10.3284 8.67157 11 9.5 11H13.5C14.3284 11 15 10.3284 15 9.5V8.5C15 7.67157 14.3284 7 13.5 7H9.5Z" fill="white"></path></svg>
                    </div>
                    <p className='text-white font-bold text-xl'>{t("tales")}</p>
                </div>
                {/* <div onClick={() => {gotopage('kids/texts')}} className='hover:cursor-pointer hover:shadow-lg ease-in duration-300 flex p-5 align-center justify-start bg-indigo-600 rounded'>
                    <div className='p-1 mr-3 bg-indigo-300 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 6C2 4.89543 2.89543 4 4 4V16C2.89543 16 2 15.1046 2 14V6ZM9 8.5C9 8.22386 9.22386 8 9.5 8H13.5C13.7761 8 14 8.22386 14 8.5V9.5C14 9.77614 13.7761 10 13.5 10H9.5C9.22386 10 9 9.77614 9 9.5V8.5ZM5 16V4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H5ZM9.5 7C8.67157 7 8 7.67157 8 8.5V9.5C8 10.3284 8.67157 11 9.5 11H13.5C14.3284 11 15 10.3284 15 9.5V8.5C15 7.67157 14.3284 7 13.5 7H9.5Z" fill="white"></path></svg>
                    </div>
                    <p className='text-white font-bold text-xl'>Tapmacalar</p>
                </div>
                <div onClick={() => {gotopage('kids/texts')}}  className='hover:cursor-pointer hover:shadow-lg ease-in duration-300 flex p-5 align-center justify-start bg-purple-600 rounded'>
                    <div className='p-1 mr-3 bg-purple-300 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 6C2 4.89543 2.89543 4 4 4V16C2.89543 16 2 15.1046 2 14V6ZM9 8.5C9 8.22386 9.22386 8 9.5 8H13.5C13.7761 8 14 8.22386 14 8.5V9.5C14 9.77614 13.7761 10 13.5 10H9.5C9.22386 10 9 9.77614 9 9.5V8.5ZM5 16V4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H5ZM9.5 7C8.67157 7 8 7.67157 8 8.5V9.5C8 10.3284 8.67157 11 9.5 11H13.5C14.3284 11 15 10.3284 15 9.5V8.5C15 7.67157 14.3284 7 13.5 7H9.5Z" fill="white"></path></svg>
                    </div>
                    <p className='text-white font-bold text-xl'>Harplyk</p>
                </div>
                <div onClick={() => {gotopage('kids/texts')}}  className='hover:cursor-pointer hover:shadow-lg ease-in duration-300 flex p-5 align-center justify-start bg-green-600 rounded'>
                    <div className='p-1 mr-3 bg-green-300 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 6C2 4.89543 2.89543 4 4 4V16C2.89543 16 2 15.1046 2 14V6ZM9 8.5C9 8.22386 9.22386 8 9.5 8H13.5C13.7761 8 14 8.22386 14 8.5V9.5C14 9.77614 13.7761 10 13.5 10H9.5C9.22386 10 9 9.77614 9 9.5V8.5ZM5 16V4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H5ZM9.5 7C8.67157 7 8 7.67157 8 8.5V9.5C8 10.3284 8.67157 11 9.5 11H13.5C14.3284 11 15 10.3284 15 9.5V8.5C15 7.67157 14.3284 7 13.5 7H9.5Z" fill="white"></path></svg>
                    </div>
                    <p className='text-white font-bold text-xl'>Oyunlar</p>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Categories