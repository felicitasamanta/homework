const getAlertStyle = () => {
  const alertStyle = (value) => {
    if (value >= 100) {
      return (
        <div className="alert alert-danger" role="alert">
          TALPA PERPILDYTA!!!
        </div>
      );
    } else if (value >= 90) {
      return (
        <div className="alert alert-warning" role="alert">
          Rezervuaro talpa kritiškai pripildyta!!!
        </div>
      );
    } else if (value >= 50) {
      return (
        <div className="alert alert-success" role="alert">
          Rezervuaro talpa kritiškai pripildyta!!!
        </div>
      );
    } else {
      return "";
    }
  };
  return <div>{alertStyle(value)}</div>;
};

export default getAlertStyle;
