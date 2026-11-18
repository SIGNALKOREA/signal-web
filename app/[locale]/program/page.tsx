import { useTranslations } from "next-intl";

export default function ProgramPage() {
  const t = useTranslations("Program");

  return (
    <div className="bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-200 pb-32 overflow-x-hidden">
      
      {/* 1. 프리미엄 서브 타이틀 영역 */}
      <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden flex justify-center text-center px-4 w-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-black -z-10"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent"></div>
        
        <div className="max-w-4xl relative z-10 w-full px-4">
          <span className="text-indigo-400 font-bold tracking-widest text-xs md:text-sm uppercase mb-4 block break-words">
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

      <main className="max-w-6xl mx-auto px-6 -mt-10 relative z-20 space-y-16 w-full">
        
        {/* 2. 단기 연수 프로그램 (Short-term Course) */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-gray-100 pb-8 gap-6">
            <div className="w-full">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight break-words">{t("sec1Title")}</h2>
              <p className="text-gray-500 font-light text-lg mt-3 break-words">{t("sec1Sub")}</p>
            </div>
            <div className="bg-slate-50 px-5 py-3 rounded-2xl border border-gray-100 shrink-0">
              <span className="flex items-center text-sm font-bold text-slate-700 break-words">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-3 animate-pulse shrink-0"></span>
                {t("sec1Badge")}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* 왼쪽 설명 영역 */}
            <div className="lg:col-span-4 space-y-8">
              <p className="text-slate-600 font-light break-words leading-relaxed text-lg">
                {t("sec1Desc")}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start w-full">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-4 shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 break-words">{t("feat1Title")}</h4>
                    <p className="text-sm text-gray-500 font-light mt-1 break-words">{t("feat1Desc")}</p>
                  </div>
                </div>
                <div className="flex items-start w-full">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-4 shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8"></path></svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 break-words">{t("feat2Title")}</h4>
                    <p className="text-sm text-gray-500 font-light mt-1 break-words">{t("feat2Desc")}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 오른쪽: 하이엔드 테이블 UI */}
            <div className="lg:col-span-8 w-full">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center break-words">
                <svg className="w-5 h-5 mr-2 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                {t("tableTitle")}
              </h4>
              
              <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white w-full">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-center">
                    <thead className="bg-slate-50 border-b border-gray-100">
                      <tr>
                        <th className="px-4 py-4 font-bold text-slate-600 min-w-[80px] break-words">{t("thType")}</th>
                        <th className="px-4 py-4 font-bold text-slate-600 min-w-[100px] break-words">{t("thMon")}</th>
                        <th className="px-4 py-4 font-bold text-slate-600 min-w-[100px] break-words">{t("thTue")}</th>
                        <th className="px-4 py-4 font-bold text-slate-600 min-w-[100px] break-words">{t("thWed")}</th>
                        <th className="px-4 py-4 font-bold text-slate-600 min-w-[100px] break-words">{t("thThu")}</th>
                        <th className="px-4 py-4 font-bold text-slate-600 min-w-[100px] break-words">{t("thFri")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      <tr className="hover:bg-blue-50/30 transition-colors">
                        <td className="px-4 py-5 bg-slate-50/50 border-r border-gray-50">
                          <span className="block font-bold text-slate-900 break-words">{t("tdAm")}</span>
                          <span className="text-[11px] text-gray-400 break-words">{t("tdAmTime")}</span>
                        </td>
                        <td className="px-4 py-5 text-gray-600 leading-relaxed break-words">{t("am1")}</td>
                        <td className="px-4 py-5"><div className="bg-blue-50 text-blue-600 font-bold py-2 px-1 rounded-xl shadow-sm border border-blue-100/50 break-words">{t("am2")}</div></td>
                        <td className="px-4 py-5"><div className="bg-blue-50 text-blue-600 font-bold py-2 px-1 rounded-xl shadow-sm border border-blue-100/50 break-words">{t("am3")}</div></td>
                        <td className="px-4 py-5"><div className="bg-blue-50 text-blue-600 font-bold py-2 px-1 rounded-xl shadow-sm border border-blue-100/50 break-words">{t("am4")}</div></td>
                        <td className="px-4 py-5"><div className="bg-blue-50 text-blue-600 font-bold py-2 px-1 rounded-xl shadow-sm border border-blue-100/50 break-words">{t("am5")}</div></td>
                      </tr>
                      <tr className="hover:bg-blue-50/30 transition-colors">
                        <td className="px-4 py-5 bg-slate-50/50 border-r border-gray-50">
                          <span className="block font-bold text-slate-900 break-words">{t("tdPm")}</span>
                          <span className="text-[11px] text-gray-400 break-words">{t("tdPmTime")}</span>
                        </td>
                        <td className="px-4 py-5 text-gray-600 leading-relaxed break-words">{t("pm1")}</td>
                        <td className="px-4 py-5 text-gray-600 leading-relaxed break-words">{t("pm2")}</td>
                        <td className="px-4 py-5 text-gray-600 leading-relaxed break-words">{t("pm3")}</td>
                        <td className="px-4 py-5 text-gray-600 leading-relaxed break-words">{t("pm4")}</td>
                        <td className="px-4 py-5 text-gray-600 leading-relaxed break-words">{t("pm5")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3 flex items-start break-words">
                <svg className="w-3 h-3 mr-1 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                <span className="flex-1">{t("tableNotice")}</span>
              </p>
            </div>
          </div>
        </section>

        {/* 3. 대학 탐방, 문화 체험 & 맞춤형 특화 프로그램 */}
        <section>
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight break-words">{t("sec2Title")}</h2>
            <p className="text-gray-500 font-light text-lg mt-3 break-words">{t("sec2Sub")}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(300px,auto)]">
            
            <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 break-words">{t("prog1Title")}</h3>
              <p className="text-gray-500 font-light mb-8 break-words leading-relaxed flex-grow">
                {t("prog1Desc")}
              </p>
              <div className="space-y-3 pt-6 border-t border-gray-100 shrink-0">
                <div className="flex items-center text-sm font-medium text-slate-700 break-words">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mr-3 shrink-0"><svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                  {t("prog1List1")}
                </div>
                <div className="flex items-center text-sm font-medium text-slate-700 break-words">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mr-3 shrink-0"><svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                  {t("prog1List2")}
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] group hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 -z-10"></div>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl flex items-center justify-center mb-8 shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white break-words">{t("prog2Title")}</h3>
              <p className="text-slate-400 font-light mb-8 break-words leading-relaxed flex-grow">
                {t("prog2Desc")}
              </p>
              <div className="space-y-3 pt-6 border-t border-slate-700/50 shrink-0">
                <div className="flex items-center text-sm font-medium text-slate-300 break-words">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 shrink-0"><svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                  {t("prog2List1")}
                </div>
                <div className="flex items-center text-sm font-medium text-slate-300 break-words">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 shrink-0"><svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                  {t("prog2List2")}
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border border-blue-100 p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] group hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-400 rounded-full blur-[100px] opacity-20 -z-10 group-hover:opacity-30 transition-opacity"></div>
              
              <div className="md:w-1/2 w-full">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-blue-600/20 shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 tracking-tight break-words">{t("prog3Title")}</h3>
                <p className="text-gray-600 font-light break-words leading-relaxed text-lg">
                  {t("prog3Desc")}
                </p>
              </div>

              <div className="md:w-1/2 w-full space-y-4">
                <div className="bg-white/80 backdrop-blur-sm border border-white p-5 rounded-2xl flex items-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl mr-4 shrink-0">🏢</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 break-words">{t("prog3Item1Title")}</h4>
                    <p className="text-sm text-gray-500 mt-1 break-words">{t("prog3Item1Desc")}</p>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-white p-5 rounded-2xl flex items-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl mr-4 shrink-0">👩‍🍳</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 break-words">{t("prog3Item2Title")}</h4>
                    <p className="text-sm text-gray-500 mt-1 break-words">{t("prog3Item2Desc")}</p>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-white p-5 rounded-2xl flex items-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl mr-4 shrink-0">🎤</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 break-words">{t("prog3Item3Title")}</h4>
                    <p className="text-sm text-gray-500 mt-1 break-words">{t("prog3Item3Desc")}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}