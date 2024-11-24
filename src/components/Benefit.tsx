import Image from "next/image";
import Container from "./shared/Container";

export default function Benefit() {
  return (
    <div
      className="relative -mt-[26px] bg-cover bg-center md:py-4 xl:-mt-0"
      style={{
        backgroundImage: "url('/benefit.png')",
      }}
    >
      {/* Content */}
      <Container>
        <div className="relative z-10 flex flex-wrap justify-between gap-5 pb-20 pt-14 md:gap-10 xl:py-0">
          <div className="flex items-start gap-4">
            <Image
              src="/truck-delivery.svg"
              alt="delivery"
              width={32}
              height={32}
            />
            <div>
              <h1 className="text-[16px] font-semibold text-white md:text-[19px]">
                FREE SHIPPING
              </h1>
              <p className="pt-2 text-[12px] font-medium text-white md:text-[13px]">
                BUY BDT 3000+ & GET FREE DELIVERY
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Image
              src="/exchange-01.svg"
              alt="exchange"
              width={32}
              height={32}
            />
            <div>
              <h1 className="text-[16px] font-semibold text-white md:text-[19px]">
                7 DAYS EXCHANGE
              </h1>
              <p className="pt-2 text-[12px] font-medium text-white md:text-[13px]">
                EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Image src="/payment-02.svg" alt="payment" width={32} height={32} />
            <div>
              <h1 className="text-[16px] font-semibold text-white md:text-[19px]">
                100% PAYMENT SECURE
              </h1>
              <p className="pt-2 text-[12px] font-medium text-white md:text-[13px]">
                CASH ON DELIVERY AND SECURED ONLINE PAYMENT
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
