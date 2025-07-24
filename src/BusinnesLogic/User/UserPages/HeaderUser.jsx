import Logopng from '../../../Img/Logo/Logo.png';
import { Link } from 'react-router-dom';
import Support from '../UserLogic/Support';
import { useState, useRef, useEffect } from 'react';
import '../UserPagesCss/HeaderUser.css';
import UserProfile from './UserProfile';

function HeaderUser({user}) {
  const[profilevisible,setProfileVisible] = useState(false);
  const [supportVisible, setSupportVisible] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header-user-main">
      <div className="header-user-sections">
        <div className="header-logo">
          <img src={Logopng} alt="Logo" />
        </div>

        <div className="header-user-links">
          <Link to='user/workouts'>Workouts</Link>
          <Link to='user/progress'>Progress</Link>
          <Link to='user/subscription'>Subscription</Link>
        </div>

        <div className="header-user-profile">
          <button onClick={() => setSupportVisible(true)}>Support</button>
          <button onClick={() => setProfileVisible(true)}>Profile</button>

          <div className="profile-dropdown-wrapper" ref={dropdownRef}>
            <h3 onClick={() => setProfileOpen(prev => !prev)}>Profile ▾</h3>
            {profileOpen && (
              <div className="profile-dropdown">
                <Link to="/user/profile" className="dropdown-item">View Profile</Link>
                <Link to="/user/settings" className="dropdown-item">Settings</Link>
                <div className="dropdown-item" onClick={() => alert("Logging out...")}>Logout</div>
              </div>
            )}
          </div>
        </div>
        {profilevisible && (
        <UserProfile user={user} onClick={() => setProfileVisible(false)} />
      )}

        {supportVisible && (
          <Support onClose={() => setSupportVisible(false)} />
        )}
      </div>
    </header>
  );
}

export default HeaderUser;
