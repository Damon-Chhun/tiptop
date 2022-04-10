import { useEffect } from "react";
import { getShopData } from "./store/shop/shop";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Homepage from "./screens/Home/index";
import Shop from "./screens/Shop/index.jsx";
import Login from "./screens/Login/index.jsx";
import Checkout from "./screens/Checkout/index.jsx";
import Register from "./screens/Register/index.jsx";

import NavBar from "./components/NavBar";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShopData());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="login/" element={<Login />} />
        <Route path="register/" element={<Register />} />
        <Route path="checkout/" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
