"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { CiDark, CiLight } from "react-icons/ci";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:scale-110 duration-300 transition-colors"
      aria-label="Toggle dark mode"
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <CiLight className="text-xl text-yellow-400" />
      ) : (
        <CiDark className="text-xl text-gray-700" />
      )}
    </button>
  );
}
