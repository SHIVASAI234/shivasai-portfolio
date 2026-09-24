import { useState, type FormEvent, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Award, BriefcaseBusiness,
  Check, ChevronRight, CircleDot, Download, ExternalLink, Github, GraduationCap,
  Linkedin, Mail, Menu, MoveUpRight, Phone, Send, ShieldCheck, Sparkles, X,
} from 'lucide-react'
import { contact, credentials, education, experience, projects, skillGroups, type Project } from './data'

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`
const sections = [
  ['about', 'About'], ['founder', 'Founder'], ['experience', 'Experience'], ['work', 'Selected work'],
  ['skills', 'Expertise'], ['credentials', 'Credentials'], ['contact', 'Contact'],
] as const

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .62, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>
}

function SectionHeading({ number, eyebrow, title, description, inverse = false }: { number: string; eyebrow: string; title: ReactNode; description?: string; inverse?: boolean }) {
  return <Reveal className={`section-heading ${inverse ? 'inverse' : ''}`}>
    <div className="section-kicker"><span>{number}</span><span>{eyebrow}</span></div>
    <div className="section-title-row"><h2>{title}</h2>{description && <p>{description}</p>}</div>
  </Reveal>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="shell nav-inner">
        <a href="#top" className="brand" aria-label="Shivasai Chavala, home"><span className="brand-mark">SS<span className="brand-dot">.</span></span><span className="brand-name">SHIVASAI<br />CHAVALA</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{sections.slice(0, 6).map(([id, text]) => <a key={id} href={`#${id}`}>{text}</a>)}</nav>
        <a className="nav-contact" href="#contact">Let's connect <ArrowUpRight size={16} strokeWidth={2} /></a>
        <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">{sections.map(([id, text]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{text}<ArrowUpRight size={17} /></a>)}</nav>}
    </header>
  </>
}

function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <div className="shell hero-grid">
      <div className="hero-copy">
        <Reveal><span className="eyebrow"><span className="status-dot" /> DUBLIN, IRELAND <span className="eyebrow-line" /> FOUNDER × FINANCIAL DATA</span></Reveal>
        <Reveal delay={.06}><h1 id="hero-title">I turn financial<br />friction into<br /><em>working solutions.</em></h1></Reveal>
        <Reveal delay={.1}><p className="hero-intro">I’m <strong>Shivasai Chavala</strong> — a financial data analyst and founder building clearer systems for investment operations and better pathways for international talent.</p></Reveal>
        <Reveal delay={.15} className="hero-buttons">
          <a className="button button-dark" href={asset('Shivasai_Chavala_CV.docx')} download>Download CV <Download size={17} /></a>
          <a className="button button-outline" href="#contact">Contact me <ArrowUpRight size={17} /></a>
          <a className="icon-link" href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit Shivasai's LinkedIn profile"><Linkedin size={20} /></a>
        </Reveal>
        <Reveal delay={.22}><div className="hero-caption"><span className="caption-rule" /><span>FINANCE EXPERIENCE. FOUNDER'S DRIVE. WORKING PRODUCTS.</span></div></Reveal>
      </div>
      <Reveal delay={.1} className="hero-art">
        <div className="photo-backdrop"><div className="photo-corner" /><img src={asset('shivasai-chavala.webp')} alt="Portrait of Shivasai Chavala" width="850" height="1134" fetchPriority="high" /><span className="photo-label">SHIVASAI CHAVALA / 2026</span></div>
        <div className="floating-note"><div className="note-symbol"><Sparkles size={19} /></div><div><strong>Finance × Data × AI</strong><span>Turning complexity into clarity.</span></div></div>
        <div className="hero-art-index">01 / PORTFOLIO</div>
      </Reveal>
    </div>
    <div className="shell hero-bottom"><a href="#about" className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={16} /></a><span>OPEN TO MEANINGFUL COLLABORATION</span></div>
  </section>
}

