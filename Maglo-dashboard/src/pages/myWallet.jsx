import React from 'react'
import TopBar from '../components/top-nav/top-nav'
import card from '../assets/images/Capture.PNG'
import '../styles/myWallet.css'
import {AiOutlineArrowUp} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import {AiOutlineArrowDown} from 'react-icons/ai'
const MyWallet = () => {
  return (
    <main>
    <div className='dashboard-container'>
    <TopBar title='My Wallets' />
    <div className='column column-two'>
    <div className='dashboard-spending-cards'>
    <img src={card} alt=''/>
      
</div>


<div className='chart-container'>
<div className='chart-container-header'>
  <h3>Working Capital</h3>
  </div>
 
  </div>




  
</div> 
 




<div className='column column-one'>
          <div className='recurring-expenses-container'>
            <div className='expenses-header'>
              <h3 className='expenses-title'>My Payments</h3>
              <Link to='/myWallet' className='expenses-view-all'>
                ...
               
             
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
          <div className='recurring-expenses-container'>
          <div className='expenses-header'>
            <h3 className='expenses-title'>Upcoming Payments</h3>
            <Link to='/transactions' className='expenses-view-all'>
            View All{' '}
             
           
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
 
  )
}

export default MyWallet
