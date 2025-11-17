import React, { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

const Nav = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-bg/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full bg-[conic-gradient(from_200deg,#ff2b88,#c77dff,#8a2be2,#ff2b88)] shadow-[0_0_18px_rgba(255,43,136,0.7)]">
            <div className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_30%_20%,#ffffff33,transparent_55%)]" />
          </div>
          <div className="leading-tight">
            <div className="text-[0.95rem] font-semibold uppercase tracking-[0.16em]">
              Your Name
            </div>
            <div className="text-[0.8rem] text-text-muted">
              Software Engineer · Java &amp; Python
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-5 text-sm text-text-muted md:flex">
          <button
            onClick={() => scrollTo("hero")}
            className="relative transition-colors hover:text-text-main before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-gradient-to-r before:from-accent before:to-accent-alt before:transition-[width] hover:before:w-full"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="relative transition-colors hover:text-text-main before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-gradient-to-r before:from-accent before:to-accent-alt before:transition-[width] hover:before:w-full"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo("skills")}
            className="relative transition-colors hover:text-text-main before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-gradient-to-r before:from-accent before:to-accent-alt before:transition-[width] hover:before:w-full"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="relative transition-colors hover:text-text-main before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-gradient-to-r before:from-accent before:to-accent-alt before:transition-[width] hover:before:w-full"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="relative transition-colors hover:text-text-main before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-gradient-to-r before:from-accent before:to-accent-alt before:transition-[width] hover:before:w-full"
          >
            Contact
          </button>

          <button
            onClick={() => scrollTo("projects")}
            className="ml-2 inline-flex items-center rounded-full border border-transparent bg-gradient-to-tr from-accent to-accent-alt px-3 py-1.5 text-xs font-medium text-white shadow-[0_18px_38px_rgba(255,43,136,0.5)] transition-transform duration-200 hover:scale-105 hover:shadow-[0_25px_60px_rgba(255,43,136,0.7)]"
          >
            View Projects →
          </button>
        </div>
      </nav>
    </header>
  );
};

const Hero = () => {
  const leftRef = useReveal();
  const rightRef = useReveal();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="mx-auto grid max-w-5xl gap-10 px-5 pb-10 pt-10 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.7fr)]"
    >
      <div ref={leftRef} className="reveal">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-br from-accent/10 to-transparent px-2.5 py-1 text-[0.75rem] text-accent-soft">
          <span className="h-[7px] w-[7px] rounded-full bg-[radial-gradient(circle,#3cff8f,#008b3f)]" />
          Open to Early-Career Opportunities
        </div>

        <h1 className="mb-3 text-[clamp(2.1rem,4vw,2.7rem)] font-semibold leading-tight">
          I build{" "}
          <span className="bg-gradient-to-r from-accent to-accent-alt bg-clip-text text-transparent">
            backend systems
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
            developer tools
          </span>{" "}
          that actually ship.
        </h1>

        <p className="mb-5 max-w-xl text-[0.95rem] text-text-muted">
          I’m a software engineer focused on Java, Spring Boot, Python, and
          cloud-native tooling. I love turning complex problems into reliable,
          clean code that teams can trust.
        </p>

        <div className="mb-5 flex flex-wrap gap-2 text-[0.78rem]">
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-text-muted">
            Java · Spring Boot
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-text-muted">
            Python · APIs
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-text-muted">
            AWS · REST
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-text-muted">
            SQL · Git
          </span>
        </div>

        <div className="mb-3 flex flex-wrap gap-3">
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center rounded-full border border-transparent bg-gradient-to-tr from-accent to-accent-alt px-4 py-2 text-xs font-medium text-white shadow-[0_18px_38px_rgba(255,43,136,0.5)] transition-transform duration-200 hover:translate-y-[-2px] hover:scale-[1.01] hover:shadow-[0_25px_60px_rgba(255,43,136,0.7)]"
          >
            View Projects
          </button>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-white/15 bg-gradient-to-br from-accent/15 to-accent-alt/10 px-4 py-2 text-xs font-medium text-text-main shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-200 hover:-translate-y-[1px] hover:border-accent/60 hover:bg-gradient-to-br hover:from-accent/40 hover:to-accent-alt/30 hover:shadow-[0_12px_26px_rgba(0,0,0,0.45)]"
          >
            Download Resume (PDF)
          </a>
        </div>

        <p className="text-[0.8rem] text-text-muted">
          Currently seeking opportunities where I can grow, ship real features,
          and collaborate with strong engineering teams.
        </p>
      </div>

      <div ref={rightRef} className="reveal">
        <div className="relative mx-auto aspect-square max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_20%_0,#ff2b8840,transparent_55%),radial-gradient(circle_at_80%_100%,#8a2be230,transparent_60%),#050109] shadow-soft-card animate-float">
          <div className="absolute inset-[18%] rounded-[inherit] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%),radial-gradient(circle_at_70%_90%,rgba(154,105,255,0.35),transparent_60%)] mix-blend-screen" />
          <div className="absolute inset-[24%] rounded-[inherit] border border-dashed border-white/20 opacity-70" />

          <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#ffffff,#ff2b88)] shadow-[0_0_18px_rgba(255,43,136,0.85)] animate-orbit" />
          <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#ffffff,#8a2be2)] shadow-[0_0_18px_rgba(138,43,226,0.85)] animate-orbit-slow" />

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-bg/90 px-3 py-1.5 text-[0.75rem] backdrop-blur-md">
            <span className="rounded-full bg-white/10 px-2 py-[2px] text-[0.7rem] text-text-muted">
              Portfolio Snapshot
            </span>
            <span className="font-medium">
              Java · Python · Cloud projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ id, title, kicker }) => (
  <div
    id={id}
    className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"
  >
    <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
      {title}
    </h2>
    <p className="max-w-sm text-xs text-text-muted">{kicker}</p>
  </div>
);

