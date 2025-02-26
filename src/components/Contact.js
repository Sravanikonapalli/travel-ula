import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../styles/contact.css";
import { ImCross } from "react-icons/im";
import { MdEmail, MdPhone, MdLocationOn ,MdLocalPhone} from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We will contact you soon.`);
  };

  return (
    <Popup trigger={<button className="contact-btn"  id="contact">Get in Touch</button>} modal nested>
      {(close) => (
        <div className="contact-con">
          <div className="popup-container" id="contact">
            <button className="close-btn" onClick={close}><ImCross size={17} /></button>
            <h2>Contact Us / Ask a Question</h2>
            <p>If you have any questions or need assistance, please fill out the form below.</p>
            
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />

              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />

              <label>Subject:</label>
              <select name="subject" value={formData.subject} onChange={handleChange}>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Ask a Question">Ask a Question</option>
                <option value="Business Inquiry">Business Inquiry</option>
              </select>

              <label>Message:</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required />

              <button type="submit" className="send-msg-btn">Send Message</button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="contact-info">
            <h3><MdLocalPhone/> Contact Information</h3>
            <p><MdEmail /> Email: <a href="mailto:info@yourdomain.com">info@yourdomain.com</a></p>
            <p><MdPhone /> Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
            <p><MdLocationOn /> Location: Nairobi, Kenya</p>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default Contact;
