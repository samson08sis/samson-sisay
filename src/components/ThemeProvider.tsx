"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const onThemeChange = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <>
      {/* <ThemeToggle isDarkMode={isDark} onChange={onThemeChange} /> */}
      {children}
    </>
  );
}
