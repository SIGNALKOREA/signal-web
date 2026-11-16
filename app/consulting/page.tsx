export default function ConsultingPage() {
  return (
    <div className="bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-200 pb-32">
      
      {/* 1. 프리미엄 서브 타이틀 영역 */}
      <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden flex justify-center text-center px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-black -z-10"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
        
        <div className="max-w-4xl relative z-10">
          <span className="text-blue-400 font-bold tracking-widest text-xs md:text-sm uppercase mb-4 block">
            End-to-End Consulting
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-[1.3] md:leading-[1.1] mb-6 drop-shadow-lg break-keep">
            <span className="block">파트너 기관을 위한</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 mt-2 md:mt-4">
              올인원 유학 솔루션
            </span>
          </h1>
          <p className="text-slate-300 font-light text-lg md:text-xl max-w-2xl mx-auto break-keep leading-relaxed">
            복잡한 비자 수속부터 입국 후 현장 밀착 케어까지, 파트너 기관은 학생 모집에만 집중하십시오. 나머지는 시그널이 완벽하게 책임집니다.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 -mt-10 relative z-20 space-y-20">
        
        {/* 2. 핵심 경쟁력 (Bento Box - 3열) */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">왜 SIGNAL.KOREA 인가?</h2>
            {/* 수정됨: '대학 국제처 실무 경험' -> '다년간의 대학 어학당 및 국제처 현장 실무 경험' */}
            <p className="text-gray-500 font-light text-lg max-w-2xl mx-auto break-keep">
              다년간의 대학 어학당 및 국제처 현장 실무 경험을 바탕으로 구축한 압도적인 3대 경쟁력
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 카드 1 */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">높은 비자 발급률</h3>
              <p className="text-gray-500 font-light leading-relaxed break-keep">
                국가별 꼼꼼한 사전 서류 검수 및 대학 국제처와의 긴밀한 소통 라인을 통해 까다로운 D-4, D-2 사증 리젝률을 최소화합니다.
              </p>
            </div>
            
            {/* 카드 2 */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">우수 대학 네트워크</h3>
              <p className="text-gray-500 font-light leading-relaxed break-keep">
                서울 및 수도권 주요 4년제 대학과의 직접적인 업무 협약을 통해 가장 신속하고 정확한 표준입학허가서 발행을 보장합니다.
              </p>
            </div>
            
            {/* 카드 3 */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">입국 후 현장 밀착 케어</h3>
              <p className="text-gray-500 font-light leading-relaxed break-keep">
                공항 픽업, 기숙사 입소, 외국인 등록증 발급, 통장 개설 등 유학생의 초기 정착에 필요한 A to Z를 현장에서 직접 동행 지원합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 3. B2B 파트너십 수속 프로세스 (Timeline UI) */}
        <section className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative overflow-hidden">
          {/* 장식용 다크 모드 배경 효과 */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-20 -z-10"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">표준 수속 프로세스</h2>
            <p className="text-slate-400 font-light text-lg">파트너 기관과 시그널이 함께 그리는 체계적인 학생 송출 로드맵</p>
          </div>

          <div className="relative z-10">
            {/* 데스크탑 프로세스 연결선 */}
            <div className="hidden md:block absolute top-[4.5rem] left-10 right-10 h-0.5 bg-slate-700/50"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative group">
                <div className="w-16 h-16 bg-slate-800 border-4 border-slate-900 text-blue-400 rounded-2xl flex items-center justify-center font-black text-2xl mx-auto mb-6 relative z-10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg">1</div>
                <div className="text-center">
                  <h4 className="font-bold text-white text-xl mb-3">파트너십 체결</h4>
                  <p className="text-sm text-slate-400 font-light break-keep leading-relaxed">MOU 및 에이전시 계약 체결<br/>모집 요강 및 대학 리스트 공유</p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="relative group">
                <div className="w-16 h-16 bg-slate-800 border-4 border-slate-900 text-blue-400 rounded-2xl flex items-center justify-center font-black text-2xl mx-auto mb-6 relative z-10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg">2</div>
                <div className="text-center">
                  <h4 className="font-bold text-white text-xl mb-3">학생 모집 & 서류</h4>
                  <p className="text-sm text-slate-400 font-light break-keep leading-relaxed">현지 기관 학생 상담 및 모집<br/>시그널 서류 검수 및 공증 지원</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="relative group">
                <div className="w-16 h-16 bg-slate-800 border-4 border-slate-900 text-blue-400 rounded-2xl flex items-center justify-center font-black text-2xl mx-auto mb-6 relative z-10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg">3</div>
                <div className="text-center">
                  <h4 className="font-bold text-white text-xl mb-3">입학 허가 & 비자</h4>
                  <p className="text-sm text-slate-400 font-light break-keep leading-relaxed">대학 지원 및 인보이스 발행<br/>표준입학허가서 수령 및 비자 신청</p>
                </div>
              </div>
              {/* Step 4 */}
              <div className="relative group">
                <div className="w-16 h-16 bg-slate-800 border-4 border-slate-900 text-blue-400 rounded-2xl flex items-center justify-center font-black text-2xl mx-auto mb-6 relative z-10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg">4</div>
                <div className="text-center">
                  <h4 className="font-bold text-white text-xl mb-3">입국 & 사후 관리</h4>
                  <p className="text-sm text-slate-400 font-light break-keep leading-relaxed">입국 전 OT 및 공항 픽업 동행<br/>대학 생활 모니터링 및 진학 상담</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 현지 정착 케어 서비스 (Settlement Care Grid) */}
        <section className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">현지 정착 케어 서비스 (Settlement Care)</h2>
            <p className="text-gray-500 font-light text-lg">가족의 마음으로 동행하는 시그널만의 프리미엄 인하우스 서비스입니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="flex items-start group">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mr-5 shrink-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">공항 픽업 및 숙소 입소 안내</h4>
                <p className="font-light text-gray-500 leading-relaxed break-keep">인천공항 도착 시 전용 차량 픽업을 진행하며, 대학 기숙사 및 외부 원룸 입소 시 현장 통솔자와 동행하여 안전을 확보합니다.</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mr-5 shrink-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">외국인 등록증 및 비자 연장</h4>
                <p className="font-light text-gray-500 leading-relaxed break-keep">출입국관리사무소 방문 예약부터 필요 서류 준비 대행, 그리고 현장 동행까지 번거로운 관공서 업무를 지원합니다.</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mr-5 shrink-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">금융 및 생활 인프라 지원</h4>
                <p className="font-light text-gray-500 leading-relaxed break-keep">초기 생활에 필수적인 한국 은행 계좌 개설, 체크카드 발급, 선불/후불 스마트폰 유심 개통을 완벽하게 세팅해 줍니다.</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mr-5 shrink-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">응급 상황 및 의료 지원</h4>
                <p className="font-light text-gray-500 leading-relaxed break-keep">갑작스러운 질병이나 상해 발생 시 인근 병원에 동행하여 통역을 돕고, 필수 유학생 보험 청구 과정을 지원합니다.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 5. 초대형 파트너십 CTA 배너 */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 rounded-[2.5rem] p-12 md:p-16 text-center text-white shadow-[0_20px_40px_rgb(37,99,235,0.25)] relative overflow-hidden">
          {/* 하이엔드 빛 번짐 이펙트 */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">안정적인 유학생 송출 파이프라인을 원하시나요?</h2>
            <p className="text-blue-100 font-light text-lg md:text-xl mb-10 max-w-2xl mx-auto break-keep leading-relaxed">
              시그널과의 업무 협약을 통해 유학생 이탈률을 낮추고 현지 비즈니스 수익을 극대화하십시오. 파트너 등록 절차 및 에이전트 수수료 정책을 투명하게 안내해 드립니다.
            </p>
            <button className="px-10 py-5 bg-white text-blue-700 font-bold rounded-2xl text-lg hover:bg-gray-50 hover:-translate-y-1 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
              에이전트 제휴 안내서 요청
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}