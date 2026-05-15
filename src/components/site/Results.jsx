const results = [
{ name: "Aarav Mehta", exam: "CAT 2024", score: "99.87 %ile", initials: "AM" },
{ name: "Sneha Iyer", exam: "SBI PO", score: "AIR 12", initials: "SI" },
{ name: "Rohan Kapoor", exam: "CLAT", score: "AIR 47", initials: "RK" },
{ name: "Priya Sharma", exam: "SSC CGL", score: "AIR 9", initials: "PS" },
{ name: "Karthik Rao", exam: "GRE", score: "335 / 340", initials: "KR" },
{ name: "Ananya Singh", exam: "IIM-A Convert", score: "99.2 %ile", initials: "AS" }];


export function Results() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Results</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">Toppers who trust HRIFY</h2>
            <p className="mt-3 text-muted-foreground">Real students. Real ranks. Real journeys you can replicate with the right mentorship.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((r) =>
          <div key={r.name} className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-hero font-display text-lg font-bold text-primary-foreground shadow-soft">
                  {r.initials}
                </div>
                <div>
                  <div className="font-display font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.exam}</div>
                </div>
              </div>
              <div className="mt-6 text-3xl font-display font-bold text-gradient">{r.score}</div>
              <p className="mt-2 text-sm text-muted-foreground">"HRIFY's mentors made the difference. The mocks felt exactly like the real test."</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}