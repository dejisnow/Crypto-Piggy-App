import React from 'react'
import poolImg from '../images/Absolute_Reality_v16_image_of_one_people_pooling_coins_togethe_2.jpg'
import saveImg from '../images/Absolute_Reality_v16_image_of_one_person_pooling_coins_togethe_3.jpg'
import lockImg from '../images/Absolute_Reality_v16_image_of_a_cryptocurrency_lock_highly_sec_0.jpg'
export function Savings() {
  return (

    <div className='save_main'>
      <h2><span>Crypto</span>-Savings</h2>
   
    <div className='savings__div'>
      
        <div className='save img__div'>
        <h3>Save <span>Crypto</span> </h3>
        <img src={saveImg} alt='a display of piggy bank'></img>
        <p>Up to <span><span className='rate'>8% </span>per annum</span></p>
        </div>
          <div className='save img__div'>
        <h3>Lock <span>Crypto</span></h3>
        <img src={lockImg} alt='a display of locked funds'></img>
        <p>Up to <span><span className='rate'>12.5% </span>per annum</span></p>
        </div>
            <div className='save img__div'>
        <h3><span>Crypto</span> Community Pool</h3>
        <img src={poolImg} alt='a display of pool of coins'></img>
        <p>Up to <span><span className='rate'>15% </span>per annum</span></p>
        </div>

    </div>
  </div>
  )
}
