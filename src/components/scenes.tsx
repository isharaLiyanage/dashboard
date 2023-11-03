import { Link } from "react-router-dom";
import {
  AiFillContacts,
  AiFillFileAdd,
  AiFillHome,
  AiOutlineTeam,
} from "react-icons/ai";
interface ScenesProps {
  isOpen: boolean;
}
function Scenes({ isOpen }: ScenesProps) {
  return (
    <div className="  m-auto mt-6  w-32 text-sm   dark:text-slate-200">
      <div className=" ">
        <Link to={"/"}>
          <div className="flex items-center justify-between  ">
            <p className=" text-3xl">
              <AiFillHome />
            </p>
            <p className={isOpen ? "hidden" : "block"}>Dashboard</p>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          isOpen ? " mt-7" : "  mt-5 rounded border  border-[#1C1C1C1A] "
        }`}
      >
        <h6
          className={` ${isOpen ? " hidden " : " py-2 text-sm text-slate-500"}`}
        >
          Data
        </h6>
        <div className=" rounded  p-1 hover:bg-slate-300 dark:hover:bg-slate-800">
          <Link to={"/manageTeam"}>
            <div className="flex items-center justify-between ">
              <p className=" text-3xl">
                <AiOutlineTeam />
              </p>
              <p className={isOpen ? "hidden" : "block text-right  text-xs"}>
                Manage Team
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-3 rounded  p-1 hover:bg-slate-300  dark:hover:bg-slate-800 ">
          <Link to={"/calender"}>
            <div className="flex items-center justify-between ">
              <p className=" text-3xl">
                <AiFillContacts />
              </p>
              <p className={isOpen ? "hidden" : "block text-right text-xs"}>
                Calender
              </p>
            </div>
          </Link>
        </div>
        <div className="mt-3 rounded  p-1  hover:bg-slate-300 dark:hover:bg-slate-800 ">
          <Link to={"/users"}>
            <div className="flex items-center justify-between ">
              <p className=" text-3xl">
                <AiOutlineTeam />
              </p>
              <p className={isOpen ? "hidden" : "block text-right  text-xs"}>
                Manage Users
              </p>
            </div>
          </Link>
        </div>
        <div className="mt-3 rounded p-1 hover:bg-slate-300 dark:hover:bg-slate-800 ">
          <Link to={"/invoice"}>
            <div className="flex items-center justify-between ">
              <p className=" text-3xl">
                <AiFillFileAdd />
              </p>
              <p className={isOpen ? "hidden" : "block text-right  text-xs"}>
                Invoice Balances
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Scenes;
