import Benefit from "@/components/Benefit";
import BigDeal from "@/components/BigDeal";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import NewCollection from "@/components/NewCollection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefit />
      <NewArrivals />
      <NewCollection />
      <BigDeal />
      <Footer />
    </>
  );
}
