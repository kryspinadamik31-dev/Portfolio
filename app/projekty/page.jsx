import Link from "next/link";

export default function ProjektyPage() {
  const projects = [
    {
      title: "Black Diamond Detailing",
      category: "Auto Detailing",
      desc: "Luksusowa strona dla studia auto detailingu z ciemnym designem, ofertą usług i sekcją rezerwacji.",
      tags: ["Landing Page", "Premium UI", "SEO"],
    },
    {
      title: "Kowalski & Partners",
      category: "Kancelaria prawna",
      desc: "Profesjonalna strona kancelarii nastawiona na zaufanie, przejrzystość usług i kontakt z klientem.",
      tags: ["Corporate", "Business", "Responsive"],
    },
    {
      title: "NERO Restaurant",
      category: "Restauracja premium",
      desc: "Elegancka strona restauracji z galerią, menu, sekcją szefa kuchni i rezerwacją stolika.",
      tags: ["Luxury", "Food", "Modern Design"],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="text-zinc-400 hover:text-white transition">
          ← Wróć na stronę główną
        </Link>

        <div className="mt-16 mb-16">
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
            Portfolio
          </p>

          <h1 className="text-5xl lg:text-7xl font-black tracking-tight">
            Nasze projekty
          </h1>

          <p className="text-zinc-400 text-lg mt-6 max-w-2xl leading-relaxed">
            Przykładowe realizacje pokazujące, jak NextByte tworzy nowoczesne,
            szybkie i profesjonalne strony internetowe dla firm.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-white/10 rounded-[32px] overflow-hidden hover:border-white/30 transition"
            >
              <div className="h-64 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black flex items-center justify-center">
                <div className="text-center">
                  <p className="text-zinc-500 text-sm">{project.category}</p>
                  <h2 className="text-2xl font-bold mt-2">{project.title}</h2>
                </div>
              </div>

              <div className="p-7">
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="mt-8 w-full px-5 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
                  Zobacz projekt
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}