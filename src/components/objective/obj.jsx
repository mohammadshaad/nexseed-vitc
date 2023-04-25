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
      <div className="flex md:w-1/2 flex-col md:grid md:grid-cols-2 gap-6 md:p-0">
        <div className="flex flex-col border-2 border-gray-800 rounded-lg p-5">
          <div className="text-6xl md:text-9xl text-white ">
            <CountUp start={0} end={2} duration={10} />x
          </div>
          <div className="text-xl font-thin text-gray-400 ">
            We increase awareness about startups amongst young minds and
            encourage them and once their ideas grow
          </div>
        </div>
        <div className="flex flex-col border-2 border-gray-800 rounded-lg p-5">
          <div className="text-6xl md:text-9xl text-white ">
            <CountUp start={0} end={8} duration={10} />x
          </div>
          <div className="text-xl font-thin text-gray-400 ">
            We provide the necessity amenities to help them acheive heights.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Obj;
