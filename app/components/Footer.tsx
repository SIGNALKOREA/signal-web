import { Link } from "../../navigation"; 
import { useTranslations } from "next-intl"; 

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="py-16 bg-slate-900 text-slate-300 text-sm overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-black text-2xl text-white mb-4 tracking-tighter">SIGNAL.KOREA</div>
          {/* 💡 break-keep을 지우고 break-words를 적용해 다국어 문장이 예쁘게 줄바꿈되도록 수정 */}
          <p className="font-light text-slate-400 break-words max-w-sm mb-6 leading-relaxed">
            {t("description")}
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 break-words">{t("contactTitle")}</h4>
          <ul className="space-y-2 font-light text-slate-400">
            <li className="break-words">{t("ceo")}</li>
            <li className="break-words">{t("bizNum")}</li>
            <li className="break-words">{t("address")}</li>
            <li className="break-words">
              {t("email")} <a href="mailto:signalkorea82@gmail.com" className="hover:text-white transition break-all">signalkorea82@gmail.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 break-words">{t("businessTitle")}</h4>
          <ul className="space-y-2 font-light text-slate-400">
            <li><Link href="/business" className="hover:text-white transition break-words inline-block">{t("biz1")}</Link></li>
            <li><Link href="/program" className="hover:text-white transition break-words inline-block">{t("biz2")}</Link></li>
            <li><Link href="/program" className="hover:text-white transition break-words inline-block">{t("biz3")}</Link></li>
            <li><Link href="/business" className="hover:text-white transition break-words inline-block">{t("biz4")}</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-center md:text-left break-words">© 2026 SIGNAL.KOREA. All rights reserved.</span>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          <Link href="/privacy" className="hover:text-white transition break-words">{t("privacy")}</Link>
          <Link href="/terms" className="hover:text-white transition break-words">{t("terms")}</Link>
        </div>
      </div>
    </footer>
  );
}