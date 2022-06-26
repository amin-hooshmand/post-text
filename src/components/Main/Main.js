import classes from "./Main.module.css";

const Main = () => {
  return (
    <form className={classes.main}>
      <div>
        <label className={classes.label}>اسم خود را وارد کنید</label>
        <input type="text" className={classes.input} />
      </div>

      <div>
        <label className={classes.label}>ایمیل خود را وارد کنید</label>
        <input type="email" className={classes.input} />
      </div>
    </form>
  );
};

export default Main;
