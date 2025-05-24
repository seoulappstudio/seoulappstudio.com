// import Image from "next/image"; // 이미지를 사용하지 않는다면 주석 처리 또는 삭제

export default function Home() {
  // 실제 팀원 정보로 채워주세요.
  const teamMembers = [
    { name: "권기현", role: "CEO & Founder" },
    { name: "오한영", role: "Lead Developer" },
    { name: "김소진", role: "Digital Marketer" },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-accent-primary flex flex-col items-center justify-center p-8 font-sans">
      {" "}
      {/* 배경색, 텍스트 색상, 폰트 클래스 변경 */}
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center mb-12"
      >
        {/* 회사 이름 (가장 크게) */}
        <h1 className="text-6xl font-bold mb-4">Seoul App Studio</h1>
        {/* 회사 슬로건 (가장 눈에 띄게) */}
        <p className="text-4xl font-bold text-accent-primary mb-4">
          {" "}
          {/* 텍스트 색상 변경 */}
          아이디어를 앱으로, 혁신을 현실로
        </p>
      </section>
      {/* About Section (더미) */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-bg-secondary text-accent-primary text-4xl"
      >
        {" "}
        {/* 배경색 및 텍스트 색상 변경 */}
        About Section (더미)
      </section>
      {/* Services Section (더미) */}
      <section
        id="services"
        className="min-h-screen flex items-center justify-center bg-bg-primary text-accent-primary text-4xl"
      >
        {" "}
        {/* 배경색 및 텍스트 색상 변경 */}
        Services Section (더미)
      </section>
      {/* Team Section (기존 내용 유지) */}
      <section
        id="team"
        className="min-h-screen flex flex-col items-center justify-center w-full max-w-4xl mb-16 bg-bg-secondary text-accent-primary"
      >
        {" "}
        {/* 배경색 및 텍스트 색상 변경 */}
        <h2 className="text-3xl font-semibold mb-8 text-center border-b-2 border-slate-600 pb-2">
          팀원 소개
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-slate-800 p-6 rounded-lg shadow-xl hover:shadow-slate-500/50 transition-shadow duration-300"
            >
              {/* <Image src="/path/to/member-image.jpg" alt={member.name} width={100} height={100} className="rounded-full mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-slate-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section (기존 내용 유지) */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center w-full max-w-4xl text-center bg-bg-primary text-accent-primary"
      >
        {" "}
        {/* 배경색 및 텍스트 색상 변경 */}
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-slate-600 pb-2 inline-block">
          연락처 정보
        </h2>
        <p className="text-lg mb-2">
          궁금한 점이 있으신가요? 언제든지 문의해주세요.
        </p>
        <p className="text-slate-300">
          이메일:{"admin@seolappstuio.com"}
          <a
            href="mailto:admin@seoulappstudio.com"
            className="text-sky-400 hover:text-sky-300 underline"
          >
            admin@seoulappstudio.com
          </a>
        </p>
        <p className="text-slate-300">전화번호: 010-3265-6909 (대표)</p>
      </section>
      {/* Footer (기존 내용 유지) */}
      <footer className="mt-20 text-center text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} 서울앱스튜디오. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
