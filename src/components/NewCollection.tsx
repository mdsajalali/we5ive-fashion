"use client";
import Image from "next/image";
import Container from "./shared/Container";
import Button from "./shared/Button";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const NewCollection = () => {
  return (
    <Container>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        speed={400}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div className="flex flex-col items-center gap-5 py-10 md:flex-row md:gap-10">
            <Image
              src="/man.png"
              alt="Men Collection"
              width={621}
              height={566}
              className="w-full max-w-sm md:max-w-md lg:max-w-lg"
            />
            <div className="text-center md:text-left">
              <h1 className="pb-6 text-2xl font-semibold md:text-4xl lg:text-[48px]">
                MEN COLLECTION
              </h1>
              <Button />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-5 py-10 md:flex-row">
            <Image
              src="/women.png"
              alt="Women Collection"
              width={521}
              height={466}
              className="w-full max-w-sm md:max-w-md lg:max-w-lg"
            />
            <div className="text-center md:text-left">
              <h1 className="pb-6 text-2xl font-semibold md:text-4xl lg:text-[48px]">
                WOMEN COLLECTION
              </h1>
              <Button />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default NewCollection;
