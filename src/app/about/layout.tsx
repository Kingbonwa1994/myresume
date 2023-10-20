import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Bonwayinkosi Mdluli |',
  description: 'Get the background of the front-end developer who has evolved from being a High School Science Teacher to a UX developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
