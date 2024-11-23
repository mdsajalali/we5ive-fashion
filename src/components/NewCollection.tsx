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
        spaceBetween={35}
        slidesPerView={"auto"}
        loop={true}
        speed={400}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div className="flex flex-wrap items-center gap-10 py-[91px]">
            <div className="h-[400px] w-[621px] bg-secondary">
              <Image
                src="/men_collection.png"
                alt="men"
                width={400}
                height={400}
                className="mx-auto -mt-[84px]"
              />
            </div>
            <div>
              <h1 className="pb-6 text-[48px] font-semibold">MEN COLLECTION</h1>
              <Button />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-wrap items-center gap-10 py-[91px]">
            <div className="h-[400px] w-[621px] bg-secondary">
              <Image
                src="/women_collection.png"
                alt="women"
                width={290}
                height={200}
                className="mx-auto -mt-[82px]"
              />
            </div>
            <div>
              <h1 className="pb-6 text-[48px] font-semibold">
                Women COLLECTION
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
