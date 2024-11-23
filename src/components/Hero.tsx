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
        <h1 className="mb-4 text-4xl font-bold">Elevate Your Everyday Style</h1>
        <p className="mb-6 text-lg">
          Discover the Latest Trends in Sustainable Fashion
        </p>
        <div className="flex justify-center">
          <Button />
        </div>
      </div>
    </div>
  );
}
