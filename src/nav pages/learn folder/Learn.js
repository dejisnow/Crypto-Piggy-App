import React from 'react'
import { Courses } from './Courses'

// Images import
import introImg from '../learn folder/Course images/Absolute_Reality_v16_illustration_of_introduction_to_cryptocur_1.jpg'
import investImg from '../learn folder/Course images/Absolute_Reality_v16_illustration_of_plant_being_given_water_b_3 (1).jpg'
import portfolioImg from '../learn folder/Course images/Absolute_Reality_v16_illustration_of_investing_with_market_cha_3.jpg'
import dcaImg from '../learn folder/Course images/Absolute_Reality_v16_illustration_of_5_boxes_with_different_si_3 (1).jpg'
import secureImg from '../learn folder/Course images/Absolute_Reality_v16_illustration_of_security_and_wallet_manag_0 (3).jpg'
export function Learn() {
  return (
    <div className='learn__main'>
        

  
    <div className='learn__div'>
      

        <Courses heading='Introduction to Cryptocurrency'
        
        img ={introImg}
        alt='Intro to crypto display'
        text='Beginner-friendly introduction to cryptocurrency, explaining what it is, how it works, and the technology behind it. Cover key concepts like blockchain, decentralization, and the advantages of using cryptocurrencies.'
        duration={'3 weeks'}
        level={'Beginner'}
       

        />

        <Courses heading='Long-term vs. Short-term Investing'
        img={investImg}
        alt='A picture showing an illustration of investment options'
        text='Designed for those seeking to build sustainable wealth over time, this course is your roadmap to understanding the power of patient investing in the crypto market'
        duration ={'4 weeks'}
        level={'Beginner'}
        />
       

         <Courses heading='Tracking and Analyzing Portfolios'
        img={portfolioImg}
        alt='A picture showing an illustration of a chart growth'
        text=' How to visually track and analyze your crypto portfolios. Portfolio diversification and asset allocation explanation. '
        duration ={'6 weeks'}
        level={'Intermediate'} />
         <Courses heading='Dollar-Cost Averaging (DCA) Strategy'
        img={dcaImg}
        alt='A display of chart'
        text='Introduction to DCA strategy, learn about regularly investing a fixed amount of money into cryptocurrencies at scheduled intervals. Approaches to help reduce the impact of market fluctuations over time. '
        duration ={'3 weeks'}
        level={'Intermediate'}
        />
        <Courses heading='Security and Wallet Management'
        img={secureImg}
        alt='security illustration'
        text='Importance of security when dealing with cryptocurrencies.Types of wallets (e.g., hardware, software, mobile, paper wallets) and how to set them up securely. Significance of private keys and how to keep them safe '
        duration ={'5 weeks'}
        level={'Advanced'} />


  </div>
</div>



    
  )
}
