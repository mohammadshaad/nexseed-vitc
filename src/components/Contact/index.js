import React from 'react'
import Navbar from '../Navbar'
import Contact from '../../assets/contact.png'
import Pattern from '../../assets/pattern.png'

function index() {
  return (
    <>
      <Navbar />

      <div className='w-full h-full flex items-center justify-center p-5 md:p-10 relative top-16 z-60'>

        <div className='max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between h-full'>

          <div className='w-full md:w-1/2 h-full flex items-start justify-center flex-col gap-4'>
            <p className=' font-serif text-[#1E90FF]'>
              Contact Us
            </p>
            <h1 className='w-full h-full text-4xl font-bold font-serif'>
              Get In Touch With Us
            </h1>

            <p className='w-full h-full text-gray-500 font-normal'>
              If you have any questions, feedback, or just want to say hello, we'd love to hear from you! Please don't hesitate to get in touch with us through our contact form, email, or social media channels.
            </p>
            <div className='grid grid-cols-3 w-full'>

              <div className='contact-form bg-white shadow-lg w-full h-full flex items-center justify-center rounded-lg mt-4 p-10 z-20 col-span-3 '>
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label for="name" className="leading-7 text-sm text-gray-800">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="email"
                        className="leading-7 text-sm text-gray-800"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        for="message"
                        className="leading-7 text-sm text-gray-800"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button className="flex mx-auto text-white bg-gray-800 border-0 py-2 px-10 focus:outline-none hover:bg-gray-900 rounded-lg hover:rounded-full text-base">
                      Submit
                    </button>
                  </div>
                  <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                    <a className="text-gray-800" href='/'>example@email.com</a>
                    <div className='mt-4'>
                      <span className="inline-flex">
                        <a className="text-gray-500" href='/'>
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-4 text-gray-500" href='/'>
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-4 text-gray-500" href='/'>
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <rect
                              width="20"
                              height="20"
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                          </svg>
                        </a>

                      </span>
                    </div>

                  </div>
                </div>
              </div>

              <img src={Pattern} alt='' className='z-10 relative bottom-[550px] left-[550px] opacity-70' />

              <img src={Pattern} alt='' className='z-10 relative bottom-10 right-56 opacity-70' />

            </div>

          </div>


          <div className='w-full md:w-1/2 lg:w-1/3 flex items-center justify-center'>
            <img src={Contact} alt='' className='w-full h-full' />
          </div>

        </div>

      </div>
    </>
  )
}

export default index