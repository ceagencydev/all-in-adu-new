import type React from "react"
import { Playfair_Display, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import Script from "next/script"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) - Google Ads */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16893802236" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16893802236');
          `}
        </Script>
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <script type="text/javascript" src="//cdn.callrail.com/companies/261730017/aa054c26636e6aeecbf1/12/swap.js" />
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
