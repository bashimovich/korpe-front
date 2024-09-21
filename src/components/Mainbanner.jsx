import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axiosInstance'

function Mainbanner() {
  const [Banners, setBanners] = useState([])
  useEffect(() => {
    window.scroll(0,0)
      axiosInstance
        .get(`banners/`)
        .then((res) => {
            setBanners(res.data.results)
        })
        .catch((err) => {
          console.log(err);
        });
  }, [])
  function gotolink(params) {
    window.open(`${params}`, '_blank'); 
  }
  if (!Banners) {
      return <div>Loading...</div>;
  }
  return (
    <>
        <div className="main__banner pt-5">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-3">
              {Banners?.map((item, index)=>{return(
                <img onClick={()=>{gotolink(item.url)}} className='w-full rounded-3xl hover:cursor-pointer hover:shadow-xl' src={item.image} alt="" />
              )})}
            </div>
        </div>
    </>
  )
}

export default Mainbanner