import Header from "./components/Header/Header";
import "./App.css";
import Main from "./components/Main/Main";
import AddUser from "./components/Users/AddText";
import { useState } from "react";

function App() {

  const [text,setText] = useState([]);

  const handlerText = () => {}

  return (
    <div className="App">
      <Header />
      <Main onAddText={}/>
      <AddUser  />
    </div>
  );
}

export default App;