function Metrics() {
  return <div className="metrics-wrap"><div className="shell metrics-grid" aria-label="Career highlights">
    <div><strong>4<span>~</span></strong><p>years across financial<br />operations & data</p></div>
    <div><strong>1,200<span>+</span></strong><p>corporate action<br />events processed</p></div>
    <div><strong>30<span>%</span></strong><p>less manual reconciliation<br />effort in current role</p></div>
    <div><strong>2,500<span>+</span></strong><p>members in a community<br />I founded</p></div>
  </div></div>
}

function About() {
  return <section className="section about-section" id="about">
    <div className="shell"><SectionHeading number="01" eyebrow="THE PERSON BEHIND THE WORK" title={<>Built around <span className="accent-italic">better questions.</span></>} />
      <div className="about-grid">
        <Reveal className="about-big"><p>I work where <strong>financial accuracy</strong>, <strong>operational reality</strong> and <strong>practical technology</strong> meet.</p><div className="about-decoration"><span>SS / 01</span><ArrowDownRight size={46} strokeWidth={1.1} /></div></Reveal>
        <Reveal className="about-details" delay={.08}><p>My background spans NAV production, corporate actions and reconciliations at Bank of America, State Street and Growth Hack Solutions. I’ve seen how small data breaks can become large operational problems — and how much time good controls can give back to a team.</p><p>Today I translate those problems into clearer processes, automation requirements and useful products. I’m building in financial AI, with a simple principle: decisions should stay explainable and people should stay in control.</p><div className="about-strengths"><span><CircleDot size={15} /> Finance domain fluency</span><span><CircleDot size={15} /> Analytical problem solving</span><span><CircleDot size={15} /> Builder mindset</span></div></Reveal>
      </div>
    </div>
  </section>
}

function Founder() {
  return <section className="founder-section" id="founder"><div className="shell founder-inner">
    <Reveal className="founder-lead"><div className="section-kicker"><span>02</span><span>FOUNDER'S NOTE</span></div><h2>Build close to<br /><em>the problem.</em></h2><p>Years inside financial operations showed me what a costly break looks like before it reaches a dashboard. Building a career community showed me how much talent gets lost when the path is unclear. I started building for both problems.</p><a href="#work" className="founder-link">Explore what I’m building <ArrowUpRight size={18} /></a></Reveal>
    <div className="founder-ventures" aria-label="Founder ventures">
      <Reveal delay={.06}><a href="https://github.com/SHIVASAI234/ReconEdge-" target="_blank" rel="noopener noreferrer" className="venture-row"><span>01 / FINTECH</span><strong>ReconEdge</strong><p>Traceable reconciliation, from matching to investigation.</p><ArrowUpRight size={20} /></a></Reveal>
      <Reveal delay={.1}><div className="venture-row"><span>02 / APPLIED AI</span><strong>BreakLens AI</strong><p>Risk-scored exception explanations with human approval.</p><ArrowUpRight size={20} /></div></Reveal>
      <Reveal delay={.14}><a href="#work" className="venture-row"><span>03 / CAREERTECH</span><strong>Indo Irish Career Connect</strong><p>A 2,500+ member community helping international talent move forward.</p><ArrowUpRight size={20} /></a></Reveal>
    </div>
  </div><div className="shell founder-principle"><span>THE PRINCIPLE</span><p>Useful technology starts with the people who live with the problem.</p><span>SS / SHIVASAI</span></div></section>
}

function BrandMark({ short, company, color }: { short: string; company: string; color: string }) {
  return <div className={`brand-tile brand-${color}`} role="img" aria-label={`${company} ${company === 'Bank of America' ? 'logo' : 'typographic mark'}`}>
    {company === 'Bank of America' ? <img src={asset('logo-bankofamerica.svg')} alt="" width="38" height="38" /> : <span>{short}</span>}
  </div>
}

