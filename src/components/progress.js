import Form from "./form";
const Progress = () => {
  const progressCss = {
    width: Form.result + "%",
  };
  return (
    <div className="progress">
      <div
        className="progress-bar-striped bg-success"
        role="progressbar"
        aria-label="Success example"
        style={progressCss}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};
export default Progress;