import { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setCoins(resp.data);
        setLoading(false);
        // console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "1.8rem",
            fontWeight: "bold",
            marginTop: "6rem",
          }}
        >
          ⏳ waiting...
        </p>
      ) : (
        <Routes>
          <Route path="/" element={<Coins coins={coins} />} />
          <Route path="/coins/:coinId" element={<Coin />}>
            {/* <Route path=":coinId" element={<Coin />} /> */}
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
