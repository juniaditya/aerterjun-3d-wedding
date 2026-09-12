"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Check, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { copy } from "@/data/content";
import { projects } from "@/data/projects";
import { packages } from "@/data/pricing";
import { Language, siteConfig, whatsappUrl } from "@/data/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ArrowLink({ children, href, className = "" }: { children: React.ReactNode; href: string; className?: string }) {
  return <a className={`arrow-link ${className}`} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight aria-hidden="true" size={18} /></a>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("id");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const root = useRef<HTMLElement>(null);
  const c = copy[language] as typeof copy.id;
  const wa = whatsappUrl(language);

  useEffect(() => {
    const saved = localStorage.getItem("aerterjun-language") as Language | null;
    if (saved === "id" || saved === "en") setLanguage(saved);
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const selectLanguage = (next: Language) => {
    setLanguage(next); localStorage.setItem("aerterjun-language", next);
  };

  useGSAP(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.from(".hero-reveal", { y: 44, opacity: 0, duration: 1.05, stagger: 0.11, ease: "power3.out" });
    gsap.to(".hero-image", { scale: 1.035, duration: 14, ease: "none" });
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
      gsap.from(element, { y: 42, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 86%", once: true } });
    });
    gsap.utils.toArray<HTMLElement>(".project-media").forEach((element) => {
      gsap.from(element, { clipPath: "inset(12% 0 12% 0)", scale: 1.04, duration: 1.25, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 82%", once: true } });
    });
  }, { scope: root });

  return <main ref={root}>
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label="AerTerjun home">{siteConfig.brand}<span>{siteConfig.descriptor}</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#works">{c.nav[0]}</a><a href="#process">{c.nav[1]}</a><a href="#pricing">{c.nav[2]}</a>
      </nav>
      <div className="nav-actions">
        <div className="language" aria-label="Language selection">
          <button aria-pressed={language === "id"} onClick={() => selectLanguage("id")}>ID</button><span>/</span><button aria-pressed={language === "en"} onClick={() => selectLanguage("en")}>EN</button>
        </div>
        <ArrowLink href={wa} className="nav-cta">{c.discuss}</ArrowLink>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="mobile-menu" aria-label="Mobile navigation">
        <a href="#works" onClick={() => setMenuOpen(false)}>{c.nav[0]}</a><a href="#process" onClick={() => setMenuOpen(false)}>{c.nav[1]}</a><a href="#pricing" onClick={() => setMenuOpen(false)}>{c.nav[2]}</a><ArrowLink href={wa}>{c.discuss}</ArrowLink>
      </nav>}
    </header>

    <section className="hero" id="top">
      <Image className="hero-image" src="/images/project-dark-gold.png" alt="Luxury black and gold wedding stage visualization" fill priority sizes="100vw" />
      <div className="hero-scrim" />
      <div className="hero-content">
        <p className="eyebrow hero-reveal">3D Wedding Visualization</p>
        <h1 className="hero-reveal">Visualize Before<br/><em>It Becomes Real.</em></h1>
        <p className="hero-copy hero-reveal">{c.heroBody}</p>
        <ArrowLink href={wa} className="hero-reveal">{c.discuss}</ArrowLink>
      </div>
      <a className="scroll-cue" href="#works"><span>Scroll</span><ArrowDown size={16} aria-hidden="true" /></a>
    </section>

    <section className="section works" id="works">
      <div className="section-head reveal"><p className="eyebrow">01 / Selected Works</p><h2>Wedding concepts,<br/><em>made visible.</em></h2><p>{c.worksIntro}</p></div>
      <div className="projects">
        {projects.map((project, index) => <article className="project" key={project.number}>
          <div className="project-meta"><span>Project {project.number}</span><span>3D Wedding Visualization</span></div>
          <div className="project-media">
            <Image src={project.image} alt={`Project ${project.number} 3D wedding visualization`} fill sizes="(max-width: 800px) 100vw, 94vw" style={{ objectPosition: project.position }} />
            <span className="project-index">0{index + 1}</span>
          </div>
        </article>)}
      </div>
    </section>

    <section className="value section">
      <div className="value-image reveal"><Image src="/images/project-burgundy.png" alt="Burgundy wedding hall visualization" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
      <div className="value-copy reveal"><p className="eyebrow">02 / Why Visualization</p><h2>Make Your Concept<br/><em>Easier to See.</em></h2><p className="lead">{c.whyBody}</p>
        {c.values.map((item, index) => <div className="value-item" key={item[0]}><span>0{index + 1}</span><div><h3>{item[0]}</h3><p>{item[1]}</p></div></div>)}
      </div>
    </section>

    <section className="process section" id="process">
      <div className="section-head reveal"><p className="eyebrow">03 / Process</p><h2>From Brief to<br/><em>Visualization.</em></h2><p>{c.processIntro}</p></div>
      <ol className="steps">
        {c.steps.map((step, index) => <li className="reveal" key={step[0]}><span>0{index + 1}</span><h3>{step[0]}</h3><p>{step[1]}</p></li>)}
      </ol>
    </section>

    <section className="pricing section" id="pricing">
      <div className="section-head reveal"><p className="eyebrow">04 / Investment</p><h2>Choose the<br/><em>Right Scope.</em></h2><p>{c.pricingIntro}</p></div>
      <div className="pricing-grid">
        {packages.map((item) => <article className={`price-card reveal ${item.featured ? "featured" : ""}`} key={item.name}>
          <div><p className="badge">{item.badge[language]}</p><h3>{item.name}</h3><p className="purpose">{item.purpose[language]}</p></div>
          <div><p className="starting">{c.starting}</p><p className="price">{item.price}</p><ul>{item.features[language].map(feature => <li key={feature}><Check size={15} aria-hidden="true" />{feature}</li>)}</ul><ArrowLink href={wa}>{c.discuss}</ArrowLink></div>
        </article>)}
      </div>
      <p className="revision-note reveal">{c.revisionNote}</p>
    </section>

    <section className="final-cta">
      <Image src="/images/project-ivory.png" alt="Ivory sunset wedding pavilion visualization" fill sizes="100vw" />
      <div className="final-scrim" />
      <div className="final-content reveal"><p className="eyebrow">Start a Conversation</p><h2>Have a Wedding Concept in Mind?<br/><em>Let's Visualize It.</em></h2><p>{c.finalBody}</p><ArrowLink href={wa}>{c.discuss}</ArrowLink></div>
    </section>

    <footer><div className="brand">{siteConfig.brand}<span>{siteConfig.descriptor}</span></div><ArrowLink href={wa}>{c.discuss}</ArrowLink><p>© {new Date().getFullYear()} AerTerjun.</p></footer>
    <ArrowLink href={wa} className="sticky-cta">{c.discuss}</ArrowLink>
  </main>;
}
