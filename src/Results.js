import React from 'react'
import './Results.css';
import VideoCard from './VideoCard';




function Results() {
  return (
    <div classname = 'results'>
      <VideoCard movie={movie}/>
    </div>
  )
}

export default Results
