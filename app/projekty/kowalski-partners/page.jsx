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
        <Link href="/projekty" className="kp-back">
          ← Portfolio
        </Link>

        <div className="kp-logo">
          Kowalski<span>&Partners</span>
        </div>

        <nav>
          <a href="#specializacje">Specjalizacje</a>
          <a href="#proces">Współpraca</a>
          <a href="#cennik">Konsultacja</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="kp-hero">
        <div className="kp-hero-inner">
          <div className="kp-hero-text kp-reveal">
            <p className="kp-eyebrow">Kancelaria prawna online i stacjonarnie</p>

            <h1>Prawo wyjaśnione prosto. Strategia zamiast chaosu.</h1>

            <p>
              Pomagamy osobom prywatnym i firmom przejść przez trudne sprawy
              prawne spokojnie, konkretnie i z pełnym planem działania.
            </p>

            <div className="kp-hero-actions">
              <a href="#kontakt" className="kp-btn kp-primary">
                Umów konsultację
              </a>

              <a href="#specializacje" className="kp-btn kp-secondary">
                Zobacz specjalizacje
              </a>
            </div>
          </div>

          <div className="kp-consult-card kp-reveal">
            <p>Konsultacja prawna</p>
            <strong>250 zł</strong>
            <span>online albo w kancelarii · bez pośpiechu</span>
            <a href="#kontakt">Wybierz termin</a>
          </div>
        </div>
      </section>

      <section className="kp-section kp-intro">
        <div className="kp-reveal">
          <p className="kp-eyebrow kp-blue">O kancelarii</p>
          <h2>Tysiące porad, setki spraw i jasne zasady współpracy.</h2>
        </div>

        <div className="kp-reveal">
          <p>
            Kowalski & Partners to kancelaria, która stawia na konkret:
            analizę dokumentów, realne scenariusze i przejrzyste warunki
            prowadzenia sprawy. Bez prawniczego żargonu i bez obietnic bez
            pokrycia.
          </p>

          <p>
            Pracujemy z klientami indywidualnymi oraz przedsiębiorcami — od
            pierwszej konsultacji, przez negocjacje, aż po reprezentację przed
            sądem.
          </p>
        </div>
      </section>

      <section className="kp-stats">
        {[
          ["14+", "lat doświadczenia"],
          ["800+", "udzielonych konsultacji"],
          ["300+", "spraw klientów"],
        ].map(([number, label]) => (
          <div className="kp-stat kp-reveal" key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="kp-section" id="specializacje">
        <div className="kp-section-head kp-reveal">
          <p className="kp-eyebrow kp-blue">Specjalizacje</p>
          <h2>Sprawy, w których pomagamy najczęściej.</h2>
          <p>
            Każda sprawa zaczyna się od rozmowy i oceny, czy możemy realnie
            pomóc.
          </p>
        </div>

        <div className="kp-special-grid">
          {[
            [
              "Prawo rodzinne",
              "Rozwody, alimenty, kontakty z dzieckiem, podział majątku oraz strategia procesowa.",
              "Porozmawiajmy o Twojej sytuacji",
            ],
            [
              "Spadki i zachowek",
              "Testamenty, stwierdzenie nabycia spadku, dział spadku, roszczenia o zachowek.",
              "Sprawdź możliwe rozwiązania",
            ],
            [
              "Spory z bankami",
              "Analiza umów kredytowych, klauzule niedozwolone, roszczenia konsumenckie.",
              "Przeanalizuj umowę",
            ],
            [
              "Prawnik dla firm",
              "Umowy B2B, spory z kontrahentami, windykacja i stała obsługa prawna.",
              "Zabezpiecz firmę",
            ],
            [
              "Prawo medyczne",
              "Wsparcie lekarzy, gabinetów i podmiotów leczniczych w umowach, RODO i sporach.",
              "Skonsultuj praktykę",
            ],
            [
              "Mediacje",
              "Pomoc w polubownym rozwiązaniu konfliktu bez przeciągania sprawy latami.",
              "Zapytaj o mediację",
            ],
          ].map(([title, desc, cta]) => (
            <article className="kp-special-card kp-reveal" key={title}>
              <span>§</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a href="#kontakt">{cta} →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="kp-section kp-dark" id="proces">
        <div className="kp-section-head kp-reveal">
          <p className="kp-eyebrow">Jak wygląda współpraca</p>
          <h2>Cztery kroki od kontaktu do działania.</h2>
          <p>
            Od początku wiesz, co robimy, ile to kosztuje i jaki jest kolejny
            krok.
          </p>
        </div>

        <div className="kp-process-list">
          {[
            [
              "01",
              "Krótka rozmowa",
              "Ustalamy, czy sprawa mieści się w obszarze naszej praktyki i jakie dokumenty będą potrzebne.",
            ],
            [
              "02",
              "Konsultacja właściwa",
              "Analizujemy sytuację, omawiamy możliwe scenariusze i rekomendujemy strategię.",
            ],
            [
              "03",
              "Umowa i zakres",
              "Dostajesz jasne warunki współpracy, zakres działań i sposób rozliczenia.",
            ],
            [
              "04",
              "Prowadzenie sprawy",
              "Przygotowujemy dokumenty, negocjujemy albo reprezentujemy Cię przed sądem.",
            ],
          ].map(([num, title, desc]) => (
            <div className="kp-process-item kp-reveal" key={num}>
              <span>{num}</span>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="kp-section kp-pricing" id="cennik">
        <div className="kp-pricing-card kp-reveal">
          <div>
            <p className="kp-eyebrow kp-blue">Konsultacja prawna</p>
            <h2>250 zł</h2>
            <p>
              Spotkanie online albo w kancelarii. Analiza sprawy, możliwe
              scenariusze, ryzyka i rekomendowany plan działania.
            </p>
          </div>

          <div className="kp-pricing-list">
            <p>✓ bez ukrytych kosztów</p>
            <p>✓ analiza dokumentów</p>
            <p>✓ konkretna strategia</p>
            <p>✓ wycena dalszego prowadzenia sprawy</p>
          </div>
        </div>
      </section>

      <section className="kp-section kp-faq">
        <div className="kp-section-head kp-reveal">
          <p className="kp-eyebrow kp-blue">Pytania</p>
          <h2>Najczęstsze pytania przed konsultacją.</h2>
        </div>

        <div className="kp-faq-list">
          {[
            [
              "Czy pierwsza rozmowa jest płatna?",
              "Krótka rozmowa organizacyjna jest bezpłatna. Pełna analiza sprawy odbywa się podczas konsultacji.",
            ],
            [
              "Czy można spotkać się online?",
              "Tak, konsultacje mogą odbywać się przez Google Meet, telefonicznie albo stacjonarnie.",
            ],
            [
              "Czy od razu poznam koszt prowadzenia sprawy?",
              "Po analizie dokumentów przedstawiamy zakres działań i orientacyjny koszt dalszej współpracy.",
            ],
          ].map(([q, a]) => (
            <div className="kp-faq-item kp-reveal" key={q}>
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="kp-contact" id="kontakt">
        <div className="kp-contact-inner">
          <div className="kp-reveal">
            <p className="kp-eyebrow">Kontakt</p>
            <h2>Zadzwoń albo zostaw wiadomość.</h2>
            <p>
              Najkrótsza droga do odpowiedzi to krótka rozmowa. Ustalimy, czy
              możemy pomóc i jaki będzie kolejny krok.
            </p>

            <div className="kp-contact-details">
              <a href="tel:600000000">600 000 000</a>
              <a href="mailto:kontakt@kowalskipartners.pl">
                kontakt@kowalskipartners.pl
              </a>
              <span>Pon-Pt: 9:00–18:00 · Warszawa / online</span>
            </div>
          </div>

          <form className="kp-form kp-reveal">
            <input type="text" placeholder="Imię i nazwisko" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Telefon" />
            <textarea placeholder="Opisz krótko sprawę" />
            <button type="submit">Wyślij zapytanie</button>
          </form>
        </div>
      </section>

      <footer className="kp-footer">
        <p>
          © 2026 Kowalski & Partners · Projekt demo wykonany przez NextByte
        </p>
      </footer>
    </main>
  );
}