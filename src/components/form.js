import "./style.css";
import Input from "./input";
import Progress from "./progress";
import { useState } from "react";
import Result from "./result";
import GetAlertStyle from "./getAlertStyle";
const Form = () => {
  const [skData, setSkData] = useState({
    talpa: "",
    greitis: "",
    trukme: "",
  });
  const updateData = (data) => {
    console.log("Duomenys skaičiuojami");
    setSkData(data);
    console.log(data);
    setResult(((data.trukme * data.greitis) / data.talpa) * 100);
  };
  const [result, setResult] = useState("");

  return (
    <div>
      <div className={`alert alert-primary d-flex fs-6`}>
        <div>
          <Input onUpdateData={updateData} />
        </div>
      </div>
      <div>
        {" "}
        <Result result={result} />
      </div>

      <div>
        {" "}
        <Progress result={result} />
      </div>
      <div>
        {" "}
        <GetAlertStyle result={result} />
      </div>
    </div>
  );
};
export default Form;
