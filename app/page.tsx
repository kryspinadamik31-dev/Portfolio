/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PortfolioWebsite() {
  const [showPopup, setShowPopup] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
      title: "Kowalski & Partners",
      desc: "Profesjonalna strona kancelarii prawnej nastawiona na zaufanie i kontakt z klientem.",
      href: "/projekty/kowalski-partners",
    },
  ];

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;

      if (docHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      setScrollProgress((scrollTop / docHeight) * 100);
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
    const closed = sessionStorage.getItem("nextbytePopupClosed");

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
    sessionStorage.setItem("nextbytePopupClosed", "true");
    setShowPopup(false);
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <div
        className="fixed top-0 left-0 z-[9999] h-1 bg-white transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 opacity-90" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zinc-700/20 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-40 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 mb-8">
              ⚡ Web Creator & Frontend Developer
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              Tworzymy nowoczesne strony dla firm.
            </h1>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-xl">
              Projektujemy szybkie, nowoczesne i responsywne strony internetowe,
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

          <div className="grid grid-cols-2 gap-5 reveal">
            {[
              ["🔥", "Modern UI", "Minimalistyczny i nowoczesny design."],
              ["⚡", "Fast Websites", "Szybkie strony zoptymalizowane pod SEO."],
              ["📱", "Responsive", "Idealne działanie na telefonach i tabletach."],
              ["🚀", "Premium Feel", "Strony wyglądające jak od dużych agencji."],
            ].map(([icon, title, desc], index) => (
              <div
                key={title}
                className={`bg-zinc-900/80 backdrop-blur border border-white/10 rounded-3xl p-6 h-56 flex flex-col justify-between hover:-translate-y-2 hover:border-white/30 hover:bg-zinc-800 transition duration-300 ${
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

      <section className="max-w-7xl mx-auto px-6 py-28 reveal">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
              O nas
            </p>

            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
              Pomagamy firmom budować profesjonalny wizerunek online.
            </h2>
          </div>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Tworzymy strony internetowe, które łączą nowoczesny design, szybkość
            działania oraz skuteczność biznesową. Każdy projekt jest responsywny
            i dostosowany do potrzeb klienta.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/10 reveal">
        <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
          Portfolio
        </p>

        <h2 className="text-4xl lg:text-5xl font-black mb-16">
          Wybrane projekty
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-white/10 rounded-[28px] overflow-hidden hover:border-white/30 hover:-translate-y-2 transition duration-300"
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

      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/10 reveal">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
            Technologie
          </p>

          <h2 className="text-4xl lg:text-5xl font-black">
            Stack, którego używamy
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

      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/10 reveal">
        <div className="bg-zinc-900 border border-white/10 rounded-[32px] p-10 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" />

          <div className="relative">
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
              Kontakt
            </p>

            <h2 className="text-4xl lg:text-6xl font-black leading-tight">
              Masz pomysł na stronę?
            </h2>

            <p className="text-zinc-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
              Napisz do nas i stwórzmy nowoczesną stronę internetową dla Twojej
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

            <div className="mt-14 pt-10 border-t border-white/10">
              <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs mb-7">
                Social media
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
                {[
                  {
                    name: "Instagram",
                    icon: "https://cdn.simpleicons.org/instagram/ffffff",
                    href: "https://instagram.com/nextbyte",
                    glow: "hover:shadow-pink-500/20",
                  },
                  {
                    name: "TikTok",
                    icon: "https://cdn.simpleicons.org/tiktok/ffffff",
                    href: "https://tiktok.com/@nextbyte",
                    glow: "hover:shadow-white/20",
                  },
                  {
                    name: "Facebook",
                    icon: "https://cdn.simpleicons.org/facebook/ffffff",
                    href: "https://facebook.com/nextbyte",
                    glow: "hover:shadow-blue-500/20",
                  },
                  {
                    name: "GitHub",
                    icon: "https://cdn.simpleicons.org/github/ffffff",
                    href: "https://github.com/kryspinadamik31-dev",
                    glow: "hover:shadow-zinc-500/20",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-500 shadow-2xl ${social.glow}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                    <div className="relative flex flex-col items-center justify-center">
                      <img
                        src={social.icon}
                        alt={social.name}
                        className="w-10 h-10 group-hover:scale-125 transition-transform duration-500"
                      />

                      <span className="mt-4 font-semibold text-zinc-300 group-hover:text-white transition">
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

      <footer className="border-t border-white/10 py-8 px-6 text-center text-zinc-500 text-sm">
        © 2026 NextByte — Web Creator
      </footer>

      <Link
        href="/kontakt"
        className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-3 px-5 py-4 rounded-2xl bg-white text-black font-bold shadow-2xl hover:scale-105 transition"
      >
        ✉️ Darmowa wycena
      </Link>

      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-md px-5">
          <div className="relative w-full max-w-[520px] rounded-[28px] bg-white text-black border-t-4 border-zinc-900 p-8 md:p-10 text-center shadow-2xl animate-[popupIn_.35s_ease]">
            <button
              type="button"
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
    </div>
  );
}