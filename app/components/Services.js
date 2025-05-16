import React from 'react'
import Image from 'next/image'

export default function End() {
  return (
    <div id='service' className='max-md:flex-col flex items-center mt-20 md:py-10 justify-between '>
        <div className='w-full justify-start ml-3'>
            <div className='flex flex-col max-w-[290px]   lg:max-w-[600px] '>
                <p className='text-xs font-sans font-semibold text-red-500 '>OUR STORY & SERVICES</p>
                
                <h2 className='text-2xl font-bold mt-4 md:text-4xl lg:text-5xl tracking-wide'>
                  Our Culinary Journey And Sevices
                </h2>
                
                <p className='text-gray-800 mt-3 lg:max-w-[400px] '>Rooted in passion, we curate unforgettable dining experience and offer exceptional services, blending culinary artistry with warm hospitality.</p>

                <button className='bg-lime-500 py-2 rounded-full w-[110px] text-white font-sans font-semibold mt-5'>
                  Explore
                </button>
            </div>

        </div>

        <div className=' columns-2 mt-10 lg:mr-7 '>
        <div className='w-[150px] h-[180px] sm:w-[180px]  lg:w-[210px] pb-3 flex-col text-center shadow-lg rounded-2xl  px-3 shadow-gray-400 justify-items-center items-center pt-3 mb-5'>
            <Image
            alt='img'
            src='/images/ServerS/1.png'
            width={55}
            height={55}
            className='md:w-[63px] h-[63px] lg:w-[70px] lg:h-[70px]'
            />
            <h3 className='font-bold text-lime-500  text-sm lg:text-lg mt-2'>CATERING</h3>
            <p className=' text-xs font-semibold text-lime-700 mt-2'>Delight your guests with our flavors and presentaion</p>
          </div>

          <div className='w-[150px] h-[180px] sm:w-[180px]  lg:w-[210px] pb-3 flex-col text-center shadow-lg rounded-2xl  px-3 shadow-gray-400 justify-items-center items-center pt-3 mb-5'>
            <Image
            alt='img'
            src='/images/ServerS/2.png'
            width={55}
            height={55}
            className='md:w-[63px] h-[63px] lg:w-[70px] lg:h-[70px]'
            />
            <h3 className='font-bold text-lime-500  text-sm lg:text-lg mt-2'>FAST DELIVERY</h3>
            <p className=' text-xs font-semibold text-lime-700 mt-2'>We deliver your order promptly to yur door</p>
          </div>

          <div className='w-[150px] h-[180px] sm:w-[180px] lg:w-[210px] pb-3 flex-col text-center shadow-lg rounded-2xl  px-3 shadow-gray-400 justify-items-center items-center pt-3 mb-5'>
            <Image
            alt='img'
            src='/images/ServerS/3.png'
            width={55}
            height={55}
            className='md:w-[63px] h-[63px] lg:w-[70px] lg:h-[70px]'
            />
            <h3 className='font-bold text-lime-500  text-sm lg:text-lg mt-2'>ONLINE ORDERING</h3>
            <p className=' text-xs font-semibold text-lime-700 mt-2'>Explore menu & order with ease using out Online Ordering</p>
          </div>

          <div className='w-[150px] h-[180px] sm:w-[180px] lg:w-[210px] pb-3 flex-col text-center shadow-lg rounded-2xl  px-3 shadow-gray-400 justify-items-center items-center pt-3 mb-5'>
            <Image
            alt='img'
            src='/images/ServerS/4.png'
            width={55}
            height={55}
            className='md:w-[63px] h-[63px] lg:w-[70px] lg:h-[70px]'
            />
            <h3 className='font-bold text-lime-500  text-sm lg:text-lg mt-2'>GIF CARDS</h3>
            <p className=' text-xs font-semibold text-lime-700 mt-2'>Give the gift of exceptional dining with Foodi Gift Cards</p>
          </div>
        </div>
    </div>
  )
}
