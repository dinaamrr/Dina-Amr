import React from 'react'
import TopBar from '../components/top-nav/top-nav'
import '../styles/settings.scss'
const Settings = () => {
  return (
    <div className="settings">
    <TopBar title='Settings' />
   
    <div className="settings__wrapper">
    

    

      <div className="details__form">
        <h2 className="profile__title">Account Information</h2>
        <p className="profile__desc">
          Update your account information
        </p>
        <form>
        <h5 className="profile__title">Personal Information</h5>
          <div className="form__group">
            <div>
              <label>First Name</label>
              <input type="text" placeholder="Mahfuzul Islam" />
            </div>

            <div>
              <label>Last</label>
              <input type="text" placeholder="Nabil" />
            </div>
          </div>

          <div className="form__group">
            <div>
              <label>Date of Birth</label>
              <input type="email" placeholder="27/09/1998" />
            </div>

            <div>
              <label>Mobile Number</label>
              <input type="text" placeholder="+123 456 7890" />
            </div>
          </div>

          <div className="form__group">
            <div>
              <label>Email</label>
              <input type="email" placeholder="hellouihut@gmail.com" />
            </div>

          
          </div>
          <div className="form__group">
          <div>
            <label>New Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <div>
            <label>Confirm Password</label>
            <input type="password" placeholder="••••••••" />
          </div>
          
        </div>

          
          
        </form>
      </div>
    </div>
  </div>
  )
}

export default Settings
