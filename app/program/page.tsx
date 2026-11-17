export default function ProgramPage() {
  return (
    <div className="bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-200 pb-32">
      
      {/* 1. 프리미엄 서브 타이틀 영역 */}
      <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden flex justify-center text-center px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-black -z-10"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent"></div>
        
        <div className="max-w-4xl relative z-10">
          <span className="text-indigo-400 font-bold tracking-widest text-xs md:text-sm uppercase mb-4 block">
            Premium Curriculum
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-[1.3] md:leading-[1.1] mb-6 drop-shadow-lg break-keep">
            {/* <span className="block">글로벌 파트너를 위한</span> */}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 mt-2 md:mt-4">
              최상위 교육 프로그램
            </span>
          </h1>
          <p className="text-slate-300 font-light text-lg md:text-xl max-w-2xl mx-auto break-keep leading-relaxed">
            기관의 니즈에 완벽히 부합하는 100% 수요 맞춤형 단기 연수 및 프리미엄 K-에듀 문화 캠프를 기획하고 운영합니다.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 -mt-10 relative z-20 space-y-16">
        
        {/* 2. 단기 연수 프로그램 (Short-term Course) */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-gray-100 pb-8">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">맞춤형 단기 연수 캠프</h2>
              <p className="text-gray-500 font-light text-lg mt-3">해외 방학 기간 활용 (1주 ~ 4주 과정)</p>
            </div>
            <div className="mt-6 md:mt-0 bg-slate-50 px-5 py-3 rounded-2xl border border-gray-100">
              <span className="flex items-center text-sm font-bold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-3 animate-pulse"></span>
                100% 기관 맞춤형 설계 가능
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* 왼쪽 설명 영역 */}
            <div className="lg:col-span-4 space-y-8">
              <p className="text-slate-600 font-light break-keep leading-relaxed text-lg">
                단순한 언어 학습을 넘어, 오전에는 실용 회화 중심의 한국어 수업을 진행하고 오후에는 명문대 탐방 및 문화 체험을 통해 한국을 입체적으로 이해하는 프리미엄 연수입니다.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-4 shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">수요 맞춤형 기획</h4>
                    <p className="text-sm text-gray-500 font-light mt-1">파트너 기관의 예산, 기간, 목표에 완벽히 부합하는 유연한 일정 조율</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-4 shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">검증된 인프라</h4>
                    <p className="text-sm text-gray-500 font-light mt-1">기관의 예산과 요구에 맞춘 최적의 숙소 수배 및 현장 통솔 전문가 배치</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 오른쪽: 하이엔드 테이블 UI */}
            <div className="lg:col-span-8">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                표준 2주 과정 예시 (Sample Schedule)
              </h4>
              
              <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-center">
                    <thead className="bg-slate-50 border-b border-gray-100">
                      <tr>
                        <th className="px-4 py-4 font-bold text-slate-600 min-w-[80px]">구분</th>
                        <th className="px-4 py-4 font-bold text-slate-600 min-w-[100px]">월</th>
                        <th className="px-4 py-4 font-bold text-slate-600 min-w-[100px]">화</th>
                        <th className="px-4 py-4 font-bold text-slate-600 min-w-[100px]">수</th>
                        <th className="px-4 py-4 font-bold text-slate-600 min-w-[100px]">목</th>
                        <th className="px-4 py-4 font-bold text-slate-600 min-w-[100px]">금</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {/* 오전 */}
                      <tr className="hover:bg-blue-50/30 transition-colors">
                        <td className="px-4 py-5 bg-slate-50/50 border-r border-gray-50">
                          <span className="block font-bold text-slate-900">오전</span>
                          <span className="text-[11px] text-gray-400">09:00-13:00</span>
                        </td>
                        <td className="px-4 py-5 text-gray-600 leading-relaxed">오리엔테이션<br/>레벨 테스트</td>
                        <td className="px-4 py-5"><div className="bg-blue-50 text-blue-600 font-bold py-2 px-1 rounded-xl shadow-sm border border-blue-100/50">한국어 회화 1</div></td>
                        <td className="px-4 py-5"><div className="bg-blue-50 text-blue-600 font-bold py-2 px-1 rounded-xl shadow-sm border border-blue-100/50">한국어 회화 2</div></td>
                        <td className="px-4 py-5"><div className="bg-blue-50 text-blue-600 font-bold py-2 px-1 rounded-xl shadow-sm border border-blue-100/50">한국어 회화 3</div></td>
                        <td className="px-4 py-5"><div className="bg-blue-50 text-blue-600 font-bold py-2 px-1 rounded-xl shadow-sm border border-blue-100/50">한국어 회화 4</div></td>
                      </tr>
                      {/* 오후 */}
                      <tr className="hover:bg-blue-50/30 transition-colors">
                        <td className="px-4 py-5 bg-slate-50/50 border-r border-gray-50">
                          <span className="block font-bold text-slate-900">오후</span>
                          <span className="text-[11px] text-gray-400">14:00-18:00</span>
                        </td>
                        <td className="px-4 py-5 text-gray-600 leading-relaxed">주요 대학<br/>캠퍼스 투어</td>
                        <td className="px-4 py-5 text-gray-600 leading-relaxed">K-POP 댄스<br/>원데이 클래스</td>
                        <td className="px-4 py-5 text-gray-600 leading-relaxed">경복궁 및<br/>한복 체험</td>
                        <td className="px-4 py-5 text-gray-600 leading-relaxed">한국 요리<br/>만들기</td>
                        <td className="px-4 py-5 text-gray-600 leading-relaxed">조별 자유 미션<br/>(명동/홍대)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                위 일정은 이해를 돕기 위한 샘플이며, 참여 기관의 목적에 따라 100% 변경 가능합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 3. 대학 탐방, 문화 체험 & 맞춤형 특화 프로그램 */}
        <section>
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">명문대 탐방 & 문화·특화 프로그램</h2>
            <p className="text-gray-500 font-light text-lg mt-3">단순 관광을 넘어선 인사이트 제공과 수요자 맞춤형 전문 투어 기획</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 프로그램 1: 캠퍼스 투어 */}
            <div className="bg-white border border-gray-100 p-10 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 cursor-default">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">명문대 캠퍼스 투어</h3>
              <p className="text-gray-500 font-light mb-8 break-keep leading-relaxed h-20">
                SKY 등 국내 주요 대학 캠퍼스를 직접 방문하여 선진화된 교육 시설을 탐방하고, 재학생 멘토링을 통해 실질적인 유학 생활 간접 체험을 제공합니다.
              </p>
              
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <div className="flex items-center text-sm font-medium text-slate-700">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mr-3"><svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                  주요 대학 어학당 및 시설 견학 코스 편성
                </div>
                <div className="flex items-center text-sm font-medium text-slate-700">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mr-3"><svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                  유학 동기 부여 및 학업 비전 설계 특강
                </div>
              </div>
            </div>
            
            {/* 프로그램 2: K-컬처 체험 */}
            <div className="bg-slate-900 border border-slate-800 p-10 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] group hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-500 cursor-default relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 -z-10"></div>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">프리미엄 K-Culture 트립</h3>
              <p className="text-slate-400 font-light mb-8 break-keep leading-relaxed h-20">
                경복궁, 한옥마을 등 전통문화 체험부터 K-POP 댄스 클래스, 유명 방송국 투어 등 트렌디한 한류 문화를 안전하고 깊이 있게 즐기는 스페셜 세션입니다.
              </p>
              
              <div className="space-y-3 pt-6 border-t border-slate-700/50">
                <div className="flex items-center text-sm font-medium text-slate-300">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3"><svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                  원하는 문화 테마(역사, 뷰티, 팝) 전면 반영 기획
                </div>
                <div className="flex items-center text-sm font-medium text-slate-300">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3"><svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                  전담 가이드 밀착 동행으로 100% 안전 보장
                </div>
              </div>
            </div>

            {/* 프로그램 3: 수요자 맞춤형 특화 프로그램 (추가된 영역) */}
            <div className="md:col-span-2 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border border-blue-100 p-10 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] group hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-400 rounded-full blur-[100px] opacity-20 -z-10 group-hover:opacity-30 transition-opacity"></div>
              
              <div className="md:w-1/2">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-blue-600/20">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 tracking-tight">수요자 맞춤형 특화 프로그램</h3>
                <p className="text-gray-600 font-light break-keep leading-relaxed text-lg">
                  참여 기관의 방문 목적과 연수생들의 세부 니즈에 맞춰 100% 커스터마이징되는 스페셜 트랙입니다. 단순한 견학을 넘어 목적에 부합하는 전문적인 교육 일정을 기획합니다.
                </p>
              </div>

              <div className="md:w-1/2 w-full space-y-4">
                <div className="bg-white/80 backdrop-blur-sm border border-white p-5 rounded-2xl flex items-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl mr-4 shrink-0">🏢</div>
                  <div>
                    <h4 className="font-bold text-slate-800">국내 주요 기업 및 산업 현장 탐방</h4>
                    <p className="text-sm text-gray-500 mt-1">IT, 자동차, 엔터테인먼트 등 희망 산업군 시찰</p>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-white p-5 rounded-2xl flex items-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl mr-4 shrink-0">👩‍🍳</div>
                  <div>
                    <h4 className="font-bold text-slate-800">한국 요리 (K-Food) 특화</h4>
                    <p className="text-sm text-gray-500 mt-1">전문 셰프 및 명인과 함께하는 쿠킹 클래스</p>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-white p-5 rounded-2xl flex items-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl mr-4 shrink-0">🎤</div>
                  <div>
                    <h4 className="font-bold text-slate-800">K-POP 보컬 & 댄스 특화</h4>
                    <p className="text-sm text-gray-500 mt-1">전문 스튜디오 연계 트레이닝 및 오디션 체험</p>
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