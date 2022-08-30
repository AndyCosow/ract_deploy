import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const remoteIp = "159.89.8.148"

function App() {

  const [num, setNum] = useState(0)

  const getData = async () => {

    const res = await fetch(`http://${remoteIp}:8000/info`)
    const data = await res.json()

    setNum(data.number)

    console.log(data)
  }

  return (
    <div className="App">

      <h1>Random number: {num}</h1>

      <button onClick={getData}>Get Data</button>
    </div>
  );
}

export default App;
