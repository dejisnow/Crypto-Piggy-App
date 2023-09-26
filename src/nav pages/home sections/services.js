import React from 'react'
// service images


export function Services( {header,text,img}) {

  return (
    <section className='services'>  
              <div>
                <h2>{header}</h2>
                
              </div>     
                   
               <div>
                <img src={img} alt='svg1' />

                </div>
                <div>
                <p> {text} </p>

                </div>  
                    
                   
                   
    </section>
  )
}
