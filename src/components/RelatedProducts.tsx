"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderArrowBtn from "./shared/SliderArrowBtn";
import Container from "./shared/Container";
import { useEffect, useState } from "react";
import ProductCard from "./shared/ProductCard";

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
    <section className="py-24 lg:py-40">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-2 lg:mb-20">
          <div>
            <h3 className="mb-3 text-3xl font-bold leading-snug text-[#292929] lg:text-4xl xl:text-[40px]">
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
            modules={[Navigation]}
            spaceBetween={35}
            slidesPerView={1}
            navigation={{ prevEl: ".productPrev", nextEl: ".productNext" }}
            breakpoints={{
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
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-5 flex justify-center">
            <button className="rounded-md bg-primary px-5 py-2 text-white">
              See more
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RelatedProducts;
