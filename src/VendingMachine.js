import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <div>
        <h1>Hello! I am your favorite Vending Machine</h1>
      </div>

      <div className="VendingMachine-items">
        <Link to="/soda">Soda</Link>
        <Link to="/chips">Chips</Link>
        <Link to="/coffee">Coffee</Link>
      </div>
    </div>
  );
};

export default VendingMachine;
