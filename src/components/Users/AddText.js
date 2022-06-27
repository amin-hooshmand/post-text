import classes from "./AddText.module.css";

const AddText = (props) => {
  return (
    <ul className={classes.ul}>
      {props.texts.map((user) => (
        <li key={user.id} className={classes.li}>
          <p>Name : {user.name}</p>
          <p>Email : {user.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default AddText;
