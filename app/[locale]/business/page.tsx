import { useTranslations } from "next-intl";

export default function BusinessPage() {
  const t = useTranslations("Business");

  return (
    <div className="bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-200 pb-32 overflow-x-hidden">
      
      {/* 1. 프리미엄 서브 타이틀 영역 */}
      <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden flex justify-center text-center px-4 w-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-black -z-10"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
        
        <div className="max-w-4xl relative z-10 w-full px-4">
          <span className="text-blue-400 font-bold tracking-widest text-xs md:text-sm uppercase mb-4 block break-words">
            Core Business Areas
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
        
        {/* Business 1: 유학원 운영 및 학위 진학 다이렉트 연계 */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row items-center gap-12 group hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 group-hover:bg-blue-100 transition-colors duration-700"></div>
          
          <div className="md:w-1/2 relative z-10 w-full">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/20 shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8"></path></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 tracking-tight leading-[1.3] break-words">
              {t("biz1Title1")} <br className="hidden md:block"/>{t("biz1Title2")}
            </h2>
            <p className="text-gray-500 font-light text-lg leading-relaxed break-words mb-8">
              {t("biz1Desc")}
            </p>
            <ul className="space-y-4 text-slate-700 font-medium text-sm md:text-base w-full">
              <li className="flex items-start break-words w-full">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-1.5 shadow-sm shrink-0"></div>
                <span className="flex-1">{t("biz1List1")}</span>
              </li>
              <li className="flex items-start break-words w-full">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-1.5 shadow-sm shrink-0"></div>
                <span className="flex-1">{t("biz1List2")}</span>
              </li>
              <li className="flex items-start break-words w-full">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-1.5 shadow-sm shrink-0"></div>
                <span className="flex-1">{t("biz1List3")}</span>
              </li>
            </ul>
          </div>
          
          <div 
            className="md:w-1/2 w-full aspect-[4/3] rounded-[2rem] bg-slate-200 bg-cover bg-center shadow-lg border border-gray-100 group-hover:-translate-y-2 transition-transform duration-500 flex items-center justify-center shrink-0"
            style={{ backgroundImage: "url('/business-1.jpg')" }}
          >
          </div>
        </section>

        {/* Business 2: 맞춤형 단기 문화 캠프 (다크 모드) */}
        <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col md:flex-row-reverse items-center gap-12 group hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 -z-10"></div>
          
          <div className="md:w-1/2 relative z-10 text-white w-full">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl flex items-center justify-center mb-8 shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white tracking-tight leading-[1.3] break-words">
              {t("biz2Title1")} <br className="hidden md:block"/>{t("biz2Title2")}
            </h2>
            <p className="text-slate-300 font-light text-lg leading-relaxed break-words mb-8">
              {t("biz2Desc")}
            </p>
            <ul className="space-y-4 text-slate-200 font-medium text-sm md:text-base w-full">
              <li className="flex items-start break-words w-full">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-4 mt-1.5 shadow-sm shrink-0"></div>
                <span className="flex-1">{t("biz2List1")}</span>
              </li>
              <li className="flex items-start break-words w-full">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-4 mt-1.5 shadow-sm shrink-0"></div>
                <span className="flex-1">{t("biz2List2")}</span>
              </li>
              <li className="flex items-start break-words w-full">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-4 mt-1.5 shadow-sm shrink-0"></div>
                <span className="flex-1">{t("biz2List3")}</span>
              </li>
            </ul>
          </div>
          
          <div 
            className="md:w-1/2 w-full aspect-[4/3] rounded-[2rem] bg-slate-800 bg-cover bg-center shadow-2xl group-hover:-translate-y-2 transition-transform duration-500 flex items-center justify-center shrink-0"
            style={{ backgroundImage: "url('/business-2.jpg')" }}
          >
          </div>
        </section>

        {/* Business 3: 에듀테크 솔루션 */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row items-center gap-12 group hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 overflow-hidden relative">
          <div className="md:w-1/2 relative z-10 w-full">
            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 tracking-tight leading-[1.3] break-words">
              {t("biz3Title1")} <br className="hidden md:block"/>{t("biz3Title2")}
            </h2>
            <p className="text-gray-500 font-light text-lg leading-relaxed break-words mb-8">
              {t("biz3Desc")}
            </p>
            <ul className="space-y-4 text-slate-700 font-medium text-sm md:text-base w-full">
              <li className="flex items-start break-words w-full">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-4 mt-1.5 shadow-sm shrink-0"></div>
                <span className="flex-1">{t("biz3List1")}</span>
              </li>
              <li className="flex items-start break-words w-full">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-4 mt-1.5 shadow-sm shrink-0"></div>
                <span className="flex-1">{t("biz3List2")}</span>
              </li>
              <li className="flex items-start break-words w-full">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-4 mt-1.5 shadow-sm shrink-0"></div>
                <span className="flex-1">{t("biz3List3")}</span>
              </li>
            </ul>
          </div>
          
          <div 
            className="md:w-1/2 w-full aspect-[4/3] rounded-[2rem] bg-slate-200 bg-cover bg-center shadow-lg border border-gray-100 group-hover:-translate-y-2 transition-transform duration-500 flex items-center justify-center shrink-0"
            style={{ backgroundImage: "url('/business-3.jpg')" }}
          >
          </div>
        </section>

      </main>

    </div>
  );
}