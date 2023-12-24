import React from 'react';
import { india } from '../assets';

export const Map = () => {
  return (
    <div className='flex flex-col md:flex-row mx-12'>
      <div className="w-full md:w-1/2 hidden my-0 md:my-16 md:mx-8 m-4 mt-8  sm:block">
        <img className="w-full h-auto object-cover" src={india} alt="" />
      </div>
      <div className="w-full md:w-1/2 dark:shadow-lg md:mx-20 my-14 -mb-2 md:my-20">
        <div className='mx-4  md:mx-20'>
          <div className="text-center md:text-start">
            <h1 className="inline-block text-green-500 bg-green-200 shadow-md bg-opacity-75 md:p-3 md:my-8"> OUR PAST RESULTS </h1>
          </div>
          <div className='my-12 w-full p-1  rounded-md  flex flex-col items-center justify-center md:block'>
            <h1 className='text-green-500  text-4xl inline-block md:text-7xl'>21 </h1>
            <span className='text-green-500 font-semibold text-xl md:text-3xl'>recyclers</span>
            <p className='my-3 text-sm text-center md:text-start'> 21 recyclers nationwide have joined Reway, amplifying our impact on sustainable recycling practices across India.</p>
          </div>

          <div className='my-12   p-1 flex flex-col items-center justify-center md:block'>
            <h1 className='text-green-500 text-4xl inline-block md:text-7xl'>8.64 </h1>
            <span className='text-green-500 text-xl font-semibold md:text-3xl'>ton</span>
            <p className='my-3  text-sm text-center md:text-start'>A commitment to sustainability with 8.64 tons of saved carbon footprints, contributing to a greener future.</p>
          </div>

          <div className='my-12  p-1 flex flex-col items-center justify-center md:block'>
            <h1 className='text-green-500 inline-block text-4xl md:text-7xl'>6000+</h1>
            <span className='text-green-500 font-semibold text-xl md:text-3xl'>kg</span>
            <p className='my-3  text-sm text-center md:text-start'>successfully recycled over 6000 kg of waste, turning environmental responsibility into tangible earnings.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
