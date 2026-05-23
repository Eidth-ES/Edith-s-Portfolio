import type { Metadata } from "next";
import { ConditionalSmoothScroll } from "@/components/ConditionalSmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "作品集",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="lenis lenis-smooth">
      <body className="antialiased">
        <ConditionalSmoothScroll>{children}</ConditionalSmoothScroll>
      </body>
    </html>
  );
}
