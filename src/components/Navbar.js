import "./Navbar.css";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import Coins from "./Coins";

const Navbar = () => {
  return (
    <>
      <Link to="/" element={<Coins />}>
        <div className="navbar">
          <FaCoins className="icon" />
          <h1>
            siPaling <span className="purple">Crypto</span>
          </h1>
        </div>
      </Link>
    </>
  );
};

export default Navbar;
