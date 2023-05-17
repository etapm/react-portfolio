import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your name" name="name" />
        <input type="email" placeholder="Your email" name="email" />
        <textarea placeholder="Your message" name="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
