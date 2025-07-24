"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BookCard from "@/components/public/shared/book-card";

export default function RelatedBooks() {
  return (
    <div className="space-y-4 py-8">
      <div className="text-2xl font-bold">Related Products</div>

      <Swiper
        spaceBetween={24}
        slidesPerView={4}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ dynamicBullets: true }}
      >
        {[...Array(8)].map((_, id) => (
          <SwiperSlide key={id} className="p-1">
            <BookCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
