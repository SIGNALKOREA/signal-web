"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  // 모바일 메뉴 열림/닫힘 상태 관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 이메일 자동 세팅을 위한 정보 구성
  const emailAddress = "signalkorea82@gmail.com";
  const emailSubject = encodeURIComponent("[SIGNAL.KOREA] 파트너십 및 프로그램 문의");
  const emailBody = encodeURIComponent(`안녕하세요, SIGNAL.KOREA입니다.
아래 내용을 간단히 남겨주시면 확인 후 신속하게 회신드리겠습니다.

1. 기관(학교)명 : 
2. 담당자 성함 및 직책 : 
3. 회신받으실 연락처 : 
4. 관심 프로그램 (예: 단기 연수, 학위 진학, 맞춤형 투어 등) : 
5. 기타 문의 및 요청 사항 : 

감사합니다.`);

  // 스마트폰에 설치된 메일 앱(삼성메일, 애플메일, 지메일 앱 등)을 로그인 없이 즉시 여는 글로벌 표준 방식
  const mailtoLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* 1. 로고 (PC & 모바일 공통) */}
        <Link href="/" className="cursor-pointer flex items-center shrink-0">
          <img 
            src="/logo.png" 
            alt="SIGNAL.KOREA" 
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>
        
        {/* 2. 데스크탑용 네비게이션 (PC에서만 보임, 모바일에서 숨김) */}
        <nav className="hidden md:flex space-x-8 font-bold text-[15px] text-slate-700">
          <Link href="/about" className="hover:text-blue-600 transition-colors">회사 소개</Link>
          <Link href="/business" className="hover:text-blue-600 transition-colors">사업 영역</Link>
          <Link href="/program" className="hover:text-blue-600 transition-colors">교육 프로그램</Link>
          <Link href="/consulting" className="hover:text-blue-600 transition-colors">유학 컨설팅</Link>
        </nav>

        {/* 3. 데스크탑용 파트너십 문의 버튼 (PC에서만 보임) */}
        <div className="hidden md:flex items-center">
          <a 
            href={mailtoLink}
            className="text-sm font-bold px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-md"
          >
            파트너십 문의
          </a>
        </div>

        {/* 4. 모바일용 햄버거 메뉴 버튼 (모바일에서만 보임, PC에서 숨김) */}
        <button 
          className="md:hidden space-y-1.5 p-2 cursor-pointer relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="메뉴 열기"
        >
          <div className={`w-6 h-0.5 bg-slate-800 rounded transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-slate-800 rounded transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-slate-800 rounded transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </button>
      </div>

      {/* 5. 모바일 드롭다운 메뉴 영역 (햄버거 버튼 클릭 시 펼쳐짐) */}
      <div 
        className={`md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col space-y-6">
          <Link href="/about" className="text-slate-800 font-bold text-lg" onClick={() => setIsMenuOpen(false)}>회사 소개</Link>
          <Link href="/business" className="text-slate-800 font-bold text-lg" onClick={() => setIsMenuOpen(false)}>사업 영역</Link>
          <Link href="/program" className="text-slate-800 font-bold text-lg" onClick={() => setIsMenuOpen(false)}>교육 프로그램</Link>
          <Link href="/consulting" className="text-slate-800 font-bold text-lg" onClick={() => setIsMenuOpen(false)}>유학 컨설팅</Link>
          
          <div className="pt-2 border-t border-gray-100">
            <a 
              href={mailtoLink}
              onClick={() => setIsMenuOpen(false)}
              className="flex justify-center items-center w-full text-base font-bold py-3.5 bg-blue-600 text-white rounded-xl shadow-md active:bg-blue-700"
            >
              파트너십 문의하기
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}