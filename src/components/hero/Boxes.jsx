import {
  PiBooksDuotone,
  PiAirplane,
  PiAirplayFill,
  PiFactoryThin,
} from "react-icons/pi";
import { FiLogIn } from "react-icons/fi";
import { FaInfoCircle } from "react-icons/fa";

const Boxes = () => {
  return (
    <div className="absolute top-[95vh] w-[90vw] mr-10 h-auto bg-white z-10 border drop-shadow-2xl shadow-xl shadow-orange-950 border-black">
      <div className="grid grid-cols-6">
        <div className=" flex flex-col  items-center p-5 hover:bg-blue-300 transition-all ease-in-out delay-75 cursor-pointer hover:scale-110 rounded-lg">
          <PiBooksDuotone className="w-10 h-10" />
          <p className="font-tanha font-semibold text-xl mt-5">بازی ها</p>
          <span className="rounded-lg py-1 px-4 bg-blue-700 text-white mt-2">
            1245
          </span>
        </div>
        <div className=" flex flex-col items-center p-5 hover:bg-blue-300 transition-all ease-in-out delay-75 cursor-pointer hover:scale-110 rounded-lg">
          <PiAirplane className="w-10 h-10" />
          <p className="font-tanha font-semibold text-xl mt-5">بازی ها</p>
          <span className="rounded-lg py-1 px-4 bg-blue-700 text-white mt-2">
            1245
          </span>
        </div>
        <div className=" flex flex-col items-center p-5 hover:bg-blue-300 transition-all ease-in-out delay-75 cursor-pointer hover:scale-110 rounded-lg">
          <PiAirplayFill className="w-10 h-10" />
          <p className="font-tanha font-semibold text-xl mt-5">بازی ها</p>
          <span className="rounded-lg py-1 px-4 bg-blue-700 text-white mt-2">
            1245
          </span>
        </div>
        <div className=" flex flex-col items-center p-5 hover:bg-blue-300 transition-all ease-in-out delay-75 cursor-pointer hover:scale-110 rounded-lg">
          <PiFactoryThin className="w-10 h-10" />
          <p className="font-tanha font-semibold text-xl mt-5">بازی ها</p>
          <span className="rounded-lg py-1 px-4 bg-blue-700 text-white mt-2">
            1245
          </span>
        </div>
        <div className=" flex flex-col items-center p-5 hover:bg-blue-300 transition-all ease-in-out delay-75 cursor-pointer hover:scale-110 rounded-lg">
          <FiLogIn className="w-10 h-10" />
          <p className="font-tanha font-semibold text-xl mt-5">بازی ها</p>
          <span className="rounded-lg py-1 px-4 bg-blue-700 text-white mt-2">
            1245
          </span>
        </div>
        <div className=" flex flex-col items-center p-5 hover:bg-blue-300 transition-all ease-in-out delay-75 cursor-pointer hover:scale-110 rounded-lg">
          <FaInfoCircle className="w-10 h-10" />
          <p className="font-tanha font-semibold text-xl mt-5">بازی ها</p>
          <span className="rounded-lg py-1 px-4 bg-blue-700 text-white mt-2">
            1245
          </span>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
