import { useState } from "react";

function AdminChangeEmail() {
    const [oldEmail, setOldEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handlechangeEmailAdmin(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const info = {
            CurrentEmail: oldEmail,
            NewEmail: newEmail
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
                throw new Error("Failed to change email");
            }

            alert("Email was successfully changed!");
            setOldEmail('');
            setNewEmail('');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handlechangeEmailAdmin}>
            <input
                type="email"
                placeholder="Enter current email"
                value={oldEmail}
                onChange={e => setOldEmail(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Enter new email"
                value={newEmail}
                onChange={e => setNewEmail(e.target.value)}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Changing...' : 'Change Email'}
            </button>

            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        </form>
    );
}

export default AdminChangeEmail;
