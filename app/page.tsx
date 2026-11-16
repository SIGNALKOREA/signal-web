"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white font-sans text-slate-900 selection:bg-blue-200">
      
      {/* 1. 프리미엄 히어로 섹션 (Hero Section) */}
      <section 
        className="relative w-full pt-24 pb-16 md:pt-40 md:pb-32 flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        
        {/* 전체 화면 오버레이 */}
        <div className="absolute inset-0 bg-slate-900/30"></div>
        
        {/* 반투명 유리 박스 영역: 모바일 여백(p-6)과 데스크탑 여백(md:p-16) 완벽 분리 */}
        <div className="max-w-5xl mx-auto relative z-10 text-white bg-slate-900/40 backdrop-blur-md border border-white/10 p-6 md:p-16 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_40px_rgb(0,0,0,0.3)]">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 border border-white/20 shadow-sm mb-6 md:mb-10 cursor-default">
            <span className="flex h-2 w-2 md:h-2.5 md:w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-blue-400"></span>
            </span>
            <span className="text-[10px] md:text-[11px] font-extrabold text-white tracking-widest uppercase">
              Global Edu-Tech Partner
            </span>
          </div>
          
          
         {/* 모바일 폰트를 text-4xl로 크게 키우고, break-keep을 넣어 단어가 예쁘게 떨어지게 합니다. */}
          <h1 className="text-4xl sm:text-5xl md:text-[5rem] font-black tracking-tighter leading-[1.3] md:leading-[1.1] mb-6 md:mb-8 text-white break-keep">
            <span className="block">한국 유학의 새로운 기준,</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300 mt-2 md:mt-4">
              시그널이 만듭니다.
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl text-slate-200 font-light mb-8 md:mb-12 max-w-3xl mx-auto break-keep leading-relaxed">
            해외 기관과의 견고한 파트너십을 통해 단기 연수, 어학당 진학, 그리고 자체 TOPIK 솔루션까지 완벽한 B2B 교육 파이프라인을 제공합니다.
          </p>
          
          {/* 모바일에서는 버튼 크기와 둥글기(rounded-xl)도 살짝 줄여서 화면 비율에 맞춤 */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4">
            <Link href="/consulting" className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 shadow-lg border border-blue-500">
              비즈니스 협력 제안
            </Link>
            <Link href="/about" className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white/10 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
              회사 소개서 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 핵심 역량 지표 (Core Competencies) */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 gap-x-8 text-center md:divide-x divide-gray-100">
          
          <div className="flex flex-col items-center justify-center group">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">어학당 전문성</h3>
            <p className="text-sm text-gray-500 font-light break-keep">대학 현장 주임강사급 실무 역량</p>
          </div>

          <div className="flex flex-col items-center justify-center group">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">유학 다이렉트 연계</h3>
            <p className="text-sm text-gray-500 font-light break-keep">국내 주요 4년제 대학 어학당 및 학부 진학 파이프라인</p>
          </div>

          <div className="flex flex-col items-center justify-center group">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001 1v1a2 2 0 104 0V4z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">단기 연수 직접 운영</h3>
            <p className="text-sm text-gray-500 font-light break-keep">파트너 기관 맞춤형 단기 캠프 직접 기획 및 현장 운영</p>
          </div>

          <div className="flex flex-col items-center justify-center group">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">EdTech 솔루션</h3>
            <p className="text-sm text-gray-500 font-light break-keep">자체 TOPIK 앱 및 IT 인프라 보유</p>
          </div>

        </div>
      </section>

      {/* 3. 하이엔드 벤토 박스 (Bento Box) 비즈니스 영역 */}
      <section className="py-24 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 mb-4">시그널 핵심 비즈니스</h2>
            <p className="text-lg md:text-xl text-gray-500 font-light">가장 확실하고 체계적인 글로벌 교육 인프라</p>
          </div>

          {/* 수정됨: 모바일에서는 높이 자동(auto), PC(md)에서만 320px 고정으로 변경 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[320px]">
            
            {/* 비즈니스 1: 유학원 (가장 큰 강조 영역) */}
            {/* 수정됨: 모바일 패딩 축소(p-8), 둥글기 축소(rounded-[2rem]) */}
            <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden cursor-pointer">
              <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-bl from-blue-50 via-white to-transparent opacity-50 rounded-full blur-3xl -z-10 group-hover:from-blue-100 transition-colors duration-700"></div>
              
              <div className="relative z-10">
                {/* 수정됨: 모바일 아이콘 크기 축소 (w-12 h-12) */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex justify-center items-center text-white mb-6 md:mb-8 shadow-lg shadow-blue-600/30">
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8"></path></svg>
                </div>
                {/* 수정됨: 모바일 폰트 크기 축소 (text-3xl) 및 줄간격 확보 */}
                <h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight text-slate-900 leading-[1.2] md:leading-[1.15]">유학원 운영 &<br/>대학 진학 다이렉트 연계</h3>
                <p className="text-gray-500 font-light text-base md:text-lg max-w-md break-keep leading-relaxed">
                  국내 주요 4년제 대학 어학당 및 학부 입학을 위한 서류 심사, 비자 발급, 입학까지의 모든 과정을 완벽하게 지원합니다. 현장 경험이 풍부한 어학당 주임강사급 전문가가 다이렉트로 관리합니다.
                </p>
              </div>
              
              <div className="relative z-10 flex items-center text-blue-600 font-bold text-base md:text-lg group-hover:translate-x-2 transition-transform w-max mt-8">
                협력 모델 알아보기 <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </div>

            {/* 비즈니스 2: 단기 연수 */}
            <div className="bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-2xl flex justify-center items-center text-white mb-5 md:mb-6 border border-white/10">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white tracking-tight leading-snug">맞춤형 단기 연수 <br/>직접 기획 & 운영</h3>
                <p className="text-slate-400 font-light text-sm break-keep leading-relaxed">
                  해외 학교의 방학 일정과 예산에 맞춰 100% 커스터마이징되는 단기 집중 어학 및 문화 체험 프로그램입니다.
                </p>
              </div>
            </div>

            {/* 비즈니스 3: 에듀테크 솔루션 */}
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgb(0,0,0,0.06)] transition-all duration-500 cursor-pointer">
              <div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-50 rounded-2xl flex justify-center items-center text-indigo-600 mb-5 md:mb-6">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 tracking-tight leading-snug">EdTech 기반 <br/>TOPIK 학습 솔루션</h3>
                <p className="text-gray-500 font-light text-sm break-keep leading-relaxed">
                  자체 개발한 모바일 학습 앱과 LMS를 통해 연수생들의 학습 성취도와 TOPIK 합격률을 체계적으로 끌어올립니다.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}