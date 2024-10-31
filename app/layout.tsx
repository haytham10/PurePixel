import type { Metadata } from "next"
import { ThemeProvider } from "@/providers/ThemeProvider"
import { geistSans, geistMono } from "@/lib/fonts"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "PurePixel - Web Design & Development",
  description: "Transform your digital presence with pixel-perfect design and development services.",
  keywords: ["web design", "web development", "SEO", "digital marketing", "create website"],
  authors: [{ name: "PurePixel" }],
  creator: "PurePixel",
  metadataBase: new URL('https://purepixel.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://purepixel.com",
    title: "PurePixel - Web Design & Development",
    description: "Transform your digital presence with pixel-perfect design and development services.",
    siteName: "PurePixel",
  },
  twitter: {
    card: "summary_large_image",
    title: "PurePixel - Web Design & Development",
    description: "Transform your digital presence with pixel-perfect design and development services.",
    creator: "@purepixel",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
			<Header />
				{children}
			<Footer />
		</ThemeProvider>
      </body>
    </html>
  )
}