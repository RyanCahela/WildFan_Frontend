import { useReducer, useEffect, useRef } from "react";

const reducer = (state, action) => {
  /*
    state = {
      currentState: "IDLE"
      startTime: 
      currentTime:

    }
  */
  switch (action.type) {
    case "IDLE":
      return state;
      break;
    case "TICK":
      console.log("tick state: ", state.currentTime);
      return {
        currentTime: action.payload - state.startTime,
      };
      break;
    case "START":
      return {
        currentState: "START",
        startTime: action.payload,
      };
      break;
    case "PAUSE":
      break;
    case "RESET":
      break;
    default:
      return state;
  }
};

const useTimer = () => {
  const intervalIdRef = useRef();
  const initialState = {
    startTime: null,
    elapsedTime: null,
    currentState: "IDLE",
  };

  const [timerState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      dispatch({ type: "TICK", payload: Date.now() });
    }, 1000);

    return clearInterval(intervalIdRef.current);
  }, []);

  const start = () => {
    dispatch({ type: "START", payload: Date.now() });
  };

  const stop = () => {};
  const pause = () => {};
  const reset = () => {};

  return {
    time: timerState.currentTime,
    stop,
    pause,
    start,
    reset,
  };
};

export default useTimer;
