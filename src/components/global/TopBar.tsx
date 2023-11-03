import { AiFillBell, AiFillSetting, AiOutlineUser } from "react-icons/ai";

import DarkModeToggle from "../Darkmode";

function TopBar() {
  return (
    <div>
      <div className=" flex justify-around border border-[#1C1C1C1A] bg-slate-100 py-2 dark:bg-black">
        <p className=" text-[16px]">Dashboard </p>
        <form action="">
          <div className="">
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search"
              className=" rounded pl-2"
            />
          </div>
        </form>
        <div className="  flex items-center  justify-around gap-3 text-black dark:text-white">
          <DarkModeToggle />
          <AiFillBell />
          <AiFillSetting />
          <AiOutlineUser />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
