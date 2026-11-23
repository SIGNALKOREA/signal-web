import type { Metadata } from "next";
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextIntlClientProvider } from 'next-intl'; // 💡 다국어 공급기 추가
import { getMessages } from 'next-intl/server'; // 💡 다국어 메시지 불러오기 도구

export const metadata: Metadata = {
  metadataBase: new URL("https://signalkorea.co.kr"),
  title: "SIGNAL.KOREA | 글로벌 교육 기관을 위한 통합 유학 솔루션",
  description: "15년 이상의 현직 대학 실무진이 기획하고 운영하는 맞춤형 단기 연수, 명문대 탐방, 유학 진학 다이렉트 연계 B2B 플랫폼.",
  keywords: "한국 유학, 어학당, 단기 연수, K-에듀, 명문대 탐방, TOPIK, B2B 유학 솔루션",
  openGraph: {
    title: "SIGNAL.KOREA | 통합 유학 솔루션",
    description: "15년 이상의 현직 대학 실무진이 기획하는 맞춤형 K-에듀 B2B 플랫폼",
    url: "https://signalkorea.co.kr",
    siteName: "SIGNAL.KOREA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SIGNAL.KOREA 썸네일 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  // 👇 여기부터 추가하시면 됩니다
  verification: {
    google: "구글_서치콘솔에서_받은_content값",
    other: {
      "naver-site-verification": "네이버_서치어드바이저에서_받은_content값",
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // 💡 현재 언어에 맞는 번역 파일(ko.json, en.json 등)의 데이터를 가져옵니다.
  const messages = await getMessages(); 

  return (
    <html lang={locale}>
      <body className="font-sans antialiased bg-gray-50">
        {/* 💡 가져온 번역 데이터를 Header, Footer, 페이지 전체에 공급해 줍니다. */}
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}