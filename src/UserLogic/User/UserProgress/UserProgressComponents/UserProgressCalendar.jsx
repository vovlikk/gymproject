import { useState, useEffect } from 'react';
import '../UserProgress.css/UserProgressCalendar.css';
import Calendar from 'react-calendar';

function UserProgressCalendar({ onClose }) {
  const [date, setDate] = useState(new Date());
  const [events, setEvent] = useState([]);
  const [type, setType] = useState('');
  const [note, setNote] = useState('');

  const API_URL = 'https://de29e0967a1c.ngrok-free.app/api/UserCalendarEvents';

  useEffect(() => {
    const fetchMonth = async () => {
      try {
        const month = date.toISOString().slice(0, 7);
        const response = await fetch(`${API_URL}/${month}`);

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Invalid response format");
        }

        const data = await response.json();
        setEvent(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMonth();
  }, [date]);

  const createInfo = async (date, type, note) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${API_URL}/add-progress`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          date: date.toISOString().slice(0, 10), // "yyyy-mm-dd"
          type,
          note
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send data");
      }

      alert('Successfully Added');
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createInfo(date, type, note);
    setType('');
    setNote('');

    try {
      const month = date.toISOString().slice(0, 7);
      const res = await fetch(`${API_URL}/${month}`);
      const data = await res.json();
      setEvent(data);
    } catch (err) {
      console.error("Error updating events after submit", err);
    }
  };

  return (
    <div className="user-progress-calendar-overlay" onClick={onClose}>
      <div className="user-progress-calendar-sections" onClick={(e) => e.stopPropagation()}>
        <div className="user-progress-calendar">
          <Calendar
            value={date}
            onChange={setDate}
            tileContent={({ date }) => {
            const day = date.toLocaleDateString('sv-SE');
            console.log("🔍 checking day:", day);
            console.log("💾 all events:", events);

            const check = events.find(e => e.dateTime === day);
            return check ? <span>💪</span> : null;
             }}

          />
          <p>Selected: {date.toDateString()}</p>
        </div>

        <div className="user-progress-calendar-change-info">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type of Train"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
            <textarea
              placeholder="Note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              required
            />
            <button type="submit">Add event</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserProgressCalendar;
