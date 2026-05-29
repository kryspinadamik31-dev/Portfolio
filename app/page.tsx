/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NyroxWebsite() {
  const [showPopup, setShowPopup] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const projects = [
    {
      title: "Black Diamond Detailing",
      desc: "Strona premium dla studia detailingu z mocnym visualem, ofertą usług i formularzem kontaktowym.",
      href: "/projekty/black-diamond-detailing",
    },
    {
      title: "NERO Restaurant",
      desc: "Elegancka strona restauracji z galerią, menu, sekcją szefa kuchni i rezerwacją stolika.",
      href: "/projekty/nero-restaurant",
    },
    {
      title: "Kowalski & Partners",
      desc: "Profesjonalna strona kancelarii prawnej nastawiona na zaufanie i pozyskiwanie klientów.",
      href: "/projekty/kowalski-partners",
    },
  ];

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight <= 0 ? 0 : (scrollTop / docHeight) * 100);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    function revealOnScroll() {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight - 90) {
          el.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  useEffect(() => {
    const closed = sessionStorage.getItem("nyroxPopupClosed");
    if (closed) return;

    let timeout: ReturnType<typeof setTimeout> | null = null;

    function handleVisibilityChange() {
      if (document.visibilityState === "hidden") {
        timeout = setTimeout(() => {
          setShowPopup(true);
        }, 20000);
      }

      if (document.visibilityState === "visible" && timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (timeout) clearTimeout(timeout);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  function closePopup() {
    sessionStorage.setItem("nyroxPopupClosed", "true");
    setShowPopup(false);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#030005] text-white font-sans">
      <div
        className="fixed left-0 top-0 z-[9999] h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-white transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(217,70,239,.18),transparent_30%),linear-gradient(135deg,#030005,#08010f_45%,#000)]" />
        <div className="absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[150px]" />
        <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[130px]" />

        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
          <div className="flex items-center gap-3">
            <img
              src="nyrox-logo.png"
              alt="Nyrox logo"
              className="h-11 w-11 rounded-2xl border border-white/10 object-cover shadow-[0_0_30px_rgba(168,85,247,.35)]"
            />

            <div>
              <p className="text-lg font-black tracking-[0.25em]">NYROX</p>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Web Studio
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/projekty"
              className="rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-purple-400/40 hover:bg-white/5 hover:text-white"
            >
              Projekty
            </Link>

            <Link
              href="/kontakt"
              className="rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:scale-105"
            >
              Darmowa wycena
            </Link>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-28 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:pb-40 lg:pt-28">
          <div className="reveal">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_18px_rgba(168,85,247,.9)]" />
              Premium Web Design & Development
            </div>

            <h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
              Websites that{" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-white bg-clip-text text-transparent">
                convert
              </span>
              .
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Nyrox projektuje nowoczesne strony internetowe dla firm, które
              wyglądają premium, działają szybko i realnie pomagają zdobywać
              klientów.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projekty"
                className="rounded-2xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-8 py-4 font-bold text-white shadow-[0_0_40px_rgba(168,85,247,.35)] transition hover:scale-105"
              >
                Zobacz realizacje
              </Link>

              <Link
                href="/kontakt"
                className="rounded-2xl border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-purple-400/40 hover:bg-white/10"
              >
                Umów konsultację
              </Link>
            </div>

            <div className="mt-14 grid max-w-xl grid-cols-3 gap-4">
              {[
                ["3+", "projekty demo"],
                ["100%", "responsive"],
                ["SEO", "ready"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
                >
                  <p className="text-2xl font-black text-white">{number}</p>
                  <p className="mt-1 text-sm text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative">
            <div className="absolute inset-0 rounded-[44px] bg-purple-500/20 blur-[90px]" />

            <div className="relative rounded-[44px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black">
                <img
                  src="nyrox-logo.png"
                  alt="Nyrox branding"
                  className="aspect-square w-full object-cover"
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                {[
                  ["Design", "Premium UI"],
                  ["Speed", "Fast loading"],
                  ["Mobile", "Perfect UX"],
                  ["Brand", "Modern identity"],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-black/40 p-4"
                  >
                    <p className="font-bold">{title}</p>
                    <p className="mt-1 text-sm text-zinc-500">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-400">
              Nyrox Studio
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Strony internetowe, które wyglądają jak marka premium.
            </h2>
          </div>

          <p className="text-lg leading-relaxed text-zinc-400">
            Nie robimy przypadkowych szablonów. Budujemy strony z mocnym
            pierwszym wrażeniem, czytelnym układem, szybkim działaniem i
            strukturą nastawioną na kontakt od klienta.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            [
              "01",
              "Strategia",
              "Układ strony dopasowany do branży, klienta i celu biznesowego.",
            ],
            [
              "02",
              "Design",
              "Nowoczesny visual, animacje, sekcje premium i profesjonalny branding.",
            ],
            [
              "03",
              "Wdrożenie",
              "Next.js, Vercel, SEO, responsywność i szybkie ładowanie strony.",
            ],
          ].map(([number, title, desc]) => (
            <div
              key={title}
              className="group rounded-[32px] border border-white/10 bg-zinc-950/80 p-8 transition duration-500 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-[0_0_60px_rgba(168,85,247,.12)]"
            >
              <p className="text-sm font-black text-purple-400">{number}</p>
              <h3 className="mt-10 text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-relaxed text-zinc-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal border-y border-white/10 bg-white/[0.02] py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-6">
          {[
            "NEXT.JS",
            "REACT",
            "TAILWIND",
            "SEO",
            "VERCEL",
            "UI/UX",
            "WORDPRESS",
            "WEB DESIGN",
          ].map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-white/10 bg-black px-5 py-3 text-sm font-bold tracking-widest text-zinc-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      <section className="reveal mx-auto max-w-7xl px-6 py-28">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-400">
              Portfolio
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              Projekty pokazujące styl Nyrox.
            </h2>
          </div>

          <Link
            href="/projekty"
            className="w-fit rounded-2xl border border-white/10 px-6 py-4 font-semibold text-zinc-300 transition hover:border-purple-400/40 hover:bg-white/5 hover:text-white"
          >
            Wszystkie projekty →
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-[34px] border border-white/10 bg-zinc-950 transition duration-500 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-[0_0_70px_rgba(168,85,247,.14)]"
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
                    <div className="mb-6 h-4 w-24 rounded-full bg-purple-400/40" />
                    <div className="mb-4 h-9 w-4/5 rounded-2xl bg-white/25" />
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
                <p className="mb-3 text-sm text-purple-400">
                  Case study 0{index + 1}
                </p>

                <h3 className="text-2xl font-black">{project.title}</h3>

                <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                  {project.desc}
                </p>

                <Link
                  href={project.href}
                  className="mt-8 inline-flex rounded-2xl bg-white px-5 py-3 font-bold text-black transition hover:scale-105"
                >
                  Zobacz projekt
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal mx-auto max-w-7xl px-6 py-28">
        <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-gradient-to-br from-zinc-950 via-black to-purple-950/40 p-10 text-center md:p-20">
          <div className="absolute -top-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px]" />

          <div className="relative">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-400">
              Kontakt
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Masz pomysł na stronę?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Napisz do nas i stwórzmy stronę, która wygląda profesjonalnie,
              działa szybko i pomaga zdobywać klientów.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakt"
                className="rounded-2xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-8 py-4 font-bold text-white transition hover:scale-105"
              >
                Umów bezpłatną konsultację
              </Link>

              <a
                href="mailto:kontakt@nyrox.pl"
                className="rounded-2xl border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-purple-400/40 hover:bg-white/10"
              >
                kontakt@nyrox.pl
              </a>
            </div>

            <div className="mt-14 border-t border-white/10 pt-10">
              <p className="mb-7 text-xs uppercase tracking-[0.35em] text-zinc-500">
                Social media
              </p>

              <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 md:grid-cols-4">
                {[
                  {
                    name: "Instagram",
                    icon: "https://cdn.simpleicons.org/instagram/ffffff",
                    href: "https://instagram.com/nyrox",
                    glow: "hover:shadow-pink-500/20",
                  },
                  {
                    name: "TikTok",
                    icon: "https://cdn.simpleicons.org/tiktok/ffffff",
                    href: "https://tiktok.com/@nyrox",
                    glow: "hover:shadow-white/20",
                  },
                  {
                    name: "Facebook",
                    icon: "https://cdn.simpleicons.org/facebook/ffffff",
                    href: "https://facebook.com/nyrox",
                    glow: "hover:shadow-blue-500/20",
                  },
                  {
                    name: "GitHub",
                    icon: "https://cdn.simpleicons.org/github/ffffff",
                    href: "https://github.com/nyrox",
                    glow: "hover:shadow-zinc-500/20",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-white/10 ${social.glow}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="relative flex flex-col items-center justify-center">
                      <img
                        src={social.icon}
                        alt={social.name}
                        className="h-10 w-10 transition-transform duration-500 group-hover:scale-125"
                      />

                      <span className="mt-4 font-semibold text-zinc-300 transition group-hover:text-white">
                        {social.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 Nyrox — Web Design & Development
      </footer>

      <Link
        href="/kontakt"
        className="fixed bottom-6 right-6 z-50 hidden items-center gap-3 rounded-2xl bg-white px-5 py-4 font-bold text-black shadow-2xl transition hover:scale-105 md:flex"
      >
        ✉️ Darmowa wycena
      </Link>

      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-5 backdrop-blur-md">
          <div className="relative w-full max-w-[520px] animate-[popupIn_.35s_ease] rounded-[28px] border-t-4 border-purple-500 bg-white p-8 text-center text-black shadow-2xl md:p-10">
            <button
              type="button"
              onClick={closePopup}
              className="absolute right-5 top-4 text-3xl text-zinc-400 transition hover:text-black"
              aria-label="Zamknij popup"
            >
              ×
            </button>

            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-purple-600">
              Zanim wyjdziesz
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Masz minutę? Odezwij się.
            </h2>

            <p className="mt-4 leading-relaxed text-zinc-600">
              Wstępna rozmowa jest bezpłatna. Wybierz wygodny kontakt,
              odpowiem osobiście.
            </p>

            <a
              href="tel:882684053"
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-black py-5 font-bold text-white transition hover:scale-[1.02]"
            >
              ☎ Zadzwoń, 882 684 053
            </a>

            <div className="my-6 flex items-center gap-4 text-sm italic text-zinc-400">
              <span className="h-px flex-1 bg-zinc-200" />
              albo
              <span className="h-px flex-1 bg-zinc-200" />
            </div>

            <a
              href="https://wa.me/48882684053"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-green-500 py-5 font-bold text-green-700 transition hover:bg-green-50"
            >
              Napisz na WhatsApp
            </a>

            <Link
              href="/kontakt"
              onClick={closePopup}
              className="mt-4 block w-full rounded-2xl border border-zinc-200 py-4 font-semibold text-zinc-700 transition hover:bg-zinc-100"
            >
              Przejdź do formularza
            </Link>

            <small className="mt-6 block text-zinc-500">
              Pn–Pt 9:00–19:00 · Rozmowa bez zobowiązań
            </small>
          </div>
        </div>
      )}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        .reveal {
          opacity: 0;
          transform: translateY(35px);
          transition: 0.8s ease;
          will-change: transform, opacity;
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes popupIn {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </main>
  );
}