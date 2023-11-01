import { useEffect, useState } from "react";
import { megabtn, navbarLinks, secondmegabtn } from "./navbarData";
import logo from "../../assets/8f25881149a1bb7e76be17164248a596.jpg"
import style from "./menuStyle.module.css";
const Navbar = () => {
  const [Opencn, setOpencn] = useState(false);
  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);
  return (
    <div>
      <div
        className={`${
          navState
            ? " bg-black bg-opacity-70 top-0 left-0  fixed "
            : " text-white absolute z-10 ]"
        } items-center z-10 w-full h-[10vh] grid grid-cols-3`}
      >
        <div className="mx-10 col-span-2">
          {navbarLinks.map((item) => (
            <button
              className={`font-vazir  font-semibold 
                 hover:border-b-2 border-red-600 py-2 
                 my-2 mx-5 ${navState ? "text-white text-base" : "text-white text-xl"}  ${item.mega ? style.megamenu : ""}`}
              key={item.id}
            >
              {item.title}
            </button>
          ))}
          <div
            className={`grid grid-cols-3 bg-opacity-80 py-2 pr-5 bg-black ${style.megaitem}`}
          >
            {/**first */}
            <div className="border-l-2 border-white flex flex-col items-start">
              {megabtn.map((btn) => (
                <button
                  key={btn.id}
                  onMouseEnter={() => setOpencn(true)}
                  onMouseLeave={() => setOpencn(false)}
                  className={`m-2 rounded-lg text-base text-white font-vazir hover:border-b-2 py-1 border-blue-600 px-4 `}
                >
                  {btn.title}
                </button>
              ))}
            </div>
            {/**sec */}
            <div className="border-l-2 border-white flex flex-col items-start">
              {secondmegabtn.map((btn) => (
                <button
                  key={btn.id}
                  className={`m-2 rounded-lg text-base text-white font-vazir hover:border-b-2 py-1 border-blue-600 px-4 ${
                    Opencn ? "visible" : "hidden"
                  }`}
                >
                  {btn.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="items-center flex justify-end mx-10">
          <h2 className={`text-white font-tanha font-bold mx-2`}>گیم شارک</h2>
          <img src={logo} className="w-10 h-10" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
