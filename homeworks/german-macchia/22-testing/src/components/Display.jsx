import React, { useEffect, useState } from "react";
import isEmpty from "../helpers/isEmpty";
import backspace from "../helpers/backspace";
import resolve from "../helpers/resolve";

export const Display = ({ command, press }) => {
  const [resolution, setResolution] = useState("");
  const [calculation, setCalculation] = useState("");

  //Clear calculation field, if it's empty, sets resolution field to 0
  const clear = () => {
    if (isEmpty(calculation)) {
      setResolution(0);
    }
    setCalculation("");
  };

  const handleSolution = () => {
    const result = resolve(calculation, resolution);
    setResolution(result);
    clear();
  };

  useEffect(() => {
    //If last char in calculation string & command are a non digit value
    //and also command is NOT a 'equal, delete, or clear' command value
    //Then, replace that last operator command
    if (
      /\D/g.test(calculation.slice(-1)) &&
      /\D/g.test(command) &&
      /[^CD=]/g.test(command)
    ) {
      setCalculation(calculation.slice(0, -1) + command);
      return;
    }

    //Swich command of 'equal, delete, or clear' if exists
    switch (command) {
      case "=":
        handleSolution();
        return;
      case "D":
        setCalculation(backspace(calculation));
        return;
      case "C":
        clear();
        return;
      default:
        break;
    }

    //set max 17 char length in calculation
    if (calculation.length < 17) {
      setCalculation(calculation + command);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [command, press]);

  return (
    <div data-testid="calculation-container" className="display">
      <h1 data-testid="calculation-display">{calculation}</h1>
      <div
        data-testid="resolution-container"
        className={
          resolution.toString().length > 9
            ? "display__resolution display__resolution--small"
            : "display__resolution"
        }
      >
        <h1 data-testid="resolution-display">
          {resolution.toString().slice(0, 12)}
        </h1>
      </div>
    </div>
  );
};
