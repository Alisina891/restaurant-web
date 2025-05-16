'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import HoverDive from'./HoverDiv';
import Link from 'next/link';

export default function Header() {
  const [isOpen , setIsOpen ] = useState(false);
  const toggleMenu = () =>  setIsOpen(!isOpen);

  return (
    <header className='w-full fixed top-0 z-50  shadow shadow-gray-300 -ml-5 md:-ml-[60px] max-w-screen-2xl  pb-3 max-md:pr-4 md:px-5 bg-white justify-center items-center'>
      <HoverDive 
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      />
      <section className='flex items-center pt-[15px] justify-between max-md:justify-center '>
        <Image
            alt='img'
            src='/images/Menu/menu.png'
            width={20}
            height={20}
            className='md:hidden max-md:absolute left-2 ml-5 cursor-pointer '
            onClick={toggleMenu}
            />
        <p className='font-extrabold text-2xl  md:text-3xl  '>
          <span className='px-[7px] rounded-lg bg-lime-400 text-white'>F</span>OODI
        </p>

        <div className='w-full md:max-w-[270px] lg:max-w-[350px] items-center justify-between font-sans font-semibold hidden md:flex'>
          <button className='text-lime-400' ><Link href='/'>Home</Link></button>
          <div className='flex justify-center items-center '>
            <button
            ><Link href='/menu'>Menu</Link></button>
          </div>

          <div className='flex justify-center items-center gap-2'>
            <button><Link href='#service'>Services</Link></button>
            
          </div>

          <button><Link href='#offer'>Offers</Link></button>
        </div>

        <div className='flex  items-center justify-between'>
          <div className='flex justify-between min-w-[75px] items-center max-md:hidden'>

            <div className='relative'>
              <Image
                src='/images/store.png'
                alt='img'
                width={17}
                height={17}
                className='md:w-[20px] md:h-[20px]'
              />      
              <div className='w-4 h-4 text-xs absolute rounded-full bg-lime-400 flex items-center justify-center top-0 right-0 -mt-1 -mr-[6px] text-white font-semibold'>
                0
              </div>
            </div>
            <Image
                src='/images/search.png'
                alt='img'
                width={17}
                height={17}
                className='md:w-[20px] md:h-[20px] mr-3'
              />
          </div>

          <div className='flex rounded-full px-4 py-2 bg-lime-400 gap-2 items-center w-[100px] md:w-[140px] justify-center  text-white font-semibold cursor-pointer max-md:absolute right-2  '>
            <div>
              <Image
                src='/images/call.png'
                alt='img'
                width={15}
                height={15}
                className=' min-w-[15px] h-[15px] '
              />
            </div>
            <p className='text-sm md:text-lg'><Link href='#contact'>Contact</Link></p>
          </div>
        </div>
      </section> 
    </header>
  );
}
