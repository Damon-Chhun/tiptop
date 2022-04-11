import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Homepage from "./screens/Home/index";
import Shop from "./screens/Shop/index.jsx";
import Login from "./screens/Login/index.jsx";
import Checkout from "./screens/Checkout/index.jsx";
import Register from "./screens/Register/index.jsx";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div
      style={{
        Height: "100vh",
        width: "100vw",
        overflow: "auto",
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="shop/" element={<Shop />} />
        <Route path="login/" element={<Login />} />
        <Route path="register/" element={<Register />} />
        <Route path="checkout/" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
