import Button from "./shared/Button";

export default function Hero() {
  return (
    <div
      className="relative flex items-center justify-center bg-cover bg-center py-[150px] md:py-[250px]"
      style={{
        backgroundImage: "url('/hero.png')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 px-6 text-center text-white md:px-12">
        <h1 className="mb-2 text-2xl font-bold md:mb-4 md:text-[48px]">
          Elevate Your Everyday Style
        </h1>
        <p className="mb-4 text-[14px] md:mb-6 md:text-[19px]">
          Discover the Latest Trends in Sustainable Fashion
        </p>
        <div className="flex justify-center">
          <Button />
        </div>
      </div>
    </div>
  );
}
