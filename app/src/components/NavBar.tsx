"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/** 사이드 이펙트 없는 상수는 컴포넌트 밖으로 */
const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  /* ① 현재 활성 섹션  */
  const [active, setActive] = useState<string>("Home");

  /* ② Intersection Observer — 최초 마운트 시 한 번 */
  useEffect(() => {
    /* 브라우저 환경에서만 동작 */
    if (typeof window === "undefined") return;

    /* 각 섹션 DOM 요소 수집 */
    const sectionEls = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter(Boolean) as HTMLElement[];

    /* rootMargin: -50% → 화면의 ‘가운데’가 섹션에 닿을 때 감지 */
    const observer = new IntersectionObserver(
      (entries) => {
        /* 가장 많이 노출된(entry.intersectionRatio) 섹션 하나만 선택 */
        const topEntry = entries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0];
        if (topEntry?.isIntersecting) {
          const id = topEntry.target.getAttribute("id");
          const found = navLinks.find((l) => l.href === `#${id}`);
          if (found && found.name !== active) setActive(found.name);
        }
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px", // 위·아래 50%만 활성영역
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    /* 관찰 시작 */
    sectionEls.forEach((el) => observer.observe(el));

    /* 언마운트 시 해제 */
    return () => observer.disconnect();
  }, [active]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-bg-primary text-accent-primary p-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* 로고 */}
        <Link
          href="#hero"
          className="text-2xl font-bold text-accent-primary hover:text-accent-secondary transition-colors"
        >
          Seoul App Studio
        </Link>

        {/* 네비게이션 메뉴 */}
        <div className="flex space-x-6">
          {navLinks.map((link) => {
            const isActive = link.name === active;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg transition-colors ${
                  isActive
                    ? "text-accent-primary"
                    : "text-accent-secondary hover:text-accent-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
