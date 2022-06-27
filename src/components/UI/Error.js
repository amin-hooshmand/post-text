const Error = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <button onClick={props.confirm}>OK</button>
    </div>
  );
};

export default Error;
