import "./App.css";
import CryptoList from "./components/CryptoList";
import PriceList from "./components/PriceList";
function App() {
  return (
    <div style={{padding:'20px'}}>
      <h1>Crypto Tracker</h1>
      <CryptoList />
      <PriceList />
    </div>
  );
}

export default App;
