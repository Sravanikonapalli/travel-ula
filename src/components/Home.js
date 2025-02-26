import React, { useState } from "react";
import "../styles/Home.css";
import Itinerary from "./Itinerary";
import Gallery from "./Gallery";
import Pricing from "./Pricing";
import { IoMdArrowDropup ,IoMdArrowDropdown } from "react-icons/io";

// Testimonials Data
const testimonials = [
  { name: "John Doe", text: "An unforgettable experience! Highly recommended." },
  { name: "Sarah Lee", text: "Loved every moment. The guides were fantastic!" },
  { name: "Mike Ross", text: "A must-do adventure for nature lovers!" },
];

// FAQs Data
const faqs = [
  { question: "What is included in the safari package?", answer: "The package includes accommodation, game drives, meals, and expert guides." },
  { question: "How do I book a safari?", answer: "You can book online via our website or call our support team." },
  { question: "What should I bring for the safari?", answer: "Comfortable clothing, a camera, binoculars, and sunscreen are recommended." },
];

const Home = () => {
  const [openFAQs, setOpenFAQs] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    travelers: "",
    date: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation Confirmed!\nName: ${formData.name}\nEmail: ${formData.email}\nTravelers: ${formData.travelers}\nDate: ${formData.date}`);
    setPopupOpen(false); 
    setFormData({ name: "", email: "", travelers: "", date: "" }); 
  };

  const toggleFAQ = (index) => {
    setOpenFAQs((prevOpenFAQs) =>
      prevOpenFAQs.includes(index)
        ? prevOpenFAQs.filter((item) => item !== index) 
        : [...prevOpenFAQs, index] 
    );
  };

  return (
    <div className="home-container" id="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Big Cats Week at Maasai Mara - Diwali 2023 Special</h1>
        <p>Experience the beauty of the Maasai Mara with breathtaking landscapes and stunning wildlife encounters.</p>
        <button className="cta-button" onClick={() => setPopupOpen(true)}>Reserve Your Spot</button>
      </section>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Book Your Adventure</h2>
            <form onSubmit={handleSubmit} className="booking-form">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} required />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required />
              <input type="number" name="travelers" placeholder="Number of Travelers" value={formData.travelers} onChange={handleInputChange} required />
              <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
              <button type="submit">Confirm Booking</button>
            </form>
            <button className="close-btn" onClick={() => setPopupOpen(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Highlights Section */}
      <section className="highlights">
        <h2>Why Choose Our Safari?</h2>
        <div className="highlight-grid">
          <div className="highlight">
            <img src="https://images.squarespace-cdn.com/content/v1/63e22004ef1164133262fab0/d992f8e4-218b-44b5-859a-a836d1e20143/Kenya-Bateleur-Camp-Guest-Delight-Romantic-dining-at-sunset+%282%29.jpg" alt="Luxury Stay" />
            <h3>Luxury Stay</h3>
            <p>Enjoy top-notch accommodation at Zebra Plains, Loyk Camp, or Julia River Camp.</p>
          </div>
          <div className="highlight">
            <img src="https://maramasai.com/wp-content/uploads/2023/02/game-drivek-1024x608.jpg" alt="Game Drives" />
            <h3>Exciting Game Drives</h3>
            <p>Explore the vast plains with experienced Maasai guides in 4x4 Landcruisers.</p>
          </div>
          <div className="highlight">
            <img src="https://t4.ftcdn.net/jpg/06/15/30/45/360_F_615304573_j4GC15EObFWa8YPmiKFmpd9chfOPh5fB.jpg" alt="Scenic Beauty" />
            <h3>Scenic Beauty</h3>
            <p>Witness stunning sunrises and sunsets across the lush green Mara plains.</p>
          </div>
        </div>
      </section>
<Itinerary/>
<Gallery/>
      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Guests Say</h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </section>
<Pricing/>
      {/* FAQs Section */}
      <section className="faqs" id="faqs">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span>{openFAQs.includes(index) ? <IoMdArrowDropup size={25}/>: <IoMdArrowDropdown size={25}/>}</span>
            </div>
            {openFAQs.includes(index) && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
