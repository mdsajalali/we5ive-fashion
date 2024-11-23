import Benefit from "@/components/Benefit";
import BigDeal from "@/components/BigDeal";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import NewCollection from "@/components/NewCollection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import SummerProducts from "@/components/SummerProducts";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefit />
      <NewArrivals />
      <NewCollection />
      <BigDeal />
      <SummerProducts />
      <Footer />
    </>
  );
}
