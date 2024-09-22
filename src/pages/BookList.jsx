import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import b1 from './../assets/images/b1.jpg'
import { axiosInstance } from '../utils/axiosInstance'
import { useTranslation } from 'react-i18next'

function BookList() {
    const {t, i18n} = useTranslation()
    const navigate = useNavigate()
    const [Books, setBooks] = useState([])
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
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            SearchBooks(SearchInput)
        }
      };
    useEffect(() => {
        axiosInstance
            .get(`books/`)
            .then((res) => {
                setBooks(res?.data.results)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    if (!Books) {
        <div>Loading...</div>
    }
  return (
    <>
        <Navbar />
        <div class="bg-gradient-to-r from-green-400 to-blue-500">
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