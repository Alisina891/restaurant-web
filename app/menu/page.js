'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  const [filter , setFilter ] = useState('all');
  
  const foods = [
    {
      name: 'Greek Salad',
      description: 'Fresh and delicious pasta with vegetables',
      image: '/images/Salad/greek1.jpg',
      price: '8.85',
      type: 'salad'
    },
    {
      name: 'Pasta',
      description: 'Fresh and delicious pasta with vegetables',
      image: '/images/Pasta/1.jpg',
      price: '3.56',
      type: 'pasta'
    },
    {
      name: 'Pizza',
      description: 'Fresh and delicious Pizza with vegetables',
      image: '/images/Pizza/1.jpg',
      price: '5.67',
      type: 'pizza'
    },
    {
      name: 'Caesar Salad',
      description: 'Tomatoes, cucumbers, olives, and feta cheese',
      image: '/images/Salad/caesar.jpg',
      price: '7.50',
      type: 'salad'
    },
    {
      name: 'Pasta',
      description: 'Tomatoes, cucumbers, olives, and feta cheese',
      image: '/images/Pasta/2.jpg',
      price: '3.56',
      type: 'pasta'
    },
    {
      name: 'Pizza',
      description: 'Describe the items.',
      image: '/images/Pizza/2.jpg',
      price: '5.67',
      type: 'pizza'
    },
    {
      name: 'Pasta Salad',
      description: 'Romaine, parmesan, and croutons with Caesar dressing',
      image: '/images/Salad/pasta.jpg',
      price: '9.20',
      type:  'salad'
    },
    {
      name: 'Pasta',
      description: 'Tomatoes, cucumbers, olives, and feta cheese',
      image: '/images/Pasta/3.jpg',
      price: '3.56',
      type: 'pasta'
    },
    {
      name: 'Pizza',
      description: 'Tomatoes, cucumbers, olives, and feta cheese',
      image: '/images/Pizza/3.jpg',
      price: '5.67',
      type: 'pizza'
    },{
      name: 'Greek Salad',
      description: 'Fresh and delicious pasta with vegetables',
      image: '/images/Salad/greek1.jpg',
      price: '8.85',
      type: 'salad'
    },
    {
      name: 'Pasta',
      description: 'Fresh and delicious pasta with vegetables',
      image: '/images/Pasta/1.jpg',
      price: '3.56',
      type: 'pasta'
    },
    {
      name: 'Pizza',
      description: 'Fresh and delicious Pizza with vegetables',
      image: '/images/Pizza/1.jpg',
      price: '5.67',
      type: 'pizza'
    },
    {
      name: 'Caesar Salad',
      description: 'Tomatoes, cucumbers, olives, and feta cheese',
      image: '/images/Salad/caesar.jpg',
      price: '7.50',
      type: 'salad'
    },
    {
      name: 'Pasta',
      description: 'Tomatoes, cucumbers, olives, and feta cheese',
      image: '/images/Pasta/2.jpg',
      price: '3.56',
      type: 'pasta'
    },
    {
      name: 'Pizza',
      description: 'Describe the items.',
      image: '/images/Pizza/2.jpg',
      price: '5.67',
      type: 'pizza'
    },
    {
      name: 'Pasta Salad',
      description: 'Romaine, parmesan, and croutons with Caesar dressing',
      image: '/images/Salad/pasta.jpg',
      price: '9.20',
      type:  'salad'
    },
    {
      name: 'Pasta',
      description: 'Tomatoes, cucumbers, olives, and feta cheese',
      image: '/images/Pasta/3.jpg',
      price: '3.56',
      type: 'pasta'
    },
    {
      name: 'Pizza',
      description: 'Tomatoes, cucumbers, olives, and feta cheese',
      image: '/images/Pizza/3.jpg',
      price: '5.67',
      type: 'pizza'
    },{
      name: 'Greek Salad',
      description: 'Fresh and delicious pasta with vegetables',
      image: '/images/Salad/greek1.jpg',
      price: '8.85',
      type: 'salad'
    },
    {
      name: 'Pasta',
      description: 'Fresh and delicious pasta with vegetables',
      image: '/images/Pasta/1.jpg',
      price: '3.56',
      type: 'pasta'
    },
    {
      name: 'Pizza',
      description: 'Fresh and delicious Pizza with vegetables',
      image: '/images/Pizza/1.jpg',
      price: '5.67',
      type: 'pizza'
    },
    {
      name: 'Caesar Salad',
      description: 'Tomatoes, cucumbers, olives, and feta cheese',
      image: '/images/Salad/caesar.jpg',
      price: '7.50',
      type: 'salad'
    },
    {
      name: 'Pasta',
      description: 'Tomatoes, cucumbers, olives, and feta cheese',
      image: '/images/Pasta/2.jpg',
      price: '3.56',
      type: 'pasta'
    },
    {
      name: 'Pizza',
      description: 'Describe the items.',
      image: '/images/Pizza/2.jpg',
      price: '5.67',
      type: 'pizza'
    },
    {
      name: 'Pasta Salad',
      description: 'Romaine, parmesan, and croutons with Caesar dressing',
      image: '/images/Salad/pasta.jpg',
      price: '9.20',
      type:  'salad'
    },
    {
      name: 'Pasta',
      description: 'Tomatoes, cucumbers, olives, and feta cheese',
      image: '/images/Pasta/3.jpg',
      price: '3.56',
      type: 'pasta'
    },
    {
      name: 'Pizza',
      description: 'Tomatoes, cucumbers, olives, and feta cheese',
      image: '/images/Pizza/3.jpg',
      price: '5.67',
      type: 'pizza'
    },{
      name: 'Greek Salad',
      description: 'Fresh and delicious pasta with vegetables',
      image: '/images/Salad/greek1.jpg',
      price: '8.85',
      type: 'salad'
    },
    {
      name: 'Pasta',
      description: 'Fresh and delicious pasta with vegetables',
      image: '/images/Pasta/1.jpg',
      price: '3.56',
      type: 'pasta'
    },
    {
      name: 'Pizza',
      description: 'Fresh and delicious Pizza with vegetables',
      image: '/images/Pizza/1.jpg',
      price: '5.67',
      type: 'pizza'
    },
    {
      name: 'Caesar Salad',
      description: 'Tomatoes, cucumbers, olives, and feta cheese',
      image: '/images/Salad/caesar.jpg',
      price: '7.50',
      type: 'salad'
    },
    {
      name: 'Pasta',
      description: 'Tomatoes, cucumbers, olives, and feta cheese',
      image: '/images/Pasta/2.jpg',
      price: '3.56',
      type: 'pasta'
    },
    {
      name: 'Pizza',
      description: 'Describe the items.',
      image: '/images/Pizza/2.jpg',
      price: '5.67',
      type: 'pizza'
    },
    {
      name: 'Pasta Salad',
      description: 'Romaine, parmesan, and croutons with Caesar dressing',
      image: '/images/Salad/pasta.jpg',
      price: '9.20',
      type:  'salad'
    },
    {
      name: 'Pasta',
      description: 'Tomatoes, cucumbers, olives, and feta cheese',
      image: '/images/Pasta/3.jpg',
      price: '3.56',
      type: 'pasta'
    },
    {
      name: 'Pizza',
      description: 'Tomatoes, cucumbers, olives, and feta cheese',
      image: '/images/Pizza/3.jpg',
      price: '5.67',
      type: 'pizza'
    },
  ]

  const fillterSection = filter === 'all' ? foods : foods.filter(food => food.type === filter);

  return (
    <main className='w-full max-w-screen-2xl bg-white text-black'>
      <div className=' flex   w-full bg-white  top-0 items-center fixed z-30  pl-8 shadow-md   max-w-screen-2xl justify-center '>
          <button className='flex font-bold py-2   rounded-full text-xs md:text-base text-gray-800  text-center items-center absolute left-4 md:left-7 '>
            <Link href='/'>
            <Image
              
              alt='img'
              src='/images/back.png'
              width={35}
              height={35}
              className=' shadow rounded-full shadow-black'
            />
            </Link>
            
          </button> 

          <h2 className="text-center font-extrabold text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-lime-500 via-yellow-400 to-red-500 drop-shadow-lg tracking-wide mt-3 mb-3 ">
            Menus
          </h2>

          


      </div>

      <div className=" text-md md:text-xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-500 via-yellow-400 to-red-500 animate-pulse drop-shadow-lg  mb-10 md:mb-12 sm:mb-8  pt-[75px] md:pt-[90px] ml-3  flex justify-between gap-3 max-w-[450px]  pr-3 md:pl-5">
        <button className={`w-[90px] h-[35px] rounded-full ${filter === 'all' ? 'shadow-gray-800  rounded-full bg-lime-500 shadow-md text-white' : 'shadow-gray-400 shadow'}`}
        onClick={() => setFilter('all')}>
          All
        </button>
        <button className={`w-[90px] h-[35px] rounded-full ${filter === 'salad' ? 'shadow-gray-800  rounded-full bg-lime-500 shadow-md text-white' : 'shadow-gray-400 shadow'}`}
        onClick={() => setFilter('salad')}>
          Salad
        </button>
        <button className={`w-[90px] h-[35px] rounded-full ${filter === 'pizza' ? 'shadow-gray-800  rounded-full bg-lime-500 shadow-md text-white' : 'shadow-gray-400 shadow'}`}
         onClick={() => setFilter('pizza')}>
          Pizza
        </button>
        <button className={`w-[90px] h-[35px] rounded-full ${filter === 'pasta' ? 'shadow-gray-800  rounded-full bg-lime-500 shadow-md text-white' : 'shadow-gray-400 shadow'}`}
         onClick={() => setFilter('pasta')}>
          Pasta
        </button>
      </div>

      <div className='flex-col md:columns-2 lg:px-5 pr-1'>
        {fillterSection.map((food, index) => (
          <div key={index} className='flex gap-7 justify-between lg:px-10 mb-5 mx-3  border-b-gray-400  rounded-xl border-b pb-3 shadow-gray-200 px-2 py-1'>
            <div className='flex flex-col mt-12'>
              <h1 className='font-bold text-2xl text-lime-600 lg:text-3xl'>{food.name}</h1>
              <p className='mt-1 font-semibold lg:text-sm text-xs max-w-[300px] text-gray-600'>{food.description}</p>
            </div>

            <div className='relative'>
              <div className='min-w-[160px]'>
                <Image
                alt={food.name}
                src={food.image}
                width={160}
                height={160}
                className='rounded-full min-w-[160px] h-[160px] '
              /> 
              </div>
               <div className='border-4 border-white rounded-full w-[130px] h-[130px] absolute top-5 ml-4'></div>
              <div className='border-4 border-white rounded-full w-[100px] h-[100px] absolute top-9 ml-8'></div>
              <div className='absolute top-[135px] -right-2 w-[50px] flex justify-center items-center rounded bg-yellow-400'>
                <p className='font-bold'>
                  ${parseFloat(food.price).toFixed(0)}.<span className='text-xs'>{food.price.split('.')[1]}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
