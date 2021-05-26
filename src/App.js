import logo from './logo.svg';
import './App.css';
import Heatmap from './heatmap'
import ApexChart from "./ApexChart";
import ApexChart2 from "./ApexChart2";

function App() {
  return (
    <div className="App">
      <h2>Risk Heatmap Test</h2>
      <ApexChart/>
      <h2>Apex Risk Heatmap Test2</h2>
      <ApexChart2/>
      <h2>Risk Heatmap Test2</h2>
      <Heatmap/>
    </div>
  );
}

export default App;
