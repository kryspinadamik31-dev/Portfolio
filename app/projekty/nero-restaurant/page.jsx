"use client";

import { useEffect } from "react";
import Link from "next/link";
import "./style.css";

export default function NeroRestaurantPage() {
  useEffect(() => {
    const items = document.querySelectorAll(".nero-reveal");

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

  const menu = [
    ["Truffle Tagliatelle", "Makaron, krem truflowy, parmezan, oliwa ziołowa", "49 zł"],
    ["Beef Nero", "Polędwica wołowa, demi-glace, puree selerowe, warzywa", "89 zł"],
    ["Salmon Royale", "Łosoś, sos cytrynowy, risotto szafranowe", "72 zł"],
    ["Burrata Classica", "Burrata, pomidory, pesto bazyliowe, focaccia", "42 zł"],
    ["Chocolate Noir", "Mus czekoladowy, maliny, kruszonka migdałowa", "34 zł"],
    ["Nero Spritz", "Autorski koktajl na bazie prosecco i cytrusów", "31 zł"],
  ];

  return (
    <main className="nero-page">
      <header className="nero-navbar">
        <Link href="/projekty" className="nero-back">
          ← Portfolio
        </Link>

        <div className="nero-logo">NERO</div>

        <nav>
          <a href="#about" className="nero-nav-link">O nas</a>
          <a href="#menu" className="nero-nav-link">Menu</a>
          <a href="#gallery" className="nero-nav-link">Galeria</a>
          <a href="#reserve" className="nero-nav-link">Rezerwacja</a>
        </nav>
      </header>

      <section className="nero-hero">
        <div className="nero-hero-content nero-reveal">
          <p className="nero-eyebrow">Fine Dining Restaurant</p>

          <h1>Smak, klimat i wieczór, który zostaje w pamięci.</h1>

          <p>
            NERO to elegancka restauracja premium, która łączy autorską kuchnię,
            nastrojowe wnętrze i obsługę na najwyższym poziomie.
          </p>

          <div className="nero-actions">
            <a href="#reserve" className="nero-btn nero-primary nero-scroll">
              Zarezerwuj stolik
            </a>

            <a href="#menu" className="nero-btn nero-secondary nero-scroll">
              Zobacz menu
            </a>
          </div>
        </div>

        <div className="nero-hours nero-reveal">
          <span>Godziny otwarcia</span>
          <strong>12:00–23:00</strong>
          <p>poniedziałek — niedziela</p>
        </div>
      </section>

      <section className="nero-section nero-about" id="about">
        <div className="nero-reveal">
          <p className="nero-eyebrow nero-gold">O restauracji</p>
          <h2>Nowoczesna kuchnia w eleganckim wydaniu.</h2>
        </div>

        <div className="nero-about-text nero-reveal">
          <p>
            Tworzymy miejsce, w którym kolacja jest czymś więcej niż posiłkiem.
            Każde danie opiera się na jakościowych składnikach, sezonowości i
            dopracowanej prezentacji.
          </p>

          <p>
            NERO sprawdzi się na romantyczną kolację, spotkanie biznesowe,
            urodziny oraz wieczór z przyjaciółmi.
          </p>
        </div>
      </section>

      <section className="nero-stats">
        {[
          ["5.0", "ocena gości"],
          ["40+", "autorskich dań"],
          ["120", "miejsc w restauracji"],
        ].map(([number, label]) => (
          <div className="nero-stat nero-reveal" key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="nero-section nero-cuisine">
        <div className="nero-section-head nero-reveal">
          <p className="nero-eyebrow nero-gold">Nasza kuchnia</p>
          <h2>Elegancja, sezonowość i smak.</h2>
          <p>
            Menu NERO zostało stworzone tak, aby łączyć klasyczne techniki z
            nowoczesnym podejściem do podania.
          </p>
        </div>

        <div className="nero-cards">
          {[
            ["Autorskie dania", "Nowoczesna interpretacja kuchni europejskiej."],
            ["Sezonowe składniki", "Menu dopasowane do najlepszych produktów sezonu."],
            ["Eleganckie wnętrze", "Idealne miejsce na kolację, randkę lub spotkanie firmowe."],
          ].map(([title, desc]) => (
            <article className="nero-card nero-reveal" key={title}>
              <span>✦</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="nero-section nero-menu" id="menu">
        <div className="nero-section-head nero-reveal">
          <p className="nero-eyebrow nero-gold">Menu</p>
          <h2>Wybrane pozycje z karty.</h2>
        </div>

        <div className="nero-menu-list">
          {menu.map(([name, desc, price]) => (
            <div className="nero-menu-item nero-reveal" key={name}>
              <div>
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
              <strong>{price}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="nero-section nero-gallery" id="gallery">
        <div className="nero-section-head nero-reveal">
          <p className="nero-eyebrow nero-gold">Galeria</p>
          <h2>Klimat, który sprzedaje doświadczenie.</h2>
        </div>

        <div className="nero-gallery-grid">
          {[
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1200&auto=format&fit=crop",
          ].map((img, index) => (
            <div
              className={`nero-gallery-item nero-reveal ${
                index === 0 ? "large" : ""
              }`}
              key={img}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </section>

      <section className="nero-section nero-chef">
        <div className="nero-chef-card nero-reveal">
          <div>
            <p className="nero-eyebrow nero-gold">Szef kuchni</p>
            <h2>Chef Marco Bellini</h2>
            <p>
              Łączy włoską precyzję, francuskie techniki i lokalne składniki.
              Jego kuchnia jest prosta w odbiorze, ale dopracowana w każdym
              detalu.
            </p>
          </div>

          <div className="nero-chef-image" />
        </div>
      </section>

      <section className="nero-section nero-opinions">
        <div className="nero-section-head nero-reveal">
          <p className="nero-eyebrow nero-gold">Opinie</p>
          <h2>Goście wracają dla smaku i atmosfery.</h2>
        </div>

        <div className="nero-opinion-grid">
          {[
            ["★★★★★", "Piękne wnętrze, świetna obsługa i naprawdę wyjątkowe jedzenie.", "Anna"],
            ["★★★★★", "Idealne miejsce na kolację biznesową. Wszystko dopięte na ostatni guzik.", "Marek"],
            ["★★★★★", "NERO ma klimat restauracji premium, ale bez sztuczności. Polecam.", "Katarzyna"],
          ].map(([stars, text, author]) => (
            <div className="nero-opinion nero-reveal" key={author}>
              <span>{stars}</span>
              <p>“{text}”</p>
              <strong>{author}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="nero-reserve" id="reserve">
        <div className="nero-reserve-inner">
          <div className="nero-reveal">
            <p className="nero-eyebrow">Rezerwacja</p>
            <h2>Zarezerwuj stolik w NERO.</h2>
            <p>
              Zaplanuj kolację, spotkanie biznesowe lub uroczystość. Skontaktuj
              się z nami, a przygotujemy idealne miejsce.
            </p>

            <div className="nero-contact-details">
              <a href="tel:600000000">600 000 000</a>
              <a href="mailto:rezerwacje@nero.pl">rezerwacje@nero.pl</a>
              <span>ul. Nowoczesna 12, Warszawa</span>
            </div>
          </div>

          <form className="nero-form nero-reveal">
            <input type="text" placeholder="Imię i nazwisko" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Telefon" />
            <input type="text" placeholder="Data i godzina" />
            <textarea placeholder="Liczba osób / dodatkowe informacje" />
            <button type="submit">Wyślij rezerwację</button>
          </form>
        </div>
      </section>

      <footer className="nero-footer">
        <p>© 2026 NERO Restaurant · Projekt demo wykonany przez NextByte</p>
      </footer>
    </main>
  );
}