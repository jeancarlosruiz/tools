import { cookies } from 'next/headers';
import { DARK_THEME, LIGHT_THEME } from '@/utils/colors';
import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
// import { Header, SchemeToggle } from '@/components';
import Header from '../components/header/header';
import SchemeToggle from '../components/schemeToggle/schemeToggle';
import './globals.css';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jean - DevKit',
  description: 'Everyday tools!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const savedTheme = cookies().get('color-theme');
  const theme = savedTheme?.value || 'dark';
  const themeColors: {} = theme === 'light' ? LIGHT_THEME : DARK_THEME;

  return (
    <html lang='en' data-color-theme={theme} style={themeColors}>
      <body className={spaceMono.className}>
        <Header>
          <SchemeToggle initialTheme={theme} />
        </Header>
        {children}
      </body>
    </html>
  );
}
