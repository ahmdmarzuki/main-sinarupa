import React from "react";
import { Link } from "react-router-dom";
import HomeSection from "../sections/HomeSection";
import AboutSection from "../sections/AboutSection";

const Homepage = () => {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <Link to="/regist">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Register
        </button>
      </Link>
    </div>
  );
};

export default Homepage;
