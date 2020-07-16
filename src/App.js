import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop.jsx";

function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
      </switch>
    </div>
  );
}

export default App;
