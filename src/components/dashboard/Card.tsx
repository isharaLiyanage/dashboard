import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  AiFillFunnelPlot,
  AiFillSignal,
  AiOutlineMail,
  AiOutlineUserAdd,
} from "react-icons/ai";
function Card() {
  const [number, setNumber] = useState(0);

  const percentage = 50;

  return (
    <div>
      <div className="m-auto my-2 flex  flex-wrap justify-between gap-2 px-3">
        <div className=" h-30 flex w-52 items-center justify-around bg-slate-100 p-3 text-black shadow-lg dark:bg-slate-900 dark:text-white">
          <div className="">
            <AiOutlineMail />
            123,255 <br />
            <span className=" text-teal-700">Emails Sent</span>
          </div>
          <div className="  w-10">
            <CircularProgressbar
              value={percentage || 0}
              text={`${percentage}%`}
            />
          </div>
        </div>

        <div className=" h-30 flex  w-52 items-center justify-around bg-slate-100 p-3 text-black shadow-lg dark:bg-slate-900 dark:text-white">
          <div className="">
            <AiFillFunnelPlot />
            123,255 <br />
            <span className=" text-teal-700">Emails Sent</span>
          </div>
          <div className="  w-10">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
        </div>

        <div className=" h-30 flex w-52  items-center justify-around bg-slate-100 p-3 text-black shadow-lg dark:bg-slate-900 dark:text-white">
          <div className="">
            <AiOutlineUserAdd />
            255 <br />
            <span className=" text-teal-700">New Users</span>
          </div>
          <div className="  w-10">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
        </div>

        <div className=" h-30 flex w-52 items-center justify-around bg-slate-100 p-3 text-black shadow-lg dark:bg-slate-900 dark:text-white">
          <div className="">
            <AiFillSignal />
            123,255 <br />
            <span className=" text-red-700"> Traffic Received</span>
          </div>
          <div className="  w-10">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                pathColor: `rgba(255, 152, 199, ${percentage / 100})`,
                textColor: "#f88",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
