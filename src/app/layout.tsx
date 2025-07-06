import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { inter, spaceGrotesk } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import SmoothScroll from '@/components/smooth-scroll';
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: 'Portfolio | Aaditya Panda',
  description: 'The personal portfolio of Aaditya Panda, a software developer specializing in full-stack web applications and custom system architecture.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "font-body antialiased scrollbar-none bg-background bg-aurora",
        inter.variable,
        spaceGrotesk.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <Toaster />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
