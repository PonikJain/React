import React from "react";
import "./landing.css";
import NavBar from "./NavBar";
import ShortDetailForm from "./shortDetailForm";

function LandingPage() {
  return (
    <div className="landingPage">
      <NavBar />
      <ShortDetailForm />
    </div>
  );
}

export default LandingPage;
