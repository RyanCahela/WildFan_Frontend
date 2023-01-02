import React, { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";

const Timer = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 30); //30 second timer
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
  });

  const handleStart = () => {
    start();
  };

  const handlePause = () => {
    pause();
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div className="text-2xl pt-4">
      <p>{isRunning ? "running" : "not running"}</p>
      <div>
        <div className="">
          <h3>Elapsed Time:</h3>
          <div>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="btn" onClick={(e) => handleStart()}>
          Start
        </button>
        <button className="btn" onClick={(e) => handlePause()}>
          Pause
        </button>
        <button className="btn" onClick={(e) => handleReset()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
