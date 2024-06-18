import { cookies } from "next/headers";
import Link from "next/link";
import { DARK_THEME, LIGHT_THEME } from "@/utils/colors";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
// import { Header, SchemeToggle } from '@/components';
import Header from "../components/header/header";
import SchemeToggle from "../components/schemeToggle/schemeToggle";
import styles from "./page.module.css";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

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
      <body className={spaceMono.className}>
        <Header>
          <Link href="/" className={styles.logoLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              role="img"
              aria-labelledby="arrow-icon"
              className={styles.svg}
            >
              <title id="arrow-icon">Go home link</title>
              <path d="M7.78 12.53a.75.75 0 0 1-1.06 0L2.47 8.28a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L4.81 7h7.44a.75.75 0 0 1 0 1.5H4.81l2.97 2.97a.75.75 0 0 1 0 1.06Z"></path>
            </svg>
            Home
          </Link>
          <SchemeToggle initialTheme={theme} />
        </Header>
        {children}
      </body>
    </html>
  );
}
