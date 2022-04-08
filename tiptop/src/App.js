import { Routes, Route } from "react-router-dom";
import Homepage from "./screens/Home/index";
import Shop from "./screens/Shop/index.jsx";
import Login from "./screens/Login/index.jsx";
import Checkout from "./screens/Checkout/index.jsx";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="login/" element={<Login />} />
        <Route path="checkout/" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
