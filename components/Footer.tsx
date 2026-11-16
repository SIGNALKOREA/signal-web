import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 bg-slate-900 text-slate-300 text-sm">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-black text-2xl text-white mb-4 tracking-tighter">SIGNAL.KOREA</div>
          <p className="font-light text-slate-400 break-keep max-w-sm mb-6">
            한국의 언어와 문화를 세계에 알리고, 글로벌 인재들의 성공적인 한국 유학을 돕는 교육 컨설팅 전문 기업입니다.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact Us</h4>
          <ul className="space-y-2 font-light text-slate-400">
            <li>대표: 허신영 (SINYOUNG HER)</li>
            <li>이메일: signalkorea82@gmail.com</li>
            <li>사업자등록번호: 649-14-01136</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Business</h4>
          <ul className="space-y-2 font-light text-slate-400">
            <li>유학원 컨설팅</li>
            <li>한국어 단기 연수</li>
            <li>어학당 및 학부 진학</li>
            <li>에듀테크 (TOPIK 앱 개발)</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex justify-between items-center">
        <span>© 2024 SIGNAL.KOREA. All rights reserved.</span>
        <div className="space-x-4">
          <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}