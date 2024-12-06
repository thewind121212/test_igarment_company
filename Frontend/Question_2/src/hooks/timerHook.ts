import { useEffect, useRef, useState } from 'react';
import { getTimerFn } from '../utils/getTimer';



export const useTimer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const isPaused = useRef<boolean>(false);
    const pauseTime = useRef<number>(0);
    const [startTime, setStartTime] = useState<number>(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); 

    useEffect(() => {
        if (!isRunning) return

        const runner = async () => {
            if (isRunning) {
                const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
                setTime(elapsedTime);
                timeoutRef.current = setTimeout(async () => {
                    await runner(); 
                }, 1000);
            }

        }

        runner()

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current); 
            }
        };
    }, [isRunning, startTime]);

    const start = () => {
        if (isRunning) return;
        if (isPaused) {
            setStartTime(Date.now() - pauseTime.current);
            isPaused.current = false;
            setIsRunning(true);
        } else {
            setStartTime(Date.now());
            setIsRunning(true);
        }
    };

    const pause = () => {
        if (!isRunning || isPaused.current) return;
        setIsRunning(false);
        isPaused.current = true;
        pauseTime.current = Date.now() - startTime;
    };

    const reset = () => {
        if (isRunning) return;
        setIsRunning(false);
        isPaused.current = false;
        setTime(0);
        pauseTime.current = 0;
        setStartTime(0);
    };

    const getTimer = () => getTimerFn(time);

    return {
        time,
        start,
        pause,
        getTimer,
        reset,
        isRunning: isRunning
    };
};