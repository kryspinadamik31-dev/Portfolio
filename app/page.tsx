import Link from "next/link";

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

  const testimonials = [
    {
      name: "Michał K.",
      company: "Black Diamond Detailing",
      text: "Strona wygląda premium, działa szybko i od razu lepiej prezentuje naszą ofertę klientom.",
    },
    {
      name: "Anna W.",
      company: "Kancelaria prawna",
      text: "Profesjonalny kontakt, nowoczesny projekt i bardzo dobra wersja mobilna strony.",
    },
    {
      name: "Piotr N.",
      company: "Restauracja NERO",
      text: "Dokładnie taki efekt chcieliśmy — elegancka strona, która wygląda świetnie na telefonie.",
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
              <Link
                href="/projekty"
                className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
              >
                Zobacz projekty
              </Link>

              <Link
                href="/kontakt"
                className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition"
              >
                Kontakt
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              ["🔥", "Modern UI", "Minimalistyczny i nowoczesny design."],
              ["⚡", "Fast Websites", "Szybkie strony zoptymalizowane pod SEO."],
              ["📱", "Responsive", "Idealne działanie na telefonach i tabletach."],
              ["🚀", "Premium Feel", "Strony wyglądające jak od dużych agencji."],
            ].map(([icon, title, desc], index) => (
              <div
                key={title}
                className={`bg-zinc-900 border border-white/10 rounded-3xl p-6 h-56 flex flex-col justify-between hover:-translate-y-2 hover:border-white/20 transition duration-300 ${
                  index === 1 ? "mt-10" : index === 2 ? "-mt-6" : ""
                }`}
              >
                <div className="text-zinc-400">{icon}</div>
                <div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-zinc-400 mt-2 text-sm">{desc}</p>
                </div>
              </div>
            ))}
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
              szybkość działania oraz skuteczność biznesową. Każdy projekt jest
              responsywny i dostosowany do potrzeb klienta.
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
            <h2 className="text-4xl lg:text-5xl font-black">
              Wybrane projekty
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-white/10 rounded-[28px] overflow-hidden hover:border-white/20 hover:-translate-y-2 transition duration-300"
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
              className="bg-zinc-900 border border-white/10 rounded-2xl p-6 text-center hover:bg-zinc-800 hover:-translate-y-1 transition duration-300"
            >
              <p className="font-semibold">{tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
            Opinie
          </p>

          <h2 className="text-4xl lg:text-5xl font-black">
            Firmy cenią NextByte za jakość i efekt.
          </h2>

          <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
            Przykładowe opinie klientów po wdrożeniu nowoczesnych stron
            internetowych.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((opinion, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900 border border-white/10 rounded-[28px] p-7 overflow-hidden hover:border-white/30 hover:-translate-y-2 transition duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

              <div className="relative">
                <div className="flex gap-1 text-yellow-400 text-xl mb-6">
                  ★★★★★
                </div>

                <p className="text-zinc-300 leading-relaxed">
                  “{opinion.text}”
                </p>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="font-bold text-lg">{opinion.name}</h3>
                  <p className="text-zinc-500 text-sm mt-1">
                    {opinion.company}
                  </p>
                </div>
              </div>
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
            Napisz do mnie i stwórzmy nowoczesną stronę internetową dla Twojej
            firmy.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/kontakt"
              className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              Kontakt
            </Link>

            <a
              href="https://github.com/kryspinadamik31-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-zinc-500 text-sm">
        © 2026 NextByte — Web Creator
      </footer>
    </div>
  );
}