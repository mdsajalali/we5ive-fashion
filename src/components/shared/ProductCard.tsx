import { useCartContext } from "@/context/CartContext";
import { LocalProduct, ProductCardProps } from "@/types/index.type";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, existsInCart } = useCartContext();

  const localProduct: LocalProduct = {
    id: product.id,
    img: product.img,
    product_name: product.product_name,
    price: product.price,
    quantity: 1,
  };

  const handleAddToCart = () => {
    addToCart(localProduct, 1);

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
              className="mx-auto h-full w-full object-contain object-bottom"
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
        onClick={handleAddToCart}
        className={`mt-4 w-full rounded border px-2 py-2 transition-colors hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-50 ${existsInCart(product.id) ? "border-gray-400" : "border-primary"}`}
        disabled={existsInCart(product.id)}
      >
        {existsInCart(product.id) ? "Added to cart" : "Add to cart"}
      </button>
    </div>
  );
};

export default ProductCard;
