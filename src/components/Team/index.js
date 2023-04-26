import React from 'react'
import Navbar from '../Navbar'
import Card from './Card'
import rohil from '../../Leads/PRESIDENT ROHIL AHUJA.jpeg'
import harsh from '../../Leads/VICE PRESIDENT HARSH VALAMBE.jpeg'
import meghraj from '../../Leads/GENERAL SECRETARY Meghraj Vyas.jpg'
import faiza from '../../Leads/GENERAL SECRETARY Faizah Kureshi.webp'
import nimish from '../../Leads/TECHNICAL HEAD Nimish Kashyap.jpg'
import aditi from '../../Leads/DESIGN HEAD ADITI JAISWAL.jpg'
import shatakshi from '../../Leads/FINANCE _ SOCIAL MEDIA HEAD SHATAKSHI SHREE.jpg'
import nachiket from '../../Leads/CONTENT HEAD Nachiket Gersappa.jpg'
import hritik from '../../Leads/OPERATIONS HEAD 1 HRITIK GOEL.jpg'
import rahul from '../../Leads/OPERATIONS HEAD 2 RAHUL SUNOV.jpg'


function index() {
  return (
    <>

      <div className='w-full h-auto flex items-center justify-center gap-10 flex-col p-10'>
        <div className='flex items-center justify-center w-full h-auto'>
          <Card name='Rohil Ahuja' role='President' image={rohil}/>
        </div>
        <div className='flex items-center justify-center flex-wrap gap-2 md:gap-6'>
          <Card name='Harsh Valambe' role='Vice-President' image={harsh}/>
          <Card name='Meghraj Vyas' role='General Secretary' image={meghraj}/>
          <Card name='Faiza Kureshi' role='General Secretary' image={faiza}/>
        </div>
        <div className='flex items-center justify-center gap-6 flex-wrap'>
          <Card name='Nimish Kashyap' role='Technical Lead' image={nimish}/>
          <Card name='Aditi Jaiswal' role='Design Lead' image={aditi}/>
          <Card name='Shatakshi Shree' role='Finance & Social Media Lead' image={shatakshi}/>
          <Card name='Nachiket Gersappa' role='Content Lead' image={nachiket}/>
          <Card name='Rahul Sunov' role='Operations Lead' image={rahul}/>
          <Card name='Hritik Goel' role='Operations Lead' image={hritik}/>
        </div>
      </div>
    </>
  )
}

export default index