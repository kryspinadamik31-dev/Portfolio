export default function PortfolioWebsite() {
  const projects = [
    {
      title: "Detailing Studio",
      desc: "Nowoczesna strona dla studia auto detailingu z animacjami i formularzem kontaktowym.",
    },
    {
      title: "Restaurant Landing",
      desc: "Elegancki landing page dla restauracji premium z rezerwacją online.",
    },
    {
      title: "Construction Company",
      desc: "Profesjonalna strona firmy budowlanej nastawiona na pozyskiwanie klientów.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 opacity-90" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-40 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 mb-8">
              ⚡ Web Creator & Frontend Developer
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              Tworzę nowoczesne strony dla firm.
            </h1>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-xl">
              Projektuję szybkie, nowoczesne i responsywne strony internetowe,
              które pomagają firmom wyglądać profesjonalnie i zdobywać klientów.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
                Zobacz projekty
              </button>

              <button className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition">
                Kontakt
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6 h-56 flex flex-col justify-between">
              <div className="text-zinc-400">🔥</div>
              <div>
                <h3 className="text-xl font-bold">Modern UI</h3>
                <p className="text-zinc-400 mt-2 text-sm">
                  Minimalistyczny i nowoczesny design.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6 h-56 flex flex-col justify-between mt-10">
              <div className="text-zinc-400">⚡</div>
              <div>
                <h3 className="text-xl font-bold">Fast Websites</h3>
                <p className="text-zinc-400 mt-2 text-sm">
                  Szybkie strony zoptymalizowane pod SEO.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6 h-56 flex flex-col justify-between -mt-6">
              <div className="text-zinc-400">📱</div>
              <div>
                <h3 className="text-xl font-bold">Responsive</h3>
                <p className="text-zinc-400 mt-2 text-sm">
                  Idealne działanie na telefonach i tabletach.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6 h-56 flex flex-col justify-between">
              <div className="text-zinc-400">🚀</div>
              <div>
                <h3 className="text-xl font-bold">Premium Feel</h3>
                <p className="text-zinc-400 mt-2 text-sm">
                  Strony wyglądające jak od dużych agencji.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
              O mnie
            </p>

            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
              Pomagam firmom budować profesjonalny wizerunek online.
            </h2>
          </div>

          <div>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Tworzę strony internetowe, które łączą nowoczesny design,
              szybkość działania oraz skuteczność biznesową. Każdy projekt
              jest responsywny i dostosowany do potrzeb klienta.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl lg:text-5xl font-black">Wybrane projekty</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-white/10 rounded-[28px] overflow-hidden hover:border-white/20 transition"
            >
              <div className="h-56 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center text-zinc-500 text-sm">
                Preview projektu
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="text-zinc-400 mt-4 leading-relaxed text-sm">
                  {project.desc}
                </p>

                <button className="mt-8 px-5 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
            Technologie
          </p>

          <h2 className="text-4xl lg:text-5xl font-black">
            Stack, którego używam
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            "React",
            "Next.js",
            "Tailwind",
            "WordPress",
            "JavaScript",
            "Framer Motion",
            "SEO",
            "Vercel",
          ].map((tech) => (
            <div
              key={tech}
              className="bg-zinc-900 border border-white/10 rounded-2xl p-6 text-center hover:bg-zinc-800 transition"
            >
              <p className="font-semibold">{tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/10">
        <div className="bg-zinc-900 border border-white/10 rounded-[32px] p-10 lg:p-20 text-center">
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
            Kontakt
          </p>

          <h2 className="text-4xl lg:text-6xl font-black leading-tight">
            Masz pomysł na stronę?
          </h2>

          <p className="text-zinc-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Napisz do mnie i stwórzmy nowoczesną stronę internetową dla Twojej firmy.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
              Kontakt
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition">
              GitHub
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-zinc-500 text-sm">
        © 2026 Portfolio Website — Web Creator
      </footer>
    </div>
  );
}
