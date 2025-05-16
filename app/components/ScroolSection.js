'use client'
import Image from 'next/image';
import { useRef , useState, useEffect } from 'react';




const dishes = [
  {
    name: 'Egg vegi salad',
    description: 'Description of the item',
    price: '23.00',
    rating: '4.5',
    image: '/images/SpecialFood/Egg salad.png',
    heartBg: '/images/Rectangle 28.png',
    heartIcon: "/images/whiteH.png",
    starIcon: '/images/star.png',
  },
  {
    name: 'Vegetable salad',
    description: 'Description of the item',
    price: '26.00',
    rating: '4.3',
    image: '/images/SpecialFood/Vegetable salad.png',
    heartBg: '/images/Rectangle 28.png',
    heartIcon: "/images/don'tLike.png",
    starIcon: '/images/star.png',
  },
  {
    name: 'Fattoush salad',
    description: 'Description of the item',
    price: '22.00',
    rating: '4.2',
    image: '/images/SpecialFood/Fattoush salad.png',
    heartBg: '/images/Rectangle 28.png',
    heartIcon: "/images/don'tLike.png",
    starIcon: '/images/star.png',
  },
  {
    name: 'Name',
    description: 'Description of the item',
    price: '18.00',
    rating: '4.0',
    image: '/images/SpecialFood/1 (2).jpg',
    heartBg: '/images/Rectangle 28.png',
    heartIcon: "/images/don'tLike.png",
    starIcon: '/images/star.png',
  },
  {
    name: 'Name',
    description: 'Description of the item',
    price: '18.00',
    rating: '4.0',
    image: '/images/SpecialFood/1 (3).jpg',
    heartBg: '/images/Rectangle 28.png',
    heartIcon: "/images/don'tLike.png",
    starIcon: '/images/star.png',
  },
  {
    name: 'Name',
    description: 'Description of the item',
    price: '18.00',
    rating: '4.0',
    image: '/images/SpecialFood/1 (7).jpg',
    heartBg: '/images/Rectangle 28.png',
    heartIcon: "/images/don'tLike.png",
    starIcon: '/images/star.png',
  },
  {
    name: 'Name',
    description: 'Description of the item',
    price: '18.00',
    rating: '4.0',
    image: '/images/SpecialFood/1 (8).jpg',
    heartBg: '/images/Rectangle 28.png',
    heartIcon: "/images/don'tLike.png",
    starIcon: '/images/star.png',
  },
  {
    name: 'Name',
    description: 'Description of the item',
    price: '18.00',
    rating: '4.0',
    image: '/images/SpecialFood/1 (9).jpg',
    heartBg: '/images/Rectangle 28.png',
    heartIcon: "/images/don'tLike.png",
    starIcon: '/images/star.png',
  },
  {
    name: 'Name',
    description: 'Description of the item',
    price: '18.00',
    rating: '4.0',
    image: '/images/SpecialFood/1 (11).jpg',
    heartBg: '/images/Rectangle 28.png',
    heartIcon: "/images/don'tLike.png",
    starIcon: '/images/star.png',
  },
];


export default function SpecialDishes() {
  const scrollRef = useRef();

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateButtons = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    el.addEventListener('scroll', updateButtons);
    updateButtons();

    return () => el.removeEventListener('scroll', updateButtons);
  }, []);

  const scrollByOffset = (offset) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: 'smooth' });
  };
  

  return (
    <section id='offer' className="pt-20">
      <p className="text-xs text-red-500 font-semibold font-sans">SPECIAL DISHES</p>

      <div className="flex justify-between items-center">
        <h2 className="w-[220px] sm:w-[250px] md:w-[350px] lg:w-[400px] text-xl sm:text-2xl md:text-[clamp(1.5rem,2.4vw,3rem)] font-bold font-sans mt-3">
          Standout Dishes From Our Menu
        </h2>

        <div className="flex items-center gap-4">
          {/* دکمه چپ */}
          <div
            onClick={() => scrollByOffset(-200)}
            aria-disabled={!canScrollLeft}
            className={`rounded-full w-[50px] h-[50px] flex justify-center items-center shadow-lg shadow-gray-300 cursor-pointer transition-colors duration-300 ${
              canScrollLeft ? 'bg-lime-500' : 'bg-white'
            }`}
          >
            <Image alt="left arrow" src="/images/ArrowLeft.png" width={30} height={30} />
          </div>

          {/* دکمه راست */}
          <div
            onClick={() => scrollByOffset(200)}
            aria-disabled={!canScrollRight}
            className={`rounded-full w-[50px] h-[50px] flex justify-center items-center shadow-lg shadow-gray-300 cursor-pointer transition-colors duration-300 ${
              canScrollRight ? 'bg-lime-500' : 'bg-white'
            }`}
          >
            <Image alt="right arrow" src="/images/ArrowRight.png" width={30} height={30} />
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 items-center mt-5 scroll-smooth overflow-x-auto scrollbar-hide px-1 pb-10"
      >
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="min-w-[180px] flex-shrink-0 relative flex flex-col items-center mt-10 h-[220px] shadow-xl shadow-gray-300 rounded-[25px]"
          >
            <Image
              src={dish.heartBg}
              alt="heart background"
              width={55}
              height={55}
              className="absolute top-0 right-0"
            />
            <div className="absolute top-5 right-5">
              <Image src={dish.heartIcon} alt="heart icon" width={13} height={13} />
            </div>
            <Image
              alt="dish"
              src={dish.image}
              width={120}
              height={120}
              className="mt-4 rounded-full h-[120px] w-[120px]"
            />
            <h6 className="w-full text-start ml-10 font-bold font-sans">{dish.name}</h6>
            <p className="text-xs w-full ml-10">{dish.description}</p>
            <div className="w-full flex justify-between items-center px-5 mt-2">
              <p className="text-sm text-red-500">${dish.price}</p>
              <div className="flex items-center">
                <Image
                  alt="star icon"
                  src={dish.starIcon}
                  width={10}
                  height={10}
                  className="mr-1"
                />
                <p>{dish.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

