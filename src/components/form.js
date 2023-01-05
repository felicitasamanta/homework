import { useState } from "react";

function Form() {
  const [talpa, setTalpa] = useState('');
  const [greitis, setGreitis] = useState('');
  const [trukme, setTrukme] = useState('');
  const [result, setResult] = useState('');

  const skaiciuotiHandler = () => {
    setResult(((trukme * greitis) / talpa) * 100);
    setTalpa('');
    setGreitis('');
    setTrukme('');
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

  return (
    <div className="card bg-primary bg-opacity-25">
      <div className="card-header bg-primary bg-opacity-50 mb-5 fs-1 text-center">
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
            />
          </div>
          <div class="mb-3">
            <label for="trukme" class="form-label ">
              Laikas, kiek rezervuaras bus pildomas (val.)
            </label>
            <input
              type="number"
              class="form-control"
              id="trukme"
              value={trukme}
              onChange={changeTrukmeHandler}
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

      <div>{result} procentų</div>
    </div>
  );
}
export default Form;
