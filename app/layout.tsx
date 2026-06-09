import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nextbridge | 바이브코딩 교육프로그램",
  description:
    "대학생을 위한 AI 바이브코딩 교육. 포트폴리오, 자기소개서, 직무분석을 웹사이트로 만들어 독점적 경쟁력을 확보하세요.",
  keywords: ["바이브코딩", "대학생 AI 교육", "포트폴리오 웹사이트", "nextbridge", "AI 코딩"],
  openGraph: {
    title: "nextbridge | 웹을 산출물로, 독점적 지위를",
    description:
      "코딩 경험 없어도 AI와 함께라면 웹사이트를 만들 수 있습니다.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
