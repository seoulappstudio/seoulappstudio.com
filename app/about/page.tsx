"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const metadata = {
  title: "회사 소개 | Seoul App Studio",
  description:
    "서울앱스튜디오는 혁신적인 모바일 앱과 웹 솔루션을 개발하는 전문 스튜디오입니다.",
};

export default function About() {
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
            회사 소개
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            서울앱스튜디오는 2020년에 설립된 앱 개발 전문 스튜디오로, 혁신적인
            디지털 경험을 제공하기 위해 최선을 다하고 있습니다.
          </motion.p>
        </div>
      </section>

      {/* 회사 소개 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-200 rounded-lg h-96 relative overflow-hidden">
                <div className="flex items-center justify-center h-full text-gray-500">
                  회사 이미지
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                우리의 이야기
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                서울앱스튜디오는 2020년, 디지털 세상에서 더 나은 사용자 경험을
                제공하겠다는 비전으로 설립되었습니다. 우리는 모바일 앱과 웹
                개발을 전문으로 하며, 고객의 아이디어를 현실로 만들기 위해
                최선을 다하고 있습니다.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                우리 팀은 경험이 풍부한 개발자, 디자이너, 프로젝트 매니저로
                구성되어 있으며, 각자의 전문 분야에서 최고의 역량을 발휘하고
                있습니다. 우리는 단순히 코드를 작성하는 것이 아니라, 고객의
                비즈니스 목표를 달성하고 사용자에게 가치를 제공하는 솔루션을
                만들기 위해 노력합니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                우리는 지속적인 혁신과 최신 기술 트렌드를 따라가며, 항상 최고의
                품질과 서비스를 제공하기 위해 노력하고 있습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 핵심 가치 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">핵심 가치</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              서울앱스튜디오가 추구하는 가치와 신념입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                품질과 신뢰
              </h3>
              <p className="text-gray-600">
                우리는 모든 프로젝트에서 최고의 품질을 추구하며, 고객과의 신뢰
                관계를 가장 중요하게 생각합니다.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                혁신과 창의성
              </h3>
              <p className="text-gray-600">
                우리는 항상 새로운 아이디어와 접근 방식을 탐구하며, 창의적인
                솔루션으로 문제를 해결합니다.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                팀워크와 협력
              </h3>
              <p className="text-gray-600">
                우리는 함께 일하는 힘을 믿으며, 고객과의 긴밀한 협력을 통해
                최상의 결과를 창출합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 팀 소개 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">우리 팀</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              서울앱스튜디오의 전문가들을 소개합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 rounded-xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-6 overflow-hidden">
                <div className="flex items-center justify-center h-full text-gray-500">
                  사진
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                김서울
              </h3>
              <p className="text-blue-600 mb-4">CEO & 설립자</p>
              <p className="text-gray-600">
                10년 이상의 앱 개발 경험을 가진 베테랑 개발자이자 비전을
                제시하는 리더입니다.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-6 overflow-hidden">
                <div className="flex items-center justify-center h-full text-gray-500">
                  사진
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                이태원
              </h3>
              <p className="text-blue-600 mb-4">CTO</p>
              <p className="text-gray-600">
                최신 기술 트렌드에 정통하며, 기술적 도전을 해결하는 혁신적인
                개발자입니다.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-6 overflow-hidden">
                <div className="flex items-center justify-center h-full text-gray-500">
                  사진
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                박강남
              </h3>
              <p className="text-blue-600 mb-4">디자인 책임자</p>
              <p className="text-gray-600">
                사용자 중심의 UI/UX 디자인을 통해 멋진 디지털 경험을 창출하는
                디자이너입니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
