import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'PravarAi Labs | Intelligent AI Solutions',
  description: 'PravarAi Labs builds intelligent AI solutions that help businesses unlock the true value of their data through RAG, AI copilots, and enterprise automation.',
  generator: 'Next.js',
  icons: {
    // icon: [
    //   {
    //     url: '#',
    //     media: '(prefers-color-scheme: light)',
    //   },
    //   {
    //     url: '#',
    //     media: '(prefers-color-scheme: dark)',
    //   },
    //   {
    //     url: '/icon.svg',
    //     type: 'image/svg+xml',
    //   },
    // ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
