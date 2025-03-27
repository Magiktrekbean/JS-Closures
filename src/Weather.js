import React from "react";

export default function Weather(props) {
  function farenheitTemp() {
    let temp = (props.temperature * 9) / 5 + 32;
    return Math.round(temp);
  }
  return (
    <div>
      The temperature in {props.city} is {props.temperature}°C and {""}
      {farenheitTemp()}°F
    </div>
  );
}
