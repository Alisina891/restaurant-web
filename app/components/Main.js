import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Main() {



  return (
    <div className=":w-full pt-10 md:pt-28">
      <section className="flex flex-col md:flex-row items-center max-md:justify-center md:justify-between text-center md:text-left pt-10  pb-20 md:px-5 lg:px-20 ">
        <div className="max-w-md w-full max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
          <h1 className=" font-extrabold text-3xl md:text-[clamp(1rem,3.0vw,4rem)] leading-tight text-gray-800">
            Wellcome to <span className='text-lime-400'>our Restaurant</span>
            
          </h1>

          <p className="font-sans text-sm mt-4 font-medium text-gray-700 md:max-w-[350px] max-md:pt-2 max-md:max-w-[300px]">
            Where Each Plate weaves a Story of Culinary Mastery and passionate Craftsmanship
          </p>

          <div className="flex flex-row sm:items-center gap-4 mt-10">
            <button className="px-5 py-2 bg-lime-400 text-white text-xs font-semibold rounded-full w-[140px]">
              <Link href='/menu'>Order Now</Link>
            </button>

            <div className="flex items-center ">
              <p className=" text-xs font-semibold  min-w-[110px]">Watch Video</p>
              <div className="shadow-xl rounded-full p-1 flex items-center">
                <Image
                  alt="Play Button"
                  src="/images/Polygon 1.png"
                  width={12}
                  height={12}
                  className='min-w-[12px] mr-3'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='relative'>
            <div className='w-[325px] h-[325px] rounded-full bg-lime-500  relative flex items-center justify-center max-md:mt-20'>
                <Image
                alt='img'
                src='/images/Intersect.png'
                width={350}
                height={350}
                className='min-w-[350px] min-h-[350px] md:w-[500px] md:h-[400px] md:-mt-[74px] mr-[35px] md:rotate-0 -mt-[58px] max-md:-rotate-6 relative'
                />
                <Image
                alt='img'
                src='/images/food.png'
                width={150}
                height={100}
                className=' lg:w-[180px] absolute top-10  rounded left-0 -ml-10 sm:-ml-5 lg:-ml-16 py-1 px-2 '
                />

                <div className=' absolute flex justify-between gap-3 -bottom-10'>
                <div className='w-[190px] shadow-lg shadow-black  rounded-lg  flex justify-start items-center bg-white'>
                    <Image
                    alt='img'
                    src='/images/Mask group.png'
                    width={70}
                    height={70}
                    className='bg-white rounded shadow-lg py-1 px-2'
                    />
                    <div className='flex  flex-col  justify-start items-center text-start gap-1 '>
                    <p className='font-semibold text-sm'>Spicy noodles</p>
                    <Image
                    alt='img'
                    src='/images/Group 6.png'
                    width={90}
                    height={10}
                    />
                    <p className='font-semibold text-sm w-full text-start'><span className='text-red-400 text-xs mt-2'>$</span>15.00</p>
                    </div>
                </div>


                <div className='w-[190px]  shadow-lg shadow-black rounded-lg  flex justify-start items-center bg-white'>
                    <Image
                    alt='img'
                    src='/images/Mask group (1).png'
                    width={70}
                    height={70}
                    className='bg-white rounded shadow-lg py-1 px-2'
                    />
                    <div className='flex  flex-col  justify-start items-center text-start gap-1 '>
                    <p className='font-semibold text-sm'>Vegerarian salad</p>
                    <Image
                    alt='img'
                    src='/images/Group 6.png'
                    width={90}
                    height={10}
                    />
                    <p className='font-semibold text-sm w-full text-start'><span className='text-red-400 text-xs mt-2'>$</span>23.00</p>
                    </div>
                </div>
                            
               </div>
            </div>
        </div>
      </section>

      <section className='justify-center items-center text-center mt-8'>
        <p className='text-red-400 text-xs font-sans font-semibold'>CUSTOMER FAVORITES</p>
        <h2 className='font-bold text-xl mt-1'>Popular Catagories</h2>

        <div className=' px-5 flex gap-5 items-center justify-between mt-10 md:px-14 lg:px-[17vw]'>
          <div className='w-[150px] rounded-xl flex-col justify- justify-items-center items-center shadow-lg shadow-gray-400 '>
            <Image
            alt='img'
            src='/images/pngwing 4.png'
            width={100}
            height={100}
            className='h-[90px]'
            />
            <h6 className='font-bold'>Main Dish</h6>
            <p className='text-xs'>(86 dishes)</p>   
          </div>

          <div className='w-[150px] rounded-xl  flex flex-col justify-center justify-items-center items-center shadow-lg shadow-gray-400'>
            <Image
            alt='img'
            src='/images/pngwing 6.png'
            width={100}
            height={100}
            className='h-[90px]'
            />
            <h6 className='font-bold'>Break Fast</h6>
            <p className='text-xs'>(12 break fast)</p>   
          </div>

          <div className='w-[150px] rounded-xl flex flex-col justify-center items-center 
          justify-items-center shadow-lg shadow-gray-400'>
            <Image
            alt='img'
            src='/images/pngwing 3.png'
            width={100}
            height={100}
            className='h-[90px]'
            />
            <h6 className='font-bold'>Dessert</h6>
            <p className='text-xs'>(48 dessert)</p>   
          </div>

          <div className='w-[150px] rounded-xl  md:flex flex-col justify-center items-center 
          justify-items-center shadow-lg shadow-gray-400 hidden'>
            <Image
            alt='img'
            src='/images/pngwing 7.png'
            width={100}
            height={100}
            className='h-[90px]'
            />
            <h6 className='font-bold'>Browse All</h6>
            <p className='text-xs'>(255 items)</p>   
          </div>
        </div>
      </section>
    </div>
  )
}
