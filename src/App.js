import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      DRIFTO
      <br/>
      {navigator.platform}
      <Link to="/drifto-pages/redirect-to-store">View In Store</Link>
    </div>
  );
}

export default App;
