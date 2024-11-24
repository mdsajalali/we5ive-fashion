import { ProductCardProps } from "@/types/index.type";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const ProductCard = ({ product }: ProductCardProps) => {
  const handleAddToCart = (item: any) => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItemIndex = storedCart.findIndex(
      (cartItem: any) => cartItem.id === item.id,
    );

    if (existingItemIndex !== -1) {
      storedCart[existingItemIndex].quantity += 1;
    } else {
      storedCart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(storedCart));

    window.dispatchEvent(new Event("cartUpdated"));

    toast.success("Added to cart!");
  };

  return (
    <div className="rounded-lg border bg-white p-2 shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/shops/${product.id}`}>
        <div className="relative">
          <div className="relative mx-auto aspect-square rounded-md bg-secondary">
            <Image
              src={product.img}
              alt={product.product_name}
              fill
              className="mx-auto h-full w-full object-contain"
            />
          </div>
          <div className="mt-4 flex items-center justify-between px-2">
            <h1 className="text-[16px] font-semibold text-gray-600">
              {product.product_name}
            </h1>
            <h2 className="text-md">BDT {product.price}</h2>
          </div>
          {/* Discount */}
          {product.up_to && (
            <div className="absolute right-3 top-0 rounded-b-full bg-primary/70 px-2 py-[6px] text-center font-bold text-white">
              <h1>Up</h1>
              <h1>to</h1>
              <p>{product.up_to}%</p>
            </div>
          )}
        </div>
      </Link>

      <button
        onClick={() =>
          handleAddToCart({
            id: product.id,
            img: product.img,
            product_name: product.product_name,
            price: product.price,
          })
        }
        className="mt-4 w-full rounded border border-primary px-2 py-2 transition-colors hover:bg-primary hover:text-white"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
