"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { ShoppingBag, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shops" },
  { label: "Deals", href: "/" },
  { label: "What's New", href: "/" },
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const total = storedCart.reduce(
        (sum: number, item: any) => sum + (item.quantity || 1),
        0,
      );
      setTotalQuantity(total);
    }, []);

  return (
    <nav className="bg-secondary py-3 lg:py-5">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {/* Hamburger Menu for Mobile */}
            <button
              className="block lg:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Image
                src="/menu.svg"
                alt="menu"
                width={22}
                height={22}
                className="ml-2"
              />
            </button>

            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={161}
                height={100}
                className="h-auto w-[110px] lg:w-[161px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[18px] font-semibold text-[#646464] duration-300 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Search and Icons */}
          <div className="justify-end gap-4 lg:flex">
            <div className="hidden w-[242px] items-center rounded-full bg-white py-2 shadow-sm lg:flex">
              <Image
                src="/search.svg"
                alt="search"
                width={20}
                height={20}
                className="ml-2"
              />
              <input
                type="text"
                placeholder="Search"
                className="ml-2 flex-1 bg-transparent text-[16px] placeholder-black focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-center gap-4">
              <Image
                onClick={() => setIsSidebarOpen(false)}
                src="/search.svg"
                alt="search"
                width={22}
                height={22}
                className="ml-2 block lg:hidden"
              />
              <Link
                onClick={() => setIsSidebarOpen(false)}
                href="/cart"
                className="relative"
              >
                <ShoppingBag className="text-2xl text-gray-700" />
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                  {totalQuantity}
                </span>
              </Link>
              <Image
                onClick={() => setIsSidebarOpen(false)}
                src="/user.svg"
                alt="user"
                width={22}
                height={22}
              />
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-secondary shadow-lg transition-transform duration-500 ${
            isSidebarOpen
              ? "translate-x-0 transform"
              : "-translate-x-full transform"
          }`}
        >
          <div className="p-4">
            <button
              className="mb-4 ml-auto block text-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    onClick={() => setIsSidebarOpen(false)}
                    href={item.href}
                    className="block text-[15px] font-semibold text-[#646464] hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}
