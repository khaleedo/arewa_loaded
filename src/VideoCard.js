import React from 'react';
import './VideoCard.css';
import img2 from './images/IMG_5898.JPG';

const base_url = "https://image.tmdb.org/t/p/original/";

function VideoCard({ movie }) {
  return (
    <div className='videoCard'>
      <img src={`${base_url}${movie.backdrop_path}`}alt='A' />
      <h2>MOVIE title</h2>
      <p>no. of likes</p>
      
    </div>
  );
}

export default VideoCard;
