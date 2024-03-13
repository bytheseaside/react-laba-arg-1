import isEmpty from "./isEmpty";
import compute from "./compute";

//Sets calculation field ready to compute solution
const resolve = (calculation, resolution) => {
  if (!resolution) {
    resolution = 0;
  }
  //Set regex for not numbers, dot or percent sign
  //(this is because % will compute different as the sign appears after nº)
  const regex = /[^0-9.%]/g;
  //Split calculation string on each char and return values that are not numbers nor dots (operators)
  const signs = calculation.split("").filter((value) => regex.test(value));
  //split string were there are not numbers or dot
  const nums = calculation.split(regex);
  //If it is already a previous resolution and first character in calculation string is an operator
  //As the nums value will be splited at first with empty value e.g ["", 23]
  //will put the previous resolution as first value for compute
  if (regex.test(calculation.charAt(0))) {
    nums[0] = resolution;
  }
  //After last condition, if there still no value at index 0 (no resolution),
  //will put a 0 to compute operations
  if (isEmpty(nums[0])) {
    nums[0] = 0;
  }
  //If we put an lonely operator will put this values to compute
  if (isEmpty(nums[1])) {
    nums[0] = resolution || nums[0];
    nums[1] = 0;
  }

  //Each value of the calculation field will be processed in order of input
  //(but not in mathematical order of operation )
  //Will loop for each operator sign index + in calculation string plus 1.
  let j = 0;
  let result = null;
  for (let i = 0; i <= signs.length; i++) {
    //if there was already a compute operation in this calculation string and there is a value to process this operator
    if (result !== null && nums[i]) {
      result = compute(result, signs[j], nums[i], resolution);
      //if there was a previous compute but calculation string finish with an operator
      //compute result with resolution
    } else if (result !== null && !nums[i] ) {
      result = resolution + result;
      //It there was no previous result compute for the first time
    } else {
      result = compute(nums[i], signs[j], nums[i + 1], resolution);
      i++;
    }
    j++;
  }
  //after calculation string it's computed will set the resolucion and clear the calculation string
  return result;
};

export default resolve;
