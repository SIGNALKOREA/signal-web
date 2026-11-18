"use client";

import { useState, useTransition } from "react"; 
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "../../navigation";
import Image from "next/image";

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  const languages = [
    { code: "ko", label: "한국어" },
    { code: "en", label: "English" },
    { code: "zh", label: "中文" },
    { code: "vi", label: "Tiếng Việt" },
    { code: "mn", label: "Монгол" },
    { code: "ja", label: "日本語" },
    { code: "fr", label: "Français" }
  ];

  // 💡 다국어 메일 제목과 본문을 인코딩하여 mailto 링크 자동 생성
  const mailSubject = encodeURIComponent(t("mailSubject"));
  const mailBody = encodeURIComponent(t("mailBody"));
  const mailtoHref = `mailto:signalkorea82@gmail.com?subject=${mailSubject}&body=${mailBody}`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* 1. 로고 영역 */}
        <Link href="/" className="hover:opacity-80 transition flex items-center">
          <Image 
            src="/logo.png" 
            alt="SIGNAL.KOREA Logo" 
            width={160} 
            height={40}
            className="w-auto h-8 md:h-10" 
            priority
          />
        </Link>

        {/* 2. 메인 네비게이션 (PC 화면) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="font-medium text-slate-700 hover:text-blue-600 transition">{t("about")}</Link>
          <Link href="/business" className="font-medium text-slate-700 hover:text-blue-600 transition">{t("business")}</Link>
          <Link href="/program" className="font-medium text-slate-700 hover:text-blue-600 transition">{t("program")}</Link>
          <Link href="/consulting" className="font-medium text-slate-700 hover:text-blue-600 transition">{t("consulting")}</Link>
          
          {/* 💡 복잡한 페이지 이동 없이, 클릭 시 바로 메일이 열리는 원래 기능으로 복구! */}
          <a href={mailtoHref} className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-[0_4px_14px_0_rgb(37,99,235,0.39)]">
            {t("contact")}
          </a>
        </nav>

        {/* 3. 우측 기능 영역 */}
        <div className="flex items-center space-x-3 md:space-x-4">
          
          {/* 다국어 선택기 */}
          <div className="relative">
            <select
              defaultValue={locale}
              onChange={changeLanguage}
              disabled={isPending}
              className="appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs md:text-sm font-medium rounded-full px-3 md:px-4 py-2 pr-8 md:pr-10 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer shadow-sm disabled:opacity-50"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          {/* 햄버거 메뉴 버튼 */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
          
        </div>
      </div>

      {/* 모바일 메뉴 패널 */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col space-y-2">
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="font-medium text-slate-700 hover:text-blue-600 transition block py-2.5">{t("about")}</Link>
          <Link href="/business" onClick={() => setIsMenuOpen(false)} className="font-medium text-slate-700 hover:text-blue-600 transition block py-2.5">{t("business")}</Link>
          <Link href="/program" onClick={() => setIsMenuOpen(false)} className="font-medium text-slate-700 hover:text-blue-600 transition block py-2.5">{t("program")}</Link>
          <Link href="/consulting" onClick={() => setIsMenuOpen(false)} className="font-medium text-slate-700 hover:text-blue-600 transition block py-2.5">{t("consulting")}</Link>
          
          {/* 모바일에서도 동일하게 메일 바로 열기 적용 */}
          <div className="pt-4 mt-2 border-t border-gray-100">
            <a href={mailtoHref} onClick={() => setIsMenuOpen(false)} className="block w-full text-center px-5 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md">
              {t("contact")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}