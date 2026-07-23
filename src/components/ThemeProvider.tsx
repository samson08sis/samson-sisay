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
    const updateClassList = async () => {
      const root = document.documentElement;

      // Check saved preference or default to dark
      const savedTheme = localStorage.getItem("theme");
      const initialDark = savedTheme ? savedTheme === "dark" : true;

      setIsDark(initialDark);

      if (initialDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };
    updateClassList();
  }, []);

  const onThemeChange = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    const root = document.documentElement;
    if (nextDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <ThemeToggle isDarkMode={isDark} onChange={onThemeChange} />
      {children}
    </>
  );
}
