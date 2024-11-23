import ProductDetails from "@/components/ProductDetails";
import RelatedProducts from "@/components/RelatedProducts";
import Reviews from "@/components/Reviews";
import YourBag from "@/components/YourBag";

const ShopsPage = () => {
  return (
    <>
      <YourBag />
      <ProductDetails />
      <Reviews />
      <RelatedProducts />
    </>
  );
};

export default ShopsPage;
