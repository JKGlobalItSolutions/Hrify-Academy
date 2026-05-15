import { Star } from "lucide-react";

const items = [
{ name: "Meera J.", course: "CAT 2024", text: "The structured plan and weekly mocks made the entire CAT journey predictable. Best decision I made.", rating: 5 },
{ name: "Vikram T.", course: "Bank PO", text: "Daily quizzes and current-affairs digests are pure gold. Cracked SBI PO in my first attempt!", rating: 5 },
{ name: "Sara K.", course: "GRE", text: "Loved the verbal modules and adaptive practice. My score went from 305 to 328 in 10 weeks.", rating: 5 }];


export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Testimonials</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">Loved by students across India</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) =>
          <div key={t.name} className="glass rounded-2xl p-7 shadow-soft hover:shadow-elegant transition-shadow">
              <div className="flex gap-1 text-accent mb-3">
                {Array.from({ length: t.rating }).map((_, i) =>
              <Star key={i} className="h-4 w-4 fill-current" />
              )}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{t.text}"</p>
              <div className="mt-6 pt-5 border-t flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full gradient-hero text-primary-foreground font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.course}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}