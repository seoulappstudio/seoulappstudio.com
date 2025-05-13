import React from "react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Seoul App Studio
          </Link>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-gray-600">
              홈
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              소개
            </Link>
            <Link href="/products" className="hover:text-gray-600">
              제품
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              문의
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
