import React from 'react'
import Aim from "../Aim/aim";
import Focus from "../focus/focus";
import Navbar from "../Navbar";
import Obj from "../objective/obj";
import Sidebar from "../Sidebar";
// import heroImage from "../../assets/hero_image.webp";
import eventsBg from '../../assets/events-bg.jpg';
import { motion } from "framer-motion";
import Styles from './styles/Style.module.css'

const Main = () => {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className='flex items-center justify-center p-10'>

        <div className='flex items-center justify-center flex-col translate-y-14 lg:translate-y-8 w-full md:p-0 max-w-7xl gap-10 md:gap-10 lg:gap-4 pl-5'>

          <div className="flex md:grid md:h-screen lg:max-h-[650px] md:mx-24 items-center justify-center md:justify-between flex-col md:flex-row gap-6 ">
            <div className="flex md:grid-cols-2 text-5xl md:text-8xl md:w-[100%] justify-center items-center relative md:translate-y-20 z-20">
              <motion.h1
                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                animate={{
                  clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
                  transition: { delay: 0.1, duration: 0.5 },
                }}
                className=" font-serif"
              >
                We are the venture <span className={`${Styles.underlined}`}> builder </span> for the future
              </motion.h1>
            </div>
            <motion.div
              initial={{
                height: 0,
                translateY: 100,
              }}
              layout
              whileHover={{ scale: 1.05 }}
              animate={{
                height: "auto",
                translateY: 0,
                transition: { delay: 0.5, duration: 1 },
              }}
              className="md:w-[60%] overflow-hidden flex justify-center items-center relative md:left-[500px] z-0"
            >
              <motion.img
                className="rounded-sm "
                src={eventsBg}
                alt="Company people"
              />
            </motion.div>
          </div>

          <Aim />
          <Obj />
          <Focus />
        </div>
      </div>

    </>

  );
};

export default Main;
