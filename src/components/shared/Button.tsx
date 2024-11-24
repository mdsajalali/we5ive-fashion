import Image from "next/image";

export default function Button() {
  return (
    <div className="flex cursor-pointer items-center justify-center md:justify-start">
      <button className="rounded-full bg-[#8F71E1] hover:bg-primary duration-300 px-[30px] py-[11px] font-thin text-white">
        Shop Now
      </button>
      <Image
        src="/arrow_right.svg"
        alt="arrow"
        width={40}
        height={40}
        className="rounded-full bg-[#8F71E1] hover:bg-primary duration-300 p-2 text-white"
      />
    </div>
  );
}
