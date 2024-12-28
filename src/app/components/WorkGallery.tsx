"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Picture1 from "/public/Nails1.jpg";
import Picture2 from "/public/Nails2.jpg";
import Picture3 from "/public/Nails3.jpg";
import Picture4 from "/public/Nails4.jpg";
import Picture5 from "/public/Nails5.jpg";
import Picture6 from "/public/Nails6.jpg";
import Picture7 from "/public/Nails7.jpg";
import Picture8 from "/public/Nails8.jpg";
import Picture9 from "/public/Nails9.jpg";
import Picture10 from "/public/Nails10.jpg";

const WorkGallery = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      loop: true,
      spaceBetween: 10,
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "cube",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-120%", 0, -500],
        },
        next: {
          translate: ["120%", 0, -500],
        },
      },
    });

    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);

  const images = [
    Picture1,
    Picture2,
    Picture3,
    Picture4,
    Picture5,
    Picture6,
    Picture7,
    Picture8,
    Picture9,
    Picture10,
  ];

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="swiper">
        <div className="swiper-wrapper">
          {images.map((src, index) => (
            <div
              className="swiper-slide"
              key={index}
            >
              <div className="relative lg:w-2/3 w-full h-[650px] mx-auto overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default WorkGallery;
