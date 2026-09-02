import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Gauge,
  ShieldCheck,
  Wallet,
  Sparkles,
  MapPin,
  Route as RouteIcon,
  Plane,
  Mail,
  Phone,
  Menu,
  X,
  Timer,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import heroImg from "@/assets/hero-supercar.jpg";
import logoAsset from "@/assets/logo-mark.png.asset.json";
import v10Asset from "@/assets/car-r8.jpg.asset.json";
import coupeAsset from "@/assets/car-m4.jpg.asset.json";
import exoticAsset from "@/assets/car-p911.jpg.asset.json";
import { sendLead } from "@/lib/send-lead";

const logoUrl = logoAsset.url;
const categoryV10 = v10Asset.url;
const categoryCoupe = coupeAsset.url;
const categoryExotic = exoticAsset.url;

/* ---------------------------------- logo ---------------------------------- */

function Logo({ size = "md" }: { size?: "md" | "sm" }) {
  return (
    <span className="flex flex-col items-center leading-none">
      <img
        src={logoUrl}
        alt="RevUp Rent"
        className={size === "md" ? "h-8 w-auto sm:h-10" : "h-8 w-auto"}
        width={990}
        height={400}
      />
      <span
        className={`mt-1 font-display font-black text-white uppercase ${
          size === "md" ? "text-[10px] tracking-[0.55em] sm:text-xs" : "text-[10px] tracking-[0.55em]"
        }`}
        style={{ textIndent: "0.55em" }}
      >
        Rent
      </span>
    </span>
  );
}


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RevUp Rent — Wynajem supercarów | Rzeszów, Sanok, Bieszczady" },
      {
        name: "description",
        content:
          "Wynajem samochodów sportowych i supercarów na Podkarpaciu. Supercary V10, sportowe coupe M/RS oraz egzotyki. Bieszczady Supercar Experience. Zapisz się na waitlistę z rabatem -10%.",
      },
      { property: "og:title", content: "RevUp Rent — Wynajem supercarów na Podkarpaciu" },
      {
        property: "og:description",
        content:
          "Poczuj prawdziwą moc na trasach Podkarpacia. Rzeszów • Sanok • Bieszczady. Premiera sezon 2026/2027.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------------------------------- data ---------------------------------- */

const CATEGORIES: {
  id: string;
  title: string;
  subtitle: string;
  img: string;
}[] = [
  {
    id: "supercar-v10",
    title: "Supercary & V10",
    subtitle: "Maksymalne emocje, bezkompromisowe osiągi i rasowy dźwięk.",
    img: categoryV10,
  },
  {
    id: "sport-coupe",
    title: "Sportowe Coupe & M / RS",
    subtitle: "Niemiecka precyzja i moc stworzona na bieszczadzkie serpentyny.",
    img: categoryCoupe,
  },
  {
    id: "exotic",
    title: "Egzotyki & Unikaty",
    subtitle: "Kolekcjonerskie perełki, których nie znajdziesz w zwykłych wypożyczalniach.",
    img: categoryExotic,
  },
];

/* --------------------------------- header --------------------------------- */

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#flota", label: "Flota" },
    { href: "#bieszczady", label: "Bieszczady Experience" },
    { href: "#wlasciciele", label: "Dla Właścicieli" },
    { href: "#o-nas", label: "O Nas" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center" aria-label="RevUp Rent — strona główna">
          <img
            src={logoUrl}
            alt="RevUp Rent"
            className="h-10 w-auto shrink-0 sm:h-12"
            width={804}
            height={325}
          />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="rounded-md bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-all hover:glow-red"
          >
            Dołącz do Waitlisty
          </a>
        </div>

        <button
          className="justify-self-end rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-primary px-5 py-3 text-center text-sm font-bold text-primary-foreground"
            >
              Dołącz do Waitlisty
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------------------------- hero ---------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Czarne Audi R8 na górskiej drodze o zmierzchu"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-xs font-bold tracking-wide text-primary uppercase">
              <Sparkles className="h-3 w-3" /> Premiera Sezon 2026/2027
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/80 px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Model Podnajmu &amp; Rent-a-Car
            </span>
          </div>

          <h1 className="font-display text-4xl leading-[1.05] font-black tracking-tight uppercase italic sm:text-6xl lg:text-7xl">
            Poczuj prawdziwą <span className="text-primary">moc</span> na trasach Podkarpacia
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Wynajem samochów sportowych i supercarów.
            <span className="mt-1 block font-semibold text-foreground">
              Rzeszów • Sanok • Bieszczady
            </span>
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#wlasciciele"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 font-display text-base font-bold tracking-wide text-primary-foreground uppercase italic transition-all hover:glow-red"
            >
              Zgłoś swoje auto do floty
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-foreground/25 bg-foreground/5 px-8 py-4 font-display text-base font-bold tracking-wide text-foreground uppercase italic backdrop-blur transition-all hover:border-primary/60 hover:text-primary"
            >
              Dołącz do Waitlisty (-10% na start)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- fleet --------------------------------- */

function Fleet() {
  return (
    <section id="flota" className="carbon-texture scroll-mt-16 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-display text-sm font-bold tracking-[0.3em] text-primary uppercase">
            Flota RevUp
          </p>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight uppercase italic sm:text-5xl">
            Nasza Flota <span className="text-muted-foreground">(wkrótce w wynajmie)</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Trzy kategorie maszyn przygotowanych na bieszczadzkie trasy. Pierwsze auta już w sezonie
            2026/2027.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <article
              key={cat.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:glow-red-sm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.title}
                  loading="lazy"
                  width={1792}
                  height={1024}
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-bold tracking-wide text-primary-foreground uppercase glow-red-sm">
                  Premiera wkrótce
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-black uppercase italic">{cat.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cat.subtitle}</p>
                <a
                  href="#waitlist"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold tracking-wide text-primary uppercase transition-colors hover:text-primary-foreground"
                >
                  Powiadom mnie o premierze <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- bieszczady ------------------------------- */

function Bieszczady() {
  const features = [
    {
      icon: RouteIcon,
      title: "Trasy szyte na miarę",
      desc: "Pętla Bieszczadzka, Przełęcz Wyżna i najlepsze kręte odcinki regionu — dobrane do auta i Twoich umiejętności.",
    },
    {
      icon: Gauge,
      title: "Pakiet kilometrów w cenie",
      desc: "Podstawowy limit przebiegu idealny na weekendowy wypad w góry, bez stresu i bez ukrytych opłat.",
    },
    {
      icon: Plane,
      title: "Dowóz pod adres",
      desc: "Dostarczamy auto do Rzeszowa, Sanoka i na lotnisko Jasionka. Wsiadasz i jedziesz prosto w serce Bieszczadów.",
    },
  ];

  return (
    <section id="bieszczady" className="scroll-mt-16 border-y border-border bg-secondary/30 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="font-display text-sm font-bold tracking-[0.3em] text-primary uppercase">
            Pakiet weekendowy
          </p>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight uppercase italic sm:text-5xl">
            Bieszczady <span className="text-primary">Supercar</span> Experience
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Jeden weekend. Jedna legendarna Pętla Bieszczadzka. I samochód, o którym marzyłeś od
            dzieciaka. Kompletny pakiet przeżycia stworzony pod kręte górskie drogi Podkarpacia.
          </p>
          <a
            href="#waitlist"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 font-display text-sm font-bold tracking-wide text-primary-foreground uppercase italic transition-all hover:glow-red"
          >
            Zarezerwuj swój weekend <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary/10">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-bold tracking-wide uppercase">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- owners --------------------------------- */

function Owners() {
  const [sent, setSent] = useState(false);
  const points = [
    {
      icon: ShieldCheck,
      title: "100% Bezpieczeństwa",
      desc: "Dedykowana polisa AC Rent-a-Car oraz zaawansowana telemetria CAN/GPS — monitoring ESP, obrotów silnika i geofencing.",
    },
    {
      icon: Wallet,
      title: "Pasywny Dochód",
      desc: "Przejrzysty podział zysków co miesiąc, pokrywający ratę leasingu i generujący realny zysk z Twojego auta.",
    },
    {
      icon: Sparkles,
      title: "Detailing i Pielęgnacja",
      desc: "Profesjonalne czyszczenie i serwis po każdym wynajmie. Twoje auto wraca do Ciebie w lepszym stanie niż je oddałeś.",
    },
  ];

  return (
    <section
      id="wlasciciele"
      className="scroll-mt-16 border-y border-primary/30 bg-gradient-to-b from-carbon via-background to-carbon py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/40 bg-primary/10 p-6 text-center sm:p-10">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at center, oklch(0.577 0.239 27.3), transparent 70%)",
            }}
          />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/50 bg-primary/20 px-3 py-1 text-xs font-bold tracking-wide text-primary uppercase">
              <Wallet className="h-3 w-3" /> Pasywny dochód z auta
            </span>
            <h2 className="mt-4 font-display text-2xl font-black leading-tight tracking-tight uppercase italic sm:text-4xl">
              Masz w garażu samochód sportowy lub premium?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/90">
              Dołącz do floty RevUp Rent i generuj pasywny dochód co miesiąc na bezpiecznych
              warunkach.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-display text-sm font-bold tracking-[0.3em] text-primary uppercase">
              Dla właścicieli aut
            </p>
            <h3 className="mt-2 font-display text-3xl font-black tracking-tight uppercase italic sm:text-5xl">
              Twój samochód stoi w garażu?{" "}
              <span className="text-primary">Niech zarabia na siebie.</span>
            </h3>
            <div className="mt-10 grid gap-4">
              {points.map((p) => (
                <div
                  key={p.title}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary/10">
                    <p.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold tracking-wide uppercase">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:sticky lg:top-24 lg:self-start">
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-16 w-16 rounded-full text-primary glow-red-sm" />
                <h3 className="mt-6 font-display text-2xl font-black uppercase italic">
                  Zgłoszenie wysłane!
                </h3>
                <p className="mt-3 max-w-sm text-muted-foreground">
                  Dziękujemy. Skontaktujemy się z Tobą w ciągu 24 godzin, aby omówić warunki
                  współpracy.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl font-black uppercase italic">
                  Zgłoś swoje auto do floty
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Wypełnij formularz — oddzwonimy z indywidualną kalkulacją zysku.
                </p>
                <form
                  className="mt-6 grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div>
                    <label className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                      Imię
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Twoje imię"
                      className="mt-1.5 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                      Numer telefonu
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+48 795 248 814"
                      className="mt-1.5 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                      Marka i model auta
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="np. BMW M4 Competition"
                      className="mt-1.5 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                      Rok produkcji
                    </label>
                    <input
                      required
                      type="number"
                      min="2005"
                      max="2026"
                      placeholder="2023"
                      className="mt-1.5 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-ring"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 rounded-md bg-primary px-6 py-4 font-display text-sm font-bold tracking-wide text-primary-foreground uppercase italic transition-all hover:glow-red"
                  >
                    Wyślij zgłoszenie
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- about ---------------------------------- */

function About() {
  const stats = [
    { icon: Gauge, value: "3", label: "kategorie aut w przygotowaniu" },
    { icon: Timer, value: "Sezon 2026/27", label: "premiera floty" },
    { icon: MapPin, value: "3", label: "lokalizacje: Rzeszów, Sanok, Bieszczady" },
    { icon: ShieldCheck, value: "100%", label: "ubezpieczenie AC i telemetria" },
  ];

  return (
    <section id="o-nas" className="scroll-mt-16 border-y border-border bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-sm font-bold tracking-[0.3em] text-primary uppercase">
          O nas
        </p>
        <h2 className="mt-2 max-w-3xl font-display text-3xl font-black tracking-tight uppercase italic sm:text-5xl">
          Supercar club zbudowany przez pasjonatów motoryzacji z Podkarpacia
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          RevUp Rent to pierwsza na Podkarpaciu platforma łącząca wynajem supercarów z modelem
          podnajmu. Dajemy Ci dostęp do maszyn, o których inni tylko czytają — a właścicielom aut
          sportowych sposób, by ich pasja zarabiała na siebie.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50"
            >
              <s.icon className="h-6 w-6 text-primary" />
              <p className="mt-4 font-display text-3xl font-black italic">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- waitlist -------------------------------- */

function Waitlist() {
  const [sent, setSent] = useState(false);

  return (
    <section id="waitlist" className="carbon-texture relative scroll-mt-16 overflow-hidden py-24">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[140px]"
        style={{ background: "oklch(0.577 0.239 27.3)" }}
      />
      <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="font-display text-sm font-bold tracking-[0.3em] text-primary uppercase">
          Waitlista
        </p>
        <h2 className="mt-2 font-display text-3xl font-black tracking-tight uppercase italic sm:text-5xl">
          Bądź pierwszy przy otwarciu floty
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Zapisz się do listy oczekujących i odbierz <strong className="text-foreground">-10% rabatu</strong>{" "}
          na swój pierwszy wynajem w dniu premiery.
        </p>

        {sent ? (
          <div className="mt-10 rounded-2xl border border-primary/50 bg-card p-10 glow-red-sm">
            <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
            <h3 className="mt-4 font-display text-2xl font-black uppercase italic">
              Jesteś na liście!
            </h3>
            <p className="mt-2 text-muted-foreground">
              Twój rabat -10% został zarezerwowany. Do zobaczenia na starcie sezonu 2026/2027.
            </p>
          </div>
        ) : (
          <form
            className="mt-10 grid gap-4 rounded-2xl border border-border bg-card p-6 text-left sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div>
              <label className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                Imię
              </label>
              <input
                required
                type="text"
                placeholder="Twoje imię"
                className="mt-1.5 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                E-mail
              </label>
              <input
                required
                type="email"
                placeholder="ty@przyklad.pl"
                className="mt-1.5 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                Preferowana kategoria
              </label>
              <select
                required
                defaultValue=""
                className="mt-1.5 w-full appearance-none rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-ring"
              >
                <option value="" disabled>
                  Wybierz kategorię…
                </option>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
                <option value="bieszczady-experience">Bieszczady Supercar Experience</option>
                <option value="dowolne">Jeszcze nie wiem — zaskoczcie mnie</option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-2 rounded-md bg-primary px-6 py-4 font-display text-sm font-bold tracking-wide text-primary-foreground uppercase italic transition-all hover:glow-red"
            >
              Rezerwuję rabat -10%
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

/* --------------------------------- footer --------------------------------- */

function Footer() {
  const socials = [
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@revuprent.pl",
      external: true,
      path: "M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
    },
    {
      name: "Instagram",
      href: "#",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
    },
    {
      name: "Facebook",
      href: "#",
      path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
  ];

  return (
    <footer id="kontakt" className="scroll-mt-16 border-t border-border bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <a href="#top" className="flex items-center" aria-label="RevUp Rent — strona główna">
            <img
              src={logoUrl}
              alt="RevUp Rent"
              className="h-10 w-auto"
              width={804}
              height={325}
              loading="lazy"
            />
          </a>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Wynajem supercarów i samochodów sportowych. Rzeszów • Sanok • Bieszczady.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:glow-red-sm"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest uppercase">Kontakt</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:kontakt@revup-rent.pl" className="hover:text-foreground">
                kontakt@revup-rent.pl
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+48795248814" className="hover:text-foreground">
                +48 795 248 814
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span>Rzeszów / Sanok / Podkarpacie</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest uppercase">Nawigacja</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#flota" className="hover:text-foreground">Flota</a></li>
            <li><a href="#bieszczady" className="hover:text-foreground">Bieszczady Experience</a></li>
            <li><a href="#wlasciciele" className="hover:text-foreground">Dla Właścicieli</a></li>
            <li><a href="#waitlist" className="hover:text-foreground">Waitlista</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-4 pt-6 sm:px-6 lg:px-8">
        <p className="text-xs text-muted-foreground">
          © 2026 RevUp Rent Sp. z o.o. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ---------------------------------- page ---------------------------------- */

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Fleet />
        <Bieszczady />
        <Owners />
        <About />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
