import BigDeal from "@/components/BigDeal";
import Hero from "@/components/Hero";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <BigDeal />
      <Footer />
    </>
  );
}
