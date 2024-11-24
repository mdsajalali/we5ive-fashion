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

      {loading ? (
        <div className="flex items-center justify-center py-10">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-gray-200" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 pb-20 pt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default ShopProducts;
