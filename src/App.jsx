import { useEffect, useState } from "react";
import "./App.css";
import { apiRoutes } from "./services/apiRoutes";
import Header from "./components/SideBarHeader/SideBarHeader";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
