import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HoverDiv({isOpen ,setIsOpen}) {

    useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // پاکسازی در زمان Unmount شدن
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div className="md:hidden" >
        {isOpen && (
          <div className={`fixed top-0  left-0 inset-0 h-full w-full backdrop-blur-sm justify-items-start bg-opacity-80  shadow-lg z-50 transition-transform   duration-300  ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className=" w-40 bg-white h-full">
              <button onClick={() => setIsOpen(false)}
              className="font-bold text-xl sm:text-2xl w-10 h-10 mt-4 ml-3 rounded-full shadow  shadow-black items-center">x</button>

              <div className="w-full justify-items-center items-center">
                <div className="flex flex-col gap-5  w-32 py-4 mt-10  rounded">
                    <Link className="flex gap-2 cursor-pointer"
                    onClick={() => setIsOpen(false)} href='/'>
                    <Image
                      alt='img'
                      src='/images/Menu/home.png'
                      width={20}
                      height={20}
                      className='ml-5 cursor-pointer min-w-[30px]'
                    />
                    <span className=" font-semibold  rounded-full">Home
                   </span>
                  </Link>
                   <Link className="flex gap-2 cursor-pointer"
                    onClick={() => setIsOpen(false)} href='/menu'>
                    <Image
                      alt='img'
                      src='/images/Menu/menu2.png'
                      width={20}
                      height={20}
                      className='ml-5 cursor-pointer min-w-[30px]'
                    />
                    <span className=" font-semibold  rounded-full">Menu
                   </span>
                  </Link>
                   <Link className="flex gap-2"
                    onClick={() => setIsOpen(false)} href='#service'>
                    <Image
                      alt='img'
                      src='/images/Menu/services.png'
                      width={20}
                      height={20}
                      className='ml-5 cursor-pointer min-w-[30px]'
                    />
                    <span className=" font-semibold  rounded-full">Services
                   </span>
                   </Link>
  
                    <Link className="flex gap-2"
                    onClick={() => setIsOpen(false)} href='#offer'>
                    <Image
                      alt='img'
                      src='/images/Menu/offer.png'
                      width={20}
                      height={20}
                      className='ml-5 cursor-pointer min-w-[30px]'
                    />
                    <span  className=" font-semibold  rounded-full">Offers
                   </span>
                   </Link>
                
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}
