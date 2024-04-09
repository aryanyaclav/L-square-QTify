import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx"
import HeroSection from './components/HeroSection/HeroSection.jsx';
import Section from './components/Section/Section.jsx';
import { StyledEngineProvider } from '@mui/material';
import { useState, useEffect } from 'react';
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api.js';
import {Outlet} from "react-router-dom"


function App() {
  const [data, setData] = useState({})

  const generateData = (key, source) => {
    source().then((data) => {
        setData((prevState) => {
          return {...prevState, [key]: data}
        })
      })
  }

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums)
    generateData("newAlbums", fetchNewAlbums)
    generateData("songs", fetchSongs)
  }, [])

  const {topAlbums =[], newAlbums=[], songs = []} = data

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Outlet context = {{data : {topAlbums, newAlbums, songs}}}/>
      </StyledEngineProvider>

    </>
  );
}

export default App;
