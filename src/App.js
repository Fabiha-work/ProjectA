import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Tourism from './Components/Tourism';
import Tech from './Components/Tech';
import Movie from './Components/Movie';
import Food from './Components/Food';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element = {<Home />} />
        <Route path='/tourism' element = {<Tourism />} />
        <Route path='/tech' element = {<Tech />} />
        <Route path='/movie' element = {<Movie />} />
        <Route path='/food' element = {<Food />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
