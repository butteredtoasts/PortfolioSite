import { useEffect } from "react";

export default function useSystemDarkMode() {
  useEffect(() => {
    // Get system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial class
    document.body.classList.toggle("dark", mediaQuery.matches);

    // Listen for changes
    const handler = (e: MediaQueryListEvent) => {
      document.body.classList.toggle("dark", e.matches);
    };

    mediaQuery.addEventListener("change", handler);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  return null;
}