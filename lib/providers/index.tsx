"use client";
import { ThemeProvider } from "@/components/theme/theme-provider";
import ThemeModeToggle from "@/components/theme/theme-toggle";
export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-full">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <div className="absolute top-3 left-3">
          <ThemeModeToggle />
        </div>
      </ThemeProvider>
    </div>
  );
}
