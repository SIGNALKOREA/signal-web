export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 text-slate-800">
      <h1 className="text-3xl font-black mb-10 tracking-tight">개인정보처리방침 (Privacy Policy)</h1>
      
      <div className="space-y-8 text-sm leading-relaxed font-medium text-slate-600">
        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-3">1. 개인정보의 처리 목적</h2>
          <p>SIGNAL.KOREA(이하 '회사')는 파트너십 제안, 유학 컨설팅 및 교육 프로그램 문의에 대한 신속하고 정확한 답변과 비즈니스 협의를 목적으로 최소한의 개인정보를 처리합니다.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-3">2. 처리하는 개인정보 항목</h2>
          <p>회사는 웹사이트를 통한 별도의 회원가입 절차를 두지 않으며, 사용자가 자발적으로 이메일(mailto)을 통해 전송하는 아래의 정보만을 수집합니다.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>필수항목: 소속 기관명, 담당자 성함, 회신용 연락처(이메일 등), 문의 내용</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-3">3. 개인정보의 처리 및 보유 기간</h2>
          <p>사용자의 문의 및 협의 완료 시점, 또는 목적 달성 시점으로부터 3년간 보관 후 지체 없이 파기합니다. 단, 관계 법령에 의해 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-3">4. 개인정보의 파기절차 및 방법</h2>
          <p>회사는 원칙적으로 개인정보 처리 목적이 달성된 경우에는 지체 없이 해당 개인정보를 파기합니다. 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-3">5. 개인정보 보호책임자</h2>
          <p>개인정보 처리와 관련한 사용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 보호책임자를 지정하고 있습니다.</p>
          <ul className="list-none mt-2 space-y-1 bg-slate-50 p-4 rounded-lg">
            <li><strong>이름:</strong> 허신영</li>
            <li><strong>주소:</strong> 서울특별시 관악구 양녕로6길</li>
            <li><strong>이메일:</strong> signalkorea82@gmail.com</li>
          </ul>
        </section>
        
        <p className="pt-8 text-xs text-slate-400">본 방침은 2026년 11월부터 시행됩니다.</p>
      </div>
    </main>
  );
}