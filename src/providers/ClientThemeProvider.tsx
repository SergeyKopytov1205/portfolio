"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export default function ClientThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
