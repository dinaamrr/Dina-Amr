import React from 'react'
import TopBar from '../components/top-nav/top-nav'
import card from '../assets/images/Capture.PNG'
import balance from '../assets/images/card.PNG'
import '../styles/myWallet.css'

import {BsSearch} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
const  data = [
    {
      "img":require("../assets/images/payoneer.png") ,
      "title": "Payoneer",
      "date" : "20 Apr 2022, 06:55 PM",
      "paymentValue":"+$4800.24",
      "id" : 1
    },
    
    {
      "img":require("../assets/images/Remitly.png") ,
      "title": "Remitly",
      "date" : "18 Apr 2022, 08:58 PM",
      "paymentValue":"+$4800.24",
      "id" : 2
    },
    
    {
      "img":require("../assets/images/wise.png") ,
      "title": "Wise",
      "date" : "15 Apr 2022, 02:55 AM",
      "paymentValue":"+$4800.24",
      "id" : 3
    },
    {
      "img":require("../assets/images/paypal.png") ,
      "title": "Paypal",
      "date" : "14 Apr 2022, 07:40 PM",
      "paymentValue":"+$4800.24",
      "id" : 4
    }
    
    ]
    
    
    
    // Up coming payments 
     
     
     
     
    export const  upComingPayments = [
      {
        "img":require("../assets/images/facebook.png") ,
        "title": "Facebooks Ads",
        "date" : "20 Apr 2022, 06:55 PM",
        "paymentValue":"$4800",
        "id" : 1
      },
      
      {
        "img":require("../assets/images/linkedinLogo.png") ,
        "title": "LinkedIn Ads",
        "date" : "18 Apr 2022, 08:58 PM",
        "paymentValue":"$200.50",
        "id" : 2
      },
      
    
      ]
const MyWallet = () => {
  return (
    <main>
    <div className='dashboard-container'>
    <TopBar title='My Wallets' />
    <div className='column column-twoo'>
    <div className='dashboard-spending-cards'>
    <img src={card} alt=''/>
      
</div>


<div className='chart-container'>

 
  <div  classname='balance'>
  <img src={balance}alt=''/>
  </div>
  
  <button className='btn'><AiOutlinePlus/> Add New Card</button>
  </div>




  
</div> 
 




<div className='column column-onee'>
          <div className='recurring-expenses-container'>
            <div className='expenses-header'>
              <h3 className='expenses-title'>My Payments <br/><br/><li>All Payments</li>
              <li>&nbsp; &nbsp;Regular Payments</li> <hr/> </h3>
           
              <div className='expenses-view-all'>
              <BsSearch/> Search
               
             
              </div>
             
               
            </div>
            <small className='sss'>Today</small>
            <div>
            {data.map(user =>
           
               <li className='mw'>< img src={user.img} width="40px"alt={user.title} />{user.title} <br/><small>{user.date}</small> <div className='pv'>{user.paymentValue}</div></li>
              
             
              )}
          </div>
           
          </div>
          <div className='recurring-expenses-container'>
          <div className='expenses-header'>
            <h3 className='expenses-title'>Upcoming Payments</h3>
                
            </div>
            <small className='sss'>Next Month</small>
            <div>
            {upComingPayments.map(user =>
              
               <li className='mw'>< img src={user.img} width="40px"alt={user.title} />{user.title} <br/><small>{user.date}</small><div className='pvv'>{user.paymentValue}</div></li>
              
             
              )}
          </div>
             
        
         
      
        </div>

</div>
</div>
</main>
 
  )
}

export default MyWallet
