import React from "react";

const Aim = () => {
  return (
    <div className="flex flex-col h-fit gap-5 md:mx-24 items-center justify-center">
      <div className="flex flex-col">
        <div className="text-4xl md:text-7xl font-serif">
          <div className="text-lg md:text-2xl font-medium font-serif text-[#1E90FF]">
            Our Aim
          </div>
          To provide college students a pedestal to bring their startups to
          great heights
        </div>
      </div>
      <div className="flex md:grid md:grid-cols-3 gap-5 items-center justify-center flex-col md:flex-row">
        <div className="flex p-10  shadow-xl rounded-md  bg-white h-full">
          <div className="flex flex-col justify-start gap-2">
            <p className="text-xl font-bold">01</p>
            <h1 className="text-3xl font-bold">Venture Capital</h1>
            <p className="text-lg font-light pt-8">
              Overall, as a club we focus on entrepreneurship, we will play a
              valuable role in helping entrepreneurs connect with venture
              capital firms by providing resources, connections, and mentorship,
              we can help aspiring entrepreneurs turn their ideas into
              successful businesses
            </p>
          </div>
        </div>
        <div className="flex p-10  shadow-xl rounded-md bg-white h-full">
          <div className="flex flex-col justify-start gap-2">
            <p className="text-xl font-bold ">02</p>
            <h1 className="text-3xl font-bold">Seed Funding</h1>
            <p className="text-lg font-light pt-8">
              Seed funding is a type of early-stage financing, provided by angel
              investors or venture capital firms, used to fund the development
              of a startup's product or service, as well as cover initial
              operating expenses. As a club, we will help entrepreneurs form
              partnerships with other organizations or businesses that can
              provide funding or resources.
            </p>
          </div>
        </div>
        <div className="flex p-10  shadow-xl rounded-md bg-white h-full">
          <div className="flex flex-col justify-start gap-2">
            <p className="text-xl font-bold">03</p>
            <h1 className="text-3xl font-bold">Private Equity</h1>
            <p className="text-lg font-light pt-8">
              Private equity is an investment in companies that are not publicly
              traded. In return, the private equity firm typically receives
              ownership in the company and a share of the profits when the
              company is sold or goes public. As a club, we will facilitate
              networking opportunities for entrepreneurs to connect with private
              equity professionals or firms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aim;
