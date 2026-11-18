import { useTranslations } from "next-intl";

export default function ConsultingPage() {
  const t = useTranslations("Consulting");

  return (
    <div className="bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-200 pb-32 overflow-x-hidden">
      
      {/* 1. 프리미엄 서브 타이틀 영역 */}
      <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden flex justify-center text-center px-4 w-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-black -z-10"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
        
        <div className="max-w-4xl relative z-10 w-full px-4">
          <span className="text-blue-400 font-bold tracking-widest text-xs md:text-sm uppercase mb-4 block break-words">
            {t("heroBadge")}
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

      <main className="max-w-6xl mx-auto px-6 -mt-10 relative z-20 space-y-20 w-full">
        
        {/* 2. 핵심 경쟁력 (Bento Box - 3열) */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4 break-words">{t("compTitle")}</h2>
            <p className="text-gray-500 font-light text-lg max-w-2xl mx-auto break-words">
              {t("compDesc")}
            </p>
          </div>
          
          {/* min-h 적용으로 텍스트 길이에 따라 유연하게 늘어나는 3열 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
            <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 h-full flex flex-col">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight break-words">{t("comp1Title")}</h3>
              <p className="text-gray-500 font-light leading-relaxed break-words flex-grow">
                {t("comp1Desc")}
              </p>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 h-full flex flex-col">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight break-words">{t("comp2Title")}</h3>
              <p className="text-gray-500 font-light leading-relaxed break-words flex-grow">
                {t("comp2Desc")}
              </p>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 h-full flex flex-col">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight break-words">{t("comp3Title")}</h3>
              <p className="text-gray-500 font-light leading-relaxed break-words flex-grow">
                {t("comp3Desc")}
              </p>
            </div>
          </div>
        </section>

        {/* 3. B2B 파트너십 수속 프로세스 (Timeline UI) */}
        <section className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-20 -z-10"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 break-words">{t("procTitle")}</h2>
            <p className="text-slate-400 font-light text-lg break-words">{t("procDesc")}</p>
          </div>

          <div className="relative z-10 w-full">
            <div className="hidden md:block absolute top-[4.5rem] left-10 right-10 h-0.5 bg-slate-700/50"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative group w-full">
                <div className="w-16 h-16 bg-slate-800 border-4 border-slate-900 text-blue-400 rounded-2xl flex items-center justify-center font-black text-2xl mx-auto mb-6 relative z-10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg shrink-0">1</div>
                <div className="text-center w-full px-2">
                  <h4 className="font-bold text-white text-xl mb-3 break-words">{t("proc1Title")}</h4>
                  <p className="text-sm text-slate-400 font-light break-words leading-relaxed">
                    <span className="block">{t("proc1Desc1")}</span>
                    <span className="block mt-1">{t("proc1Desc2")}</span>
                  </p>
                </div>
              </div>
              <div className="relative group w-full">
                <div className="w-16 h-16 bg-slate-800 border-4 border-slate-900 text-blue-400 rounded-2xl flex items-center justify-center font-black text-2xl mx-auto mb-6 relative z-10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg shrink-0">2</div>
                <div className="text-center w-full px-2">
                  <h4 className="font-bold text-white text-xl mb-3 break-words">{t("proc2Title")}</h4>
                  <p className="text-sm text-slate-400 font-light break-words leading-relaxed">
                    <span className="block">{t("proc2Desc1")}</span>
                    <span className="block mt-1">{t("proc2Desc2")}</span>
                  </p>
                </div>
              </div>
              <div className="relative group w-full">
                <div className="w-16 h-16 bg-slate-800 border-4 border-slate-900 text-blue-400 rounded-2xl flex items-center justify-center font-black text-2xl mx-auto mb-6 relative z-10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg shrink-0">3</div>
                <div className="text-center w-full px-2">
                  <h4 className="font-bold text-white text-xl mb-3 break-words">{t("proc3Title")}</h4>
                  <p className="text-sm text-slate-400 font-light break-words leading-relaxed">
                    <span className="block">{t("proc3Desc1")}</span>
                    <span className="block mt-1">{t("proc3Desc2")}</span>
                  </p>
                </div>
              </div>
              <div className="relative group w-full">
                <div className="w-16 h-16 bg-slate-800 border-4 border-slate-900 text-blue-400 rounded-2xl flex items-center justify-center font-black text-2xl mx-auto mb-6 relative z-10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg shrink-0">4</div>
                <div className="text-center w-full px-2">
                  <h4 className="font-bold text-white text-xl mb-3 break-words">{t("proc4Title")}</h4>
                  <p className="text-sm text-slate-400 font-light break-words leading-relaxed">
                    <span className="block">{t("proc4Desc1")}</span>
                    <span className="block mt-1">{t("proc4Desc2")}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 유학생 맞춤 코칭 & 진학 케어 로드맵 */}
        <section className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mt-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4 break-words">{t("coachTitle")}</h2>
            <p className="text-gray-500 font-light text-lg break-words">{t("coachDesc")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[minmax(320px,auto)]">
            <div className="border border-blue-100 bg-blue-50/30 rounded-3xl p-8 hover:bg-blue-50 transition-colors duration-300 h-full flex flex-col w-full">
              <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-blue-100 shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 break-words">{t("coach1Title")}</h3>
              <ul className="space-y-3 text-gray-600 text-sm font-light leading-relaxed flex-grow">
                <li className="flex items-start break-words"><span className="text-blue-500 mr-2 shrink-0 mt-0.5">✔</span> <span className="flex-1">{t("coach1List1")}</span></li>
                <li className="flex items-start break-words"><span className="text-blue-500 mr-2 shrink-0 mt-0.5">✔</span> <span className="flex-1">{t("coach1List2")}</span></li>
                <li className="flex items-start break-words"><span className="text-blue-500 mr-2 shrink-0 mt-0.5">✔</span> <span className="flex-1">{t("coach1List3")}</span></li>
              </ul>
            </div>

            <div className="border border-indigo-100 bg-indigo-50/30 rounded-3xl p-8 hover:bg-indigo-50 transition-colors duration-300 h-full flex flex-col w-full">
              <div className="w-14 h-14 bg-white text-indigo-600 rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-indigo-100 shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 break-words">{t("coach2Title")}</h3>
              <ul className="space-y-3 text-gray-600 text-sm font-light leading-relaxed flex-grow">
                <li className="flex items-start break-words"><span className="text-indigo-500 mr-2 shrink-0 mt-0.5">✔</span> <span className="flex-1">{t("coach2List1")}</span></li>
                <li className="flex items-start break-words"><span className="text-indigo-500 mr-2 shrink-0 mt-0.5">✔</span> <span className="flex-1">{t("coach2List2")}</span></li>
                <li className="flex items-start break-words"><span className="text-indigo-500 mr-2 shrink-0 mt-0.5">✔</span> <span className="flex-1">{t("coach2List3")}</span></li>
              </ul>
            </div>

            <div className="border border-teal-100 bg-teal-50/30 rounded-3xl p-8 hover:bg-teal-50 transition-colors duration-300 h-full flex flex-col w-full">
              <div className="w-14 h-14 bg-white text-teal-600 rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-teal-100 shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 break-words">{t("coach3Title")}</h3>
              <ul className="space-y-3 text-gray-600 text-sm font-light leading-relaxed flex-grow">
                <li className="flex items-start break-words"><span className="text-teal-500 mr-2 shrink-0 mt-0.5">✔</span> <span className="flex-1">{t("coach3List1")}</span></li>
                <li className="flex items-start break-words"><span className="text-teal-500 mr-2 shrink-0 mt-0.5">✔</span> <span className="flex-1">{t("coach3List2")}</span></li>
                <li className="flex items-start break-words"><span className="text-teal-500 mr-2 shrink-0 mt-0.5">✔</span> <span className="flex-1">{t("coach3List3")}</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. 현지 정착 케어 서비스 */}
        <section className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 w-full">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4 break-words">{t("settleTitle")}</h2>
            <p className="text-gray-500 font-light text-lg break-words">{t("settleDesc")}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="flex items-start group w-full">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mr-5 shrink-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div className="w-full pr-2">
                <h4 className="text-xl font-bold text-slate-900 mb-2 break-words">{t("settle1Title")}</h4>
                <p className="font-light text-gray-500 leading-relaxed break-words">{t("settle1Desc")}</p>
              </div>
            </div>
            
            <div className="flex items-start group w-full">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mr-5 shrink-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div className="w-full pr-2">
                <h4 className="text-xl font-bold text-slate-900 mb-2 break-words">{t("settle2Title")}</h4>
                <p className="font-light text-gray-500 leading-relaxed break-words">{t("settle2Desc")}</p>
              </div>
            </div>
            
            <div className="flex items-start group w-full">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mr-5 shrink-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div className="w-full pr-2">
                <h4 className="text-xl font-bold text-slate-900 mb-2 break-words">{t("settle3Title")}</h4>
                <p className="font-light text-gray-500 leading-relaxed break-words">{t("settle3Desc")}</p>
              </div>
            </div>
            
            <div className="flex items-start group w-full">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mr-5 shrink-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div className="w-full pr-2">
                <h4 className="text-xl font-bold text-slate-900 mb-2 break-words">{t("settle4Title")}</h4>
                <p className="font-light text-gray-500 leading-relaxed break-words">{t("settle4Desc")}</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}