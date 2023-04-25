import React from 'react'
import Navbar from '../Navbar'
import Card from './Card'

function index() {
  return (
    <>

      <div className='w-full h-auto flex items-center justify-center gap-10 flex-col p-10'>
        <div className='flex items-center justify-center w-full h-auto'>
          <Card role='President'/>
        </div>
        <div className='flex items-center justify-center flex-wrap gap-2 md:gap-6'>
          <Card role='Vice-President'/>
          <Card role='General Secretary'/>
        </div>
        <div className='flex items-center justify-center gap-6 flex-wrap'>
          <Card role='Technical Lead'/>
          <Card role='HR Lead'/>
          <Card role='Social Media Lead'/>
          <Card role='Hardware Lead'/>
        </div>
      </div>
    </>
  )
}

export default index