import React from "react";

const CryptoList = () => {
  const crypto = [
    { name: "Bitcoin", price: "$67,000" },
    { name: "Ethereum", price: "$3,200" },
    { name: "Solana", price: "$120" }
  ];

  return (
    <div>
      {crypto.map((item, index) => (
        <div key={index} style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          borderBottom: "1px solid #eee"
        }}>
          <span>{item.name}</span>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
  );
};

export default CryptoList;