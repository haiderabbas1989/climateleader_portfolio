'use client';

// Client component holding the resume page's markup and styled-jsx CSS.
// Split from page.tsx because `export const metadata` requires a Server
// Component while `<style jsx>` requires a Client Component — the same
// server/client split already used by src/app/homepage/page.tsx +
// HomepageInteractive.tsx.

import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fraunces',
});
const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
});
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
});

export default function ResumeContent() {
  return (
    <div className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable} resume-page`}>
      <div className="hero">
        <div className="wrap hero-inner">
          <img
            className="photo"
            src="/assets/images/Haider_Profession_Photo-1769179858780.jpg"
            alt="Dr. Syed Haider Abbas Rizvi"
          />
          <div className="hero-text">
            <div className="eyebrow">Résumé</div>
            <h1>Dr. Syed Haider Abbas Rizvi</h1>
            <div className="role-line">
              Strategy &amp; Business Operations Leader — Applied Research to Commercial Execution
            </div>
            <div className="contact-row">
              <a href="mailto:haiderabbas1989@gmail.com">haiderabbas1989@gmail.com</a>
              <span>+91-9795119246</span>
              <a href="https://linkedin.com/in/-haiderabbas" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <span>Delhi NCR, India</span>
            </div>
          </div>
        </div>
        <div className="arc-wrap">
          <svg viewBox="0 0 920 60" preserveAspectRatio="none">
            <path d="M0,55 C 180,-10 380,-10 460,30 C 540,70 700,70 920,10 L920,60 L0,60 Z" fill="#F7F3EC" />
            <path
              d="M0,55 C 180,-10 380,-10 460,30 C 540,70 700,70 920,10"
              fill="none"
              stroke="#E8A33D"
              strokeWidth="2"
              opacity="0.55"
            />
          </svg>
        </div>
      </div>

      <div className="wrap">
        <section className="summary">
          <p>
            Strategy and operations leader with 4 years building and scaling Solarad AI, preceded by 6 years of
            industry-funded PhD research with ReNew Power — diagnosing a 10% power-loss problem for India&apos;s
            largest renewable energy company and leading a research programme generating USD 35M+ commercial
            impact. Grounded in a PhD in solar aerosol science from IIT Delhi, the approach starts with defining
            the problem rigorously, then building the framework to solve it.
          </p>
        </section>

        <section className="metrics">
          <div className="metrics-grid">
            {[
              ['USD 35M+', 'Research Impact'],
              ['6', 'Countries Scaled'],
              ['~10 GW', '100+ Plants Deployed'],
              ['0 → 40%', 'ME Revenue, 18 Months'],
              ['130%', 'Net Revenue Retention'],
              ['USD 450K', 'Seed Funding Raised'],
              ['11', 'Cross-Functional Team Built'],
              ['<10%', 'Annual Attrition'],
              ['5', 'Peer-Reviewed Papers'],
            ].map(([val, label]) => (
              <div className="metric" key={label}>
                <div className="metric-val">{val}</div>
                <div className="metric-label">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="timeline">
          <div className="head">
            <h2>Experience</h2>
            <div className="rule" />
          </div>

          <div className="job">
            <div className="job-title">
              Co-Founder &amp; Chief Operating Officer{' '}
              <span style={{ fontWeight: 400, color: 'var(--slate-light)' }}>(progressed to CEO, Apr 2025)</span>
            </div>
            <div className="job-org">Solarad AI</div>
            <div className="job-meta">Delhi NCR &amp; Middle East · Jul 2022 – Present</div>
            <ul>
              <li>Led Middle East market-entry strategy from the ground up — growing the region from 0% to 40% of company revenue within 18 months</li>
              <li>Built Solarad AI&apos;s full commercial operating system — GTM playbooks, delivery, and revenue-ops infrastructure — sustaining 90%+ renewal rates</li>
              <li>Owned P&amp;L and pricing strategy (+20% margin improvement); led fundraising to a close of USD 450K seed funding</li>
              <li>Built and led a cross-functional team of 11 across data science, engineering, and operations, sustaining under 10% annual attrition</li>
              <li>Primary escalation and governance owner across enterprise accounts including Masdar, ACWA Power, Tata Power, Adani Power, ReNew Power, and others</li>
            </ul>
          </div>

          <div className="job">
            <div className="job-title">Research Lead – Industry Partnerships</div>
            <div className="job-org">ReNew Power Centre of Excellence, IIT Delhi</div>
            <div className="job-meta">New Delhi · Jan 2021 – Jun 2022</div>
            <ul>
              <li>Identified the root cause of ~10% monthly power loss from dust deposition, directly informing client capital allocation decisions</li>
              <li>Delivered a research programme generating USD 350K impact per 100MW plant, 100% on-time</li>
            </ul>
          </div>

          <div className="job">
            <div className="job-title">Industry Research Programme Lead &amp; Laboratory Incharge</div>
            <div className="job-org">IIT Delhi</div>
            <div className="job-meta">New Delhi · Jan 2016 – Dec 2020</div>
            <ul>
              <li>Secured and led an industry-sponsored research collaboration with ReNew Power generating USD 35M+ commercial impact</li>
              <li>Built the Complex Fluid Laboratory from scratch within a USD 255K capital budget; led a team of 8</li>
            </ul>
          </div>

          <div className="job">
            <div className="job-title">Visiting Professor</div>
            <div className="job-org">Harcourt Butler Technological Institute</div>
            <div className="job-meta">Kanpur · Jul 2013 – Dec 2015</div>
            <ul>
              <li>Designed and delivered undergraduate chemical engineering curriculum; mentored 4 cohorts (40+ students)</li>
            </ul>
          </div>

          <div className="note">
            <strong>Also exploring:</strong> CredoCarbon, an early-stage carbon-credit concept, on a part-time
            basis — open to pursuing further if market traction strengthens.
          </div>
        </section>

        <section className="twocol">
          <div>
            <div className="head">
              <h2>Education</h2>
              <div className="rule" />
            </div>
            <div className="edu-item">
              <div className="edu-degree">Ph.D., Chemical Engineering</div>
              <div className="edu-inst">Indian Institute of Technology Delhi — GPA 8.2/10</div>
              <div className="edu-meta">2016 – 2022 · Solar Aerosol Science</div>
            </div>
            <div className="edu-item">
              <div className="edu-degree">M.Tech., Chemical Engineering</div>
              <div className="edu-inst">Harcourt Butler Technological Institute, Kanpur</div>
              <div className="edu-meta">2011 – 2013</div>
            </div>
            <div className="edu-item">
              <div className="edu-degree">B.Tech., Chemical Engineering</div>
              <div className="edu-inst">Harcourt Butler Technological Institute, Kanpur</div>
              <div className="edu-meta">2007 – 2011</div>
            </div>
          </div>
          <div>
            <div className="head">
              <h2>Research</h2>
              <div className="rule" />
            </div>
            <div className="pub"><span className="pub-journal">Energies</span> — 2024</div>
            <div className="pub"><span className="pub-journal">Journal of Quantitative Spectroscopy and Radiative Transfer</span> — 2024</div>
            <div className="pub"><span className="pub-journal">Urban Climate</span> — 2023</div>
            <div className="pub"><span className="pub-journal">Journal of Petroleum Science and Engineering</span> — 2022</div>
            <div className="pub"><span className="pub-journal">Energy &amp; Fuels</span> — 2021</div>
          </div>
        </section>

        <section>
          <div className="head">
            <h2>Leadership &amp; Recognition</h2>
            <div className="rule" />
          </div>
          <div className="pills">
            <div className="pill"><strong>President</strong> — PG Academic &amp; Co-Curricular Council, IIT Delhi (2019–20)</div>
            <div className="pill"><strong>Best Secretary Award</strong> — Board of Hostel Management, IIT Delhi (2018–19)</div>
            <div className="pill"><strong>Gold Medal</strong> — Inter-IIT Snooker Championship (2017)</div>
            <div className="pill"><strong>Gold Medal</strong> — Inter-school Badminton (2008)</div>
          </div>
        </section>
      </div>

      <footer>
        <div className="wrap">
          <div className="eyebrow" style={{ color: 'var(--amber-soft)' }}>
            Open to Strategy &amp; Business Operations, Solutions Consulting
          </div>
          <div className="contact-row">
            <a href="mailto:haiderabbas1989@gmail.com">haiderabbas1989@gmail.com</a>
            <span>+91-9795119246</span>
            <a href="https://linkedin.com/in/-haiderabbas" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <a className="btn" href="/assets/resume/dr-haider-rizvi-resume.pdf" download>
            Download Full Résumé (PDF)
          </a>
        </div>
      </footer>

      <style jsx>{`
        .resume-page {
          --ink: #14213d;
          --ink-soft: #1e2e52;
          --amber: #e8a33d;
          --amber-soft: #f4c878;
          --cream: #f7f3ec;
          --slate: #4a5568;
          --slate-light: #8390a3;
          --teal: #2f6f63;
          --line: #e4dfd3;
          --radius: 14px;
          --max: 920px;
          font-family: var(--font-plex-sans), sans-serif;
          background: var(--cream);
          color: var(--ink);
          line-height: 1.6;
        }
        .resume-page :global(a) {
          color: inherit;
        }
        .wrap {
          max-width: var(--max);
          margin: 0 auto;
          padding: 0 28px;
        }
        .hero {
          background: linear-gradient(160deg, var(--ink) 0%, var(--ink-soft) 100%);
          color: var(--cream);
          padding: 34px 0 0;
          position: relative;
          overflow: hidden;
        }
        .hero-inner {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          padding-bottom: 26px;
        }
        .hero-inner > .photo {
          margin-right: 32px;
        }
        .photo {
          width: 108px;
          height: 108px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--amber-soft);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
          flex-shrink: 0;
        }
        .hero-text {
          flex: 1;
          min-width: 260px;
        }
        .eyebrow {
          font-family: var(--font-plex-mono), monospace;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--amber-soft);
          margin-bottom: 10px;
        }
        h1 {
          font-family: var(--font-fraunces), serif;
          font-weight: 600;
          font-size: clamp(32px, 5vw, 46px);
          line-height: 1.08;
          letter-spacing: -0.01em;
          margin: 0;
        }
        .role-line {
          font-size: 18px;
          color: #d9deea;
          margin-top: 10px;
          font-weight: 500;
        }
        .contact-row {
          display: flex;
          flex-wrap: wrap;
          margin-top: 18px;
          font-family: var(--font-plex-mono), monospace;
          font-size: 12.5px;
          color: #b8c0d4;
        }
        .contact-row a,
        .contact-row span {
          margin-right: 18px;
          display: inline-block;
        }
        .contact-row a:hover {
          color: var(--amber-soft);
        }
        .arc-wrap {
          width: 100%;
          line-height: 0;
        }
        .arc-wrap svg {
          display: block;
          width: 100%;
          height: auto;
        }
        section {
          padding: 22px 0;
        }
        .summary {
          border-bottom: 1px solid var(--line);
        }
        .summary p {
          font-size: 16px;
          color: var(--slate);
          max-width: 760px;
        }
        .metrics {
          border-bottom: 1px solid var(--line);
        }
        .metrics-grid {
          display: flex;
          flex-wrap: wrap;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          overflow: hidden;
        }
        .metric {
          background: #fff;
          padding: 12px 18px;
          flex: 0 0 32%;
          box-sizing: border-box;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .metric-val {
          font-family: var(--font-plex-mono), monospace;
          font-weight: 600;
          font-size: 20px;
          color: var(--ink);
        }
        .metric-label {
          font-size: 11.5px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--slate-light);
          margin-top: 4px;
        }
        @media (max-width: 640px) {
          .metric {
            flex: 0 0 50%;
          }
        }
        .head {
          display: flex;
          align-items: baseline;
          margin-bottom: 20px;
        }
        .head h2 {
          font-family: var(--font-fraunces), serif;
          font-weight: 600;
          font-size: 22px;
          color: var(--ink);
          margin: 0 12px 0 0;
          white-space: nowrap;
        }
        .head .rule {
          flex: 1;
          height: 1px;
          background: var(--line);
        }
        .timeline {
          border-bottom: 1px solid var(--line);
        }
        .job {
          position: relative;
          padding-left: 28px;
          border-left: 2px solid var(--line);
          padding-bottom: 16px;
        }
        .job:last-child {
          padding-bottom: 0;
        }
        .job::before {
          content: '';
          position: absolute;
          left: -7px;
          top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--amber);
          border: 2px solid var(--cream);
        }
        .job-title {
          font-weight: 600;
          font-size: 16.5px;
          color: var(--ink);
        }
        .job-org {
          font-family: var(--font-plex-mono), monospace;
          font-size: 13px;
          color: var(--teal);
          margin-top: 2px;
        }
        .job-meta {
          font-size: 12.5px;
          color: var(--slate-light);
          margin-top: 2px;
        }
        .job ul {
          margin-top: 8px;
          padding-left: 18px;
          color: var(--slate);
          font-size: 13.5px;
        }
        .job li {
          margin-bottom: 4px;
        }
        .twocol {
          border-bottom: 1px solid var(--line);
        }
        .twocol::after {
          content: '';
          display: block;
          clear: both;
        }
        .twocol > div {
          float: left;
          width: 46%;
          box-sizing: border-box;
        }
        .twocol > div:first-child {
          margin-right: 4%;
        }
        @media (max-width: 720px) {
          .twocol > div {
            float: none;
            width: 100%;
            margin-right: 0;
          }
        }
        .edu-item {
          margin-bottom: 16px;
        }
        .edu-degree {
          font-weight: 600;
          font-size: 15px;
        }
        .edu-inst {
          color: var(--slate);
          font-size: 13.5px;
          margin-top: 2px;
        }
        .edu-meta {
          font-family: var(--font-plex-mono), monospace;
          font-size: 11.5px;
          color: var(--slate-light);
          margin-top: 3px;
        }
        .pub {
          font-size: 13.5px;
          color: var(--slate);
          padding: 10px 0;
          border-bottom: 1px dashed var(--line);
        }
        .pub:last-child {
          border-bottom: none;
        }
        .pub-journal {
          font-weight: 600;
          color: var(--ink);
        }
        .pills {
          display: flex;
          flex-wrap: wrap;
        }
        .pill {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 999px;
          padding: 9px 16px;
          font-size: 13px;
          margin: 0 8px 8px 0;
        }
        .pill :global(strong) {
          color: var(--teal);
        }
        .note {
          background: #fff;
          border: 1px dashed var(--slate-light);
          border-radius: var(--radius);
          padding: 16px 20px;
          font-size: 13.5px;
          color: var(--slate);
          margin-top: 36px;
        }
        .note :global(strong) {
          color: var(--ink);
        }
        footer {
          background: var(--ink);
          color: var(--cream);
          padding: 44px 0;
          text-align: center;
        }
        footer .contact-row {
          justify-content: center;
          margin-top: 14px;
        }
        .btn {
          display: inline-block;
          margin-top: 22px;
          background: var(--amber);
          color: var(--ink);
          font-weight: 600;
          font-size: 14px;
          padding: 12px 26px;
          border-radius: 999px;
          text-decoration: none;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(232, 163, 61, 0.35);
        }
      `}</style>
    </div>
  );
}
