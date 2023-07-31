import React from 'react'
// service images


export function Services( {header,text,img}) {

  return (
    <section className='services'>
               
                    <h2>{header}</h2>
                    <img src={img} alt='svg1' />
                    <p> {text} </p>
                  
                
      
    </section>
  )
}
