import React from 'react'
//Components
// import { Buttons } from './home sections/Button.js'
import {Price} from './home sections/price.js'
import { Services } from './home sections/services'
import {Footer} from './home sections/footer/footer'
import { Reviews } from './home sections/reviews folder/review img/Reviews.js'
import { Steps } from './home sections/get started/steps.js'
import Typewriter from 'typewriter-effect'





//Impoted Images

import savingsImg from '../images/Absolute_Reality_v16_a_dark_mode_landing_page_of_a_cryptocurre_1 (1).jpg'
import depositImg from '../images/Absolute_Reality_v16_an_illustration_of_a_mobile_phone_showing_0.jpg'
import customerServiceImg from '../images/DreamShaper_v7_hyper_realistic_customer_service_illustration_h_1.jpg' 
import conversionImg from '../images/Absolute_Reality_v16_an_illustration_of_conversion_of_digital_3.jpg'
import walletImg from '../images/Absolute_Reality_v16_crypto_account_integration_hyperrealitic_1.jpg'
import courseImg from '../images/Absolute_Reality_v16_illustration_of_graduation_hat_with_books_0.jpg'
import arrowRight from '../nav pages/home sections/get started/images/arrow-right-svgrepo-com.svg'
// Review images
import firstReviewImg from '../nav pages/home sections/reviews folder/review img/Absolute_Reality_v16_beautiful_light_skin_african_lady_portrai_2.jpg'
import secondReview from '../nav pages/home sections/reviews folder/review img/Absolute_Reality_v16_beautiful_40year_old_asian_man_portrait_d_1.jpg'
import thirdReview from '../nav pages/home sections/reviews folder/review img/Absolute_Reality_v16_beautiful_dark_skin_african_40year_old_ma_1.jpg'
import forthReview from '../nav pages/home sections/reviews folder/review img/Absolute_Reality_v16_beautiful_30year_old_white_woman_portrait_3.jpg'

//Getting started Images
import metamaskmg from '../nav pages/home sections/get started/images/piggy mask.png'
import docImg from '../nav pages/home sections/get started/images/piggy png.webp'
import btcImg from '../nav pages/home sections/get started/images/DreamShaper_v7_hyper_realistic_bank_deposit_illustration_with_3.jpg'
export function Home() {
  return (
    
    
<div>
               

              
       
      <div className="home-page" id='home'>
     
       

          <div className='main-layout'>
            <div className='header__div'>

            <h1>Welcome to the Future of Saving with Our 
            <Typewriter className='typewriter'
            onInit={(typewrite)=>{
             return typewrite.typeString(`<span className='header__span'>Crypto-Piggy Bank</span> `).changeDelay(80)
             .pauseFor(500).deleteAll().typeString(`<span className='header__span'>Piggy Bank</span> `).pauseFor(500)
             .deleteAll().typeString(`<span className='header__span'>Crypto-Piggy Bank</span> `).start()
            }}
            /></h1>
      
                
              <div className='main-text-div'>

                <p>Discover a revolutionary way to grow your cryptocurrency holdings with our cutting-edge Crypto-Piggy Bank. Safely store, earn interest, and watch your digital assets flourish as you take control of your financial future. Start saving smartly in the world of cryptocurrencies today!".</p>

              </div>

            </div>

              <div className='bgImage__div'>
              {/* <img src={bgImage} alt='illustration of a secure bitcoin'></img> */}
              </div>
             
          </div>
          <div className='btn-div'>

          
            <a href='#getstarted' className='buttons'>Get started</a>
            
            </div>


            <section className='cryptoList'>
              <h2>Supported Cryptocurrencies</h2>
              <div className='crypto-headers'>               
                <p></p>
                <p></p>
                <p>Market price (USD)</p>
                <p>24hr change %</p>
              </div>
              <div className='crypto-details'>               
                <Price />
              </div>


            </section>
            <div className='service__div'>
            <section className='service one'>

              <Services
              header= 'Wallet Integration'
              text ='We support for various cryptocurrencies and allow wallet integration.
              Seamless integration and easy fund transfers.'
              img={walletImg}
              
              />
              </section>
              <section className='service two'>
                    <Services
              header= 'Secure Deposits and Withdrawals'
              text ='
              Easy-to-use and secure deposit feature to funds your piggy bank.
              Hassle-free and fast withdrawals'
              img={depositImg}
              
              />
              </section>
              <section className='service three'>
                    <Services
              header= 'Attain Savings Goal'
              text ='Set your savings goals and track your progress over time.'
              img={savingsImg}
              
              />
              </section>
              <section className='service four'>
                    <Services
              header= 'Live Cryptocurrency Conversion'
              text ='Convert your cryptocurrency in real-time with accurate conversions.'
              img={conversionImg}
              
              />
              </section>
              <section className='service five'>
                    <Services
              header= 'Courses'
              text ={`Level up your financial prowess and harness the full potential of your crypto assets with our interactive and engaging courses`}
              img={courseImg}
              
              />
              </section>
              <section className='service five'>
                    <Services
              header= 'Customer Support'
              text ='Experience swift response to your queries with our top-notch customer support service.'
              img={customerServiceImg}
              
              />
              </section>
              </div>

              <section className='review__section'>
                  <div>
                  <h2>Reviews</h2>

                  </div>
                <div className='reviews'>
                  
                  
                  <Reviews img={firstReviewImg} 
                  text={` "Crypto Piggy has been an absolute game-changer for me! The educational content provided here has been incredibly helpful." `} 
                  author='- Amara John'/>
                    <Reviews img={thirdReview} 
                  text={`"I now feel confident in managing my crypto portfolio and making informed investment decisions." `} 
                  author='- Afolabi Mofe'/>
                      <Reviews img={forthReview} 
                  text={`"I was always hesitant about investing in crypto, but Crypto Piggy changed my mind ." `} 
                  author='- May Dawson'/>
                    
                      <Reviews img={secondReview} 
                  text={`"Crypto Saving Courses boosted my returns and provided valuable insights. Win-win!"  `} 
                  author='- Yin mu'/>


                </div>

              </section>

            
              <section className='steps__main' >
                <h2 id='getstarted'>How to Get started</h2>
                <div className='steps__section'>

                

                <Steps img={metamaskmg}
                text = {'Connect your Meta Mask Wallet'} />
                <span><img src={arrowRight} alt= 'arrow right' /></span>
                     <Steps img={docImg}
                text = {'Grant Access'} />
                <span><img src={arrowRight} alt= 'arrow right' /></span>
                     <Steps img={btcImg}
                text = {'Start saving and Earning'} />

                </div>


              </section>
              <div className='getStarted__div'>
              <a href='#home' className='connect__walletButton'>Click "Account" to Get Started</a>

              </div>
             
      

              <Footer />
              

              
      </div>




</div>



  )
}

