import { useState } from "react";
const Input = (props) => {
  let init = {
    talpa: "",
    greitis: "",
    trukme: "",
  };
  const [skData, setSkData] = useState(init);
  // const [result, setResult] = useState("");

  const skaiciuotiHandler = (event) => {
    event.preventDefault();
    props.onUpdateData(skData);
    // setResult(((skData.talpa * skData.greitis) / skData.talpa) * 100);
    setSkData({
      talpa: "",
      greitis: "",
      trukme: "",
    });
    // getAlertStyle(result);
  };

  const changeTalpaHandler = (event) => {
    setSkData({
      ...skData,
      talpa: event.target.value,
    });
  };
  const changeGreitisHandler = (event) => {
    setSkData({
      ...skData,
      greitis: event.target.value,
    });
  };
  const changeTrukmeHandler = (event) => {
    setSkData({
      ...skData,
      trukme: event.target.value,
    });
  };

  return (
    <div className="card bg-primary bg-opacity-25">
      <div className="card-header bg-primary bg-opacity-50 mb-3 fs-1 text-center">
        Lietaus rezervuaro užpildymas
      </div>
      <div className="card-body">
        <form className="p-3" onSubmit={skaiciuotiHandler}>
          <div className="mb-3">
            <label for="talpa" className="form-label fs-6">
              Rezervuaro talpa (l)
            </label>
            <input
              type="number"
              className="form-control"
              id="talpa"
              value={skData.talpa}
              onChange={changeTalpaHandler}
              placeholder="0"
            />
          </div>
          <div className="mb-3">
            <label for="greitis" className="form-label fs-6">
              Rezervuaro pildymo greitis (l/h){" "}
            </label>
            <input
              type="number"
              className="form-control"
              id="greitis"
              value={skData.greitis}
              onChange={changeGreitisHandler}
              placeholder="0"
            />
          </div>
          <div className="mb-3">
            <label for="trukme" className="form-label fs-6">
              Laikas, kiek rezervuaras bus pildomas (val.)
            </label>
            <input
              type="number"
              className="form-control"
              id="trukme"
              value={skData.trukme}
              onChange={changeTrukmeHandler}
              placeholder="0"
            />
          </div>

          <button type="submit" className="btn btn-primary d-flex m-auto">
            Skaičiuoti
          </button>
        </form>
      </div>
    </div>
  );
};
export default Input;
