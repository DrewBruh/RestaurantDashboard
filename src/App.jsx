import { useState } from "react";
import FoodContainer from "./foodCategory";
import Header from "./header";
import "./App.css";
import "./index.css";
function App() {
  return (
    <>
      <Header />

      <div>
        {" "}
        <FoodContainer />
      </div>
    </>
  );
}

export default App;
