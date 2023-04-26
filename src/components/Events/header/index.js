import React from 'react'
import eventsBg from '../../../assets/events-bg.png'

function index() {
    return (
        <>

            <div className='w-full flex items-center justify-center p-2 md:p-5 '>
                <div className={`bg-gray-900 w-fit flex items-center justify-center relative shadow-xl rounded-lg`}>
                    <img src={eventsBg} alt='' className='opacity-50 bg-gray-900 w-full h-full rounded-lg' />
                    <h1 className='absolute top-1/2 left-4 md:left-10 transform -rotate-90 -translate-x-1/2 -translate-y-1/2 text-lg md:text-6xl font-thin text-white'>
                        EVENTS
                    </h1>
                </div>
            </div>

        </>
    )
}

export default index

