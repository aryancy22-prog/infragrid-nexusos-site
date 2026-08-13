const contributionTypes = [
  {
    number: "01",
    title: "Complete workstation",
    text: "A permanently donated NVIDIA desktop or workstation, including refurbished, returned, open-box, overstock, or retired equipment.",
  },
  {
    number: "02",
    title: "GPU or component support",
    text: "A 24GB-or-greater NVIDIA GPU is preferred. A compatible PSU, memory, storage, cooling, chassis, or motherboard can also move validation forward.",
  },
  {
    number: "03",
    title: "Purchase support or sponsorship",
    text: "Store credit toward physical hardware, a substantial educational discount on physical hardware, or cash sponsorship can reduce the remaining validation cost.",
  },
];

const validationSteps = [
  {
    window: "Days 1-7",
    title: "Bring-up and safety baseline",
    text: "Document the system, verify drivers and runtime readiness, establish thermals and power limits, and confirm safe operating policy.",
  },
  {
    window: "Days 8-21",
    title: "Runtime and recovery validation",
    text: "Exercise runtime handoff, artifact and proof return, telemetry, job recovery, failover behavior, and controlled error paths.",
  },
  {
    window: "Days 22-30",
    title: "Sustained load and report",
    text: "Run repeatable sustained workloads, analyze performance and stability, record limitations, and prepare a sponsor-facing validation report.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="IGNOS sponsorship home">
          <img
            className="brand-logo"
            src="/ignos-logo.png"
            alt="InfraGrid-NexusOS logo"
            width={58}
            height={58}
          />
          <span>InfraGrid-NexusOS</span>
        </a>
        <nav aria-label="Page navigation">
          <a href="#project">Project</a>
          <a href="#request">Request</a>
          <a href="#validation">Validation</a>
        </nav>
      </header>

      <section
        className="hero"
        id="top"
        aria-label="IGNOS hardware sponsorship brief"
      >
        <div className="hero-actions hero-image-actions">
          <a className="button button-primary" href="#request">
            View the request
          </a>
        </div>
      </section>

      <section className="section project-section" id="project">
        <div className="section-kicker">01 / The project</div>
        <div className="two-column">
          <div>
            <h2>Turning fragmented GPU opportunities into one coordinated workflow.</h2>
          </div>
          <div className="body-copy">
            <p>
              InfraGrid-NexusOS (IGNOS) is being developed as a middle layer for
              GPU compute. It is intended to identify compatible provider
              opportunities, normalize their requirements, coordinate provider
              runtimes, return artifacts or proofs, and learn from operational
              telemetry without replacing the underlying provider.
            </p>
            <p>
              The control-plane, routing, telemetry, and safety foundations are
              built. The next milestone is physical validation under conditions
              that a development laptop cannot represent: higher-memory jobs,
              desktop-class power behavior, sustained thermal load, and eventual
              multi-GPU operation.
            </p>
          </div>
        </div>
      </section>

      <section className="constraint-band" aria-labelledby="constraint-title">
        <div className="constraint-copy">
          <span className="section-kicker light">Current constraint</span>
          <h2 id="constraint-title">Development works. Hardware validation is blocked.</h2>
          <p>
            The current development system uses an NVIDIA GeForce RTX 4060
            Laptop GPU with 8GB of VRAM. It supports development and
            control-plane testing, but it cannot reproduce sustained
            desktop/workstation or multi-GPU conditions.
          </p>
        </div>
        <div className="spec-card">
          <span className="spec-tag">CURRENT MACHINE</span>
          <strong>RTX 4060</strong>
          <span className="spec-subtitle">LAPTOP GPU</span>
          <div className="spec-meter"><span /></div>
          <div className="spec-row"><span>VRAM</span><b>8GB</b></div>
          <div className="spec-row"><span>Target</span><b>24GB+</b></div>
        </div>
      </section>

      <section className="section" id="request">
        <div className="section-kicker">02 / The request</div>
        <div className="request-heading">
          <h2>Several forms of permanent support can unlock the next proof.</h2>
          <p>
            New equipment is not required. Meaningful, safely operable hardware
            that a company can permanently release is welcome.
          </p>
        </div>
        <div className="contribution-grid">
          {contributionTypes.map((item) => (
            <article className="contribution-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <aside className="no-loan">
          <span>Important</span>
          <p>
            IGNOS is not seeking a short-term or long-term loaner. Any physical
            equipment must be a permanent contribution with ownership and any
            conditions documented in writing.
          </p>
        </aside>
      </section>

      <section className="section validation-section" id="validation">
        <div className="section-kicker">03 / The validation plan</div>
        <div className="request-heading">
          <h2>A focused 30-day hardware-use plan.</h2>
          <p>
            The first month is designed to produce reviewable evidence, not just
            install software on a stronger computer.
          </p>
        </div>
        <div className="timeline">
          {validationSteps.map((step) => (
            <article key={step.window}>
              <span className="timeline-window">{step.window}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="value-section">
        <div>
          <div className="section-kicker light">04 / What a supporter receives</div>
          <h2>Useful engineering feedback and transparent acknowledgment.</h2>
        </div>
        <ul>
          <li>A documented hardware-use and validation report</li>
          <li>Technical feedback and clearly reported limitations</li>
          <li>Concise sponsor-facing progress updates</li>
          <li>Approved acknowledgment as an early hardware contributor</li>
          <li>Credit in project updates, launch materials, and social posts if IGNOS reaches public beta, launches, or gains meaningful traction</li>
        </ul>
      </section>

      <section className="section contact-section">
        <div className="contact-panel">
          <div>
            <span className="section-kicker">Start a conversation</span>
            <h2>Could your team help move IGNOS from software proof to physical validation?</h2>
          </div>
          <div className="contact-copy">
            <p>
              If Anthony shared this page with you directly, please reply to
              his outreach email. The request can also be forwarded to your
              community, education, developer-relations, partnership, PR, or
              hardware-disposition team.
            </p>
          </div>
        </div>
        <p className="disclaimer">
          IGNOS is an independent project by a college student. It is not
          sponsored, supervised, or endorsed by any college. Contributions are
          not represented as tax-deductible. Before equipment is accepted,
          ownership, shipping responsibility, condition, and any acknowledgment
          language should be documented by both sides.
        </p>
      </section>

      <footer>
        <span>IGNOS / InfraGrid-NexusOS</span>
        <span>Independent student project by Anthony Yancy</span>
      </footer>
    </main>
  );
}
