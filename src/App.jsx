import { useEffect, useState } from "react";
import "./App.css";
import { apiRoutes } from "./services/apiRoutes";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  const getData = async () => {
    const res = await apiRoutes.getTx();

    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
