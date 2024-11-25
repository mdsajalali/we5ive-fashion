"use client";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import ProductCard from "./shared/ProductCard";
import Container from "./shared/Container";
import { Product } from "@/types/index.type";

const ShopProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        console.log("Fetching products...");
        const response = await fetch("/products.json");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setProducts(data);
        console.log("Products fetched successfully");
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
        console.log("Loading state updated to false");
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <h3 className="mb-3 pt-5 text-2xl font-bold leading-snug text-black md:pt-10 lg:text-3xl xl:text-[40px]">
        Products
      </h3>

      <div className="grid grid-cols-1 gap-5 pb-20 pt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading
          ? [...Array(10)].map((_, index) => (
              <div
                key={index}
                className="flex h-full w-full flex-col items-center gap-4 rounded-md bg-gray-100 p-4 shadow-md"
              >
                <div className="h-[280px] w-full rounded-lg bg-gray-300"></div>

                <div className="flex w-full flex-col gap-3">
                  <div className="flex justify-between">
                    <div className="h-4 w-1/3 rounded-sm bg-gray-300"></div>
                    <div className="h-4 w-1/4 rounded-sm bg-gray-300"></div>
                  </div>

                  <div className="mx-auto h-8 w-3/4 rounded-sm bg-gray-300"></div>
                </div>
              </div>
            ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </Container>
  );
};

export default ShopProducts;
