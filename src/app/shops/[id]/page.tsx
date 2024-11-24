import ProductDetails from "@/components/ProductDetails";
import RelatedProducts from "@/components/RelatedProducts";
import Reviews from "@/components/Reviews";
import YourBag from "@/components/YourBag";
import { ParamsProps } from "@/types/index.type";

const ShopsPage = ({ params }: ParamsProps) => {
  const paramsId = params.id;

  return (
    <div className="bg-[#F4F8FF]">
      <div className="hidden xl:block">
        <YourBag />
      </div>
      <ProductDetails paramsId={paramsId} />
      <Reviews />
      <RelatedProducts />
    </div>
  );
};

export default ShopsPage;
