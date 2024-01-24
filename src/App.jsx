/* eslint-disable no-unused-vars */
import image from "/image_1.png";
import RightPanel from "./RightPanel";
import MetricChart from "./MetricChart";
import { IoMenu } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [chartData, setChartData] = useState({
    gpaData: 0,
    boomData: 0,
    speedData: 0,
    historyData: [],
  });
  const [timeCount, setTimeCount] = useState(0);
  const [isStart, setIsStart] = useState(false);

  // =============== API CALL =============

  const callApi = async (timeCount) => {
    const { data } = await axios.get(
      `http://localhost:5000/history-data?time=${timeCount}`
    );
    console.log(data);
    setChartData(data);
  };

  // ============= SIDE EFFECTS ==============

  useEffect(() => {
    if (isStart) {
      const intervalId = setInterval(() => {
        callApi(timeCount);
        setTimeCount((prev) => prev + 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [timeCount, isStart]);

  const handleStart = () => {
    setIsStart(true);
  };

  const handleStop = () => {
    setIsStart(false);
  };

  /**
   * JSX
   */
  return (
    <div className="w-full">
      <div className="w-full h-[95vh] grid grid-cols-6 border-slate-600">
        <div className="col-span-4 border-r-4 border-slate-600">
          <div className="h-[50vh] border-slate-600">
            <img
              src={image}
              alt=""
              style={{
                objectFit: "cover",
                height: "50vh",
                width: "100%",
                objectPosition: "center",
              }}
            />
          </div>
          <div className="h-[42vh] border-slate-600 border-t-4">
            <MetricChart data={chartData.historyData} />
          </div>
        </div>
        {/* RIGHT PANEL*/}
        <RightPanel
          handleStop={handleStop}
          gpa={chartData.gpaData}
          handleStart={handleStart}
          boom={chartData.boomData}
          speed={chartData.speedData}
        />
      </div>
      <div className="flex justify-between w-[100%] h-[5vh] border-t-4 bg-slate-600">
        <button className="bg-slate-600 px-4 py-2">
          <IoMdSettings size={30} />
        </button>
        <button className="bg-slate-600 px-4 py-2">
          <IoMenu size={30} />
        </button>
      </div>
    </div>
  );
};

export default App;
