import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white mt-16 pt-10 pb-6 px-6 md:px-12 border-t border-gray-200">
      {/* بخش بالا: ۴ ستون */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* برند */}
        <div>
          <h2 className="text-2xl font-bold text-lime-600">FOODI</h2>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            Savor the artistry where every dish is a culinary masterpiece.
          </p>
        </div>

        {/* لینک‌های مفید */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-lime-600 transition">About us</a></li>
            <li><a href="#" className="hover:text-lime-600 transition">Events</a></li>
            <li><a href="#" className="hover:text-lime-600 transition">Blogs</a></li>
            <li><a href="#" className="hover:text-lime-600 transition">FAQ</a></li>
          </ul>
        </div>

        {/* منو اصلی */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Main Menu</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-lime-600 transition">Home</a></li>
            <li><a href="#" className="hover:text-lime-600 transition">Offers</a></li>
            <li><a href="#" className="hover:text-lime-600 transition">Menus</a></li>
            <li><a href="#" className="hover:text-lime-600 transition">Reservation</a></li>
          </ul>
        </div>

        {/* تماس با ما */}
        <div id='contact'>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="mailto:example@gmail.com" className="hover:text-lime-600 transition">example@gmail.com</a></li>
            <li><a href="tel:+93780031643" className="hover:text-lime-600 transition">+93 780 031 643</a></li>
            <li>Follow us on social media</li>
          </ul>
        </div>
        

      </div>

      {/* بخش پایین: آیکن‌ها و کپی‌رایت */}
      <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* آیکن‌های شبکه اجتماعی */}
        <div className="flex gap-4">
          {[
            { src: '/images/Footer/facebook.png', alt: 'Facebook', id: '1' },
            { src: '/images/Footer/instagram.png', alt: 'Instagram' },
            { src: '/images/Footer/twit.png', alt: 'Twitter' },
            { src: '/images/Footer/you.png', alt: 'YouTube' },
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className={`w-10 h-10 rounded-full hover:bg-lime-500 transition-colors duration-200 flex items-center justify-center ${item.id === '1' ? 'bg-lime-500' : 'bg-lime-100'}`}
            >
              <Image alt={item.alt} src={item.src} width={18} height={18} />
            </a>
          ))}

         
        </div>

        {/* متن کپی‌رایت */}
        <p className="text-xs text-gray-500 text-center ">
          © 2023 Dscode. All rights reserved.

        </p>
         <p className=' mt-4 text-center font-semibold ml-5 text-xs text-red-500'>
        Want a modern website like this for your restaurant?
        <a href="mailto:alisinai902@gmail.com" className='text-lime-500 underline ml-1'>Contact me</a>
        </p>
      </div>
    </footer>
  )
}
