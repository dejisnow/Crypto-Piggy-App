import React from 'react'
import { useState } from 'react'
import thanosImg from '../images/Absolute_Reality_v16_animationcartoonprofile_picturethanos_0.jpg'
import { Buttons } from './home sections/Button';
// import {ethers} from 'ethers';
// const { ethers } = require("ethers");


export function Account() {
const [errMsg,setErrMsg] = useState(null)
const [accountAdd ,setAccountAdd] =useState(null)
//const [balance, setBalance] = useState(null)
const [btnText, setBtnText] = useState( 'Connect wallet')

function connectWallet(){
  if(window.ethereum){
    setBtnText('Connected')
    window.ethereum.request({method:'eth_requestAccounts' })
    .then(result =>{
      accountCheck(result[0]
        ) })
      }else{

    setErrMsg('You need to install metamask')
    alert(errMsg)
  }
}

  function accountCheck(account){
      setAccountAdd(account)
      // getAccountBalance(account)
  }
  
  // function getAccountBalance(address){
  //     window.ethereum.request({method:'eth_getBalance',params:[address,'latest']})
  //     .then(balance => setBalance(ethers.utils.formatEther(balance)))
  // }

  return (
    <div className='account__main'>
    <div className='account__div'>
        <div>
          <button className ='connect__walletBtn' onClick={connectWallet}>
           {btnText}</button>
          <div className='account__details'>
            <img src={thanosImg} alt='display of thanos'></img>
            <p >Wallet Address : <span> {accountAdd} </span></p>
            <p>Account Balance : </p>
          </div>

        </div>
        {/* Div for vault and transaction history */}
        <div className='vault__history'>
      
          <div className='vault'>
          <h3>Overview</h3>
            <div className='plans'>

         
            <div className='savings__plans'>
              <h4>Savings</h4>
              <div className='save__btnDiv'>
                <Buttons classN='save__btn' textDisplay='View Active plans' />
              </div>

            </div>
            <div className='investment_plans'>
                <h4>Investments</h4>
              <div className='invest__btnDiv' >
                <Buttons classN='invest__btn' textDisplay='View Active plans' />

              </div>
            </div>
            </div>

          </div>

      {/* Div for transaction history */}
          <div className='history'>
            <h3>Transaction history</h3>
            <div className='history__details'>
              <div className='details_header'>
                <h4>Date</h4>
                <h4>Type</h4>
                <h4>Status</h4>
              </div>
              <div className='details__div'>
                <p className='date__div'>01/08/2023</p>
                <a href='#transfer' >Transfer</a>
                <p className='transaction__div'>Successful</p>

              </div>


            </div>
          </div>



        </div>

    </div>
    </div>
  )
}

