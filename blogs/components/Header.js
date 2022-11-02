import React from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitterSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';

const Header = () => {
  return (
    <header className='bg-gray-50'>
      <div
        className='flex flex-col items-center 
      sm:flex-row
      sm:justify-between
      text-center py-3
       xl:container xl:mx-auto'>
        <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center  items-center py-4 sm:py-0'>
          <input className='input-text' type='' placeholder='Search...' />
        </div>
        <div className='shrink w-80 sm:order-2'>
          <Link href={'/'}>
            <a className='cursor-pointer text-5xl font-bold'>CycleBlogs</a>
          </Link>
        </div>
        <div className='w-96 order-3 flex justify-center'>
          <div className='flex gap-6'>
            <Link href={'/'}>
              <a>
                <FaFacebookF
                  size={20}
                  className='text-gray-700 hover:text-blue-700'
                />
              </a>
            </Link>
            <Link href={'/'}>
              <a>
                <FaTwitterSquare
                  size={20}
                  className='text-gray-700 hover:text-blue-700'
                />
              </a>
            </Link>
            <Link href={'/'}>
              <a>
                <FaWhatsappSquare
                  size={20}
                  className='text-gray-700 hover:text-blue-700'
                />
              </a>
            </Link>
            <Link href={'/'}>
              <a>
                <FaInstagram
                  size={20}
                  className='text-gray-700 hover:text-blue-700'
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
