import Image from "next/image";

interface Product {
  product_name: string;
  img: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="rounded-lg border p-1 shadow-sm transition-shadow hover:shadow-md">
      <div className="rounded-md bg-secondary">
        <Image
          src={product.img}
          alt={product.product_name}
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>
      <div className="mt-4 px-2 flex items-center justify-between">
        <h1 className="text-lg font-semibold">{product.product_name}</h1>
        <h2 className="text-md text-gray-600">BDT {product.price}</h2>
      </div>
      <button className="mt-4 px-2 w-full rounded border border-primary py-2 transition-colors hover:bg-primary hover:text-white">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
