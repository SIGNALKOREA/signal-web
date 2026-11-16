"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  // 모바일 메뉴 열림/닫힘 상태 관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* 로고 */}
        <Link href="/" className="font-black text-2xl tracking-tighter cursor-pointer">
          SIGNAL.KOREA
        </Link>
        
        {/* 데스크탑용 메뉴 (창이 넓을 때만 보임) */}
        <nav className="hidden md:flex space-x-8 font-medium text-sm text-gray-700">
          <Link href="/about" className="hover:text-blue-600 transition">회사 소개</Link>
          <Link href="/business" className="hover:text-blue-600 transition">사업 영역</Link>
          <Link href="/program" className="hover:text-blue-600 transition">교육 프로그램</Link>
          <Link href="/consulting" className="hover:text-blue-600 transition">유학 컨설팅</Link>
        </nav>

        {/* 데스크탑용 버튼 */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-sm font-semibold px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition shadow-sm">
            제휴 및 협약 문의
          </button>
        </div>

        {/* 모바일용 햄버거 버튼 (창이 좁을 때만 보임) */}
        <button 
          className="md:hidden space-y-1.5 p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-black rounded"></div>
          <div className="w-6 h-0.5 bg-black rounded"></div>
          <div className="w-6 h-0.5 bg-black rounded"></div>
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 영역 (햄버거 버튼 클릭 시 나타남) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col space-y-5 shadow-lg absolute w-full left-0">
          <Link href="/about" className="text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>회사 소개</Link>
          <Link href="/business" className="text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>사업 영역</Link>
          <Link href="/program" className="text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>교육 프로그램</Link>
          <Link href="/consulting" className="text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>유학 컨설팅</Link>
          <button className="w-full text-sm font-semibold px-5 py-3 bg-blue-600 text-white rounded-md mt-2">
            제휴 및 협약 문의
          </button>
        </div>
      )}
    </header>
  );
}