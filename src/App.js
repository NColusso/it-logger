import { useEffect } from "react";

import Searchbar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // initializes materialize JS
    M.AutoInit();
  }, []);
  return (
    <>
      <Searchbar />
      <Logs />
    </>
  );
};

export default App;
