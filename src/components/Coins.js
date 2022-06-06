import "./Coins.css";
import CoinItem from "./CoinItem";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";

const Coins = ({ coins }) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24H</p>
          <p className="hide-mobile">Valume</p>
          <p className="hide-mobile">Mkt Caps</p>
        </div>

        {coins.map((coin) => {
          return (
            <Link to={`/coins/${coin.id}`} element={<Coin />} key={coin.id}>
              <CoinItem coins={coin} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
