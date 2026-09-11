import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const services = [
  { icon: "⌘", title: "Custom PC Builds", text: "Plan and build a PC around your workload, budget, and goals — without paying for hardware you don't need." },
  { icon: "⌂", title: "Homelab Setup", text: "Build servers, virtualization hosts, storage, Docker environments, and self-hosted services that you actually understand." },
  { icon: "◎", title: "Home Networking", text: "Design and configure reliable networks, VLANs, DNS, Wi-Fi, VPNs, firewalls, and secure remote access." },
  { icon: "☁", title: "Cloud & DevOps", text: "Bring professional cloud and infrastructure practices home with AWS, automation, CI/CD, monitoring, and infrastructure as code." }
];

const process = [
  ["01", "Understand", "We start with what you want to accomplish, what you already own, and what your budget looks like."],
  ["02", "Design", "You get a practical plan for the hardware, software, network, and architecture — with room to grow."],
  ["03", "Build", "We put it together, configure it, secure it, and make sure everything works the way it should."],
  ["04", "Learn", "You leave with a setup you can maintain and the knowledge to keep experimenting on your own."]
];

function App() {
  return (
    <div>
      <nav className="nav">
        <a className="brand" href="#"><span className="brand-mark">H</span><span>Homelab<span className="muted"> Solutions</span></span></a>
        <div className="nav-links">
          <a href="#services">Services</a><a href="#about">About</a><a href="#process">How it works</a>
          <a className="nav-cta" href="#contact">Let's talk <span>↗</span></a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="dot"></span> Infrastructure, without the enterprise price tag.</div>
            <h1>Build a home lab<br /><em>worth learning on.</em></h1>
            <p className="hero-text">Practical help with PCs, servers, networking, self-hosting, and cloud infrastructure — from someone who works with this stuff professionally.</p>
            <div className="actions">
              <a className="button primary" href="#contact">Start a project <span>→</span></a>
              <a className="button secondary" href="#services">Explore services</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="grid"></div>
            <div className="server-card">
              <div className="server-top"><span>HOMELAB / STATUS</span><span className="live">● ONLINE</span></div>
              <div className="server-title">Your infrastructure</div>
              <div className="server-lines">
                <div><span>docker</span><b>12 containers</b></div>
                <div><span>network</span><b>10.0.0.0/24</b></div>
                <div><span>storage</span><b>8.2 TB available</b></div>
              </div>
              <div className="server-footer"><span>Everything under your control.</span><span>↗</span></div>
            </div>
          </div>
        </section>

        <section className="intro">
          <p className="section-kicker">HOMELAB SOLUTIONS</p>
          <h2>Professional infrastructure thinking.<br /><span>Built for your home.</span></h2>
          <p>Whether you're building your first server or turning your spare room into a serious lab, the goal is the same: make technology useful, reliable, and yours.</p>
        </section>

        <section id="services" className="section">
          <div className="section-heading"><div><p className="section-kicker">WHAT I CAN HELP WITH</p><h2>From parts to production.</h2></div><p>Start small. Build smart. Leave room to grow.</p></div>
          <div className="service-grid">{services.map((s) => <article className="service" key={s.title}><div className="service-icon">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p><span className="arrow">↗</span></article>)}</div>
        </section>

        <section id="about" className="about">
          <div className="about-label"><span>ABOUT</span></div>
          <div>
            <p className="section-kicker">THE PERSON BEHIND THE LAB</p>
            <h2>A cloud engineer who<br /><em>likes to build things.</em></h2>
            <p className="large-copy">Homelab Solutions brings the mindset of professional cloud engineering into the home. The idea is simple: you shouldn't need a massive budget or a computer science degree to build infrastructure that is secure, reliable, and genuinely useful.</p>
            <p className="large-copy">I'll help you make the right decisions, explain what you're doing along the way, and leave you with a system you can confidently run yourself.</p>
            <a className="text-link" href="https://www.linkedin.com/in/muaztahir/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
          </div>
        </section>

        <section id="process" className="section process">
          <div className="section-heading"><div><p className="section-kicker">THE APPROACH</p><h2>Simple by design.</h2></div></div>
          <div className="process-grid">{process.map(([n,t,d]) => <div className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
        </section>

        <section id="contact" className="contact">
          <div><p className="section-kicker">HAVE A PROJECT IN MIND?</p><h2>Let's build<br /><em>something useful.</em></h2></div>
          <div className="contact-side"><p>Tell me what you're trying to build, what you already have, and where you're stuck.</p><a className="email" href="mailto:muazatwork@outlook.com">muazatwork@outlook.com <span>↗</span></a><a className="linkedin" href="https://www.linkedin.com/in/muaztahir/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Homelab Solutions</span><span>Build. Learn. Self-host.</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
