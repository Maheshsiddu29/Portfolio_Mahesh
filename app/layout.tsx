import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sai Mahesh Sure - Portfolio",
  description: "Computer Science Master's Candidate | Blockchain & AR/VR Developer",
  keywords: "Sai Mahesh Sure, Computer Science, Full Stack Developer, Blockchain, AR/VR, React, Unity3D, Ethereum",
  authors: [{ name: "Sai Mahesh Sure" }],
  openGraph: {
    title: "Sai Mahesh Sure - Portfolio",
    description: "Computer Science Master's Candidate | Full-Stack Developer | Blockchain & AR/VR Specialist",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
