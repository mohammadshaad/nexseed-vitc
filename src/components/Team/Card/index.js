import React from 'react'
import random from '../../../assets/random.png'
import styles from '../../../components/Team/styles/Style.module.css'
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


// const details = [
//     {
//         name: "Rohil Ahuja",
//         designation: "President",
//         image: "rohil"
//     },
//     {
//         name: "Harsh Valambe",
//         designation: "Vice President",
//         image: "harsh"
//     },
//     {
//         name: "Meghraj Vyas",
//         designation: "General Secretary",
//         image: "meghraj"
//     },
//     {
//         name: "Faiza Kureshi",
//         designation: "General Secretary",
//         image: "faiza"
//     },
//     {
//         name: "Nachiket Gersappa",
//         designation: "Content Lead",
//         image: "nachiket"
//     },
//     {
//         name: "Aditi Jaiswal",
//         designation: "Design Lead",
//         image: "aditi"
//     },
//     {
//         name: "Nimish Kashyap",
//         designation: "Technical Lead",
//         image: "nimish"
//     },
//     {
//         name: "Hritik Goel",
//         designation: "Operations Lead",
//         image: "hritik"
//     },
//     {
//         name: "Rahul Sunov",
//         designation: "Operations Lead",
//         image: "rahul"
//     },
//     {
//         name: "Rahul Sunov",
//         designation: "Operations Lead",
//         image: "rahul"
//     },
//     {
//         name: "Shatakshi Shree",
//         designation: "Finanace & Social Media Lead",
//         image: "shatakshi"
//     },
//     {
//         name: "Shatakshi Shree",
//         designation: "Finanace & Social Media Lead",
//         image: "shatakshi"
//     }
// ]

function index(props) {
    return (
        <>
            <div className={`${styles.card} flex items-center justify-center flex-col gap-6 shadow-lg hover:shadow-2xl rounded-full w-fit py-10 px-4 text-center`}>


                <div className='flex items-end overflow-hidden justify-center rounded-full w-60 h-60 border border-gray-700 bg-gray-100'>

                    <img key={index} src={props.image} alt='' className='w-full rounded-full grayscale' />

                </div>

                <div className='grid grid-rows-2'>

                    <h2 className={`text-3xl font-bold ${styles.times_new_roman}`}>
                        {props.name}
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