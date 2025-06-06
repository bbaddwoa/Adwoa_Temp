const userPrompt = () => {
  let tempF = prompt("Please enter your temperature in Fahrenheit");
  return Number(tempF);
};

const convertToCelsius = (tempF) => {
  const tempCel = ((tempF - 32) * 5) / 9;
  return tempCel;
};

//console.log(convertToCelsius(100));

const describeTemperature = (tempF) => {
  const tempCel = convertToCelsius(tempF);
  // const call = userPrompt(tempF);
  if (tempCel < 0) {
    return "very cold";
  } else if (0 < tempCel < 20) {
    return "cold";
  } else if (20 < tempCel < 30) {
    return "warm";
  } else if (30 < tempCel < 40) {
    return "hot";
  } else {
    return "very hot";
  }
};
//console.log(describeTemperature(32));

const temp = userPrompt()
console.log(temp)
describeTemperature(temp)
