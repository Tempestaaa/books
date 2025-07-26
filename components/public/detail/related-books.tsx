"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BookCard from "@/components/public/shared/book-card";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function RelatedBooks() {
  return (
    <div className="space-y-4 py-8">
      <div className="text-2xl font-bold">Related Products</div>

      <div className="relative">
        <Swiper
          spaceBetween={12}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: "#prev-btn",
            nextEl: "#next-btn",
          }}
          pagination={{ dynamicBullets: true }}
          breakpoints={{
            375: {
              slidesPerView: 1.5,
            },
            512: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {[...Array(8)].map((_, id) => (
            <SwiperSlide key={id} className="p-1">
              <BookCard />
            </SwiperSlide>
          ))}
        </Swiper>

        <Button
          id="prev-btn"
          size="icon"
          className="absolute top-1/3 -left-4 z-40 disabled:hidden"
        >
          <ChevronLeftIcon />
        </Button>

        <Button
          id="next-btn"
          size="icon"
          className="absolute top-1/3 -right-4 z-40 disabled:hidden"
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
}
