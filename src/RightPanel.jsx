/* eslint-disable react/prop-types */
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const RightPanel = ({
  gpa,
  boom,
  speed,
  handleStop = () => {},
  handleStart = () => {},
}) => {
  return (
    <div className="col-span-2">
      <div className="h-[70vh] flex flex-col items-center justify-evenly">
        {/* speed */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-2xl">SPEED</h3>
          <button
            className={`${
              speed === 1 ? "bg-green-600" : "bg-red-600"
            } py-3 px-4 border-1 rounded-md text-4xl w-[10rem]`}
          >
            {speed === 1 ? "GOOD" : "BAD"}
          </button>
        </div>
        {/* gpa */}
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-2xl">GPA</h3>
          <button className="py-3 px-4 bg-zinc-300 border-1 rounded-md text-4xl w-[10rem] flex justify-center items-center">
            {gpa === 1 ? <FaArrowUp size={40} /> : <FaArrowDown size={40} />}
          </button>
        </div>
        {/* boom */}
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-2xl">BOOM</h3>
          <button
            className={`${
              boom === 1 ? "bg-green-600" : "bg-red-600"
            } py-3 px-4 border-1 rounded-md text-4xl w-[10rem]`}
          >
            {boom === 1 ? "GOOD" : "BAD"}
          </button>
        </div>
      </div>
      <div>
        <div className="bg-slate-400 font-semibold text-2xl h-[5vh] flex items-center justify-center">
          ENHANCE
        </div>
        <div className=" h-[25vh] w-[100%] flex justify-center items-center gap-8">
          <button
            onClick={handleStart}
            className="w-[10rem] border-1 border-slate-800 bg-slate-400 rounded-md px-4 py-3 text-4xl"
          >
            ON
          </button>
          <button
            onClick={handleStop}
            className="w-[10rem] border-1 border-slate-800 bg-red-600 rounded-md px-4 py-3 text-4xl"
          >
            OFF
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
