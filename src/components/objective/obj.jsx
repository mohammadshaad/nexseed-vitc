import React, { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";

const Obj = () => {
  const triggerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerElement = triggerRef.current;
      if (triggerElement) {
        const { top, bottom } = triggerElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight && bottom > 0) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex bg-black flex-col items-center h-fit py-10 justify-evenly gap-8 w-full md:w-[85%] px-5 ">
      <div className="flex">
        <div className="text-white font-serif font-medium text-xl md:text-3xl animate-pulse">
          We bring extra value to ...
        </div>
      </div>
      <div className="flex md:w-1/2 flex-col md:grid md:grid-cols-2 gap-6 md:p-0">
        <div
          className="flex flex-col border-2 border-gray-800 rounded-lg p-5"
          ref={triggerRef}
        >
          <div className="text-6xl md:text-9xl text-white ">
            {inView && <CountUp start={0} end={2} duration={0.8} />}x
          </div>
          <div className="text-xl font-thin text-gray-400 ">
            We increase awareness about startups amongst young minds and
            encourage them and once their ideas grow
          </div>
        </div>
        <div
          className="flex flex-col border-2 border-gray-800 rounded-lg p-5"
          ref={triggerRef}
        >
          <div className="text-6xl md:text-9xl text-white ">
            {inView && <CountUp start={0} end={8} duration={0.8} />}x
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
