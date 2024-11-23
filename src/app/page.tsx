import Benefit from "@/components/Benefit";
import BigDeal from "@/components/BigDeal";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import NewCollection from "@/components/NewCollection";
import SummerProducts from "@/components/SummerProducts";

export default function page() {
  return (
    <>
      <Hero />
      <Benefit />
      <NewArrivals />
      <NewCollection />
      <BigDeal />
      <SummerProducts />
    </>
  );
}
