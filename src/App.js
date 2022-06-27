import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AddText from "./components/Users/AddText";
import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState([]);

  const addUserHandler = (sName, sEmail) => {
    setText((prevTexts) => {
      return [...prevTexts, { name: sName, email: sEmail, id: Math.random() }];
    });
  };

  return (
    <div className="App">
      <Header />
      <Main onAddText={addUserHandler} />
      <AddText texts={text} />
    </div>
  );
}

export default App;
