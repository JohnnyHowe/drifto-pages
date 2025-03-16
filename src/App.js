import './App.css';
import { Link } from "react-router-dom";
import React from 'react';


function App() {
  return (
    <div className="App">
      DRIFTO
      <br />
      <Link to="/redirect-to-store">View In Store</Link>
      <br />
      <a href="https://johnnyhowe.github.io/drifto-pages/privacy-policy.html">Privacy Policy</a>
    </div>
  );
}

export default App;
