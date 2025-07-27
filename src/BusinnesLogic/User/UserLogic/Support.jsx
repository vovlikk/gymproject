import React, { useState } from "react";
import "../UserPagesCss/Support.css";

function Support({ onClose }) {
  
  const [description, setDescrip] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  async function HandlerMessage() {
    setloading(true);
    seterror(null);
    const sms = {  Description: description };

    try {
      const response = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sms),
      });

      if (!response.ok) {
        const responseError = await response.json().catch(() => null);
        throw new Error(responseError?.status || "Failed to send");
      }

      alert("Successful");
    } catch (err) {
      seterror(err.message || "Fail to send");
    } finally {
      setloading(false);
      setDescrip("");
      
    }
  }

  return (
    <div className="support-overlay" onClick={onClose}>
      <div className="support-form" onClick={(e) => e.stopPropagation()}>
        <div className="support-header">
          <h1>Support Form</h1>
        </div>

        <div className="support-body">
          
          <input
            className="input-description"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescrip(e.target.value)}
          />
        </div>

        <button className="support-button-btn" onClick={HandlerMessage}>
          Send
        </button>

        {loading && <div>Loading...</div>}
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </div>
  );
}

export default Support;
