import '../UserPagesCss/UserProfile.css';
import { useState } from 'react';
import UserDelete from './UserDelete';
import UserSettings from './UserSettings';



function UserProfile({ user, onClose }) {
  const [activeTab, setActiveTab] = useState('profile');

  if (!user) {
    return <div className="infobom">Загрузка профиля...</div>;
  }

  return (
    <div className='user-profile-overlay' onClick={onClose}>
      <div className='user-profile-body' onClick={e => e.stopPropagation()}>
        <div className="tabs">
            <button onClick={() => setActiveTab('profile')}>Profile</button>
            <button onClick={() => setActiveTab('settings')} >Settings</button>
            <button onClick={() => setActiveTab('delete')}>Delete</button>
        </div>

        <div className="tab-content">
            <div className='tab-user-profile'>
            {activeTab === 'profile' && (
                <div>
                    <h3>Name:{user.userName}</h3>
                    <h3>Email:{user.email}</h3>
                </div>
            )}
            </div>

            <div className='tab-user-settings'>
            {activeTab === 'settings' && (
                <UserSettings />
            )}
            </div>

            <div className='tab-user-delete'>
            {activeTab === 'delete' && (
                 <UserDelete />
            )}
            </div>

            
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
