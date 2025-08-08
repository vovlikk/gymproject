import { useState } from "react";
import '../AdminLogic.css/AdminChangePassword.css'

function AdminChangeUserPassword() {
    const [foundEmail, setEmail] = useState('');
    const [newPassword, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleadminChangePassword(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const info = {
            Email: foundEmail,
            Password: newPassword
        };

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("You need authorization!");
            }

            const response = await fetch('https://420e3a2fdda3.ngrok-free.app/api/Admin/user-update-password', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(info)
            });

            if (!response.ok) {
                throw new Error("Failed to change password");
            }

            alert("Password was successfully changed!");
            setEmail('');
            setPassword('');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="change-password-container">
  <div className="change-password-title">
    <h3>Change Password</h3>
  </div>
  <form className="change-password-form" onSubmit={handleadminChangePassword}>
    <input
      type="email"
      className="change-password-input"
      placeholder="Enter user's email"
      value={foundEmail}
      onChange={e => setEmail(e.target.value)}
      required
    />
    <input
      type="password"
      className="change-password-input"
      placeholder="Enter new password"
      value={newPassword}
      onChange={e => setPassword(e.target.value)}
      required
    />
    <button className="change-password-button" type="submit" disabled={loading}>
      {loading ? 'Changing...' : 'Change Password'}
    </button>
  </form>
  {error && <div className="change-password-error">{error}</div>}
</div>

    );
}

export default AdminChangeUserPassword;