const ProjectCard = ({ name, meta, desc, links }) => (
  <article className="group relative mb-3 overflow-hidden rounded-2xl border border-white/10 bg-bg/90 p-3 text-sm transition-all duration-200 hover:-translate-y-[3px] hover:border-accent/70 hover:bg-[radial-gradient(circle_at_top_left,#ff2b8815,#050109)] hover:shadow-[0_22px_40px_rgba(0,0,0,0.7)]">
    <div className="pointer-events-none absolute inset-[-80%] -translate-x-1/3 bg-[radial-gradient(circle_at_0_0,rgba(255,43,136,0.2),transparent_55%)] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
    <div className="relative">
      <h4 className="mb-1 text-sm font-semibold">{name}</h4>
      <p className="mb-1 text-[0.75rem] text-accent-soft">{meta}</p>
      <p className="mb-2 text-[0.78rem] text-text-muted">{desc}</p>
      {links && (
        <div className="flex flex-wrap gap-2 text-[0.75rem]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-full border border-white/20 bg-bg/90 px-2 py-1 text-text-muted backdrop-blur-md transition-all duration-200 hover:-translate-y-[1px] hover:border-transparent hover:bg-gradient-to-r hover:from-accent hover:to-accent-alt hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  </article>
);

const Projects = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal mx-auto max-w-5xl px-5 pb-10">
      <SectionHeader
        id="projects"
        title="Projects"
        kicker="A few focused projects that highlight how I design APIs, work with data, integrate systems, and think about reliability."
      />

      <div className="grid gap-5 md:grid-cols-3">
        <div className="glass-card bg-[radial-gradient(circle_at_top,#ff2b8817,transparent_55%)]">
          <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
            Java
          </h3>
          <p className="mb-3 text-[0.78rem] text-text-muted">
            APIs, backend services, and data-heavy workloads.
          </p>

          <ProjectCard
            name="FutureForward Banking API"
            meta="Java · Spring Boot · JPA · MySQL"
            desc="A simulated banking backend with customers, accounts, and transactions. Built with layered architecture (Controller / Service / Repository) and DTOs for secure responses."
            links={[
              { label: "View on GitHub", href: "#" },
              { label: "Read API Docs", href: "#" },
            ]}
          />

          <ProjectCard
            name="Todo REST API on AWS Lambda"
            meta="Java · AWS Lambda · API Gateway · DynamoDB"
            desc="Serverless REST API that manages TODO items with full CRUD, validation, and robust error handling."
            links={[{ label: "GitHub Repo", href: "#" }]}
          />
        </div>

        <div className="glass-card bg-[radial-gradient(circle_at_top,#ff2b8817,transparent_55%)]">
          <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
            Python
          </h3>
          <p className="mb-3 text-[0.78rem] text-text-muted">
            Automation, structural tools, and data workflows.
          </p>

          <ProjectCard
            name="SAP2000 Geometry Generator"
            meta="Python · NumPy · Tkinter · Excel"
            desc="Desktop tool that generates dome, hypar, and pyramid geometry for structural models, exports nodes/elements to Excel, and integrates with SAP2000."
            links={[{ label: "View on GitHub", href: "#" }]}
          />

          <ProjectCard
            name="Data Cleaning & Reporting Pipeline"
            meta="Python · Pandas · CLI"
            desc="Command-line tool that ingests CSV data, cleans and validates it, and outputs analysis-ready datasets plus summary reports."
            links={[{ label: "GitHub Repo", href: "#" }]}
          />
        </div>

        <div className="glass-card bg-[radial-gradient(circle_at_top,#ff2b8817,transparent_55%)]">
          <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
            Other
          </h3>
          <p className="mb-3 text-[0.78rem] text-text-muted">
            Frontend, scripting, and personal products.
          </p>

          <ProjectCard
            name="Storm Door Guy Website"
            meta="Shopify · Liquid · JavaScript · Marketing"
            desc="E-commerce storefront for a local home services brand with custom themes, SEO, and conversion-focused product pages."
            links={[{ label: "Live Site", href: "#" }]}
          />

          <ProjectCard
            name="Contractor Lead Magnet Hub"
            meta="HTML · CSS · JS · Content Strategy"
            desc="Landing pages and digital products aimed at helping contractors and entrepreneurs grow their leads and online presence."
            links={[{ label: "Case Study", href: "#" }]}
          />
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal mx-auto max-w-5xl px-5 pb-10">
      <SectionHeader
        id="skills"
        title="Skills"
        kicker="Technologies I’m comfortable shipping with, plus areas I’m actively growing."
      />

      <div className="glass-card">
        <div className="flex flex-wrap gap-2 text-[0.8rem]">
          <span className="rounded-full border border-white/15 bg-bg/80 px-3 py-1 text-text-muted">
            <strong className="font-medium text-text-main">Languages</strong>:
            &nbsp;Java, Python, JavaScript, SQL
          </span>
          <span className="rounded-full border border-white/15 bg-bg/80 px-3 py-1 text-text-muted">
            <strong className="font-medium text-text-main">Backend</strong>:
            &nbsp;Spring Boot, REST APIs, JPA/Hibernate
          </span>
          <span className="rounded-full border border-white/15 bg-bg/80 px-3 py-1 text-text-muted">
            <strong className="font-medium text-text-main">Cloud</strong>:
            &nbsp;AWS Lambda, API Gateway, DynamoDB
          </span>
          <span className="rounded-full border border-white/15 bg-bg/80 px-3 py-1 text-text-muted">
            <strong className="font-medium text-text-main">Frontend</strong>:
            &nbsp;HTML, CSS, basic React/JS
          </span>
          <span className="rounded-full border border-white/15 bg-bg/80 px-3 py-1 text-text-muted">
            <strong className="font-medium text-text-main">Tools</strong>:
            &nbsp;Git, GitHub, Maven, Gradle
          </span>
          <span className="rounded-full border border-white/15 bg-bg/80 px-3 py-1 text-text-muted">
            <strong className="font-medium text-text-main">Data</strong>:
            &nbsp;Pandas, CSV/Excel processing
          </span>
          <span className="rounded-full border border-white/15 bg-bg/80 px-3 py-1 text-text-muted">
            <strong className="font-medium text-text-main">Other</strong>:
            &nbsp;SAP2000 API integration, Tkinter GUIs
          </span>
        </div>
      </div>
    </section>
  );
};

