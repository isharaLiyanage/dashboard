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
    <div className="  m-auto mt-6 w-28 text-sm font-bold dark:text-slate-200">
      <div className=" ">
        <Link to={"/"}>
          <div className="flex items-center justify-between ">
            <AiFillHome />
            <p className={isOpen ? "hidden" : "block"}>Dashboard</p>
          </div>
        </Link>
      </div>
      <h6 className={` ${isOpen ? " py-2 " : " py-2 text-sm"}`}>Data</h6>
      <div className="">
        <Link to={"/manageTeam"}>
          <div className="flex items-center justify-between ">
            <AiOutlineTeam />
            <p className={isOpen ? "hidden" : "block text-right  text-xs"}>
              Manage Team
            </p>
          </div>
        </Link>
      </div>

      <div className=" mt-3">
        <Link to={"/calender"}>
          <div className="flex items-center justify-between ">
            <AiFillContacts />
            <p className={isOpen ? "hidden" : "block text-right text-xs"}>
              Calender
            </p>
          </div>
        </Link>
      </div>
      <div className="mt-3">
        <Link to={"/users"}>
          <div className="flex items-center justify-between ">
            <AiOutlineTeam />
            <p className={isOpen ? "hidden" : "block text-right  text-xs"}>
              Manage Users
            </p>
          </div>
        </Link>
      </div>
      <div className="mt-3">
        <Link to={"/invoice"}>
          <div className="flex items-center justify-between ">
            <AiFillFileAdd />
            <p className={isOpen ? "hidden" : "block text-xs"}>
              {" "}
              Invoice Balances
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Scenes;
