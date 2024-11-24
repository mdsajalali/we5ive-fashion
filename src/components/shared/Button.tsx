import Image from "next/image";
import Link from "next/link";

export default function Button() {
  return (
    <div className="flex cursor-pointer items-center justify-center md:justify-start">
      <Link href="/shops">
        <button className="rounded-full bg-[#8F71E1] px-[30px] py-[11px] font-thin text-white duration-300 hover:bg-primary">
          Shop Now
        </button>
      </Link>
      <Link href="/shops">
        <Image
          src="/arrow_right.svg"
          alt="arrow"
          width={40}
          height={40}
          className="rounded-full bg-[#8F71E1] p-2 text-white duration-300 hover:bg-primary"
        />
      </Link>
    </div>
  );
}
