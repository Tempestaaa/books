"use client";

import BookCard from "@/components/public/shared/book-card";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type Props = {
  header: string;
  showSerial?: boolean;
};

export default function DisplayList({ header, showSerial = false }: Props) {
  return (
    <div className="space-y-4 py-4">
      <section className="flex-center gap-4">
        <div className="text-2xl font-bold">{header}</div>
        <Button variant="outline" className="rounded-full">
          <span>More</span>
          <ChevronRightIcon />
        </Button>
      </section>

      <section className="relative">
        <Swiper
          spaceBetween={12}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            prevEl: "#prev-btn",
            nextEl: "#next-btn",
          }}
          breakpoints={{
            375: {
              slidesPerView: 1.5,
            },
            765: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.5,
            },
            1440: {
              slidesPerView: 4.5,
            },
          }}
        >
          {[...Array(10)].map((_, id) => (
            <SwiperSlide key={id} className="p-1">
              <BookCard serial={id + 1} showSerial={showSerial} />
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
      </section>
    </div>
  );
}
