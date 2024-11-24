"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderArrowBtn from "./shared/SliderArrowBtn";
import Container from "./shared/Container";
import { useEffect, useState } from "react";
import ProductCard from "./shared/ProductCard";
import Link from "next/link";

interface Product {
  id: number;
  product_name: string;
  img: string;
  price: number;
}
const RelatedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="pb-20 pt-10 lg:pb-[147px] lg:pt-20">
      <Container>
        <div className="mb-10 flex items-center justify-between gap-2 lg:mb-20">
          <div>
            <h3 className="mb-3 text-2xl font-bold leading-snug text-black lg:text-4xl xl:text-[40px]">
              Related Products
            </h3>
          </div>
          <div className="flex items-center gap-2 sm:gap-5">
            <SliderArrowBtn direction="left" className="productPrev" />
            <SliderArrowBtn direction="right" className="productNext" />
          </div>
        </div>
        <div>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={35}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={{ prevEl: ".productPrev", nextEl: ".productNext" }}
            breakpoints={{
              350: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1170: {
                slidesPerView: 4,
                spaceBetween: 35,
              },
            }}
          >
            {products?.slice(0, 5)?.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Link href="/shops" className="mt-6 flex justify-center">
            <button className="rounded-md border bg-primary px-5 py-2 text-white duration-300 hover:border-primary hover:bg-transparent hover:text-black">
              See more
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default RelatedProducts;
