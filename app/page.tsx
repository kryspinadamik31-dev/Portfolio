"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PortfolioWebsite() {
  const [showPopup, setShowPopup] = useState(false);

  const projects = [
    {
      title: "Detailing Studio",
      desc: "Nowoczesna strona dla studia auto detailingu z animacjami i formularzem kontaktowym.",
      href: "/projekty/black-diamond-detailing",
    },
    {
      title: "Restaurant Landing",
      desc: "Elegancki landing page dla restauracji premium z rezerwacją online.",
      href: "/projekty/nero-restaurant",
    },
    {
      title: "Construction Company",
      desc: "Profesjonalna strona firmy budowlanej nastawiona na pozyskiwanie klientów.",
      href: "/projekty",
    },
  ];

  useEffect(() => {
  const closed = sessionStorage.getItem("nextbytePopupClosed");

  if (closed) return;

  let timeout;

  function handleVisibilityChange() {
    if (document.visibilityState === "hidden") {
      timeout = setTimeout(() => {
        setShowPopup(true);
      }, 20000);
    }

    if (document.visibilityState === "visible") {
      clearTimeout(timeout);
    }
  }

  document.addEventListener("visibilitychange", handleVisibilityChange);

  return () => {
    clearTimeout(timeout);
    document.removeEventListener(
      "visibilitychange",
      handleVisibilityChange
    );
  };
}, []);

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
              <div className="h-64 bg-black p-4">
                <div className="h-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 group-hover:scale-[1.03] transition duration-500">
                  <div className="h-8 bg-zinc-900 border-b border-white/10 flex items-center gap-2 px-4">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>

                  <div className="h-full bg-gradient-to-br from-zinc-800 via-black to-zinc-950 p-5">
                    <div className="h-4 w-24 rounded-full bg-white/20 mb-5"></div>
                    <div className="h-8 w-3/4 rounded-xl bg-white/30 mb-4"></div>
                    <div className="h-3 w-full rounded bg-white/10 mb-2"></div>
                    <div className="h-3 w-2/3 rounded bg-white/10 mb-6"></div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-20 rounded-xl bg-white/10"></div>
                      <div className="h-20 rounded-xl bg-white/10"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="text-zinc-400 mt-4 leading-relaxed text-sm">
                  {project.desc}
                </p>

                <Link
                  href={project.href}
                  className="mt-8 inline-block px-5 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
                >
                  Live Demo
                </Link>
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

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-md px-5">
          <div className="relative w-full max-w-[520px] rounded-[28px] bg-white text-black border-t-4 border-zinc-900 p-8 md:p-10 text-center shadow-2xl animate-[popupIn_.35s_ease]">
            <button
              onClick={closePopup}
              className="absolute top-4 right-5 text-3xl text-zinc-400 hover:text-black transition"
              aria-label="Zamknij popup"
            >
              ×
            </button>

            <p className="uppercase tracking-[0.3em] text-xs font-black text-zinc-500 mb-4">
              Zanim wyjdziesz
            </p>

            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              Masz minutę? Odezwij się.
            </h2>

            <p className="text-zinc-600 mt-4 leading-relaxed">
              Wstępna rozmowa jest bezpłatna. Wybierz wygodny kontakt,
              odpowiem osobiście.
            </p>

            <a
              href="tel:882684053"
              className="mt-7 flex items-center justify-center gap-3 w-full rounded-2xl bg-black text-white py-5 font-bold hover:scale-[1.02] transition"
            >
              ☎ Zadzwoń, 882 684 053
            </a>

            <div className="my-6 flex items-center gap-4 text-zinc-400 text-sm italic">
              <span className="h-px flex-1 bg-zinc-200"></span>
              albo
              <span className="h-px flex-1 bg-zinc-200"></span>
            </div>

            <a
              href="https://wa.me/48882684053"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full rounded-2xl border-2 border-green-500 text-green-700 py-5 font-bold hover:bg-green-50 transition"
            >
              Napisz na WhatsApp
            </a>

            <Link
              href="/kontakt"
              onClick={closePopup}
              className="mt-4 block w-full rounded-2xl border border-zinc-200 py-4 font-semibold text-zinc-700 hover:bg-zinc-100 transition"
            >
              Przejdź do formularza
            </Link>

            <small className="block mt-6 text-zinc-500">
              Pn–Pt 9:00–19:00 · Rozmowa bez zobowiązań
            </small>
          </div>

          <style jsx>{`
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
        </div>
      )}
    </div>
  );
}