import { Link } from "../../navigation";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="bg-white font-sans text-slate-900 selection:bg-blue-200 overflow-x-hidden">
      
      {/* 1. 프리미엄 히어로 섹션 (Hero Section) */}
      <section 
        className="relative w-full pt-24 pb-16 md:pt-40 md:pb-32 flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/30"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-white bg-slate-900/40 backdrop-blur-md border border-white/10 p-6 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_40px_rgb(0,0,0,0.3)] w-full">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 border border-white/20 shadow-sm mb-6 md:mb-10 cursor-default">
            <span className="flex h-2 w-2 md:h-2.5 md:w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-blue-400"></span>
            </span>
            <span className="text-[10px] md:text-[11px] font-extrabold text-white tracking-widest uppercase break-words">
              {t("heroBadge")}
            </span>
          </div>
          
          {/* 💡 엄청 컸던 폰트 사이즈를 반응형으로 살짝 줄이고, break-keep을 지워 자동 줄바꿈(break-words) 허용 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tighter leading-[1.2] md:leading-[1.1] mb-6 md:mb-8 text-white break-words">
            <span className="block">{t("heroTitle1")}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300 mt-2 md:mt-4">
              {t("heroTitle2")}
            </span>
          </h1>
          
         <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 font-light mb-8 md:mb-12 max-w-3xl mx-auto break-words leading-relaxed">
            {t("heroDesc")}
          </p>
        </div>
      </section>

      {/* 2. 핵심 역량 지표 (Core Competencies) */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 gap-x-8 text-center md:divide-x divide-gray-100">
          
          <div className="flex flex-col items-center justify-start group">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8"></path></svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 break-words w-full">{t("core1Title")}</h3>
            <p className="text-sm text-gray-500 font-light break-words w-full">{t("core1Desc")}</p>
          </div>

          <div className="flex flex-col items-center justify-start group">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 break-words w-full">{t("core2Title")}</h3>
            <p className="text-sm text-gray-500 font-light break-words w-full">{t("core2Desc")}</p>
          </div>

          <div className="flex flex-col items-center justify-start group">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001 1v1a2 2 0 104 0V4z"></path></svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 break-words w-full">{t("core3Title")}</h3>
            <p className="text-sm text-gray-500 font-light break-words w-full">{t("core3Desc")}</p>
          </div>

          <div className="flex flex-col items-center justify-start group">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 break-words w-full">{t("core4Title")}</h3>
            <p className="text-sm text-gray-500 font-light break-words w-full">{t("core4Desc")}</p>
          </div>

        </div>
      </section>

      {/* 3. 하이엔드 벤토 박스 (Bento Box) 비즈니스 영역 */}
      <section className="py-24 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 mb-4 break-words">{t("bizSectionTitle")}</h2>
            <p className="text-lg md:text-xl text-gray-500 font-light break-words">{t("bizSectionSub")}</p>
          </div>

          {/* 💡 320px 고정을 풀고 최소 높이(min-h)로 변경하여 텍스트 길이에 따라 유연하게 늘어나도록 수정 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[minmax(320px,auto)]">
            
            <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden cursor-pointer">
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex justify-center items-center text-white mb-6 md:mb-8 shadow-lg shadow-blue-600/30 shrink-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8"></path></svg>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight text-slate-900 leading-[1.3] md:leading-[1.2] break-words">
                  {t("biz1Title1")}<br/>{t("biz1Title2")}
                </h3>
                <p className="text-gray-500 font-light text-base md:text-lg max-w-2xl break-words leading-relaxed flex-grow">
                  {t("biz1Desc")}
                </p>
                <Link href="/consulting" className="relative z-10 flex items-center text-blue-600 font-bold text-base md:text-lg group-hover:translate-x-2 transition-transform w-max mt-8 shrink-0">
                  {t("biz1Link")} <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden cursor-pointer min-h-[320px]">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-colors duration-500"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-2xl flex justify-center items-center text-white mb-5 md:mb-6 border border-white/10 shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white tracking-tight leading-snug break-words">
                  {t("biz2Title1")} <br/>{t("biz2Title2")}
                </h3>
                <p className="text-slate-400 font-light text-sm break-words leading-relaxed flex-grow mt-auto">
                  {t("biz2Desc")}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgb(0,0,0,0.06)] transition-all duration-500 cursor-pointer min-h-[320px]">
              <div className="h-full flex flex-col">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-50 rounded-2xl flex justify-center items-center text-indigo-600 mb-5 md:mb-6 shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 tracking-tight leading-snug break-words">
                  {t("biz3Title1")} <br/>{t("biz3Title2")}
                </h3>
                <p className="text-gray-500 font-light text-sm break-words leading-relaxed flex-grow mt-auto">
                  {t("biz3Desc")}
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}