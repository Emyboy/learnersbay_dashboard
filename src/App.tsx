import React from "react";
import "./App.css";
import MainAppRoute from "./routes/MainAppRoute";
import Providers from "./routes/Providers";

function App() {
  return (
      <Providers>
          <MainAppRoute />
      </Providers>
  );
}

export default App;
