
import { Mail } from "lucide-react";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" className="space-y-12 section-card">
       <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Mail className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-headline font-bold tracking-tight">Get in Touch</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out to me using the form below.
            </p>
            <ContactForm />
        </div>
        <div className="relative h-full min-h-[400px] w-full hidden lg:flex items-center justify-center rounded-2xl bg-primary/5">
          <Mail className="w-48 h-48 text-primary/20" strokeWidth={1} />
        </div>
      </div>
    </section>
  );
}
