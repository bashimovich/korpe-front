import React from 'react'
import Navbar from '../components/Navbar'
import MainBanner from '../components/Mainbanner'
import Categories from '../components/Categories'
import Music from '../components/Musics'
import Lessons from '../components/Lessons'
import ArticleTree from '../components/ArticleTree'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
    <div class="bg-gradient-to-r from-green-400 to-blue-500">
        <Navbar />
        <MainBanner />
        <Categories />
        <Music />
        <Lessons />
        <ArticleTree />
        <Footer />
    </div>

    </>
  )
}

export default Home