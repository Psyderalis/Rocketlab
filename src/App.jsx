import React from "react";
import "./App.styl";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
