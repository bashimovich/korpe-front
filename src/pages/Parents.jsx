import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { axiosInstance } from '../utils/axiosInstance'
import { formatDistanceToNow } from 'date-fns';
import { truncateText } from '../utils/maxCharacter';
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';

function Parents() {
    const navigate = useNavigate()
    const {t, i18n} = useTranslation()
    const [Blogs, setBlogs] = useState([])
    const [Banners, setBanners] = useState([])
    const [SearchInput, setSearchInput ] = useState('');
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            SearchBlogs(SearchInput)
        }
      };
    function gotolink(params) {
        console.log(params);
        
        window.open(`${params}`, '_blank'); 
    }
    function SearchBlogs(query) {
        axiosInstance
            .get(`parents?search=${query}`)
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
    useEffect(() => {
        axiosInstance
            .get(`parents/`)
            .then((res) => {
                setBlogs(res?.data.results)
            })
            .catch((err) => {
                console.log(err);
            });
        axiosInstance
            .get(`banners/p`)
            .then((res) => {
                setBanners(res?.data.results)
            })
            .catch((err) => {
                console.log(err);
            });
            
    }, [])
    const timeAgo = (dateString) => {
        return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    };
    function gotoread(key) {
        navigate(`/parents/${key}`, { state: key })
    }
    if (!Blogs) {
        return <div>Loading...</div>;
    }
    if (!Banners) {
        return <div>Loading...</div>;
    }
  return (
    <>
        <Navbar />
        <div className="bg-gradient-to-r from-green-400 to-blue-500 w-full overflow-hidden">
            <div className="video_list">
                <div className="container">
                    <div className='pt-5'>
                        <input 
                            onChange={(e) => setSearchInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder={t('search')}
                            className='w-full md:w-1/2 p-2 border-l-emerald-400 focus:outline-none text-xl rounded-3xl pl-5 pr-5' 
                            type="text" />
                    </div>
                    <div className='pt-10 flex justify-center flex-col-reverse md:flex-row'>
                        <div className='row-span-2 w-full md:w-[50%] overflow-auto no-scrollbar h-[1000px]'>
                            {Blogs.map((item, index)=>{return(
                                <div onClick={()=>{gotoread(item.unique_key)}} key={item.unique_key} className='w-full 	pt-4 pb-4 hover:cursor-pointer'>
                                    <div className='flex justify-start items-center pb-6'>
                                        <img className='w-8 h-8 rounded-full mr-2' src={item.channel.image} alt="" />
                                        <p className='text-white text-sm'>{item.channel.username}</p>
                                    </div>
                                    <div className='w-full md:w-[90%] flex justify-end flex-col md:flex-row border-b-2 pb-3 border-gray-100 border-opacity-20'>
                                        <div className='w-full md:w-[58%] flex flex-col justify-start'>
                                            <p className='text-white text-left text-2xl'>
                                                {item.title_tm}
                                            </p>
                                            <p className='w-[75%] text-white text-left'>{item.views} {t('view')} - {timeAgo(item.created_at)}</p>
                                        </div>
                                        <div className='w-full md:w-[40%] flex items-center justify-end'>
                                            <img className='w-full md:w-[60%] max-h-full md:max-h-[110px] rounded-sm' src={item.thumbnail} alt="" />
                                        </div>
                                    </div>
                                </div>
                            )})}
                        </div>
                        <div className='h-auto row-span-1 w-full md:w-[35%] border-l-0 md:border-l-2 border-gray-100 border-opacity-20 pl-0 md:pl-16 pr-0 md:pr-16'>
                            {Banners.map((item, index)=>{return(
                                <img src={item.image} key={index} onClick={() => {gotolink(item.url)}} className='h-[500px] w-full md:m-2 m-auto mt-2 hover:cursor-pointer' alt="" />
                            )})}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Parents