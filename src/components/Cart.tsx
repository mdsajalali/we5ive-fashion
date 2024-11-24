"use client";

import { useCartContext } from "@/context/CartContext";
import Link from "next/link";
import { toast } from "sonner";
import CartCheckout from "./CartCheckout";
import CartItem from "./CartItem";
import Container from "./shared/Container";

const Cart = () => {
  const { cart, clearCart } = useCartContext();

  const handleClearCart = () => {
    clearCart();

    toast.success("Cart cleared successfully!");
  };

  return (
    <Container>
      <section className="py-16 md:py-20">
        <div className="container">
          <h3 className="mb-2.5 text-xl font-semibold text-[#222]">
            Your Cart items
          </h3>
          <div className="border">
            <div className="hidden grid-cols-[auto_1fr_auto_auto_auto_auto] gap-10 border-b bg-[#f7f7f7] px-5 py-4 text-center text-[17px] font-semibold lg:grid">
              <h5 className="w-[100px]">Image</h5>
              <h5>Product Name</h5>
              <h5 className="w-[120px]">Price</h5>
              <h5 className="w-32">Qty</h5>
              <h5 className="w-32">Subtotal</h5>
              <h5 className="w-20">Action</h5>
            </div>
            {cart.length > 0 ? (
              cart.map((product) => (
                <CartItem key={product.id} product={product} />
              ))
            ) : (
              <p className="py-5 text-center text-gray-500">
                Your cart is empty!
              </p>
            )}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            <Link
              href="/shops"
              className="block bg-[#f2f2f2] px-5 py-3.5 font-semibold text-[#1f1f1f] duration-300 hover:bg-primary hover:text-white"
            >
              Continue Shopping
            </Link>

            <button
              onClick={handleClearCart}
              className="block bg-[#f2f2f2] px-5 py-3.5 font-semibold text-[#1f1f1f] duration-300 hover:bg-primary hover:text-white"
            >
              Clear Cart
            </button>
          </div>
          <CartCheckout />
        </div>
      </section>
    </Container>
  );
};

export default Cart;
