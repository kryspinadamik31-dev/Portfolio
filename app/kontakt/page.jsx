import Link from "next/link";

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <Link
  href="/"
  className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg"
>
  <span className="text-lg">←</span>

  <span className="font-medium tracking-wide">
    Wróć na stronę główną
  </span>
</Link>

        <section className="mt-16 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
              Kontakt
            </p>

            <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight">
              Stwórzmy stronę, która zdobywa klientów.
            </h1>

            <p className="text-zinc-400 text-lg mt-6 max-w-xl leading-relaxed">
              Wypełnij formularz albo napisz bezpośrednio. Odpowiem z propozycją
              strony dopasowaną do Twojej firmy.
            </p>

            <div className="grid gap-5 mt-10">
              <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6">
                <p className="text-zinc-500 text-sm">Email</p>
                <a href="mailto:kryspinadamik31@gmail.com" className="block mt-2 text-lg font-semibold">
                  kryspinadamik31@gmail.com
                </a>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6">
                <p className="text-zinc-500 text-sm">Telefon</p>
                <a href="tel:882684053" className="block mt-2 text-lg font-semibold">
                  882 684 053
                </a>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6">
                <p className="text-zinc-500 text-sm">GitHub</p>
                <a
                  href="https://github.com/NextByte-web"
                  target="_blank"
                  className="block mt-2 text-lg font-semibold"
                >
                  NextByte-web
                </a>
              </div>
            </div>
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="bg-zinc-900 border border-white/10 rounded-[32px] p-8 lg:p-10"
          >
            <input type="hidden" name="access_key" value="657ffc26-ee39-46eb-b301-aa75487d0b6d" />
            <input type="hidden" name="subject" value="Nowe zapytanie z NextByte" />
            <input type="hidden" name="from_name" value="NextByte" />

            <h2 className="text-3xl font-black">Darmowa wycena</h2>

            <div className="mt-8 space-y-5">
              <input
                name="name"
                required
                placeholder="Imię / firma"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30 transition"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30 transition"
              />

              <input
                name="phone"
                placeholder="Telefon"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30 transition"
              />

              <select
                name="project_type"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30 transition"
              >
                <option>Strona firmowa</option>
                <option>Landing page</option>
                <option>Portfolio</option>
                <option>Sklep internetowy</option>
                <option>Odświeżenie obecnej strony</option>
              </select>

              <textarea
                name="message"
                required
                rows="5"
                placeholder="Napisz krótko, czego potrzebujesz..."
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30 transition resize-none"
              />

              <button
                type="submit"
                className="w-full px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-[1.02] transition"
              >
                Wyślij zapytanie
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}