import React from 'react'
import { useState,useEffect } from 'react'
import Axios from 'axios'


export function Invest() {
  
    const [data, setData] = useState([])
    useEffect(()=>{
        Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=15').then(response=> setData(response.data.coins))
        },[]);
           
  return (
    
    <div className='investment__container'>
           
    <h2>Lock your <span>crypto</span> savings and earn</h2>
<div className='investment__div'>
   

        {data.map((coin,index)=>{
            return(       
                <div  className='invest__div'>

    <div className='packages'><div>
    
        <div><img className='inv__img' src={coin.icon} alt='investment options' /></div>
        <p>{coin.name}</p>
        </div>
        <div className='apr-div'>
        <p>APR(%) <span>{(index + 1 + Math.abs(coin.priceChange1d)).toFixed(2)}</span></p></div>
        </div>
        </div>
            )
        }
        
        )}
        </div>
     
</div>
    
    
  )
  
}
