import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/components/modal-provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BooksClinical',
  description: 'Evidence-based research platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider />
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}

// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'
// import { ClerkProvider } from '@clerk/nextjs'
// import { ModalProvider } from '@/components/modal-provider'
// import { SessionProvider } from '@/components/session-provider'
// import {getServerSession} from "next-auth";
// import { authOptions } from './api/AUTH/[...nextauth]'



// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'BooksMed',
//   description: 'AI Platform',
// }

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
// const session = await getServerSession(authOptions)

//   return (
//     <SessionProvider session={session}>
//     <html lang="en">
//       <body className={inter.className}>
//         <ModalProvider />
//         {children}
//       </body>
//     </html>
//     </SessionProvider>
    
//   )
// }

