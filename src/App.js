import { useEffect } from "react";

import Searchbar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";

const App = () => {
  useEffect(() => {
    // initializes materialize JS
    M.AutoInit();
  }, []);
  return (
    <>
      <Searchbar />
      <AddBtn />
      <AddLogModal />
      <EditLogModal />
      <AddTechModal />
      <Logs />
    </>
  );
};

export default App;