const AboutContact = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal mx-auto max-w-5xl px-5 pb-10">
      <SectionHeader
        id="about"
        title="About"
        kicker="A bit of context for who I am, how I work, and what I’m looking for next."
      />

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)]">
        <div className="glass-card">
          <p className="mb-3 text-[0.9rem] text-text-muted leading-relaxed">
            I’m a software engineer who enjoys working at the intersection of{" "}
            <strong className="text-text-main">backend systems</strong>,{" "}
            <strong className="text-text-main">automation</strong>, and{" "}
            <strong className="text-text-main">real-world products</strong>. I
            like projects where I can deeply understand a problem, design a
            clean solution, and then iterate with feedback.
          </p>
          <p className="mb-3 text-[0.9rem] text-text-muted leading-relaxed">
            My recent work includes building Java REST APIs, integrating Python
            tools with engineering software, and shipping production-focused
            features for small businesses and side projects.
          </p>
          <p className="text-[0.85rem] text-accent-soft">
            I thrive in environments where people are collaborative, curious,
            and care about the quality of what they deliver.
          </p>
        </div>

        <div id="contact" className="glass-card">
          <h3 className="mb-3 text-sm font-semibold">Contact</h3>
          <ul className="space-y-2 text-[0.9rem] text-text-muted">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:youremail@example.com"
                className="text-accent-soft hover:underline"
              >
                youremail@example.com
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-soft hover:underline"
              >
                github.com/your-handle
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-soft hover:underline"
              >
                linkedin.com/in/your-profile
              </a>
            </li>
            <li className="pt-2 text-[0.85rem]">
              I’m open to junior / early-career software engineering roles,
              especially where I can work with Java, Python, and cloud
              services.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 py-4 text-center text-[0.75rem] text-text-muted">
      © {year} Your Name · Built with React, Tailwind CSS, and clean components.
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <AboutContact />
      </main>
      <Footer />
    </div>
  );
}
