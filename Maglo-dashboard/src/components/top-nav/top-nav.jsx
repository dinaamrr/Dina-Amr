
import './top-nav.css';
import image from '../../assets/images/profile-picture.png'
import { useAuth } from '../../contexts/AuthContext';
import {BsSearch} from 'react-icons/bs';
import {MdNotifications} from 'react-icons/md'
const Topbar=({title,user})=>{
    const { currentUser } = useAuth();
    return (
    <div className='top-bar'>
    <h2 className='title'>{title}</h2>
     <p> User Logged In:  {currentUser.displayName}</p>
   
    <div className='profile'>
    <BsSearch/>
    <MdNotifications/>
    <img className='avatar-image'  src={image} alt="" />
   
         
        </div>
      </div>
   
    
  );
};
export default Topbar;