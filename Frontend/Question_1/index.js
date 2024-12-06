//i can do it using class as OOP but i will do it using function because it's simple and i familiar with it

// reuable get timer

const getTimerFn = (time) => {
  const hours = String(Math.floor(time / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

// simulate sleep function
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const simpleTimer = () => {
  let timeElapsed = 0;
  let isRunning = false;
  let isPaused = false;
  let pauseTime = 0;
  let startTime = 0;

  const start = async (isLogTimer) => {
    if (isRunning) return;

    isRunning = true;
    if (isPaused) {
      startTime = Date.now() - pauseTime;
      isPaused = false;
    } else {
      startTime = Date.now() - timeElapsed * 1000;
    }

    while (isRunning) {
      timeElapsed = Math.floor((Date.now() - startTime) / 1000);
      // debug log the timer
      if (isLogTimer) {
        console.log(getTimer());
      }
      await sleep(1000);
    }
  };

  const pause = () => {
    if (!isRunning) return;
    isRunning = false;
    isPaused = true;
    pauseTime = Date.now() - startTime;
  };

  const reset = () => {
    isRunning = false;
    isPaused = false;
    timeElapsed = 0;
    pauseTime = 0;
    startTime = 0;
  };

  const getTimer = () => {
    return getTimerFn(timeElapsed);
  };

  return {
    start,
    pause,
    reset,
    getTimer,
  };
};



const { start, pause, reset, getTimer } = simpleTimer();

//when call start remember to pass true to log the timer or it will not prompt the timer