import React from 'react'
import Footer from './Footer'
import { Header } from './Header'
import { Routes, Route } from 'react-router-dom';

import Land from './Land';
const Home = () => {
  return (
    <div>
      <Header/>
      <Land/>
      {/* <Routes>
      
            <Route path="/" element={<Land />} />
      </Routes> */}
      <Footer/>
    </div>
  )
}

export default Home
