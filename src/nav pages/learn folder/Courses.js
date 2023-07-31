import React from 'react'
import { Buttons } from '../home sections/Button'

export function Courses({img,heading,text,alt,duration,level}) {
  return (

    <div className='course__main'>
     
    <div className='course__div'>
        <div className='course'>
            <h2>{heading}</h2>
            <img src={img} alt ={alt} />
            <p>{text}</p>
            <div className='course__credit'>
              <p className='course__duration'> Duration : {duration}</p>
              <p className='course__level'>Level : {level}</p>
            </div>
            <Buttons textDisplay ={"Start Course"} classN={'course__btn'} />
        </div>
       
        


    </div>


    

</div>
  )
}
