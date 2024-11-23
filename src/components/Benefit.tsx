import Image from "next/image";
import Container from "./shared/Container";

export default function Benefit() {
  return (
    <div
      className="relative bg-cover bg-center py-4"
      style={{
        backgroundImage: "url('/benefit.png')",
      }}
    >
      {/* Content */}
      <Container>
        <div className="relative z-10 flex flex-wrap justify-between gap-10 py-20 md:py-0">
          <div className="flex items-start gap-4">
            <Image
              src="/truck-delivery.svg"
              alt="delivery"
              width={32}
              height={32}
            />
            <div>
              <h1 className="text-[19px] font-semibold text-white">
                FREE SHIPPING
              </h1>
              <p className="pt-2 text-[13px] font-medium text-white">
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
              <h1 className="text-[19px] font-semibold text-white">
                7 DAYS EXCHANGE
              </h1>
              <p className="pt-2 text-[13px] font-medium text-white">
                EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Image src="/payment-02.svg" alt="payment" width={32} height={32} />
            <div>
              <h1 className="text-[19px] font-semibold text-white">
                100% PAYMENT SECURE
              </h1>
              <p className="pt-2 text-[13px] font-medium text-white">
                CASH ON DELIVERY AND SECURED ONLINE PAYMENT
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
