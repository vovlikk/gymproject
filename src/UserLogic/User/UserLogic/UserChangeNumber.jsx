import { useState } from "react";
import '../UserLogic.css/UserChangeNumber.css'

function ChangeUserNumber() {
  const [newNumber, setNewNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleChangeNumber(e) {
    e.preventDefault(); 
    setLoading(true);
    setError(null);

    const info = { NewNumber: newNumber };

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('You need authorization');
      }

      const response = await fetch('https://420e3a2fdda3.ngrok-free.app/api/User/change-number', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(info)
      });

      if (!response.ok) {
        throw new Error("Failed to change number");
      }

      alert("Number was successfully changed");
      setNewNumber('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleChangeNumber} className="user-phone-form">
  <input
    type="text"
    className="user-phone-input"
    placeholder="Enter Your New Number"
    value={newNumber}
    onChange={e => setNewNumber(e.target.value)}
  />
  <button type="submit" disabled={loading} className="user-phone-submit">
    {loading ? 'Changing...' : 'Change Number'}
  </button>

  {error && <div className="user-phone-error">{error}</div>}
</form>
  );
}

export default ChangeUserNumber;
