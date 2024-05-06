"use client"
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef, useEffect } from "react";

const CardSlider = () => {
  const swiperRef = useRef(null);
  
  const [slidesPerView, setSlidesPerView] = useState(4); // Default to 4 cards

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of slides per view based on the window width
      if (window.innerWidth < 640) {
        setSlidesPerView(2); // Two cards on mobile view
      } else {
        setSlidesPerView(4); // Four cards on larger screens
      }
    };

    handleResize(); // Call the function on initial render
    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);


  const cards = [
    {
      id: 1,
      title: "Daily Vibes 1",
      img: "/burna.png",
      subtitle: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage...",
      gradientFrom: "from-yellow-700",
      gradientTo: "to-yellow-300",
    },
    {
      id: 2,
      title: "Daily Vibes 2",
      img: "/lojay.png",
      subtitle: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd...",
      gradientFrom: "from-red-700",
      gradientTo: "to-gray-900",
    },
    {
      id: 3,
      title: "Daily Vibes 3",
      img: "/girl.png",
      subtitle: "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy",
      gradientFrom: "from-blue-600",
      gradientTo: "to-blue-300",
    },
    {
      id: 4,
      title: "Daily Vibes 1",
      img: "/burna.png",
      subtitle: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage...",
      gradientFrom: "from-yellow-700",
      gradientTo: "to-yellow-300",
    },
    {
      id: 5,
      title: "Daily Vibes 2",
      img: "/lojay.png",
      subtitle: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd...",
      gradientFrom: "from-red-700",
      gradientTo: "to-gray-900",
    },
    {
      id: 6,
      title: "Daily Vibes 3",
      img: "/girl.png",
      subtitle: "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy",
      gradientFrom: "from-blue-600",
      gradientTo: "to-blue-300",
    },
  ];

  return (
    <Swiper
      ref={swiperRef}
      className={`mt-5 mb-10`}
      slidesPerView={slidesPerView}
      spaceBetween={16}
      navigation={{
        nextEl: ".next",
        prevEl: ".prev",
      }}
      loop={true}
      modules={[Pagination]}
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id} className="border border-gray-700 max-w-[230px] w-full pt-[34px]">
          <div className={`inset-0 bg-gradient-to-r ${card.gradientFrom} ${card.gradientTo} relative w-full flex justify-center`}>
            <div className="border border-gray-700 px-2 pt-[4px] pb-2 bg-black w-[80%] mx-auto -mt-[20px]">
              <Image src={card.img} alt="Burna" width={139} height={100} className="w-full mx-auto" />
            </div>
          </div>
          <div className={`bg-gradient-to-r ${card.gradientFrom} ${card.gradientTo} inline-block mb-4 w-full`}>
            <div className="text-white bg-gradient-to-r w-[80%] mx-auto py-2 bg-clip-text">
              <p className="font-bold text-base mb-1 leading-[19.2px]">
                {card.title}
              </p>
              <p className="text-[10px] max-w-[150px] w-full font-thin leading-[12px]">
                {card.subtitle}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
