import './App.css'
import { useTimer } from './hooks/timerHook';
import Button from './shared-componens/button';


// Timer component
const TimerApp: React.FC = () => {
  const { time, start, getTimer, pause, reset, isRunning } = useTimer();


  return (
    <div className="w-svw h-svh bg-[#1E1E1E] flex justify-center items-center flex-col">
      <div className="w-full p-4 lg:w-fit h-auto flex justify-start items-center flex-col">
        <h1 className='text-5xl text-[#FFFFFF]'>Timer App React</h1>
        <div>
          <p className='text-3xl text-[#FFFFFF] mt-8'>Raw Timer Value: {time}</p>
          <p className='text-3xl text-[#FFFFFF] mt-4'>Time format HH:MM:SS Value : {getTimer()}</p>
          <div className="flex justify-start items-center gap-2 mt-4">
            <Button className='bg-[#4CAF50]' content='Start' fn={start} />
            <Button className='bg-[#FFC107]' content='Pause' fn={pause} disabled={!isRunning} />
            <Button className='bg-[#F44336]' content='Reset' fn={reset} disabled={isRunning || time === 0} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default TimerApp;