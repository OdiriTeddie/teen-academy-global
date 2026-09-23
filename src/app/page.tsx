const colors = [
  {
    name: "Primary",
    hex: "#2563EB",
    className: "bg-[var(--tag-primary)]",
    swatches: [
      "#061633",
      "#08245c",
      "#0d388e",
      "#1d4ed8",
      "#2563eb",
      "#60a5fa",
      "#93c5fd",
      "#bfdbfe",
      "#dbeafe",
      "#eff6ff",
    ],
  },
  {
    name: "Secondary",
    hex: "#0F172A",
    className: "bg-[var(--tag-secondary)]",
    swatches: [
      "#020617",
      "#0f172a",
      "#1e293b",
      "#334155",
      "#475569",
      "#64748b",
      "#94a3b8",
      "#cbd5e1",
      "#e2e8f0",
      "#f8fafc",
    ],
  },
  {
    name: "Tertiary",
    hex: "#F59E0B",
    className: "bg-[var(--tag-tertiary)]",
    swatches: [
      "#180c00",
      "#3b2200",
      "#713f00",
      "#a16207",
      "#d97706",
      "#f59e0b",
      "#fbbf24",
      "#fed7aa",
      "#ffedd5",
      "#fff7ed",
    ],
  },
  {
    name: "Neutral",
    hex: "#F8FAFC",
    className: "bg-[var(--tag-neutral)] text-[var(--tag-secondary)]",
    swatches: [
      "#020617",
      "#1e293b",
      "#334155",
      "#475569",
      "#64748b",
      "#94a3b8",
      "#cbd5e1",
      "#e2e8f0",
      "#f1f5f9",
      "#f8fafc",
    ],
  },
];

