import Container from "./shared/Container";
import Breadcrumbs from "./Breadcrumbs";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { CiStar } from "react-icons/ci";

const ProductDetails = () => {
  return (
    <Container>
      <div className="py-8">
        <Breadcrumbs />
      </div>
      <div className="flex flex-col gap-5 lg:flex-row">
        {/* Product Images */}
        <div className="lg:w-1/3">
          <div className="rounded-md bg-secondary">
            <Image
              src="/products/product_four.png"
              alt="product"
              width={400}
              height={400}
              className="h-auto w-full"
            />
          </div>
          <div className="my-5 lg:flex gap-2 hidden">
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
          <button className="rounded-md bg-primary px-4 py-2 text-sm text-white">
            New Arrival
          </button>
          <h1 className="my-2 text-2xl font-semibold">White Hoodie</h1>
          <div className="flex items-center gap-1">
            <IoMdStar className="text-yellow-400" />
            <IoMdStar className="text-yellow-400" />
            <IoMdStar className="text-yellow-400" />
            <IoMdStar className="text-yellow-400" />
            <CiStar />
            <span>(4.0)</span>
            <h1 className="ml-2 text-lg text-primary">121 reviews</h1>
          </div>
          <p className="my-2 text-xl font-semibold">BDT 2500</p>
          <div className="my-3 border-b border-dashed" />

          <div className="flex flex-col items-start justify-between gap-5 lg:flex-row">
            <div>
              <h1 className="text-lg font-semibold">Available Size</h1>
              <div className="flex space-x-2">
                <button className="rounded-md bg-secondary px-4 py-2">S</button>
                <button className="rounded-md bg-secondary px-4 py-2">M</button>
                <button className="rounded-md bg-secondary px-4 py-2">L</button>
                <button className="rounded-md bg-secondary px-4 py-2">
                  XL
                </button>
              </div>
            </div>

            <div>
              <h1 className="text-lg font-semibold">Available Color</h1>
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-full bg-secondary"></div>
                <span>Off White</span>
                <div className="h-8 w-8 rounded-full bg-black"></div>
                <span>Black</span>
              </div>
            </div>
          </div>

          <div className="my-3 border-b border-dashed" />

          <div>
            <h1 className="text-lg font-semibold">Quantity</h1>
            <div className="mt-2 flex items-center gap-3">
              <input
                type="number"
                className="w-16 rounded-md border border-gray-300 p-2"
                defaultValue="1"
                min="1"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-5 lg:flex-row">
            <button className="mb-3 w-full rounded border border-primary px-4 py-2 transition-colors hover:bg-primary hover:text-white lg:mb-0 lg:w-1/2">
              Buy Now
            </button>
            <button className="w-full rounded border border-primary px-4 py-2 transition-colors hover:bg-primary hover:text-white lg:w-1/2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
