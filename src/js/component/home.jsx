import React, { useState } from "react";

const TrafficLight = () => {
  const [trafficColor, setTrafficColor] = useState("");
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleClick = (e) => {
    setTimeout(() => setTrafficColor("red"), 1000);
    setTimeout(() => setTrafficColor("yellow"), 2000);
    setTimeout(() => setTrafficColor("green"), 3000);
    setTimeout(() => setTrafficColor("purple"), 4000);
    setTimeout(() => setTrafficColor(""), 5000);
  };

  const toggleButton = () => {
    setButtonStatus(!buttonStatus);
  };

  return (
    <>
      <div className="hanger"></div>
      <div className="bigBox">
        <div
          className={"redLight " + (trafficColor === "red" ? "redGlow" : "")}
          onClick={() => setTrafficColor("red")}
        ></div>
        <div
          className={"yellowLight " + (trafficColor === "yellow" ? "yellowGlow" : "")}
          onClick={() => setTrafficColor("yellow")}
        ></div>
        <div
          className={"greenLight " + (trafficColor === "green" ? "greenGlow" : "")}
          onClick={() => setTrafficColor("green")}
        ></div>
        {buttonStatus && (
          <div
            className={"purpleLight " + (trafficColor === "purple" ? "purpleGlow" : "")}
            onClick={() => setTrafficColor("purple")}
          ></div>
        )}
        <br></br>
        <button onClick={(e) => handleClick(e)}>Cycle</button>
        <button onClick={toggleButton}>
          {buttonStatus ? "Remove Purple" : "Add Purple"}
        </button>
      </div>
    </>
  );
};

export default TrafficLight;
