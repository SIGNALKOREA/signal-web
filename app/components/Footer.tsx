import { Link } from "../../navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="py-16 bg-slate-900 text-slate-300 text-sm overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-black text-2xl text-white mb-4 tracking-tighter">SIGNAL.KOREA</div>
          <p className="font-light text-slate-400 break-words max-w-sm mb-6 leading-relaxed">
            {t("description")}
          </p>

          {/* K-Quiz Live & Instagram 강조 배지 */}
          <div className="flex flex-wrap items-center gap-3">
            {/* K-Quiz Live 버튼 */}
            <a
              href="https://k-quiz-live-kdbp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-900/40 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-blue-100">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  LIVE · TOPIK & QUIZ
                </span>
                <span className="text-sm font-extrabold tracking-tight">K-Quiz Live</span>
              </div>
              <svg
                className="w-4 h-4 ml-1 text-white/80 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Instagram 버튼 */}
            <a
              href="https://www.instagram.com/signal.korea"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-pink-500/60 hover:bg-slate-800 shadow-lg hover:shadow-pink-900/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 flex items-center justify-center shrink-0 shadow-inner">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect width="18" height="18" x="3" y="3" rx="5" ry="5" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 group-hover:text-pink-300 transition-colors">
                  Instagram
                </span>
                <span className="text-sm font-bold text-white">@signal.korea</span>
              </div>
              <svg
                className="w-4 h-4 ml-1 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 break-words">{t("contactTitle")}</h4>
          <ul className="space-y-2 font-light text-slate-400">
            <li className="break-words">{t("ceo")}</li>
            <li className="break-words">{t("bizNum")}</li>
            <li className="break-words">{t("address")}</li>
            <li className="break-words">
              {t("email")}{" "}
              <a href="mailto:signalkorea82@gmail.com" className="hover:text-white transition break-all">
                signalkorea82@gmail.com
              </a>
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