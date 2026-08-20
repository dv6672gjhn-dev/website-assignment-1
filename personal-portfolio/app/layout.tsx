import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shah Mohammad Amaanul Haque — Student, Self-Employed, Learner',
  description: 'Personal portfolio of Shah Mohammad Amaanul Haque, a student, self-employed professional and learner based in Aligarh, India.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8fafc',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
