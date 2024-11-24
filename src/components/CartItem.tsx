"use client";

import { useCartContext } from "@/context/CartContext";
import { CartItemProps } from "@/types/index.type";
import { Minus, Plus, X } from "lucide-react";
import { toast } from "sonner";

const CartItem = ({ product }: CartItemProps) => {
  const { addToCart, removeFromCart } = useCartContext();

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);

    toast.success("Cart cleared successfully!");
  };

  return (
    <div
      key={product.id}
      className="flex flex-col items-center gap-3 border-b p-5 last:border-b-0 lg:grid lg:grid-cols-[auto_1fr_auto_auto_auto_auto] lg:gap-10"
    >
      <img
        src={product.img}
        alt={product.product_name}
        className="aspect-[1/1.3] w-[100px] object-cover"
      />
      <h4 className="mx-auto max-w-[280px] text-center font-medium">
        {product.product_name}
      </h4>
      <p className="w-[120px] text-center font-medium">${product.price}</p>
      <div className="flex w-32 items-center border">
        <button
          onClick={() => {
            addToCart(product, -1);
          }}
          className="flex h-[54px] w-[38px] items-center justify-center text-gray-500"
        >
          <Minus className="size-4" />
        </button>
        <span className="block min-w-12 text-center text-lg font-semibold">
          {product.quantity}
        </span>
        <button
          onClick={() => addToCart(product, 1)}
          className="flex h-[54px] w-[38px] items-center justify-center text-gray-500"
        >
          <Plus className="size-4" />
        </button>
      </div>
      <p className="w-32 text-center font-medium">
        ${(product.price * product.quantity).toFixed(2)}
      </p>
      <div className="w-20">
        <button
          onClick={handleRemoveFromCart}
          className="mx-auto flex size-9 items-center justify-center rounded-full border duration-300 hover:bg-primary hover:text-white"
        >
          <X className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
