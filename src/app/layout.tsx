import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  icons: { icon: "/brand/unidev.jpg", apple: "/brand/unidev.jpg" },
  title: "UniDev | نقشه‌راه‌های یادگیری برنامه‌نویسی",
  description:
    "مسیر یادگیری فرانت‌اند، جنگو، علم داده و لینوکس را مرحله‌به‌مرحله ببین؛ همراه با مباحث، منابع آموزشی، تمرین‌ها و پروژه‌های پیشنهادی.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try { var t = localStorage.getItem("unidev_theme"); document.documentElement.dataset.theme = t === "dark" || t === "light" ? t : "dark"; } catch { document.documentElement.dataset.theme = "dark"; }` }} />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
