import React from 'react';
import { logo, call, facebook, gmail, googlebadge } from '../assets';

export const Footer = () => {
  return (
    <div>
      <div className='bg-green-700 md:h-[180px] flex flex-col md:flex-row text-white py-7 justify-center px-4 md:px-[40px]'>
        <div className='md:w-1/4 text-center mb-4 md:mb-0'>
          <div className='flex items-center justify-center'>
            <img src={logo} alt='logo' className='w-12 h-12' />
            <h1 className='text-white ml-2'>REWAY</h1>
          </div>
          <div className='flex justify-center mt-2'>
            <a href="your_call_link" className='px-1' target="_blank" rel="noopener noreferrer">
              <img src={call} alt='call' className='w-6 h-6' />
            </a>
            <a href="your_gmail_link" className='px-1' target="_blank" rel="noopener noreferrer">
              <img src={gmail} alt='gmail' className='w-6 h-6' />
            </a>
            <a href="your_facebook_link" className='px-1' target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt='facebook' className='w-6 h-6' />
            </a>
          </div>
        </div>
        <div className='md:w-1/4 text-center mb-4 md:mb-0'>
          <ul>
            <li className='hover:underline'>Home</li>
            <li className='hover:underline'>About</li>
            <li className='hover:underline'>Contact</li>
            <li className='hover:underline'>Blogs</li>
          </ul>
        </div>
        <div className='md:w-1/4 text-center mb-4 md:mb-0'>
          <ul>
            <li className='hover:underline'>Testimonials</li>
            <li className='hover:underline'>Our Journey</li>
            <li className='hover:underline'>Sustainable goals</li>
            <li className='inline-block bg-white text-green-700 font-medium rounded-s p-2'>E-marketplace</li>
          </ul>
        </div>
        <div className='md:w-1/4 text-left items-start'>
          <p className='text-2xl font-medium mb-4'>Download the <span className='text-green-500 font-bold'>Reway</span> App, Now!</p>
          <a href="your_call_link">
          <img className='w-[140px] h-auto ' src={googlebadge} alt='google' />

          </a>
        </div>
      </div>
      <div className='h-[40px] bg-slate-200'>
        <p className='text-center text-gray-600 py-[5px] font-thin'>Copyright © 2023  Reway - All Rights Reserved.</p>
      </div>
    </div>
  );
};