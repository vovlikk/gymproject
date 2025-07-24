import { useState } from "react";

function AdminDeleteUsers() {
    const [deleteEmail, setDeleteEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleDelete() {
        setLoading(true);
        setError(null);

        const info = { Email: deleteEmail };

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("You need authorization");
            }

            const response = await fetch('https://your-api.com/admin/delete-user', {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(info)
            });

            if (!response.ok) {
                throw new Error("Failed to delete user");
            }

            alert("User deleted successfully!");
            setDeleteEmail('');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <input
                type="email"
                placeholder="Enter user email to delete"
                value={deleteEmail}
                onChange={e => setDeleteEmail(e.target.value)}
                required
            />
            <button onClick={handleDelete} disabled={loading}>
                {loading ? 'Deleting...' : 'Delete User'}
            </button>
            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        </div>
    );
}

export default AdminDeleteUsers;
