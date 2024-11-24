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
      <div className="bg-[#F4F8FF]">
        <Benefit />
        <NewArrivals />
        <BigDeal />
        <NewCollection />
        <SummerProducts />
      </div>
    </>
  );
}
