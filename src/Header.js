import React from 'react';
import "./Header.css";
import img1 from './images/AREWA LOADED.png'
import HomeIcon from '@mui/icons-material/Home';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


function Header() {
  return (
    <div className='header'>
      <div className='header__icons'> 
     <div className='header__icon header__icon--active'>
          <HomeIcon/>
          <p>Home</p>
     </div> 
     <div className='header__icon'>
          <FlashOnIcon/>
          <p>Trending</p>
     </div> 
     <div className='header__icon'>
          <LiveTvIcon/>
          <p>Verified</p>
     </div> 

     <div className='header__icon'>
          <VideoLibraryIcon/>
          <p>Collections</p>
     </div> 
     <div className='header__icon'>
          <SearchIcon/>
          <p>Search</p>
     </div> 
     <div className='header__icon'>
          <PersonOutlineIcon/>
          <p>Account</p>
     
     </div> 

      </div>
      <img src={img1} alt="LOGO" />
      </div>
      



    
  )
}

export default Header
