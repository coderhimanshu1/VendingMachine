import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Chips = () => {
  return (
    <div className="Chips">
      <div className="Chips-items">
        <h3>Lets Go Snacking!</h3>
        <Link to="/">Go Back!</Link>
      </div>
      <img src="https://images.pexels.com/photos/4061441/pexels-photo-4061441.jpeg?auto=compress&cs=tinysrgb&w=1600" />
    </div>
  );
};

export default Chips;
