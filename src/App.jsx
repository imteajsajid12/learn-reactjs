import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card.jsx";
import Backgraound from "./components/Backgraound.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     
    <Backgraound />
      
    </>
  );
}

export default App;
