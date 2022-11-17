import React from 'react'
import TopBar from '../components/top-nav/top-nav'

import '../styles/transactions.css'
import Badge from 'react-bootstrap/Badge';






const data = [
  {
    
    img:require('../assets/images/apple.png'),
    name: "Iphone 13 pro MAX",
    type:"Mobile",
    amount:"$420.84",
    subject: "test",
    invoiceId: "MGL0124877",
    data: "2021-08-14 ",
    action:"View",
    small:"Apple.Inc",
    "time":"at 06:00 PM",
  },
  {
    
    "img":require('../assets/images/netflix.png') ,
    name: "Netfilx Subscription",
    type:"Entertainment",
    amount:"$100.00",
    subject: "test",
    invoiceId: "MGL0124877",
    data: "2021-09-16 ",
    action:"View",
    small:"Netflix",
    "time":"at 06:00 PM",
  },
  {
    
    img:require('../assets/images/figma.png') ,
    name: "Figma Subscription",
    type:"Software",
    amount:"$244.20",
    subject: "test",
    invoiceId: "MGL0124877",
    data: "2021-09-16 ",
    action:"View",
    small:"Figma.Inc",
    "time":"at 06:00 PM",
  },
  {
   
    "img":require('../assets/images/bitcoin.jpg') ,
    name: "Bitcoin Transaction",
    type:"Technology",
    amount:"-$520.84",
    subject: "test",
    invoiceId: "MGL0124877",
    data: "2021-09-16 ",
    action:"View",
    small:"Coinbase",
    "time":"at 05:00 PM",
  },
  {
    
    "img":require('../assets/images/sajib.png'),
    name: "Sajib Rahman",
    type:"Withdraw",
    amount:"$500.10",
    subject: "test",
    invoiceId: "MGL0124877",
    data: "2021-09-16 ",
    action:"View",
    small:"Appsumo",
    "time":"at 06:00 PM",
  },
  {
    
   img:require('../assets/images/instgram.jpg'),
    name: "Instagram Ads",
    type:"Entertainment",
    amount:"$100.00",
    subject: "test",
    invoiceId: "MGL0124877",
   action:"View",
    data: "2021-09-16",
    small:"Meta",
    "time":"at 07:00 PM",
  },
  {
   
    "img":require('../assets/images/uihut.png') ,
    name: "UIHUT Subscription",
    type:"Payment",
    amount:"-$84.00",
    subject: "test",
    invoiceId: "MGL0124877",
    data: "2021-09-16",
    action:"View",
    small:"UIHUT",
    "time":"at 09:00 PM",
  }, 
  {
    
   
    "img":require('../assets/images/citibank.png') ,
    name: "Citi Bank Ltd.",
    type:"Withdraw",
    amount:"$400.11",
    subject: "test",
    invoiceId: "MGL0124877",
    data: "2021-09-17",
    action:"View",
    small:"City Bank",
    "time":"at 08:00 PM",
  },
 
  
 
 
  
 
  
];
const Transactions = () => {
    return (
        <div className='tconatiner'>
        <TopBar title='Transactions' />
        <div className="inner-form">
        
        <div class="input-field">
              <button class="btn-search" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </button>
              <input className='search' type="search" placeholder="Search" />
            </div>
          </div>
        <table className="table">
        <thead>
            <tr>
                <th>NAME/BUSINESS</th>
                <th>TYPE</th>
                <th>AMOUNT</th>
                <th>DATE</th>
                <th>INVOICE ID</th>
                <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
            {data.map(user =>
                
                <tr key={user.id}>
                    <td><img src={user.img}  width='40px'alt=''/>{user.name}<br/><small>{user.small}</small> </td>
                    <td>{user.type} </td>
                    <td>{user.amount}</td>
                    <td>{user.data}<br/><small>{user.time}</small></td>
                
                    <td>{user.invoiceId}</td>
                 
                    <td><Badge bg="warning">{user.action}</Badge></td>
                   
                </tr>
               
            )}
        </tbody>
    </table>
    </div>
  );
}
 
export default Transactions
