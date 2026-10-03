import { Theme } from "@/context/ThemeContext";

type Props = {
  theme: Theme;
  onChange: () => void;
};

export default function ThemeToggle({ theme, onChange }: Props) {
  const isDark = theme === "dark";
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={onChange}
        aria-label="Toggle theme mode"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border-line bg-bg-card shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer">
        <div
          className={`relative flex items-center justify-center transition-transform duration-500 ease-out ${
            isDark ? "-rotate-180 scale-100" : "rotate-0 scale-100"
          }`}>
          {/* Sun Icon for Light Mode option */}
          <svg
            className={`h-4 w-4 transition-all duration-300 ${
              isDark
                ? "opacity-100 rotate-0 scale-100 text-amber-400"
                : "opacity-0 rotate-90 scale-50 absolute"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
            />
          </svg>
          {/* Moon Icon for Dark Mode option */}
          <svg
            className={`h-4 w-4 transition-all duration-300 ${
              isDark
                ? "opacity-0 rotate-90 scale-50 absolute"
                : "opacity-100 rotate-0 scale-100 text-emerald-400"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
