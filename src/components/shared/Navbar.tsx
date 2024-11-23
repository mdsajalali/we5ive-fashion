"use client";
import { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="bg-secondary py-5">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={161} height={100} />
          </Link>

          {/* Hamburger Menu for Mobile */}
          <button
            className="block lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <X className="text-gray-700" />
            ) : (
              <Menu className="text-gray-700" />
            )}
          </button>

          {/* Navigation Links (Hidden on Mobile) */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4">
              <Link
                href="/"
                className="font-semibold text-[#646464] duration-300 hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/shops"
                className="font-semibold text-[#646464] duration-300 hover:text-primary"
              >
                Shop
              </Link>
              <Link
                href="/"
                className="font-semibold text-[#646464] duration-300 hover:text-primary"
              >
                Deals
              </Link>
              <Link
                href="/"
                className="font-semibold text-[#646464] duration-300 hover:text-primary"
              >
                What's New
              </Link>
            </ul>
          </div>

          {/* Search and Icons (Hidden on Mobile) */}
          <div className="hidden items-center gap-2 lg:flex">
            <div className="flex w-[242px] items-center rounded-full bg-white py-2 shadow-sm">
              <Search className="ml-3 text-gray-500" />
              <input
                type="text"
                className="ml-2 flex-1 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <Search className="text-gray-500" />
              <Link href="/cart" className="relative">
                <ShoppingBag className="text-2xl text-gray-700" />
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                  0
                </span>
              </Link>
              <User className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* Sidebar for Mobile */}
        {isSidebarOpen && (
          <div className="fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg">
            <div className="p-4">
              <button
                className="mb-4 text-gray-700"
                onClick={() => setIsSidebarOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
              <ul className="space-y-4">
                <Link
                  href="/"
                  className="block font-semibold text-[#646464] hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="block font-semibold text-[#646464] hover:text-primary"
                >
                  Shop
                </Link>
                <Link
                  href="/"
                  className="block font-semibold text-[#646464] hover:text-primary"
                >
                  Deals
                </Link>
                <Link
                  href="/"
                  className="block font-semibold text-[#646464] hover:text-primary"
                >
                  What's New
                </Link>
              </ul>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
