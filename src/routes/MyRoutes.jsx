import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReadTeachers from '../pages/ReadTeachers';
import Parents from '../pages/Parents';
import ReadParents from '../pages/ReadParents';

// Lazy load the components
const Home = lazy(() => import('./../pages/Home'));

const VideoList = lazy(() => import('./../pages/VideoList'));
const VideoPlayer = lazy(() => import('./../pages/VideoPlayer'));

const BookList = lazy(() => import('./../pages/BookList'));
const ReadBook = lazy(() => import('./../pages/ReadBook'));


const MusicList = lazy(() => import('./../pages/MusicList'));
// const ReadBook = lazy(() => import('./../pages/ReadBook'));

const PoemsList = lazy(() => import('./../pages/PoemsList'));
const ReadText = lazy(() => import('./../pages/ReadText'));
const Teachers = lazy(() => import('./../pages/Teachers'));
const About = lazy(() => import('./../pages/About'));

const LoadingComponent = () => (
  <div style={{
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0'
  }}>
    <div>Locading....</div>
  </div>
);

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kids" element={<Home />} />

          <Route path="/kids/videos" element={<VideoList />} />
          {/* <Route path="/video/:id" element={<VideoPlayer />} /> */}
          <Route path="/kids/video/:key" element={<VideoPlayer />} />

          <Route path="/kids/books" element={<BookList />} />
          <Route path="/kids/books/:key" element={<ReadBook />} />

          <Route path="/kids/musics" element={<MusicList />} />
          {/* <Route path="/books/:id" element={<ReadBook />} /> */}
          {/* <Route path="/book/id" element={<ReadBook />} /> */}

          <Route path="/kids/blogs" element={<PoemsList />} />
          <Route path="/kids/blogs/:key" element={<ReadText />} />

          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/:key" element={<ReadTeachers />} />

          <Route path="/parents" element={<Parents />} />
          <Route path="/parents/:key" element={<ReadParents />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default MyRoutes;