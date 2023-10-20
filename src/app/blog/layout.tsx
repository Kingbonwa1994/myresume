import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Bonwayinkosi Mdluli',
  description: 'These are the blog articles that have been written by Bonwayinnkosi Mdluli on various dev platforms',
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
