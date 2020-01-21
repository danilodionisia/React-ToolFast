import React from "react";
import Header from "./components/header";
import Menu from "./components/menu";

import "../src/components/styleCSS/bootstrap.css";
import "../src/components/styleCSS/style.css";





export default function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Menu />
      </div>
    </div>  
  );
}

