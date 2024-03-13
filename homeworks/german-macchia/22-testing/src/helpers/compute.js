//Compute percent will run if the first or second has % sign.
//is invocked at compute an use compute as recurtion
const computePercent = (first, op, second, resolution) => {
  let result, percent;
  //if the first sign has % it means the result will be relative to previous resolution
  if (first?.toString().includes("%")) {
    percent = (resolution * parseFloat(first)) / 100;
    result = percent;
  }
  //if percent is in second value, then will take account of the last value computed
  if (second?.toString().includes("%")) {
    percent = (parseFloat(first) * parseFloat(second)) / 100;
    result = compute(parseFloat(first), op, percent);
  }

  return result;
};

//As the strings (or numbers in some cases) are computed there will be pase into float
//and get computed by the switch conditional
const compute = (first, op, second, resolution) => {
  let num1 = parseFloat(first);
  let num2 = parseFloat(second);
  let result;
  //if there are percents in the values (as the regex doesn't take acount of it)
  //there will be processed by computePercent
  if (first?.toString().includes("%") || second?.toString().includes("%")) {
    const result = computePercent(first, op, second, resolution);
    return result;
  }

  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "error";
      }
      break;
    default:
      result = num1;
      break;
  }

  return result;
};

export default compute;
