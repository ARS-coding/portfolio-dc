import React, { useEffect } from "react";
import { init } from "@emailjs/browser";

import Home from "./containers/Home";

import "./main.scss";

function App() {

  useEffect(() => {
    init("user_ncL4KB6QtdpEjNWiPhlWR");
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
