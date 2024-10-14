import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { axiosInstance } from '../utils/axiosInstance'
import { useTranslation } from 'react-i18next'
import DOMPurify from 'dompurify';

function BookList() {
    const {t, i18n} = useTranslation()
    const navigate = useNavigate()
    const [Books, setBooks] = useState([])
    const [categories, setcategories] = useState([])
    const [currentcategory, setcurrentcategory] = useState('')
    const [SearchInput, setSearchInput ] = useState('');
    function gotoread(key) {
        navigate(`/kids/books/${key}`, { state: key })
    }
    function SearchBooks(query) {
        axiosInstance
            .get(`books?search=${query}`)
            .then((res) => {
                setBooks([])
                if ((res.data.results).length > 0) {
                    setBooks(res.data.results)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function setcurrentcategoryfunc(category) {
        setcurrentcategory(category)
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            SearchBooks(SearchInput)
        }
      };
    function getbooks(currentcategory){
        axiosInstance
            .get(`books/?category=${currentcategory}`)
            .then((res) => {
                setBooks(res?.data.results)
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        axiosInstance
            .get(`/category/kids/book`)
            .then((res) => {
                setcategories(res?.data.results)
            })
            .catch((err) => {
                console.log(err);
            });
            getbooks(currentcategory)
    }, [currentcategory])

    if (!Books) {
        <div>Loading...</div>
    }
    if (!categories) {
        <div>Loading...</div>
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
            <div className="book_list">
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
                    <div className='grid gap-3 grid-cols-2 md:grid-cols-6 pt-10'>
                        {Books.map((item, index)=>{return(
                            <div onClick={()=>{gotoread(item.unique_key)}} className='min-h-full hover:cursor-pointer hover:-translate-y-1 hover:shadow-xl'>
                                <img className='min-h-full m-auto' src={item.image} alt="" />
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

export default BookList