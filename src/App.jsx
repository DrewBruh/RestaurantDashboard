import { useState } from "react";
import FoodContainer from "./Pages/foodCategory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/header";
import CheckoutPage from "./Pages/CheckoutPage";
import "./App.css";
import "./index.css";
import FoodCategory from "./Pages/foodCategory";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FoodCategory />} />
            <Route path="/checkout" element={<CheckoutPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
