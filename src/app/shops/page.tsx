import ProductDetails from "@/components/ProductDetails";
import RelatedProducts from "@/components/RelatedProducts";
import Reviews from "@/components/Reviews";
import YourBag from "@/components/YourBag";

const ShopsPage = () => {
  return (
    <div className="bg-[#F4F8FF]">
      <div className="hidden xl:block">
        <YourBag />
      </div>
      <ProductDetails />
      <Reviews />
      <RelatedProducts />
    </div>
  );
};

export default ShopsPage;
