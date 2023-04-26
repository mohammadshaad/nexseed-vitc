import React from 'react'
import { motion } from 'framer-motion';
import Navbar from '../Navbar'
// import Styles from '../Events/styles/style.module.css'
import Header from '../../components/Events/header'
import Card from './Card'

function index() {
    return (
        <>
            <Navbar />

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='flex items-center justify-center'
            >

                <div className='absolute top-16 max-w-7xl w-full '>

                    <Header />

                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className='p-5 flex items-center md:items-start justify-center gap-10 flex-col'
                    >
                        <div className='text-3xl font-semibold'>
                            Upcoming events
                        </div>

                        <div className='flex items-start justify-start gap-4 flex-col md:flex-row '>
                            {/* <Card past={false} /> */}
                        </div>

                        <motion.h2 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className='text-gray-300 text-2xl font-thin'
                        >
                            No upcoming events
                        </motion.h2>
                    </motion.div>

                    <hr className='mt-10' />

                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        className='p-5 flex items-center md:items-start justify-center gap-10 flex-col mt-6'
                    >
                        <div className='text-3xl font-semibold'>
                            Past events
                        </div>

                        <div className='flex items-start justify-start gap-4 flex-col md:flex-row '>
                            <Card past={true} />
                        </div>

                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default index
