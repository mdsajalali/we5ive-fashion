"use client";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import ProductCard from "./shared/ProductCard";
import Container from "./shared/Container";
import { Product } from "@/types/index.type";

const ShopProducts = () => {
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
    <Container>
      <h3 className="mb-3 pt-5 text-2xl font-bold leading-snug text-black md:pt-10 lg:text-3xl xl:text-[40px]">
        Products
      </h3>
      <div className="grid grid-cols-1 gap-5 pb-20 pt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </Container>
  );
};

export default ShopProducts;
