import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faRupeeSign, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Index = (props) => {


  const events = [
    {
      id: 1,
      name: "Sharkathon",
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-gallery-poster-design-template-56692faba5007ded8555b0687c0906ed.jpg?ts=1636993725",
      description: "Sharkathon is an annual event that brings together shark enthusiasts and experts to promote shark conservation and educate the public about these fascinating creatures. Participants engage in various activities such as shark tagging, diving with sharks, and attending educational sessions on shark behavior and biology.",
      date: "10 March",
      location: "MG Auditorium",
      price: "500"
    }
  ]

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleShowFullDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderDescription = () => {
    if (showFullDescription) {
      return (
        <>
          {events.map(event => (
            <p className='text-sm text-gray-500 font-light leading-relaxed'>{event.description}</p>
          ))}
        </>
      );
    }
    return (
      <>
        {events.map(event => (
          <span>
            <p className='w-full text-sm text-gray-500 font-light leading-relaxed'>{`${event.description.slice(0, 50)} ...`}</p>
            <button
              className='text-[#1E90FF] hover:text-[#1E90FF] font-semibold'
              onClick={toggleShowFullDescription}
            >
              Read More
            </button>
          </span>
        ))}
      </>
    );
  };


  return (

    <>
      <div className='flex items-center justify-start'>

        {
          events.map(event => (
            <div className='shadow-xl w-72 group hover:shadow-2xl p-5 rounded-lg flex items-center justify-center flex-col gap-5'>
              <div className='rounded-lg grid '>
                <img src={event.image} alt='' className='rounded-lg grid-cols-2 w-full' />
                <div className='flex items-center justify-center flex-col w-14 h-14 bg-[#00000074] border border-[#ffffff46] text-white shadow-xl rounded-lg relative bottom-60 left-32 group-hover:bg-gray-900 transition-all duration-300'>
                  <span className='text-3xl font-semibold'>
                    {event.date.slice(0, 2)}
                  </span>
                  <span className='text-xs'>
                    {event.date.slice(3,)}
                  </span>
                </div>
              </div>

              <div className='flex items-start justify-center flex-col -mt-12'>
                <h2 className='text-2xl font-semibold'>
                  {event.name}
                </h2>
                <p className='w-full text-sm text-gray-500 font-light leading-relaxed'>
                  {renderDescription()}
                </p>
              </div>

              <div className='flex items-center justify-between w-full text-sm text-gray-600'>
                <div className='flex items-center justify-center gap-1'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <p>
                    {event.location}
                  </p>
                </div>
                <div className='flex items-center justify-center gap-1'>
                  <FontAwesomeIcon icon={faRupeeSign} />
                  <p>
                    {event.price}
                  </p>
                </div>
              </div>

              <div className=''>
                <button className={`${props.past ? 'bg-gray-900 opacity-50 text-sm px-12' : 'bg-gray-800 text-sm px-16'}  w-full rounded-lg  py-3 text-white flex items-center justify-center gap-2 hover:rounded-full hover:bg-gray-900 group-hover:rounded-full group-hover:bg-gray-900 transition-all`}>
                  {props.past ? "Registration Closed" : "Register Now"}
                  <FontAwesomeIcon icon={faExternalLinkAlt} className={`${props.past? "hidden" : "block"}`} />
                </button>

              </div>

            </div>
          ))
        }
      </div>
    </>
  );
};

export default Index;
