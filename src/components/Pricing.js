import React from "react";
import CountdownTimer from "./CountdownTimer";
import "../styles/pricing.css";

const PricingPage = () => {
  return (
    <div className="pricing" id="pricing">
      <h2>Tour Pricing & Exclusive Offers</h2>
      <p className="pricing-intro">
        Experience the ultimate Big Cats adventure at the best price! 
        Book early and enjoy exclusive discounts.
      </p>

      <div className="pricing-table">
        <div className="pricing-card">
          <h3>Standard Package</h3>
          <p>Ex Nairobi</p>
          <span className="price">USD 1582</span>
        </div>

        <div className="pricing-card">
          <h3>Child Package</h3>
          <p>4-9 years, Ex Nairobi</p>
          <span className="price">USD 1400</span>
        </div>

        <div className="pricing-card special-offer">
          <h3>Independence Day Offer 🎉</h3>
          <p>Book before August 14th</p>
          <span className="price">Adult: USD 1322</span><br/>
          <span className="price">Child: USD 1127</span>

          {/* Countdown Timer */}
          <CountdownTimer targetDate="2025-08-14T23:59:59" />
        </div>
      </div>

      <p className="pricing-note">
        *Price includes accommodation, all meals, safari game drives, and park fees. 
        Flights are not included. 
        <strong>Limited spots available!</strong>
      </p>
    </div>
  );
};

export default PricingPage;
