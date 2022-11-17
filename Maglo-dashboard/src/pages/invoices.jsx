import React ,{useState} from 'react'
import TopBar from '../components/top-nav/top-nav'

import '../styles/invoices.css'

import ReactSearchBox from "react-search-box";
import Badge from 'react-bootstrap/Badge';
import "bootstrap/dist/css/bootstrap.min.css";

import {BsSearch} from 'react-icons/bs';
const  dataInv = [
    {
      img:require('../assets/images/payoneer.png'),
      title: "Gadaget Gallery LTD",
      status:"Pending",
      type:20,
      Amount:"420.84$",
      date : "14 Apr 2022  ",
      time:"at 08:00 PM",
      invoiceId: "Inv: MGL524874",
      action:"...",
      id : 1
    }, 
    {
      img:require('../assets/images/figma.png') ,
      title: "Figma Subscription",
      "status":"Paid",
      "type":"01",
      "Amount":"244.20$",
      "date" : "02 Apr 2022 ",
      "time":"at 06:00 PM",
      "invoiceId": "Inv: MGL524250",
      "action":"...",
      "id" : 2
    },
  
  
    {
      "img":require('../assets/images/jackdawson.png') ,
      "title": "Jack Dawson Eric",
      "status":"UnPaid",
      "type":"02",
      "Amount":"100.00$",
      "date" : "20 Mar 2022 ",
      "time":"at 09:00 PM",
      "invoiceId": "Inv: MGL524874",
      "action":"...",
      "id" : 3
    },
  
  
  
    {
      "img":require('../assets/images/uihut.png') ,
      "title": "UIHUT Subscription",
      "type":"01",
      "Amount":"84.00$",
      "date" : "24 Mar 2022 ",
      "time":" at 08:00 PM",
      "invoiceId": "Inv: MGL524140",
      "status":"Pending",
      "action":"...",
      "id" : 4
    },
    {
      "img":require('../assets/images/citibank.png') ,
      "title": "Citi Bank Ltd.",
      "status":"Pending",
      "type":"Withdraw",
      "Amount":"400.11$",
      "date" : "10 Mar 2022 ",
      "time":"at 07:00 AM",
      "invoiceId": "Inv: MGL524245",
      "action":"...",
      "id" : 5
    },
  
    {
      "img":require('../assets/images/bitcoin.jpg') ,
      "title": "Bitcoin Transaction",
      "status":"Pending",
      "type":"Technology",
      "Amount":"520.84$",
      "date" : "14 Apr 2022 ",
      "time":" at 08:00 PM",
      "invoiceId": "Inv: MGL524254",
      "action":"...",
      "id" : 6
    },
  
  
  
    {
      "img":require('../assets/images/netflix.png') ,
      "title": "Netfilx Subscription",
      "status":"Paid",
      "type":"01",
      "Amount":"100.00$",
      "date" : "5 Apr  2022",
      "time":"at 07:00 PM",
      "invoiceId": "Inv: MGL524487",
      "action":"...",
      "id" : 7
    },
  
    {
      "img":require('../assets/images/sajib.png'),
      "title": "Sajib Rahman",
      "status":"Paid",
      "type":"Withdraw",
      "Amount":"500.10$",
      "date" : "30 Mar 2022 ",
      "time":" at 09:00 PM",
      "invoiceId": "Inv: MGL524598",
      "action":"...",
      "id" : 8
    }, 
    ]

    
const Invoices = () => {
   
    const [filteredList, setFilteredList] =  useState("");

   
    return (
        <main>
        <div className="container">
        <TopBar title='Invoices'/>
        <div className="inner-form">
        
        <div class="input-field">
              <button class="btn-search" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </button>
              <input className='search' type="search" placeholder="Search" onChange={(e)=> setFilteredList(e.target.value)} />
            </div>
          </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>NAME/CLIENT</th>
                        <th>DATE</th>
                        <th>ORDERS/TYPE</th>
                        <th>AMOUNT</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                {dataInv.filter((data)=>

                data.title.toLowerCase().includes(filteredList)
                
                    ).map((user =>
                        
                        <tr key={user.id}>
                            <td><img src={user.img}  width='40px'alt=''/>{user.title} <br/><small>{user.invoiceId}</small></td>
                            <td>{user.date} <br/><small>{user.time}</small></td>
                            <td>{user.type}</td>
                            <td>{user.Amount}</td>
                        
                            <td><Badge bg="success">{user.status}</Badge></td>
                         
                            <td>{user.action}</td>
                           
                        </tr>
                       
                    ))}
                </tbody>
            </table>
        </div>
        </main>
    );
}


export default Invoices
