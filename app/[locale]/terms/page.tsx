export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 text-slate-800">
      <h1 className="text-3xl font-black mb-10 tracking-tight">이용약관 (Terms of Service)</h1>
      
      <div className="space-y-8 text-sm leading-relaxed font-medium text-slate-600">
        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-3">제1조 (목적)</h2>
          <p>본 약관은 SIGNAL.KOREA(이하 '회사')가 제공하는 웹사이트 정보 및 관련 B2B 교육/유학 컨설팅 서비스의 이용 조건과 절차, 회사와 사용자 간의 권리, 의무 및 책임 사항 등을 규정함을 목적으로 합니다.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-3">제2조 (서비스의 제공)</h2>
          <p>회사는 파트너 기관 및 글로벌 사용자를 대상으로 다음의 서비스를 제공합니다.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>기관 맞춤형 단기 연수 및 명문대 탐방 프로그램 정보 제공</li>
            <li>학위 진학 및 어학당 다이렉트 연계 컨설팅</li>
            <li>EdTech 웹 기반 TOPIK 솔루션 안내</li>
            <li>기타 관련 비즈니스 제휴 및 상담 지원</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-3">제3조 (저작권의 귀속 및 이용제한)</h2>
          <p>회사가 작성한 웹사이트 내의 모든 저작물(로고, 이미지, 텍스트, 디자인 등)에 대한 저작권 및 기타 지적재산권은 회사에 귀속됩니다. 사용자는 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-3">제4조 (책임 한계 및 면책)</h2>
          <p>본 웹사이트에서 제공되는 정보는 파트너십 구축 및 서비스 안내를 위한 참고용입니다. 실제 프로그램 진행 및 컨설팅 계약은 회사와 파트너 간의 별도 서면 계약을 통해 구체화되며, 웹사이트 상의 정보만으로 법적 보증이나 직접적인 책임을 부담하지 않습니다.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-3">제5조 (준거법 및 재판관할)</h2>
          <p>본 약관의 해석 및 회사와 사용자 간의 분쟁에 대해서는 대한민국 법률을 적용하며, 분쟁 발생 시 회사의 본점 소재지(서울특별시)를 관할하는 법원을 전속 관할 법원으로 합니다.</p>
        </section>
        
        <p className="pt-8 text-xs text-slate-400">본 약관은 2026년 11월부터 시행됩니다.</p>
      </div>
    </main>
  );
}