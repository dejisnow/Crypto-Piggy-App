import React from 'react'

export function Buttons(prop) {
   const {textDisplay,classN } =  prop

  return (

           <button className={classN}>{textDisplay}</button>



 
  )
}
