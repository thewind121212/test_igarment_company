import './App.css'
import { useTimer } from './hooks/timerHook';
import Button from './shared-componens/button';


// Timer component
const TimerApp: React.FC = () => {
  const { time, start, getTimer, pause, reset } = useTimer();


  return (
    <div className="w-svw h-svh bg-[#1E1E1E] flex justify-center items-center flex-col">
      <div className="w-full lg:w-1/2 h-auto flex justify-start items-center flex-col">
        <h1 className='text-5xl text-[#FFFFFF]'>Timer App React</h1>
        <div>
          <p className='text-3xl text-[#FFFFFF] mt-8'>Raw Timer Value: {time}</p>
          <p className='text-3xl text-[#FFFFFF] mt-4'>Time format HH:MM:SS Value : {getTimer()}</p>
          <div className="flex justify-start items-center gap-2 mt-4">
            <Button className='bg-[#4CAF50] text-[#FFFFFF] px-4 py-2 rounded-md' content='Start' fn={start} />
            <Button className='bg-[#FFC107] text-[#FFFFFF] px-4 py-2 rounded-md' content='Pause' fn={pause} />
            <Button className='bg-[#F44336] text-[#FFFFFF] px-4 py-2 rounded-md' content='Reset' fn={reset} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default TimerApp;