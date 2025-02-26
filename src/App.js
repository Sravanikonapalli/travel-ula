import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import TermsAndConditions from "./components/TermsAndConditions";
const App=()=>{
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