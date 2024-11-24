"use client";

import { useCartContext } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const YourBag = () => {
  const { totalCartItems } = useCartContext();

  return (
    <Link
      href="/cart"
      className="fixed right-0 top-1/2 z-[999] flex -translate-y-1/2 transform flex-col items-center justify-center rounded-l-xl bg-primary p-4 text-white"
    >
      <ShoppingBag className="text-2xl" />
      <h1 className="pt-2">Your bag</h1>
      <p>{totalCartItems}</p>
    </Link>
  );
};

export default YourBag;
