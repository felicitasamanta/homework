const Result = (props) => {
  return (
    <div className={props.result ? "" : "hide"}>
      <div className="card bg-primary mb-3">
        <p className={props.result ? "" : "hide"}>
          {" "}
          Rezervuaras bus pripildytas {props.result}%
        </p>{" "}
      </div>
    </div>
  );
};
export default Result;
