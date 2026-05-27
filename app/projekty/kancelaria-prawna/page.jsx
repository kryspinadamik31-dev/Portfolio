import Link from "next/link";
import "./style.css";

export default function KancelariaPrawnaPage() {
  const services = [
    "Prawo rodzinne",
    "Prawo spadkowe",
    "Obsługa firm",
    "Windykacja",
    "Umowy i negocjacje",
    "Spory sądowe",
  ];

  return (
    <main className="law-page">
      <header className="law-nav">
        <Link href="/projekty" className="law-logo">
          NOVALEX
        </Link>

        <nav>
          <a href="#services">Specjalizacje</a>
          <a href="#process">Proces</a>
          <a href="#contact">Kontakt</a>
        </nav>

        <a href="#contact" className="law-nav-btn">
          Konsultacja
        </a>
      </header>

      <section className="law-hero">
        <div className="law-hero-text">
          <Link href="/projekty" className="back-link">
            ← Wróć do projektów
          </Link>

          <p className="law-eyebrow">Kancelaria prawna</p>

          <h1>Prawo, które daje spokój i konkretne rozwiązania.</h1>

          <p className="law-desc">
            Elegancka strona dla kancelarii prawnej, nastawiona na zaufanie,
            profesjonalizm i szybki kontakt z klientem.
          </p>

          <div className="law-actions">
            <a href="#contact" className="law-btn-primary">
              Umów konsultację
            </a>
            <a href="#services" className="law-btn-secondary">
              Zobacz specjalizacje
            </a>
          </div>
        </div>

        <div className="law-card">
          <span>01</span>
          <h2>Profesjonalna pomoc prawna</h2>
          <p>
            Jasna komunikacja, indywidualne podejście i strategia dopasowana do
            sprawy klienta.
          </p>
        </div>
      </section>

      <section className="law-stats">
        <div>
          <strong>12+</strong>
          <span>lat doświadczenia</span>
        </div>
        <div>
          <strong>850+</strong>
          <span>prowadzonych spraw</span>
        </div>
        <div>
          <strong>98%</strong>
          <span>zadowolonych klientów</span>
        </div>
      </section>

      <section id="services" className="law-section">
        <div className="law-section-head">
          <p className="law-eyebrow">Specjalizacje</p>
          <h2>Kompleksowa obsługa prawna.</h2>
        </div>

        <div className="law-services">
          {services.map((service, index) => (
            <div className="law-service" key={service}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service}</h3>
              <p>
                Analiza sytuacji, przygotowanie dokumentów i reprezentacja na
                każdym etapie sprawy.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="law-process">
        <div>
          <p className="law-eyebrow">Proces</p>
          <h2>Jak wygląda współpraca?</h2>
        </div>

        <div className="law-timeline">
          {[
            "Kontakt i opis sprawy",
            "Analiza dokumentów",
            "Strategia działania",
            "Reprezentacja i wsparcie",
          ].map((step, index) => (
            <div className="law-step" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="law-contact">
        <div>
          <p className="law-eyebrow">Kontakt</p>
          <h2>Potrzebujesz pomocy prawnej?</h2>
          <p>
            Zostaw wiadomość, a kancelaria skontaktuje się z Tobą w celu
            omówienia sprawy.
          </p>
        </div>

        <form>
          <input placeholder="Imię i nazwisko" />
          <input placeholder="Email" />
          <input placeholder="Telefon" />
          <textarea placeholder="Krótki opis sprawy"></textarea>
          <button type="button">Wyślij zapytanie</button>
        </form>
      </section>
    </main>
  );
}