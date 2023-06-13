import { useEffect, useState } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import img from "../../assets/image.jpg";
import Scenes from "../scenes";

function SideBar({ onDataReceived }: any) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    let data;
    if (isOpen) {
      data = "ml-9";
    } else {
      data = "ml-40";
    }
    onDataReceived(data);
  }, [isOpen]);

  return (
    <div className=" relative flex ">
      <div
        className={` ${
          isOpen
            ? "fixed  h-screen w-9 bg-slate-200 dark:bg-black "
            : "fixed left-0 h-screen  w-40 bg-slate-400 dark:bg-black"
        }`}
      >
        <div className="  ">
          <div className="flex items-center  justify-evenly dark:text-slate-200">
            <h1 className={isOpen ? "hidden" : "block"}>Admin Panel</h1>
            <div className={isOpen ? "hidden" : "block"}>
              <AiOutlineAlignLeft onClick={toggleSidebar} />
            </div>
          </div>

          <div className=" ">
            <img src={img} alt="" className=" m-auto mt-6 w-11 rounded-full" />
            <div className={isOpen ? "hidden" : "block"}>
              <p className=" text-center text-sm font-bold dark:text-white">
                Admin name hear
              </p>
            </div>
          </div>
        </div>
        <Scenes isOpen={isOpen} />
      </div>
      <div
        className={
          isOpen
            ? "fixed left-0 top-0 ml-3 mt-1 block dark:text-slate-200"
            : "hidden"
        }
      >
        <AiOutlineAlignLeft onClick={toggleSidebar} />
      </div>
    </div>
  );
}

export default SideBar;
