import logo from './logo.svg';
import './App.css';
import {deviceOS} from './helpers/deviceHelper';

function App() {
  return (
    <div className="App">
      DRIFTO
      <br/>
      Ur on a {deviceOS()}
      <br/>
      {navigator.platform}
    </div>
  );
}

export default App;
