"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* 섹션 정보는 컴포넌트 밖 상수로 */
// 화면 순서 - Hero(서비스들 보기 + 프로젝트 의뢰하기 버튼 두개) -> About Us -> Services -> Portfolio -> Testimonials -> Team -> Contact -> Footer

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [active, setActive] = useState<string>("Home");

  /* 1) Intersection Observer : 화면 중앙에 들어온 섹션을 active 로 */
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return; // 섹션 id 가 아직 없으면 무시

    const observer = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis) {
          const id = vis.target.id;
          const found = navLinks.find((l) => l.href === `#${id}`);
          found && setActive(found.name);
        }
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px", // 화면 가운데 기준
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* 2) 메뉴 클릭 시 부드러운 이동 + 즉시 active 업데이트 */
  const smoothScroll =
    (href: string, name: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", href); // 주소창 해시 유지
      setActive(name); // 클릭 즉시 하이라이트
    };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-bg-primary text-accent-primary p-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* 로고 */}
        <Link
          href="#hero"
          onClick={smoothScroll("#hero", "Home")}
          className="text-2xl font-bold text-accent-primary hover:text-accent-secondary transition-colors"
        >
          Seoul App Studio
        </Link>

        {/* 네비게이션 메뉴 */}
        <div className="flex space-x-6">
          {navLinks.map((l) => {
            const isActive = l.name === active;
            return (
              <Link
                key={l.name}
                href={l.href}
                onClick={smoothScroll(l.href, l.name)}
                className={`text-lg transition-colors ${
                  isActive
                    ? "text-accent-primary"
                    : "text-accent-secondary hover:text-accent-primary"
                }`}
              >
                {l.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
