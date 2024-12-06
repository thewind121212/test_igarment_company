import { useEffect, useRef, useState } from 'react';
import { getTimerFn } from '../utils/getTimer';

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [pauseTime, setPauseTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const intervalRef = useRef<unknown | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        setTime(elapsedTime);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current as number);
      }
    };
  }, [isRunning, startTime]);

  const start = () => {
    if (isRunning) return;
    if (isPaused) {
      setStartTime(Date.now() - pauseTime);
      setIsPaused(false);
      setIsRunning(true);
    } else {
      setStartTime(Date.now());
      setIsRunning(true);
    }
  };

  const pause = () => {
    if (!isRunning || isPaused ) return;
    clearInterval(intervalRef.current! as number);
    setIsRunning(false);
    setIsPaused(true);
    setPauseTime(Date.now() - startTime);
  };

  const reset = () => {
    clearInterval(intervalRef.current! as number);
    setIsRunning(false);
    setIsPaused(false);
    setTime(0);
    setPauseTime(0);
    setStartTime(0);
  };

  const getTimer = () => getTimerFn(time);

  return {
    time,
    start,
    pause,
    getTimer,
    reset,
  };
};