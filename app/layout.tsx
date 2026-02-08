import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
// import { DARK_THEME, LIGHT_THEME } from '@/utils/colors'
import Header from '../components/header/header'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'
import Footer from '@/components/footer/footer'

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Tools | JRuiz',
  description: 'Everyday tools!',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const savedTheme = cookies().get('color-theme');
  // const theme = savedTheme?.value || 'dark';
  // const themeColors: {} = theme === 'light' ? LIGHT_THEME : DARK_THEME;

  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Toaster
          visibleToasts={1}
          duration={1500}
          position="top-right"
          className={spaceGrotesk.className}
        />
        <Header />
        {children}
      </body>
    </html>
  )
}
