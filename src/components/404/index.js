import React from 'react'
import design from '../../assets/404.png'

function index() {
  return (
    <>
      <div className='flex items-center justify-center'>
        <img src={design} alt='404 Error' className='w-1/2'/>
      </div>
    </>
  )
}

export default index