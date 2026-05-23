"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/SmoothScroll";

/**
 * 首页由 HorizontalSlider 自带 Lenis，避免与全局 SmoothScroll 重复实例。
 */
export function ConditionalSmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/") {
    return <>{children}</>;
  }

  return <SmoothScroll>{children}</SmoothScroll>;
}
