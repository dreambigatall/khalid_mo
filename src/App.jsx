import {
  FiArrowDown,
  FiArrowUpRight,
  FiBriefcase,
  FiCheck,
  FiCode,
  FiCpu,
  FiDatabase,
  FiDownload,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiShield,
  FiZap,
} from "react-icons/fi";

import aiResumeAnalyzer from "./assets/projectCover/resized_resume_analyzer.png";
import symergyPreview from "./assets/projectCover/i4sight.png";

const resumePath = "/resume/khalid-mohammed-full-stack-engineer.pdf";

const proofPoints = [
  { value: "2+", label: "years building products" },
  { value: "1K+", label: "active mini-app users" },
  { value: "60%", label: "performance improvement" },
  { value: "3", label: "product domains shipped" },
];

const projects = [
  {
    number: "01",
    title: "SelamNewu Workspace",
    eyebrow: "Integrated ERP SaaS · IE-Networks Solution",
    description:
      "A modular business workspace bringing multiple ERP functions together through independently maintainable services.",
    contribution:
      "Delivered full-stack features across Next.js and NestJS, designed and consumed service APIs, shaped database logic, and applied Redis caching to frequently accessed endpoints.",
    outcome:
      "Production SaaS work across complex business domains and cross-service data flows.",
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    visual: "system",
    privateWork: true,
  },
  {
    number: "02",
    title: "Multi-tenant CRM",
    eyebrow: "Customer management · IE-Networks Solution",
    description:
      "A scalable CRM inside an integrated ERP platform, designed to serve distinct client organizations without mixing their data.",
    contribution:
      "Built frontend and backend modules, handled tenant-aware domain logic, improved reusable service boundaries, and supported efficient onboarding for new organizations.",
    outcome:
      "A maintainable multi-tenant foundation for client-facing CRM workflows.",
    stack: ["NestJS", "Next.js", "PostgreSQL", "Redis", "Microservices"],
    visual: "tenant",
    privateWork: true,
  },
  {
    number: "03",
    title: "Telegram Mini Apps",
    eyebrow: "Freelance product delivery",
    description:
      "Multiple embedded Telegram products built around real platform constraints, live users, and end-to-end client delivery.",
    contribution:
      "Owned requirements, authentication, interface development, API integration, deployment, testing, and client handoff.",
    outcome: "More than 1,000 active users across deployed mini apps.",
    stack: ["React", "Node.js", "TypeScript", "Telegram Bot API"],
    visual: "telegram",
  },
  {
    number: "04",
    title: "AI Resume Analyzer",
    eyebrow: "AI-assisted recruiting workflow",
    description:
      "A full-stack tool that turns uploaded résumés into structured recruiter insights using Gemini-powered analysis.",
    contribution:
      "Built the product flow, authentication, data layer, API integration, validation, and recruiter-facing interface.",
    outcome:
      "A working AI product that connects document analysis with a practical hiring workflow.",
    stack: ["React", "Node.js", "MongoDB", "Supabase", "Gemini API"],
    image: aiResumeAnalyzer,
    live: "https://ai-resume-analayzer-1.onrender.com/",
    repo: "https://github.com/dreambigatall/AI_Resume_Analayzer",
  },
  {
    number: "05",
    title: "Symergy Platform",
    eyebrow: "Remote full-stack delivery · Ghana",
    description:
      "A responsive product experience for a Ghanaian sustainability company working across waste and energy operations.",
    contribution:
      "Translated Figma designs into production interfaces, integrated backend APIs, and removed rendering and data-flow bottlenecks.",
    outcome: "Improved interface rendering and system efficiency by 60%.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    image: symergyPreview,
    live: "https://symergygh.com",
  },
];

const experience = [
  {
    period: "2025 — Present",
    role: "Full-Stack Engineer",
    company: "IE-Networks Solution",
    copy: "Building production ERP and CRM capabilities across a microservice-based SaaS platform. The work spans product interfaces, backend services, domain logic, relational data, caching, reviews, and architecture decisions.",
    tags: ["ERP SaaS", "Multi-tenancy", "Microservices", "Redis"],
  },
  {
    period: "2024 — Present",
    role: "Automation & Mini App Developer",
    company: "Independent",
    copy: "Delivering Telegram Mini Apps and business automations from discovery through deployment. Work includes lead workflows, notifications, data movement, platform authentication, and client handoff.",
    tags: ["N8N", "Zapier", "Telegram", "Client delivery"],
  },
  {
    period: "Aug — Nov 2024",
    role: "Full-Stack Developer",
    company: "Symergy LTD · Remote, Ghana",
    copy: "Built responsive product features from Figma designs, integrated backend APIs, diagnosed bottlenecks, and collaborated in a remote cross-functional team.",
    tags: ["Next.js", "TypeScript", "Performance", "Remote team"],
  },
];

