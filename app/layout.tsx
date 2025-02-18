import type { Metadata } from 'next'
import './globals.css'
import MouseMoveEffect from "../components/mouse-move-effect"
import logo from "@/public/logo.jpg"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar"
import { Toaster } from "@/components/ui/toaster"
export const metadata: Metadata = {
  title: 'Fastech Electricity Savings Calculator',
  description: 'This is a calculator for electricity savings , which use a formula to calculate the output of electricity when using solar panel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" className='rounded-full' href={logo.src} sizes="32x32" />
      </head>
      <body className={`bg-background overflow-y-auto text-foreground overflow-x-hidden antialiased`}>
          <MouseMoveEffect />
          <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger className="rounded-full border-2 border-primary z-10 m-2 w-7 h-7" />
            <div className='flex w-full h-full items-center justify-center '>
              {children}
              <Toaster />
            </div>
          </SidebarProvider>
      </body>
    </html>
  )
}