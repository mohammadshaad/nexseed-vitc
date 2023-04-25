import React from 'react'
import random from '../../../assets/random.png'
import styles from '../../../components/Team/styles/Style.module.css'
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function index(props) {
    return (
        <>
            <div className={`${styles.card} flex items-center justify-center flex-col gap-6 shadow-lg hover:shadow-2xl rounded-full w-fit py-10 px-4 text-center`}>
                <div className='flex items-end overflow-hidden justify-center rounded-full w-60 h-60 border border-gray-700 bg-gray-100'>
                    <img src={random} alt='' className='w-full rounded-full grayscale' />
                </div>

                <div className='grid grid-rows-2'>

                    <h2 className={`text-3xl font-bold ${styles.times_new_roman}`}>
                        John Doe
                    </h2>

                    <p>
                        {props.role}
                    </p>

                </div>

                <div className='grid grid-cols-3 gap-4'>
                    <a href='/'>
                        <FaLinkedin className='text-xl' />
                    </a>
                    <a href='/'>
                        <FaInstagram className='text-xl' />
                    </a>
                    <a href='/'>
                        <FaTwitter className='text-xl' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default index