function Experience() {
  return <section className="section experience-section" id="experience"><div className="shell">
    <SectionHeading number="03" eyebrow="WHERE I'VE MADE AN IMPACT" title={<>Experience that <span className="accent-italic">connects the dots.</span></>} description="A career grounded in the details of financial operations and the opportunities to improve them." />
    <div className="experience-list">{experience.map((job, i) => <Reveal className="experience-row" key={job.company} delay={i * .06}>
      <div className="timeline-col"><span className="timeline-point" /><span className="experience-count">0{i + 1} / 03</span><span className="timeline-period">{job.period}</span></div>
      <article className="experience-card"><div className="experience-top"><BrandMark short={job.short} company={job.company} color={job.color} /><div className="experience-org"><span className="small-label">{job.category} · {job.location}</span><h3>{job.company}</h3><p>{job.role}</p></div><ArrowUpRight className="experience-arrow" size={23} strokeWidth={1.5} /></div><p className="experience-summary">{job.summary}</p><ul>{job.achievements.map(item => <li key={item}>{item}</li>)}</ul></article>
    </Reveal>)}</div>
    <Reveal><p className="experience-aside"><BriefcaseBusiness size={16} /> Earlier experience also includes a customer service role at Circle K in Cork (Sep 2025 – Mar 2026).</p></Reveal>
  </div></section>
}

function ProjectVisual({ kind }: { kind: string }) {
  if (kind === 'recon') return <div className="visual-recon"><div className="visual-rail"><span>RECON / 001</span><span>● &nbsp; LIVE SYSTEM</span></div><div className="visual-title">Exception overview<span>↗</span></div><div className="visual-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="visual-dashboard"><div><small>OPEN BREAKS</small><strong>024</strong></div><div><small>MATCH RATE</small><strong>98.4%</strong></div></div></div>
  if (kind === 'break') return <div className="visual-break"><div className="radar-ring r1" /><div className="radar-ring r2" /><div className="radar-ring r3" /><div className="radar-dot" /><span className="visual-stamp">BREAKLENS / AI</span><span className="visual-cross">+</span></div>
  if (kind === 'cloudera') return <div className="visual-research"><span>RESEARCH / STRATEGY <img src={asset('logo-cloudera.svg')} alt="Cloudera logo" width="20" height="20" /></span><div className="research-orbit"><i /><i /><i /><i /></div><strong>20</strong><small>INDUSTRY INTERVIEWS</small></div>
  if (kind === 'iicc') return <div className="visual-community"><span>INDO IRISH<br />CAREER CONNECT</span><div className="community-rings"><i /><i /><i /></div><strong>2,500+</strong><small>PEOPLE CONNECTED</small></div>
  if (kind === 'document') return <div className="visual-document"><span>DOCUMENT / INTELLIGENCE</span><div className="doc-sheet"><i /><i /><i /><i /></div><div className="doc-answer">SOURCE → ANSWER <ArrowUpRight size={17} /></div></div>
  return <div className="visual-finflow"><span>FINFLOW / LEDGER</span><div className="flow-nodes"><i>API</i><ArrowRight size={20} /><i>EVENTS</i><ArrowRight size={20} /><i>LEDGER</i></div><small>TRACEABLE BY DESIGN</small></div>
}

function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card"><div className={`project-visual ${project.visual}`}><ProjectVisual kind={project.visual} /></div><div className="project-body"><div className="project-meta"><span>{project.number} / {project.type}</span><span>{project.status}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="impact"><span>THE POINT</span>{project.impact}</div><div className="project-bottom"><div className="stack-list">{project.stack.map(s => <span key={s}>{s}</span>)}</div><div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} GitHub repository`}><Github size={18} /></a>}{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} live demo`}><ExternalLink size={18} /></a>}</div></div></div></article>
}

