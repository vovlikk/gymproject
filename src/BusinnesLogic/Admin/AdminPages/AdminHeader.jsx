import '../AdminPages.css/AdminHeader.css'
import logo from '../../../Img/Logo/Logo.png'
import { useEffect, useState } from 'react';
import AdminSettings from './AdminSettings';

function AdminHeader({ admin }) {
  const [color, setColor] = useState(false);
  const [showsettings, setsettings] = useState(false);

  useEffect(() => {
    document.body.style.transition = "color 0.5s ease, background-color 0.5s ease";
    document.body.style.color = color ? "white" : "black";
    document.body.style.backgroundColor = color ? "black" : "white";
  }, [color]);

  function btoggleColorim() {
    setColor(prev => !prev);
  }

  return (
    <>
      <header className='admin-header'>
        <div className='header-admin-section'>
          <div className='admin-header-logo'>
            <img src={logo} alt="Logo" />
          </div>

          <div className='admin-buttons'>
            <div className='change-teme'>
              <button onClick={btoggleColorim}>Change Theme</button>
            </div>
            <div className='admin-btn-settings'>
              <button onClick={() => setsettings(true)}>Open settings</button>
            </div>
            <div className='admin-btn-exit'>
              <button>Exit</button>
            </div>
          </div>
        </div>
      </header>

    
      {showsettings && (
        <AdminSettings onClose={() => setsettings(false)} />
      )}
    </>
  );
}

export default AdminHeader;
