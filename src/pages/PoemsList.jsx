import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../utils/axiosInstance'
import { useTranslation } from 'react-i18next'
import DOMPurify from 'dompurify'

function PoemsList() {
    const {t, i18n} = useTranslation()
    const navigate = useNavigate()
    const [Blogs, setBlogs] = useState([])
    const [SearchInput, setSearchInput ] = useState('');
    const [categories, setcategories] = useState([])
    const [currentcategory, setcurrentcategory] = useState('')
    function goreadacticle(key) {
        navigate(`/kids/blogs/${key}`, { state: key })
    }
    function setcurrentcategoryfunc(category) {
        setcurrentcategory(category)
    }
    function SearchBlogs(query) {
        axiosInstance
            .get(`blogs?search=${query}`)
            .then((res) => {
                setBlogs([])
                if ((res.data.results).length > 0) {
                    setBlogs(res.data.results)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            SearchBlogs(SearchInput)
        }
      };
    function getblogs(currentcategory){
        axiosInstance
            .get(`blogs/?category=${currentcategory}`)
            .then((res) => {
                setBlogs(res?.data.results)
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        window.scroll(0,0)
        axiosInstance
            .get(`/category/kids/blog`)
            .then((res) => {
                setcategories(res?.data.results)
            })
            .catch((err) => {
                console.log(err);
            });
            getblogs(currentcategory)
    }, [currentcategory])
    if (!Blogs) {
        return <div>Loading...</div>;
    }
    if (!categories) {
        return <div>Loading...</div>;
    }
  return (
    <>
        <Navbar />
        <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-[80vh]">
            <div className='flex items-center justify-start pr-5 pl-5 pt-3  flex-nowrap overflow-auto'>
                <p onClick={()=>{setcurrentcategoryfunc('')}}  className={`p-3 ${currentcategory === '' ? 'bg-green-500':'bg-green-300'} text-white text-sm m-1 rounded-lg hover:bg-green-600 cursor-pointer transition-all ease-linear duration-150`}>
                    {t('all')}
                </p>
                {
                    categories.map((item, index)=>{return(
                        <>
                            {i18n.language === 'tm' ? (
                            <p onClick={()=>{setcurrentcategoryfunc(item.id)}} className={`p-3 ${item.id === currentcategory ? 'bg-green-500':'bg-green-300'} text-white text-sm m-1 rounded-lg hover:bg-green-600 cursor-pointer transition-all ease-linear duration-150`} dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(item?.name_tm),
                            }}></p>
                            ):(
                                null
                            )}
                            {i18n.language === 'en' ? (
                            <p onClick={()=>{setcurrentcategoryfunc(item.id)}} className={`p-3 ${item.id === currentcategory ? 'bg-green-500':'bg-green-300'} text-white text-sm m-1 rounded-lg hover:bg-green-600 cursor-pointer transition-all ease-linear duration-150`} dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(item?.name_en),
                            }}></p>
                            ):(
                                null
                            )}
                            {i18n.language === 'ru' ? (
                            <p onClick={()=>{setcurrentcategoryfunc(item.id)}} className={`p-3 ${item.id === currentcategory ? 'bg-green-500':'bg-green-300'} text-white text-sm m-1 rounded-lg hover:bg-green-600 cursor-pointer transition-all ease-linear duration-150`} dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(item?.name_ru),
                            }}></p>
                            ):(
                                null
                            )}
                        </>
                    )})
                }
            </div>
            <div className="video_list">
                <div className="container">
                    <div className='pt-5'>
                        <input 
                        className='w-full md:w-1/2 p-2 border-l-emerald-400 focus:outline-none text-xl rounded-3xl pl-5 pr-5' 
                        type="text"
                        onChange={(e) => setSearchInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder={t('search')}
                         />
                    </div>
                    <div className='pt-5 grid grid-cols-1 md:grid-cols-2'>
                        {Blogs.map((item, index)=>{return(
                            <div key={item.unique_key} className='flex flex-col md:flex-row p-5'>
                                <img src={item.thumbnail} className='w-1/2 shadow-2xl m-auto' alt="" />
                                <div>
                                    <p className='p-5 text-white'>

                                    </p>
                                    {i18n.language === 'ru' ? (
                                        <p  className='text-left text-white text-lg' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item?.title_ru),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'tm' ? (

                                        <p className='text-left text-white text-lg' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item?.title_tm),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                        {i18n.language === 'en' ? (

                                        <p className='text-left text-white text-lg'  dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item?.title_en),
                                        }}></p>
                                        ):(
                                            null
                                        )}
                                    <p onClick={()=>{goreadacticle(item.unique_key)}} className='underline text-2xl hover:cursor-pointer text-white hover:text-3xl'>{t('read')}</p>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default PoemsList