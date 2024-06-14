import { cookies } from "next/headers";
import { DARK_THEME, LIGHT_THEME } from "@/utils/colors";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { SchemeToggle } from "@/components";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jean - DevKit",
  description: "Everyday tools!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const savedTheme = cookies().get("color-theme");
  const theme = savedTheme?.value || "dark";
  const themeColors: {} = theme === "light" ? LIGHT_THEME : DARK_THEME;

  return (
    <html lang="en" data-color-theme={theme} style={themeColors}>
      <body className={mulish.className}>
        <header>
          <SchemeToggle initialTheme={theme} />
        </header>
        {children}
      </body>
    </html>
  );
}
