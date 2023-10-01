import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Headless Cms Blog',
  description: 'Created by nextjs and hygraph cms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className +  "p-4 md:mx-auto md:max-w-7xl md:px-32"}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
