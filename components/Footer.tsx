import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              © 2024 Seoul App Studio. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-gray-600 hover:text-gray-800">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-800">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
