export const contact = {
  email: 'shivasaichavala777@gmail.com',
  phone: '+353899547315',
  phoneDisplay: '+353 89 954 7315',
  linkedin: 'https://www.linkedin.com/in/shivasaich/',
  github: 'https://github.com/SHIVASAI234',
  website: 'https://shivasaichavalaworkspace.lovable.app/',
}

export type Experience = {
  company: string
  short: string
  role: string
  period: string
  location: string
  category: string
  color: string
  summary: string
  achievements: string[]
}

export const experience: Experience[] = [
  {
    company: 'Bank of America', short: 'BofA', role: 'Operations Business Analyst · Financial Data Analyst',
    period: 'Mar 2026 — Present', location: 'Dublin, Ireland', category: 'Banking operations', color: 'blue',
    summary: 'Improving the controls, data and daily workflows behind financial operations. Contract via Adecco.',
    achievements: [
      'Cut recurring manual reconciliation effort by approximately 30% through rules-based checks and workflow automation.',
      'Investigate 40+ reconciliation breaks weekly, documenting root causes and closing them within SLA.',
      'Translate operational pain points into agreed automation requirements with technology and control teams.',
    ],
  },
  {
    company: 'State Street', short: 'SS', role: 'Associate 2 · Corporate actions & fund operations',
    period: 'May 2023 — May 2024', location: 'Hyderabad, India', category: 'Investment operations', color: 'navy',
    summary: 'Worked across corporate actions, reconciliations, reporting controls and fund accounting processes.',
    achievements: [
      'Processed and reconciled 1,200+ corporate action events on a $2B+ AUM portfolio with 99.8% accuracy.',
      'Traced cash and position breaks across custody, accounting and market data; cleared 98% within SLA.',
      'Maintained audit documentation and validated entitlements ahead of daily NAV cutoffs.',
    ],
  },
  {
    company: 'Growth Hack Solutions', short: 'GHS', role: 'Process Associate · Fund accounting & NAV production',
    period: 'Feb 2021 — Apr 2023', location: 'Hyderabad, India', category: 'Fund accounting', color: 'green',
    summary: 'Delivered the NAV lifecycle from pricing and accruals to reconciliations, review and sign-off.',
    achievements: [
      'Ran end-to-end NAV production for 10+ portfolios and reconciled cash, positions and trades across 50+ accounts.',
      'Built an Excel VBA NAV lifecycle tool that reduced manual data entry by approximately 40%.',
      'Prepared IFRS 13 fair value evidence and audit support at period end.',
    ],
  },
]

export type Project = {
  number: string
  name: string
  type: 'FinTech' | 'Applied AI' | 'Research' | 'Community'
  status: string
  description: string
  impact: string
  stack: string[]
  github?: string
  live?: string
  visual: string
}

export const projects: Project[] = [
  {
    number: '01', name: 'ReconEdge', type: 'FinTech', status: 'MVP · Open source',
    description: 'A reconciliation platform designed for the critical step between detecting a break and resolving it. Deterministic matching comes first; AI-assisted explanations stay tied to source data.',
    impact: 'Makes exception investigation more traceable and easier to prioritize.',
    stack: ['Reconciliation', 'AI-assisted analysis', 'Auditability'],
    github: 'https://github.com/SHIVASAI234/ReconEdge-',
    live: 'https://reconedge-demo.shivasaichavala777.chatgpt.site/', visual: 'recon',
  },
  {
    number: '02', name: 'BreakLens AI', type: 'Applied AI', status: 'Live app · Link pending',
    description: 'Exception management concept that matches expected and actual transactions, explains probable causes and scores financial, operational and SLA risk.',
    impact: 'Keeps human approval and an audit trail at the center of suggested next steps.',
    stack: ['LLMs', 'Risk scoring', 'Human approval'], visual: 'break',
  },
  {
    number: '03', name: 'Cloudera Enterprise AI Strategy', type: 'Research', status: 'MSc capstone',
    description: 'Four-person go-to-market research project across technology, finance, healthcare and supply chain, informed by 20 industry interviews and Python and SQL analysis.',
    impact: 'Received UCC Department of Business Information Systems’ Excellent Research and Analysis Award.',
    stack: ['Python', 'SQL', 'Primary research', 'Dashboard'], visual: 'cloudera',
  },
  {
    number: '04', name: 'Indo Irish Career Connect', type: 'Community', status: 'Founder-led',
    description: 'A career community and resource for international professionals in Ireland, with a site covering work-permit guidance and career discovery.',
    impact: 'Grew to 2,500+ members; recognised with an ISAI Best Community Contributor Award.',
    stack: ['Next.js', 'Community', 'CareerTech'], visual: 'iicc',
  },
  {
    number: '05', name: 'Fund Document Agent', type: 'Applied AI', status: 'In progress',
    description: 'A retrieval-based assistant for SEC 10-K filings and fund documents, designed to return answers with source citations.',
    impact: 'Currently building the EDGAR ingestion and document sectioning pipeline.',
    stack: ['Python', 'RAG', 'SEC EDGAR'], visual: 'document',
  },
  {
    number: '06', name: 'FinFlow', type: 'FinTech', status: 'Prototype',
    description: 'Fund accounting API concept with transactions entering through Kafka, a PostgreSQL ledger and Stripe payment events.',
    impact: 'Explores event-driven accounting workflows and transaction traceability.',
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Kafka'], visual: 'finflow',
  },
]

