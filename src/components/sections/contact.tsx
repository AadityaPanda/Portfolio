
import { Mail } from "lucide-react";
import { ContactForm } from "./contact-form";
import { SectionHeader } from "../section-header";

export function Contact() {
  return (
    <section id="contact" className="space-y-12 section-card">
       <SectionHeader icon={Mail} title="Get in Touch" />

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
