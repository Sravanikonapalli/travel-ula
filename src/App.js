import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Itinerary from "./components/Itinerary";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import TermsAndConditions from "./components/TermsAndConditions";
function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Contact />
      <TermsAndConditions/>
      <Footer />
    </div>
  );
}

export default App;