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
                className="hover:text-primary duration-300 text-[#646464] font-semibold"
              >
                Home
              </Link>
              <Link
                href="/"
                className="hover:text-primary duration-300 text-[#646464] font-semibold"
              >
                Shop
              </Link>
              <Link
                href="/"
                className="hover:text-primary duration-300 text-[#646464] font-semibold"
              >
                Deals
              </Link>
              <Link
                href="/"
                className="hover:text-primary duration-300 text-[#646464] font-semibold"
              >
                What's New
              </Link>
            </ul>
          </div>

          {/* Search and Icons (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="bg-white flex items-center py-2 rounded-full w-[242px] shadow-sm">
              <Search className="ml-3 text-gray-500" />
              <input
                type="text"
                className="ml-2 flex-1 bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
              />
            </div>

            <div className="flex items-center gap-2">
              <Search className="text-gray-500" />
              <div className="relative">
                <ShoppingBag className="text-gray-700 text-2xl" />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white text-xs flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
              <User className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* Sidebar for Mobile */}
        {isSidebarOpen && (
          <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50">
            <div className="p-4">
              <button
                className="mb-4 text-gray-700"
                onClick={() => setIsSidebarOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
              <ul className="space-y-4">
                <Link
                  href="/"
                  className="block text-[#646464] font-semibold hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="block text-[#646464] font-semibold hover:text-primary"
                >
                  Shop
                </Link>
                <Link
                  href="/"
                  className="block text-[#646464] font-semibold hover:text-primary"
                >
                  Deals
                </Link>
                <Link
                  href="/"
                  className="block text-[#646464] font-semibold hover:text-primary"
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
