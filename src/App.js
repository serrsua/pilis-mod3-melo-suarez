import React from "react";
import datos from "./data";
import Navbar from "./routes/Navbar/Navbar";
import Home from "./routes/Home/Home";
import Newcard from "./routes/NewCard/NewCard";
import { useContext } from "react";
import { CardContext } from "./contexts/CardContext";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

function App() {
  const { setCards } = useContext(CardContext);

  useEffect(() => {
    setCards(datos);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={<Navbar title={"Ciudades del mundo"} />}>
            <Route index element={<Home />} />
            <Route path="/New-Card" element={<Newcard />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
