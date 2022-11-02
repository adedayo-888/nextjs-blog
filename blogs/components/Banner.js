import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

export default function Banner() {
  SwiperCore.use([Autoplay]);

  //   const bg = {
  //     background: "url('/images/cyclebcg.jpg') no-repeat",
  //     backgroundPosition: 'right',
  //  style={bg} };

  return (
    <section className='py-16 bg-zinc-400'>
      <div className='container mx-auto md:px-20'>
        <h1 className='font-bold text-4xl pb-12 text-center'>Cycling Trends</h1>
        <Swiper slidesPerView={1}>
          <SwiperSlide>{Slide()}</SwiperSlide>
          {/* <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className='grid md:grid-cols-2 gap-4'>
      <div className='image'>
        <Link href={'/'}>
          <a>
            <Image src={'/images/aboutcycles.jpg'} width={600} height={600} />
          </a>
        </Link>
      </div>
      <div className='info flex justify-center flex-col'>
        <div className='cat'>
          <Link href={'/'}>
            <a className='text-green-400 hover:text-gray-300 text-sm pl-4'>
              City Commuting, Moutain bikes
            </a>
          </Link>
          <Link href={'/'}>
            <a
              className='text-gray-100 hover:text-gray-300 text-sm
            '>
              - July 3, 2022
            </a>
          </Link>
        </div>
        <div className='title'>
          <Link href={'/'}>
            <a className='text-3xl md:text-4xl font-bold text-gray-100 hover:text-gray-300 text-center pl-4 w-full'>
              Cycle Rides Exploring!
            </a>
          </Link>
        </div>
        <div className='flex flex-col py-5 px-4 justify-center items-center'>
          <p className='text-gray-100  text-lg'>
            London has been my favourite city to ride in. Cycling is a fantastic
            method for seeing the city!
          </p>
          <p className='text-gray-100 text-lg'>
            It's incredible to see so many people embracing cycling given the
            sheer numbe.r of bikes present
          </p>
          <p className='text-gray-100 text-lg'>
            It's always fun to cruise around on a bike, regardless of the
            weather. I will admit that in the nicer areas, they are a little
            stringent about lighting on your bike, I was pulled over by the
            police for not having any lights on.
          </p>
        </div>
        <h1 className='text-gray-100'>author</h1>
      </div>
    </div>
  );
}
