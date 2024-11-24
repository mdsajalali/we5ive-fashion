"use client";

import { LocalProduct } from "@/types/index.type";
import { useEffect, useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState<LocalProduct[]>([]);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const addToCart = (product: LocalProduct, quantity: number) => {
    const newCart = [...cart];
    const foundProductIndex = newCart.findIndex(
      (item) => item.id === product.id,
    );

    if (foundProductIndex !== -1) {
      const foundProduct = newCart[foundProductIndex];

      newCart.splice(foundProductIndex, 1, {
        ...foundProduct,
        quantity: Math.max(1, Number(foundProduct.quantity) + quantity),
      });
    } else {
      newCart.push({ ...product, quantity });
    }

    setCart(newCart);

    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeFromCart = (productId: number) => {
    const newCart = cart.filter((item) => item.id !== productId);

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const totalCartPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalCartItems = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const existsInCart = (productId: number) => {
    return cart.some((item) => item.id === productId);
  };

  useEffect(() => {
    const localCart = localStorage.getItem("cart");

    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  return {
    cart,
    clearCart,
    addToCart,
    removeFromCart,
    totalCartPrice,
    totalCartItems,
    existsInCart,
  };
};

export default useCart;