function Work() {
  const filters = ['All', 'FinTech', 'Applied AI', 'Research', 'Community'] as const
  const [active, setActive] = useState<(typeof filters)[number]>('All')
  const visible = projects.filter(project => active === 'All' || project.type === active)
  return <section className="section work-section" id="work"><div className="shell">
    <SectionHeading number="04" eyebrow="IDEAS, MADE TANGIBLE" inverse title={<>Selected work. <span className="accent-italic">Real problems.</span></>} description="Products and research shaped by the everyday friction of finance and careers." />
    <div className="filter-row" role="group" aria-label="Filter projects">{filters.map(filter => <button key={filter} type="button" className={active === filter ? 'active' : ''} onClick={() => setActive(filter)} aria-pressed={active === filter}>{filter}</button>)}</div>
    <div className="project-grid">{visible.map(project => <Reveal key={project.name}><ProjectCard project={project} /></Reveal>)}</div>
    <div className="work-end"><span>EVERY PROJECT STARTS WITH A BETTER QUESTION.</span><a href={contact.github} target="_blank" rel="noopener noreferrer">Explore GitHub <ArrowUpRight size={18} /></a></div>
  </div></section>
}

function Skills() {
  return <section className="section skills-section" id="skills"><div className="shell">
    <SectionHeading number="05" eyebrow="WHAT I BRING TO THE TABLE" title={<>A toolkit with <span className="accent-italic">a purpose.</span></>} description="Depth in financial operations, with an expanding technical toolkit to turn insight into working systems." />
    <div className="skills-grid">{skillGroups.map((group, i) => <Reveal key={group.name} delay={(i % 3) * .045}><div className="skill-card"><div className="skill-head"><span className="skill-number">{String(i + 1).padStart(2, '0')}</span><ArrowUpRight size={17} strokeWidth={1.4} /></div><h3>{group.name}</h3><span className="skill-level"><i />{group.level}</span><div className="skill-tags">{group.skills.map(s => <span key={s}>{s}</span>)}</div></div></Reveal>)}</div>
    <p className="skills-note">Skill labels indicate how I use them, rather than self-assessed percentages. Cybersecurity and networking are not claimed as standalone specialties.</p>
  </div></section>
}

function Credentials() {
  return <section className="section credentials-section" id="credentials"><div className="shell">
    <SectionHeading number="06" eyebrow="CONTINUOUS LEARNING" title={<>The foundations behind <span className="accent-italic">the work.</span></>} />
    <div className="credential-layout"><div><div className="column-title"><Award size={20} /><h3>Certifications & learning</h3><span>{String(credentials.length).padStart(2, '0')}</span></div><div className="credential-list">{credentials.map(cred => {
      const logo = cred.issuer === 'Anthropic' ? 'anthropic' : cred.issuer === 'Qualcomm Academy' ? 'qualcomm' : cred.issuer === 'MongoDB' ? 'mongodb' : null
      return <div className="credential" key={cred.name}><div className={`credential-mark mark-${cred.color}`} aria-label={logo ? `${cred.issuer} logo` : `${cred.issuer} typographic mark`}>{logo ? <img src={asset(`logo-${logo}.svg`)} alt="" width="25" height="25" loading="lazy" /> : cred.initials}</div><div><strong>{cred.name}</strong><span>{cred.issuer} <span className="credential-separator">/</span> {cred.date}</span></div>{cred.verification && <a href={cred.verification} aria-label={`Verify ${cred.name}`} target="_blank" rel="noopener noreferrer"><ExternalLink size={17} /></a>}</div>
    })}</div><p className="credential-footnote">Brand marks are used where identifiable assets are available; other issuers use typographic marks. Credential IDs and verification links were not supplied.</p></div>
      <div className="education-column"><div className="column-title"><GraduationCap size={20} /><h3>Education</h3><span>03</span></div>{education.map(item => <div className="education-item" key={item.degree}><span>{item.period}</span><h4>{item.degree}</h4><p>{item.institution}</p><small>{item.detail}</small></div>)}<div className="learning-note"><ShieldCheck size={20} /><p><strong>Currently developing</strong><br />Financial risk (FRM Part I), risk and AI, and Microsoft Fabric data engineering — listed as learning goals, not earned credentials.</p></div></div></div>
  </div></section>
}

