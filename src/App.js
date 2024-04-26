import React, { useEffect } from "react";
import { init } from "@emailjs/browser";

import Home from "./containers/Home";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./main.css";

export default function App() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    init("user_ncL4KB6QtdpEjNWiPhlWR");
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}
