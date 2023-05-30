import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Coffee = () => {
  return (
    <div className="Chips">
      <div className="Chips-items">
        <h3>Time for caffeine!</h3>
        <Link to="/">Go Back!</Link>
      </div>
      <img src="https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1600" />
    </div>
  );
};

export default Coffee;
