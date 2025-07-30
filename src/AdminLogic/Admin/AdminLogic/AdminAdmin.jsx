import { useState } from "react";
import '../AdminLogic.css/AdminAdmin.css'

function AddRole() {
  const [roleUserName, setRoleUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleAddRole(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const info = { UserName: roleUserName };

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("You need authorization!");
      }

      const response = await fetch('', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(info)
      });

      if (!response.ok) {
        throw new Error("Failed to add role");
      }

      alert("Role successfully added!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
     <div className="give-role-container">
        <div className="give-role-title">

      <h3>Give Role</h3>
        </div>
      <form className="give-role-form" onSubmit={handleAddRole}>
        <input
          type="email"
          className="give-role-input"
          placeholder="Enter email"
          value={roleUserName}
          onChange={e => setRoleUser(e.target.value)}
          required
        />
        <button className="give-role-button" type="submit" disabled={loading}>
          {loading ? "Processing..." : "Give Role"}
        </button>
      </form>
      {error && <div className="give-role-error">{error}</div>}
    </div>
  );
}

export default AddRole;
