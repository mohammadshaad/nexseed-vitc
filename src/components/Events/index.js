import React from 'react'
import Navbar from '../Navbar'
// import Styles from '../Events/styles/style.module.css'
import Header from '../../components/Events/header'
import Card from './Card'

function index() {
    return (
        <>
            <Navbar />


            <div className='flex items-center justify-center'>

                <div className='absolute top-16 max-w-7xl w-full '>

                    <Header />


                    <div className='p-5 flex items-center md:items-start justify-center gap-10 flex-col'>
                        <div className='text-3xl font-semibold'>
                            Upcoming events
                        </div>

                        <div className='flex items-start justify-start gap-4 flex-col md:flex-row '>
                            <Card past={false} />
                            <Card past={false} />
                            <Card past={false} />
                        </div>

                    </div>

                    <hr className='mt-10'/>

                    <div className='p-5 flex items-center md:items-start justify-center gap-10 flex-col mt-6'>
                        <div className='text-3xl font-semibold'>
                            Past events
                        </div>

                        <div className='flex items-start justify-start gap-4 flex-col md:flex-row '>
                            <Card past={true}/>
                            <Card past={true}/>
                            <Card past={true}/>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default index
