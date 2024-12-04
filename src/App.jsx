import { useEffect, useState } from "react";
import "./App.css";
import { apiRoutes } from "./services/apiRoutes";
import Header from "./components/SideBarHeader/SideBarHeader";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  const getData = async () => {
    const res = await apiRoutes.getArtists();

    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
