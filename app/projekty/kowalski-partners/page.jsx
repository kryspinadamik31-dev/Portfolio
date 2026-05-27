"use client";

import { useEffect } from "react";
import Link from "next/link";
import "./style.css";

export default function KowalskiPartnersPage() {
  useEffect(() => {
    const items = document.querySelectorAll(".kp-reveal");

    function reveal() {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 90) {
          item.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <main className="kp-page">
      <header className="kp-navbar">
        <div className="kp-logo">
          Kowalski<span>&Partners</span>
        </div>

        <nav>
          <a href="#services">Specjalizacje</a>
          <a href="#about">O kancelarii</a>
          <a href="#process">Proces</a>
          <a href="#contact">Kontakt</a>
        </nav>

        <Link href="/projekty" className="kp-nav-btn">
          Powrót
        </Link>
      </header>

      <section className="kp-hero">
        <div className="kp-hero-content kp-reveal">
          <p className="kp-eyebrow">Kancelaria prawna dla biznesu</p>

          <h1>Nowoczesne wsparcie prawne dla firm.</h1>

          <p>
            Pomagamy przedsiębiorcom podejmować bezpieczne decyzje, chronić
            interesy firmy i sprawnie rozwiązywać problemy prawne.
          </p>

          <div className="kp-hero-buttons">
            <a href="#contact" className="kp-btn kp-primary">
              Umów konsultację
            </a>

            <a href="#services" className="kp-btn kp-secondary">
              Zobacz specjalizacje
            </a>
          </div>
        </div>

        <div className="kp-hero-card kp-reveal">
          <p>Skuteczność</p>
          <strong>98%</strong>
          <span>spraw zakończonych pozytywnie</span>
        </div>
      </section>

      <section className="kp-section kp-intro" id="about">
        <div className="kp-reveal">
          <p className="kp-eyebrow kp-blue">O kancelarii</p>
          <h2>Prawo podane jasno, konkretnie i biznesowo.</h2>
        </div>

        <p className="kp-reveal">
          Kowalski & Partners to kancelaria łącząca doświadczenie prawne z
          praktycznym podejściem do biznesu. Skupiamy się na rozwiązaniach,
          które są zrozumiałe, szybkie i realnie wspierają rozwój firm.
        </p>
      </section>

      <section className="kp-section" id="services">
        <div className="kp-center kp-reveal">
          <p className="kp-eyebrow kp-blue">Specjalizacje</p>
          <h2>Obszary, w których pomagamy.</h2>
        </div>

        <div className="kp-services">
          {[
            ["Prawo gospodarcze", "Obsługa spółek, umowy handlowe, zabezpieczanie transakcji i bieżące doradztwo."],
            ["Prawo pracy", "Umowy, regulaminy, spory pracownicze i wsparcie działów HR."],
            ["RODO i compliance", "Audyt zgodności, dokumentacja, procedury i bezpieczeństwo danych."],
            ["Spory sądowe", "Reprezentacja w sporach gospodarczych oraz negocjacje przedsądowe."],
          ].map(([title, desc]) => (
            <div className="kp-service kp-reveal" key={title}>
              <span>§</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="kp-stats">
        {[
          ["12+", "lat doświadczenia"],
          ["240+", "obsłużonych firm"],
          ["98%", "skuteczności"],
        ].map(([number, label]) => (
          <div className="kp-stat kp-reveal" key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="kp-section kp-process" id="process">
        <div className="kp-center kp-reveal">
          <p className="kp-eyebrow kp-blue">Proces współpracy</p>
          <h2>Prosto, przejrzyście, bez chaosu.</h2>
        </div>

        <div className="kp-timeline">
          {[
            "Krótka analiza problemu",
            "Propozycja rozwiązania",
            "Wycena i zakres współpracy",
            "Realizacja i bieżące wsparcie",
          ].map((step, index) => (
            <div className="kp-step kp-reveal" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step}
            </div>
          ))}
        </div>
      </section>

      <section className="kp-section kp-testimonials">
        <div className="kp-center kp-reveal">
          <p className="kp-eyebrow kp-blue">Opinie</p>
          <h2>Zaufanie klientów biznesowych.</h2>
        </div>

        <div className="kp-opinions">
          {[
            ["Bardzo konkretna obsługa i jasne wyjaśnienia. W końcu kancelaria, która mówi językiem biznesu.", "CEO, firma technologiczna"],
            ["Szybka analiza umów i świetny kontakt. Polecam każdej firmie, która chce mieć porządek prawny.", "Właściciel, e-commerce"],
          ].map(([text, author]) => (
            <div className="kp-opinion kp-reveal" key={author}>
              <div className="kp-stars">★★★★★</div>
              <p>“{text}”</p>
              <strong>{author}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="kp-contact" id="contact">
        <div className="kp-contact-box kp-reveal">
          <p className="kp-eyebrow kp-blue">Kontakt</p>

          <h2>Potrzebujesz wsparcia prawnego?</h2>

          <p>
            Umów konsultację i sprawdź, jak możemy zabezpieczyć interesy Twojej
            firmy.
          </p>

          <form>
            <input type="text" placeholder="Imię i nazwisko" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Nazwa firmy" />
            <textarea placeholder="Opisz krótko sprawę" />
            <button type="submit">Wyślij zapytanie</button>
          </form>
        </div>
      </section>
    </main>
  );
}