import React from 'react'
import Image from 'next/image'



export default function CustomerS() {
  return (
    <div className='max-md:flex-col flex  mt-5 md:mt-20 justify-between w-full px-1  lg:px-10 gap-4 '>
       <div className='flex justify-center items-center relative'>
            <Image
            alt='img'
            src='/images/CustomerS/rectangle.png'
            width={230}
            height={230}
            className='mt-36 md:w-[300px] md:min-w-[300px] '
            />
            
            <Image
            alt='img'
            src='/images/CustomerS/chef.png'
            width={200}
            height={200}
            className=' absolute top-0 mr-4 md:w-[270px] md:-mt-12  '
            />
       </div>

       <div className=" max-md:pl-1 flex-col justify-start items-center mt-3 max-w-[380px] lg:max-w-[500px] ">
            <p className='text-xs text-red-500 font-semibold mt-7'>TESTIMONIALS</p>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold mt-4'>What Our Customers Say About Us</h1>
            <p className='text-gray-800 mt-3'>
  &quot;I had the pleasure of dining at Foodi last night, and I&apos;m still raving about the experience! The attention to detail in presentation and service was impeccable&quot;
</p>

            
            <div className='flex mt-4'>
                <Image
                alt='img'
                src='/images/CustomerS/1.png'
                width={50}
                height={50}
                />

                <Image
                alt='img'
                src='/images/CustomerS/2.png'
                width={50}
                height={50}
                className='-ml-4'
                />

                <Image
                alt='img'
                src='/images/CustomerS/3.png'
                width={50}
                height={50}
                className='-ml-4'
                />

                <div className='flex flex-col'>
                    <h3 className='text-lg font-semibold font-sans'>
                        CustomerFeedback
                    </h3>
                    <div className='flex  items-center justify-between'>
                        <Image
                        alt='img'
                        src='/images/star.png'
                        width={15}
                        height={15}
                        />
                        <p className='font-semibold ml-1 mr-2'>4.9</p>
                        <p>(18.6k Reviews)</p>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}
