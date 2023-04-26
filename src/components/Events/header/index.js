import React from 'react'
import { motion } from "framer-motion";
import eventsBg from '../../../assets/events-bg.png'

function index() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        className='w-full flex items-center justify-center p-2 md:p-5'>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.5 }}
          className={`bg-gray-900 w-fit flex items-center justify-center relative shadow-xl rounded-lg`}>
          <motion.img 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={eventsBg} alt='' className='opacity-50 bg-gray-900 w-full h-full rounded-lg' />
          <motion.h1 
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='absolute top-1/2 left-4 md:left-10 transform -rotate-90 -translate-x-1/2 -translate-y-1/2 text-lg md:text-6xl font-thin text-white'>
            EVENTS
          </motion.h1>
        </motion.div>
      </motion.div>
    </>
  )
}

export default index
