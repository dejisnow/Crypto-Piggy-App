import React from 'react'


export function Reviews({img,text,author}) {
  return (
    <div>
        <div className='reviews__div'>
            <img src={img} />
            <div className='quote__div'>
            <p className='reviews__text'>{text}</p>
            <p className='reviews__author'>{author}</p>

            </div>

    
        </div>



    </div>
  )
}
