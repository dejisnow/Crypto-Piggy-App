import React from 'react'

export  function Steps({img,text,alt}) {
  return (
    <div className='steps__div'>
        <img src={img} alt={alt} ></img>
        <p>{text}</p>


    </div>
  )
}
