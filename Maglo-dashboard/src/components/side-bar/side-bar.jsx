import React from 'react';
import { NavLink } from 'react-router-dom';
import './side-bar.css';
import logo from '../../assets/images/logo.png';
import homeicon from '../../assets/icons/home-icon.svg';
import charticon from '../../assets/icons/chart-icon.svg#Capa_1'
import {FiSettings} from 'react-icons/fi';
import {FaWallet} from 'react-icons/fa';
import {BiGhost} from 'react-icons/bi';
import {RiLogoutCircleRFill} from 'react-icons/ri'
import {MdOutlineLiveHelp} from 'react-icons/md'
import {useAuth} from '../../contexts/AuthContext'
const Sidebar=()=>
{
    const { logout } = useAuth();

    function handleLogout() {
      logout();
    }
  return (
    <aside>
      <div className='sidebar-container'>
        <div className='sidebar-logo'>
          <div className='logo'>
            <img src={logo} alt=""/>
          </div>
        </div>
        <nav>
          <NavLink className='sidebar-link' to='/dashboard'>
            <div className='sidebar-link-icon'>
            <img src={homeicon} alt=""/>
            </div>
            Dashboard
          </NavLink>
          <NavLink className='sidebar-link' to='/transactions'>
            <div className='sidebar-link-icon'>
            <img src={charticon} alt=""/>
            </div>
            Transactions
          </NavLink>
          <NavLink className='sidebar-link' to='/invoices'>
          <div className='sidebar-link-icon'>
          <BiGhost/>
          </div>
          Invoices
        </NavLink>
        <NavLink className='sidebar-link' to='/myWallet'>
        <div className='sidebar-link-icon'>
        <FaWallet/>
        </div>
        My Wallets
      </NavLink>
          <NavLink className='sidebar-link' to='/settings'>
            <div className='sidebar-link-icon'>
            <span>
            <FiSettings/>
            </span>
            </div>
            Settings
          </NavLink>
        
        </nav>
        <div className='sidebar-logout'>
          <button>  <MdOutlineLiveHelp/>
          Help</button>
          <button onClick={handleLogout}>
          <RiLogoutCircleRFill/>
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
export default  Sidebar

