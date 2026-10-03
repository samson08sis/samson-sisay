"use client";

import ThemeToggle from "@/components/layout/ThemeToggle";
import { useState, useEffect, createContext, useContext } from "react";

export type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  onThemeChange: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme ? savedTheme : "dark";
    // const initialDark = savedTheme ? savedTheme === "dark" : true;

    const loadTheme = () => {
      setTheme(initialTheme as Theme);

      if (initialTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    loadTheme();
  }, []);

  const onThemeChange = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);

    const root = document.documentElement;
    if (nextTheme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, onThemeChange }}>
      {children}
      <ThemeToggle theme={theme} onChange={onThemeChange} />
    </ThemeContext.Provider>
  );
}
