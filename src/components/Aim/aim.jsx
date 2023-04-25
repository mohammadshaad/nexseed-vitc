import React from "react";

const Aim = () => {
  return (
    <div className="flex flex-col h-fit gap-5 md:mx-24 items-center justify-center">
      <div className="flex flex-col">
        <div className="text-4xl md:text-7xl font-serif">
          <div className="text-lg md:text-2xl font-medium font-serif text-[#1E90FF]">Our Aim</div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center flex-col md:flex-row">
        <div className="flex p-10  shadow-xl rounded-md  bg-white">
          <div className="flex flex-col justify-center gap-2">
            <p className="text-xl font-bold">01</p>
            <h1 className="text-3xl font-bold">Venture Capital</h1>
            <p className="text-xl font-light pt-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio odio soluta excepturi rem nihil.
            </p>
          </div>
        </div>
        <div className="flex p-10  shadow-xl rounded-md bg-white ">
          <div className="flex flex-col justify-center gap-2">
            <p className="text-xl font-bold ">02</p>
            <h1 className="text-3xl font-bold">Seed Funding</h1>
            <p className="text-xl font-light pt-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio odio soluta excepturi rem nihil.
            </p>
          </div>
        </div>
        <div className="flex p-10  shadow-xl rounded-md bg-white">
          <div className="flex flex-col justify-center gap-2">
            <p className="text-xl font-bold">03</p>
            <h1 className="text-3xl font-bold">Private Equity</h1>
            <p className="text-xl font-light pt-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio odio soluta excepturi rem nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aim;
