"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function HeroCarousel() {
  return (
    <section className="h-40 flex-1 mt-auto overflow-hidden">
      <div className="h-full w-3/4 ml-auto">
        <Swiper
          slidesPerView={4.5}
          spaceBetween={16}
          loop
          modules={[Autoplay]}
          autoplay={{
            delay: 1000,
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
