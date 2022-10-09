import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      DRIFTO
      <br/>
      <Link to="/redirect-to-store">View In Store</Link>
    </div>
  );
}

export default App;
