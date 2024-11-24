"use client";

import useCart from "@/hooks/useCart";
import { LocalProduct } from "@/types/index.type";
import { createContext, ReactNode, useContext } from "react";

interface CartContextType {
  cart: LocalProduct[];
  clearCart: () => void;
  addToCart: (product: LocalProduct, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  totalCartPrice: number;
  totalCartItems: number;
  existsInCart: (productId: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const {
    cart,
    clearCart,
    addToCart,
    removeFromCart,
    totalCartPrice,
    totalCartItems,
    existsInCart,
  } = useCart();

  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        addToCart,
        removeFromCart,
        totalCartPrice,
        totalCartItems,
        existsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};
