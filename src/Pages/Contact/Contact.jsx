import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

// npm i @emailjs/browser

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_10buwa9", "template_xd06lzh", form.current, {
        publicKey: "Fj_Vfl0DB7VKQ2JBb",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("Message sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <img src="https://content.r9cdn.net/rimg/dimg/ec/98/1f42d427-city-47172-16e6d8b1812.jpg?crop=true&width=1366&height=768&xhint=793&yhint=1492" />
      <form ref={form} onSubmit={sendEmail}>
        <div className="contact-overview">
          <label>Name:</label>
          <input className="name" type="text" name="from_name" />
          <label>Email:</label>
          <input className="email" type="email" name="user_email" />
          <label>Message:</label>
          <textarea className="message" name="message" />
          <input className="submit" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
