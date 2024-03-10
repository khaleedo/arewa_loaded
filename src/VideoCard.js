import React from 'react';
import './VideoCard.css';
import img1 from './images/AREWA LOADED.png';

function VideoCard({ movie }) {
  return (
    <div className='videoCard'>
      <img src={img1} alt={movie.title} />
      <h2>{movie.title}</h2>
      {/* Other movie-related content */}
    </div>
  );
}

export default VideoCard;
