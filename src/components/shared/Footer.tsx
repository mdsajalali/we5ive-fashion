"use client";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const getFullYear = new Date().getFullYear();
  return (
    <footer>
      <div className="bg-[#1D1D1D] text-white">
        <Container>
          <div className="flex flex-col items-center justify-between py-[55px] md:flex-row">
            <div className="mb-8 max-w-full md:mb-0 md:max-w-[411px]">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/footer_logo.png"
                  alt="logo"
                  width={161}
                  height={100}
                />
              </Link>
              <p className="py-[27px] text-[16px] font-medium">
                Saepe quo suscipit vitae quia. Repudiandae nobis quis.
                Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo
                est consectetur maxime quos fugit velit assumenda est.
              </p>
            </div>
            <div className="mb-8 max-w-full md:mb-0 md:max-w-[628px]">
              <h1 className="text-2xl font-bold">
                Sign Up For Our Newsletter!
              </h1>
              <p className="pb-[30px] pt-2 text-[16px] font-medium">
                Get notified about updates and be the first to get early access
                to new Podcast episodes.
              </p>
              <div className="flex flex-col items-center md:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="mb-4 w-full rounded-l-lg border border-gray-300 px-4 py-2 text-black focus:outline-none md:mb-0 md:w-[435px]"
                />
                <button className="w-full rounded-r-lg bg-primary px-6 py-[9px] text-white focus:outline-none md:w-[193px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-5 pb-[77px] md:flex-row">
            <div className="mb-4 text-center md:mb-0 md:text-left">
              <h1>Contact Us</h1>
              <p>support@we5ive.com</p>
            </div>
            <div className="mb-4 list-none text-center md:mb-0 md:text-left">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </div>
            <div className="mb-4 list-none text-center md:mb-0 md:text-left">
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
            </div>
            <div className="text-center md:text-left">
              <h1>Social Links</h1>
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <Image
                  src="/social_icons/facebook.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
                <Image
                  src="/social_icons/twitter.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
                <Image
                  src="/social_icons/linkedin.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-primary py-[18px]">
        <p className="text-center text-[16px] font-medium text-white">
          © {getFullYear} | We5ive
        </p>
      </div>
    </footer>
  );
}
