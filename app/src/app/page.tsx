// import Image from "next/image"; // 이미지를 사용하지 않는다면 주석 처리 또는 삭제

export default function Home() {
  // 실제 팀원 정보로 채워주세요.
  const teamMembers = [
    { name: "권기현", role: "CEO & Founder" },
    { name: "오한영", role: "Lead Developer" },
    { name: "김소진", role: "Digital Marketer" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Seoul App Studio</h1>
        <p className="text-xl text-slate-300">
          세상을 바꾸는 혁신적인 아이디어를 현실로 만듭니다.
        </p>
      </header>

      <main className="w-full max-w-4xl">
        <section id="team" className="mb-16">
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

        <section id="contact" className="text-center">
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
      </main>

      <footer className="mt-20 text-center text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} 서울앱스튜디오. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
