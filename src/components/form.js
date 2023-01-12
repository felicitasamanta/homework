import "./style.css";
import Input from "./input";
import Progress from "./progress";
import { useState } from "react";
import Result from "./result";
const Form = () => {
  const updateData = (data) => {
    console.log("Duomenys skaičiuojami");
    console.log(data);
  };
  const [result, setResult] = useState("");

  return (
    <div>
      <div className={`alert alert-primary d-flex fs-6`}>
        <div>
          <Input onUpdateData={updateData} />
        </div>
        {/* <p className={result ? "" : "hide"}>
          {" "}
          Rezervuaras bus pripildytas {result}%
        </p> */}
      </div>
      <div>
        {" "}
        <Result result={result} />
      </div>

      <div>
        {" "}
        <Progress className="" />
      </div>
    </div>
  );
};
export default Form;
