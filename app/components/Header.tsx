"use client";

import { useState, useTransition } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "../../navigation";
import Image from "next/image";

const PC_MODAL_COPY: Record<
  string,
  {
    title: string;
    desc: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
  }
> = {
  ko: {
    title: "문의하기",
    desc: "문의 내용과 메일주소를 남겨주시면 확인 후 연락드리겠습니다.",
    emailLabel: "메일주소",
    emailPlaceholder: "name@example.com",
    messageLabel: "문의 내용",
    messagePlaceholder: "문의하실 내용을 입력해주세요.",
    submit: "문의 남기기",
    success: "접수되었습니다. 남겨주신 메일주소로 연락드리겠습니다."
  },
  en: {
    title: "Contact Us",
    desc: "Leave your inquiry and email address, and we will contact you.",
    emailLabel: "Email Address",
    emailPlaceholder: "name@example.com",
    messageLabel: "Inquiry",
    messagePlaceholder: "Please enter your inquiry.",
    submit: "Send",
    success: "Received. We will contact you at the email address you left."
  },
  zh: {
    title: "联系我们",
    desc: "留下您的咨询内容和邮箱，我们会尽快与您联系。",
    emailLabel: "邮箱地址",
    emailPlaceholder: "name@example.com",
    messageLabel: "咨询内容",
    messagePlaceholder: "请输入您的咨询内容。",
    submit: "提交",
    success: "已收到，我们会通过您留下的邮箱与您联系。"
  },
  ja: {
    title: "お問い合わせ",
    desc: "お問い合わせ内容とメールアドレスを残していただければ、こちらからご連絡いたします。",
    emailLabel: "メールアドレス",
    emailPlaceholder: "name@example.com",
    messageLabel: "お問い合わせ内容",
    messagePlaceholder: "お問い合わせ内容をご入力ください。",
    submit: "送信する",
    success: "受け付けました。ご入力いただいたメールアドレスにご連絡いたします。"
  },
  fr: {
    title: "Contact",
    desc: "Laissez votre message et votre adresse e-mail, nous vous recontacterons.",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "name@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Saisissez votre demande.",
    submit: "Envoyer",
    success: "C'est noté. Nous vous contacterons à l'adresse e-mail indiquée."
  },
  vi: {
    title: "Liên hệ",
    desc: "Hãy để lại nội dung và địa chỉ email, chúng tôi sẽ liên hệ lại với bạn.",
    emailLabel: "Địa chỉ Email",
    emailPlaceholder: "name@example.com",
    messageLabel: "Nội dung liên hệ",
    messagePlaceholder: "Vui lòng nhập nội dung cần hỗ trợ.",
    submit: "Gửi",
    success: "Đã tiếp nhận. Chúng tôi sẽ liên hệ qua địa chỉ email bạn đã để lại."
  },
  mn: {
    title: "Холбоо барих",
    desc: "Асуулт болон и-мэйл хаягаа үлдээнэ үү, бид тантай эргэн холбогдох болно.",
    emailLabel: "И-мэйл хаяг",
    emailPlaceholder: "name@example.com",
    messageLabel: "Асуултын агуулга",
    messagePlaceholder: "Холбогдох агуулгаа бичнэ үү.",
    submit: "Илгээх",
    success: "Хүлээн авлаа. Үлдээсэн и-мэйл хаягаар тань холбогдох болно."
  }
};

function isMobileDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPcModalOpen, setIsPcModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const copy = PC_MODAL_COPY[locale] ?? PC_MODAL_COPY.en;

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

  const rawSubject = t.has("mailSubject") ? t("mailSubject") : "[SIGNAL.KOREA] Partnership Inquiry";
  const rawBody = t.has("mailBody")
    ? t("mailBody")
    : "■ Email:\n■ Inquiry:\n";
  const mailtoHref = `mailto:signalkorea82@gmail.com?subject=${encodeURIComponent(rawSubject)}&body=${encodeURIComponent(rawBody)}`;

  const triggerMobileMailto = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("signalkorea82@gmail.com").catch(() => {});
    }
    alert(
      "이메일 주소가 복사되었습니다! (Email address copied!)\n\n📍 signalkorea82@gmail.com\n\n메일 앱이 자동으로 열리지 않는 경우 복사된 주소로 메일을 보내주세요."
    );
    window.location.href = mailtoHref;
  };

  const handleContactAction = (e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) e.preventDefault();
    setIsMenuOpen(false);

    if (isMobileDevice()) {
      triggerMobileMailto();
    } else {
      setIsPcModalOpen(true);
    }
  };

  const handlePcSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(copy.success);
    setEmail("");
    setMessage("");
    setIsPcModalOpen(false);
  };

  return (
    <>
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
            
            <button 
              type="button"
              onClick={() => handleContactAction()}
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] cursor-pointer"
            >
              {t("contact")}
            </button>
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
                  <option key={lang.code} value={lang.code}>{lang.label}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>

            {/* 햄버거 메뉴 버튼 */}
            <button 
              type="button"
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
            
            <div className="pt-4 mt-2 border-t border-gray-100">
              <a 
                href={mailtoHref}
                onClick={handleContactAction} 
                className="block w-full text-center px-5 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md cursor-pointer"
              >
                {t("contact")}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* PC 간단 문의 팝업 (메일주소 + 문의 내용만 입력) */}
      {isPcModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-md shadow-2xl relative">
            <button
              type="button"
              onClick={() => setIsPcModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition bg-gray-50 hover:bg-gray-100 rounded-full p-2 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <h2 className="text-xl font-black text-slate-900 mb-2 pr-8">{copy.title}</h2>
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">{copy.desc}</p>

            <form onSubmit={handlePcSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">{copy.emailLabel}</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={copy.emailPlaceholder}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">{copy.messageLabel}</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={copy.messagePlaceholder}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold rounded-xl px-4 py-3 hover:bg-blue-700 transition-all shadow-md cursor-pointer"
              >
                {copy.submit}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}