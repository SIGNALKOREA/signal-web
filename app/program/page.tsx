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
            <span className="block">글로벌 파트너를 위한</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 mt-2 md:mt-4">
              최상위 교육 프로그램
            </span>
          </h1>
          <p className="text-slate-300 font-light text-lg md:text-xl max-w-2xl mx-auto break-keep leading-relaxed">
            기관의 니즈에 맞춘 100% 맞춤형 단기 연수부터 대학 진학 연계 정규 과정까지, 체계적인 K-에듀 커리큘럼을 제공합니다.
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
                    <h4 className="font-bold text-slate-900">맞춤형 커리큘럼</h4>
                    <p className="text-sm text-gray-500 font-light mt-1">파트너 기관의 예산과 목적에 완벽히 부합하는 일정 조율</p>
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
            
            {/* 오른쪽: 수정된 하이엔드 테이블 UI */}
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
                        {/* <td> 태그가 아닌 그 안의 <div>를 둥글게 만들어 테이블 레이아웃을 보호합니다. */}
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

        {/* 3. 정규 과정 (Regular Course) */}
        <section>
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">대학 진학 연계 정규 과정</h2>
            <p className="text-gray-500 font-light text-lg mt-3">10주 ~ 40주 장기 플랜 / 연 4학기제 운영</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 정규 1: 어학당 다이렉트 */}
            <div className="bg-white border border-gray-100 p-10 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 cursor-default">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <span className="font-black text-2xl">01</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">어학당 직통 연계반</h3>
              <p className="text-gray-500 font-light mb-8 break-keep leading-relaxed h-20">
                제휴를 맺은 국내 주요 4년제 대학교 국제교육원(어학당)으로 서류 심사부터 비자 발급, 입학까지 다이렉트로 안전하게 진행되는 패스트트랙 프로그램입니다.
              </p>
              
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <div className="flex items-center text-sm font-medium text-slate-700">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mr-3"><svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                  1급(초급) ~ 6급(최고급) 수준별 완벽 분반
                </div>
                <div className="flex items-center text-sm font-medium text-slate-700">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mr-3"><svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                  출석률 및 학업 성취도 미달 학생 밀착 관리 시스템
                </div>
              </div>
            </div>
            
            {/* 정규 2: 학부 진학 */}
            <div className="bg-slate-900 border border-slate-800 p-10 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] group hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-500 cursor-default relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 -z-10"></div>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl flex items-center justify-center mb-8">
                <span className="font-black text-2xl">02</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">학부 진학 & TOPIK 집중반</h3>
              <p className="text-slate-400 font-light mb-8 break-keep leading-relaxed h-20">
                한국 대학 학부 및 대학원 입학을 목표로 하는 학생을 위한 특수 목적 과정입니다. 입학 필수 조건인 TOPIK 단기 고득점 획득에 모든 인프라를 집중합니다.
              </p>
              
              <div className="space-y-3 pt-6 border-t border-slate-700/50">
                <div className="flex items-center text-sm font-medium text-slate-300">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3"><svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                  시그널 자체 TOPIK 모바일 앱 연동 기출 훈련
                </div>
                <div className="flex items-center text-sm font-medium text-slate-300">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3"><svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                  진학용 자기소개서, 학업계획서 및 모의 면접 지도
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

     {/* 4. 초대형 맞춤 기획 CTA */}
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <div className="bg-white rounded-[2.5rem] p-12 md:p-16 border border-gray-200 flex flex-col md:flex-row items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-70 -z-10"></div>
            
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">기관 맞춤형 프로그램 기획이 필요하신가요?</h3>
              
              {/* 수정됨: '대학 어학당 실무 경력을 갖춘' -> '다년간의 대학 어학당 실무 경험을 갖춘' 으로 통일성 부여 */}
              <p className="text-gray-500 font-light text-lg break-keep leading-relaxed">
                참여 인원, 원하는 기간, 가용 예산을 남겨주세요. <br className="hidden md:block"/> 다년간의 대학 어학당 실무 경험을 갖춘 시그널의 교육 전문가가 최적의 커리큘럼안을 24시간 내에 제안해 드립니다.
              </p>
            </div>
            <button className="w-full md:w-auto px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl text-lg hover:bg-slate-800 hover:-translate-y-1 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] whitespace-nowrap">
              프로그램 제안서 요청
            </button>
          </div>
        </section>

    </div>
  );
}