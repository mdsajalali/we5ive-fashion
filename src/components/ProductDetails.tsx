"use client";
import { useCartContext } from "@/context/CartContext";
import { Product } from "@/types/index.type";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import { toast } from "sonner";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Breadcrumbs from "./Breadcrumbs";
import Container from "./shared/Container";
import SliderArrowBtn from "./shared/SliderArrowBtn";

const ProductDetails = ({ paramsId }: { paramsId: string }) => {
  const { addToCart, existsInCart, removeFromCart } = useCartContext();

  const [product, setProduct] = useState<Product | null>(null);
  const [cartQuantity, setCartQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();

        const foundProduct = data.find((p) => p.id === Number(paramsId));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.log("Product not found!");
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, [paramsId]);

  const [selectedSize, setSelectedSize] = useState<string | null>("S");
  const [selectedColor, setSelectedColor] = useState<string | null>(
    "Off White",
  );

  const handleClick = (size: string) => {
    setSelectedSize(size);
  };

  const buttonClasses = (size: string) =>
    `rounded-md px-4 py-2 ${
      selectedSize === size
        ? "bg-secondary border-2 border-primary"
        : "bg-secondary border-2 border-secondary"
    }`;

  const handleSelection = (color: string) => {
    setSelectedColor(color);
  };

  const colorBoxClasses = (color: string, bgColor: string) =>
    `h-6 w-6 rounded-full ${
      selectedColor === color ? "border-2 border-primary" : "border"
    } ${bgColor}`;

  const handleAddToCart = (item: any) => {
    addToCart(item, cartQuantity);

    toast.success("Added to cart!");
  };

  return (
    <Container>
      <div className="py-8">
        <Breadcrumbs />
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Product Images */}
        <div className="relative lg:w-1/3">
          <div className="relative max-w-lg">
            {/* Custom Slider Buttons */}
            <SliderArrowBtn
              direction="left"
              className="productPrev absolute left-2 top-1/2 z-10 -translate-y-1/2 transform"
            />
            <SliderArrowBtn
              direction="right"
              className="productNext absolute right-2 top-1/2 z-10 -translate-y-1/2 transform"
            />

            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{
                type: "fraction",
              }}
              spaceBetween={10}
              slidesPerView={1}
              navigation={{
                prevEl: ".productPrev",
                nextEl: ".productNext",
              }}
              className="product-details-slider rounded-md"
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
            >
              <SwiperSlide>
                <div className="relative aspect-square">
                  <Image
                    src={product?.img!}
                    alt="product"
                    fill
                    className="h-auto w-full rounded-md bg-secondary"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative aspect-square">
                  <Image
                    src="/products/product_one.png"
                    alt="product"
                    fill
                    className="h-auto w-full rounded-md bg-secondary"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative aspect-square">
                  <Image
                    src="/products/product_two.png"
                    alt="product"
                    fill
                    className="h-auto w-full rounded-md bg-secondary"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative aspect-square">
                  <Image
                    src="/products/product_three.png"
                    alt="product"
                    fill
                    className="h-auto w-full rounded-md bg-secondary"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="my-5 hidden flex-wrap gap-2 lg:flex">
            <Image
              src="/products/product_one.png"
              alt="product"
              width={100}
              height={100}
              className="w-[100px] rounded-md bg-[#ECE9FE]"
            />
            <Image
              src="/products/product_two.png"
              alt="product"
              width={100}
              height={100}
              className="w-[100px] rounded-md bg-[#ECE9FE]"
            />
            <Image
              src="/products/product_three.png"
              alt="product"
              width={100}
              height={100}
              className="w-[100px] rounded-md bg-[#ECE9FE]"
            />
            <Image
              src="/products/product_five.png"
              alt="product"
              width={100}
              height={100}
              className="w-[100px] rounded-md bg-[#ECE9FE]"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-2/3">
          <button className="rounded-md bg-[#2F1C59] px-8 py-[10px] text-sm text-white">
            New Arrival
          </button>
          <h1 className="my-6 text-3xl font-semibold">
            {product?.product_name}
          </h1>
          <div className="flex items-center">
            <IoMdStar size={24} className="text-[#FFCF11]" />
            <IoMdStar size={24} className="text-[#FFCF11]" />
            <IoMdStar size={24} className="text-[#FFCF11]" />
            <IoMdStar size={24} className="text-[#FFCF11]" />
            <CiStar size={24} className="text-gray-400" />
            <span className="font-semibold">(4.0)</span>
            <h1 className="ml-2 text-lg text-primary">
              {product?.reviews} reviews
            </h1>
          </div>
          <p className="my-2 pb-2 pt-2 text-xl font-semibold">
            BDT {product?.price}
          </p>
          <div className="my-3 border-b border-dashed" />

          <div className="flex flex-col items-start justify-between gap-5 lg:flex-row">
            <div>
              <h1 className="text-lg font-semibold">Available Size</h1>
              <div className="flex space-x-2 pt-2">
                {product?.sizes?.map((size) => (
                  <button
                    key={size}
                    className={buttonClasses(size)}
                    onClick={() => handleClick(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-lg font-semibold">Available Color</h1>
              <div className="flex items-center gap-4 pt-2">
                {/* Off White */}
                <div
                  className="flex cursor-pointer items-center gap-2"
                  onClick={() => handleSelection("Off White")}
                >
                  <div
                    className={colorBoxClasses("Off White", "bg-secondary")}
                  />
                  <span
                    className={
                      selectedColor === "Off White" ? "text-primary" : ""
                    }
                  >
                    Off White
                  </span>
                </div>

                {/* Black */}
                <div
                  className="flex cursor-pointer items-center gap-2"
                  onClick={() => handleSelection("Black")}
                >
                  <div className={colorBoxClasses("Black", "bg-black")} />
                  <span
                    className={selectedColor === "Black" ? "text-primary" : ""}
                  >
                    Black
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="my-3 border-b border-dashed pt-3" />

          <div className="py-7">
            <h1 className="pb-2 text-lg font-semibold">Quantity</h1>
            <div className="flex w-32 items-center rounded-full bg-[#ECE9FE]">
              <button
                onClick={() =>
                  setCartQuantity((prevQuantity) =>
                    Math.max(1, prevQuantity - 1),
                  )
                }
                className="flex h-[54px] w-[38px] items-center justify-center text-gray-500"
              >
                <Minus className="size-4" />
              </button>
              <span className="block min-w-12 text-center text-lg font-semibold">
                {cartQuantity}
              </span>
              <button
                onClick={() =>
                  setCartQuantity((prevQuantity) => prevQuantity + 1)
                }
                className="flex h-[54px] w-[38px] items-center justify-center text-gray-500"
              >
                <Plus className="size-4" />
              </button>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2 md:gap-5 lg:flex-row">
            <Link
              href="/success"
              className="mb-3 w-full rounded border border-primary px-4 py-2 text-center transition-colors hover:bg-primary hover:text-white lg:mb-0 lg:w-1/2"
            >
              Buy Now
            </Link>

            <button
              onClick={() => {
                if (existsInCart(product?.id!)) {
                  removeFromCart(product?.id!);

                  toast.info("Removed from cart!");
                } else {
                  handleAddToCart({
                    id: product?.id,
                    img: product?.img,
                    product_name: product?.product_name,
                    price: product?.price,
                  });
                }
              }}
              className={`w-full rounded border px-4 py-2 transition-colors hover:text-white lg:w-1/2 ${
                existsInCart(product?.id!)
                  ? "border-red-500 text-red-500 hover:bg-red-500"
                  : "border-primary text-primary hover:bg-primary"
              }`}
            >
              {existsInCart(product?.id!) ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
