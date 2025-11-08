import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://abdel-rahman-amoorah.github.io/MyPortfolio/"),
  title: "Abdel-Rahman Amoorah Portfolio",
  description:
    "Full Stack Developer and Cybersecurity Specialist with expertise in React, Node.js, and security operations. Building secure, responsive applications.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Abdel-Rahman Amoorah Portfolio",
    description:
      "Explore projects by Abdel-Rahman — Full Stack Developer and Cybersecurity Specialist with React, Node.js, and security expertise.",
    url: "https://abdel-rahman-amoorah.github.io/MyPortfolio",
    siteName: "Abdel-Rahman Amoorah Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdel-Rahman Amoorah Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdel-Rahman Amoorah Portfolio",
    description:
      "Full Stack Developer and Cybersecurity Specialist — React, Node.js, and security operations expert.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics 4 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9H9ZK4LPWW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9H9ZK4LPWW', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
