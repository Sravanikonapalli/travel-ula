import React, { useState } from "react";
import '../styles/TermsConditions.css'

const termsData = [
  {
    title: "Terms & Conditions",
    details: [
      "Costs are based at 4 paxs per vehicle for game drives and 5 per vehicle for internal transfers.",
      "Stay at Mara would be at Zebra plains or Loyk camp or Julia river camp.",
      "Last day to confirm the tour is August 14th, 2023.",
      "Guests should process valid passports with at least 6 months validity from the return date.",
      "Guests should be administered with Yellow fever & Oral polio vaccinations 15 days prior to travel.",
      "Travel Unbounded is not liable for any loss or damage during the tour.",
    ],
  },
  {
    title: "Payment & Cancellation Policy",
    details: [
      "100% of the tour cost is required at the time of booking.",
      "50% refund as credit if canceled 60 days before travel.",
      "No refund if canceled within 30 days of travel dates.",
    ],
  },
  {
    title: "Inclusions",
    details: [
      "Internal transfers from JKIA airport to Maasai Mara and back by Landcruiser.",
      "Stay on a twin-sharing basis.",
      "Game drives in Landcruisers (minimum 4 paxs per vehicle).",
      "Park fees, guide fees, and English-speaking guides/drivers.",
    ],
  },
  {
    title: "Exclusions",
    details: [
      "Airfare or VISA charges.",
      "Personal and medical expenses.",
      "Tips and gratitude.",
      "Anything other than mentioned in the Inclusions section.",
    ],
  },
];

const TermsAndConditions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="terms">
      <h2>Terms & Policies</h2>
      <div className="accordion">
        {termsData.map((item, index) => (
          <div
            key={index}
            className={`accordion-item ${openIndex === index ? "active" : ""}`}
          >
            <h3 onClick={() => toggleAccordion(index)}>{item.title}</h3><hr/>
            <div className="accordion-content">
              <ul>
                {item.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TermsAndConditions;
