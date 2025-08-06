import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
title: 'Suraj Rathor - Full Stack Developer & iOS Developer',
description: 'Portfolio of Suraj Rathor - Full Stack Developer specializing in React, Node.js, MongoDB, and iOS development. Currently pursuing B.Tech at IIIT Kottayam.',
generator: 'v0.dev',
icons: {
  icon: '/images/profile.jpeg',
},
}

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode
}>) {
return (
  <html lang="en">
    <body>{children}</body>
  </html>
)
}