function Achievements() {
  return <section className="section achievements-section" aria-label="Recognition and leadership"><div className="shell"><div className="recognition-grid">
    <Reveal className="recognition-intro"><span className="small-label">BEYOND THE JOB TITLE / 07</span><h2>Building beyond<br /><em>the day job.</em></h2><p>I believe meaningful work also happens when you share knowledge, start communities and help other people find their next opportunity.</p></Reveal>
    <Reveal className="recognition-card"><div className="recognition-icon"><Award size={25} /></div><span>RECOGNITION / 01</span><h3>Excellent Research & Analysis</h3><p>University College Cork, Department of Business Information Systems · MSc capstone</p><ArrowUpRight size={20} /></Reveal>
    <Reveal className="recognition-card"><div className="recognition-icon"><Sparkles size={25} /></div><span>RECOGNITION / 02</span><h3>Best Community Contributor</h3><p>ISAI Career, Leadership and Cultural Summit 2026 · Indo Irish Career Connect</p><ArrowUpRight size={20} /></Reveal>
    <Reveal className="recognition-card"><div className="recognition-icon"><BriefcaseBusiness size={25} /></div><span>LEADERSHIP / 03</span><h3>Founder, Indo Irish Career Connect</h3><p>Created a career resource and 2,500+ member community for international professionals in Ireland.</p><ArrowUpRight size={20} /></Reveal>
  </div></div></section>
}

function Contact() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.reportValidity()) return
    const fields = new FormData(form)
    const name = String(fields.get('name') || '').trim()
    const email = String(fields.get('email') || '').trim()
    const message = String(fields.get('message') || '').trim()
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`From: ${name}\nReply to: ${email}\n\n${message}`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSent(true)
  }
  return <section className="contact-section" id="contact"><div className="shell"><div className="contact-grid">
    <div className="contact-copy"><div className="section-kicker"><span>08</span><span>LET'S TALK</span></div><h2>Good things start<br />with a <em>conversation.</em></h2><p>Recruiting for a finance or data role? Building a product in FinTech? Working on a problem worth solving? I’d be glad to hear from you.</p><div className="contact-methods"><a href={`mailto:${contact.email}`}><Mail size={19} /> {contact.email} <ArrowUpRight size={17} /></a><a href={`tel:${contact.phone}`}><Phone size={19} /> {contact.phoneDisplay} <ArrowUpRight size={17} /></a><a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={19} /> LinkedIn profile <ArrowUpRight size={17} /></a><a href={contact.github} target="_blank" rel="noopener noreferrer"><Github size={19} /> GitHub projects <ArrowUpRight size={17} /></a></div></div>
    <div className="contact-form-card"><div className="form-top"><span>START A CONVERSATION</span><MoveUpRight size={19} /></div><form onSubmit={onSubmit}><div className="field-pair"><label>Your name<input name="name" type="text" autoComplete="name" required maxLength={100} placeholder="Your name" /></label><label>Your email<input name="email" type="email" autoComplete="email" required maxLength={200} placeholder="you@company.com" /></label></div><label>Your message<textarea name="message" required minLength={10} maxLength={4000} rows={5} placeholder="Tell me a little about what you have in mind..." /></label><button type="submit" className="button button-lime">Open email draft <Send size={17} /></button><p className="form-note">This form opens your email app with a prepared message. No information is stored on this site.</p>{sent && <p role="status" className="form-status"><Check size={16} /> Email draft opened. Please send it from your email app.</p>}</form></div>
  </div><footer><div className="footer-top"><span className="footer-logo">SS<span>.</span></span><span>THOUGHTFUL FINANCE. USEFUL TECHNOLOGY.</span><a href="#top">BACK TO TOP <ArrowUpRight size={16} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SHIVASAI CHAVALA</span><span>DESIGNED WITH INTENTION · BUILT FOR THE WEB</span><div><a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={17} /></a><a href={contact.website} target="_blank" rel="noopener noreferrer" aria-label="Other professional website"><ChevronRight size={18} /></a></div></div></footer></div></section>
}

export default function App() {
  return <><Header /><main id="main"><Hero /><Metrics /><About /><Founder /><Experience /><Work /><Skills /><Credentials /><Achievements /><Contact /></main></>
}
