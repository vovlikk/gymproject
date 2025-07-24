import { useState } from "react";

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

            const response = await fetch('', {
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
        <form onSubmit={handleadminChangePassword}>
            <input
                type="email"
                placeholder="Enter user's email"
                value={foundEmail}
                onChange={e => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={e => setPassword(e.target.value)}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Changing...' : 'Change Password'}
            </button>
            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        </form>
    );
}

export default AdminChangeUserPassword;
