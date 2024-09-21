import React from 'react'
import imag from './../assets/images/m5.webp'

function ArticleTree() {
  return (
    <>
        <div className="article-tree">
            <p className='container text-white font-bold text-6xl text-left pt-5'>Makalalar</p>
            <div className="container">
                <div className='p-2 md:flex md:items-center'>
                    <img  className='w-full md:w-1/2 h-full' src={imag} alt="" />
                    <p className='w-full md:w-1/2 m-auto p-2 text-white textsm lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut eaque quae dicta ullam, dolorem ratione atque consequuntur mollitia velit. Veniam autem quod sint a ipsam, adipisci deleniti quam beatae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores laudantium corporis soluta corrupti dignissimos libero quisquam cupiditate temporibus atque sint repudiandae, itaque assumenda quis pariatur quam suscipit nihil eveniet accusamus?</p>
                </div>
                <div className='p-2 md:flex md:items-center'>
                    <p className='hidden md:block w-full md:w-1/2 m-auto p-2 text-white textsm lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut eaque quae dicta ullam, dolorem ratione atque consequuntur mollitia velit. Veniam autem quod sint a ipsam, adipisci deleniti quam beatae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores laudantium corporis soluta corrupti dignissimos libero quisquam cupiditate temporibus atque sint repudiandae, itaque assumenda quis pariatur quam suscipit nihil eveniet accusamus?</p>
                    <img  className='w-full md:w-1/2 h-full' src={imag} alt="" />
                    <p className='md:hidden w-full md:w-1/2 m-auto p-2 text-white textsm lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut eaque quae dicta ullam, dolorem ratione atque consequuntur mollitia velit. Veniam autem quod sint a ipsam, adipisci deleniti quam beatae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores laudantium corporis soluta corrupti dignissimos libero quisquam cupiditate temporibus atque sint repudiandae, itaque assumenda quis pariatur quam suscipit nihil eveniet accusamus?</p>
                </div>
                <div className='p-2 md:flex md:items-center'>
                    <img  className='w-full md:w-1/2 h-full' src={imag} alt="" />
                    <p className='w-full md:w-1/2 m-auto p-2 text-white textsm lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut eaque quae dicta ullam, dolorem ratione atque consequuntur mollitia velit. Veniam autem quod sint a ipsam, adipisci deleniti quam beatae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores laudantium corporis soluta corrupti dignissimos libero quisquam cupiditate temporibus atque sint repudiandae, itaque assumenda quis pariatur quam suscipit nihil eveniet accusamus?</p>
                </div>
            </div>
        </div> 
    </>
  )
}

export default ArticleTree