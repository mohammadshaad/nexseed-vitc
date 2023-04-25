import React from "react";
// import officeImg from "../../assets/mac.webp";
import macImage from "../../assets/mac.webp";

const Focus = () => {
  return (
    <div className="font-serif flex flex-col mx-24 h-screen space-y-10 pt-20">
      <div>
        <div className="text-lg md:text-2xl font-medium font-serif text-[#1E90FF] animate-bounce ">
          Our focus
        </div>
        <div className="text-4xl md:text-7xl font-serif">
          We are innovators who help businesses grow fast and effective.
        </div>
      </div>

      <div className="flex items-center justify-center md:flex-row flex-col gap-5">
        <div className="md:px-10 mt-10">
          <h1 className="text-4xl font-bold">Venture builders</h1>
          <p className="mt-10 text-lg ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            dolorum eligendi nemo deleniti, omnis sequi voluptatibus sit at,
            laboriosam mollitia quos error voluptatem saepe quam. Minima ullam
            atque porro dolores?
          </p>
          <p className="mt-10 font-semibold text-xl underline text-black">
            Learn more
          </p>
        </div>
        <div className="relative md:bottom-48">
          <img
            className="rounded-sm md:w-[980px] relative md:translate-y-36"
            src={macImage}
            alt="office people"
          />
        </div>
      </div>
      <div className="flex md:flex-row-reverse flex-col justify-center items-center gap-5">
        <div className="md:px-10 mt-10">
          <h1 className="text-4xl font-bold">Venture builders</h1>
          <p className="mt-10 text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            dolorum eligendi nemo deleniti, omnis sequi voluptatibus sit at,
            laboriosam mollitia quos error voluptatem saepe quam. Minima ullam
            atque porro dolores?
          </p>
          <p className="mt-10 font-semibold text-xl underline text-black">
            Learn more
          </p>
        </div>
        <div className="relative md:bottom-40">
          <img
            className="rounded-sm md:w-[980px] relative md:translate-y-10"
            src={macImage}
            alt="office people"
          />
        </div>
      </div>
    </div>
  );
};

export default Focus;
