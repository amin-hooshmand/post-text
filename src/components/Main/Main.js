import React, { useState } from "react";
import Error from "../UI/Error";
import classes from "./Main.module.css";

const Main = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
  const [visivble, setVisivble] = useState(false);

  const handlerName = (event) => {
    setName(event.target.value);
  };

  const handlerEmail = (event) => {
    setEmail(event.target.value);
    return;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || email.trim().length === 0) {
      setError({ title: "Error", message: "Name or Email is Empty" });
      setVisivble(true);
      return;
    }

    props.onAddText(name, email);
    setName("");
    setEmail("");
  };

  const Empty = () => {
    setVisivble(false);
  };

  return (
    <>
      <form onClick={submitHandler} dir="rtl" className={classes.main}>
        <div className={classes.div}>
          <label className={classes.label}>اسم خود را وارد کنید :</label>
          <input
            dir="rtl"
            type="text"
            placeholder="اسم"
            className={classes.input}
            value={name}
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
            value={email}
            onChange={handlerEmail}
          />
        </div>
        <button className={classes.button}>Click</button>
      </form>
    </>
  );
};

export default Main;
