// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CountUp from "react-countup"; // 숫자 카운트업용 (npm i react-countup)
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TeamMemberModal from "@/components/TeamMemberModal";

// ────────────────────────────────────────────
// 0. 공통 데이터 (더미)

const services = [
  {
    name: "Time To Time",
    desc: "시간 타이머 & 생산성 앱",
    url: "https://time.seoulappstudio.com",
  },
  {
    name: "MINNOW",
    desc: "영상 기반 단체 미팅 앱",
    url: "https://minnow.seoulappstudio.com/",
  },
  // {
  //   name: "StudyMate",
  //   desc: "스터디 매칭 & 관리 앱",
  //   url: "https://studymate.app",
  // },
  // {
  //   name: "StudyMate",
  //   desc: "스터디 매칭 & 관리 앱",
  //   url: "https://studymate.app",
  // },
];

const stats = [
  { label: "월간 사용자", value: 1500 },
  { label: "출시 앱", value: 2 },
  { label: "누적 다운로드", value: 500 },
];

const teamMembers = [
  {
    name: "권기현",
    role: "CEO & Founder",
    bio: "서울앱스튜디오의 창립자이자 CEO로, 혁신적인 모바일 앱 개발을 통해 사용자들의 일상을 더 편리하게 만들고자 합니다. 10년 이상의 IT 업계 경험을 바탕으로 팀을 이끌며, 고객의 아이디어를 현실로 만드는 데 열정을 가지고 있습니다.",
    skills: ["전략 기획", "프로젝트 관리", "비즈니스 개발", "팀 리더십"],
    profileImage: "/images/profiles/kwon-kihyeon.jpg",
    email: "kihyeon.kwn@gmail.com",
    github: "https://github.com/kihyeonkwon",
    // linkedin: "https://linkedin.com/in/kwon-kihyeon",
  },
  {
    name: "오한영",
    role: "Lead Developer",
    bio: "풀스택 개발자로서 Flutter, React, Next.js, Node.js, Java를 활용한 현대적인 웹/앱 애플리케이션 개발을 전문으로 합니다. 깔끔하고 효율적인 코드 작성을 추구하며, 사용자 경험을 최우선으로 생각하는 개발자입니다.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "React Native",
      "AWS",
    ],
    profileImage: "/images/profiles/oh-hanyeong.jpg",
    email: "ohy0720@gmail.com",
    github: "https://github.com/999Hans",
    // linkedin: "https://linkedin.com/in/oh-hanyeong",
  },
  {
    name: "김소진",
    role: "Strategy Marketer",
    bio: "디지털 마케팅 전략 수립과 브랜드 마케팅을 담당하고 있습니다. 데이터 분석을 통한 마케팅 최적화와 사용자 행동 분석을 전문으로 하며, 제품의 시장 진입 전략을 설계합니다.",
    skills: [
      "디지털 마케팅",
      "데이터 분석",
      "브랜드 전략",
      "소셜미디어 마케팅",
      "SEO",
    ],
    profileImage: "/images/profiles/kim-sojin.jpeg",
    email: "sojin3155@gmail.com>",
    // linkedin: "https://linkedin.com/in/kim-sojin",
  },
];

const values = [
  { icon: "⚡️", title: "빠른 실행", desc: "아이디어보다 실행" },
  { icon: "🧩", title: "고객 맞춤", desc: "고객에 요구에 딱 맞는 솔루션" },
  { icon: "🌱", title: "지속 성장", desc: "고객과 함께 크는 서비스" },
  {
    icon: "📈",
    title: "데이터 중심",
    desc: "데이터로 더 나은 선택",
  },
];

const testimonials = [
  {
    content:
      "서울앱스튜디오와 함께히여 프로젝트를 빠르고 효율적으로 진행할 수 있었습니다. 정말 감사합니다!다음에도 꼭 다시 의뢰하고 싶습니다.",
    author: "기현우 (~~서비스 대표)",
  },
  {
    content:
      "우리의 아이디어를 완벽하게 구현해주셔서 감사합니다. 앞으로도 계속 협력하고 싶습니다!",
    author: "박소영 (~~서비스 대표)",
  },
];
// ────────────────────────────────────────────
// 화면 순서 - Hero(서비스들 보기 + 프로젝트 의뢰하기 버튼 두개) -> About Us -> Services -> Portfolio -> Testimonials -> Team -> Contact -> Footer

