import { ProductCardProps } from "@/types/index.type";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="rounded-lg border bg-white p-2 shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/shops/${product.id}`}>
        <div className="relative">
          <div className="rounded-md bg-secondary">
            <Image
              src={product.img}
              alt={product.product_name}
              width={200}
              height={200}
              className="mx-auto"
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

      <button className="mt-4 w-full rounded border border-primary px-2 py-2 transition-colors hover:bg-primary hover:text-white">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
