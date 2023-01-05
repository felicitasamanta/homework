import { useState } from "react";
import "./style.css";

function Form() {
  const [talpa, setTalpa] = useState("");
  const [greitis, setGreitis] = useState("");
  const [trukme, setTrukme] = useState("");
  const [result, setResult] = useState("");
  const [isActive, setIsActive] = useState(false);

  const skaiciuotiHandler = () => {
    setIsActive((current) => !current);
    setResult(((trukme * greitis) / talpa) * 100);
    setTalpa("");
    setGreitis("");
    setTrukme("");
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
  function getAlertStyle(value) {
    if (value >= 100) {
      return "alert-danger";
    } else if (value >= 90) {
      return "alert-secondary";
    } else if (value >= 80) {
      return "alert-success";
    } else {
      return "";
    }
  }

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
      {/* //kaip paslepti div teksta, kol dar nera atspausdinta? */}
      <div class={`alert alert-primary d-flex fs-6`}>
        <p className={isActive ? "" : "hide"}>
          {" "}
          Rezervuaras bus pripildytas {result}%
        </p>
      </div>
      
    </div>
  );
}
export default Form;
{
  /* <div class={`alert ${getAlertStyle(result)} alert-primary d-flex fs-6`}>
<p className={isActive ? "" : "hide"}>
  {" "}
  Rezervuaras bus pripildytas {result}%
</p>
</div> */
}