export default function Home() {
  /* (선택) 스크롤 시 네비 메뉴 하이라이트 유지용 state */
  const [active, setActive] = useState("hero");
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const ids = [
      "hero",
      "about",
      "services",
      "portfolio",
      "testimonials",
      "team",
      "contact",
    ];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top) setActive(top.target.id);
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: [0.25, 0.5] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const scrollTo = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", hash);
  };

  return (
    <>
      {/* ───── 2. Hero ───── */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-bg-primary text-accent-primary pt-24"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          아이디어를 앱으로, 혁신을 현실로
        </h1>
        <p className="max-w-xl text-accent-secondary text-xl md:text-2xl mb-10">
          서울앱스튜디오는 당신의 상상을 현실로 만듭니다
        </p>
        {/* 서비스들 섹션과 문의하기 섹션 버튼 두개 추가 */}
        <div className="flex space-x-4">
          <Link
            href="#services"
            onClick={scrollTo("#services")}
            className="px-8 py-3 rounded-2xl bg-bg-secondary text-bg-primary font-medium shadow hover:opacity-90 transition"
          >
            서비스 보기
          </Link>
          <Link
            href="#contact"
            onClick={scrollTo("#contact")}
            className="px-8 py-3 rounded-2xl bg-bg-secondary text-accent-primary font-medium shadow hover:opacity-90 transition"
          >
            프로젝트 의뢰하기
          </Link>
        </div>
      </section>
      <section id="about" className="py-24 bg-bg-secondary text-accent-primary">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold">핵심 가치</h2>
        </div>
        <div className="container mx-auto grid gap-10 md:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="p-8 bg-bg-primary rounded-2xl shadow-lg"
            >
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-accent-secondary">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ───── 3. Services ───── */}
      <section
        id="services"
        className="py-24 bg-bg-primary text-accent-primary"
      >
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold">주요 서비스</h2>
        </div>
        {services.length <= 3 ? (
          <div className="container mx-auto flex justify-center gap-10">
            {services.map((svc) => (
              <a
                key={svc.name}
                href={svc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-secondary p-8 rounded-2xl shadow-lg hover:shadow-accent-secondary/40 transition-shadow block hover:scale-105 duration-200 w-80"
              >
                <h3 className="text-xl font-semibold mb-2">{svc.name}</h3>
                <p className="text-accent-secondary">{svc.desc}</p>
                <img
                  src={`/images/${svc.name.toLowerCase()}.png`}
                  alt={svc.name}
                  className="mt-4 w-full h-48 object-cover rounded-lg"
                />
              </a>
            ))}
          </div>
        ) : (
          <div className="container mx-auto relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={3.5}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0: { slidesPerView: 1.2 },
                640: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.5 },
              }}
              loop={false}
              style={{ paddingRight: "40px" }} // 오른쪽 화살표 공간 확보
            >
              {services.map((svc) => (
                <SwiperSlide key={svc.name}>
                  <a
                    href={svc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-bg-secondary p-8 rounded-2xl shadow-lg hover:shadow-accent-secondary/40 transition-shadow block hover:scale-105 duration-200"
                  >
                    <h3 className="text-xl font-semibold mb-2">{svc.name}</h3>
                    <p className="text-accent-secondary">{svc.desc}</p>
                    <img
                      src={`/images/${svc.name.toLowerCase()}.png`}
                      alt={svc.name}
                      className="mt-4 w-full h-48 object-cover rounded-lg"
                    />
                  </a>
                </SwiperSlide>
              ))}
              {/* Swiper 내장 네비게이션 버튼 */}
              <div className="swiper-button-next !right-0 !text-accent-primary" />
              <div className="swiper-button-prev !left-0 !text-accent-primary" />
            </Swiper>
          </div>
        )}
      </section>
      <section
        id="portfolio"
        className="py-24 bg-bg-secondary text-accent-primary text-center"
      >
        <div className="container mx-auto mb-16">
          <h2 className="text-3xl font-semibold">포트폴리오</h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((s) => (
            <div key={s.label} className="space-y-2">
              <p className="text-5xl font-extrabold">
                <CountUp end={s.value} duration={2} separator="," />
              </p>
              <p className="text-accent-secondary">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        id="testimonials"
        className="py-24 bg-bg-primary text-accent-primary text-center"
      >
        <div className="container mx-auto mb-16">
          <h2 className="text-3xl font-semibold">고객 후기</h2>
        </div>
        <div className="container mx-auto max-w-2xl space-y-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="p-6 bg-bg-secondary rounded-xl shadow-lg"
            >
              <p className="text-lg italic mb-4">"{t.content}"</p>
              <footer className="text-sm text-accent-secondary">
                - {t.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
      {/* ───── 5. Team ───── */}
      <section id="team" className="py-24 bg-bg-secondary text-accent-primary">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold">팀원 소개</h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((m) => (
            <div
              key={m.name}
              className="p-8 bg-bg-primary rounded-2xl shadow-xl hover:shadow-slate-500/40 transition-shadow cursor-pointer hover:scale-105 duration-200"
              onClick={() => {
                setSelectedMember(m);
                setIsModalOpen(true);
              }}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={m.profileImage}
                  alt={m.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
                />
                <h3 className="text-xl font-semibold mb-1">{m.name}</h3>
                <p className="text-slate-400">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ───── 6. Contact ───── */}
      <section
        id="contact"
        className="py-24 bg-bg-primary text-accent-primary text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">문의하기</h2>
        <p className="text-lg mb-4">
          궁금한 점이 있으신가요? 언제든 연락 주세요.
        </p>
        <div className="space-y-2">
          <p>
            이메일&nbsp;:&nbsp;
            <a
              href="mailto:admin@seoulappstudio.com"
              className="text-sky-400 hover:text-sky-300 underline"
            >
              admin@seoulappstudio.com
            </a>
          </p>
          <p>전화번호&nbsp;:&nbsp;010-3265-6909 (대표)</p>
        </div>
      </section>
      {/* ───── 7. Footer ───── */}
      <footer className="py-10 bg-bg-secondary text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} 서울앱스튜디오. All rights reserved.
      </footer>

      <TeamMemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedMember(null);
        }}
      />
    </>
  );
}
