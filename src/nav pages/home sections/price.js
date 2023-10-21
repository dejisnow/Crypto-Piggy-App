import React from 'react'
import Axios from 'axios'
import { useEffect ,useState} from 'react'



export function Price() {
  const [values,setValues] = useState([])
  
  useEffect(()=>{
  
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=14').then(response=> setValues(response.data.coins))
    .catch((err)=>{
      console.log(err)
    })
    return()=>{

    }
    },[]);
       

  return (
    values.map(val=>{
      return(
        <div className='crypto-container'>
          <img src={val.icon} alt='icons for cryptocurrencies'/>
          <p className='symb' key={val.id}>{val.symbol}</p>
          <p className='prices' key={val.id}>{val.price.toFixed(2)}</p>
        
          <p key={val.id} style={
           
            parseFloat(val.priceChange1d) <= 0 ? {
            color:'red',fontWeight:'900' } : {color :' #083d0b',fontWeight:'900'}
          }>{parseFloat(val.priceChange1d) > 0 ? `+${val.priceChange1d}` : val.priceChange1d} </p>
        </div>
        
      )
    })
  )
}
