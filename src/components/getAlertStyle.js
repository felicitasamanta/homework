const GetAlertStyle = (props) => {
  const alertStyle = (value) => {
    if (props.result >= 100) {
      return (
        <div className="alert alert-danger" role="alert">
          TALPA PERPILDYTA!!!
        </div>
      );
    } else if (props.result >= 90) {
      return (
        <div className="alert alert-warning" role="alert">
          Rezervuaro talpa kritiškai pripildyta!!!
        </div>
      );
    } else if (props.result >= 50) {
      return (
        <div className="alert alert-success" role="alert">
          Rezervuaro talpa kritiškai pripildyta!!!
        </div>
      );
    } else {
      return "";
    }
  };
  return <div>{alertStyle(props.result)}</div>;
};

export default GetAlertStyle;
