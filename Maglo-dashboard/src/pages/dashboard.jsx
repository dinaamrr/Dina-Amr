import {React} from 'react'
import '../styles/dashboard.css'
import TopBar from '../components/top-nav/top-nav'
import {FaWallet} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md'
import card from '../assets/images/Capture.PNG'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
   
  } from 'recharts';

  const  dataa = [
    {
      "img":require("../assets/images/Avater.png"),
      "title": "Saleh Ahmed",
      "date" : "April 28 2022 at 11:00",
      "paymentValue":"-$435,00",
      "id" : 1
    },
    
    {
      "img":require("../assets/images/avatar2.png") ,
      "title": "Delower hossain",
      "date" : "April 25 2022 at 11:00",
      "paymentValue":"-$132,00",
      "id" : 2
    },
    
    {
      "img":require("../assets/images/avatar3.png") ,
      "title": "Moinul Hasan Nayem",
      "date" : "April 25 2022 at 11:00",
      "paymentValue":"-$826,00",
      "id" : 3
    },
    {
      "img":require("../assets/images/avatar4.png") ,
      "title": "Dr. Jubed Ahmed",
      "date" : "April 26 2022 at 11:00",
      "paymentValue":"-$435,00",
      "id" : 4
    },
    {
      "img":require("../assets/images/avatar5.png") ,
      "title": "AR. Jakir Alp",
      "date" : "April 14 2022 at 11:00",
      "paymentValue":"-$288,00",
      "id" : 5
    }
    ]
    
  const  dataInv = [
    {
        img:require('../assets/images/apple.png'),
      title: "Iphone 13 Pro MAX",
      status:"pending",
      small:"Apple.Inc",
      type:"Mobile",
      Amount:"420.84$",
      date : "14 Apr 2022 ",
      time:"08:00 PM",
      invoiceId: "0124877",
      action:"...",
      id : 1
    },
    {
        img:require('../assets/images/netflix.png') ,
        "title": "Netfilx Subscription",
        small:"Netflix",
        "status":"Netflix",
        "type":"Entertainment",
        "Amount":"100.00$",
        "date" : "5 Apr 2022  ",
        "time":"07:00 PM",
        "invoiceId": "0124585",
        "action":"...",
        "id" : 7
      },
    {
      img:require('../assets/images/figma.png') ,
      "title": "Figma Subscription",
      "status":"paid",
      small:"Figma.Inc",
      "type":"Software",
      "Amount":"244.20$",
      "date" : "02 Apr 2022 ",
      "time":"06:00 PM",
      "invoiceId": "0124843",
      "action":"...",
      "id" : 2
    },
  
  
    
    
    ]
  const data = [
    {
      name: 'Apr 14',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Apr 15',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Apr 16',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr 17',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Apr 18',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Apr 19',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Apr 20',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
const Dashboard = () => {
  return (
    <main>
    <div className='dashboard-container'>
    <TopBar title='Dashboard' />
    <div className='column column-two'>
    <div className='dashboard-spending-cards'>
      <div className='dashboard-spending-card dashboard-spending-card-first'>
        <div className='dashboard-spending-card-secondary dashboard-spending-card-secondary-first'>
          <div className='dashboard-icon dashboard-icon-first'>
          <FaWallet/>
          </div>
        </div>
        <div className='dashboard-spending-card-main'>
          <p className='dashboard-spending-card-main-title dashboard-spending-card-main-title-first'>
            Total Balance
          </p>
          <h4 className='dashboard-spending-card-main-price dashboard-spending-card-main-price-first'>5240.21$</h4>
              </div>
            </div>
            <div className='dashboard-spending-card dashboard-spending-card-first'>
            <div className='dashboard-spending-card-secondary dashboard-spending-card-secondary-first'>
              <div className='dashboard-icon dashboard-icon-first'>
              <FaWallet/>
              </div>
            </div>
            <div className='dashboard-spending-card-main'>
              <p className='dashboard-spending-card-main-title dashboard-spending-card-main-title-first'>
                Total Spending
              </p>
              <h4 className='dashboard-spending-card-main-price dashboard-spending-card-main-price-first'>250.8$</h4>
                  </div>
                </div>
         
          <div className='dashboard-spending-card dashboard-spending-card-second'>
          <div className='dashboard-spending-card dashboard-spending-card-first'>
          <div className='dashboard-spending-card-secondary dashboard-spending-card-secondary-first'>
            <div className='dashboard-icon dashboard-icon-first'>
            <FaWallet/>
            </div>
          </div>
          <div className='dashboard-spending-card-main'>
            <p className='dashboard-spending-card-main-title dashboard-spending-card-main-title-first'>
              Total Saved
            </p>
            <h4 className='dashboard-spending-card-main-price dashboard-spending-card-main-price-first'>550.25$</h4>
                </div>
              </div>
              </div>
</div>


<div className='chart-container'>
<div className='chart-container-header'>
  <h3>Working Capital</h3>
  </div>
  <LineChart width={600} height={200} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#008000" />
    <Line type="monotone" dataKey="pv" stroke="#ffff00" />
  </LineChart>
  </div>



  <div className='recent-expenses-container'>
            <div className='expenses-header'>
              <h3 className='expenses-title'>Recent Transaction</h3>
              <Link to='/transactions' className='expenses-view-all'>
              View All{' '}
              <svg className='expenses-view-all-icon'>
              <MdKeyboardArrowRight/>
            </svg>
              </Link>
</div>
<div>

</div>
<table className="table  ">
<thead>
    <tr>
       
        <th>NAME/BUSINESS</th>
        <th>Type</th>
        <th>Amount</th>
        <th>Date</th>
      
    </tr>
</thead>
<tbody>
    {dataInv.map(user =>
        
        <tr key={user.id}>
           
            <td><img src={user.img} width="60px" alt=''/> {user.title} <div className='smalll'><small>{user.small}</small></div></td>
           
            <td>{user.type}</td>
            <td>{user.Amount}</td>
            <td>{user.date}</td>
           
           
           
        </tr>
       
    )}
</tbody>
</table>
</div>
  
</div> 
 




<div className='column column-one'>
          <div className='recurring-expenses-container'>
            <div className='expenses-header'>
              <h3 className='expenses-title'>Wallet</h3>
              <Link to='/myWallet' className='expenses-view-all'>
                ...
               
             
              </Link>
             
               
            </div>
            <img src={card} alt=''/>
          </div>
          <div className='recurring-expenses-container'>
          <div className='expenses-header'>
            <h3 className='expenses-title'>Scheduled Transfers</h3>
            <Link to='/transactions' className='expenses-view-all'>
            View All{' '}
               <MdKeyboardArrowRight/>
           
            </Link>
           
             
          </div>
       <div className='ll'>
          {dataa.map(user =>
            
             <li className='ull'>< img src={user.img} alt={user.title} /><div className='tt'>{user.title}</div> <br/><small>{user.date}</small> <div className='pp'>{user.paymentValue}</div></li>
            
            
            )}
        </div>
        </div>

</div>
</div>
</main>
);
}

export default Dashboard;
