import type { Metadata } from 'next'
import { Space_Mono, Outfit } from 'next/font/google'
import { DARK_THEME, LIGHT_THEME } from '@/utils/colors'
import Header from '../components/header/header'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'
import Footer from '@/components/footer/footer'

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const outfit = Outfit({ subsets: ['latin'], weight: ['700'] })

export const metadata: Metadata = {
  title: 'Tools',
  description: 'Everyday tools!',
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
    <html lang="en" style={DARK_THEME}>
      <body className={spaceMono.className}>
        <Toaster
          visibleToasts={1}
          duration={1500}
          position="top-right"
          className={outfit.className}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