const principles = ["Christ-centered", "Holistic", "Mentored", "Global-ready"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--tag-neutral)] p-4 text-[var(--tag-secondary)] sm:p-6 lg:p-8">
      <section className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[minmax(220px,0.82fr)_1.12fr_1.12fr_1.12fr]">
        <div className="flex flex-col gap-4">
          {colors.map((color) => (
            <article
              className="overflow-hidden rounded-lg bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]"
              key={color.name}
            >
              <div
                className={`${color.className} flex min-h-24 items-start justify-between p-5 text-sm font-bold text-white`}
              >
                <span>{color.name}</span>
                <span>{color.hex}</span>
              </div>
              <div className="grid h-14 grid-cols-10">
                {color.swatches.map((swatch) => (
                  <span key={swatch} style={{ backgroundColor: swatch }} />
                ))}
              </div>
            </article>
          ))}
        </div>

        <article className="rounded-lg bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] lg:col-span-2">
          <div className="flex items-start justify-between gap-6 text-xs font-semibold text-[var(--tag-neutral-500)]">
            <span>Headline</span>
            <span>Plus Jakarta Sans</span>
          </div>
          <p className="mt-7 text-[clamp(4.5rem,13vw,9.5rem)] font-semibold leading-none text-[var(--tag-secondary)]">
            Aa
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-4">
            {principles.map((principle) => (
              <span
                className="rounded-md bg-[var(--tag-neutral-100)] px-3 py-2 text-center text-xs font-bold text-[var(--tag-muted)]"
                key={principle}
              >
                {principle}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded-lg bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <div className="flex flex-wrap gap-3">
            <button className="h-11 rounded-md bg-[var(--tag-primary)] px-8 text-sm font-bold text-white shadow-[0_10px_24px_rgba(37,99,235,0.22)]">
              Primary
            </button>
            <button className="h-11 rounded-md bg-[var(--tag-neutral-100)] px-8 text-sm font-bold text-[var(--tag-secondary)]">
              Secondary
            </button>
            <button className="h-11 rounded-md bg-[var(--tag-secondary)] px-8 text-sm font-bold text-white">
              Inverted
            </button>
            <button className="h-11 rounded-md border border-[var(--tag-secondary-700)] bg-white px-8 text-sm font-bold text-[var(--tag-secondary)]">
              Outlined
            </button>
          </div>
          <div className="mt-8 rounded-lg bg-[var(--tag-neutral-100)] p-4">
            <p className="text-sm font-bold text-[var(--tag-secondary)]">
              Beacon of hope
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--tag-muted)]">
              Resources, opportunity, guidance, mentorship, and coaching for
              teenagers and young adults.
            </p>
          </div>
        </article>

        <article className="rounded-lg bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <label
            className="mb-3 block text-xs font-bold uppercase text-[var(--tag-neutral-500)]"
            htmlFor="search"
          >
            Search field
          </label>
          <div className="flex h-12 items-center gap-3 rounded-md border border-[var(--tag-neutral-300)] bg-[var(--tag-neutral-100)] px-4 ring-[var(--ring)] focus-within:ring-4">
            <span className="text-lg text-[var(--tag-neutral-500)]">O</span>
            <input
              className="w-full bg-transparent text-sm font-semibold text-[var(--tag-secondary)] outline-none placeholder:text-[var(--tag-neutral-500)]"
              id="search"
              placeholder="Search"
              type="search"
            />
          </div>
        </article>

        <article className="rounded-lg bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <div className="flex items-start justify-between text-xs font-semibold text-[var(--tag-neutral-500)]">
            <span>Body</span>
            <span>Inter</span>
          </div>
          <p className="mt-6 text-[clamp(4rem,10vw,8rem)] font-medium leading-none text-[#464a5c]">
            Aa
          </p>
        </article>

        <article className="rounded-lg bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <div className="space-y-4 pt-10">
            <span className="block h-2 w-4/5 rounded-full bg-[var(--tag-primary)]" />
            <span className="block h-2 w-full rounded-full bg-[#555c72]" />
            <span className="block h-2 w-3/5 rounded-full bg-[#7a4d00]" />
          </div>
        </article>

        <article className="rounded-lg bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <nav
            aria-label="Component preview"
            className="mt-10 flex items-center justify-center gap-6 rounded-2xl bg-[var(--tag-neutral-100)] px-6 py-4 text-sm font-bold"
          >
            <span className="grid size-9 place-items-center rounded-full bg-[var(--tag-primary)] text-white">
              H
            </span>
            <span className="text-[var(--tag-secondary)]">S</span>
            <span className="text-[var(--tag-secondary)]">U</span>
          </nav>
        </article>

        <article className="rounded-lg bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <div className="flex items-start justify-between text-xs font-semibold text-[var(--tag-neutral-500)]">
            <span>Label</span>
            <span>Inter</span>
          </div>
          <p className="mt-5 text-[clamp(3.5rem,9vw,7rem)] font-medium leading-none text-[#464a5c]">
            Aa
          </p>
        </article>

        <article className="rounded-lg bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <div className="flex min-h-28 items-center justify-center gap-4">
            <button
              aria-label="Edit"
              className="grid size-12 place-items-center rounded-md bg-[#9a6500] text-sm font-bold text-white"
            >
              E
            </button>
            <button className="h-11 rounded-md bg-[var(--tag-primary)] px-6 text-sm font-bold text-white">
              E&nbsp;&nbsp;Label
            </button>
          </div>
        </article>

        <article className="rounded-lg bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] lg:col-span-2">
          <div className="flex h-full min-h-28 items-center justify-center gap-3">
            {[
              ["M", "bg-[var(--tag-primary)]"],
              ["G", "bg-[#475569]"],
              ["T", "bg-[#7a4d00]"],
              ["D", "bg-[#b91c1c]"],
            ].map(([label, className]) => (
              <button
                aria-label={label}
                className={`${className} grid size-10 place-items-center rounded-full text-xs font-black text-white`}
                key={label}
              >
                {label}
              </button>
            ))}
          </div>
        </article>

        <article className="rounded-lg bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] lg:col-span-4">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase text-[var(--tag-primary)]">
                TAG design direction
              </p>
              <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-[var(--tag-secondary)] sm:text-5xl">
                A warm, credible system for faith, growth, and opportunity.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--tag-muted)]">
                The system balances spiritual conviction with educational
                clarity: bold blue for trust and momentum, deep slate for
                seriousness, amber for hope, and quiet neutrals for focus.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Mentorship",
                "Coaching",
                "Education",
                "Community",
              ].map((item) => (
                <div
                  className="rounded-lg border border-[var(--tag-neutral-200)] bg-[var(--tag-neutral)] p-5"
                  key={item}
                >
                  <p className="text-sm font-black text-[var(--tag-secondary)]">
                    {item}
                  </p>
                  <span className="mt-5 block h-2 rounded-full bg-[var(--tag-primary)]" />
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
