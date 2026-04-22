import React from "react";
import axios from "axios";
const CryptoList = () => {
  const [crypto, setCrypto] = React.useState([]);
  const fetchCrypto = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
      );
      setCrypto(response?.data || []);
    } catch (e) {
      console.error("Error fetching crypto data", e);
    }
  };
  React.useEffect(() => {
    fetchCrypto();
  }, []);
  if (!crypto.length) return <div>Loading...</div>;
  return (
    <div>
      {crypto.slice(0, 10).map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            borderBottom: "1px solid #eee",
          }}
        >
          <div style={{ marginRight: "6px" }}>
            <img
              src={item.image}
              alt="sysmbol"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <span style={{ marginRight: "auto" }}>{item.name}</span>
          <span>{item.current_price}</span>
        </div>
      ))}
    </div>
  );
};

export default CryptoList;
