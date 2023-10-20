import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'I  have done for your my clients on my freelance trip',
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
