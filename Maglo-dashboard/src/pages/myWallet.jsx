import React from 'react'
import TopBar from '../components/top-nav/top-nav'
import card from '../assets/images/Capture.PNG'
import '../styles/myWallet.css'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {AiOutlineArrowDown} from 'react-icons/ai'
const MyWallet = () => {
  return (
    <div>
    <TopBar title='My Wallets' />
    <img src={card} alt=''/>
    <div>
    <div className='dashboard-spending-card-main'>
    <h1 className='dashboard-spending-card-main-title dashboard-spending-card-main-title-first'>
      Your Balance
    </h1>
  
    <p className='dashboard-spending-card-main-price dashboard-spending-card-main-price-first'>5240.00$</p>
    <p className='green'><AiOutlineArrowUp/>23.65%</p>
    <p className='red'><AiOutlineArrowDown/>10.04%</p>
       
        </div>
        <div className='dashboard-spending-card-mainn'>
        <h1 className='dashboard-spending-card-main-title dashboard-spending-card-main-title-first'>
         Currency
        </h1>
        <p className='dashboard-spending-card-main-price dashboard-spending-card-main-price-first'>USD/US Dollar</p>
        <h1 className='dashboard-spending-card-main-titlee dashboard-spending-card-main-title-first'>
        Currency
       </h1>
       <p className='dashboard-spending-card-main-price dashboard-spending-card-main-price-first'>USD/US Dollar</p>
            </div>
    </div>
    </div>
  )
}

export default MyWallet