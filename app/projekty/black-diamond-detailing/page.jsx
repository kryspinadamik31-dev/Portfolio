"use client";

import { useEffect } from "react";
import Link from "next/link";
import "./style.css";

export default function BlackDiamondDetailingPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    function revealOnScroll() {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight - 80) {
          el.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <main className="bd-page">
      <header className="bd-navbar">
        <div className="bd-logo">
          BLACK<span>DIAMOND</span>
        </div>

        <nav>
          <a href="#services">Usługi</a>
          <a href="#benefits">Korzyści</a>
          <a href="#packages">Pakiety</a>
          <a href="#contact">Kontakt</a>
        </nav>

        <Link href="/projekty" className="bd-nav-btn">
          Powrót
        </Link>
      </header>

      <section className="bd-hero">
        <div className="bd-hero-content reveal">
          <p className="bd-eyebrow">Premium Auto Detailing</p>

          <h1>Powłoka ceramiczna dla Twojego auta</h1>

          <p>
            Zabezpiecz lakier, podbij głębię koloru i nadaj karoserii efekt
            szkła. Profesjonalna ochrona lakieru klasy premium.
          </p>

          <div className="bd-hero-buttons">
            <a href="#contact" className="bd-btn bd-primary">
              Darmowa wycena
            </a>

            <a href="#packages" className="bd-btn bd-secondary">
              Zobacz pakiety
            </a>
          </div>
        </div>
      </section>

      <section className="bd-section bd-split" id="services">
        <div className="reveal">
          <p className="bd-eyebrow bd-gold">Dlaczego warto?</p>

          <h2>Ochrona, połysk i łatwiejsze mycie.</h2>

          <p>
            Powłoka ceramiczna tworzy twardą, hydrofobową warstwę ochronną,
            która zabezpiecza lakier przed zabrudzeniami, promieniowaniem UV,
            solą drogową i mikro zarysowaniami.
          </p>
        </div>

        <div className="bd-cards">
          {[
            ["01", "Efekt szkła", "Wyraźnie głębszy kolor i mocny połysk lakieru."],
            ["02", "Hydrofobowość", "Woda i brud trudniej osadzają się na karoserii."],
            ["03", "Długotrwała ochrona", "Pakiety ochronne od 2 do 8 lat trwałości."],
          ].map(([number, title, desc]) => (
            <div className="bd-card reveal" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bd-stats">
        {[
          ["9H", "twardość powłoki"],
          ["8 lat", "maksymalna ochrona"],
          ["5.0", "ocena klientów"],
        ].map(([number, label]) => (
          <div className="bd-stat reveal" key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="bd-section" id="benefits">
        <div className="bd-center reveal">
          <p className="bd-eyebrow bd-gold">Black Diamond Detailing</p>

          <h2>Co otrzymujesz?</h2>

          <p>
            Kompleksowe przygotowanie auta, korektę lakieru oraz aplikację
            powłoki z dbałością o każdy detal.
          </p>
        </div>

        <div className="bd-benefits-grid">
          {[
            "Gwarancja na powłokę",
            "Certyfikat wykonania usługi",
            "Profesjonalna korekta lakieru",
            "Ochrona przed UV i solą",
            "Łatwiejsze mycie auta",
            "Efekt premium na lata",
          ].map((benefit) => (
            <div className="bd-benefit reveal" key={benefit}>
              ✓ {benefit}
            </div>
          ))}
        </div>
      </section>

      <section className="bd-section bd-packages" id="packages">
        <div className="bd-center reveal">
          <p className="bd-eyebrow bd-gold">Pakiety</p>
          <h2>Wybierz poziom ochrony</h2>
        </div>

        <div className="bd-package-grid">
          <div className="bd-package reveal">
            <h3>Quartz Protect</h3>
            <p className="bd-duration">2 lata ochrony</p>
            <ul>
              <li>Powłoka kwarcowa</li>
              <li>Podstawowa korekta lakieru</li>
              <li>Efekt hydrofobowy</li>
            </ul>
            <a href="#contact">Zapytaj o cenę</a>
          </div>

          <div className="bd-package bd-featured reveal">
            <div className="bd-badge">Najpopularniejsze</div>
            <h3>Ceramic Pro</h3>
            <p className="bd-duration">5 lat ochrony</p>
            <ul>
              <li>Powłoka ceramiczna 9H</li>
              <li>Korekta jedno/dwuetapowa</li>
              <li>Ochrona UV, sól, brud</li>
            </ul>
            <a href="#contact">Wybierz pakiet</a>
          </div>

          <div className="bd-package reveal">
            <h3>Diamond Shield</h3>
            <p className="bd-duration">8 lat ochrony</p>
            <ul>
              <li>Wielowarstwowa ceramika</li>
              <li>Pełna korekta lakieru</li>
              <li>Najwyższy połysk i trwałość</li>
            </ul>
            <a href="#contact">Zapytaj o cenę</a>
          </div>
        </div>
      </section>

      <section className="bd-section bd-process">
        <div className="bd-center reveal">
          <p className="bd-eyebrow bd-gold">Proces</p>
          <h2>Jak wygląda aplikacja?</h2>
        </div>

        <div className="bd-timeline">
          {[
            "Mycie detailingowe",
            "Dekontaminacja lakieru",
            "Korekta lakieru",
            "Odtłuszczenie powierzchni",
            "Aplikacja powłoki",
            "Odbiór auta i zalecenia",
          ].map((step, index) => (
            <div className="bd-step reveal" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step}
            </div>
          ))}
        </div>
      </section>

      <section className="bd-contact" id="contact">
        <div className="bd-contact-box reveal">
          <p className="bd-eyebrow bd-gold">Kontakt</p>

          <h2>Umów darmową wycenę</h2>

          <p>Zostaw kontakt, a przygotujemy ofertę zabezpieczenia auta.</p>

          <form>
            <input type="text" placeholder="Imię i nazwisko" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Telefon" />
            <textarea placeholder="Model auta i zakres usługi" />
            <button type="submit">Wyślij zapytanie</button>
          </form>
        </div>
      </section>
    </main>
  );
}