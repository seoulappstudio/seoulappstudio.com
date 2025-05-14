"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                혁신적인 앱 개발로
                <br />
                <span className="text-blue-600">비즈니스의 가치</span>를<br />
                높이세요
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                서울앱스튜디오는 최신 기술과 창의적인 디자인으로
                <br />
                귀사의 비전을 현실로 만들어 드립니다.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
                >
                  문의하기
                </Link>
                <Link
                  href="/products"
                  className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-lg border border-blue-600 transition duration-300 text-center"
                >
                  제품 살펴보기
                </Link>
              </motion.div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative w-full max-w-lg h-64 md:h-96"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-blue-200 rounded-xl transform -rotate-6"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-blue-400 rounded-xl transform rotate-3"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-white rounded-xl p-4 shadow-xl">
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-lg text-gray-500">앱 이미지</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              서울앱스튜디오의 서비스
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              최고의 기술력과 창의적인 디자인으로 고객님의 비전을 현실로 만들어
              드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                모바일 앱 개발
              </h3>
              <p className="text-gray-600">
                iOS 및 Android 플랫폼을 위한 고품질 모바일 애플리케이션을
                제작합니다.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                웹 개발
              </h3>
              <p className="text-gray-600">
                최신 웹 기술을 활용한 반응형 웹사이트와 웹 애플리케이션을
                개발합니다.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                UI/UX 디자인
              </h3>
              <p className="text-gray-600">
                사용자 중심의 직관적이고 매력적인 인터페이스 디자인을
                제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            함께 시작하세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            서울앱스튜디오와 함께 혁신적인 디지털 솔루션을 만들어보세요.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            지금 문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
