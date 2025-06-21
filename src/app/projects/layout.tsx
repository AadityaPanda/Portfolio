import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative isolate">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/30 to-accent/30 opacity-50 dark:from-primary/20 dark:to-accent/20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        <main className="container mx-auto px-4 md:px-8 py-16 sm:py-24">
          <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <Button variant="ghost" asChild>
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Projects
              </Link>
            </Button>
          </div>
          {children}
        </main>
         <footer className="text-center p-8 mt-16 text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
