import type { Metadata } from "next";
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const METADATA_BY_LOCALE: Record<
  string,
  {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogLocale: string;
  }
> = {
  ko: {
    title: "SIGNAL.KOREA | 글로벌 교육 기관을 위한 통합 유학 솔루션",
    description:
      "15년 이상의 현직 대학 실무진이 기획하고 운영하는 맞춤형 단기 연수, 명문대 탐방, 유학 진학 다이렉트 연계 B2B 플랫폼.",
    ogTitle: "SIGNAL.KOREA | 통합 유학 솔루션",
    ogDescription: "15년 이상의 현직 대학 실무진이 기획하는 맞춤형 K-에듀 B2B 플랫폼",
    ogLocale: "ko_KR",
  },
  en: {
    title: "SIGNAL.KOREA | Integrated Study-in-Korea Solution for Global Institutions",
    description:
      "B2B Korean study abroad platform led by active university practitioners with 15+ years of experience. Customized short-term camps, campus tours, and direct admissions.",
    ogTitle: "SIGNAL.KOREA | Study in Korea B2B Solution",
    ogDescription: "Customized K-Edu short-term camps & direct university admissions by 15+ yr experts",
    ogLocale: "en_US",
  },
  zh: {
    title: "SIGNAL.KOREA | 面向全球教育机构的韩国留学综合解决方案",
    description:
      "由拥有15年以上经验的现职大学实务专家策划运营的定制型短期研修、名校探访及韩国大学直通升学B2B平台。",
    ogTitle: "SIGNAL.KOREA | 韩国留学综合解决方案",
    ogDescription: "15年以上现职大学专家策划的定制型K-Edu B2B平台",
    ogLocale: "zh_CN",
  },
  ja: {
    title: "SIGNAL.KOREA | グローバル教育機関向け韓国留学総合ソリューション",
    description:
      "15年以上の現役大学実務陣が企画・運営するオーダーメイド短期研修、名門大学ツアー、韓国大学進学ダイレクト連携B2Bプラットフォーム。",
    ogTitle: "SIGNAL.KOREA | 韓国留学総合ソリューション",
    ogDescription: "15年以上の現役大学専門家が企画するオーダーメイドK-Edu B2Bプラットフォーム",
    ogLocale: "ja_JP",
  },
  vi: {
    title: "SIGNAL.KOREA | Giải pháp Du học Hàn Quốc Toàn diện cho Tổ chức Giáo dục",
    description:
      "Nền tảng B2B du học Hàn Quốc do các chuyên gia đại học hơn 15 năm kinh nghiệm vận hành: trại ngắn hạn, tham quan đại học và tuyển sinh trực tiếp.",
    ogTitle: "SIGNAL.KOREA | Giải pháp Du học Hàn Quốc",
    ogDescription: "Nền tảng K-Edu B2B thiết kế riêng bởi các chuyên gia đại học hơn 15 năm kinh nghiệm",
    ogLocale: "vi_VN",
  },
  mn: {
    title: "SIGNAL.KOREA | Олон улсын боловсролын байгууллагуудад зориулсан Солонгост суралцах цогц шийдэл",
    description:
      "15+ жилийн туршлагатай их сургуулийн мэргэжилтнүүдийн удирддаг богино хугацааны хөтөлбөр, их сургуулийн аялал болон шууд элсэлтийн B2B платформ.",
    ogTitle: "SIGNAL.KOREA | Солонгост суралцах цогц шийдэл",
    ogDescription: "15+ жилийн туршлагатай мэргэжилтнүүдийн K-Edu B2B платформ",
    ogLocale: "mn_MN",
  },
  fr: {
    title: "SIGNAL.KOREA | Solution intégrée d'études en Corée pour institutions internationales",
    description:
      "Plateforme B2B dirigée par des professionnels universitaires avec 15+ ans d'expérience : séjours courts sur mesure, visites de campus et admissions directes.",
    ogTitle: "SIGNAL.KOREA | Solution d'études en Corée",
    ogDescription: "Plateforme K-Edu B2B sur mesure par des experts universitaires (15+ ans d'expérience)",
    ogLocale: "fr_FR",
  },
  th: {
    title: "SIGNAL.KOREA | โซลูชันการศึกษาต่อประเทศเกาหลีแบบครบวงจรสำหรับสถาบันการศึกษา",
    description:
      "แพลตฟอร์ม B2B ด้านการศึกษาต่อประเทศเกาหลีโดยผู้เชี่ยวชาญจากมหาวิทยาลัยประสบการณ์กว่า 15 ปี จัดแคมป์ระยะสั้น ทัวร์มหาวิทยาลัยชั้นนำ และสมัครเรียนต่อโดยตรง",
    ogTitle: "SIGNAL.KOREA | โซลูชันการศึกษาต่อประเทศเกาหลี",
    ogDescription: "แพลตฟอร์ม K-Edu B2B แบบกำหนดเองโดยผู้เชี่ยวชาญมหาวิทยาลัยประสบการณ์กว่า 15 ปี",
    ogLocale: "th_TH",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = METADATA_BY_LOCALE[locale] ?? METADATA_BY_LOCALE.en;

  return {
    metadataBase: new URL("https://signalkorea.co.kr"),
    title: meta.title,
    description: meta.description,
    keywords: "한국 유학, 어학당, 단기 연수, K-에듀, 명문대 탐방, TOPIK, Study in Korea, SIGNAL.KOREA",
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: `https://signalkorea.co.kr/${locale}`,
      siteName: "SIGNAL.KOREA",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "SIGNAL.KOREA",
        },
      ],
      locale: meta.ogLocale,
      type: "website",
    },
    verification: {
      google: "구글_서치콘솔에서_받은_content값",
      other: {
        "naver-site-verification": "네이버_서치어드바이저에서_받은_content값",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="font-sans antialiased bg-gray-50">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}