import React from 'react';

import Author from '../components/Author';
import Link from 'next/link';
import Image from 'next/image';

export default function Category() {
  return (
    <section className='container mx-auto md:px-20 py-16'>
      <div className='grid lg:grid-cols-2'>
        <div className='item'>
          <h1 className='font-bold text-4xl py-12'>City Commuter</h1>
          <div className='flex flex-col gap-6'>
            {/* posts */}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
        <div className='item'>
          <h1 className='font-bold text-4xl py-12'>Trail Rides</h1>
          <div className='flex flex-col gap-6'>
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className='flex gap-5'>
      <div className='image flex flex-col justify-start'>
        <Link href={'/'}>
          <a>
            <Image
              src={'/images/dayo1.jpg'}
              className='rounded'
              width={300}
              height={250}
            />
          </a>
        </Link>
      </div>
      <div className='info flex justify-center flex-col'>
        <div className='cat'>
          <Link href={'/'}>
            <a className='text-orange-600 hover:text-orange-800'>
              City Commutes, Travel
            </a>
          </Link>
          <Link href={'/'}>
            <a className='text-gray-800 hover:text-gray-600'>- July 3, 2022</a>
          </Link>
        </div>
        <div className='title'>
          <Link href={'/'}>
            <a className='text-xl font-bold text-gray-800 hover:text-gray-600'>
              Your most unhappy customers are your greatest source of learning
            </a>
          </Link>
        </div>
        <Author></Author>
      </div>
    </div>
  );
}
