"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/../sanity.config";
import { useTheme } from "@/context/ThemeContext";

export default function CMS() {
  const { theme } = useTheme();

  return <NextStudio config={config} scheme={theme} />;
}
