'use client'
import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <MantineProvider
        theme={{
          colorScheme: 'light',
        }}
      >
        <head />
        <body>{children}</body>
      </MantineProvider>
    </html>
  )
}
