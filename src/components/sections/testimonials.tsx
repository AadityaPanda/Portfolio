import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TESTIMONIALS_DATA } from "@/lib/data";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="space-y-12 section-card">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Star className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-headline font-bold tracking-tight">Testimonials</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {TESTIMONIALS_DATA.map((testimonial, index) => (
          <Card key={index} className="flex flex-col justify-between bg-card/50 border-border/20">
            <CardHeader>
                <div className="flex items-start gap-4">
                    <Quote className="h-8 w-8 shrink-0 text-primary/30 mt-1" />
                    <CardDescription className="text-base text-muted-foreground italic">
                        &ldquo;{testimonial.quote}&rdquo;
                    </CardDescription>
                </div>
            </CardHeader>
            <CardFooter>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
