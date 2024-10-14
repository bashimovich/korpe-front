import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { axiosInstance } from '../utils/axiosInstance'
import { useNavigate } from 'react-router-dom'

function Lessons() {
  const navigate = useNavigate()
  const {t, i18n} = useTranslation()
  const [blogs, setblogs] = useState([])
    function gotoread(key) {
        navigate(`/kids/blogs/${key}`, { state: key })
    }

  useEffect(() => {
        axiosInstance
            .get(`blogs/top-blogs`)
            .then((res) => {
                setblogs(res?.data.results)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    if (!blogs) {
        <div>Loading...</div>
    }
  return (
    <>
        <div className="lessons">
            <p className='container text-white font-bold text-6xl text-left'>{t("top_read")}</p>
            <div className="container grid gap-1 grid-cols-2 lg:grid-cols-5 lg:gap-3">
              {
                blogs.map((item, index)=>{return(
                  <img onClick={()=>{gotoread(item.unique_key)}} key={index} className='h-full min-w-full rounded-lg hover:cursor-pointer hover:shadow-lg' src={item.thumbnail} alt="" />
                )})
              }
            </div>     
        </div> 
    </>
  )
}

export default Lessons