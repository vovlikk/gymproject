import { useState } from "react";
import '../UserLogic.css/UserChangePassword.css'

function UserChangePassword() {
  const[userName,setUserName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handlerChangeUserPassword(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const info = {
      UserName:userName,
      CurrentlyPassword: currentPassword,
      NewPassword: newPassword
    };

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('You need to authorize');
      }

      const response = await fetch('', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(info)
      });

      if (!response.ok) {
        throw new Error('Failed to change password');
      }

      alert("Password was successfully changed");
      setCurrentPassword('');
      setNewPassword('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="change-password-form" onSubmit={handlerChangeUserPassword}>
  <div className="form-group">
    <input
      type="text"
      className="form-input"
      placeholder="Enter Your Name"
      value={userName}
      onChange={e => setUserName(e.target.value)}
    />
  </div>

  <div className="form-group">
    <input
      type="password"
      className="form-input"
      placeholder="Enter Your Current Password"
      value={currentPassword}
      onChange={e => setCurrentPassword(e.target.value)}
    />
  </div>

  <div className="form-group">
    <input
      type="password"
      className="form-input"
      placeholder="Enter Your New Password"
      value={newPassword}
      onChange={e => setNewPassword(e.target.value)}
    />
  </div>

  <button className="submit-button" type="submit" disabled={loading}>
    {loading ? 'Changing...' : 'Change Password'}
  </button>

  {error && <div className="error-message">{error}</div>}
</form>
  );
}

export default UserChangePassword;
