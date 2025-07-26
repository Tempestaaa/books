"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function HeroCarousel() {
  return (
    <section className="flex-1 mt-auto overflow-hidden">
      <div className="h-60 w-full lg:w-3/4 ml-0 lg:ml-auto">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={16}
          loop
          modules={[Autoplay]}
          // autoplay={{
          //   delay: 1000,
          // }}
          breakpoints={{
            425: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4.5,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 3.5,
            },
          }}
          className="size-full"
        >
          {[...Array(10)].map((_, id) => (
            <SwiperSlide
              key={id}
              className="min-w-24 h-full bg-muted rounded-md"
            >
              {id}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
