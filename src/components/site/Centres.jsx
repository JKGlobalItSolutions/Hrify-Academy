import { MapPin, Phone } from "lucide-react";

const centres = [
{ city: "Hyderabad", address: "Banjara Hills, Road No. 12", phone: "+91 99999 11111" },
{ city: "Chennai", address: "Anna Nagar West, Block 15", phone: "+91 99999 22222" },
{ city: "Bangalore", address: "Koramangala 5th Block", phone: "+91 99999 33333" },
{ city: "Mumbai", address: "Andheri East, MIDC", phone: "+91 99999 44444" },
{ city: "Delhi", address: "Connaught Place, Inner Circle", phone: "+91 99999 55555" },
{ city: "Pune", address: "FC Road, Shivaji Nagar", phone: "+91 99999 66666" }];


export function Centres() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Coaching Centres</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">Learn near you</h2>
          <p className="mt-3 text-muted-foreground">Premium offline classrooms across India's top cities.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {centres.map((c) =>
          <div key={c.city} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{c.city}</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{c.address}</p>
              <a href={`tel:${c.phone}`} className="mt-3 flex items-center gap-2 text-sm font-medium text-primary hover:text-accent">
                <Phone className="h-4 w-4" /> {c.phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>);

}