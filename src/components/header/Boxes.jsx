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
    <div className="absolute top-[90vh] w-[90vw] mr-10 h-[20vh] bg-white z-10 border drop-shadow-2xl shadow-xl shadow-orange-950 border-black">
      <div className="grid grid-cols-6">
        <div className=" flex flex-col  items-center p-5 hover:bg-blue-300 transition-all ease-in-out delay-75 cursor-pointer">
          <PiBooksDuotone className="w-10 h-10" />
          <p className="font-tanha font-semibold text-xl mt-5">بازی ها</p>
        </div>
        <div className=" flex flex-col items-center p-5 hover:bg-blue-300 transition-all ease-in-out delay-75 cursor-pointer">
          <PiAirplane className="w-10 h-10" />
          <p className="font-tanha font-semibold text-xl mt-5">بازی ها</p>
        </div>
        <div className=" flex flex-col items-center p-5 hover:bg-blue-300 transition-all ease-in-out delay-75 cursor-pointer">
          <PiAirplayFill className="w-10 h-10" />
          <p className="font-tanha font-semibold text-xl mt-5">بازی ها</p>
        </div>
        <div className=" flex flex-col items-center p-5 hover:bg-blue-300 transition-all ease-in-out delay-75 cursor-pointer">
          <PiFactoryThin className="w-10 h-10" />
          <p className="font-tanha font-semibold text-xl mt-5">بازی ها</p>
        </div>
        <div className=" flex flex-col items-center p-5 hover:bg-blue-300 transition-all ease-in-out delay-75 cursor-pointer">
          <FiLogIn className="w-10 h-10" />
          <p className="font-tanha font-semibold text-xl mt-5">بازی ها</p>
        </div>
        <div className=" flex flex-col items-center p-5 hover:bg-blue-300 transition-all ease-in-out delay-75 cursor-pointer">
          <FaInfoCircle className="w-10 h-10" />
          <p className="font-tanha font-semibold text-xl mt-5">بازی ها</p>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
