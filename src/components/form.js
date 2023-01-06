import { useState } from "react";
import "./style.css";

function Form() {
  const [talpa, setTalpa] = useState("");
  const [greitis, setGreitis] = useState("");
  const [trukme, setTrukme] = useState("");
  const [result, setResult] = useState("");

  const skaiciuotiHandler = () => {
    setResult(((trukme * greitis) / talpa) * 100);
    setTalpa("");
    setGreitis("");
    setTrukme("");

    getAlertStyle(result);
  };

  const changeTalpaHandler = (event) => {
    console.log(event.target.value);
    setTalpa(event.target.value);
  };
  const changeGreitisHandler = (event) => {
    setGreitis(event.target.value);
  };
  const changeTrukmeHandler = (event) => {
    setTrukme(event.target.value);
  };
  const getAlertStyle = (value) => {
    if (value >= 100) {
      return (
        <div class="alert alert-danger" role="alert">
          TALPA PERPILDYTA!!!
        </div>
      );
    } else if (value >= 90) {
      return (
        <div class="alert alert-warning" role="alert">
          Rezervuaro talpa kritiškai pripildyta!!!
        </div>
      );
    } else if (value >= 50) {
      return (
        <div class="alert alert-success" role="alert">
          Rezervuaro talpa kritiškai pripildyta!!!
        </div>
      );
    } else {
      return "";
    }
  };

  return (
    <div className="card bg-primary bg-opacity-25">
      <div className="card-header bg-primary bg-opacity-50 mb-3 fs-1 text-center">
        Lietaus rezervuaro užpildymas
      </div>
      <div className="card-body">
        <form className="p-3">
          <div class="mb-3">
            <label for="talpa" class="form-label fs-6">
              Rezervuaro talpa (l)
            </label>
            <input
              type="number"
              class="form-control"
              id="talpa"
              value={talpa}
              onChange={changeTalpaHandler}
              placeholder="0"
            />
          </div>
          <div class="mb-3">
            <label for="greitis" class="form-label fs-6">
              Rezervuaro pildymo greitis (l/h){" "}
            </label>
            <input
              type="number"
              class="form-control"
              id="greitis"
              value={greitis}
              onChange={changeGreitisHandler}
              placeholder="0"
            />
          </div>
          <div class="mb-3">
            <label for="trukme" class="form-label fs-6">
              Laikas, kiek rezervuaras bus pildomas (val.)
            </label>
            <input
              type="number"
              class="form-control"
              id="trukme"
              value={trukme}
              onChange={changeTrukmeHandler}
              placeholder="0"
            />
          </div>

          <button
            type="button"
            class="btn btn-primary d-flex m-auto"
            onClick={skaiciuotiHandler}
          >
            Skaičiuoti
          </button>
        </form>
      </div>

      <div class={`alert alert-primary d-flex fs-6`}>
        <p className={result ? "" : "hide"}>
          {" "}
          Rezervuaras bus pripildytas {result}%
        </p>
      </div>
      <div>{getAlertStyle(result)}</div>
    </div>
  );
}
export default Form;
