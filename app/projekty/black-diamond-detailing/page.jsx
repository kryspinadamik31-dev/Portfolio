import Link from "next/link";

export default function BlackDiamondDetailing() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden min-h-screen flex items-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.18),transparent_35%),linear-gradient(to_bottom,#09090b,#000)]" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Link href="/projekty" className="text-zinc-400 hover:text-white">
              ← Wróć do projektów
            </Link>

            <p className="mt-12 text-yellow-400 tracking-[0.3em] uppercase text-sm">
              Premium Auto Detailing
            </p>

            <h1 className="mt-6 text-6xl lg:text-8xl font-black leading-none">
              Black Diamond Detailing
            </h1>

            <p className="mt-8 text-zinc-400 text-lg max-w-xl leading-relaxed">
              Luksusowa strona dla studia auto detailingu, zaprojektowana pod
              klientów premium, rezerwacje usług i mocny wizualny efekt.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <a
                href="#booking"
                className="px-8 py-4 rounded-2xl bg-yellow-400 text-black font-bold hover:scale-105 transition"
              >
                Umów wizytę
              </a>

              <a
                href="#services"
                className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition"
              >
                Zobacz usługi
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[40px] border border-white/10 bg-zinc-900 p-6 shadow-2xl">
              <div className="h-[480px] rounded-[32px] bg-gradient-to-br from-zinc-800 via-black to-yellow-950 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-8xl">🏎️</p>
                  <p className="mt-6 text-zinc-400">Luxury Car Visual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-28">
        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">
          Usługi
        </p>

        <h2 className="text-4xl lg:text-6xl font-black mt-4">
          Detailing klasy premium.
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {[
            ["Detailing zewnętrzny", "Mycie premium, dekontaminacja lakieru i zabezpieczenie powłoką."],
            ["Korekta lakieru", "Usuwanie mikrorys i przywrócenie głębi koloru auta."],
            ["Detailing wnętrza", "Czyszczenie, impregnacja i pełna renowacja wnętrza pojazdu."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-zinc-900 border border-white/10 rounded-[28px] p-8 hover:-translate-y-2 hover:border-yellow-400/40 transition"
            >
              <div className="text-yellow-400 text-3xl mb-8">✦</div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-zinc-400 mt-4 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-8 text-center">
          {[
            ["250+", "zrealizowanych aut"],
            ["5.0", "średnia opinii"],
            ["24h", "szybka wycena"],
          ].map(([number, label]) => (
            <div key={label}>
              <p className="text-5xl font-black text-yellow-400">{number}</p>
              <p className="text-zinc-400 mt-3">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-[36px] bg-gradient-to-br from-zinc-800 to-black border border-white/10 h-[420px] flex items-center justify-center">
            <p className="text-zinc-500">Before / After Preview</p>
          </div>

          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">
              Efekt
            </p>

            <h2 className="text-4xl lg:text-6xl font-black mt-4">
              Strona, która sprzedaje prestiż.
            </h2>

            <p className="text-zinc-400 mt-6 leading-relaxed text-lg">
              Projekt łączy ciemny, luksusowy design z mocnym CTA, prostym
              układem usług i sekcją rezerwacji, dzięki czemu klient szybko
              wie, co może zamówić.
            </p>
          </div>
        </div>
      </section>

      <section id="booking" className="max-w-7xl mx-auto px-6 py-28">
        <div className="rounded-[40px] bg-yellow-400 text-black p-10 lg:p-20 text-center">
          <h2 className="text-4xl lg:text-6xl font-black">
            Zarezerwuj detailing premium
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-black/70 text-lg">
            Wybierz usługę, zostaw kontakt i otrzymaj darmową wycenę dla swojego auta.
          </p>

          <button className="mt-10 px-10 py-4 rounded-2xl bg-black text-white font-bold hover:scale-105 transition">
            Umów wizytę
          </button>
        </div>
      </section>
    </main>
  );
}