"use client";

import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const YourBag = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const total = storedCart.reduce(
      (sum: number, item: any) => sum + (item.quantity || 1),
      0,
    );
    setTotalQuantity(total);
  }, []);

  return (
    <Link
      href="/cart"
      className="fixed right-0 top-1/2 z-[999] flex -translate-y-1/2 transform flex-col items-center justify-center rounded-l-xl bg-primary p-4 text-white"
    >
      <ShoppingBag className="text-2xl" />
      <h1 className="pt-2">Your bag</h1>
      <p>{totalQuantity}</p>
    </Link>
  );
};

export default YourBag;