export type Credential = {
  name: string
  issuer: string
  date: string
  initials: string
  color: string
  verification?: string
}

export const credentials: Credential[] = [
  { name: 'Financial Modeling & Valuation Analyst (FMVA)', issuer: 'Corporate Finance Institute', date: '2026', initials: 'CFI', color: 'navy' },
  { name: 'CFA Investment Foundations® Certificate', issuer: 'CFA Institute', date: 'Date not listed in CV', initials: 'CFA', color: 'blue' },
  { name: 'FinTech Industry Professional', issuer: 'Corporate Finance Institute', date: 'Date not listed in CV', initials: 'CFI', color: 'navy' },
  { name: 'Bloomberg Market Concepts ESG', issuer: 'Bloomberg', date: 'Date not listed in CV', initials: 'B', color: 'black' },
  { name: 'Claude Certified Architect (Foundations)', issuer: 'Anthropic', date: 'Date not listed in CV', initials: 'A', color: 'sand' },
  { name: 'Agents and Workflows', issuer: 'OpenAI Academy', date: '2026', initials: 'OA', color: 'green' },
  { name: 'AI Upskilling Certificate', issuer: 'Qualcomm Academy', date: '2026', initials: 'Q', color: 'blue' },
  { name: 'Fundamentals of Data Transformation', issuer: 'MongoDB', date: '2026', initials: 'M', color: 'green' },
]

export const education = [
  { degree: 'MSc Information Systems for Business Performance', institution: 'University College Cork', period: '2024 — 2025', detail: 'Second Class Honours, Grade 1 · Excellent Research and Analysis Award' },
  { degree: 'MBA Finance', institution: 'Palamuru University', period: '2018 — 2020', detail: 'First Division · CGPA 8.22' },
  { degree: 'BCom Computer Applications', institution: 'Palamuru University', period: '2015 — 2018', detail: 'First Division' },
]

export const skillGroups = [
  { name: 'Financial operations', level: 'Applied professionally', skills: ['NAV production', 'Reconciliations', 'Corporate actions', 'Fund accounting', 'Audit controls'] },
  { name: 'Business analysis', level: 'Applied professionally', skills: ['Requirements', 'Process mapping', 'Root-cause analysis', 'Stakeholder alignment', 'Control reporting'] },
  { name: 'Data & databases', level: 'Applied professionally', skills: ['SQL', 'PostgreSQL', 'Power BI', 'Power Query', 'DAX', 'Tableau'] },
  { name: 'Programming languages', level: 'Building and applying', skills: ['Python', 'TypeScript', 'JavaScript', 'Excel VBA'] },
  { name: 'AI & machine learning', level: 'Building and applying', skills: ['LLM APIs', 'RAG', 'Prompt design', 'Structured outputs', 'Agent workflows'] },
  { name: 'Cloud technologies', level: 'Working knowledge', skills: ['Microsoft Azure', 'Snowflake · learning'] },
  { name: 'DevOps & delivery', level: 'Working knowledge', skills: ['Git', 'GitHub', 'Workflow automation', 'Zapier'] },
  { name: 'Cybersecurity & controls', level: 'Adjacent experience', skills: ['Audit trails', 'Human approval design', 'Data validation', 'Operational controls'] },
  { name: 'Networking', level: 'Learning area', skills: ['No dedicated networking specialization claimed'] },
  { name: 'Project management', level: 'Applied professionally', skills: ['Cross-team coordination', 'SLA ownership', 'Prioritization', 'Delivery planning'] },
]
