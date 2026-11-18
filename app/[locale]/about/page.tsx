import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <div className="bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-200 pb-32 overflow-x-hidden">
      
      {/* 1. 프리미엄 서브 타이틀 영역 (다크 모드 메쉬 그라데이션) */}
      <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden flex justify-center text-center px-4 w-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black -z-10"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="max-w-4xl relative z-10 w-full px-4">
          <span className="text-blue-400 font-bold tracking-widest text-xs md:text-sm uppercase mb-4 block break-words">
            About SIGNAL.KOREA
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-[1.2] md:leading-[1.1] mb-6 drop-shadow-lg break-words">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 mt-2 md:mt-4">
              {t("heroTitle")}
            </span>
          </h1>
          <p className="text-slate-300 font-light text-lg md:text-xl max-w-2xl mx-auto break-words leading-relaxed">
            {t("heroDesc")}
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 -mt-10 relative z-20 space-y-12 w-full">
        
        {/* 2. 전문가 그룹 메시지 (초대형 캔버스 UI) */}
        <section>
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 group-hover:bg-blue-100 transition-colors duration-700"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-20">
              
              {/* 왼쪽: 핵심 철학 및 전문가 그룹 프로필 */}
              <div className="md:w-5/12 flex flex-col justify-between">
                <div>
                  <svg className="w-10 h-10 text-blue-300 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  <p className="text-xl md:text-2xl font-black text-slate-900 leading-[1.5] tracking-tight break-words mb-8 w-full">
                    {t("quoteStart")} <span className="text-blue-600">{t("quoteHighlight")}</span>{t("quoteEnd")}
                  </p>
                </div>
                
                <div className="mt-4 p-5 md:p-6 bg-slate-50/80 rounded-2xl border border-gray-100 flex flex-col items-start w-full">
                  <span className="text-[11px] font-extrabold tracking-widest text-gray-400 uppercase mb-2 break-words">
                    Education Experts Group
                  </span>
                  <h3 className="text-xl font-black text-slate-900 break-words leading-snug w-full">
                    {t("expertTitle")}
                  </h3>
                  
                  <div className="mt-4 inline-flex items-center px-3 py-1.5 bg-white text-blue-600 text-sm font-bold rounded-lg border border-gray-200 shadow-sm flex-wrap w-fit">
                    <span className="flex h-2 w-2 relative mr-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="break-words">{t("expertBadge")}</span>
                  </div>
                </div>
              </div>

              {/* 오른쪽: 전문가 그룹 인사말 본문 */}
              <div className="md:w-7/12 text-gray-500 font-light text-base md:text-lg leading-relaxed break-words space-y-6 w-full">
                <p>
                  {t("message1Start")} <strong className="font-semibold text-slate-800">{t("message1Highlight")}</strong>{t("message1End")}
                </p>
                <p>{t("message2")}</p>
                <p>{t("message3")}</p>
                
                {/* 💡 이미지를 제거하고 프리미엄 상징 아이콘 뱃지 영역으로 교체 */}
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="p-6 bg-slate-50/50 rounded-2xl border border-blue-100/50 flex flex-col items-center justify-center text-center group hover:bg-white hover:shadow-md transition-all duration-300 cursor-default">
                    <svg className="w-10 h-10 text-blue-500 mb-3 group-hover:scale-110 group-hover:text-blue-600 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                    <span className="text-sm font-bold text-slate-700 tracking-wide">Global Network</span>
                  </div>
                  <div className="p-6 bg-slate-50/50 rounded-2xl border border-indigo-100/50 flex flex-col items-center justify-center text-center group hover:bg-white hover:shadow-md transition-all duration-300 cursor-default">
                    <svg className="w-10 h-10 text-indigo-500 mb-3 group-hover:scale-110 group-hover:text-indigo-600 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <span className="text-sm font-bold text-slate-700 tracking-wide">B2B Partnership</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 3. 비전 & 미션 (프리미엄 Bento Box 스타일) */}
        <section className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(280px,auto)]">
            
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-start group hover:-translate-y-1.5 transition-all duration-500 cursor-default h-full w-full">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/30 shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <h3 className="text-3xl font-black tracking-tight text-slate-900 mb-4 break-words">Vision</h3>
              <p className="text-gray-500 font-light text-lg break-words leading-relaxed">
                {t("visionStart")} <br className="hidden sm:block" />
                <strong className="font-bold text-slate-800">{t("visionHighlight")}</strong>
              </p>
            </div>
            
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col justify-start group hover:-translate-y-1.5 transition-all duration-500 cursor-default relative overflow-hidden h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 -z-10"></div>
              <div className="w-14 h-14 bg-white/10 text-white backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/10 shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-3xl font-black tracking-tight text-white mb-4 break-words">Mission</h3>
              <p className="text-slate-400 font-light text-lg break-words leading-relaxed">
                {t("missionStart")} <br className="hidden sm:block" />
                <strong className="font-bold text-white">{t("missionHighlight")}</strong>
              </p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}