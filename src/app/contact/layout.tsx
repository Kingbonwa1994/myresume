import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Bonwayinkosi Mdluli',
  description: 'Front-End Developer | Mobile App Developer',
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
