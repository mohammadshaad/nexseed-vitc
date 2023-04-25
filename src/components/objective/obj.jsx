import React from "react";
import CountUp from "react-countup";

const Obj = () => {
  return (
    <div className="flex bg-black flex-col items-center h-fit py-10 justify-evenly gap-8 w-full md:w-[85%] px-5 ">
      <div className="flex">
        <div className="text-white font-serif font-medium text-xl md:text-3xl animate-pulse">
          We bring extra value to ...
        </div>
      </div>
      <div className="flex md:w-1/2 flex-col md:flex-row md:space-x-5 gap-6 md:p-0">
        <div className="flex flex-col border-2 border-gray-800 rounded-lg">
          <div className="text-6xl md:text-9xl text-white ">
            <CountUp start={0} end={2} duration={0.5} />x
          </div>
          <div className="text-xl font-thin text-gray-400 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="flex flex-col border-2 border-gray-800 rounded-lg">
          <div className="text-6xl md:text-9xl text-white ">
            <CountUp start={0} end={8} duration={1} />x
          </div>
          <div className="text-xl font-thin text-gray-400 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Obj;
