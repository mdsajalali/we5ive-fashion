import Image from "next/image";
import Container from "./shared/Container";
import Button from "./shared/Button";

export default function BigDeal() {
  return (
    <Container>
      <div className="my-10 bg-secondary pt-10">
        <div className="flex flex-col items-center justify-between px-4 md:flex-row md:px-[64px]">
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold md:text-2xl">
              <i className="text-primary">Big Deal</i>
            </h1>
            <h2 className="pb-6 pt-2 text-3xl font-semibold md:text-4xl md:text-[48px]">
              <span className="text-primary">30%</span> Off for New Customers
            </h2>
            {/* Button */}
            <Button />
          </div>
          <div className="pt-10 md:pt-0">
            <Image
              src="/big_deal.png"
              alt="big deal"
              width={500}
              height={500}
              className="h-auto w-full max-w-[500px]"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
