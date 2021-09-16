import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Home from "./containers/Home";

import "./main.scss";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []) 

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
