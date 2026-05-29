import Link from "next/link";

export default function KontaktPage() {
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

          <section className="mt-20 grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_18px_rgba(168,85,247,.9)]" />
                Nyrox Contact
              </div>

              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-400">
                Kontakt
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Stwórzmy stronę, która{" "}
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-white bg-clip-text text-transparent">
                  zdobywa klientów
                </span>
                .
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-400">
                Wypełnij formularz albo napisz bezpośrednio. Odpowiemy z
                propozycją strony dopasowaną do Twojej firmy, branży i celu
                biznesowego.
              </p>

              <div className="mt-10 grid gap-5">
                <div className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.06]">
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                    Email
                  </p>

                  <a
                    href="mailto:kontakt@nyrox.pl"
                    className="mt-3 block text-lg font-bold text-white transition group-hover:text-purple-300"
                  >
                    kontakt@nyrox.pl
                  </a>
                </div>

                <div className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.06]">
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                    Telefon
                  </p>

                  <a
                    href="tel:882684053"
                    className="mt-3 block text-lg font-bold text-white transition group-hover:text-purple-300"
                  >
                    882 684 053
                  </a>
                </div>

                <div className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.06]">
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/nyrox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block text-lg font-bold text-white transition group-hover:text-purple-300"
                  >
                    github.com/nyrox
                  </a>
                </div>
              </div>

              <div className="mt-10 rounded-[32px] border border-purple-400/20 bg-purple-500/10 p-6 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
                  Co otrzymasz?
                </p>

                <div className="mt-5 grid gap-3 text-zinc-300">
                  <p>✓ bezpłatną analizę pomysłu</p>
                  <p>✓ propozycję struktury strony</p>
                  <p>✓ wstępną wycenę i czas realizacji</p>
                </div>
              </div>
            </div>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="relative overflow-hidden rounded-[36px] border border-purple-400/20 bg-zinc-950/90 p-8 shadow-[0_0_80px_rgba(168,85,247,.12)] backdrop-blur-xl lg:p-10"
            >
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-500/20 blur-[90px]" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[90px]" />

              <div className="relative">
                <input
                  type="hidden"
                  name="access_key"
                  value="657ffc26-ee39-46eb-b301-aa75487d0b6d"
                />

                <input
                  type="hidden"
                  name="subject"
                  value="Nowe zapytanie z Nyrox"
                />

                <input type="hidden" name="from_name" value="Nyrox" />

                <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-400">
                  Darmowa wycena
                </p>

                <h2 className="text-3xl font-black md:text-4xl">
                  Opowiedz nam o projekcie.
                </h2>

                <p className="mt-4 leading-relaxed text-zinc-500">
                  Im więcej szczegółów podasz, tym lepiej dopasujemy propozycję
                  strony do Twojego biznesu.
                </p>

                <div className="mt-8 space-y-5">
                  <input
                    name="name"
                    required
                    placeholder="Imię / firma"
                    className="w-full rounded-2xl border border-white/10 bg-black/60 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-400/60 focus:bg-black"
                  />

                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full rounded-2xl border border-white/10 bg-black/60 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-400/60 focus:bg-black"
                  />

                  <input
                    name="phone"
                    placeholder="Telefon"
                    className="w-full rounded-2xl border border-white/10 bg-black/60 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-400/60 focus:bg-black"
                  />

                  <select
                    name="project_type"
                    className="w-full rounded-2xl border border-white/10 bg-black/60 px-5 py-4 text-white outline-none transition focus:border-purple-400/60 focus:bg-black"
                    defaultValue="Strona firmowa"
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
                    rows={5}
                    placeholder="Napisz krótko, czego potrzebujesz..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/60 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-400/60 focus:bg-black"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-7 py-4 font-bold text-white shadow-[0_0_40px_rgba(168,85,247,.25)] transition hover:scale-[1.02]"
                  >
                    Wyślij zapytanie
                  </button>

                  <p className="text-center text-sm text-zinc-600">
                    Odpowiadamy zwykle tego samego dnia.
                  </p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}