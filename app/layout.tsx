import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "SIGNAL.KOREA | Global Educational Partner",
  description: "글로벌 교육 기관을 위한 한국 유학 및 교육 솔루션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased bg-gray-50">
        <Header />
        {/* children 위치에 각 페이지(page.tsx)의 내용이 들어갑니다 */}
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}