const capabilities = [
  {
    icon: FiLayers,
    title: "Product engineering",
    copy: "From interface to API and schema, I build complete product flows around real business rules.",
    tools: "React · Next.js · TypeScript · Tailwind CSS · Ant Design",
  },
  {
    icon: FiCode,
    title: "Backend systems",
    copy: "Modular services, clear boundaries, REST APIs, tenant-aware logic, authentication, and validation.",
    tools: "NestJS · Node.js · Express.js · Supabase",
  },
  {
    icon: FiDatabase,
    title: "Data & performance",
    copy: "Practical data modelling and caching choices that keep business systems responsive as they grow.",
    tools: "PostgreSQL · MongoDB · Redis · Indexing",
  },
  {
    icon: FiCpu,
    title: "AI & agentic workflows",
    copy: "AI-assisted product experiences designed around tools, structured outputs, useful context, and human review.",
    tools: "Gemini API · Tool workflows · Human-in-the-loop",
  },
  {
    icon: FiZap,
    title: "Automation",
    copy: "Connected workflows that reduce manual work across leads, notifications, and operational data.",
    tools: "N8N · Zapier · Telegram Bot API · Webhooks",
  },
  {
    icon: FiShield,
    title: "Delivery quality",
    copy: "Collaborative delivery with version control, testing, containers, reviews, and repeatable release practices.",
    tools: "Git · GitHub · Docker · Jest · CI/CD · Postman",
  },
];

