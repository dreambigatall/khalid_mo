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
    challenge:
      "The platform had to grow across HR, planning, payroll, feedback, and CRM without turning every new module into a maintenance risk.",
    metric: { value: "PROD", label: "multi-module SaaS" },
    metrics: [
      { value: "PROD", label: "deployed SaaS" },
      { value: "MULTI", label: "business modules" },
      { value: "CACHE", label: "Redis strategy" },
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    visual: "system",
    live: "https://selamnew.com/",
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
    challenge:
      "Every client needed the same CRM capabilities while its data, permissions, and business rules remained isolated per organization.",
    metric: { value: "MULTI", label: "tenant architecture" },
    metrics: [
      { value: "MULTI", label: "tenant ready" },
      { value: "SAFE", label: "data isolation" },
      { value: "API", label: "reusable services" },
    ],
    stack: ["NestJS", "Next.js", "PostgreSQL", "Redis", "Microservices"],
    visual: "tenant",
    live: "https://selamnew.com/",
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
    challenge:
      "Embedded products had to handle Telegram authentication, constrained mobile interfaces, and real-user reliability from day one.",
    metric: { value: "1K+", label: "active users" },
    metrics: [
      { value: "1K+", label: "active users" },
      { value: "E2E", label: "product ownership" },
      { value: "LIVE", label: "deployed apps" },
    ],
    stack: ["React", "Node.js", "TypeScript", "Telegram Bot API"],
    visual: "telegram",
    live: "https://t.me/HM_Empire_official",
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
    challenge:
      "Recruiters needed useful structured insight from uploaded résumés, not another generic AI chat experience.",
    metric: { value: "AI", label: "recruiter workflow" },
    metrics: [
      { value: "AI", label: "Gemini analysis" },
      { value: "E2E", label: "full-stack flow" },
      { value: "LIVE", label: "working product" },
    ],
    stack: ["React", "Node.js", "MongoDB", "Supabase", "Gemini API"],
    visual: "ai",
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
    challenge:
      "The product had to match production designs, connect reliably to backend APIs, and remove visible rendering bottlenecks.",
    metric: { value: "60%", label: "efficiency gain" },
    metrics: [
      { value: "60%", label: "efficiency gain" },
      { value: "REMOTE", label: "Ghana delivery" },
      { value: "LIVE", label: "production site" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    visual: "performance",
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

const agentDrivenWorkflow = [
  {
    title: "Frame",
    copy: "Define the outcome, constraints, risks, and acceptance criteria before asking an agent to build.",
  },
  {
    title: "Context",
    copy: "Map the relevant code, product rules, APIs, and existing patterns so the work stays grounded.",
  },
  {
    title: "Build",
    copy: "Use focused agent loops to implement, refactor, and connect complete product slices.",
  },
  {
    title: "Verify",
    copy: "Run tests, lint, builds, and runtime checks instead of treating generated code as finished code.",
  },
  {
    title: "Review",
    copy: "Inspect the diff, challenge shortcuts, simplify the result, and document the decisions that matter.",
  },
];

function ProjectVisual({ project }) {
  const visualCopy = {
    system: {
      label: "shared workspace",
      note: "one pattern / many modules",
      axis: "service flow",
    },
    tenant: {
      label: "tenant context",
      note: "same product / isolated data",
      axis: "organization boundary",
    },
    telegram: {
      label: "embedded mini app",
      note: "authenticated / in Telegram",
      axis: "live user flow",
    },
    ai: {
      label: "analysis workspace",
      note: "document in / insight out",
      axis: "structured AI output",
    },
    performance: {
      label: "product interface",
      note: "lighter render / faster flow",
      axis: "API to screen",
    },
  }[project.visual];

  return (
    <div
      className={`project-blueprint blueprint-${project.visual}`}
      aria-hidden="true"
    >
      <span className="blueprint-note note-primary">{visualCopy.note}</span>
      <span className="blueprint-note note-secondary">{visualCopy.axis}</span>
      <div className="blueprint-browser">
        <div className="blueprint-chrome">
          <div className="blueprint-dots">
            <i></i>
            <i></i>
            <i></i>
          </div>
          <span></span>
          <b>{visualCopy.label}</b>
        </div>
        <div className="blueprint-body">
          <div className="blueprint-sidebar">
            <strong>KM</strong>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className="blueprint-dashboard">
            <div className="blueprint-toolbar">
              <i></i>
              <i></i>
            </div>
            <div className="blueprint-stat-row">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="blueprint-chart">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentEngineShowcase() {
  return (
    <section
      className="agent-engine-showcase"
      aria-label="Agent-driven engineering workflow"
    >
      <div className="showcase-caption section-pad">
        <span>
          <i></i> AGENTS AT WORK / LIVE ENGINEERING SYSTEM
        </span>
        <p>
          One bounded workflow from repository context to release confidence.
        </p>
      </div>

      <div
        className="hero-system engine-system-wide"
        aria-label="Khalid's agent-driven engineering capability map"
      >
        <div className="agent-workflow-canvas" aria-hidden="true">
          <div className="workflow-canvas-label">
            <span>
              <i></i> AGENTIC BUILD LOOP
            </span>
            <strong>Context → code → proof</strong>
          </div>

          <div className="workflow-orbit orbit-one"></div>
          <div className="workflow-orbit orbit-two"></div>

          <div className="agent-engine-core">
            <div className="engine-topline">
              <span>AGENTIC ENGINE</span>
              <i></i>
            </div>
            <div className="engine-mark">
              <span>KM</span>
            </div>
            <strong>BUILD / VERIFY</strong>
            <p>Codex · Claude · Cursor</p>
            <div className="engine-activity">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>

          <article className="workflow-float context-panel">
            <header>
              <span>CONTEXT LOADED</span>
              <i></i>
            </header>
            <strong>Repository + product rules</strong>
            <div className="context-lines">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <small>12 files mapped · constraints found</small>
          </article>

          <article className="workflow-float plan-panel">
            <header>
              <span>ARCHITECTURE PLAN</span>
              <i></i>
            </header>
            <div className="plan-nodes">
              <span>UI</span>
              <i></i>
              <span>API</span>
              <i></i>
              <span>DB</span>
            </div>
            <small>Boundaries confirmed</small>
          </article>

          <article className="workflow-float build-panel">
            <header>
              <span>IMPLEMENTING</span>
              <i></i>
            </header>
            <div className="build-agent-row">
              <span>CX</span>
              <div>
                <strong>Codex</strong>
                <small>product slice</small>
              </div>
            </div>
            <div className="build-progress">
              <i></i>
            </div>
            <small>Changes scoped · 78%</small>
          </article>

          <article className="workflow-float tests-panel">
            <header>
              <span>RUNNING CHECKS</span>
              <i></i>
            </header>
            <div className="test-result">
              <span>BUILD</span>
              <strong>PASS</strong>
            </div>
            <div className="test-result">
              <span>TESTS</span>
              <strong>14 / 14</strong>
            </div>
            <div className="test-result">
              <span>LINT</span>
              <strong>CLEAN</strong>
            </div>
          </article>

          <article className="workflow-float review-panel">
            <header>
              <span>CRITICAL REVIEW</span>
              <i></i>
            </header>
            <div className="review-note">
              <span>CL</span>
              <p>
                <strong>Claude</strong>
                <small>Architecture holds. One edge case flagged.</small>
              </p>
            </div>
            <small>Human decision required</small>
          </article>

          <article className="workflow-float approval-panel">
            <span className="approval-avatar">KM</span>
            <p>
              <strong>HUMAN APPROVAL</strong>
              <small>Release decision stays human</small>
            </p>
            <i>
              <FiCheck />
            </i>
          </article>

          <div className="workflow-release-chip">
            <i></i>
            <span>READY TO SHIP</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="site-shell">
      <div className="scroll-progress" aria-hidden="true"></div>
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
        <section className="hero hero-solo section-pad">
          <div className="hero-copy">
            <p className="hero-hand-note">
              Hello, I’m Khalid. I build the system behind the screen.
            </p>
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
        </section>

        <section
          className="engineering-signal"
          aria-label="Engineering impact signal"
        >
          <div className="signal-label">
            <span></span> SYSTEM SIGNAL / LIVE
          </div>
          <div className="signal-track">
            <div>
              {proofPoints.map((point) => (
                <p key={point.label}>
                  <strong>{point.value}</strong> {point.label}
                </p>
              ))}
            </div>
            <div aria-hidden="true">
              {proofPoints.map((point) => (
                <p key={`repeat-${point.label}`}>
                  <strong>{point.value}</strong> {point.label}
                </p>
              ))}
            </div>
          </div>
        </section>

        <AgentEngineShowcase />

        <section className="intro section-pad">
          <div className="section-kicker">
            <span>01</span> What I do
          </div>
          <div className="intro-statement">
            <h2>
              Software that understands{" "}
              <span className="ink-chip">the operation</span> behind the screen.
            </h2>
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
              <h2>
                Proof over <span className="ink-chip">project lists.</span>
              </h2>
            </div>
            <p>
              Five projects that show product scope, engineering decisions, and
              real operational value.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <header className="project-card-header">
                  <div className="project-meta">
                    <span>{project.number} / 05</span>
                    <p>{project.eyebrow}</p>
                  </div>
                  <a
                    className="project-live"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} live`}
                  >
                    View live <FiArrowUpRight />
                  </a>
                </header>

                <div className="project-showcase">
                  <div className="project-intro">
                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.description}</p>
                    <div
                      className="project-metrics"
                      aria-label="Project highlights"
                    >
                      {project.metrics.map((metric) => (
                        <div key={metric.label}>
                          <strong>{metric.value}</strong>
                          <span>{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <ProjectVisual project={project} />
                </div>

                <dl className="project-case-grid">
                  <div>
                    <span>01</span>
                    <dt>Challenge</dt>
                    <dd>{project.challenge}</dd>
                  </div>
                  <div>
                    <span>02</span>
                    <dt>Approach</dt>
                    <dd>{project.contribution}</dd>
                  </div>
                  <div>
                    <span>03</span>
                    <dt>Outcome</dt>
                    <dd>{project.outcome}</dd>
                  </div>
                </dl>

                <footer className="project-card-footer">
                  <div className="tag-list">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-links">
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
                </footer>
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
              <h2>
                Built in real{" "}
                <span className="ink-chip ink-chip-light">delivery</span>{" "}
                environments.
              </h2>
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

        <section
          className="agentic-manifesto section-pad"
          aria-label="Agentic engineering philosophy"
        >
          <div className="manifesto-index">04 / BUILD PHILOSOPHY</div>
          <p>Tools that generate code are common.</p>
          <h2>
            Systems that ship
            <br />
            <span>responsibly are not.</span>
          </h2>
          <div className="manifesto-foot">
            <span>CONTEXT</span>
            <i></i>
            <span>VERIFICATION</span>
            <i></i>
            <span>HUMAN CONTROL</span>
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

          <div className="agent-dev-feature">
            <div className="agent-dev-header">
              <div>
                <p>Agent-driven development</p>
                <h3>Human judgment. AI acceleration.</h3>
              </div>
              <p>
                I use coding agents as an engineering systemâ€”not an
                autocomplete shortcut. I give them clear context, bounded tasks,
                and verification loops while I own architecture, product
                decisions, and final quality.
              </p>
            </div>

            <div
              className="agent-control-room"
              aria-label="Live agent-driven engineering run"
            >
              <div className="control-rail">
                <div className="control-rail-head">
                  <span>RUN / 01</span>
                  <i></i>
                  <b>ACTIVE</b>
                </div>
                <h4>Ship a production-ready product slice.</h4>
                <p>
                  A bounded task moves through context, implementation,
                  verification, and human approval.
                </p>
                <div className="control-checks">
                  <div className="is-done">
                    <span>01</span>
                    <p>Context loaded</p>
                    <FiCheck />
                  </div>
                  <div className="is-done">
                    <span>02</span>
                    <p>Agent selected</p>
                    <FiCheck />
                  </div>
                  <div className="is-running">
                    <span>03</span>
                    <p>Tests running</p>
                    <i></i>
                  </div>
                  <div>
                    <span>04</span>
                    <p>Human approval</p>
                    <i></i>
                  </div>
                  <div>
                    <span>05</span>
                    <p>Deployment</p>
                    <i></i>
                  </div>
                </div>
              </div>

              <div className="control-console">
                <div className="console-topline">
                  <span>AGENT OPERATIONS</span>
                  <span>HUMAN IN CONTROL</span>
                </div>
                <div className="console-task">
                  <small>SELECTED TASK</small>
                  <h4>Build, test, and review a complete product workflow.</h4>
                  <p>
                    Scope is explicit. Permissions are bounded. Output must pass
                    the release checks.
                  </p>
                </div>
                <div className="console-agents">
                  <article className="is-primary">
                    <span>PRIMARY AGENT</span>
                    <strong>Codex</strong>
                    <small>Implementation + verification</small>
                  </article>
                  <article>
                    <span>REVIEW PARTNER</span>
                    <strong>Claude</strong>
                    <small>Architecture + critique</small>
                  </article>
                  <article>
                    <span>EDITOR LOOP</span>
                    <strong>Cursor</strong>
                    <small>Navigation + iteration</small>
                  </article>
                </div>
                <div className="console-verification">
                  <div>
                    <span>BUILD</span>
                    <i>
                      <b style={{ width: "100%" }}></b>
                    </i>
                    <strong>PASS</strong>
                  </div>
                  <div>
                    <span>TESTS</span>
                    <i>
                      <b style={{ width: "78%" }}></b>
                    </i>
                    <strong>RUNNING</strong>
                  </div>
                  <div>
                    <span>REVIEW</span>
                    <i>
                      <b style={{ width: "42%" }}></b>
                    </i>
                    <strong>HUMAN</strong>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="agent-workflow"
              aria-label="Agent-driven development workflow"
            >
              {agentDrivenWorkflow.map((step, index) => (
                <article key={step.title}>
                  <span>0{index + 1}</span>
                  <i aria-hidden="true"></i>
                  <h4>{step.title}</h4>
                  <p>{step.copy}</p>
                </article>
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
