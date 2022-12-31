import React, { useState } from "react";
import App from "../pages/_app";
import useTimer from "../Hooks/useTimer";

const Timer = () => {
  const { time, start, pause, reset, status } = useTimer();

  const handleStart = () => {
    start();
  };

  const handleStop = () => {
    pause();
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div className="text-2xl pt-4">
      <div className="">Elapsed Time: {time}</div>
      <button onClick={(e) => handleStart()}>Start</button>
      <button onClick={(e) => handleStop()}>Stop</button>
      <button onClick={(e) => handleReset()}>Reset</button>
    </div>
  );
};

export default Timer;
