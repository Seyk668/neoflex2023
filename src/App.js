import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppContext from "./AppContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Drawer from "./Drawer/Drawer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <AppContext.Provider value={{ cartItems }}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/drawer" element={<Drawer />}></Route>
      </Routes>
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
