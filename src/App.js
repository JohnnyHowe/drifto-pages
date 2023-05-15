import './App.css';
import { Link } from "react-router-dom";
import React  from 'react';


function App() {
  return (
    <div className="App">
      DRIFTO
      <br/>
      <Link to="/redirect-to-store">View In Store</Link>
      <br/>
      <Link to="/score-reset-explanation">Why Have Scores Been Reset? (May 2023)</Link>
    </div>
  );
}

export default App;
