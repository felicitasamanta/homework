const Progress = (props) => {
  const progressCss = {
    width: props.result + "%",
  };
  return (
    <div className="progress text-center fs-5 mb-3" style={{ height: "30px" }}>
      <div
        className="progress-bar-striped bg-success"
        role="progressbar"
        aria-label="Success example"
        style={progressCss}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <p className={props.result ? "" : "hide"}> {props.result}%</p>
      </div>
    </div>
  );
};
export default Progress;
