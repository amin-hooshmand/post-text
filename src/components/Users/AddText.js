import classes from "./AddText.module.css";

const AddText = (props) => {
  return (
    <ul className={classes.add}>
      {props.texts.map((user) => (
        <li key={user.id}>
          {user.name} {user.email}
        </li>
      ))}
    </ul>
  );
};

export default AddText;
