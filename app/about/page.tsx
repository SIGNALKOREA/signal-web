export default function AboutPage() {
  return (
    <div className="bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-200 pb-32">
      
      {/* 1. 프리미엄 서브 타이틀 영역 (다크 모드 메쉬 그라데이션) */}
      <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden flex justify-center text-center px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black -z-10"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="max-w-4xl relative z-10">
          <span className="text-blue-400 font-bold tracking-widest text-xs md:text-sm uppercase mb-4 block">
            About SIGNAL.KOREA
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-[1.3] md:leading-[1.1] mb-6 drop-shadow-lg break-keep">
            {/* <span className="block">신뢰할 수 있는 글로벌 교육의</span> */}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 mt-2 md:mt-4">
              글로벌 교육의 새로운 기준
            </span>
          </h1>
          <p className="text-slate-300 font-light text-lg md:text-xl max-w-2xl mx-auto break-keep leading-relaxed">
            대학 교육 현장의 전문성과 독보적인 에듀테크 기술력으로 가장 완벽한 한국 유학 파이프라인을 구축합니다.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 -mt-10 relative z-20 space-y-12">
        
        {/* 2. 전문가 그룹 메시지 (초대형 캔버스 UI) */}
        <section>
          <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500">
            {/* 장식용 배경 블러 효과 */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 group-hover:bg-blue-100 transition-colors duration-700"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-20">
              
              {/* 왼쪽: 핵심 철학 및 전문가 그룹 프로필 (수정된 영역) */}
              <div className="md:w-5/12 flex flex-col justify-between">
                <div>
                  {/* 따옴표 아이콘 크기와 색상을 텍스트와 조화롭게 조정 */}
                  <svg className="w-10 h-10 text-blue-300 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  <p className="text-2xl md:text-[1.7rem] font-black text-slate-900 leading-[1.4] tracking-tight break-keep mb-8">
                    "한국어 교육의 본질은 언어를 넘어, 세계의 인재들과 <span className="text-blue-600">견고한 다리</span>를 놓는 것입니다."
                  </p>
                </div>
                
                {/* 💡 개선된 하단 전문가 그룹 명함(프로필) UI */}
                <div className="mt-4 p-5 md:p-6 bg-slate-50/80 rounded-2xl border border-gray-100 flex flex-col items-start">
                  <span className="text-[11px] font-extrabold tracking-widest text-gray-400 uppercase mb-2">
                    Education Experts Group
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 break-keep leading-snug">
                    15년 이상 경력의<br className="hidden md:block"/> 현직 대학 실무진
                  </h3>
                  
                  {/* 강제 줄바꿈 방지 및 프리미엄 뱃지 스타일 적용 */}
                  <div className="mt-4 inline-flex items-center px-3 py-1.5 bg-white text-blue-600 text-sm font-bold rounded-lg border border-gray-200 shadow-sm whitespace-nowrap">
                    <span className="flex h-2 w-2 relative mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    전 과정 직접 기획 및 운영
                  </div>
                </div>
              </div>

              {/* 오른쪽: 전문가 그룹 인사말 본문 */}
              <div className="md:w-7/12 text-gray-500 font-light text-base md:text-lg leading-loose break-keep space-y-6">
                <p>
                  15년 이상 한국어 교육에 몸담아온 대학 어학당 주임강사 및 국제처 실무진들이 다년간 현장을 직접 지휘하며 얻은 결론은 하나입니다. 글로벌 교육 기관들이 한국 유학 파이프라인을 구축할 때 가장 필요한 것은 단순한 행정 대행이나 에이전시가 아닌, <strong className="font-semibold text-slate-800">현장을 이해하는 진짜 전문가의 개입</strong>이라는 것입니다.
                </p>
                <p>
                  SIGNAL.KOREA는 단순 유학 알선을 넘어 현장 중심의 맞춤형 단기 연수 기획, 주요 4년제 대학 어학당 및 학위 과정 다이렉트 진학 연계, 그리고 자체 개발한 에듀테크 웹 기반 학습 솔루션까지 통합적으로 제공하는 B2B 전문 교육 파트너입니다.
                </p>
                <p>
                  귀 기관의 학생들이 한국에서 가장 안전하게 적응하고 성공적으로 학업 목표를 성취할 수 있도록, 시그널의 현직 교육 전문가들이 가장 완벽하고 신뢰할 수 있는 멘토이자 베이스캠프가 되어 드리겠습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 비전 & 미션 (프리미엄 Bento Box 스타일 - 인포그래픽 용도) */}
        <section className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Vision 카드 (클린 화이트) */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group hover:-translate-y-1.5 transition-all duration-500 cursor-default">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/30">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <h3 className="text-3xl font-black tracking-tight text-slate-900 mb-4">Vision</h3>
              <p className="text-gray-500 font-light text-lg break-keep leading-relaxed">
                가장 체계적이고 신뢰할 수 있는 <br/>
                <strong className="font-bold text-slate-800">K-에듀 글로벌 스탠다드 구축</strong>
              </p>
            </div>
            
            {/* Mission 카드 (다크 모드 반전) */}
            <div className="bg-slate-900 rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] group hover:-translate-y-1.5 transition-all duration-500 cursor-default relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 -z-10"></div>
              <div className="w-14 h-14 bg-white/10 text-white backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-3xl font-black tracking-tight text-white mb-4">Mission</h3>
              <p className="text-slate-400 font-light text-lg break-keep leading-relaxed">
                해외 현지 파트너 기관과의 견고한 협력을 통한 <br/>
                <strong className="font-bold text-white">B2B 맞춤형 유학 및 통합 교육 솔루션 제공</strong>
              </p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}