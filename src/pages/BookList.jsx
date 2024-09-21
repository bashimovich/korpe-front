import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import b1 from './../assets/images/b1.jpg'
import { axiosInstance } from '../utils/axiosInstance'

function BookList() {
    const navigate = useNavigate()
    const [Books, setBooks] = useState([])
    function gotoread(key) {
        navigate(`/kids/books/${key}`, { state: key })
    }
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
                        <input className='w-full md:w-1/2 p-2 border-l-emerald-400 focus:outline-none text-xl rounded-3xl pl-5 pr-5' type="text" />
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