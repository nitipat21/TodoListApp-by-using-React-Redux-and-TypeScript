import React from "react";

interface timerInterface{
    time:number
}

const Timer:React.FC<timerInterface> = (props) => {
  return (
    <div className="timer">
      <span className="digits">
      {("0" + Math.floor((props.time / 3600000) % 60)).slice(-2)}
      </span>:
      <span className="digits">
      {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}
      </span>:
      <span className="digits">
      {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
      </span>
    </div>
  );
}

export default Timer