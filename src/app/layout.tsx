import Auth0 from '@/utils/Auth0'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import QueryProvider from '@/utils/QueryProvider'

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] 

})

export const metadata: Metadata = {
  title: 'ZapFaturas',
  description: 'A forma mais fácil de cobrar pelo WhatsApp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Auth0>
          <QueryProvider>
            {children}
          </QueryProvider>
        </Auth0>
      </body>
    </html>
  )
}
