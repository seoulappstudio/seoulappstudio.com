"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const metadata = {
  title: "제품 소개 | Seoul App Studio",
  description: "서울앱스튜디오의 주요 제품과 서비스를 소개합니다.",
};

export default function Products() {
  return (
    <>
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            제품 소개
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            서울앱스튜디오는 다양한 비즈니스 요구사항을 충족시키는 혁신적인
            솔루션을 제공합니다.
          </motion.p>
        </div>
      </section>

      {/* 제품 목록 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 첫 번째 제품 */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  모바일 앱 개발
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  iOS 및 Android 플랫폼을 위한 맞춤형 모바일 애플리케이션을
                  개발합니다. 직관적인 사용자 인터페이스와 강력한 기능을
                  결합하여 사용자에게 최상의 경험을 제공합니다.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      네이티브 및 크로스 플랫폼 개발
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      사용자 중심 UX/UI 디자인
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      백엔드 통합 및 API 개발
                    </span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                >
                  자세히 알아보기
                </Link>
              </div>

              <div className="order-1 md:order-2">
                <div className="bg-gray-200 rounded-lg h-72 md:h-96 relative overflow-hidden">
                  <div className="flex items-center justify-center h-full text-gray-500">
                    앱 이미지
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 두 번째 제품 */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  웹 개발 서비스
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  최신 웹 기술을 활용한 반응형 웹사이트와 웹 애플리케이션을
                  제작합니다. 모든 디바이스에서 최적의 성능과 디자인을 제공하는
                  솔루션을 구축합니다.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">반응형 웹사이트 개발</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      맞춤형 웹 애플리케이션
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      SEO 최적화 및 성능 개선
                    </span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                >
                  자세히 알아보기
                </Link>
              </div>

              <div className="order-1">
                <div className="bg-gray-200 rounded-lg h-72 md:h-96 relative overflow-hidden">
                  <div className="flex items-center justify-center h-full text-gray-500">
                    웹 이미지
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 세 번째 제품 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  UI/UX 디자인 서비스
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  사용자 중심의 직관적이고 매력적인 인터페이스 디자인을
                  제공합니다. 사용자의 경험을 향상시키고 비즈니스 목표를
                  달성하는 디자인 솔루션을 제공합니다.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      사용자 경험(UX) 디자인
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      사용자 인터페이스(UI) 디자인
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      프로토타이핑 및 유저 테스팅
                    </span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                >
                  자세히 알아보기
                </Link>
              </div>

              <div className="order-1 md:order-2">
                <div className="bg-gray-200 rounded-lg h-72 md:h-96 relative overflow-hidden">
                  <div className="flex items-center justify-center h-full text-gray-500">
                    디자인 이미지
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            맞춤형 솔루션이 필요하신가요?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            서울앱스튜디오는 귀사의 요구사항에 맞는 최적의 솔루션을 제공합니다.
            지금 문의하시고 무료 상담을 받아보세요.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
