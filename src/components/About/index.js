import React from "react";
import Navbar from '../Navbar';
import val1 from '../../assets/values/1.png'
import val2 from '../../assets/values/2.png'
import val3 from '../../assets/values/3.png'
import val4 from '../../assets/values/4.png'
import val5 from '../../assets/values/5.png'
import val6 from '../../assets/values/6.png'
import Team from '../../components/Team'

const index = () => {

  const values = [
    {
      image: val1,
      title: "Care about our team",
      description: "Understand what matters to our members. Give them what they need to do their best work"
    },
    {
      image: val2,
      title: "Be excellent to each other",
      description: "No games. No bullshit. We rely on our peers to improve. Be open, honest and kind"
    },
    {
      image: val3,
      title: "Pride in what we do",
      description: "Value quality and integrity in everything we do. At all times. No exceptions"
    },
    {
      image: val4,
      title: "Help teammates grow",
      description: "Help each other to grow and imrove the personality"
    },
    {
      image: val5,
      title: "Do the impossible",
      description: "Be energized by difficult problems. Revel in unknowns. Ask 'Why?', but always question, 'Why not?'"
    },
    {
      image: val6,
      title: "Sweat the small stuff",
      description: "We believe the best products come from best attention to detail. Sweat the small stuff"
    },
  ];

  // 

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center flex-col gap-10 relative top-24 md:top-20">
        <div className="flex items-center justify-center flex-col p-5 md:p-10 gap-4 text-center ">
          <h1 className="text-xs md:text-sm font-medium text-[#1E90FF] font-serif">
            About Us
          </h1>
          <h2 className="text-2xl md:text-6xl font-semibold font-serif">
            We do things differently...
          </h2>
          <h3 className="text-sm md:text-base text-center font-light max-w-5xl text-gray-500 leading-relaxed md:mt-3">
            At NexSeed, we believe that entrepreneurship is about more than just starting a business. It's about creativity, problem-solving, and making a positive impact in the world. We invite you to join us and be part of the next generation of entrepreneurs.
          </h3>
        </div>

        <div className={`py-10 md:py-10 px-5 md:px-40 grid md:grid-cols-2 w-full grid-rows-1 gap-6 max-w-6xl rounded-lg`}>
          <div className="flex items-center md:items-start justify-center flex-col gap-5">
            <hr className="border border-gray-700 w-[140px] md:w-[200px]" />
            <div className="flex items-start justify-start h-full flex-col gap-2">
              <h3 className="text-2xl md:text-5xl font-semibold font-serif">
                Our Story?
              </h3>
              <p className="text-gray-500 text-xs md:text-sm">
                Why we started it?
              </p>
            </div>


          </div>

          <div>
            <p className="text-base font-normal text-gray-700 text-justify">
              Welcome to NexSeed, the entrepreneurship club at VIT Chennai! We are a group of driven individuals who are passionate about entrepreneurship and innovation. Our mission is to foster an entrepreneurial culture on campus and to provide resources, support, and inspiration for aspiring entrepreneurs.

              <br />
              <br />

              Through our events, workshops, and mentorship programs, we aim to create an environment that encourages creative thinking and problem-solving. Whether you have a business idea you want to bring to life or are simply curious about entrepreneurship, Nexseed is the perfect place for you.

              <br />
              <br />

              Our club is made up of students from a diverse range of backgrounds and fields of study, all united by a common goal of pursuing their entrepreneurial dreams. We believe that everyone has the potential to be an entrepreneur, and we are here to help you realize that potential.
            </p>
          </div>


        </div>


        <div>
          <div className="flex items-center justify-center flex-col p-5 md:p-10 gap-4 text-center">
            <h1 className="text-xs md:text-sm font-medium text-[#1E90FF] font-serif">
              Our Values
            </h1>
            <h2 className="text-2xl md:text-4xl font-normal md:leading-normal font-serif">
              We're an ambitious and smart team <br /> with a shared mission
            </h2>
            <h3 className="text-sm md:text-base font-light text-center max-w-5xl text-gray-500 md:mt-3">
              Our shared values keep us connected and guide us as one team
            </h3>
          </div>

          <div className="grid md:grid-cols-3 md:grid-rows-2 p-10 gap-10 max-w-7xl">
            {values.map((ele, i) => (
              <div className="flex items-center justify-center flex-col gap-2 text-center">
                <img src={`${ele.image}`} alt="" />
                <h4 className="">
                  {ele.title}
                </h4>
                <p className="font-light text-sm text-gray-500 w-11/12">
                  {ele.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center flex-col p-5 md:p-10 gap-4 text-center">
            <h1 className="text-xs md:text-sm font-medium text-[#1E90FF] font-serif">
              Our Founders
            </h1>
            <h2 className="text-2xl md:text-4xl font-normal md:leading-normal font-serif">
              Meet our team
            </h2>
          </div>

          <div>
            <Team />
          </div>
        </div>

      </div>
    </>
  );
};
export default index;