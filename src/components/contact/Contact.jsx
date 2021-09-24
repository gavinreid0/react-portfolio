import { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="contactLeft">
        <img className="shakeImg" src="assets/shake.svg" alt="" />
      </div>
      <div className="contactRight">
        <h2 className="contactH2">Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span className="contactSpan">Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}