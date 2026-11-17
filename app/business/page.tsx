export default function BusinessPage() {
  return (
    <div className="bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-200 pb-32">
      
      {/* 1. 프리미엄 서브 타이틀 영역 */}
      <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden flex justify-center text-center px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-black -z-10"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
        
        <div className="max-w-4xl relative z-10">
          <span className="text-blue-400 font-bold tracking-widest text-xs md:text-sm uppercase mb-4 block">
            Core Business Areas
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-[1.3] md:leading-[1.1] mb-6 drop-shadow-lg break-keep">
            {/* <span className="block">글로벌 교육 기관을 위한</span> */}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 mt-2 md:mt-4">
              통합 유학 솔루션
            </span>
          </h1>
          <p className="text-slate-300 font-light text-lg md:text-xl max-w-2xl mx-auto break-keep leading-relaxed">
            15년 이상의 현직 한국어 교육 전문가들이 직접 기획하고 밀착 관리하는 시그널의 B2B 파이프라인을 확인하세요.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 -mt-10 relative z-20 space-y-12">
        
        {/* Business 1: 유학원 운영 및 학위 진학 다이렉트 연계 */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row items-center gap-12 group hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 group-hover:bg-blue-100 transition-colors duration-700"></div>
          
          <div className="md:w-1/2 relative z-10">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/20">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8"></path></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 tracking-tight leading-[1.2]">
              유학원 운영 & <br/>학위 진학·코칭 다이렉트 연계
            </h2>
            <p className="text-gray-500 font-light text-lg leading-relaxed break-keep mb-8">
              해외 현지 기관의 학생들을 한국 주요 대학 어학당부터 학부, 석사 과정까지 안전하게 연계합니다. 어학당 주임강사 등 15년 이상의 현직 대학 실무 경험을 갖춘 전문가들이 까다로운 비자 행정부터 현지 맞춤 코칭까지 다이렉트로 관리합니다.
            </p>
            <ul className="space-y-4 text-slate-700 font-medium text-sm md:text-base">
              <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-4 shadow-sm"></div>국내 4년제 대학 MOU 기반 어학당·학위 진학 연계</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-4 shadow-sm"></div>현지 유학원 및 에이전트 대상 B2B 파이프라인 구축</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-4 shadow-sm"></div>입국 후 초기 정착 및 성공적인 유학 생활 맞춤 코칭</li>
            </ul>
          </div>
          
          <div 
            className="md:w-1/2 w-full aspect-[4/3] rounded-[2rem] bg-slate-200 bg-cover bg-center shadow-lg border border-gray-100 group-hover:-translate-y-2 transition-transform duration-500 flex items-center justify-center text-slate-400 font-bold"
            style={{ backgroundImage: "url('/business-1.jpg')" }}
          >
          </div>
        </section>

        {/* Business 2: 맞춤형 단기 문화 캠프 (다크 모드) */}
        <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col md:flex-row-reverse items-center gap-12 group hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 -z-10"></div>
          
          <div className="md:w-1/2 relative z-10 text-white">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl flex items-center justify-center mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white tracking-tight leading-[1.2]">
              기관 맞춤형 <br/>단기 한국어 & 문화 캠프
            </h2>
            <p className="text-slate-300 font-light text-lg leading-relaxed break-keep mb-8">
              해외 파트너 기관의 일정과 니즈에 맞춰 100% 수요 맞춤형 단기 연수 프로그램을 기획하고 위탁 운영합니다. 실생활 한국어 회화와 명문대 탐방, 특화된 K-Culture 필드 트립이 결합된 프리미엄 교육 투어입니다.
            </p>
            <ul className="space-y-4 text-slate-200 font-medium text-sm md:text-base">
              <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-4 shadow-sm"></div>기관 목적에 부합하는 1주~4주 집중 회화 및 특화 코스 설계</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-4 shadow-sm"></div>국내 명문대 캠퍼스 투어 및 기업/산업 현장 맞춤형 시찰</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-4 shadow-sm"></div>예산 맞춤형 숙소 수배 및 현장 통솔 전문가 밀착 동행</li>
            </ul>
          </div>
          
          <div 
            className="md:w-1/2 w-full aspect-[4/3] rounded-[2rem] bg-slate-800 bg-cover bg-center shadow-2xl group-hover:-translate-y-2 transition-transform duration-500 flex items-center justify-center text-slate-600 font-bold"
            style={{ backgroundImage: "url('/business-2.jpg')" }}
          >
          </div>
        </section>

        {/* Business 3: 에듀테크 솔루션 */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row items-center gap-12 group hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 overflow-hidden relative">
          <div className="md:w-1/2 relative z-10">
            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 tracking-tight leading-[1.2]">
              EdTech 웹 기반 <br/>TOPIK 학습 솔루션
            </h2>
            <p className="text-gray-500 font-light text-lg leading-relaxed break-keep mb-8">
              시그널은 15년간의 현장 교육 노하우에 IT 역량을 결합합니다. 유학생들의 필수 관문인 TOPIK 고득점과 원활한 학사 운영을 위해, 자체 개발한 모바일 학습 웹과 학생/수업 관리 솔루션을 파트너 기관에 제공합니다.
            </p>
            <ul className="space-y-4 text-slate-700 font-medium text-sm md:text-base">
              <li className="flex items-center"><div className="w-2 h-2 bg-indigo-600 rounded-full mr-4 shadow-sm"></div>모바일(웹 기반) TOPIK 기출 모의고사 프로그램</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-indigo-600 rounded-full mr-4 shadow-sm"></div>기관 관리자용 성적 및 출석 관리 대시보드 연동</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-indigo-600 rounded-full mr-4 shadow-sm"></div>학업 능률을 높이는 양방향 수업 관련 웹 프로그램</li>
            </ul>
          </div>
          
          <div 
            className="md:w-1/2 w-full aspect-[4/3] rounded-[2rem] bg-slate-200 bg-cover bg-center shadow-lg border border-gray-100 group-hover:-translate-y-2 transition-transform duration-500 flex items-center justify-center text-slate-400 font-bold"
            style={{ backgroundImage: "url('/business-3.jpg')" }}
          >
          </div>
        </section>

      </main>

    </div>
  );
}