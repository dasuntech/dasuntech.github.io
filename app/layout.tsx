import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "다선테크 | 의료 및 AI 검사 분석 시스템 전문기업",
  description:
    "방사성의약품 자동합성·분주장치, PDD AI 비전검사, CCTV 낙상방지 및 자율주행 AI 로봇 햇살이를 개발하는 다선테크 공식 홈페이지입니다.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
