import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
          <Route path="/home" element={<Home />} />

          <Route path="/kids/videos" element={<VideoList />} />
          {/* <Route path="/video/:id" element={<VideoPlayer />} /> */}
          <Route path="/kids/video/:key" element={<VideoPlayer />} />

          <Route path="/kids/books" element={<BookList />} />
          <Route path="/kids/books/:key" element={<ReadBook />} />

          <Route path="/kids/musics" element={<MusicList />} />
          {/* <Route path="/books/:id" element={<ReadBook />} /> */}
          {/* <Route path="/book/id" element={<ReadBook />} /> */}

          <Route path="/kids/texts" element={<PoemsList />} />
          {/* <Route path="/books/:id" element={<ReadBook />} /> */}
          <Route path="/kids/text/id" element={<ReadText />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default MyRoutes;