const agenticPrinciples = [
  "Ground AI features in business context and structured data.",
  "Give systems narrow tools with explicit permissions.",
  "Keep a human approval step for consequential actions.",
  "Measure quality, latency, cost, and failure modes.",
];

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <div className="project-image-wrap">
        <img src={project.image} alt={`${project.title} product preview`} />
      </div>
    );
  }

  if (project.visual === "telegram") {
    return (
      <div className="project-visual telegram-visual" aria-hidden="true">
        <div className="phone-shell">
          <div className="phone-status">
            <span>Mini app</span>
            <span>•••</span>
          </div>
          <div className="phone-card phone-card-accent">Live product</div>
          <div className="phone-card">Authenticated user</div>
          <div className="phone-action">Open workflow</div>
        </div>
        <div className="floating-metric">
          <strong>1K+</strong>
          <span>active users</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`project-visual architecture-visual ${project.visual}`}
      aria-hidden="true"
    >
      <div className="architecture-head">
        <span>
          {project.visual === "tenant"
            ? "Tenant-aware flow"
            : "Service architecture"}
        </span>
        <i></i>
      </div>
      <div className="architecture-grid">
        <span>Product UI</span>
        <span>API gateway</span>
        <span>
          {project.visual === "tenant" ? "Tenant context" : "Core service"}
        </span>
        <span>PostgreSQL</span>
        <span>Redis cache</span>
        <span>Events</span>
      </div>
    </div>
  );
}

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Khalid Mohammed, home">
          <span className="brand-mark">KM</span>
          <span className="brand-copy">
            Khalid Mohammed<small>Full-stack engineer</small>
          </span>
        </a>
        <nav className="top-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#about">About</a>
        </nav>
        <a
          className="header-cta"
          href={resumePath}
          target="_blank"
          rel="noreferrer"
        >
          Résumé <FiArrowUpRight />
        </a>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="availability">
              <span></span> Addis Ababa · Available for remote opportunities
            </p>
            <h1>
              Full-stack engineer.
              <br />
              <em>Agentic systems builder.</em>
            </h1>
            <p className="hero-lede">
              I build production SaaS, automation, and AI-powered product
              experiences—from polished interfaces to scalable services and data
              systems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work <FiArrowDown />
              </a>
              <a
                className="button button-quiet"
                href="mailto:halidmahammed.16.hm@gmail.com"
              >
                Start a conversation <FiArrowUpRight />
              </a>
            </div>
          </div>

          <div
            className="hero-system"
            aria-label="Khalid's engineering capability map"
          >
            <div className="system-topline">
              <span>BUILD MAP / 2026</span>
              <span className="pulse">ONLINE</span>
            </div>
            <div className="system-core">
              <div className="core-ring ring-one"></div>
              <div className="core-ring ring-two"></div>
              <div className="core-node">
                <strong>PRODUCT</strong>
                <span>from idea to operation</span>
              </div>
            </div>
            <div className="system-nodes">
              <div>
                <span>01</span>
                <strong>Interface</strong>
                <small>React · Next.js</small>
              </div>
              <div>
                <span>02</span>
                <strong>Services</strong>
                <small>NestJS · Node.js</small>
              </div>
              <div>
                <span>03</span>
                <strong>Intelligence</strong>
                <small>AI · Automation</small>
              </div>
              <div>
                <span>04</span>
                <strong>Data</strong>
                <small>Postgres · Redis</small>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Career highlights">
          {proofPoints.map((point) => (
            <div key={point.label}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </section>

        <section className="intro section-pad">
          <div className="section-kicker">
            <span>01</span> What I do
          </div>
          <div className="intro-statement">
            <h2>Software that understands the operation behind the screen.</h2>
            <p>
              My strongest work sits where product experience, business logic,
              and reliable infrastructure meet. I turn complex workflows into
              software teams and customers can actually use.
            </p>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                <span>02</span> Selected work
              </div>
              <h2>Proof over project lists.</h2>
            </div>
            <p>
              Five projects that show product scope, engineering decisions, and
              real operational value.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-copy">
                  <div className="project-meta">
                    <span>{project.number}</span>
                    <p>{project.eyebrow}</p>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.description}</p>
                  <dl className="project-details">
                    <div>
                      <dt>Contribution</dt>
                      <dd>{project.contribution}</dd>
                    </div>
                    <div>
                      <dt>Outcome</dt>
                      <dd>{project.outcome}</dd>
                    </div>
                  </dl>
                  <div className="tag-list">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live product <FiArrowUpRight />
                      </a>
                    )}
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        <FiGithub /> Source
                      </a>
                    )}
                    {project.privateWork && (
                      <span className="private-label">
                        <FiBriefcase /> Product work · details generalized
                      </span>
                    )}
                  </div>
                </div>
                <ProjectVisual project={project} />
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section section-pad" id="experience">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                <span>03</span> Experience
              </div>
              <h2>Built in real delivery environments.</h2>
            </div>
            <p>
              Product teams, remote collaboration, freelance ownership, and
              systems used by real customers.
            </p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role + item.company}>
                <p className="timeline-period">{item.period}</p>
                <div className="timeline-role">
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <div className="timeline-body">
                  <p>{item.copy}</p>
                  <div className="tag-list">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="agentic-section section-pad">
          <div className="agentic-panel">
            <div className="agentic-copy">
              <div className="section-kicker light">
                <span>04</span> Agentic engineering focus
              </div>
              <h2>Useful AI needs more than a prompt.</h2>
              <p>
                My direction is agentic product engineering: combining strong
                application foundations with tools, business context,
                automation, and human control. The goal is not AI theatre—it is
                software that completes meaningful work safely.
              </p>
              <a href="mailto:halidmahammed.16.hm@gmail.com?subject=Agentic%20systems%20project">
                Discuss an AI workflow <FiArrowUpRight />
              </a>
            </div>
            <div className="principle-list">
              {agenticPrinciples.map((principle, index) => (
                <div key={principle}>
                  <span>0{index + 1}</span>
                  <p>{principle}</p>
                  <FiCheck />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="capabilities-section section-pad" id="capabilities">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                <span>05</span> Capabilities
              </div>
              <h2>One engineer across the product stack.</h2>
            </div>
            <p>
              Technology choices organized by the work they enable, not as a
              wall of logos.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, copy, tools }) => (
              <article key={title} className="capability-card">
                <Icon />
                <h3>{title}</h3>
                <p>{copy}</p>
                <small>{tools}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="about-main">
            <div className="section-kicker">
              <span>06</span> About
            </div>
            <h2>I care about systems that hold up after the demo.</h2>
          </div>
          <div className="about-copy">
            <p>
              I’m Khalid Mohammed, a full-stack engineer based in Addis Ababa. I
              work across interfaces, APIs, data, and automation, with a
              particular interest in SaaS products and agentic workflows that
              remove operational friction.
            </p>
            <p>
              I earned a Bachelor of Science in Computer Science from Wolkite
              University in June 2025. I bring a practical, collaborative
              approach shaped by production product work, remote teams, and
              direct client delivery.
            </p>
            <div className="about-facts">
              <span>
                <FiMapPin /> Addis Ababa, Ethiopia
              </span>
              <span>
                <FiBriefcase /> Open to remote work
              </span>
              <span>
                <FiZap /> English · Amharic · Arabic
              </span>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <p className="contact-label">
            Have a product, platform, or workflow to build?
          </p>
          <h2>
            Let’s turn it into
            <br />
            working software.
          </h2>
          <div className="contact-actions">
            <a
              className="button button-primary"
              href="mailto:halidmahammed.16.hm@gmail.com"
            >
              <FiMail /> Email Khalid
            </a>
            <a
              className="button button-quiet"
              href={resumePath}
              target="_blank"
              rel="noreferrer"
            >
              <FiDownload /> Download résumé
            </a>
          </div>
          <div className="contact-links">
            <a
              href="https://github.com/dreambigatall"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/khalidreact/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a href="mailto:halidmahammed.16.hm@gmail.com">
              <FiMail /> Email
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {year} Khalid Mohammed</p>
        <p>Full-stack engineering · Automation · Agentic systems</p>
        <a href="#top">
          Back to top <FiArrowUpRight />
        </a>
      </footer>
    </div>
  );
}

export default App;
