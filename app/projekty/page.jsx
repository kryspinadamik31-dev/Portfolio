import Link from "next/link";

export default function ProjektyPage() {
  const projects = [
    {
      title: "Black Diamond Detailing",
      category: "Auto Detailing",
      desc: "Strona premium dla studia auto detailingu z ciemnym designem, ofertą usług i sekcją rezerwacji.",
      tags: ["Landing Page", "Premium UI", "SEO"],
      href: "/projekty/black-diamond-detailing",
    },
    {
      title: "Kowalski & Partners",
      category: "Kancelaria prawna",
      desc: "Profesjonalna strona kancelarii nastawiona na zaufanie, przejrzystość usług i kontakt z klientem.",
      tags: ["Corporate", "Business", "Responsive"],
      href: "/projekty/kowalski-partners",
    },
    {
      title: "NERO Restaurant",
      category: "Restauracja premium",
      desc: "Elegancka strona restauracji z galerią, menu, sekcją szefa kuchni i rezerwacją stolika.",
      tags: ["Luxury", "Food", "Modern Design"],
      href: "/projekty/nero-restaurant",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#030005] text-white">
      <section className="relative px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(168,85,247,.22),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(217,70,239,.14),transparent_30%),linear-gradient(135deg,#030005,#08010f_45%,#000)]" />
        <div className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-2xl border border-purple-400/20 bg-white/5 px-5 py-3 text-zinc-300 shadow-[0_0_35px_rgba(168,85,247,.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
          >
            <span className="text-lg">←</span>
            <span className="font-semibold tracking-wide">
              Wróć na stronę główną
            </span>
          </Link>

          <div className="mt-20 mb-16 max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_18px_rgba(168,85,247,.9)]" />
              NYROX Portfolio
            </div>

            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-400">
              Case studies
            </p>

            <h1 className="text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
              Projekty, które pokazują{" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-white bg-clip-text text-transparent">
                styl Nyrox
              </span>
              .
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Przykładowe realizacje pokazujące, jak Nyrox tworzy nowoczesne,
              szybkie i profesjonalne strony internetowe dla firm.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-[34px] border border-white/10 bg-zinc-950/90 shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-[0_0_70px_rgba(168,85,247,.16)]"
              >
                <div className="relative h-72 overflow-hidden bg-black p-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-fuchsia-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative h-full overflow-hidden rounded-[26px] border border-white/10 bg-[#08010f]">
                    <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4">
                      <span className="h-3 w-3 rounded-full bg-red-500" />
                      <span className="h-3 w-3 rounded-full bg-yellow-500" />
                      <span className="h-3 w-3 rounded-full bg-green-500" />
                    </div>

                    <div className="p-5">
                      <div className="mb-5 flex items-center justify-between">
                        <span className="rounded-full bg-purple-500/15 px-3 py-2 text-xs font-bold text-purple-300">
                          {project.category}
                        </span>

                        <span className="text-sm font-black text-zinc-600">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="mb-4 h-10 w-4/5 rounded-2xl bg-white/25" />
                      <div className="mb-2 h-3 w-full rounded-full bg-white/10" />
                      <div className="mb-8 h-3 w-2/3 rounded-full bg-white/10" />

                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-24 rounded-2xl bg-purple-500/20" />
                        <div className="h-24 rounded-2xl bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <p className="mb-3 text-sm font-semibold text-purple-400">
                    Case study 0{index + 1}
                  </p>

                  <h2 className="text-2xl font-black">{project.title}</h2>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                    {project.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.href}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-5 py-4 font-bold text-white shadow-[0_0_35px_rgba(168,85,247,.22)] transition hover:scale-[1.03]"
                  >
                    Zobacz projekt
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-[34px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur md:p-12">
            <p className="text-sm uppercase tracking-[0.35em] text-purple-400">
              Masz podobny projekt?
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Stwórzmy stronę dla Twojej firmy.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
              Nyrox projektuje strony, które budują zaufanie, prezentują ofertę
              premium i pomagają zamieniać odwiedzających w klientów.
            </p>

            <Link
              href="/kontakt"
              className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Umów bezpłatną konsultację
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}