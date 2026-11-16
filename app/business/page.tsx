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
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
            글로벌 교육 기관을 위한 <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400">통합 유학 솔루션</span>
          </h1>
          <p className="text-slate-300 font-light text-lg md:text-xl max-w-2xl mx-auto break-keep leading-relaxed">
            시그널이 제공하는 전문적인 B2B 교육 및 유학 파이프라인을 확인하세요.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 -mt-10 relative z-20 space-y-12">
        
        {/* Business 1: 유학원 운영 및 대학 연계 */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row items-center gap-12 group hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 group-hover:bg-blue-100 transition-colors duration-700"></div>
          
          <div className="md:w-1/2 relative z-10">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/20">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8"></path></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 tracking-tight leading-[1.2]">
              유학원 운영 및 <br/>대학 진학 다이렉트 연계
            </h2>
            <p className="text-gray-500 font-light text-lg leading-relaxed break-keep mb-8">
              해외 현지 기관의 학생들을 한국 주요 대학 어학당 및 학부로 안전하게 연계합니다. 어학당 주임강사 등 다년간의 대학 국제교육원 현장 실무 경험을 바탕으로, 까다로운 비자(D-4, D-2) 서류 검토부터 입학 행정 전반을 완벽하고 매끄럽게 대행합니다.
            </p>
            <ul className="space-y-4 text-slate-700 font-medium text-sm md:text-base">
              <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-4 shadow-sm"></div>국내 주요 4년제 대학 MOU 기반 입학 연계</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-4 shadow-sm"></div>현지 유학원 및 에이전트 대상 B2B 파이프라인 구축</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-4 shadow-sm"></div>입국 후 초기 정착 및 밀착 학사 관리 지원</li>
            </ul>
          </div>
          
          {/* 이미지가 없을 땐 bg-slate-200(연한 회색) 박스로 보이게 처리 */}
          <div 
            className="md:w-1/2 w-full aspect-[4/3] rounded-[2rem] bg-slate-200 bg-cover bg-center shadow-lg border border-gray-100 group-hover:-translate-y-2 transition-transform duration-500 flex items-center justify-center text-slate-400 font-bold"
            style={{ backgroundImage: "url('/business-1.jpg')" }}
          >
            
          </div>
        </section>

        {/* Business 2: 단기 프로그램 (다크 모드) */}
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
              해외 교육 기관의 방학 기간을 활용한 '맞춤형 단기 연수 프로그램'을 위탁 운영합니다. 단순 관광을 넘어 실생활 한국어 회화, 명문대 탐방, K-Culture 체험이 결합된 프리미엄 교육 투어입니다.
            </p>
            <ul className="space-y-4 text-slate-200 font-medium text-sm md:text-base">
              <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-4 shadow-sm"></div>1주~4주 단위 집중 한국어 회화 코스 설계</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-4 shadow-sm"></div>국내 명문대 캠퍼스 투어 및 재학생 멘토링</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-4 shadow-sm"></div>숙소, 픽업, 보험, 활동비가 포함된 All-in-One 패키지</li>
            </ul>
          </div>
          
          {/* 다크 모드에 맞춰 어두운 빈 박스(bg-slate-800)로 표시 */}
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
              시그널은 오프라인 행정에 머물지 않고 IT 역량을 결합합니다. 유학생들의 필수 관문인 TOPIK 단기 고득점을 위해, 자체 개발한 모바일 학습 웹과 학생 관리 대시보드 및 수업 관련 웹을 솔루션으로 제공 가능합니다.
            </p>
            <ul className="space-y-4 text-slate-700 font-medium text-sm md:text-base">
              <li className="flex items-center"><div className="w-2 h-2 bg-indigo-600 rounded-full mr-4 shadow-sm"></div>모바일(웹 기반) TOPIK 기출 모의고사 프로그램</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-indigo-600 rounded-full mr-4 shadow-sm"></div>기관 관리자용 성적 및 출석 프로그램</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-indigo-600 rounded-full mr-4 shadow-sm"></div>수업 관련 프로그램</li>
            </ul>
          </div>
          
          <div 
            className="md:w-1/2 w-full aspect-[4/3] rounded-[2rem] bg-slate-200 bg-cover bg-center shadow-lg border border-gray-100 group-hover:-translate-y-2 transition-transform duration-500 flex items-center justify-center text-slate-400 font-bold"
            style={{ backgroundImage: "url('/business-3.jpg')" }}
          >
            
          </div>
        </section>

      </main>

      {/* 3. 초대형 CTA 배너 */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2.5rem] p-12 md:p-16 text-center text-white shadow-[0_20px_40px_rgb(37,99,235,0.2)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">함께할 파트너 기관을 찾습니다</h2>
            <p className="text-blue-100 font-light text-lg md:text-xl mb-10 max-w-2xl mx-auto break-keep leading-relaxed">
              SIGNAL.KOREA와 함께 귀 기관의 학생들에게 최고의 한국 유학 경험을 선사하세요. 에이전트 제휴 및 맞춤형 프로그램 기획 문의를 환영합니다.
            </p>
            <button className="px-10 py-5 bg-white text-blue-700 font-bold rounded-2xl text-lg hover:bg-gray-50 hover:-translate-y-1 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
              제휴 문의 및 상담 예약
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}