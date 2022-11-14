import {React} from 'react'
import '../styles/dashboard.css'
import TopBar from '../components/top-nav/top-nav'
import {FaWallet} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md'
import card from '../assets/images/Capture.PNG'
import image from '../assets/images/apple.png'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
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
  <LineChart width={700} height={200} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
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

<table className='expenses-table'>
<thead>
  <tr>
    <th>Name/Business</th>
    <th>Type</th>
    <th>Amount</th>
    <th>Date</th>
  </tr>
</thead>
<tbody> <tr>
<td>Iphone 13 Pro Max</td>
<td>Mobile</td>
<td>420.84$</td>
<td>14 Apr 2022</td>
</tr>
<tr>
<td>Iphone 13 Pro Max</td>
<td>Mobile</td>
<td>420.84$</td>
<td>14 Apr 2022</td>
</tr>
<tr>
<td>Iphone 13 Pro Max</td>
<td>Mobile</td>
<td>420.84$</td>
<td>14 Apr 2022</td>
</tr>
<tr>
<td>Iphone 13 Pro Max</td>
<td>Mobile</td>
<td>420.84$</td>
<td>14 Apr 2022</td>
</tr></tbody>
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
          <div class="container">
    <div class="row">
        
          <div class="articles card">
          
            
            <div className="card-body ">
              <div className="item d-flex align-items-center">
                <div class="image"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="..." class="img-fluid rounded-circle"/></div>
                <div className="text "><a href="#">
                    <h3 class="h5">Lorem Ipsum Dolor</h3></a><small>Posted on 5th June 2017 by Aria Smith.   </small></div>
              </div>
              <div class="item d-flex align-items-center">
                <div class="image"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="..." class="img-fluid rounded-circle"/></div>
                <div class="text"><a href="#">
                    <h3 class="h5">Lorem Ipsum Dolor</h3></a><small>Posted on 5th June 2017 by Frank Williams.   </small></div>
              </div>
              <div class="item d-flex align-items-center">
                <div class="image"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="..." class="img-fluid rounded-circle"/></div>
                <div class="text"><a href="#">
                    <h3 class="h5">Lorem Ipsum Dolor</h3></a><small>Posted on 5th June 2017 by Ashley Wood.   </small></div>
              </div>
              <div class="item d-flex align-items-center">
                <div class="image"><img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="..." class="img-fluid rounded-circle"/></div>
                <div class="text"><a href="#">
                    <h3 class="h5">Lorem Ipsum Dolor</h3></a><small>Posted on 5th June 2017 by Jason Doe.   </small></div>
              </div>
              <div class="item d-flex align-items-center">
                <div class="image"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..." class="img-fluid rounded-circle"/></div>
                <div class="text"><a href="#">
                    <h3 class="h5">Lorem Ipsum Dolor</h3></a><small>Posted on 5th June 2017 by Sam Martinez.   </small></div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>

</div>
</div>
</main>
);
}

export default Dashboard;