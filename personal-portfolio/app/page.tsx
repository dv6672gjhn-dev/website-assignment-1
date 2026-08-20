const portraitUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%2019%2C%202026%20at%2003_44_45%20PM-2cz0N8eTL815ELGMDgsDZPPZKTdR3X.png'

const experience = [
  ['Director', 'The Olive Tree Pvt. Ltd.', 'Jan 2026 – Present'],
  ['Partner', 'SkaylBix Networks Pvt. Ltd.', 'May 2025 – Present'],
  ['Partner', 'EcoVillage Adventures Pvt. Ltd.', 'Jul 2024 – Present'],
  ['Assistant Bursar', 'Society for Human Welfare and Education', 'Jul 2024 – Present'],
]

const education = [
  ['Bachelor of Commerce', 'Aligarh Muslim University', '2024-2028'],
  ['Bachelor of Business Administration (Digital Business & Entrepreneurship)', 'Indian Institute of Management (Bangalore)', '2024-2027'],
]

const skills = [
  ['Operational Management', 4],
  ['Financial Analysis & Advisory', 4],
  ['Process Coordination & Execution', 3],
  ['Ethical Judgement', 4],
  ['Crises Intervention', null],
]

const languages = [['English', 4], ['Hindi', 3], ['Urdu', 3]]

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}

function Rating({ value }: { value: number | null }) {
  return <span className="rating" aria-label={value ? `${value} out of 5` : 'Not rated'}>{value ? `${'●'.repeat(value)}${'○'.repeat(5 - value)}` : '—'}</span>
}

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#home" aria-label="Shah Mohammad Amaanul Haque home">SM</a>
        <nav id="site-nav" className="site-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow">Student · Self-Employed · Learner</p>
          <p className="hero-name">Shah Mohammad Amaanul Haque</p>
          <h1>Building a career around <em>curiosity, responsibility</em> and action.</h1>
          <p className="hero-summary">Results-driven professional with 2+ years of experience assisting with high-impact and long-term solutions in fast-paced environments. Adept at leading cross-functional teams, translating complex data into actionable strategy, and driving measurable growth. Passionate about innovation and building products that make a difference.</p>
          <div className="hero-actions"><a className="button button-primary" href="#experience">View my experience <span>↘</span></a><a className="button button-quiet" href="#contact">Contact me</a></div>
        </div>
        <div className="portrait-wrap"><img src={portraitUrl} alt="Professional portrait of Shah Mohammad Amaanul Haque" /><div className="portrait-caption"><span>Based in</span><strong>Aligarh, UP, India</strong></div></div>
      </section>

      <section id="about" className="section page-shell about-grid"><SectionHeading eyebrow="01 / Profile" title="A practical thinker with an entrepreneurial spirit." /><div className="about-content"><p className="lead">I enjoy working where strategy meets execution — making sense of information, coordinating people and processes, and helping ideas become useful outcomes.</p><p>My experience spans business leadership, financial coordination and self-employment. Alongside my studies, I am building a grounded understanding of how organizations grow and how thoughtful decisions create lasting value.</p><div className="contact-lines"><a href="mailto:amaanulhaque0571@gmail.com">amaanulhaque0571@gmail.com</a><a href="tel:+917302328420">+91 7302328420</a><a href="https://linkedin.com/in/shahamaan" target="_blank" rel="noreferrer">linkedin.com/in/shahamaan ↗</a></div></div></section>

      <section id="experience" className="section section-tinted"><div className="page-shell"><SectionHeading eyebrow="02 / Experience" title="Experience" /><div className="timeline">{experience.map(([role, company, period], index) => <article className="timeline-item" key={company}><span className="timeline-number">0{index + 1}</span><div><h3>{role}</h3><p className="company">{company}</p><p className="muted">Aligarh, UP, India</p></div><time>{period}</time></article>)}</div></div></section>

      <section id="education" className="section page-shell"><SectionHeading eyebrow="03 / Education" title="Education" /><div className="education-grid">{education.map(([degree, institution, period]) => <article className="education-card" key={institution}><span className="card-mark">↗</span><p className="muted">{period}</p><h3>{degree}</h3><p>{institution}</p></article>)}</div></section>

      <section id="skills" className="section section-dark"><div className="page-shell"><SectionHeading eyebrow="04 / Capabilities" title="Skills & tools" /><div className="skills-layout"><div className="skill-list">{skills.map(([name, rating]) => <div className="skill-row" key={name as string}><span>{name}</span><Rating value={rating as number | null} /></div>)}</div><div className="tools-block"><p className="eyebrow">Tools</p><div className="tag-list"><span>Google Sheets</span><span>Zoom / Google Meet</span></div><p className="eyebrow language-label">Languages</p>{languages.map(([name, rating]) => <div className="language-row" key={name as string}><span>{name}</span><Rating value={rating as number} /></div>)}</div></div></div></section>

      <section className="section page-shell interests-grid"><SectionHeading eyebrow="05 / Off the clock" title="Interests" /><div className="interest-list">{['Travelling', 'Photography', 'Reading'].map((interest, index) => <span key={interest}><b>0{index + 1}</b>{interest}</span>)}</div></section>

      <section id="contact" className="contact-section"><div className="page-shell contact-inner"><div><p className="eyebrow">06 / Contact</p><h2>Let&apos;s start a conversation.</h2></div><a className="button button-light" href="mailto:amaanulhaque0571@gmail.com">amaanulhaque0571@gmail.com <span>↗</span></a></div></section>

      <footer className="site-footer page-shell"><span>© 2026 Shah Mohammad Amaanul Haque</span><span>Student · Self-Employed · Learner</span></footer>
    </main>
  )
}
