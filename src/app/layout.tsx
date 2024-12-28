import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import SocialMenu from "./components/SocialMenu";
import AccessibilityMenu from "./components/AccessibilityMenu";

export const metadata: Metadata = {
  title: "קארין מזרחי",
  description: "קארין מזרחי - ציפורניים ויופי",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
    >
      <body className={` bg-zinc-100 text-zinc-900 `}>
        <Header />
        {children}
        <SocialMenu />
        <AccessibilityMenu />
        <Footer />
      </body>
    </html>
  );
}
