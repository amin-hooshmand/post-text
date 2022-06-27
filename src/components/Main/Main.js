import React, { useState } from "react";
import classes from "./Main.module.css";

const Main = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlerName = (event) => {
    setName(event.target.value);
  };
  const handlerEmail = (event) => {
    setEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!name || !email) {
      return;
    }
    props.onAddText(name, email);
  };

  return (
    <form onClick={submitHandler} dir="rtl" className={classes.main}>
      <div className={classes.div}>
        <label className={classes.label}>اسم خود را وارد کنید :</label>
        <input
          dir="rtl"
          type="text"
          placeholder="اسم"
          className={classes.input}
          onChange={handlerName}
        />
      </div>

      <div className={classes.div}>
        <label className={classes.label}>ایمیل خود را وارد کنید</label>
        <input
          dir="rtl"
          type="email"
          placeholder="ایمیل"
          className={classes.input}
          onChange={handlerEmail}
        />
      </div>
      <button>Click</button>
    </form>
  );
};

export default Main;
