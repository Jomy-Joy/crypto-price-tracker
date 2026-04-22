import axios from "axios";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
function PriceList() {
  const [data, setData] = React.useState([]);
  const [days, setDays] = React.useState(7);

  React.useEffect(() => {
    fetchChartData();
  }, [days]);
  const fetchChartData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7",
      );
      const chartData = response?.data?.prices.map((item) => ({
        time: new Date(item[0]).toLocaleDateString(),
        price: item[1],
      }));
      setData(chartData || []);
      console.log(chartData, "resp");
    } catch (e) {
      console.log(e, "error in fetching chart data");
    }
  };
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button onClick={() => setDays(1)}>1D</button>
        <button onClick={() => setDays(7)}>7D</button>
        <button onClick={() => setDays(30)}>1M</button>
        <button onClick={() => setDays(365)}>1Y</button>
      </div>
      <ResponsiveContainer>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <LineChart data={data}>
          <XAxis dataKey="time" hide />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              background: "#fff",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 6,
              stroke: "3b82f6",
              strokeWidth: 2,
              fill: "#fff",
            }}
            filter="url(#glow"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PriceList;
